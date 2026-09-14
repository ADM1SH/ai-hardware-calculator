import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { ModelCategory } from './data/ollamaModels';
import { UNIFIED_MODELS, UnifiedModel, ModelFormatType } from './data/unifiedModels';
import { detectHardware, SystemHardware } from './engine/detector';
import { QuantizationTier, CompatibilityStatus, calculateModelCompatibility } from './engine/calculator';
import { fetchHuggingFaceModels } from './engine/huggingFaceApi';
import { HardwareBar } from './components/HardwareBar';
import { FilterBar, SortOption, SourceFilter } from './components/FilterBar';
import { ModelList } from './components/ModelList';
import { ModelInspectorModal } from './components/ModelInspectorModal';

export const App: React.FC = () => {
    // Hardware state
    const [hardware, setHardware] = useState<SystemHardware | null>(null);
    const [loadingHardware, setLoadingHardware] = useState(true);
    const [hardwareError, setHardwareError] = useState<string | null>(null);

    // Centralized unified models collection
    const [models, setModels] = useState<UnifiedModel[]>(UNIFIED_MODELS);
    const [isSearchingHf, setIsSearchingHf] = useState(false);
    const [hfPage, setHfPage] = useState(0);
    const [loadingMore, setLoadingMore] = useState(false);

    // Custom model inspector modal state
    const [isInspectorOpen, setIsInspectorOpen] = useState(false);

    // Filtering & customization state
    const [searchQuery, setSearchQuery] = useState('');
    const [sourceFilter, setSourceFilter] = useState<SourceFilter>('all');
    const [formatFilter, setFormatFilter] = useState<ModelFormatType | 'all'>('all');
    const [activeCategory, setActiveCategory] = useState<ModelCategory | 'all'>('all');
    const [statusFilter, setStatusFilter] = useState<CompatibilityStatus | 'all'>('all');
    const [quantization, setQuantization] = useState<QuantizationTier>('Q4_K_M');
    const [contextTokens, setContextTokens] = useState<number>(8192);
    const [sortBy, setSortBy] = useState<SortOption>('viability');

    // Local Ollama instance state
    const [localOllamaConnected, setLocalOllamaConnected] = useState(false);
    const [localInstalledTags, setLocalInstalledTags] = useState<Set<string>>(new Set());

    // Hardware detection runner
    const runHardwareDetection = useCallback(async () => {
        setLoadingHardware(true);
        setHardwareError(null);
        try {
            const detected = await detectHardware();
            setHardware(detected);
        } catch {
            setHardwareError('Failed to inspect system graphics adapters via browser APIs.');
        } finally {
            setLoadingHardware(false);
        }
    }, []);

    // Local Ollama probing
    const probeLocalOllama = useCallback(async () => {
        try {
            const res = await fetch('http://localhost:11434/api/tags', {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) throw new Error('Ollama service unreachable');
            const data = await res.json() as { models?: { name: string }[] };
            if (data.models && Array.isArray(data.models)) {
                const tags = new Set<string>();
                for (const m of data.models) {
                    tags.add(m.name);
                    const baseName = m.name.split(':')[0];
                    tags.add(baseName);
                }
                setLocalInstalledTags(tags);
                setLocalOllamaConnected(true);
            }
        } catch {
            setLocalOllamaConnected(false);
            setLocalInstalledTags(new Set());
        }
    }, []);

    // Load static 500+ models database on startup
    useEffect(() => {
        const loadDatabase = async () => {
            try {
                const res = await fetch('/models-database.json');
                if (res.ok) {
                    const extraModels: UnifiedModel[] = await res.json();
                    if (extraModels && Array.isArray(extraModels)) {
                        setModels(prev => {
                            const map = new Map<string, UnifiedModel>();
                            for (const m of prev) map.set(m.id, m);
                            for (const m of extraModels) {
                                if (!map.has(m.id)) map.set(m.id, m);
                            }
                            return Array.from(map.values());
                        });
                    }
                }
            } catch {
                // Pre-indexed dataset remains functional
            }
        };

        loadDatabase();
        runHardwareDetection();
        probeLocalOllama();
    }, [runHardwareDetection, probeLocalOllama]);

    // Background auto-discovery for Hugging Face community models on search
    const hfSearchTimer = useRef<number | null>(null);

    useEffect(() => {
        if (!searchQuery.trim() || searchQuery.length < 3) {
            return;
        }

        if (hfSearchTimer.current) {
            window.clearTimeout(hfSearchTimer.current);
        }

        hfSearchTimer.current = window.setTimeout(async () => {
            setIsSearchingHf(true);
            try {
                const discovered = await fetchHuggingFaceModels(searchQuery, 30);
                if (discovered && discovered.length > 0) {
                    setModels(prev => {
                        const map = new Map<string, UnifiedModel>();
                        for (const m of prev) map.set(m.id, m);
                        for (const m of discovered) {
                            if (!map.has(m.id)) map.set(m.id, m);
                        }
                        return Array.from(map.values());
                    });
                }
            } catch {
                // Background search failure is non-fatal
            } finally {
                setIsSearchingHf(false);
            }
        }, 400);

        return () => {
            if (hfSearchTimer.current) {
                window.clearTimeout(hfSearchTimer.current);
            }
        };
    }, [searchQuery]);

    // Pagination handler: pull more models from Hugging Face Hub
    const handleLoadMore = useCallback(async () => {
        setLoadingMore(true);
        try {
            const nextPage = hfPage + 1;
            const extra = await fetchHuggingFaceModels('', 30, nextPage);
            if (extra && extra.length > 0) {
                setModels(prev => {
                    const map = new Map<string, UnifiedModel>();
                    for (const m of prev) map.set(m.id, m);
                    for (const m of extra) {
                        if (!map.has(m.id)) map.set(m.id, m);
                    }
                    return Array.from(map.values());
                });
                setHfPage(nextPage);
            }
        } catch {
            // Non-fatal pagination failure
        } finally {
            setLoadingMore(false);
        }
    }, [hfPage]);

    // Handle user adding a custom model from inspector
    const handleModelAdded = useCallback((newModel: UnifiedModel) => {
        setModels(prev => [newModel, ...prev.filter(m => m.id !== newModel.id)]);
        setSearchQuery(newModel.name);
    }, []);

    // Handle filter reset
    const handleResetFilters = useCallback(() => {
        setSearchQuery('');
        setSourceFilter('all');
        setFormatFilter('all');
        setActiveCategory('all');
        setStatusFilter('all');
        setQuantization('Q4_K_M');
        setContextTokens(8192);
        setSortBy('viability');
    }, []);

    // Filtered & Sorted models calculation
    const processedModels = useMemo(() => {
        if (!hardware) return [];

        let result = models;

        // Source filter
        if (sourceFilter === 'ollama') {
            result = result.filter(m => m.sources.includes('ollama'));
        } else if (sourceFilter === 'huggingface') {
            result = result.filter(m => m.sources.includes('huggingface'));
        }

        // Format filter
        if (formatFilter !== 'all') {
            result = result.filter(m => m.formats && m.formats.includes(formatFilter));
        }

        // Category filter
        if (activeCategory !== 'all') {
            result = result.filter(m => m.category === activeCategory);
        }

        // Search query filter
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase().trim();
            result = result.filter(m =>
                m.name.toLowerCase().includes(q) ||
                m.slug.toLowerCase().includes(q) ||
                m.description.toLowerCase().includes(q) ||
                m.tags.some(t => t.toLowerCase().includes(q)) ||
                m.variants.some(v => v.label.toLowerCase().includes(q) || v.tag.toLowerCase().includes(q)) ||
                (m.hfRepo && m.hfRepo.toLowerCase().includes(q))
            );
        }

        // Status filter: check if any variant or best variant meets status
        if (statusFilter !== 'all') {
            result = result.filter(m => {
                return m.variants.some(v => {
                    const calc = calculateModelCompatibility(m, v, hardware, quantization, contextTokens);
                    return calc.status === statusFilter;
                });
            });
        }

        // Sort models
        const sorted = [...result].sort((a, b) => {
            const vA = a.variants[0];
            const vB = b.variants[0];

            if (sortBy === 'viability') {
                const calcA = calculateModelCompatibility(a, vA, hardware, quantization, contextTokens);
                const calcB = calculateModelCompatibility(b, vB, hardware, quantization, contextTokens);

                const statusWeight = { 'runs-well': 3, 'cpu-offload': 2, 'insufficient': 1 };
                const diff = statusWeight[calcB.status] - statusWeight[calcA.status];
                if (diff !== 0) return diff;
                return calcB.estimatedTokensPerSec - calcA.estimatedTokensPerSec;
            }

            if (sortBy === 'size-desc') {
                const maxA = Math.max(...a.variants.map(v => v.paramsB));
                const maxB = Math.max(...b.variants.map(v => v.paramsB));
                return maxB - maxA;
            }

            if (sortBy === 'size-asc') {
                const minA = Math.min(...a.variants.map(v => v.paramsB));
                const minB = Math.min(...b.variants.map(v => v.paramsB));
                return minA - minB;
            }

            // Default popularity / pull count estimate
            const parsePulls = (val: string) => {
                const num = parseFloat(val);
                if (val.includes('M')) return num * 1_000_000;
                if (val.includes('K')) return num * 1_000;
                return num || 0;
            };
            return parsePulls(b.pullCount) - parsePulls(a.pullCount);
        });

        return sorted;
    }, [hardware, models, sourceFilter, formatFilter, activeCategory, searchQuery, statusFilter, quantization, contextTokens, sortBy]);

    const totalVariantsCount = useMemo(() => {
        return models.reduce((acc, m) => acc + m.variants.length, 0);
    }, [models]);

    return (
        <div className="min-h-screen bg-background text-on-surface flex flex-col justify-between">
            {/* Top Navigation */}
            <header className="border-b border-outline-variant bg-surface-container-lowest sticky top-0 z-30">
                <div className="max-w-[1440px] mx-auto px-md py-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-xs">
                    <div className="flex items-center gap-sm">
                        <div className="w-6 h-6 bg-primary text-on-primary flex items-center justify-center font-bold text-xs rounded-sm">
                            Ω
                        </div>
                        <div>
                            <h1 className="text-base font-bold tracking-tight text-on-surface uppercase">
                                Hardware Engine
                            </h1>
                            <span className="label-caps text-on-surface-variant block">
                                Centralized AI Model Compatibility & Memory Calculator
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-md text-xs font-mono text-on-surface-variant">
                        <span>{models.length} TOTAL CATALOG MODELS</span>
                        <span>•</span>
                        <span>{totalVariantsCount} ARCHITECTURE VARIANTS</span>
                    </div>
                </div>
            </header>

            {/* Main Content Workspace */}
            <main className="max-w-[1440px] mx-auto px-md py-md flex-1 w-full">
                {/* Hardware Bar */}
                {loadingHardware ? (
                    <div className="bg-surface-container-lowest border border-outline-variant rounded p-lg text-center mb-lg">
                        <span className="label-caps text-on-surface-variant block mb-1">SCANNING ADAPTERS</span>
                        <p className="title-sm font-semibold text-on-surface">
                            Querying WebGPU and WebGL graphics subsystems...
                        </p>
                    </div>
                ) : hardware ? (
                    <HardwareBar
                        hardware={hardware}
                        onUpdateHardware={setHardware}
                        onResetHardware={runHardwareDetection}
                        localOllamaConnected={localOllamaConnected}
                        localModelCount={localInstalledTags.size}
                        onRefreshLocalOllama={probeLocalOllama}
                    />
                ) : null}

                {/* Filter & Options Toolbar */}
                <FilterBar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    sourceFilter={sourceFilter}
                    onSelectSourceFilter={setSourceFilter}
                    formatFilter={formatFilter}
                    onSelectFormatFilter={setFormatFilter}
                    activeCategory={activeCategory}
                    onSelectCategory={setActiveCategory}
                    statusFilter={statusFilter}
                    onSelectStatusFilter={setStatusFilter}
                    quantization={quantization}
                    onSelectQuantization={setQuantization}
                    contextTokens={contextTokens}
                    onSelectContextTokens={setContextTokens}
                    sortBy={sortBy}
                    onSelectSortBy={setSortBy}
                    totalCount={models.length}
                    matchedCount={processedModels.length}
                    isSearchingHf={isSearchingHf}
                    onOpenInspector={() => setIsInspectorOpen(true)}
                />

                {/* Model Catalog Grid with Empty & Error States */}
                {hardware && (
                    <ModelList
                        models={processedModels}
                        hardware={hardware}
                        quantization={quantization}
                        contextTokens={contextTokens}
                        localInstalledTags={localInstalledTags}
                        onResetFilters={handleResetFilters}
                        error={hardwareError}
                        onLoadMore={handleLoadMore}
                        loadingMore={loadingMore}
                    />
                )}
            </main>

            {/* Custom Model Inspector Modal */}
            <ModelInspectorModal
                isOpen={isInspectorOpen}
                onClose={() => setIsInspectorOpen(false)}
                onModelAdded={handleModelAdded}
            />

            {/* Functional Minimalist Footer */}
            <footer className="border-t border-outline-variant bg-surface-container-lowest mt-xl py-md">
                <div className="max-w-[1440px] mx-auto px-md flex flex-col md:flex-row md:items-center md:justify-between gap-sm text-xs text-on-surface-variant">
                    <div>
                        <span className="font-semibold text-on-surface">Form Follows Function.</span> Unified catalog indexing Ollama Library and Hugging Face Hub open-weights.
                    </div>
                    <div className="font-mono text-[11px]">
                        ENGINE v3.0 • 1,500+ PRE-INDEXED • 150K+ LIVE ON DEMAND
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
