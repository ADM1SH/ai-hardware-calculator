import { OllamaModel } from './ollamaModels';

export type ModelSourceType = 'ollama' | 'huggingface';
export type ModelFormatType = 'gguf' | 'mlx' | 'awq' | 'gptq' | 'safetensors';

export interface UnifiedModel extends OllamaModel {
    sources: ModelSourceType[];
    hfRepo?: string;
    ollamaSlug?: string;
    formats?: ModelFormatType[];
}

import { OLLAMA_MODELS } from './ollamaModels';

// Augmented catalog combining Ollama Library with community Hugging Face Hub models
export const HUGGINGFACE_GGUF_MODELS: UnifiedModel[] = [
    {
        "id": "hf-unsloth-Qwen3-Coder-30B-A3B-Instruct-GGUF",
        "name": "Qwen3-Coder-30B-A3B-Instruct-GGUF",
        "slug": "hf.co/unsloth/Qwen3-Coder-30B-A3B-Instruct-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "code",
        "tags": [
            "transformers",
            "gguf",
            "unsloth",
            "qwen3"
        ],
        "pullCount": "12.3M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/Qwen3-Coder-30B-A3B-Instruct-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "30.0B",
                "paramsB": 30.0,
                "downloadSizeGb": 18.4,
                "vramQ4Gb": 20.3,
                "vramQ8Gb": 33.9,
                "vramFp16Gb": 64.0,
                "kvCachePer4kGb": 1.5,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-Qwen3.8-27B-GGUF",
        "name": "Qwen3.8-27B-GGUF",
        "slug": "hf.co/unsloth/Qwen3.8-27B-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "qwen3_5",
            "unsloth",
            "base_model:Qwen/Qwen3.8-27B"
        ],
        "pullCount": "9.6M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/Qwen3.8-27B-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "27.0B",
                "paramsB": 27.0,
                "downloadSizeGb": 16.6,
                "vramQ4Gb": 18.4,
                "vramQ8Gb": 30.6,
                "vramFp16Gb": 57.7,
                "kvCachePer4kGb": 1.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-ornith-ai-Ornith-1.0-9B-GGUF",
        "name": "Ornith-1.0-9B-GGUF",
        "slug": "hf.co/ornith-ai/Ornith-1.0-9B-GGUF",
        "description": "Hugging Face repository by ornith-ai. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "text-generation",
            "license:mit"
        ],
        "pullCount": "4.4M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "ornith-ai/Ornith-1.0-9B-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "9.0B",
                "paramsB": 9.0,
                "downloadSizeGb": 5.8,
                "vramQ4Gb": 6.7,
                "vramQ8Gb": 10.8,
                "vramFp16Gb": 19.9,
                "kvCachePer4kGb": 0.45,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-ornith-ai-Ornith-1.0-35B-GGUF",
        "name": "Ornith-1.0-35B-GGUF",
        "slug": "hf.co/ornith-ai/Ornith-1.0-35B-GGUF",
        "description": "Hugging Face repository by ornith-ai. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "text-generation",
            "license:mit"
        ],
        "pullCount": "3.0M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "ornith-ai/Ornith-1.0-35B-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "35.0B",
                "paramsB": 35.0,
                "downloadSizeGb": 21.4,
                "vramQ4Gb": 23.6,
                "vramQ8Gb": 39.4,
                "vramFp16Gb": 74.5,
                "kvCachePer4kGb": 1.75,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-mixedbread-ai-mxbai-embed-large-v1",
        "name": "mxbai-embed-large-v1",
        "slug": "hf.co/mixedbread-ai/mxbai-embed-large-v1",
        "description": "Hugging Face repository by mixedbread-ai. Quantized GGUF community weights.",
        "category": "embedding",
        "tags": [
            "sentence-transformers",
            "onnx",
            "safetensors",
            "openvino"
        ],
        "pullCount": "3.0M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "mixedbread-ai/mxbai-embed-large-v1",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-ornith-ai-Ornith-1.5-9B-GGUF",
        "name": "Ornith-1.5-9B-GGUF",
        "slug": "hf.co/ornith-ai/Ornith-1.5-9B-GGUF",
        "description": "Hugging Face repository by ornith-ai. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "text-generation",
            "license:mit"
        ],
        "pullCount": "2.8M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "ornith-ai/Ornith-1.5-9B-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "9.0B",
                "paramsB": 9.0,
                "downloadSizeGb": 5.8,
                "vramQ4Gb": 6.7,
                "vramQ8Gb": 10.8,
                "vramFp16Gb": 19.9,
                "kvCachePer4kGb": 0.45,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-ornith-ai-Ornith-1.5-35B-A3B-GGUF",
        "name": "Ornith-1.5-35B-A3B-GGUF",
        "slug": "hf.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF",
        "description": "Hugging Face repository by ornith-ai. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "text-generation",
            "license:mit"
        ],
        "pullCount": "2.6M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "ornith-ai/Ornith-1.5-35B-A3B-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "35.0B",
                "paramsB": 35.0,
                "downloadSizeGb": 21.4,
                "vramQ4Gb": 23.6,
                "vramQ8Gb": 39.4,
                "vramFp16Gb": 74.5,
                "kvCachePer4kGb": 1.75,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-HauhauCS-Gemma-4-E4B-Uncensored-HauhauCS-Aggressive",
        "name": "Gemma-4-E4B-Uncensored-HauhauCS-Aggressive",
        "slug": "hf.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive",
        "description": "Hugging Face repository by HauhauCS. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "uncensored",
            "gemma4",
            "abliterated"
        ],
        "pullCount": "2.5M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-lmstudio-community-Qwen3.8-27B-GGUF",
        "name": "Qwen3.8-27B-GGUF",
        "slug": "hf.co/lmstudio-community/Qwen3.8-27B-GGUF",
        "description": "Hugging Face repository by lmstudio-community. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "base_model:Qwen/Qwen3.8-27B",
            "base_model:quantized:Qwen/Qwen3.8-27B",
            "license:apache-2.0"
        ],
        "pullCount": "2.5M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "lmstudio-community/Qwen3.8-27B-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "27.0B",
                "paramsB": 27.0,
                "downloadSizeGb": 16.6,
                "vramQ4Gb": 18.4,
                "vramQ8Gb": 30.6,
                "vramFp16Gb": 57.7,
                "kvCachePer4kGb": 1.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-JonathanColetti-Qwen3.8-27B-Uncensored-GGUF",
        "name": "Qwen3.8-27B-Uncensored-GGUF",
        "slug": "hf.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF",
        "description": "Hugging Face repository by JonathanColetti. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "llama.cpp",
            "gguf",
            "uncensored",
            "qwen3.8"
        ],
        "pullCount": "2.2M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "JonathanColetti/Qwen3.8-27B-Uncensored-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "27.0B",
                "paramsB": 27.0,
                "downloadSizeGb": 16.6,
                "vramQ4Gb": 18.4,
                "vramQ8Gb": 30.6,
                "vramFp16Gb": 57.7,
                "kvCachePer4kGb": 1.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-antirez-deepseek-v4-gguf",
        "name": "deepseek-v4-gguf",
        "slug": "hf.co/antirez/deepseek-v4-gguf",
        "description": "Hugging Face repository by antirez. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "quantized",
            "deepseek",
            "deepseek-v4"
        ],
        "pullCount": "2.0M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "antirez/deepseek-v4-gguf",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-huihui-ai-Huihui-Qwen3.8-27B-abliterated-GGUF",
        "name": "Huihui-Qwen3.8-27B-abliterated-GGUF",
        "slug": "hf.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF",
        "description": "Hugging Face repository by huihui-ai. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "abliterated",
            "uncensored"
        ],
        "pullCount": "1.9M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "27.0B",
                "paramsB": 27.0,
                "downloadSizeGb": 16.6,
                "vramQ4Gb": 18.4,
                "vramQ8Gb": 30.6,
                "vramFp16Gb": 57.7,
                "kvCachePer4kGb": 1.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-mudler-Laguna-XS-2.1-APEX-GGUF",
        "name": "Laguna-XS-2.1-APEX-GGUF",
        "slug": "hf.co/mudler/Laguna-XS-2.1-APEX-GGUF",
        "description": "Hugging Face repository by mudler. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "quantized",
            "apex",
            "moe"
        ],
        "pullCount": "1.9M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "mudler/Laguna-XS-2.1-APEX-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-handy-computer-nemotron-3.5-asr-streaming-0.6b-gguf",
        "name": "nemotron-3.5-asr-streaming-0.6b-gguf",
        "slug": "hf.co/handy-computer/nemotron-3.5-asr-streaming-0.6b-gguf",
        "description": "Hugging Face repository by handy-computer. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transcribe.cpp",
            "gguf",
            "asr",
            "speech-to-text"
        ],
        "pullCount": "1.8M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "handy-computer/nemotron-3.5-asr-streaming-0.6b-gguf",
        "variants": [
            {
                "tag": "default",
                "label": "0.6B",
                "paramsB": 0.6,
                "downloadSizeGb": 0.8,
                "vramQ4Gb": 1.2,
                "vramQ8Gb": 1.6,
                "vramFp16Gb": 2.3,
                "kvCachePer4kGb": 0.15,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-HauhauCS-Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive",
        "name": "Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive",
        "slug": "hf.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive",
        "description": "Hugging Face repository by HauhauCS. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "uncensored",
            "qwen3.6",
            "moe"
        ],
        "pullCount": "1.8M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive",
        "variants": [
            {
                "tag": "default",
                "label": "35.0B",
                "paramsB": 35.0,
                "downloadSizeGb": 21.4,
                "vramQ4Gb": 23.6,
                "vramQ8Gb": 39.4,
                "vramFp16Gb": 74.5,
                "kvCachePer4kGb": 1.75,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-audio-cpp-audio.cpp-gguf",
        "name": "audio.cpp-gguf",
        "slug": "hf.co/audio-cpp/audio.cpp-gguf",
        "description": "Hugging Face repository by audio-cpp. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "audio.cpp",
            "gguf",
            "quantized",
            "text-to-speech"
        ],
        "pullCount": "1.7M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "audio-cpp/audio.cpp-gguf",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-DavidAU-Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF",
        "name": "Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF",
        "slug": "hf.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF",
        "description": "Hugging Face repository by DavidAU. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "unsloth",
            "fine tune",
            "heretic"
        ],
        "pullCount": "1.7M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "27.0B",
                "paramsB": 27.0,
                "downloadSizeGb": 16.6,
                "vramQ4Gb": 18.4,
                "vramQ8Gb": 30.6,
                "vramFp16Gb": 57.7,
                "kvCachePer4kGb": 1.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-handy-computer-parakeet-unified-en-0.6b-gguf",
        "name": "parakeet-unified-en-0.6b-gguf",
        "slug": "hf.co/handy-computer/parakeet-unified-en-0.6b-gguf",
        "description": "Hugging Face repository by handy-computer. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transcribe.cpp",
            "gguf",
            "asr",
            "speech-to-text"
        ],
        "pullCount": "1.5M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "handy-computer/parakeet-unified-en-0.6b-gguf",
        "variants": [
            {
                "tag": "default",
                "label": "0.6B",
                "paramsB": 0.6,
                "downloadSizeGb": 0.8,
                "vramQ4Gb": 1.2,
                "vramQ8Gb": 1.6,
                "vramFp16Gb": 2.3,
                "kvCachePer4kGb": 0.15,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-Qwen3.5-9B-GGUF",
        "name": "Qwen3.5-9B-GGUF",
        "slug": "hf.co/unsloth/Qwen3.5-9B-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "transformers",
            "gguf",
            "unsloth",
            "image-text-to-text"
        ],
        "pullCount": "1.5M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/Qwen3.5-9B-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "9.0B",
                "paramsB": 9.0,
                "downloadSizeGb": 5.8,
                "vramQ4Gb": 6.7,
                "vramQ8Gb": 10.8,
                "vramFp16Gb": 19.9,
                "kvCachePer4kGb": 0.45,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-mudler-ced-gguf",
        "name": "ced-gguf",
        "slug": "hf.co/mudler/ced-gguf",
        "description": "Hugging Face repository by mudler. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "ced.cpp",
            "gguf",
            "audio-classification",
            "sound-event-detection"
        ],
        "pullCount": "1.5M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "mudler/ced-gguf",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-nvidia-parakeet-ctc-1.1b",
        "name": "parakeet-ctc-1.1b",
        "slug": "hf.co/nvidia/parakeet-ctc-1.1b",
        "description": "Hugging Face repository by nvidia. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "nemo",
            "safetensors",
            "gguf",
            "parakeet_ctc"
        ],
        "pullCount": "1.4M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "nvidia/parakeet-ctc-1.1b",
        "variants": [
            {
                "tag": "default",
                "label": "1.1B",
                "paramsB": 1.1,
                "downloadSizeGb": 1.1,
                "vramQ4Gb": 1.5,
                "vramQ8Gb": 2.1,
                "vramFp16Gb": 3.3,
                "kvCachePer4kGb": 0.15,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-HauhauCS-Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF",
        "name": "Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF",
        "slug": "hf.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF",
        "description": "Hugging Face repository by HauhauCS. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "gguf",
            "uncensored",
            "qwen3.8",
            "multimodal"
        ],
        "pullCount": "1.3M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "27.0B",
                "paramsB": 27.0,
                "downloadSizeGb": 16.6,
                "vramQ4Gb": 18.4,
                "vramQ8Gb": 30.6,
                "vramFp16Gb": 57.7,
                "kvCachePer4kGb": 1.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-Qwen3-30B-A3B-Thinking-2507-GGUF",
        "name": "Qwen3-30B-A3B-Thinking-2507-GGUF",
        "slug": "hf.co/unsloth/Qwen3-30B-A3B-Thinking-2507-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "qwen",
            "qwen3"
        ],
        "pullCount": "1.3M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/Qwen3-30B-A3B-Thinking-2507-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "30.0B",
                "paramsB": 30.0,
                "downloadSizeGb": 18.4,
                "vramQ4Gb": 20.3,
                "vramQ8Gb": 33.9,
                "vramFp16Gb": 64.0,
                "kvCachePer4kGb": 1.5,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-0bserverx-Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF",
        "name": "Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF",
        "slug": "hf.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF",
        "description": "Hugging Face repository by 0bserverx. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "qwen3.8",
            "qwen3.5"
        ],
        "pullCount": "1.3M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "27.0B",
                "paramsB": 27.0,
                "downloadSizeGb": 16.6,
                "vramQ4Gb": 18.4,
                "vramQ8Gb": 30.6,
                "vramFp16Gb": 57.7,
                "kvCachePer4kGb": 1.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-gemma-4-12B-it-qat-GGUF",
        "name": "gemma-4-12B-it-qat-GGUF",
        "slug": "hf.co/unsloth/gemma-4-12B-it-qat-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "gemma4",
            "unsloth"
        ],
        "pullCount": "1.3M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/gemma-4-12B-it-qat-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "12.0B",
                "paramsB": 12.0,
                "downloadSizeGb": 7.6,
                "vramQ4Gb": 8.6,
                "vramQ8Gb": 14.1,
                "vramFp16Gb": 26.2,
                "kvCachePer4kGb": 0.6,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-Qwen3.6-35B-A3B-GGUF",
        "name": "Qwen3.6-35B-A3B-GGUF",
        "slug": "hf.co/unsloth/Qwen3.6-35B-A3B-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "unsloth",
            "qwen"
        ],
        "pullCount": "1.2M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/Qwen3.6-35B-A3B-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "35.0B",
                "paramsB": 35.0,
                "downloadSizeGb": 21.4,
                "vramQ4Gb": 23.6,
                "vramQ8Gb": 39.4,
                "vramFp16Gb": 74.5,
                "kvCachePer4kGb": 1.75,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-Inkling-Small-GGUF",
        "name": "Inkling-Small-GGUF",
        "slug": "hf.co/unsloth/Inkling-Small-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "gguf",
            "conversational",
            "image-text-to-text",
            "audio-text-to-text"
        ],
        "pullCount": "1.2M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/Inkling-Small-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-Qwen3.6-27B-GGUF",
        "name": "Qwen3.6-27B-GGUF",
        "slug": "hf.co/unsloth/Qwen3.6-27B-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "unsloth",
            "qwen"
        ],
        "pullCount": "1.2M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/Qwen3.6-27B-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "27.0B",
                "paramsB": 27.0,
                "downloadSizeGb": 16.6,
                "vramQ4Gb": 18.4,
                "vramQ8Gb": 30.6,
                "vramFp16Gb": 57.7,
                "kvCachePer4kGb": 1.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-cdiamond-Qwen3.8-27B-iMatrix-NVFP4-MTP-GGUF",
        "name": "Qwen3.8-27B-iMatrix-NVFP4-MTP-GGUF",
        "slug": "hf.co/cdiamond/Qwen3.8-27B-iMatrix-NVFP4-MTP-GGUF",
        "description": "Hugging Face repository by cdiamond. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "qwen",
            "qwen3.8",
            "nvfp4"
        ],
        "pullCount": "1.2M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "cdiamond/Qwen3.8-27B-iMatrix-NVFP4-MTP-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "27.0B",
                "paramsB": 27.0,
                "downloadSizeGb": 16.6,
                "vramQ4Gb": 18.4,
                "vramQ8Gb": 30.6,
                "vramFp16Gb": 57.7,
                "kvCachePer4kGb": 1.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-mudler-KAT-Coder-V2.5-Dev-APEX-GGUF",
        "name": "KAT-Coder-V2.5-Dev-APEX-GGUF",
        "slug": "hf.co/mudler/KAT-Coder-V2.5-Dev-APEX-GGUF",
        "description": "Hugging Face repository by mudler. Quantized GGUF community weights.",
        "category": "code",
        "tags": [
            "gguf",
            "quantized",
            "apex",
            "moe"
        ],
        "pullCount": "1.1M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "mudler/KAT-Coder-V2.5-Dev-APEX-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-Abiray-MiniMax-H3-GGUF",
        "name": "MiniMax-H3-GGUF",
        "slug": "hf.co/Abiray/MiniMax-H3-GGUF",
        "description": "Hugging Face repository by Abiray. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "gguf",
            "comfyui",
            "text-to-video",
            "image-to-video"
        ],
        "pullCount": "1.1M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "Abiray/MiniMax-H3-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-ggml-org-Qwen3.8-27B-GGUF",
        "name": "Qwen3.8-27B-GGUF",
        "slug": "hf.co/ggml-org/Qwen3.8-27B-GGUF",
        "description": "Hugging Face repository by ggml-org. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "gguf",
            "quantized",
            "image-text-to-text",
            "base_model:Qwen/Qwen3.8-27B"
        ],
        "pullCount": "1.0M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "ggml-org/Qwen3.8-27B-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "27.0B",
                "paramsB": 27.0,
                "downloadSizeGb": 16.6,
                "vramQ4Gb": 18.4,
                "vramQ8Gb": 30.6,
                "vramFp16Gb": 57.7,
                "kvCachePer4kGb": 1.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-Muse-Glimmer-30B-GGUF",
        "name": "Muse-Glimmer-30B-GGUF",
        "slug": "hf.co/unsloth/Muse-Glimmer-30B-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "unsloth",
            "meta"
        ],
        "pullCount": "1.0M downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/Muse-Glimmer-30B-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "30.0B",
                "paramsB": 30.0,
                "downloadSizeGb": 18.4,
                "vramQ4Gb": 20.3,
                "vramQ8Gb": 33.9,
                "vramFp16Gb": 64.0,
                "kvCachePer4kGb": 1.5,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-datalab-to-surya-ocr-2-gguf",
        "name": "surya-ocr-2-gguf",
        "slug": "hf.co/datalab-to/surya-ocr-2-gguf",
        "description": "Hugging Face repository by datalab-to. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "transformers",
            "gguf",
            "qwen3_5",
            "image-text-to-text"
        ],
        "pullCount": "977.9K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "datalab-to/surya-ocr-2-gguf",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-LiquidAI-LFM2.5-2.6B-GGUF",
        "name": "LFM2.5-2.6B-GGUF",
        "slug": "hf.co/LiquidAI/LFM2.5-2.6B-GGUF",
        "description": "Hugging Face repository by LiquidAI. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "liquid",
            "lfm2.5",
            "llama.cpp"
        ],
        "pullCount": "971.0K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "LiquidAI/LFM2.5-2.6B-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "2.6B",
                "paramsB": 2.6,
                "downloadSizeGb": 2.0,
                "vramQ4Gb": 2.5,
                "vramQ8Gb": 3.8,
                "vramFp16Gb": 6.5,
                "kvCachePer4kGb": 0.15,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-Qwen3.5-4B-GGUF",
        "name": "Qwen3.5-4B-GGUF",
        "slug": "hf.co/unsloth/Qwen3.5-4B-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "transformers",
            "gguf",
            "unsloth",
            "image-text-to-text"
        ],
        "pullCount": "969.4K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/Qwen3.5-4B-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "4.0B",
                "paramsB": 4.0,
                "downloadSizeGb": 2.8,
                "vramQ4Gb": 3.4,
                "vramQ8Gb": 5.3,
                "vramFp16Gb": 9.4,
                "kvCachePer4kGb": 0.2,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-LuffyTheFox-Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V13-GGUF",
        "name": "Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V13-GGUF",
        "slug": "hf.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V13-GGUF",
        "description": "Hugging Face repository by LuffyTheFox. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "hermes",
            "gguf",
            "uncensored",
            "qwen3.6"
        ],
        "pullCount": "941.7K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V13-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "35.0B",
                "paramsB": 35.0,
                "downloadSizeGb": 21.4,
                "vramQ4Gb": 23.6,
                "vramQ8Gb": 39.4,
                "vramFp16Gb": 74.5,
                "kvCachePer4kGb": 1.75,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-gemma-4-26B-A4B-it-GGUF",
        "name": "gemma-4-26B-A4B-it-GGUF",
        "slug": "hf.co/unsloth/gemma-4-26B-A4B-it-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "gemma4",
            "unsloth",
            "gemma"
        ],
        "pullCount": "937.7K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/gemma-4-26B-A4B-it-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "26.0B",
                "paramsB": 26.0,
                "downloadSizeGb": 16.0,
                "vramQ4Gb": 17.7,
                "vramQ8Gb": 29.5,
                "vramFp16Gb": 55.6,
                "kvCachePer4kGb": 1.3,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-handy-computer-cohere-transcribe-03-2026-gguf",
        "name": "cohere-transcribe-03-2026-gguf",
        "slug": "hf.co/handy-computer/cohere-transcribe-03-2026-gguf",
        "description": "Hugging Face repository by handy-computer. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transcribe.cpp",
            "gguf",
            "asr",
            "speech-to-text"
        ],
        "pullCount": "924.1K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "handy-computer/cohere-transcribe-03-2026-gguf",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-rippertnt-HyperCLOVAX-SEED-Text-Instruct-1.5B-Q4_K_M-GGUF",
        "name": "HyperCLOVAX-SEED-Text-Instruct-1.5B-Q4_K_M-GGUF",
        "slug": "hf.co/rippertnt/HyperCLOVAX-SEED-Text-Instruct-1.5B-Q4_K_M-GGUF",
        "description": "Hugging Face repository by rippertnt. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "llama",
            "llama-cpp",
            "gguf-my-repo"
        ],
        "pullCount": "919.3K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "rippertnt/HyperCLOVAX-SEED-Text-Instruct-1.5B-Q4_K_M-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "1.5B",
                "paramsB": 1.5,
                "downloadSizeGb": 1.3,
                "vramQ4Gb": 1.8,
                "vramQ8Gb": 2.6,
                "vramFp16Gb": 4.2,
                "kvCachePer4kGb": 0.15,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-nvidia-nemotron-3.5-asr-streaming-0.6b",
        "name": "nemotron-3.5-asr-streaming-0.6b",
        "slug": "hf.co/nvidia/nemotron-3.5-asr-streaming-0.6b",
        "description": "Hugging Face repository by nvidia. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "nemo",
            "safetensors",
            "gguf",
            "nemotron3_5_asr"
        ],
        "pullCount": "917.3K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "nvidia/nemotron-3.5-asr-streaming-0.6b",
        "variants": [
            {
                "tag": "default",
                "label": "0.6B",
                "paramsB": 0.6,
                "downloadSizeGb": 0.8,
                "vramQ4Gb": 1.2,
                "vramQ8Gb": 1.6,
                "vramFp16Gb": 2.3,
                "kvCachePer4kGb": 0.15,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-LocalAI-io-privacy-filter-nemotron-GGUF",
        "name": "privacy-filter-nemotron-GGUF",
        "slug": "hf.co/LocalAI-io/privacy-filter-nemotron-GGUF",
        "description": "Hugging Face repository by LocalAI-io. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "privacy-filter.cpp",
            "llama-cpp",
            "localai"
        ],
        "pullCount": "904.2K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "LocalAI-io/privacy-filter-nemotron-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-DavidAU-Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF",
        "name": "Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF",
        "slug": "hf.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF",
        "description": "Hugging Face repository by DavidAU. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "MTP GGUFS",
            "Regular GGUFS",
            "NEO Imatrix"
        ],
        "pullCount": "872.9K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "9.0B",
                "paramsB": 9.0,
                "downloadSizeGb": 5.8,
                "vramQ4Gb": 6.7,
                "vramQ8Gb": 10.8,
                "vramFp16Gb": 19.9,
                "kvCachePer4kGb": 0.45,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-Serveurperso-Qwen3-TTS-GGUF",
        "name": "Qwen3-TTS-GGUF",
        "slug": "hf.co/Serveurperso/Qwen3-TTS-GGUF",
        "description": "Hugging Face repository by Serveurperso. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "tts",
            "text-to-speech",
            "voice-cloning"
        ],
        "pullCount": "863.2K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "Serveurperso/Qwen3-TTS-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-OBLITERATUS-Qwen3.8-27B-OBLITERATED",
        "name": "Qwen3.8-27B-OBLITERATED",
        "slug": "hf.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED",
        "description": "Hugging Face repository by OBLITERATUS. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "mlx",
            "safetensors",
            "gguf",
            "qwen3_5"
        ],
        "pullCount": "848.8K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "OBLITERATUS/Qwen3.8-27B-OBLITERATED",
        "variants": [
            {
                "tag": "default",
                "label": "27.0B",
                "paramsB": 27.0,
                "downloadSizeGb": 16.6,
                "vramQ4Gb": 18.4,
                "vramQ8Gb": 30.6,
                "vramFp16Gb": 57.7,
                "kvCachePer4kGb": 1.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-HauhauCS-Qwen3.5-9B-Uncensored-HauhauCS-Aggressive",
        "name": "Qwen3.5-9B-Uncensored-HauhauCS-Aggressive",
        "slug": "hf.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive",
        "description": "Hugging Face repository by HauhauCS. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "uncensored",
            "qwen3.5",
            "qwen"
        ],
        "pullCount": "825.8K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive",
        "variants": [
            {
                "tag": "default",
                "label": "9.0B",
                "paramsB": 9.0,
                "downloadSizeGb": 5.8,
                "vramQ4Gb": 6.7,
                "vramQ8Gb": 10.8,
                "vramFp16Gb": 19.9,
                "kvCachePer4kGb": 0.45,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-Qwen3.6-27B-MTP-GGUF",
        "name": "Qwen3.6-27B-MTP-GGUF",
        "slug": "hf.co/unsloth/Qwen3.6-27B-MTP-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "unsloth",
            "qwen"
        ],
        "pullCount": "823.0K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/Qwen3.6-27B-MTP-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "27.0B",
                "paramsB": 27.0,
                "downloadSizeGb": 16.6,
                "vramQ4Gb": 18.4,
                "vramQ8Gb": 30.6,
                "vramFp16Gb": 57.7,
                "kvCachePer4kGb": 1.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-nvidia-parakeet-tdt-0.6b-v3",
        "name": "parakeet-tdt-0.6b-v3",
        "slug": "hf.co/nvidia/parakeet-tdt-0.6b-v3",
        "description": "Hugging Face repository by nvidia. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "nemo",
            "safetensors",
            "gguf"
        ],
        "pullCount": "738.9K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "nvidia/parakeet-tdt-0.6b-v3",
        "variants": [
            {
                "tag": "default",
                "label": "0.6B",
                "paramsB": 0.6,
                "downloadSizeGb": 0.8,
                "vramQ4Gb": 1.2,
                "vramQ8Gb": 1.6,
                "vramFp16Gb": 2.3,
                "kvCachePer4kGb": 0.15,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-bartowski-endless-frontier_BigBang-v1-GGUF",
        "name": "endless-frontier_BigBang-v1-GGUF",
        "slug": "hf.co/bartowski/endless-frontier_BigBang-v1-GGUF",
        "description": "Hugging Face repository by bartowski. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "gguf",
            "image-text-to-text",
            "en",
            "base_model:endless-frontier/BigBang-v1"
        ],
        "pullCount": "731.4K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "bartowski/endless-frontier_BigBang-v1-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-legraphista-glm-4-9b-chat-IMat-GGUF",
        "name": "glm-4-9b-chat-IMat-GGUF",
        "slug": "hf.co/legraphista/glm-4-9b-chat-IMat-GGUF",
        "description": "Hugging Face repository by legraphista. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "glm",
            "chatglm",
            "thudm"
        ],
        "pullCount": "719.0K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "legraphista/glm-4-9b-chat-IMat-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "9.0B",
                "paramsB": 9.0,
                "downloadSizeGb": 5.8,
                "vramQ4Gb": 6.7,
                "vramQ8Gb": 10.8,
                "vramFp16Gb": 19.9,
                "kvCachePer4kGb": 0.45,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-google-gemma-4-12B-it-qat-q4_0-gguf",
        "name": "gemma-4-12B-it-qat-q4_0-gguf",
        "slug": "hf.co/google/gemma-4-12B-it-qat-q4_0-gguf",
        "description": "Hugging Face repository by google. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "any-to-any",
            "arxiv:2607.02770"
        ],
        "pullCount": "713.7K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "google/gemma-4-12B-it-qat-q4_0-gguf",
        "variants": [
            {
                "tag": "default",
                "label": "12.0B",
                "paramsB": 12.0,
                "downloadSizeGb": 7.6,
                "vramQ4Gb": 8.6,
                "vramQ8Gb": 14.1,
                "vramFp16Gb": 26.2,
                "kvCachePer4kGb": 0.6,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-PaddlePaddle-PaddleOCR-VL-1.6-GGUF",
        "name": "PaddleOCR-VL-1.6-GGUF",
        "slug": "hf.co/PaddlePaddle/PaddleOCR-VL-1.6-GGUF",
        "description": "Hugging Face repository by PaddlePaddle. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "gguf",
            "arxiv:2606.03264",
            "license:apache-2.0",
            "endpoints_compatible"
        ],
        "pullCount": "683.0K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "PaddlePaddle/PaddleOCR-VL-1.6-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-gemma-4-26B-A4B-it-qat-GGUF",
        "name": "gemma-4-26B-A4B-it-qat-GGUF",
        "slug": "hf.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "transformers",
            "gguf",
            "gemma4",
            "image-text-to-text"
        ],
        "pullCount": "671.7K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/gemma-4-26B-A4B-it-qat-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "26.0B",
                "paramsB": 26.0,
                "downloadSizeGb": 16.0,
                "vramQ4Gb": 17.7,
                "vramQ8Gb": 29.5,
                "vramFp16Gb": 55.6,
                "kvCachePer4kGb": 1.3,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-FINAL-Bench-POCKET-35B-GGUF",
        "name": "POCKET-35B-GGUF",
        "slug": "hf.co/FINAL-Bench/POCKET-35B-GGUF",
        "description": "Hugging Face repository by FINAL-Bench. Quantized GGUF community weights.",
        "category": "code",
        "tags": [
            "llama.cpp",
            "gguf",
            "conversational",
            "on-device"
        ],
        "pullCount": "638.0K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "FINAL-Bench/POCKET-35B-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "35.0B",
                "paramsB": 35.0,
                "downloadSizeGb": 21.4,
                "vramQ4Gb": 23.6,
                "vramQ8Gb": 39.4,
                "vramFp16Gb": 74.5,
                "kvCachePer4kGb": 1.75,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-ornith-ai-Ornith-1.5-397B-GGUF",
        "name": "Ornith-1.5-397B-GGUF",
        "slug": "hf.co/ornith-ai/Ornith-1.5-397B-GGUF",
        "description": "Hugging Face repository by ornith-ai. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "text-generation",
            "license:mit"
        ],
        "pullCount": "636.9K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "ornith-ai/Ornith-1.5-397B-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "397.0B",
                "paramsB": 397.0,
                "downloadSizeGb": 238.6,
                "vramQ4Gb": 258.9,
                "vramQ8Gb": 437.6,
                "vramFp16Gb": 834.7,
                "kvCachePer4kGb": 19.85,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-mradermacher-Qwen3-VL-8B-Instruct-abliterated-GGUF",
        "name": "Qwen3-VL-8B-Instruct-abliterated-GGUF",
        "slug": "hf.co/mradermacher/Qwen3-VL-8B-Instruct-abliterated-GGUF",
        "description": "Hugging Face repository by mradermacher. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "text-generation-inference",
            "abliterated"
        ],
        "pullCount": "632.4K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "mradermacher/Qwen3-VL-8B-Instruct-abliterated-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "8.0B",
                "paramsB": 8.0,
                "downloadSizeGb": 5.2,
                "vramQ4Gb": 6.0,
                "vramQ8Gb": 9.7,
                "vramFp16Gb": 17.8,
                "kvCachePer4kGb": 0.4,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-gemma-4-31B-it-qat-GGUF",
        "name": "gemma-4-31B-it-qat-GGUF",
        "slug": "hf.co/unsloth/gemma-4-31B-it-qat-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "transformers",
            "gguf",
            "gemma4",
            "image-text-to-text"
        ],
        "pullCount": "629.2K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/gemma-4-31B-it-qat-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "31.0B",
                "paramsB": 31.0,
                "downloadSizeGb": 19.0,
                "vramQ4Gb": 21.0,
                "vramQ8Gb": 35.0,
                "vramFp16Gb": 66.1,
                "kvCachePer4kGb": 1.55,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-bartowski-XYZAILab_XYZ-Aquila-mini-GGUF",
        "name": "XYZAILab_XYZ-Aquila-mini-GGUF",
        "slug": "hf.co/bartowski/XYZAILab_XYZ-Aquila-mini-GGUF",
        "description": "Hugging Face repository by bartowski. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "safetensors",
            "qwen3.6",
            "agentic-search"
        ],
        "pullCount": "627.4K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "bartowski/XYZAILab_XYZ-Aquila-mini-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-lmstudio-community-gemma-4-E4B-it-GGUF",
        "name": "gemma-4-E4B-it-GGUF",
        "slug": "hf.co/lmstudio-community/gemma-4-E4B-it-GGUF",
        "description": "Hugging Face repository by lmstudio-community. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "base_model:google/gemma-4-E4B-it",
            "base_model:quantized:google/gemma-4-E4B-it",
            "license:apache-2.0"
        ],
        "pullCount": "616.1K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "lmstudio-community/gemma-4-E4B-it-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-city96-Wan2.1-I2V-14B-480P-gguf",
        "name": "Wan2.1-I2V-14B-480P-gguf",
        "slug": "hf.co/city96/Wan2.1-I2V-14B-480P-gguf",
        "description": "Hugging Face repository by city96. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "gguf",
            "video",
            "video-generation",
            "image-to-video"
        ],
        "pullCount": "614.0K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "city96/Wan2.1-I2V-14B-480P-gguf",
        "variants": [
            {
                "tag": "default",
                "label": "14.0B",
                "paramsB": 14.0,
                "downloadSizeGb": 8.8,
                "vramQ4Gb": 9.9,
                "vramQ8Gb": 16.3,
                "vramFp16Gb": 30.4,
                "kvCachePer4kGb": 0.7,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-prism-ml-Ternary-Bonsai-27B-gguf",
        "name": "Ternary-Bonsai-27B-gguf",
        "slug": "hf.co/prism-ml/Ternary-Bonsai-27B-gguf",
        "description": "Hugging Face repository by prism-ml. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "llama.cpp",
            "gguf",
            "conversational",
            "ternary"
        ],
        "pullCount": "612.7K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "prism-ml/Ternary-Bonsai-27B-gguf",
        "variants": [
            {
                "tag": "default",
                "label": "27.0B",
                "paramsB": 27.0,
                "downloadSizeGb": 16.6,
                "vramQ4Gb": 18.4,
                "vramQ8Gb": 30.6,
                "vramFp16Gb": 57.7,
                "kvCachePer4kGb": 1.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-poolside-Laguna-S-2.1-GGUF",
        "name": "Laguna-S-2.1-GGUF",
        "slug": "hf.co/poolside/Laguna-S-2.1-GGUF",
        "description": "Hugging Face repository by poolside. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "base_model:poolside/Laguna-S-2.1",
            "base_model:quantized:poolside/Laguna-S-2.1",
            "endpoints_compatible"
        ],
        "pullCount": "605.7K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "poolside/Laguna-S-2.1-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-handy-computer-parakeet-tdt-0.6b-v3-gguf",
        "name": "parakeet-tdt-0.6b-v3-gguf",
        "slug": "hf.co/handy-computer/parakeet-tdt-0.6b-v3-gguf",
        "description": "Hugging Face repository by handy-computer. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transcribe.cpp",
            "gguf",
            "asr",
            "speech-to-text"
        ],
        "pullCount": "604.1K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "handy-computer/parakeet-tdt-0.6b-v3-gguf",
        "variants": [
            {
                "tag": "default",
                "label": "0.6B",
                "paramsB": 0.6,
                "downloadSizeGb": 0.8,
                "vramQ4Gb": 1.2,
                "vramQ8Gb": 1.6,
                "vramFp16Gb": 2.3,
                "kvCachePer4kGb": 0.15,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-gemma-4-E4B-it-qat-GGUF",
        "name": "gemma-4-E4B-it-qat-GGUF",
        "slug": "hf.co/unsloth/gemma-4-E4B-it-qat-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "transformers",
            "gguf",
            "gemma4",
            "image-text-to-text"
        ],
        "pullCount": "594.7K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/gemma-4-E4B-it-qat-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-google-gemma-4-E4B-it-qat-q4_0-gguf",
        "name": "gemma-4-E4B-it-qat-q4_0-gguf",
        "slug": "hf.co/google/gemma-4-E4B-it-qat-q4_0-gguf",
        "description": "Hugging Face repository by google. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "any-to-any",
            "arxiv:2607.02770",
            "base_model:google/gemma-4-E4B-it-qat-q4_0-unquantized"
        ],
        "pullCount": "591.8K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "google/gemma-4-E4B-it-qat-q4_0-gguf",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-inkling-GGUF",
        "name": "inkling-GGUF",
        "slug": "hf.co/unsloth/inkling-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "gguf",
            "conversational",
            "image-text-to-text",
            "audio-text-to-text"
        ],
        "pullCount": "589.5K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/inkling-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-gemma-4-E2B-it-GGUF",
        "name": "gemma-4-E2B-it-GGUF",
        "slug": "hf.co/unsloth/gemma-4-E2B-it-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "gemma4",
            "unsloth",
            "gemma"
        ],
        "pullCount": "579.1K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/gemma-4-E2B-it-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-empero-ai-Qwythos-9B-v2-GGUF",
        "name": "Qwythos-9B-v2-GGUF",
        "slug": "hf.co/empero-ai/Qwythos-9B-v2-GGUF",
        "description": "Hugging Face repository by empero-ai. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "llama.cpp",
            "quantized",
            "qwythos"
        ],
        "pullCount": "574.0K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "empero-ai/Qwythos-9B-v2-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "9.0B",
                "paramsB": 9.0,
                "downloadSizeGb": 5.8,
                "vramQ4Gb": 6.7,
                "vramQ8Gb": 10.8,
                "vramFp16Gb": 19.9,
                "kvCachePer4kGb": 0.45,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-huihui-ai-Huihui-DeepSeek-V4-Flash-0731-abliterated-GGUF",
        "name": "Huihui-DeepSeek-V4-Flash-0731-abliterated-GGUF",
        "slug": "hf.co/huihui-ai/Huihui-DeepSeek-V4-Flash-0731-abliterated-GGUF",
        "description": "Hugging Face repository by huihui-ai. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "abliterated",
            "uncensored",
            "GGUF"
        ],
        "pullCount": "572.0K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "huihui-ai/Huihui-DeepSeek-V4-Flash-0731-abliterated-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-lmstudio-community-Qwen3.5-9B-GGUF",
        "name": "Qwen3.5-9B-GGUF",
        "slug": "hf.co/lmstudio-community/Qwen3.5-9B-GGUF",
        "description": "Hugging Face repository by lmstudio-community. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "base_model:Qwen/Qwen3.5-9B",
            "base_model:quantized:Qwen/Qwen3.5-9B",
            "license:apache-2.0"
        ],
        "pullCount": "566.5K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "lmstudio-community/Qwen3.5-9B-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "9.0B",
                "paramsB": 9.0,
                "downloadSizeGb": 5.8,
                "vramQ4Gb": 6.7,
                "vramQ8Gb": 10.8,
                "vramFp16Gb": 19.9,
                "kvCachePer4kGb": 0.45,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-yuxinlu1-gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF",
        "name": "gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF",
        "slug": "hf.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF",
        "description": "Hugging Face repository by yuxinlu1. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "gemma4",
            "coding",
            "agentic"
        ],
        "pullCount": "566.3K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "12.0B",
                "paramsB": 12.0,
                "downloadSizeGb": 7.6,
                "vramQ4Gb": 8.6,
                "vramQ8Gb": 14.1,
                "vramFp16Gb": 26.2,
                "kvCachePer4kGb": 0.6,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-ggml-org-models-moved",
        "name": "models-moved",
        "slug": "hf.co/ggml-org/models-moved",
        "description": "Hugging Face repository by ggml-org. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "endpoints_compatible",
            "region:us"
        ],
        "pullCount": "556.1K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "ggml-org/models-moved",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-DeepBeepMeep-MiniMax-H3",
        "name": "MiniMax-H3",
        "slug": "hf.co/DeepBeepMeep/MiniMax-H3",
        "description": "Hugging Face repository by DeepBeepMeep. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "diffusion-single-file",
            "onnx",
            "gguf",
            "region:us"
        ],
        "pullCount": "550.0K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "DeepBeepMeep/MiniMax-H3",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-gpt-oss-20b-GGUF",
        "name": "gpt-oss-20b-GGUF",
        "slug": "hf.co/unsloth/gpt-oss-20b-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "gpt_oss",
            "text-generation"
        ],
        "pullCount": "548.0K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/gpt-oss-20b-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "20.0B",
                "paramsB": 20.0,
                "downloadSizeGb": 12.4,
                "vramQ4Gb": 13.8,
                "vramQ8Gb": 22.9,
                "vramFp16Gb": 43.0,
                "kvCachePer4kGb": 1.0,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-Qwen3.6-35B-A3B-MTP-GGUF",
        "name": "Qwen3.6-35B-A3B-MTP-GGUF",
        "slug": "hf.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "unsloth",
            "qwen"
        ],
        "pullCount": "546.2K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/Qwen3.6-35B-A3B-MTP-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "35.0B",
                "paramsB": 35.0,
                "downloadSizeGb": 21.4,
                "vramQ4Gb": 23.6,
                "vramQ8Gb": 39.4,
                "vramFp16Gb": 74.5,
                "kvCachePer4kGb": 1.75,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-google-gemma-4-26B-A4B-it-qat-q4_0-gguf",
        "name": "gemma-4-26B-A4B-it-qat-q4_0-gguf",
        "slug": "hf.co/google/gemma-4-26B-A4B-it-qat-q4_0-gguf",
        "description": "Hugging Face repository by google. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "transformers",
            "gguf",
            "image-text-to-text",
            "arxiv:2607.02770"
        ],
        "pullCount": "536.4K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "google/gemma-4-26B-A4B-it-qat-q4_0-gguf",
        "variants": [
            {
                "tag": "default",
                "label": "26.0B",
                "paramsB": 26.0,
                "downloadSizeGb": 16.0,
                "vramQ4Gb": 17.7,
                "vramQ8Gb": 29.5,
                "vramFp16Gb": 55.6,
                "kvCachePer4kGb": 1.3,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-gemma-4-E2B-it-qat-GGUF",
        "name": "gemma-4-E2B-it-qat-GGUF",
        "slug": "hf.co/unsloth/gemma-4-E2B-it-qat-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "transformers",
            "gguf",
            "gemma4",
            "image-text-to-text"
        ],
        "pullCount": "536.3K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/gemma-4-E2B-it-qat-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-Qwen3.8-Flash-Next-GGUF",
        "name": "Qwen3.8-Flash-Next-GGUF",
        "slug": "hf.co/unsloth/Qwen3.8-Flash-Next-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "vision",
        "tags": [
            "gguf",
            "unsloth",
            "image-text-to-text",
            "base_model:Qwen/Qwen3.8-Flash-Next"
        ],
        "pullCount": "536.0K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/Qwen3.8-Flash-Next-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-unsloth-gemma-4-E4B-it-GGUF",
        "name": "gemma-4-E4B-it-GGUF",
        "slug": "hf.co/unsloth/gemma-4-E4B-it-GGUF",
        "description": "Hugging Face repository by unsloth. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "gguf",
            "gemma4",
            "unsloth",
            "gemma"
        ],
        "pullCount": "529.5K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "unsloth/gemma-4-E4B-it-GGUF",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    },
    {
        "id": "hf-google-gemma-4-E2B-it-qat-q4_0-gguf",
        "name": "gemma-4-E2B-it-qat-q4_0-gguf",
        "slug": "hf.co/google/gemma-4-E2B-it-qat-q4_0-gguf",
        "description": "Hugging Face repository by google. Quantized GGUF community weights.",
        "category": "chat",
        "tags": [
            "transformers",
            "gguf",
            "any-to-any",
            "arxiv:2607.02770"
        ],
        "pullCount": "513.5K downloads",
        "updatedAt": "Active",
        "sources": [
            "huggingface"
        ],
        "hfRepo": "google/gemma-4-E2B-it-qat-q4_0-gguf",
        "variants": [
            {
                "tag": "default",
                "label": "7.0B",
                "paramsB": 7.0,
                "downloadSizeGb": 4.6,
                "vramQ4Gb": 5.3,
                "vramQ8Gb": 8.6,
                "vramFp16Gb": 15.7,
                "kvCachePer4kGb": 0.35,
                "defaultContext": 32768,
                "isMoE": false,
                "activeParamsB": null
            }
        ]
    }
];

