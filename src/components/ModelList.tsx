import React from 'react';
import { UnifiedModel } from '../data/unifiedModels';
import { QuantizationTier } from '../engine/calculator';
import { SystemHardware } from '../engine/detector';
import { ModelCard } from './ModelCard';

interface ModelListProps {
    models: UnifiedModel[];
    hardware: SystemHardware;
    quantization: QuantizationTier;
    contextTokens: number;
    localInstalledTags: Set<string>;
    onResetFilters: () => void;
    error: string | null;
    onLoadMore?: () => void;
    loadingMore?: boolean;
}

export const ModelList: React.FC<ModelListProps> = ({
    models,
    hardware,
    quantization,
    contextTokens,
    localInstalledTags,
    onResetFilters,
    error,
    onLoadMore,
    loadingMore = false
}) => {
    // 1. Error state handling
    if (error) {
        return (
            <div className="bg-error-container border border-error rounded p-lg text-center my-md">
                <span className="label-caps text-on-error-container block mb-1">SYSTEM FAULT</span>
                <h3 className="title-sm font-semibold text-on-error-container mb-2">
                    {error}
                </h3>
                <p className="body-md text-on-error-container mb-md">
                    Hardware detection or model catalog calculation failed to complete.
                </p>
                <button
                    type="button"
                    onClick={onResetFilters}
                    className="px-md py-2 rounded bg-error text-on-error text-xs font-mono font-medium hover:opacity-90"
                >
                    RETRY OPERATION
                </button>
            </div>
        );
    }

    // 2. Empty state handling
    if (models.length === 0) {
        return (
            <div className="bg-surface-container-lowest border border-outline-variant rounded p-xl text-center my-md">
                <span className="label-caps text-on-surface-variant block mb-2">NO MATCHING MODELS</span>
                <h3 className="title-sm font-semibold text-on-surface mb-2">
                    No models match your current hardware criteria or search query.
                </h3>
                <p className="body-md text-on-surface-variant max-w-md mx-auto mb-md">
                    Try adjusting your quantization level, lowering context window size, or relaxing the hardware fit filter.
                </p>
                <button
                    type="button"
                    onClick={onResetFilters}
                    className="px-md py-2 rounded bg-primary text-on-primary text-xs font-mono font-medium hover:bg-primary-container"
                >
                    RESET ALL FILTERS
                </button>
            </div>
        );
    }

    // 3. Grid display
    return (
        <section className="flex flex-col gap-md">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-md">
                {models.map(model => {
                    const isLocallyInstalled = model.variants.some(v =>
                        localInstalledTags.has(`${model.slug}:${v.tag}`) ||
                        localInstalledTags.has(`${model.slug}:latest`) ||
                        localInstalledTags.has(model.slug)
                    );

                    return (
                        <ModelCard
                            key={model.id}
                            model={model}
                            hardware={hardware}
                            quantization={quantization}
                            contextTokens={contextTokens}
                            isLocallyInstalled={isLocallyInstalled}
                        />
                    );
                })}
            </div>

            {/* Pagination trigger button */}
            {onLoadMore && (
                <div className="flex justify-center pt-md pb-lg">
                    <button
                        type="button"
                        onClick={onLoadMore}
                        disabled={loadingMore}
                        className="px-xl py-2 rounded border border-outline bg-surface-container-lowest text-on-surface hover:bg-surface-container-low font-mono text-xs font-semibold tracking-wider transition-colors disabled:opacity-50"
                    >
                        {loadingMore ? 'FETCHING BATCH FROM HUB...' : 'LOAD MORE MODELS FROM HUB'}
                    </button>
                </div>
            )}
        </section>
    );
};
