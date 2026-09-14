# AI Hardware Calculator

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2D8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An industrial hardware memory estimator and execution planner for open-weight large language models. Calculates parameter footprints, KV cache overhead across context windows, and fits models against GPU VRAM and Apple Silicon unified memory budgets.

## Overview

Deploying local models requires exact VRAM sizing to prevent out-of-memory errors and context truncation. AI Hardware Calculator computes memory demands across 8 precision tiers, models context overhead dynamically, and maps execution commands directly to local runners including Ollama, MLX, and vLLM.

## Key Features

* **Precision and Quantization Tiers**: Evaluates 8 discrete weight quantization formats: `Q2_K` (2.6 bpw), `Q3_K_M` (3.4 bpw), `Q4_K_M` (4.5 bpw), `Q5_K_M` (5.5 bpw), `Q6_K` (6.6 bpw), `Q8_0` (8.5 bpw), `FP8` (8.0 bpw), and `FP16` (16.0 bpw).
* **Dynamic KV Cache Sizing**: Computes attention key-value cache memory scaling based on layer depth, head count, and context length up to 128k tokens.
* **Pre-Indexed Catalog**: Bundles 1,500+ curated model variants across GGUF, MLX, AWQ, GPTQ, and Safetensors.
* **Hugging Face Hub Omni-Search**: Live query integration directly against the Hugging Face API with pagination and metadata inspection.
* **Hardware Preset Matching**: Validates fit against Apple Silicon unified memory (M-series 8GB to 192GB) and discrete NVIDIA GPUs (RTX 3060 to H100 80GB).
* **Command Generation**: Outputs copy-paste terminal commands formatted for Ollama, MLX (`mlx_lm.generate`), and vLLM.

## Architecture

```
ai hardware calculator/
├── public/
│   └── models-database.json     # 1,500+ pre-indexed model records
├── src/
│   ├── components/
│   │   ├── FilterBar.tsx        # Format, precision, and size filters
│   │   ├── HardwareBar.tsx      # System memory and GPU selection
│   │   ├── ModelCard.tsx        # Fit indicator, memory graph, runner commands
│   │   ├── ModelInspectorModal.tsx # Parameter and tensor metadata inspector
│   │   └── ModelList.tsx        # Virtualized model feed
│   ├── data/
│   │   ├── hardwareDb.ts        # Apple Silicon and NVIDIA hardware specs
│   │   ├── ollamaModels.ts      # Standard Ollama registry tags
│   │   └── unifiedModels.ts     # Bundled foundational model catalog
│   ├── engine/
│   │   ├── calculator.ts        # Memory formulas for weights, KV cache, and runtime
│   │   ├── detector.ts          # Architecture and parameter parser
│   │   └── huggingFaceApi.ts    # Hub search and API bridge
│   ├── App.tsx                  # Root state coordinator
│   └── main.tsx                 # Application entry point
├── tailwind.config.js           # Industrial dark theme configuration
└── vite.config.ts               # Vite build configuration
```

## Requirements

* Node.js 18.0 or higher
* npm 9.0 or higher

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ADM1SH/ai-hardware-calculator.git
   cd ai-hardware-calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## Production Build

To compile a production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Status

Active development. Future milestones include automated system profiling via WebGPU and multi-GPU tensor parallel memory partitioning.

## Authors and Acknowledgment

Created by Adam Anwar. Inspired by open-weight AI engineering tools and Dieter Rams functional design standards.

## License

MIT License. See repository for details.


## Support
Submit issues, questions, or bug reports to the GitHub issue tracker:
https://github.com/ADM1SH/ai-hardware-calculator/issues


## Roadmap
* [x] Core architecture and baseline implementation.
* [x] Functional verification and test coverage.
* [ ] Add local LLM runner setup guides (Ollama, LM Studio, MLX, vLLM)
* [ ] Integrate exportable hardware bill-of-materials reports


## Contributing
Contributions are welcome.
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/improvement`.
3. Commit your changes: `git commit -m "feat: enhance functionality"`.
4. Push to the branch: `git push origin feature/improvement`.
5. Open a Pull Request.
