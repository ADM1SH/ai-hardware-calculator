import { ModelVariant, ModelCategory } from '../data/ollamaModels';
import { UnifiedModel, ModelFormatType } from '../data/unifiedModels';

export interface HuggingFaceModelRaw {
    _id?: string;
    id: string;
    likes?: number;
    downloads?: number;
    tags?: string[];
    createdAt?: string;
    pipeline_tag?: string;
}

// Regex to extract parameter sizes from Hugging Face model names
const PARAM_REGEX = /(?:^|[-_])(\d+(?:\.\d+)?)[bB](?:[-_]|$)/;
const MOE_REGEX = /(?:^|[-_])(\d+)x(\d+)[bB](?:[-_]|$)/;

export function parseParamsFromHfId(modelId: string): { paramsB: number; isMoE: boolean; activeParamsB?: number } {
    const name = modelId.split('/')[1] || modelId;

    const moeMatch = name.match(MOE_REGEX);
    if (moeMatch) {
        const experts = parseInt(moeMatch[1], 10);
        const expertSize = parseFloat(moeMatch[2]);
        const totalParams = experts * expertSize;
        return {
            paramsB: Number(totalParams.toFixed(1)),
            isMoE: true,
            activeParamsB: Number((expertSize * 2).toFixed(1))
        };
    }

    const paramMatch = name.match(PARAM_REGEX);
    if (paramMatch) {
        return {
            paramsB: parseFloat(paramMatch[1]),
            isMoE: false
        };
    }

    // Default fallback estimation
    return {
        paramsB: 7.0,
        isMoE: false
    };
}

export function inferCategoryFromTags(tags: string[] = [], modelId: string, pipelineTag: string = ''): ModelCategory {
    const combined = `${tags.join(' ')} ${modelId} ${pipelineTag}`.toLowerCase();
    if (combined.includes('vision') || combined.includes('multimodal') || combined.includes('image') || combined.includes('vl') || combined.includes('image-text')) return 'vision';
    if (combined.includes('coder') || combined.includes('code') || combined.includes('starcoder') || combined.includes('dev')) return 'code';
    if (combined.includes('reasoning') || combined.includes('r1') || combined.includes('math') || combined.includes('logic')) return 'reasoning';
    if (combined.includes('embed') || combined.includes('bge') || combined.includes('sentence') || combined.includes('vector') || combined.includes('feature-extraction')) return 'embedding';
    return 'chat';
}

export function inferFormatsFromModel(name: string, tags: string[] = []): ModelFormatType[] {
    const fmts = new Set<ModelFormatType>();
    const comb = `${name} ${tags.join(' ')}`.toLowerCase();
    if (comb.includes('gguf')) fmts.add('gguf');
    if (comb.includes('mlx')) fmts.add('mlx');
    if (comb.includes('awq')) fmts.add('awq');
    if (comb.includes('gptq')) fmts.add('gptq');
    if (fmts.size === 0 || comb.includes('safetensors')) fmts.add('safetensors');
    return Array.from(fmts);
}

export function convertHfModelToOllamaModel(raw: HuggingFaceModelRaw): UnifiedModel {
    const { paramsB, isMoE, activeParamsB } = parseParamsFromHfId(raw.id);
    const category = inferCategoryFromTags(raw.tags, raw.id, raw.pipeline_tag);
    const formats = inferFormatsFromModel(raw.id, raw.tags);

    // Memory footprint heuristics based on parameter count
    const vramQ4 = Number((paramsB * 0.65 + 0.8).toFixed(1));
    const vramQ8 = Number((paramsB * 1.1 + 0.9).toFixed(1));
    const vramFp16 = Number((paramsB * 2.1 + 1.0).toFixed(1));
    const downloadSize = Number((paramsB * 0.6 + 0.4).toFixed(1));
    const kvCache = Number(Math.max(0.15, paramsB * 0.05).toFixed(2));

    const variant: ModelVariant = {
        tag: 'default',
        label: `${paramsB}B`,
        paramsB,
        downloadSizeGb: downloadSize,
        vramQ4Gb: vramQ4,
        vramQ8Gb: vramQ8,
        vramFp16Gb: vramFp16,
        kvCachePer4kGb: kvCache,
        defaultContext: 32768,
        isMoE,
        activeParamsB
    };

    const downloadCount = raw.downloads || 0;
    let formattedDownloads = `${downloadCount}`;
    if (downloadCount >= 1_000_000) {
        formattedDownloads = `${(downloadCount / 1_000_000).toFixed(1)}M`;
    } else if (downloadCount >= 1_000) {
        formattedDownloads = `${(downloadCount / 1_000).toFixed(1)}K`;
    }

    const shortName = raw.id.split('/')[1] || raw.id;
    const author = raw.id.split('/')[0] || 'Community';

    return {
        id: `hf-${raw.id.replace('/', '-')}`,
        name: shortName,
        slug: `hf.co/${raw.id}`,
        description: `Hugging Face repository by ${author}. Supported formats: ${formats.map(f => f.toUpperCase()).join(', ')}.`,
        category,
        tags: (raw.tags || []).slice(0, 4),
        pullCount: `${formattedDownloads} downloads`,
        updatedAt: raw.createdAt ? new Date(raw.createdAt).toLocaleDateString() : 'Active',
        sources: ['huggingface'],
        hfRepo: raw.id,
        formats,
        variants: [variant]
    };
}

export async function fetchHuggingFaceModels(
    searchQuery: string = '',
    limit: number = 30,
    page: number = 0
): Promise<UnifiedModel[]> {
    const baseUrl = 'https://huggingface.co/api/models';
    const params = new URLSearchParams({
        sort: searchQuery ? 'likes' : 'downloads',
        direction: '-1',
        limit: String(limit)
    });

    if (searchQuery.trim()) {
        params.set('search', searchQuery.trim());
    } else {
        params.set('pipeline_tag', 'text-generation');
    }

    if (page > 0) {
        params.set('skip', String(page * limit));
    }

    const res = await fetch(`${baseUrl}?${params.toString()}`);
    if (!res.ok) {
        throw new Error(`Hugging Face API error: ${res.status} ${res.statusText}`);
    }

    const list: HuggingFaceModelRaw[] = await res.json();
    return list.map(convertHfModelToOllamaModel);
}

export async function inspectCustomModel(inputString: string): Promise<UnifiedModel> {
    let clean = inputString.trim();

    // Clean up Hugging Face URLs
    if (clean.includes('huggingface.co/')) {
        const parts = clean.split('huggingface.co/')[1].split('/');
        if (parts.length >= 2) {
            clean = `${parts[0]}/${parts[1]}`.replace(/[?#].*$/, '');
        }
    }

    // Try direct repo fetch first
    if (clean.includes('/')) {
        try {
            const res = await fetch(`https://huggingface.co/api/models/${clean}`);
            if (res.ok) {
                const data: HuggingFaceModelRaw = await res.json();
                return convertHfModelToOllamaModel(data);
            }
        } catch {
            // Fall through to search query
        }
    }

    // Search query fallback
    const searchRes = await fetch(`https://huggingface.co/api/models?search=${encodeURIComponent(clean)}&limit=1`);
    if (!searchRes.ok) {
        throw new Error(`Model inspection failed: ${searchRes.statusText}`);
    }
    const searchData: HuggingFaceModelRaw[] = await searchRes.json();
    if (!searchData || searchData.length === 0) {
        throw new Error(`No matching model found for: ${clean}`);
    }

    return convertHfModelToOllamaModel(searchData[0]);
}
