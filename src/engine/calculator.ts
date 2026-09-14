import { ModelVariant, OllamaModel } from '../data/ollamaModels';
import { SystemHardware } from './detector';

export type QuantizationTier =
    | 'Q2_K'
    | 'Q3_K_M'
    | 'Q4_K_M'
    | 'Q5_K_M'
    | 'Q6_K'
    | 'Q8_0'
    | 'FP8'
    | 'FP16';

export interface QuantizationMeta {
    id: QuantizationTier;
    label: string;
    shortLabel: string;
    bpw: number;
    description: string;
}

export const QUANTIZATION_TIERS: QuantizationMeta[] = [
    { id: 'Q2_K', label: 'Q2_K (2.6 bpw)', shortLabel: 'Q2_K', bpw: 2.6, description: 'Extreme Low VRAM' },
    { id: 'Q3_K_M', label: 'Q3_K_M (3.4 bpw)', shortLabel: 'Q3_K', bpw: 3.4, description: 'Low VRAM' },
    { id: 'Q4_K_M', label: 'Q4_K_M (4.5 bpw)', shortLabel: 'Q4_K', bpw: 4.5, description: 'Sweet Spot (Standard)' },
    { id: 'Q5_K_M', label: 'Q5_K_M (5.5 bpw)', shortLabel: 'Q5_K', bpw: 5.5, description: 'High Fidelity' },
    { id: 'Q6_K', label: 'Q6_K (6.6 bpw)', shortLabel: 'Q6_K', bpw: 6.6, description: 'Near Lossless' },
    { id: 'Q8_0', label: 'Q8_0 (8.5 bpw)', shortLabel: 'Q8_0', bpw: 8.5, description: '8-bit Reference' },
    { id: 'FP8', label: 'FP8 (8.0 bpw)', shortLabel: 'FP8', bpw: 8.0, description: 'Hopper/Ada Native' },
    { id: 'FP16', label: 'FP16 (16.0 bpw)', shortLabel: 'FP16', bpw: 16.0, description: 'Unquantized Half' }
];

export type CompatibilityStatus = 'runs-well' | 'cpu-offload' | 'insufficient';

export interface ModelCalculation {
    model: OllamaModel;
    selectedVariant: ModelVariant;
    quantization: QuantizationTier;
    contextTokens: number;
    weightsGb: number;
    kvCacheGb: number;
    totalMemoryRequiredGb: number;
    availableVramGb: number;
    usableMemoryGb: number;
    vramUsagePercent: number;
    status: CompatibilityStatus;
    statusLabel: string;
    offloadPercent: number;
    estimatedTokensPerSec: number;
    pullCommand: string;
}