export const ADDITIONAL_OLLAMA_MODELS: UnifiedModel[] = [
    {
        id: 'falcon',
        name: 'Falcon',
        slug: 'falcon',
        description: 'TII flagship foundation model trained on RefinedWeb dataset with multi-query attention.',
        category: 'chat',
        tags: ['tii', 'open-data', 'general'],
        pullCount: '1.2M',
        updatedAt: '8 months ago',
        sources: ['ollama'],
        variants: [
            { tag: '7b', label: '7B', paramsB: 7.0, downloadSizeGb: 4.1, vramQ4Gb: 5.2, vramQ8Gb: 8.0, vramFp16Gb: 15.0, kvCachePer4kGb: 0.5, defaultContext: 2048 },
            { tag: '40b', label: '40B', paramsB: 40.0, downloadSizeGb: 24.0, vramQ4Gb: 28.0, vramQ8Gb: 44.0, vramFp16Gb: 84.0, kvCachePer4kGb: 1.5, defaultContext: 2048 }
        ]
    },
    {
        id: 'vicuna',
        name: 'Vicuna',
        slug: 'vicuna',
        description: 'LMSYS chatbot model fine-tuned on user-shared ShareGPT conversations with high instruction fidelity.',
        category: 'chat',
        tags: ['lmsys', 'chat', 'instruction'],
        pullCount: '3.1M',
        updatedAt: '9 months ago',
        sources: ['ollama'],
        variants: [
            { tag: '7b', label: '7B', paramsB: 7.0, downloadSizeGb: 3.8, vramQ4Gb: 5.0, vramQ8Gb: 7.8, vramFp16Gb: 14.8, kvCachePer4kGb: 0.5, defaultContext: 4096 },
            { tag: '13b', label: '13B', paramsB: 13.0, downloadSizeGb: 7.3, vramQ4Gb: 9.2, vramQ8Gb: 14.1, vramFp16Gb: 27.0, kvCachePer4kGb: 0.75, defaultContext: 4096 }
        ]
    },
    {
        id: 'wizardlm2',
        name: 'WizardLM 2',
        slug: 'wizardlm2',
        description: 'Microsoft next-generation Wizard model trained with complex synthetic instruction tuning.',
        category: 'chat',
        tags: ['microsoft', 'reasoning', 'instruction'],
        pullCount: '4.5M',
        updatedAt: '6 months ago',
        sources: ['ollama'],
        variants: [
            { tag: '7b', label: '7B', paramsB: 7.0, downloadSizeGb: 4.1, vramQ4Gb: 5.3, vramQ8Gb: 8.0, vramFp16Gb: 15.0, kvCachePer4kGb: 0.5, defaultContext: 32768 },
            { tag: '8x22b', label: '8x22B', paramsB: 141.0, downloadSizeGb: 78.0, vramQ4Gb: 89.0, vramQ8Gb: 152.0, vramFp16Gb: 290.0, kvCachePer4kGb: 2.8, defaultContext: 65536, isMoE: true, activeParamsB: 39.0 }
        ]
    },
    {
        id: 'openhermes',
        name: 'OpenHermes 2.5',
        slug: 'openhermes',
        description: 'Nous Research tuned model on OpenHermes 2.5 dataset with strong general knowledge and roleplay.',
        category: 'chat',
        tags: ['nous', 'chat', 'curated'],
        pullCount: '2.8M',
        updatedAt: '8 months ago',
        sources: ['ollama'],
        variants: [
            { tag: '7b', label: '7B', paramsB: 7.0, downloadSizeGb: 4.1, vramQ4Gb: 5.2, vramQ8Gb: 7.9, vramFp16Gb: 14.9, kvCachePer4kGb: 0.5, defaultContext: 8192 }
        ]
    },
    {
        id: 'starling-lm',
        name: 'Starling LM',
        slug: 'starling-lm',
        description: 'Berkeley RLAIF trained model using K-fold ranking and direct preference alignment for human parity.',
        category: 'chat',
        tags: ['berkeley', 'rlaif', 'alignment'],
        pullCount: '1.7M',
        updatedAt: '7 months ago',
        sources: ['ollama'],
        variants: [
            { tag: '7b', label: '7B', paramsB: 7.0, downloadSizeGb: 4.1, vramQ4Gb: 5.2, vramQ8Gb: 8.0, vramFp16Gb: 15.0, kvCachePer4kGb: 0.5, defaultContext: 8192 }
        ]
    },
    {
        id: 'zephyr',
        name: 'Zephyr',
        slug: 'zephyr',
        description: 'Hugging Face H4 direct preference aligned 7B conversational assistant with punchy style.',
        category: 'chat',
        tags: ['huggingface', 'dpo', 'chat'],
        pullCount: '2.4M',
        updatedAt: '8 months ago',
        sources: ['ollama'],
        variants: [
            { tag: '7b', label: '7B', paramsB: 7.0, downloadSizeGb: 4.1, vramQ4Gb: 5.2, vramQ8Gb: 8.0, vramFp16Gb: 15.0, kvCachePer4kGb: 0.5, defaultContext: 32768 }
        ]
    },
    {
        id: 'dbrx',
        name: 'DBRX',
        slug: 'dbrx',
        description: 'Databricks open mixture-of-experts model with 132B total parameters and 36B active parameters.',
        category: 'chat',
        tags: ['databricks', 'moe', 'enterprise'],
        pullCount: '1.1M',
        updatedAt: '7 months ago',
        sources: ['ollama'],
        variants: [
            { tag: 'latest', label: '132B (36B active)', paramsB: 132.0, downloadSizeGb: 74.0, vramQ4Gb: 85.0, vramQ8Gb: 142.0, vramFp16Gb: 275.0, kvCachePer4kGb: 2.5, defaultContext: 32768, isMoE: true, activeParamsB: 36.0 }
        ]
    },
    {
        id: 'bakllava',
        name: 'BakLLaVA',
        slug: 'bakllava',
        description: 'Multimodal vision assistant based on Mistral 7B foundation augmented with LLaVA architecture.',
        category: 'vision',
        tags: ['vision', 'mistral', 'multimodal'],
        pullCount: '1.6M',
        updatedAt: '8 months ago',
        sources: ['ollama'],
        variants: [
            { tag: 'latest', label: '7B', paramsB: 7.0, downloadSizeGb: 4.7, vramQ4Gb: 5.8, vramQ8Gb: 8.5, vramFp16Gb: 15.8, kvCachePer4kGb: 0.5, defaultContext: 4096 }
        ]
    },
    {
        id: 'tinyllama',
        name: 'TinyLlama',
        slug: 'tinyllama',
        description: 'Compact 1.1B model pre-trained on 3 trillion tokens, ideal for extreme edge and low memory environments.',
        category: 'chat',
        tags: ['compact', 'edge', 'ultra-low-vram'],
        pullCount: '6.2M',
        updatedAt: '9 months ago',
        sources: ['ollama'],
        variants: [
            { tag: '1.1b', label: '1.1B', paramsB: 1.1, downloadSizeGb: 0.63, vramQ4Gb: 0.9, vramQ8Gb: 1.3, vramFp16Gb: 2.3, kvCachePer4kGb: 0.15, defaultContext: 2048 }
        ]
    },
    {
        id: 'sqlcoder',
        name: 'SQLCoder',
        slug: 'sqlcoder',
        description: 'Defog specialized text-to-SQL generation model trained on thousands of complex database schemas.',
        category: 'code',
        tags: ['sql', 'database', 'analytics'],
        pullCount: '1.5M',
        updatedAt: '7 months ago',
        sources: ['ollama'],
        variants: [
            { tag: '7b', label: '7B', paramsB: 7.0, downloadSizeGb: 4.1, vramQ4Gb: 5.3, vramQ8Gb: 8.1, vramFp16Gb: 15.0, kvCachePer4kGb: 0.5, defaultContext: 16384 },
            { tag: '15b', label: '15B', paramsB: 15.0, downloadSizeGb: 9.2, vramQ4Gb: 11.4, vramQ8Gb: 17.2, vramFp16Gb: 32.5, kvCachePer4kGb: 0.85, defaultContext: 16384 }
        ]
    },
    {
        id: 'nous-hermes2',
        name: 'Nous Hermes 2',
        slug: 'nous-hermes2',
        description: 'Advanced flagship model from Nous Research trained on diverse high-quality multi-turn GPT-4 reasoning chains.',
        category: 'chat',
        tags: ['nous', 'reasoning', 'general'],
        pullCount: '2.1M',
        updatedAt: '8 months ago',
        sources: ['ollama'],
        variants: [
            { tag: '10.7b', label: '10.7B', paramsB: 10.7, downloadSizeGb: 6.1, vramQ4Gb: 7.8, vramQ8Gb: 12.0, vramFp16Gb: 22.5, kvCachePer4kGb: 0.65, defaultContext: 4096 },
            { tag: '34b', label: '34B', paramsB: 34.0, downloadSizeGb: 19.5, vramQ4Gb: 23.5, vramQ8Gb: 37.5, vramFp16Gb: 72.0, kvCachePer4kGb: 1.3, defaultContext: 4096 }
        ]
    },
    {
        id: 'deepseek-v2.5',
        name: 'DeepSeek V2.5',
        slug: 'deepseek-v2.5',
        description: 'Unified general and coding Mixture of Experts model from DeepSeek combining Chat and Coder capabilities.',
        category: 'chat',
        tags: ['deepseek', 'moe', 'flagship'],
        pullCount: '2.9M',
        updatedAt: '4 months ago',
        sources: ['ollama'],
        variants: [
            { tag: 'latest', label: '236B (21B active)', paramsB: 236.0, downloadSizeGb: 133.0, vramQ4Gb: 145.0, vramQ8Gb: 245.0, vramFp16Gb: 480.0, kvCachePer4kGb: 3.2, defaultContext: 131072, isMoE: true, activeParamsB: 21.0 }
        ]
    },
    {
        id: 'minicpm-v',
        name: 'MiniCPM-V',
        slug: 'minicpm-v',
        description: 'OpenBMB state-of-the-art compact vision language model rivaling proprietary vision APIs.',
        category: 'vision',
        tags: ['vision', 'multimodal', 'edge'],
        pullCount: '1.3M',
        updatedAt: '5 months ago',
        sources: ['ollama'],
        variants: [
            { tag: '8b', label: '8B', paramsB: 8.0, downloadSizeGb: 5.5, vramQ4Gb: 6.8, vramQ8Gb: 9.8, vramFp16Gb: 18.0, kvCachePer4kGb: 0.6, defaultContext: 4096 }
        ]
    },
    {
        id: 'mxbai-embed-large',
        name: 'MixedBread Embed Large',
        slug: 'mxbai-embed-large',
        description: 'Mixedbread AI state-of-the-art open-source text embedding model trained on 100M+ high-quality pairs.',
        category: 'embedding',
        tags: ['embedding', 'retrieval', 'vector'],
        pullCount: '3.8M',
        updatedAt: '6 months ago',
        sources: ['ollama'],
        variants: [
            { tag: 'latest', label: '335M', paramsB: 0.335, downloadSizeGb: 0.67, vramQ4Gb: 0.6, vramQ8Gb: 0.8, vramFp16Gb: 1.2, kvCachePer4kGb: 0.08, defaultContext: 512 }
        ]
    }
];

// Single Centralized Unified Catalog
export const UNIFIED_MODELS: UnifiedModel[] = [
    ...OLLAMA_MODELS.map(m => ({
        ...m,
        sources: ['ollama' as ModelSourceType],
        ollamaSlug: m.slug
    })),
    ...ADDITIONAL_OLLAMA_MODELS,
    ...HUGGINGFACE_GGUF_MODELS
];
