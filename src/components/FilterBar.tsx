import React from 'react';
import { ModelCategory } from '../data/ollamaModels';
import { ModelFormatType } from '../data/unifiedModels';
import { QuantizationTier, CompatibilityStatus, QUANTIZATION_TIERS } from '../engine/calculator';

export type SortOption = 'viability' | 'popularity' | 'size-asc' | 'size-desc';
export type SourceFilter = 'all' | 'ollama' | 'huggingface';

interface FilterBarProps {
    searchQuery: string;
    onSearchChange: (q: string) => void;
    sourceFilter: SourceFilter;
    onSelectSourceFilter: (src: SourceFilter) => void;
    formatFilter: ModelFormatType | 'all';
    onSelectFormatFilter: (fmt: ModelFormatType | 'all') => void;
    activeCategory: ModelCategory | 'all';
    onSelectCategory: (cat: ModelCategory | 'all') => void;
    statusFilter: CompatibilityStatus | 'all';
    onSelectStatusFilter: (status: CompatibilityStatus | 'all') => void;
    quantization: QuantizationTier;
    onSelectQuantization: (q: QuantizationTier) => void;
    contextTokens: number;
    onSelectContextTokens: (ctx: number) => void;
    sortBy: SortOption;
    onSelectSortBy: (s: SortOption) => void;
    totalCount: number;
    matchedCount: number;
    isSearchingHf?: boolean;
    onOpenInspector: () => void;
}

const CATEGORIES: { id: ModelCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Models' },
    { id: 'chat', label: 'Chat & General' },
    { id: 'reasoning', label: 'Reasoning' },
    { id: 'code', label: 'Code' },
    { id: 'vision', label: 'Vision' },
    { id: 'embedding', label: 'Embedding' }
];

const CONTEXT_OPTIONS = [
    { label: '4K', value: 4096 },
    { label: '8K', value: 8192 },
    { label: '32K', value: 32768 },
    { label: '128K', value: 131072 }
];