export function calculateModelCompatibility(
    model: OllamaModel,
    variant: ModelVariant,
    hardware: SystemHardware,
    quantization: QuantizationTier = 'Q4_K_M',
    contextTokens: number = 8192
): ModelCalculation {
    // 1. Determine weights size across 8 precision tiers
    let weightsGb = variant.vramQ4Gb;
    switch (quantization) {
        case 'Q2_K':
            weightsGb = Number((variant.paramsB * 0.42 + 0.4).toFixed(2));
            break;
        case 'Q3_K_M':
            weightsGb = Number((variant.paramsB * 0.52 + 0.5).toFixed(2));
            break;
        case 'Q4_K_M':
            weightsGb = variant.vramQ4Gb;
            break;
        case 'Q5_K_M':
            weightsGb = Number((variant.paramsB * 0.78 + 0.6).toFixed(2));
            break;
        case 'Q6_K':
            weightsGb = Number((variant.paramsB * 0.92 + 0.7).toFixed(2));
            break;
        case 'Q8_0':
            weightsGb = variant.vramQ8Gb;
            break;
        case 'FP8':
            weightsGb = Number((variant.paramsB * 1.05 + 0.8).toFixed(2));
            break;
        case 'FP16':
            weightsGb = variant.vramFp16Gb;
            break;
    }

    // 2. Determine KV cache size for given context length
    let kvMultiplier = 1.0;
    if (quantization === 'FP16') {
        kvMultiplier = 2.0;
    } else if (quantization === 'Q8_0' || quantization === 'FP8') {
        kvMultiplier = 1.4;
    } else if (quantization === 'Q5_K_M' || quantization === 'Q6_K') {
        kvMultiplier = 1.2;
    } else {
        kvMultiplier = 1.0;
    }
    const kvCacheGb = Math.max(0.1, Number(((contextTokens / 4096) * variant.kvCachePer4kGb * kvMultiplier).toFixed(2)));

    // Total required memory with 0.4 GB runtime framework buffer
    const totalMemoryRequiredGb = Number((weightsGb + kvCacheGb + 0.4).toFixed(2));

    // 3. Compute available hardware headroom
    let availableVramGb = hardware.vramGb;
    let usableMemoryGb = hardware.vramGb;

    if (hardware.isUnifiedMemory) {
        // macOS default metal allocation cap is ~75% of unified memory
        availableVramGb = Number((hardware.ramGb * 0.75).toFixed(1));
        usableMemoryGb = Number((hardware.ramGb * 0.85).toFixed(1));
    } else {
        // Dedicated GPU: VRAM for GPU inference, system RAM for CPU offload
        usableMemoryGb = Number((hardware.vramGb + (hardware.ramGb * 0.7)).toFixed(1));
    }

    // 4. Compatibility Tier and Offload ratio
    let status: CompatibilityStatus = 'runs-well';
    let statusLabel = 'Runs Well';
    let offloadPercent = 0;

    if (totalMemoryRequiredGb <= availableVramGb) {
        status = 'runs-well';
        statusLabel = 'Runs Well';
        offloadPercent = 0;
    } else if (totalMemoryRequiredGb <= usableMemoryGb) {
        status = 'cpu-offload';
        statusLabel = 'CPU Offload';
        const overflow = totalMemoryRequiredGb - availableVramGb;
        offloadPercent = Math.min(100, Math.round((overflow / totalMemoryRequiredGb) * 100));
    } else {
        status = 'insufficient';
        statusLabel = 'Insufficient Memory';
        offloadPercent = 100;
    }

    const vramUsagePercent = Math.min(100, Math.round((totalMemoryRequiredGb / availableVramGb) * 100));

    // 5. Estimate tokens per second based on memory bandwidth
    const activeParamsGb = variant.isMoE && variant.activeParamsB
        ? weightsGb * (variant.activeParamsB / variant.paramsB)
        : weightsGb;

    let estimatedTokensPerSec = 0;
    const efficiency = 0.52; // Real-world memory bus utilization efficiency

    if (status === 'runs-well') {
        // Full GPU memory bandwidth
        estimatedTokensPerSec = Math.max(1, Math.round((hardware.bandwidthGBs * efficiency) / activeParamsGb));
    } else if (status === 'cpu-offload') {
        // Blended bandwidth between GPU and DDR system RAM (~50 GB/s)
        const cpuBandwidth = hardware.isUnifiedMemory ? hardware.bandwidthGBs * 0.45 : 55;
        const gpuWeight = 1 - (offloadPercent / 100);
        const cpuWeight = offloadPercent / 100;
        const blendedBandwidth = (hardware.bandwidthGBs * gpuWeight) + (cpuBandwidth * cpuWeight);
        estimatedTokensPerSec = Math.max(1, Math.round((blendedBandwidth * 0.42) / activeParamsGb));
    } else {
        estimatedTokensPerSec = 0;
    }

    // 6. Generate exact Ollama run command
    const pullCommand = `ollama run ${model.slug}:${variant.tag}`;

    return {
        model,
        selectedVariant: variant,
        quantization,
        contextTokens,
        weightsGb,
        kvCacheGb: Number(kvCacheGb.toFixed(2)),
        totalMemoryRequiredGb,
        availableVramGb,
        usableMemoryGb,
        vramUsagePercent,
        status,
        statusLabel,
        offloadPercent,
        estimatedTokensPerSec,
        pullCommand
    };
}
