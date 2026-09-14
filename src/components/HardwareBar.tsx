import React, { useState } from 'react';
import { HARDWARE_CATALOG } from '../data/hardwareDb';
import { SystemHardware } from '../engine/detector';

interface HardwareBarProps {
    hardware: SystemHardware;
    onUpdateHardware: (updated: SystemHardware) => void;
    onResetHardware: () => void;
    localOllamaConnected: boolean;
    localModelCount: number;
    onRefreshLocalOllama: () => void;
}

export const HardwareBar: React.FC<HardwareBarProps> = ({
    hardware,
    onUpdateHardware,
    onResetHardware,
    localOllamaConnected,
    localModelCount,
    onRefreshLocalOllama
}) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleSelectPreset = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const specId = e.target.value;
        const spec = HARDWARE_CATALOG.find(item => item.id === specId);
        if (!spec) return;

        const isApple = spec.vendor === 'apple';
        const defaultRam = isApple ? (spec.recommendedRamGb || 24) : 32;

        onUpdateHardware({
            gpuName: spec.name,
            vramGb: spec.vramGb,
            ramGb: defaultRam,
            cpuCores: hardware.cpuCores,
            bandwidthGBs: spec.bandwidthGBs,
            isUnifiedMemory: spec.isUnifiedMemory,
            detectionMethod: 'manual',
            rawRendererString: spec.name,
            isAppleSilicon: isApple,
            confidence: 'high'
        });
    };

    const handleVramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Math.max(1, Number(e.target.value) || 1);
        onUpdateHardware({
            ...hardware,
            vramGb: val,
            detectionMethod: 'manual'
        });
    };

    const handleRamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Math.max(2, Number(e.target.value) || 2);
        onUpdateHardware({
            ...hardware,
            ramGb: val,
            detectionMethod: 'manual'
        });
    };

    const handleUnifiedToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdateHardware({
            ...hardware,
            isUnifiedMemory: e.target.checked,
            detectionMethod: 'manual'
        });
    };

    return (
        <section className="bg-surface-container-lowest border border-outline-variant rounded p-md mb-lg">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-md border-b border-outline-variant pb-md mb-md">
                <div>
                    <div className="flex items-center gap-sm mb-xs">
                        <span className="label-caps text-on-surface-variant">HARDWARE PROFILE</span>
                        <span className="label-caps px-xs py-0.5 rounded-sm bg-surface-container-high text-on-surface-variant">
                            {hardware.detectionMethod.toUpperCase()}
                        </span>
                        {hardware.isUnifiedMemory && (
                            <span className="label-caps px-xs py-0.5 rounded-sm bg-secondary-container text-on-secondary-container">
                                UNIFIED MEMORY
                            </span>
                        )}
                    </div>
                    <h2 className="title-sm text-on-surface font-semibold flex items-center gap-sm">
                        {hardware.gpuName}
                    </h2>
                </div>

                <div className="flex flex-wrap items-center gap-sm">
                    <button
                        type="button"
                        onClick={() => setIsEditing(!isEditing)}
                        className={`text-xs px-md py-1.5 rounded border transition-colors ${
                            isEditing
                                ? 'bg-primary text-on-primary border-primary'
                                : 'bg-transparent text-on-surface border-outline hover:bg-surface-container-low'
                        }`}
                    >
                        {isEditing ? 'CLOSE CONTROLS' : 'ADJUST HARDWARE'}
                    </button>

                    <button
                        type="button"
                        onClick={onResetHardware}
                        className="text-xs px-md py-1.5 rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container-low"
                    >
                        RE-DETECT
                    </button>

                    <div className="flex items-center gap-xs px-sm py-1 rounded border border-outline-variant bg-surface-container-low">
                        <span
                            className={`w-2 h-2 rounded-full ${
                                localOllamaConnected ? 'bg-success' : 'bg-outline'
                            }`}
                        />
                        <span className="label-caps text-on-surface-variant">
                            {localOllamaConnected
                                ? `OLLAMA ACTIVE (${localModelCount} MODELS)`
                                : 'LOCAL OLLAMA STANDBY'}
                        </span>
                        <button
                            type="button"
                            onClick={onRefreshLocalOllama}
                            title="Probe localhost:11434"
                            className="text-[10px] uppercase font-mono ml-xs text-primary hover:underline"
                        >
                            SYNC
                        </button>
                    </div>
                </div>
            </div>

            {/* Readout stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-md">
                <div className="border border-outline-variant rounded p-sm bg-surface-container-low">
                    <span className="label-caps text-on-surface-variant block mb-1">EFFECTIVE VRAM</span>
                    <span className="data-tabular text-lg text-on-surface font-semibold block">
                        {hardware.isUnifiedMemory
                            ? `${(hardware.ramGb * 0.75).toFixed(1)} GB`
                            : `${hardware.vramGb} GB`}
                    </span>
                    <span className="text-xs text-on-surface-variant">
                        {hardware.isUnifiedMemory ? '75% Metal allocation cap' : 'Dedicated GDDR memory'}
                    </span>
                </div>

                <div className="border border-outline-variant rounded p-sm bg-surface-container-low">
                    <span className="label-caps text-on-surface-variant block mb-1">SYSTEM RAM</span>
                    <span className="data-tabular text-lg text-on-surface font-semibold block">
                        {hardware.ramGb} GB
                    </span>
                    <span className="text-xs text-on-surface-variant">
                        {hardware.isUnifiedMemory ? 'Unified memory pool' : 'Available for CPU offload'}
                    </span>
                </div>

                <div className="border border-outline-variant rounded p-sm bg-surface-container-low">
                    <span className="label-caps text-on-surface-variant block mb-1">MEMORY BANDWIDTH</span>
                    <span className="data-tabular text-lg text-on-surface font-semibold block">
                        {hardware.bandwidthGBs} GB/s
                    </span>
                    <span className="text-xs text-on-surface-variant">
                        Inference decoding throughput limit
                    </span>
                </div>

                <div className="border border-outline-variant rounded p-sm bg-surface-container-low">
                    <span className="label-caps text-on-surface-variant block mb-1">CPU LOGICAL CORES</span>
                    <span className="data-tabular text-lg text-on-surface font-semibold block">
                        {hardware.cpuCores} Cores
                    </span>
                    <span className="text-xs text-on-surface-variant">
                        Offload & context processing threads
                    </span>
                </div>
            </div>

            {/* Manual adjustment drawer */}
            {isEditing && (
                <div className="mt-md pt-md border-t border-outline-variant grid grid-cols-1 md:grid-cols-4 gap-md bg-surface-container p-md rounded">
                    <div>
                        <label htmlFor="gpuPreset" className="label-caps block mb-1 text-on-surface">
                            LOAD HARDWARE PRESET
                        </label>
                        <select
                            id="gpuPreset"
                            onChange={handleSelectPreset}
                            defaultValue=""
                            className="w-full bg-surface-container-lowest border border-outline rounded p-2 text-xs text-on-surface focus:border-primary focus:outline-none"
                        >
                            <option value="" disabled>Select known GPU / SoC...</option>
                            <optgroup label="Apple Silicon">
                                {HARDWARE_CATALOG.filter(h => h.vendor === 'apple').map(spec => (
                                    <option key={spec.id} value={spec.id}>{spec.name}</option>
                                ))}
                            </optgroup>
                            <optgroup label="NVIDIA GeForce">
                                {HARDWARE_CATALOG.filter(h => h.vendor === 'nvidia').map(spec => (
                                    <option key={spec.id} value={spec.id}>{spec.name} ({spec.vramGb}GB)</option>
                                ))}
                            </optgroup>
                            <optgroup label="AMD Radeon">
                                {HARDWARE_CATALOG.filter(h => h.vendor === 'amd').map(spec => (
                                    <option key={spec.id} value={spec.id}>{spec.name} ({spec.vramGb}GB)</option>
                                ))}
                            </optgroup>
                            <optgroup label="Intel Arc & Other">
                                {HARDWARE_CATALOG.filter(h => h.vendor === 'intel' || h.vendor === 'generic').map(spec => (
                                    <option key={spec.id} value={spec.id}>{spec.name}</option>
                                ))}
                            </optgroup>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="vramInput" className="label-caps block mb-1 text-on-surface">
                            CUSTOM VRAM (GB)
                        </label>
                        <input
                            id="vramInput"
                            type="number"
                            min="1"
                            max="256"
                            value={hardware.vramGb}
                            onChange={handleVramChange}
                            disabled={hardware.isUnifiedMemory}
                            className="w-full bg-surface-container-lowest border border-outline rounded p-2 text-xs font-mono text-on-surface focus:border-primary focus:outline-none disabled:opacity-50"
                        />
                    </div>

                    <div>
                        <label htmlFor="ramInput" className="label-caps block mb-1 text-on-surface">
                            TOTAL SYSTEM RAM (GB)
                        </label>
                        <input
                            id="ramInput"
                            type="number"
                            min="4"
                            max="512"
                            value={hardware.ramGb}
                            onChange={handleRamChange}
                            className="w-full bg-surface-container-lowest border border-outline rounded p-2 text-xs font-mono text-on-surface focus:border-primary focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col justify-end">
                        <label className="flex items-center gap-2 cursor-pointer pt-2">
                            <input
                                type="checkbox"
                                checked={hardware.isUnifiedMemory}
                                onChange={handleUnifiedToggle}
                                className="w-4 h-4 rounded-sm border-outline text-primary focus:ring-0"
                            />
                            <span className="text-xs font-medium text-on-surface">
                                Unified Memory Architecture
                            </span>
                        </label>
                        <span className="text-[11px] text-on-surface-variant mt-1">
                            Check for Apple Silicon or unified APUs where VRAM is shared with RAM.
                        </span>
                    </div>
                </div>
            )}
        </section>
    );
};
