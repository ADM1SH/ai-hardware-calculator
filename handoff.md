# Handoff Document

## 1. Goals
Convert UI to a single, high-contrast industrial dark theme adhering to Bauhaus and Dieter Rams principles. Expand the centralized catalog to 1,500+ pre-indexed models across GGUF, MLX, AWQ, GPTQ, and Safetensors, backed by live Omni-Search across all 150,000+ open-weight models on Hugging Face Hub. Expand precision and quantization options to 8 industry-standard tiers.

## 2. Current State
Verified application running locally on `http://localhost:5173/` and verified with `npm run build`.
- Single dark theme implemented without toggle: `#0F1115` canvas, `#171A1F` Level 1 cards, `#2C313A` outline borders, `#F0F2F5` high-contrast typography.
- 8 precision and quantization tiers: `Q2_K` (2.6 bpw), `Q3_K_M` (3.4 bpw), `Q4_K_M` (4.5 bpw), `Q5_K_M` (5.5 bpw), `Q6_K` (6.6 bpw), `Q8_0` (8.5 bpw), `FP8` (8.0 bpw), and `FP16` (16.0 bpw).
- Pre-indexed database of 1,509 models in `public/models-database.json` (921 KB).
- Multi-format filtering: GGUF, MLX (Apple Silicon), AWQ (GPU), GPTQ (GPU), and Safetensors (FP16/PyTorch).
- Format pill badges and hardware-aware execution commands (`mlx_lm.generate`, `ollama run`, `vllm serve`).
- Live Omni-Search and infinite pagination connecting directly to the Hugging Face Hub.

## 3. Active Files
- `src/engine/calculator.ts`: 8-tier `QuantizationTier` definition, `QUANTIZATION_TIERS` metadata, dynamic memory scaling formulas.
- `src/components/FilterBar.tsx`: Precision dropdown mapping all 8 tiers with bit-depth annotations.
- `src/components/ModelCard.tsx`: Precision header showing short label and exact bits per weight (BPW).
- `tailwind.config.js`: High-contrast dark industrial palette token definitions.
- `src/index.css`: Dark base layer styles (`#0F1115` canvas, `#F0F2F5` text).
- `public/models-database.json`: Static dataset containing 1,509 models.
- `src/data/unifiedModels.ts`: Bundled foundation catalog with format metadata.
- `src/engine/huggingFaceApi.ts`: Live Omni-Search, format detection, pagination, and custom model inspector.
- `src/App.tsx`: Central coordinator managing hardware state, filtering, and model calculations.

## 4. Changes Made
- Expanded `QuantizationTier` in `src/engine/calculator.ts` to include `Q2_K`, `Q3_K_M`, `Q4_K_M`, `Q5_K_M`, `Q6_K`, `Q8_0`, `FP8`, and `FP16`.
- Implemented bits-per-weight memory formulas for weights and KV cache for all 8 tiers.
- Upgraded `PRECISION / QUANT` selector in `src/components/FilterBar.tsx` to an industrial dropdown with bit depths.
- Updated `src/components/ModelCard.tsx` memory breakdown header to show active tier and BPW.
- Switched all Tailwind color tokens to high-contrast dark industrial values (WCAG AAA compliant).
- Successfully validated TypeScript build via `npm run build` (308.87 kB JS, 16.26 kB CSS).

## 5. Failed Attempts
- Vite Dev Server In-Memory Cache: Editing `tailwind.config.js` while the Vite dev server was active did not update rendered styles in the browser because PostCSS evaluates config files at server boot. Symptom: browser retained `#F2F3F4` canvas despite updated config. Solution: terminated process, cleared `node_modules/.vite`, and restarted dev server.

## 6. Next Steps
- Implement "Getting Started with Local LLMs" guide as an integrated view accessible via top navigation underline tabs.
- Provide practical runner setup (Ollama, LM Studio, MLX, vLLM), hardware memory rules of thumb, and hardware-tiered model recommendations.
