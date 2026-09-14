import { findGpuInCatalog, HARDWARE_CATALOG, GpuSpec } from '../data/hardwareDb';

export interface SystemHardware {
    gpuName: string;
    vramGb: number;
    ramGb: number;
    cpuCores: number;
    bandwidthGBs: number;
    isUnifiedMemory: boolean;
    detectionMethod: 'webgpu' | 'webgl' | 'manual' | 'fallback';
    rawRendererString: string;
    isAppleSilicon: boolean;
    confidence: 'high' | 'medium' | 'estimated';
}

export async function detectHardware(): Promise<SystemHardware> {
    const cpuCores = navigator.hardwareConcurrency || 8;
    const reportedMemory = (navigator as unknown as { deviceMemory?: number }).deviceMemory;
    let rawRendererString = '';
    let detectionMethod: SystemHardware['detectionMethod'] = 'fallback';

    // 1. Attempt WebGPU detection
    const navGpu = (navigator as unknown as { gpu?: { requestAdapter: () => Promise<unknown> } }).gpu;
    if (navGpu && typeof navGpu.requestAdapter === 'function') {
        try {
            const adapter = await navGpu.requestAdapter() as { info?: { architecture?: string; description?: string; device?: string; vendor?: string } } | null;
            if (adapter && adapter.info) {
                const info = adapter.info;
                rawRendererString = [info.vendor, info.architecture, info.device, info.description]
                    .filter(Boolean)
                    .join(' ');
                detectionMethod = 'webgpu';
            }
        } catch {
            // WebGPU permission denied or unavailable
        }
    }

    // 2. Fallback to WebGL unmasked renderer
    if (!rawRendererString && typeof document !== 'undefined') {
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
            if (gl) {
                const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                if (debugInfo) {
                    const unmaskedRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                    const unmaskedVendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
                    rawRendererString = `${unmaskedVendor || ''} ${unmaskedRenderer || ''}`.trim();
                    detectionMethod = 'webgl';
                }
            }
        } catch {
            // WebGL unavailable
        }
    }

    // 3. Match against hardware catalog
    const matchedSpec: GpuSpec | null = findGpuInCatalog(rawRendererString);

    if (matchedSpec) {
        const isApple = matchedSpec.vendor === 'apple';
        const ramGb = isApple ? (matchedSpec.recommendedRamGb || 24) : (reportedMemory ? Math.max(reportedMemory, 16) : 32);

        return {
            gpuName: matchedSpec.name,
            vramGb: matchedSpec.vramGb,
            ramGb,
            cpuCores,
            bandwidthGBs: matchedSpec.bandwidthGBs,
            isUnifiedMemory: matchedSpec.isUnifiedMemory,
            detectionMethod,
            rawRendererString,
            isAppleSilicon: isApple,
            confidence: 'high'
        };
    }

    // 4. Heuristic fallback when catalog match fails
    const isMac = /Macintosh|Mac OS X/i.test(navigator.userAgent);
    if (isMac) {
        return {
            gpuName: 'Apple Silicon (Detected via platform)',
            vramGb: 18,
            ramGb: 24,
            cpuCores,
            bandwidthGBs: 200,
            isUnifiedMemory: true,
            detectionMethod,
            rawRendererString: rawRendererString || 'Apple Platform',
            isAppleSilicon: true,
            confidence: 'medium'
        };
    }

    const fallbackGpu = HARDWARE_CATALOG.find(item => item.id === 'generic-cpu-integrated')!;
    return {
        gpuName: rawRendererString ? `Detected GPU (${rawRendererString.slice(0, 35)})` : fallbackGpu.name,
        vramGb: fallbackGpu.vramGb,
        ramGb: reportedMemory ? Math.max(reportedMemory, 16) : 16,
        cpuCores,
        bandwidthGBs: fallbackGpu.bandwidthGBs,
        isUnifiedMemory: false,
        detectionMethod,
        rawRendererString,
        isAppleSilicon: false,
        confidence: 'estimated'
    };
}