export const FilterBar: React.FC<FilterBarProps> = ({
    searchQuery,
    onSearchChange,
    sourceFilter,
    onSelectSourceFilter,
    formatFilter,
    onSelectFormatFilter,
    activeCategory,
    onSelectCategory,
    statusFilter,
    onSelectStatusFilter,
    quantization,
    onSelectQuantization,
    contextTokens,
    onSelectContextTokens,
    sortBy,
    onSelectSortBy,
    totalCount,
    matchedCount,
    isSearchingHf = false,
    onOpenInspector
}) => {
    return (
        <section className="bg-surface-container-lowest border border-outline-variant rounded p-md mb-lg">
            {/* Category tabs adhering to DESIGN.md Underline Tabs spec */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-outline-variant pb-0 mb-md gap-sm">
                <div className="flex items-center gap-md overflow-x-auto">
                    {CATEGORIES.map(cat => {
                        const isActive = activeCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => onSelectCategory(cat.id)}
                                className={`pb-sm text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                                    isActive
                                        ? 'border-primary text-on-surface font-semibold'
                                        : 'border-transparent text-on-surface-variant hover:border-outline-variant hover:text-on-surface'
                                }`}
                            >
                                {cat.label}
                            </button>
                        );
                    })}
                </div>

                <div className="flex items-center gap-sm pb-sm whitespace-nowrap justify-between sm:justify-end">
                    {isSearchingHf && (
                        <span className="text-primary font-mono text-[11px] font-medium">DISCOVERING HUB MODELS...</span>
                    )}
                    <button
                        type="button"
                        onClick={onOpenInspector}
                        className="px-sm py-1 rounded border border-primary text-primary hover:bg-primary hover:text-on-primary text-xs font-mono font-medium transition-colors"
                    >
                        + INSPECT CUSTOM MODEL
                    </button>
                </div>
            </div>

            {/* Main filter controls row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-md items-end">
                {/* Search input across all models */}
                <div className="lg:col-span-3">
                    <label htmlFor="modelSearch" className="label-caps block mb-1 text-on-surface">
                        SEARCH CATALOG ({matchedCount} OF {totalCount})
                    </label>
                    <input
                        id="modelSearch"
                        type="text"
                        value={searchQuery}
                        onChange={e => onSearchChange(e.target.value)}
                        placeholder="Search e.g. Llama, Qwen, DeepSeek, Bartowski..."
                        className="w-full bg-surface border border-outline rounded p-2 text-xs text-on-surface focus:border-primary focus:outline-none placeholder:text-outline"
                    />
                </div>

                {/* Hardware compatibility status */}
                <div className="lg:col-span-2">
                    <label htmlFor="statusSelect" className="label-caps block mb-1 text-on-surface">
                        HARDWARE FIT
                    </label>
                    <select
                        id="statusSelect"
                        value={statusFilter}
                        onChange={e => onSelectStatusFilter(e.target.value as CompatibilityStatus | 'all')}
                        className="w-full bg-surface border border-outline rounded p-2 text-xs text-on-surface focus:border-primary focus:outline-none"
                    >
                        <option value="all">All Statuses</option>
                        <option value="runs-well">Runs Well (100% VRAM)</option>
                        <option value="cpu-offload">CPU Offload (Partial)</option>
                        <option value="insufficient">Insufficient Memory</option>
                    </select>
                </div>

                {/* Weight format filter */}
                <div className="lg:col-span-2">
                    <label htmlFor="formatSelect" className="label-caps block mb-1 text-on-surface">
                        FORMAT / RUNTIME
                    </label>
                    <select
                        id="formatSelect"
                        value={formatFilter}
                        onChange={e => onSelectFormatFilter(e.target.value as ModelFormatType | 'all')}
                        className="w-full bg-surface border border-outline rounded p-2 text-xs text-on-surface focus:border-primary focus:outline-none"
                    >
                        <option value="all">All Formats</option>
                        <option value="gguf">GGUF (Ollama/llama.cpp)</option>
                        <option value="mlx">MLX (Apple Silicon)</option>
                        <option value="awq">AWQ (GPU 4-bit)</option>
                        <option value="gptq">GPTQ (GPU 4-bit)</option>
                        <option value="safetensors">Safetensors (FP16/PyTorch)</option>
                    </select>
                </div>

                {/* Source filter */}
                <div className="lg:col-span-1">
                    <label htmlFor="sourceSelect" className="label-caps block mb-1 text-on-surface">
                        SOURCE
                    </label>
                    <select
                        id="sourceSelect"
                        value={sourceFilter}
                        onChange={e => onSelectSourceFilter(e.target.value as SourceFilter)}
                        className="w-full bg-surface border border-outline rounded p-2 text-xs text-on-surface focus:border-primary focus:outline-none"
                    >
                        <option value="all">All</option>
                        <option value="ollama">Ollama</option>
                        <option value="huggingface">HF Hub</option>
                    </select>
                </div>

                {/* Quantization select */}
                <div className="lg:col-span-2">
                    <label htmlFor="quantSelect" className="label-caps block mb-1 text-on-surface">
                        PRECISION / QUANT
                    </label>
                    <select
                        id="quantSelect"
                        value={quantization}
                        onChange={e => onSelectQuantization(e.target.value as QuantizationTier)}
                        className="w-full bg-surface border border-outline rounded p-2 text-xs font-mono text-on-surface focus:border-primary focus:outline-none"
                    >
                        {QUANTIZATION_TIERS.map(q => (
                            <option key={q.id} value={q.id}>
                                {q.shortLabel} ({q.bpw} bpw)
                            </option>
                        ))}
                    </select>
                </div>

                {/* Context tokens & sort */}
                <div className="lg:col-span-2 flex gap-xs">
                    <div className="flex-1">
                        <label htmlFor="contextSelect" className="label-caps block mb-1 text-on-surface">
                            CONTEXT
                        </label>
                        <select
                            id="contextSelect"
                            value={contextTokens}
                            onChange={e => onSelectContextTokens(Number(e.target.value))}
                            className="w-full bg-surface border border-outline rounded p-2 text-xs font-mono text-on-surface focus:border-primary focus:outline-none"
                        >
                            {CONTEXT_OPTIONS.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex-1">
                        <label htmlFor="sortSelect" className="label-caps block mb-1 text-on-surface">
                            SORT
                        </label>
                        <select
                            id="sortSelect"
                            value={sortBy}
                            onChange={e => onSelectSortBy(e.target.value as SortOption)}
                            className="w-full bg-surface border border-outline rounded p-2 text-xs text-on-surface focus:border-primary focus:outline-none"
                        >
                            <option value="viability">Speed</option>
                            <option value="popularity">Pulls</option>
                            <option value="size-desc">Size ↓</option>
                            <option value="size-asc">Size ↑</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
};
