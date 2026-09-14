import React, { useState } from 'react';
import { UnifiedModel } from '../data/unifiedModels';
import { ModelCalculation, QuantizationTier, calculateModelCompatibility, QUANTIZATION_TIERS } from '../engine/calculator';
import { SystemHardware } from '../engine/detector';

interface ModelCardProps {
    model: UnifiedModel;
    hardware: SystemHardware;
    quantization: QuantizationTier;
    contextTokens: number;
    isLocallyInstalled?: boolean;
}

export const ModelCard: React.FC<ModelCardProps> = ({
    model,
    hardware,
    quantization,
    contextTokens,
    isLocallyInstalled = false
}) => {
    // Default to the largest variant running well, or the first variant
    const [selectedVariantTag, setSelectedVariantTag] = useState<string>(() => {
        for (let i = model.variants.length - 1; i >= 0; i--) {
            const v = model.variants[i];
            const calc = calculateModelCompatibility(model, v, hardware, quantization, contextTokens);
            if (calc.status === 'runs-well') {
                return v.tag;
            }
        }
        return model.variants[0].tag;
    });

    const [copied, setCopied] = useState(false);

    const currentVariant = model.variants.find(v => v.tag === selectedVariantTag) || model.variants[0];
    const calc: ModelCalculation = calculateModelCompatibility(
        model,
        currentVariant,
        hardware,
        quantization,
        contextTokens
    );

    const isHfOnly = model.sources.includes('huggingface') && !model.sources.includes('ollama');
    const hasBoth = model.sources.includes('huggingface') && model.sources.includes('ollama');
    const isMlx = model.formats?.includes('mlx');
    const isGguf = model.formats?.includes('gguf') || model.sources.includes('ollama');

    // Determine execution command based on hardware and supported formats
    let pullCommand: string;
    if (hardware.isAppleSilicon && isMlx) {
        pullCommand = `mlx_lm.generate --model ${model.hfRepo || model.slug}`;
    } else if (isGguf) {
        pullCommand = model.ollamaSlug
            ? `ollama run ${model.ollamaSlug}:${currentVariant.tag}`
            : `ollama run ${model.slug}`;
    } else if (model.hfRepo) {
        pullCommand = `vllm serve ${model.hfRepo}`;
    } else {
        pullCommand = `ollama run ${model.slug}`;
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(pullCommand);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard fallback
        }
    };

    // Calculate memory gauge bar percentages
    const totalAvail = hardware.isUnifiedMemory ? hardware.ramGb * 0.75 : hardware.vramGb;
    const weightsPercent = Math.min(100, (calc.weightsGb / totalAvail) * 100);
    const kvPercent = Math.min(100 - weightsPercent, (calc.kvCacheGb / totalAvail) * 100);
    const isOverflow = calc.totalMemoryRequiredGb > totalAvail;

    return (
        <article className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col justify-between hover:border-outline transition-colors">
            <div>
                {/* Header: Title, source badges, format badges, local badge */}
                <div className="flex items-start justify-between gap-sm mb-xs">
                    <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-xs flex-wrap mb-1">
                            <h3 className="title-sm font-semibold text-on-surface truncate">
                                {model.name}
                            </h3>

                            {hasBoth ? (
                                <span className="label-caps px-xs py-0.5 rounded-sm bg-surface-container-high text-on-surface">
                                    OLLAMA + HF
                                </span>
                            ) : isHfOnly ? (
                                <span className="label-caps px-xs py-0.5 rounded-sm bg-surface-container-high text-on-surface-variant">
                                    HF.CO
                                </span>
                            ) : (
                                <span className="label-caps px-xs py-0.5 rounded-sm bg-surface-container-low text-on-surface-variant">
                                    OLLAMA
                                </span>
                            )}

                            {model.formats && model.formats.map(fmt => (
                                <span
                                    key={fmt}
                                    className="label-caps px-xs py-0.5 rounded-sm bg-surface-container text-on-surface-variant font-mono"
                                >
                                    {fmt.toUpperCase()}
                                </span>
                            ))}

                            {isLocallyInstalled && (
                                <span className="label-caps px-xs py-0.5 rounded-sm bg-primary-container text-on-primary-container">
                                    PULLED
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-xs text-[11px] font-mono text-on-surface-variant">
                            <span>{model.pullCount}</span>
                            <span>•</span>
                            {model.hfRepo ? (
                                <a
                                    href={`https://huggingface.co/${model.hfRepo}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-primary hover:underline truncate"
                                >
                                    view repository ↗
                                </a>
                            ) : (
                                <span>{model.updatedAt}</span>
                            )}
                        </div>
                    </div>

                    {/* Status Chip conforming to DESIGN.md */}
                    <div>
                        {calc.status === 'runs-well' && (
                            <span className="label-caps px-sm py-1 rounded-sm bg-success-container text-on-success-container inline-block whitespace-nowrap">
                                RUNS WELL • ~{calc.estimatedTokensPerSec} T/S
                            </span>
                        )}
                        {calc.status === 'cpu-offload' && (
                            <span className="label-caps px-sm py-1 rounded-sm bg-warning-container text-on-warning-container inline-block whitespace-nowrap">
                                CPU OFFLOAD ({calc.offloadPercent}%) • ~{calc.estimatedTokensPerSec} T/S
                            </span>
                        )}
                        {calc.status === 'insufficient' && (
                            <span className="label-caps px-sm py-1 rounded-sm bg-error-container text-on-error-container inline-block whitespace-nowrap">
                                INSUFFICIENT VRAM (+{(calc.totalMemoryRequiredGb - totalAvail).toFixed(1)} GB)
                            </span>
                        )}
                    </div>
                </div>

                {/* Model description */}
                <p className="body-md text-on-surface-variant line-clamp-2 mb-md">
                    {model.description}
                </p>

                {/* Parameter Variants Switcher */}
                <div className="mb-md">
                    <span className="label-caps text-on-surface-variant block mb-1.5">
                        SELECT PARAMETER SIZE ({currentVariant.paramsB}B PARAMS • {currentVariant.downloadSizeGb} GB FILE)
                    </span>
                    <div className="flex flex-wrap gap-xs">
                        {model.variants.map(variant => {
                            const isSelected = variant.tag === currentVariant.tag;
                            const variantCalc = calculateModelCompatibility(model, variant, hardware, quantization, contextTokens);

                            let dotColor = 'bg-success';
                            if (variantCalc.status === 'cpu-offload') dotColor = 'bg-warning';
                            if (variantCalc.status === 'insufficient') dotColor = 'bg-error';

                            return (
                                <button
                                    key={variant.tag}
                                    type="button"
                                    onClick={() => setSelectedVariantTag(variant.tag)}
                                    className={`px-sm py-1 rounded text-xs font-mono flex items-center gap-1.5 border transition-all ${
                                        isSelected
                                            ? 'bg-primary text-on-primary border-primary font-semibold'
                                            : 'bg-surface-container-low text-on-surface border-outline-variant hover:bg-surface-container'
                                    }`}
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-on-primary' : dotColor}`} />
                                    <span>{variant.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Memory Allocation Breakdown */}
                <div className="border border-outline-variant rounded p-sm bg-surface-container-low mb-md">
                    <div className="flex justify-between items-center text-xs mb-1">
                        <span className="label-caps text-on-surface-variant">
                            REQUIRED MEMORY ({QUANTIZATION_TIERS.find(q => q.id === quantization)?.shortLabel || quantization} • {QUANTIZATION_TIERS.find(q => q.id === quantization)?.bpw} BPW)
                        </span>
                        <span className="data-tabular font-semibold text-on-surface">
                            {calc.totalMemoryRequiredGb} GB / {totalAvail.toFixed(1)} GB
                        </span>
                    </div>

                    {/* Progress visualizer */}
                    <div className="w-full h-2 bg-surface-container-highest rounded-sm overflow-hidden flex mb-1.5">
                        <div
                            style={{ width: `${Math.min(100, weightsPercent)}%` }}
                            className={`h-full ${isOverflow ? 'bg-error' : 'bg-primary'}`}
                            title={`Weights: ${calc.weightsGb} GB`}
                        />
                        <div
                            style={{ width: `${Math.min(100 - weightsPercent, kvPercent)}%` }}
                            className="h-full bg-secondary"
                            title={`KV Cache: ${calc.kvCacheGb} GB`}
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-xs text-[11px] font-mono text-on-surface-variant pt-1 border-t border-outline-variant">
                        <div>
                            <span>WEIGHTS: </span>
                            <span className="text-on-surface font-medium">{calc.weightsGb} GB</span>
                        </div>
                        <div>
                            <span>KV ({(contextTokens / 1024).toFixed(0)}K): </span>
                            <span className="text-on-surface font-medium">{calc.kvCacheGb} GB</span>
                        </div>
                        <div className="text-right">
                            <span>VRAM USE: </span>
                            <span className={`font-semibold ${isOverflow ? 'text-error' : 'text-on-surface'}`}>
                                {calc.vramUsagePercent}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Bar: Command copy */}
            <div className="pt-sm border-t border-outline-variant flex items-center justify-between gap-sm">
                <div className="flex-1 bg-surface-container border border-outline-variant rounded px-sm py-1.5 overflow-hidden">
                    <code className="data-tabular text-xs text-on-surface select-all block truncate">
                        {pullCommand}
                    </code>
                </div>

                <button
                    type="button"
                    onClick={handleCopy}
                    className={`px-md py-1.5 rounded text-xs font-mono font-medium border transition-colors whitespace-nowrap ${
                        copied
                            ? 'bg-success text-on-success border-success'
                            : 'bg-primary text-on-primary border-primary hover:bg-primary-container'
                    }`}
                >
                    {copied ? 'COPIED' : 'COPY COMMAND'}
                </button>
            </div>
        </article>
    );
};
