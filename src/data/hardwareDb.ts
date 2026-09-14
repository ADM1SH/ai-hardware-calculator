export interface GpuSpec {
    id: string;
    name: string;
    vendor: 'apple' | 'nvidia' | 'amd' | 'intel' | 'generic';
    vramGb: number;
    bandwidthGBs: number;
    isUnifiedMemory: boolean;
    recommendedRamGb?: number;
    aliases: string[];
}

export const HARDWARE_CATALOG: GpuSpec[] = [
    // Apple Silicon M4 Family
    {
        id: 'apple-m4-max',
        name: 'Apple M4 Max',
        vendor: 'apple',
        vramGb: 64,
        bandwidthGBs: 410,
        isUnifiedMemory: true,
        recommendedRamGb: 64,
        aliases: ['apple m4 max', 'm4 max']
    },
    {
        id: 'apple-m4-pro',
        name: 'Apple M4 Pro',
        vendor: 'apple',
        vramGb: 24,
        bandwidthGBs: 273,
        isUnifiedMemory: true,
        recommendedRamGb: 24,
        aliases: ['apple m4 pro', 'm4 pro']
    },
    {
        id: 'apple-m4',
        name: 'Apple M4',
        vendor: 'apple',
        vramGb: 16,
        bandwidthGBs: 120,
        isUnifiedMemory: true,
        recommendedRamGb: 16,
        aliases: ['apple m4', 'm4']
    },

    // Apple Silicon M3 Family
    {
        id: 'apple-m3-max',
        name: 'Apple M3 Max',
        vendor: 'apple',
        vramGb: 48,
        bandwidthGBs: 300,
        isUnifiedMemory: true,
        recommendedRamGb: 48,
        aliases: ['apple m3 max', 'm3 max']
    },
    {
        id: 'apple-m3-pro',
        name: 'Apple M3 Pro',
        vendor: 'apple',
        vramGb: 18,
        bandwidthGBs: 150,
        isUnifiedMemory: true,
        recommendedRamGb: 18,
        aliases: ['apple m3 pro', 'm3 pro']
    },
    {
        id: 'apple-m3',
        name: 'Apple M3',
        vendor: 'apple',
        vramGb: 16,
        bandwidthGBs: 100,
        isUnifiedMemory: true,
        recommendedRamGb: 16,
        aliases: ['apple m3', 'm3']
    },

    // Apple Silicon M2 Family
    {
        id: 'apple-m2-ultra',
        name: 'Apple M2 Ultra',
        vendor: 'apple',
        vramGb: 64,
        bandwidthGBs: 800,
        isUnifiedMemory: true,
        recommendedRamGb: 64,
        aliases: ['apple m2 ultra', 'm2 ultra']
    },
    {
        id: 'apple-m2-max',
        name: 'Apple M2 Max',
        vendor: 'apple',
        vramGb: 32,
        bandwidthGBs: 400,
        isUnifiedMemory: true,
        recommendedRamGb: 32,
        aliases: ['apple m2 max', 'm2 max']
    },
    {
        id: 'apple-m2-pro',
        name: 'Apple M2 Pro',
        vendor: 'apple',
        vramGb: 16,
        bandwidthGBs: 200,
        isUnifiedMemory: true,
        recommendedRamGb: 16,
        aliases: ['apple m2 pro', 'm2 pro']
    },
    {
        id: 'apple-m2',
        name: 'Apple M2',
        vendor: 'apple',
        vramGb: 8,
        bandwidthGBs: 100,
        isUnifiedMemory: true,
        recommendedRamGb: 8,
        aliases: ['apple m2', 'm2']
    },

    // Apple Silicon M1 Family
    {
        id: 'apple-m1-ultra',
        name: 'Apple M1 Ultra',
        vendor: 'apple',
        vramGb: 64,
        bandwidthGBs: 800,
        isUnifiedMemory: true,
        recommendedRamGb: 64,
        aliases: ['apple m1 ultra', 'm1 ultra']
    },
    {
        id: 'apple-m1-max',
        name: 'Apple M1 Max',
        vendor: 'apple',
        vramGb: 32,
        bandwidthGBs: 400,
        isUnifiedMemory: true,
        recommendedRamGb: 32,
        aliases: ['apple m1 max', 'm1 max']
    },
    {
        id: 'apple-m1-pro',
        name: 'Apple M1 Pro',
        vendor: 'apple',
        vramGb: 16,
        bandwidthGBs: 200,
        isUnifiedMemory: true,
        recommendedRamGb: 16,
        aliases: ['apple m1 pro', 'm1 pro']
    },
    {
        id: 'apple-m1',
        name: 'Apple M1',
        vendor: 'apple',
        vramGb: 8,
        bandwidthGBs: 68,
        isUnifiedMemory: true,
        recommendedRamGb: 8,
        aliases: ['apple m1', 'm1']
    },

    // NVIDIA RTX 50 Series
    {
        id: 'nvidia-rtx-5090',
        name: 'NVIDIA GeForce RTX 5090',
        vendor: 'nvidia',
        vramGb: 32,
        bandwidthGBs: 1792,
        isUnifiedMemory: false,
        aliases: ['rtx 5090', 'geforce rtx 5090']
    },
    {
        id: 'nvidia-rtx-5080',
        name: 'NVIDIA GeForce RTX 5080',
        vendor: 'nvidia',
        vramGb: 16,
        bandwidthGBs: 1000,
        isUnifiedMemory: false,
        aliases: ['rtx 5080', 'geforce rtx 5080']
    },
    {
        id: 'nvidia-rtx-5070-ti',
        name: 'NVIDIA GeForce RTX 5070 Ti',
        vendor: 'nvidia',
        vramGb: 16,
        bandwidthGBs: 896,
        isUnifiedMemory: false,
        aliases: ['rtx 5070 ti', 'geforce rtx 5070 ti']
    },
    {
        id: 'nvidia-rtx-5070',
        name: 'NVIDIA GeForce RTX 5070',
        vendor: 'nvidia',
        vramGb: 12,
        bandwidthGBs: 672,
        isUnifiedMemory: false,
        aliases: ['rtx 5070', 'geforce rtx 5070']
    },

    // NVIDIA RTX 40 Series
    {
        id: 'nvidia-rtx-4090',
        name: 'NVIDIA GeForce RTX 4090',
        vendor: 'nvidia',
        vramGb: 24,
        bandwidthGBs: 1008,
        isUnifiedMemory: false,
        aliases: ['rtx 4090', 'geforce rtx 4090']
    },
    {
        id: 'nvidia-rtx-4080',
        name: 'NVIDIA GeForce RTX 4080 / 4080 Super',
        vendor: 'nvidia',
        vramGb: 16,
        bandwidthGBs: 736,
        isUnifiedMemory: false,
        aliases: ['rtx 4080', 'geforce rtx 4080', '4080 super']
    },
    {
        id: 'nvidia-rtx-4070-ti-super',
        name: 'NVIDIA GeForce RTX 4070 Ti Super',
        vendor: 'nvidia',
        vramGb: 16,
        bandwidthGBs: 672,
        isUnifiedMemory: false,
        aliases: ['rtx 4070 ti super', '4070 ti super']
    },
    {
        id: 'nvidia-rtx-4070-ti',
        name: 'NVIDIA GeForce RTX 4070 Ti',
        vendor: 'nvidia',
        vramGb: 12,
        bandwidthGBs: 504,
        isUnifiedMemory: false,
        aliases: ['rtx 4070 ti', 'geforce rtx 4070 ti']
    },
    {
        id: 'nvidia-rtx-4070-super',
        name: 'NVIDIA GeForce RTX 4070 Super',
        vendor: 'nvidia',
        vramGb: 12,
        bandwidthGBs: 504,
        isUnifiedMemory: false,
        aliases: ['rtx 4070 super', '4070 super']
    },
    {
        id: 'nvidia-rtx-4070',
        name: 'NVIDIA GeForce RTX 4070',
        vendor: 'nvidia',
        vramGb: 12,
        bandwidthGBs: 504,
        isUnifiedMemory: false,
        aliases: ['rtx 4070', 'geforce rtx 4070']
    },
    {
        id: 'nvidia-rtx-4060-ti-16gb',
        name: 'NVIDIA GeForce RTX 4060 Ti (16GB)',
        vendor: 'nvidia',
        vramGb: 16,
        bandwidthGBs: 288,
        isUnifiedMemory: false,
        aliases: ['rtx 4060 ti 16gb', '4060 ti 16gb']
    },
    {
        id: 'nvidia-rtx-4060-ti',
        name: 'NVIDIA GeForce RTX 4060 Ti (8GB)',
        vendor: 'nvidia',
        vramGb: 8,
        bandwidthGBs: 288,
        isUnifiedMemory: false,
        aliases: ['rtx 4060 ti', 'geforce rtx 4060 ti']
    },
    {
        id: 'nvidia-rtx-4060',
        name: 'NVIDIA GeForce RTX 4060',
        vendor: 'nvidia',
        vramGb: 8,
        bandwidthGBs: 272,
        isUnifiedMemory: false,
        aliases: ['rtx 4060', 'geforce rtx 4060']
    },

    // NVIDIA RTX 30 Series
    {
        id: 'nvidia-rtx-3090',
        name: 'NVIDIA GeForce RTX 3090 / 3090 Ti',
        vendor: 'nvidia',
        vramGb: 24,
        bandwidthGBs: 936,
        isUnifiedMemory: false,
        aliases: ['rtx 3090', 'geforce rtx 3090', '3090 ti']
    },
    {
        id: 'nvidia-rtx-3080-ti',
        name: 'NVIDIA GeForce RTX 3080 Ti',
        vendor: 'nvidia',
        vramGb: 12,
        bandwidthGBs: 912,
        isUnifiedMemory: false,
        aliases: ['rtx 3080 ti', 'geforce rtx 3080 ti']
    },
    {
        id: 'nvidia-rtx-3080',
        name: 'NVIDIA GeForce RTX 3080',
        vendor: 'nvidia',
        vramGb: 10,
        bandwidthGBs: 760,
        isUnifiedMemory: false,
        aliases: ['rtx 3080', 'geforce rtx 3080']
    },
    {
        id: 'nvidia-rtx-3070',
        name: 'NVIDIA GeForce RTX 3070 / 3070 Ti',
        vendor: 'nvidia',
        vramGb: 8,
        bandwidthGBs: 448,
        isUnifiedMemory: false,
        aliases: ['rtx 3070', 'geforce rtx 3070', '3070 ti']
    },
    {
        id: 'nvidia-rtx-3060-12gb',
        name: 'NVIDIA GeForce RTX 3060 (12GB)',
        vendor: 'nvidia',
        vramGb: 12,
        bandwidthGBs: 360,
        isUnifiedMemory: false,
        aliases: ['rtx 3060', 'geforce rtx 3060', '3060 12gb']
    },

    // AMD Radeon RX Series
    {
        id: 'amd-rx-7900-xtx',
        name: 'AMD Radeon RX 7900 XTX',
        vendor: 'amd',
        vramGb: 24,
        bandwidthGBs: 960,
        isUnifiedMemory: false,
        aliases: ['rx 7900 xtx', 'radeon rx 7900 xtx', '7900 xtx']
    },
    {
        id: 'amd-rx-7900-xt',
        name: 'AMD Radeon RX 7900 XT',
        vendor: 'amd',
        vramGb: 20,
        bandwidthGBs: 800,
        isUnifiedMemory: false,
        aliases: ['rx 7900 xt', 'radeon rx 7900 xt', '7900 xt']
    },
    {
        id: 'amd-rx-7800-xt',
        name: 'AMD Radeon RX 7800 XT',
        vendor: 'amd',
        vramGb: 16,
        bandwidthGBs: 624,
        isUnifiedMemory: false,
        aliases: ['rx 7800 xt', 'radeon rx 7800 xt', '7800 xt']
    },
    {
        id: 'amd-rx-7600-xt',
        name: 'AMD Radeon RX 7600 XT',
        vendor: 'amd',
        vramGb: 16,
        bandwidthGBs: 288,
        isUnifiedMemory: false,
        aliases: ['rx 7600 xt', 'radeon rx 7600 xt', '7600 xt']
    },
    {
        id: 'amd-rx-6800-xt',
        name: 'AMD Radeon RX 6800 / 6800 XT',
        vendor: 'amd',
        vramGb: 16,
        bandwidthGBs: 512,
        isUnifiedMemory: false,
        aliases: ['rx 6800 xt', 'rx 6800', 'radeon rx 6800']
    },

    // Intel Arc
    {
        id: 'intel-arc-b580',
        name: 'Intel Arc B580',
        vendor: 'intel',
        vramGb: 12,
        bandwidthGBs: 456,
        isUnifiedMemory: false,
        aliases: ['arc b580', 'intel b580']
    },
    {
        id: 'intel-arc-a770',
        name: 'Intel Arc A770',
        vendor: 'intel',
        vramGb: 16,
        bandwidthGBs: 560,
        isUnifiedMemory: false,
        aliases: ['arc a770', 'intel a770']
    },
    {
        id: 'intel-arc-a750',
        name: 'Intel Arc A750',
        vendor: 'intel',
        vramGb: 8,
        bandwidthGBs: 512,
        isUnifiedMemory: false,
        aliases: ['arc a750', 'intel a750']
    },

    // Fallback Integrated
    {
        id: 'generic-cpu-integrated',
        name: 'Integrated Graphics / CPU Only',
        vendor: 'generic',
        vramGb: 4,
        bandwidthGBs: 45,
        isUnifiedMemory: false,
        aliases: ['intel iris', 'intel uhd', 'amd radeon graphics', 'integrated', 'software rasterizer']
    }
];

export function findGpuInCatalog(rendererString: string): GpuSpec | null {
    if (!rendererString) return null;
    const cleanStr = rendererString.toLowerCase();

    for (const spec of HARDWARE_CATALOG) {
        for (const alias of spec.aliases) {
            if (cleanStr.includes(alias)) {
                return spec;
            }
        }
    }
    return null;
}
