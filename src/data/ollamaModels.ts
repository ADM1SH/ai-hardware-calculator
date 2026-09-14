export type ModelCategory = 'chat' | 'code' | 'vision' | 'reasoning' | 'embedding';

export interface ModelVariant {
    tag: string;
    label: string;
    paramsB: number;
    downloadSizeGb: number;
    vramQ4Gb: number;
    vramQ8Gb: number;
    vramFp16Gb: number;
    kvCachePer4kGb: number;
    defaultContext: number;
    isMoE?: boolean;
    activeParamsB?: number | null;
}

export interface OllamaModel {
    id: string;
    name: string;
    slug: string;
    description: string;
    category: ModelCategory;
    tags: string[];
    pullCount: string;
    updatedAt: string;
    variants: ModelVariant[];
}

export const OLLAMA_MODELS: OllamaModel[] = [
    {
        id: 'deepseek-r1',
        name: 'DeepSeek-R1',
        slug: 'deepseek-r1',
        description: 'First-generation reasoning models trained with large-scale reinforcement learning for complex multi-step logic and coding.',
        category: 'reasoning',
        tags: ['reasoning', 'math', 'code'],
        pullCount: '12.4M',
        updatedAt: '1 month ago',
        variants: [
            {
                tag: '1.5b',
                label: '1.5B',
                paramsB: 1.5,
                downloadSizeGb: 1.1,
                vramQ4Gb: 1.8,
                vramQ8Gb: 2.4,
                vramFp16Gb: 3.8,
                kvCachePer4kGb: 0.2,
                defaultContext: 32768
            },
            {
                tag: '7b',
                label: '7B',
                paramsB: 7.0,
                downloadSizeGb: 4.7,
                vramQ4Gb: 5.6,
                vramQ8Gb: 8.2,
                vramFp16Gb: 15.2,
                kvCachePer4kGb: 0.5,
                defaultContext: 32768
            },
            {
                tag: '8b',
                label: '8B',
                paramsB: 8.0,
                downloadSizeGb: 4.9,
                vramQ4Gb: 6.2,
                vramQ8Gb: 9.2,
                vramFp16Gb: 17.5,
                kvCachePer4kGb: 0.6,
                defaultContext: 32768
            },
            {
                tag: '14b',
                label: '14B',
                paramsB: 14.8,
                downloadSizeGb: 9.0,
                vramQ4Gb: 10.8,
                vramQ8Gb: 16.5,
                vramFp16Gb: 31.0,
                kvCachePer4kGb: 0.8,
                defaultContext: 32768
            },
            {
                tag: '32b',
                label: '32B',
                paramsB: 32.8,
                downloadSizeGb: 20.0,
                vramQ4Gb: 22.4,
                vramQ8Gb: 35.8,
                vramFp16Gb: 68.0,
                kvCachePer4kGb: 1.2,
                defaultContext: 32768
            },
            {
                tag: '70b',
                label: '70B',
                paramsB: 70.6,
                downloadSizeGb: 43.0,
                vramQ4Gb: 48.2,
                vramQ8Gb: 76.5,
                vramFp16Gb: 146.0,
                kvCachePer4kGb: 1.8,
                defaultContext: 32768
            }
        ]
    },
    {
        id: 'llama3.3',
        name: 'Llama 3.3',
        slug: 'llama3.3',
        description: 'Meta state-of-the-art 70B open weight foundation model with capabilities rivaling prior generation flagship models.',
        category: 'chat',
        tags: ['general', 'chat', 'multilingual'],
        pullCount: '9.8M',
        updatedAt: '2 months ago',
        variants: [
            {
                tag: '70b',
                label: '70B',
                paramsB: 70.6,
                downloadSizeGb: 43.0,
                vramQ4Gb: 48.0,
                vramQ8Gb: 76.0,
                vramFp16Gb: 145.0,
                kvCachePer4kGb: 1.8,
                defaultContext: 131072
            }
        ]
    },
    {
        id: 'llama3.2',
        name: 'Llama 3.2',
        slug: 'llama3.2',
        description: 'Lightweight and edge-optimized multilingual models from Meta, built for low-latency on-device processing and edge compute.',
        category: 'chat',
        tags: ['lightweight', 'on-device', 'fast'],
        pullCount: '15.2M',
        updatedAt: '3 months ago',
        variants: [
            {
                tag: '1b',
                label: '1B',
                paramsB: 1.2,
                downloadSizeGb: 1.3,
                vramQ4Gb: 1.6,
                vramQ8Gb: 2.1,
                vramFp16Gb: 3.2,
                kvCachePer4kGb: 0.2,
                defaultContext: 131072
            },
            {
                tag: '3b',
                label: '3B',
                paramsB: 3.2,
                downloadSizeGb: 2.0,
                vramQ4Gb: 2.8,
                vramQ8Gb: 4.1,
                vramFp16Gb: 7.2,
                kvCachePer4kGb: 0.35,
                defaultContext: 131072
            }
        ]
    },
    {
        id: 'llama3.2-vision',
        name: 'Llama 3.2 Vision',
        slug: 'llama3.2-vision',
        description: 'Multimodal vision models from Meta designed for visual reasoning, document understanding, OCR, and image-to-text workflows.',
        category: 'vision',
        tags: ['multimodal', 'vision', 'ocr'],
        pullCount: '4.1M',
        updatedAt: '3 months ago',
        variants: [
            {
                tag: '11b',
                label: '11B',
                paramsB: 11.0,
                downloadSizeGb: 7.9,
                vramQ4Gb: 9.4,
                vramQ8Gb: 13.8,
                vramFp16Gb: 24.5,
                kvCachePer4kGb: 0.9,
                defaultContext: 131072
            },
            {
                tag: '90b',
                label: '90B',
                paramsB: 90.0,
                downloadSizeGb: 55.0,
                vramQ4Gb: 61.5,
                vramQ8Gb: 98.0,
                vramFp16Gb: 188.0,
                kvCachePer4kGb: 2.2,
                defaultContext: 131072
            }
        ]
    },
    {
        id: 'qwen2.5',
        name: 'Qwen 2.5',
        slug: 'qwen2.5',
        description: 'Alibaba versatile open weight LLM supporting up to 128k context with high performance across math, multilingual tasks, and knowledge.',
        category: 'chat',
        tags: ['general', 'multilingual', 'math'],
        pullCount: '8.3M',
        updatedAt: '2 months ago',
        variants: [
            {
                tag: '0.5b',
                label: '0.5B',
                paramsB: 0.5,
                downloadSizeGb: 0.4,
                vramQ4Gb: 0.8,
                vramQ8Gb: 1.1,
                vramFp16Gb: 1.6,
                kvCachePer4kGb: 0.1,
                defaultContext: 32768
            },
            {
                tag: '1.5b',
                label: '1.5B',
                paramsB: 1.5,
                downloadSizeGb: 1.0,
                vramQ4Gb: 1.7,
                vramQ8Gb: 2.3,
                vramFp16Gb: 3.6,
                kvCachePer4kGb: 0.2,
                defaultContext: 32768
            },
            {
                tag: '3b',
                label: '3B',
                paramsB: 3.1,
                downloadSizeGb: 1.9,
                vramQ4Gb: 2.7,
                vramQ8Gb: 3.9,
                vramFp16Gb: 6.8,
                kvCachePer4kGb: 0.35,
                defaultContext: 32768
            },
            {
                tag: '7b',
                label: '7B',
                paramsB: 7.6,
                downloadSizeGb: 4.7,
                vramQ4Gb: 5.7,
                vramQ8Gb: 8.4,
                vramFp16Gb: 16.2,
                kvCachePer4kGb: 0.55,
                defaultContext: 131072
            },
            {
                tag: '14b',
                label: '14B',
                paramsB: 14.7,
                downloadSizeGb: 9.0,
                vramQ4Gb: 10.7,
                vramQ8Gb: 16.2,
                vramFp16Gb: 30.8,
                kvCachePer4kGb: 0.8,
                defaultContext: 131072
            },
            {
                tag: '32b',
                label: '32B',
                paramsB: 32.5,
                downloadSizeGb: 20.0,
                vramQ4Gb: 22.1,
                vramQ8Gb: 35.2,
                vramFp16Gb: 67.5,
                kvCachePer4kGb: 1.2,
                defaultContext: 131072
            },
            {
                tag: '72b',
                label: '72B',
                paramsB: 72.7,
                downloadSizeGb: 47.0,
                vramQ4Gb: 49.5,
                vramQ8Gb: 78.8,
                vramFp16Gb: 151.0,
                kvCachePer4kGb: 1.8,
                defaultContext: 131072
            }
        ]
    },
    {
        id: 'qwen2.5-coder',
        name: 'Qwen 2.5 Coder',
        slug: 'qwen2.5-coder',
        description: 'Specialized code intelligence models fine-tuned on trillions of code tokens with code repair, synthesis, and documentation abilities.',
        category: 'code',
        tags: ['code', 'engineering', 'autocomplete'],
        pullCount: '6.7M',
        updatedAt: '2 months ago',
        variants: [
            {
                tag: '1.5b',
                label: '1.5B',
                paramsB: 1.5,
                downloadSizeGb: 1.0,
                vramQ4Gb: 1.7,
                vramQ8Gb: 2.3,
                vramFp16Gb: 3.6,
                kvCachePer4kGb: 0.2,
                defaultContext: 32768
            },
            {
                tag: '7b',
                label: '7B',
                paramsB: 7.6,
                downloadSizeGb: 4.7,
                vramQ4Gb: 5.7,
                vramQ8Gb: 8.4,
                vramFp16Gb: 16.2,
                kvCachePer4kGb: 0.55,
                defaultContext: 131072
            },
            {
                tag: '14b',
                label: '14B',
                paramsB: 14.7,
                downloadSizeGb: 9.0,
                vramQ4Gb: 10.7,
                vramQ8Gb: 16.2,
                vramFp16Gb: 30.8,
                kvCachePer4kGb: 0.8,
                defaultContext: 131072
            },
            {
                tag: '32b',
                label: '32B',
                paramsB: 32.5,
                downloadSizeGb: 20.0,
                vramQ4Gb: 22.1,
                vramQ8Gb: 35.2,
                vramFp16Gb: 67.5,
                kvCachePer4kGb: 1.2,
                defaultContext: 131072
            }
        ]
    },
    {
        id: 'phi4',
        name: 'Phi-4',
        slug: 'phi4',
        description: 'Microsoft 14B state-of-the-art compact reasoning model achieving high benchmark parity with larger models via synthetic data curricula.',
        category: 'reasoning',
        tags: ['reasoning', 'compact', 'synthetic-data'],
        pullCount: '3.9M',
        updatedAt: '1 month ago',
        variants: [
            {
                tag: '14b',
                label: '14B',
                paramsB: 14.0,
                downloadSizeGb: 9.1,
                vramQ4Gb: 10.5,
                vramQ8Gb: 15.8,
                vramFp16Gb: 29.5,
                kvCachePer4kGb: 0.75,
                defaultContext: 16384
            }
        ]
    },
    {
        id: 'gemma2',
        name: 'Gemma 2',
        slug: 'gemma2',
        description: 'Google efficient and lightweight model family built on Gemini architecture, incorporating sliding window attention and logit soft-capping.',
        category: 'chat',
        tags: ['google', 'general', 'compact'],
        pullCount: '7.5M',
        updatedAt: '4 months ago',
        variants: [
            {
                tag: '2b',
                label: '2B',
                paramsB: 2.6,
                downloadSizeGb: 1.6,
                vramQ4Gb: 2.2,
                vramQ8Gb: 3.4,
                vramFp16Gb: 5.8,
                kvCachePer4kGb: 0.3,
                defaultContext: 8192
            },
            {
                tag: '9b',
                label: '9B',
                paramsB: 9.2,
                downloadSizeGb: 5.5,
                vramQ4Gb: 6.8,
                vramQ8Gb: 10.4,
                vramFp16Gb: 19.8,
                kvCachePer4kGb: 0.65,
                defaultContext: 8192
            },
            {
                tag: '27b',
                label: '27B',
                paramsB: 27.2,
                downloadSizeGb: 16.0,
                vramQ4Gb: 18.9,
                vramQ8Gb: 29.8,
                vramFp16Gb: 57.0,
                kvCachePer4kGb: 1.1,
                defaultContext: 8192
            }
        ]
    },
    {
        id: 'mistral-nemo',
        name: 'Mistral NeMo',
        slug: 'mistral-nemo',
        description: '12B model developed jointly by Mistral AI and NVIDIA, featuring the Tekken tokenizer and 128k context token support.',
        category: 'chat',
        tags: ['mistral', 'multilingual', 'large-context'],
        pullCount: '5.2M',
        updatedAt: '5 months ago',
        variants: [
            {
                tag: '12b',
                label: '12B',
                paramsB: 12.2,
                downloadSizeGb: 7.1,
                vramQ4Gb: 8.8,
                vramQ8Gb: 13.5,
                vramFp16Gb: 25.6,
                kvCachePer4kGb: 0.7,
                defaultContext: 131072
            }
        ]
    },
    {
        id: 'mistral',
        name: 'Mistral (7B-v0.3)',
        slug: 'mistral',
        description: 'The foundation 7B transformer model from Mistral AI with sliding window attention and native function calling support.',
        category: 'chat',
        tags: ['mistral', 'fast', 'general'],
        pullCount: '11.8M',
        updatedAt: '6 months ago',
        variants: [
            {
                tag: '7b',
                label: '7B',
                paramsB: 7.2,
                downloadSizeGb: 4.1,
                vramQ4Gb: 5.2,
                vramQ8Gb: 8.0,
                vramFp16Gb: 15.0,
                kvCachePer4kGb: 0.5,
                defaultContext: 32768
            }
        ]
    },
    {
        id: 'mixtral',
        name: 'Mixtral 8x7B',
        slug: 'mixtral',
        description: 'High-quality sparse mixture of experts model from Mistral AI with 46.7B total parameters and 12.9B active parameters per token.',
        category: 'chat',
        tags: ['moe', 'mistral', 'reasoning'],
        pullCount: '4.8M',
        updatedAt: '7 months ago',
        variants: [
            {
                tag: '8x7b',
                label: '8x7B',
                paramsB: 46.7,
                downloadSizeGb: 26.0,
                vramQ4Gb: 31.5,
                vramQ8Gb: 50.2,
                vramFp16Gb: 96.0,
                kvCachePer4kGb: 0.6,
                defaultContext: 32768,
                isMoE: true,
                activeParamsB: 12.9
            }
        ]
    },
    {
        id: 'llava',
        name: 'LLaVA',
        slug: 'llava',
        description: 'Large Language and Vision Assistant connecting CLIP vision encoder with Vicuna/Llama for general multimodal conversation.',
        category: 'vision',
        tags: ['vision', 'multimodal', 'image-chat'],
        pullCount: '5.9M',
        updatedAt: '6 months ago',
        variants: [
            {
                tag: '7b',
                label: '7B',
                paramsB: 7.0,
                downloadSizeGb: 4.7,
                vramQ4Gb: 5.8,
                vramQ8Gb: 8.5,
                vramFp16Gb: 15.8,
                kvCachePer4kGb: 0.5,
                defaultContext: 4096
            },
            {
                tag: '13b',
                label: '13B',
                paramsB: 13.0,
                downloadSizeGb: 8.0,
                vramQ4Gb: 9.9,
                vramQ8Gb: 15.0,
                vramFp16Gb: 28.5,
                kvCachePer4kGb: 0.75,
                defaultContext: 4096
            }
        ]
    },
    {
        id: 'codellama',
        name: 'Code Llama',
        slug: 'codellama',
        description: 'Meta foundational coding model trained on code-specific datasets, supporting Python, C++, Java, PHP, and Bash infilling.',
        category: 'code',
        tags: ['code', 'python', 'infilling'],
        pullCount: '7.1M',
        updatedAt: '8 months ago',
        variants: [
            {
                tag: '7b',
                label: '7B',
                paramsB: 7.0,
                downloadSizeGb: 3.8,
                vramQ4Gb: 5.1,
                vramQ8Gb: 7.8,
                vramFp16Gb: 14.8,
                kvCachePer4kGb: 0.5,
                defaultContext: 16384
            },
            {
                tag: '13b',
                label: '13B',
                paramsB: 13.0,
                downloadSizeGb: 7.4,
                vramQ4Gb: 9.3,
                vramQ8Gb: 14.2,
                vramFp16Gb: 27.2,
                kvCachePer4kGb: 0.75,
                defaultContext: 16384
            },
            {
                tag: '34b',
                label: '34B',
                paramsB: 34.0,
                downloadSizeGb: 19.0,
                vramQ4Gb: 23.5,
                vramQ8Gb: 37.0,
                vramFp16Gb: 71.0,
                kvCachePer4kGb: 1.3,
                defaultContext: 16384
            }
        ]
    },
    {
        id: 'starcoder2',
        name: 'StarCoder 2',
        slug: 'starcoder2',
        description: 'BigCode initiative code generation model trained on 600+ programming languages with permissively licensed data.',
        category: 'code',
        tags: ['code', 'permissive', 'polyglot'],
        pullCount: '2.1M',
        updatedAt: '7 months ago',
        variants: [
            {
                tag: '3b',
                label: '3B',
                paramsB: 3.0,
                downloadSizeGb: 1.7,
                vramQ4Gb: 2.5,
                vramQ8Gb: 3.7,
                vramFp16Gb: 6.5,
                kvCachePer4kGb: 0.3,
                defaultContext: 16384
            },
            {
                tag: '7b',
                label: '7B',
                paramsB: 7.0,
                downloadSizeGb: 4.0,
                vramQ4Gb: 5.4,
                vramQ8Gb: 8.1,
                vramFp16Gb: 15.2,
                kvCachePer4kGb: 0.5,
                defaultContext: 16384
            },
            {
                tag: '15b',
                label: '15B',
                paramsB: 15.0,
                downloadSizeGb: 9.1,
                vramQ4Gb: 11.2,
                vramQ8Gb: 17.0,
                vramFp16Gb: 32.0,
                kvCachePer4kGb: 0.85,
                defaultContext: 16384
            }
        ]
    },
    {
        id: 'command-r',
        name: 'Command R',
        slug: 'command-r',
        description: 'Cohere scalable 35B parameter LLM optimized for conversational interaction, retrieval augmented generation (RAG), and tool use.',
        category: 'chat',
        tags: ['rag', 'tools', 'enterprise'],
        pullCount: '1.9M',
        updatedAt: '8 months ago',
        variants: [
            {
                tag: '35b',
                label: '35B',
                paramsB: 35.0,
                downloadSizeGb: 20.0,
                vramQ4Gb: 24.0,
                vramQ8Gb: 38.0,
                vramFp16Gb: 73.0,
                kvCachePer4kGb: 1.3,
                defaultContext: 131072
            }
        ]
    },
    {
        id: 'moondream',
        name: 'Moondream 2',
        slug: 'moondream',
        description: 'Small vision language model (1.8B) engineered to run on mobile devices and edge hardware with low latency.',
        category: 'vision',
        tags: ['edge', 'vision', 'lightweight'],
        pullCount: '2.8M',
        updatedAt: '4 months ago',
        variants: [
            {
                tag: '1.8b',
                label: '1.8B',
                paramsB: 1.8,
                downloadSizeGb: 1.7,
                vramQ4Gb: 2.2,
                vramQ8Gb: 2.9,
                vramFp16Gb: 4.2,
                kvCachePer4kGb: 0.2,
                defaultContext: 2048
            }
        ]
    },
    {
        id: 'nomic-embed-text',
        name: 'Nomic Embed Text',
        slug: 'nomic-embed-text',
        description: 'High-performing open-source text embedding model supporting 8192 context window, outperforming OpenAI text-embedding-ada-002.',
        category: 'embedding',
        tags: ['embedding', 'rag', 'vector-search'],
        pullCount: '14.1M',
        updatedAt: '6 months ago',
        variants: [
            {
                tag: 'latest',
                label: '137M',
                paramsB: 0.137,
                downloadSizeGb: 0.274,
                vramQ4Gb: 0.4,
                vramQ8Gb: 0.5,
                vramFp16Gb: 0.7,
                kvCachePer4kGb: 0.05,
                defaultContext: 8192
            }
        ]
    },
    {
        id: 'bge-m3',
        name: 'BGE-M3',
        slug: 'bge-m3',
        description: 'BAAI multi-lingual, multi-functionality, and multi-granularity embedding model supporting 100+ languages and 8192 token length.',
        category: 'embedding',
        tags: ['embedding', 'multilingual', 'dense-retrieval'],
        pullCount: '3.4M',
        updatedAt: '7 months ago',
        variants: [
            {
                tag: 'latest',
                label: '567M',
                paramsB: 0.567,
                downloadSizeGb: 1.2,
                vramQ4Gb: 0.9,
                vramQ8Gb: 1.2,
                vramFp16Gb: 1.8,
                kvCachePer4kGb: 0.1,
                defaultContext: 8192
            }
        ]
    },
    {
        id: 'smollm2',
        name: 'SmolLM 2',
        slug: 'smollm2',
        description: 'Hugging Face ultra-compact model family trained on curated synthetic datasets for edge devices and educational computing.',
        category: 'chat',
        tags: ['compact', 'edge', 'fast'],
        pullCount: '1.2M',
        updatedAt: '3 months ago',
        variants: [
            {
                tag: '135m',
                label: '135M',
                paramsB: 0.135,
                downloadSizeGb: 0.1,
                vramQ4Gb: 0.3,
                vramQ8Gb: 0.4,
                vramFp16Gb: 0.6,
                kvCachePer4kGb: 0.05,
                defaultContext: 8192
            },
            {
                tag: '360m',
                label: '360M',
                paramsB: 0.36,
                downloadSizeGb: 0.25,
                vramQ4Gb: 0.6,
                vramQ8Gb: 0.8,
                vramFp16Gb: 1.1,
                kvCachePer4kGb: 0.1,
                defaultContext: 8192
            },
            {
                tag: '1.7b',
                label: '1.7B',
                paramsB: 1.7,
                downloadSizeGb: 1.1,
                vramQ4Gb: 1.8,
                vramQ8Gb: 2.5,
                vramFp16Gb: 3.9,
                kvCachePer4kGb: 0.25,
                defaultContext: 8192
            }
        ]
    },
    {
        id: 'deepseek-coder-v2',
        name: 'DeepSeek Coder V2',
        slug: 'deepseek-coder-v2',
        description: 'Open-source Mixture-of-Experts code model achieving competitive performance with GPT-4 Turbo in code generation and math.',
        category: 'code',
        tags: ['moe', 'code', 'math'],
        pullCount: '5.8M',
        updatedAt: '5 months ago',
        variants: [
            {
                tag: '16b',
                label: '16B (2.4B active)',
                paramsB: 15.7,
                downloadSizeGb: 8.9,
                vramQ4Gb: 10.2,
                vramQ8Gb: 16.0,
                vramFp16Gb: 31.5,
                kvCachePer4kGb: 0.8,
                defaultContext: 131072,
                isMoE: true,
                activeParamsB: 2.4
            },
            {
                tag: '236b',
                label: '236B (21B active)',
                paramsB: 236.0,
                downloadSizeGb: 133.0,
                vramQ4Gb: 145.0,
                vramQ8Gb: 245.0,
                vramFp16Gb: 480.0,
                kvCachePer4kGb: 3.2,
                defaultContext: 131072,
                isMoE: true,
                activeParamsB: 21.0
            }
        ]
    },
    {
        id: 'codestral',
        name: 'Codestral (22B)',
        slug: 'codestral',
        description: 'Mistral AI generative model explicitly designed for code generation tasks with 80+ programming languages supported.',
        category: 'code',
        tags: ['code', 'mistral', 'infilling'],
        pullCount: '4.2M',
        updatedAt: '4 months ago',
        variants: [
            {
                tag: '22b',
                label: '22B',
                paramsB: 22.2,
                downloadSizeGb: 12.0,
                vramQ4Gb: 14.8,
                vramQ8Gb: 23.5,
                vramFp16Gb: 45.0,
                kvCachePer4kGb: 1.0,
                defaultContext: 32768
            }
        ]
    },
    {
        id: 'command-r-plus',
        name: 'Command R+',
        slug: 'command-r-plus',
        description: 'Cohere 104B parameter model built for enterprise production workloads, multi-step tool use, and advanced RAG workflows.',
        category: 'chat',
        tags: ['enterprise', 'tools', 'rag'],
        pullCount: '1.4M',
        updatedAt: '7 months ago',
        variants: [
            {
                tag: '104b',
                label: '104B',
                paramsB: 104.0,
                downloadSizeGb: 59.0,
                vramQ4Gb: 68.0,
                vramQ8Gb: 112.0,
                vramFp16Gb: 215.0,
                kvCachePer4kGb: 2.4,
                defaultContext: 131072
            }
        ]
    },
    {
        id: 'granite3.1-dense',
        name: 'IBM Granite 3.1 Dense',
        slug: 'granite3.1-dense',
        description: 'IBM flagship enterprise workhorse models trained on 12 trillion tokens of curated enterprise and coding data.',
        category: 'chat',
        tags: ['ibm', 'enterprise', 'permissive'],
        pullCount: '2.1M',
        updatedAt: '2 months ago',
        variants: [
            {
                tag: '2b',
                label: '2B',
                paramsB: 2.5,
                downloadSizeGb: 1.5,
                vramQ4Gb: 2.1,
                vramQ8Gb: 3.2,
                vramFp16Gb: 5.4,
                kvCachePer4kGb: 0.25,
                defaultContext: 131072
            },
            {
                tag: '8b',
                label: '8B',
                paramsB: 8.2,
                downloadSizeGb: 4.9,
                vramQ4Gb: 6.2,
                vramQ8Gb: 9.3,
                vramFp16Gb: 17.6,
                kvCachePer4kGb: 0.6,
                defaultContext: 131072
            }
        ]
    },
    {
        id: 'aya-expanse',
        name: 'Aya Expanse',
        slug: 'aya-expanse',
        description: 'Cohere For AI massively multilingual model family covering 23 languages with balanced cross-lingual representation.',
        category: 'chat',
        tags: ['multilingual', 'cohere', 'research'],
        pullCount: '1.8M',
        updatedAt: '3 months ago',
        variants: [
            {
                tag: '8b',
                label: '8B',
                paramsB: 8.0,
                downloadSizeGb: 4.8,
                vramQ4Gb: 6.1,
                vramQ8Gb: 9.1,
                vramFp16Gb: 17.2,
                kvCachePer4kGb: 0.6,
                defaultContext: 8192
            },
            {
                tag: '32b',
                label: '32B',
                paramsB: 32.0,
                downloadSizeGb: 19.0,
                vramQ4Gb: 22.0,
                vramQ8Gb: 35.0,
                vramFp16Gb: 67.0,
                kvCachePer4kGb: 1.2,
                defaultContext: 8192
            }
        ]
    },
    {
        id: 'solar',
        name: 'Solar (10.7B)',
        slug: 'solar',
        description: 'Upstage compact LLM created with depth up-scaling (DUS) technique, offering high reasoning throughput on single-GPU hardware.',
        category: 'chat',
        tags: ['upstage', 'compact', 'dus'],
        pullCount: '2.5M',
        updatedAt: '8 months ago',
        variants: [
            {
                tag: '10.7b',
                label: '10.7B',
                paramsB: 10.7,
                downloadSizeGb: 6.1,
                vramQ4Gb: 7.8,
                vramQ8Gb: 12.0,
                vramFp16Gb: 22.5,
                kvCachePer4kGb: 0.65,
                defaultContext: 4096
            }
        ]
    }
];
