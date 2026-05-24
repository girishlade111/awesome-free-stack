# AI Models Catalog

> **Last updated**: 2026-05-24 | **Category**: AI → Models

Comprehensive catalog of foundation models across all modalities — proprietary, open source, and everything in between.

---

## Legend

| Icon | Meaning |
|---|---|
| 🔒 | Proprietary / Closed-source |
| 🔓 | Open-source / Open-weight |
| 💸 | Free tier available via some API |
| 🎓 | Student discount available |
| 🧪 | Research preview / Experimental |

---

## 1. Proprietary LLMs

Closed-source models accessible via API. Generally the highest quality for general-purpose tasks.

| Model | Developer | Context | Pricing (Input / 1M tok) | APIs | Strengths |
|---|---|---|---|---|---|
| **GPT-4o** 🔒💸 | OpenAI | 128K | $2.50 / $10.00 | [OpenAI](openai-api.md), [OpenRouter](openrouter-api.md) | Best overall quality, multimodal, tool use |
| **GPT-4o mini** 🔒💸 | OpenAI | 128K | $0.15 / $0.60 | [OpenAI](openai-api.md), [OpenRouter](openrouter-api.md) | Best cost-quality ratio for most tasks |
| **GPT-4 Turbo** 🔒 | OpenAI | 128K | $10.00 / $30.00 | [OpenAI](openai-api.md) | Legacy, replaced by GPT-4o |
| **GPT-3.5 Turbo** 🔒💸 | OpenAI | 16K | $0.50 / $1.50 | [OpenAI](openai-api.md) | Legacy fast model |
| **Claude 3 Opus** 🔒 | Anthropic | 200K | $15.00 / $75.00 | [Anthropic](anthropic-api.md), [OpenRouter](openrouter-api.md) | Deep reasoning, nuanced writing |
| **Claude 3 Sonnet** 🔒💸 | Anthropic | 200K | $3.00 / $15.00 | [Anthropic](anthropic-api.md), [OpenRouter](openrouter-api.md) | Best balance of speed + quality |
| **Claude 3 Haiku** 🔒💸 | Anthropic | 200K | $0.25 / $1.25 | [Anthropic](anthropic-api.md), [OpenRouter](openrouter-api.md) | Fastest Claude, great for classification |
| **Gemini 1.5 Pro** 🔒💸🎓 | Google | 1M (2M) | $1.25 / $5.00 | [Gemini](gemini-api.md), [OpenRouter](openrouter-api.md) | Longest context, multimodal |
| **Gemini 1.5 Flash** 🔒💸🎓 | Google | 1M | $0.075 / $0.30 | [Gemini](gemini-api.md), [OpenRouter](openrouter-api.md) | Fast, cheap, 1M context |
| **Gemini 1.5 Flash-8B** 🔒💸🎓 | Google | 1M | $0.0375 / $0.15 | [Gemini](gemini-api.md) | Cheapest Gemini variant |
| **Mistral Large** 🔒💸 | Mistral | 128K | $2.00 / $6.00 | [Mistral](mistral-api.md), [OpenRouter](openrouter-api.md), [Groq](groq-api.md) | Multilingual, strong reasoning |
| **Command R+** 🔒💸 | Cohere | 128K | $3.00 / $15.00 | [Cohere](cohere-api.md) | Best for RAG and tool use |
| **Command R** 🔒💸 | Cohere | 128K | $0.50 / $1.50 | [Cohere](cohere-api.md) | Good RAG, lower cost |
| **DeepSeek-V2** 🔒💸🎓 | DeepSeek | 128K | $0.14 / $0.28 | [DeepSeek](deepseek-api.md), [OpenRouter](openrouter-api.md), [Fireworks](fireworks-api.md) | Cheapest high-quality model |
| **Sonar Pro** 🔒 | Perplexity | — | $5.00 / $5.00 | [Perplexity](perplexity-api.md) | Search-grounded, cited answers |
| **Sonar** 🔒💸 | Perplexity | — | $1.00 / $1.00 | [Perplexity](perplexity-api.md) | Fast search-grounded model |

### Proprietary LLM Price Comparison

```
Cheapest to most expensive (per 1M input tokens):
Gemini 1.5 Flash-8B    $0.04
Gemini 1.5 Flash       $0.075
DeepSeek-V2            $0.14
GPT-4o mini            $0.15
Claude Haiku           $0.25
Command R              $0.50
GPT-3.5                $0.50
Sonar                  $1.00
Gemini 1.5 Pro         $1.25
Mistral Large          $2.00
Command R+             $3.00
Claude Sonnet          $3.00
Sonar Pro              $5.00
GPT-4 Turbo            $10.00
Claude Opus            $15.00
─────────────────────────────
GPT-4o                 $2.50  (sweet spot)
```

---

## 2. Open Source LLMs

Open-weight models you can self-host or access through inference APIs. Most are available on [Hugging Face](huggingface-api.md), [Groq](groq-api.md), [Together](together-api.md), [Fireworks](fireworks-api.md), and [Replicate](replicate-api.md).

### 2.1 Flagship Open Models

| Model | Developer | Params | Context | License | APIs |
|---|---|---|---|---|---|
| **Llama 3.1 405B** 🔓 | Meta | 405B | 128K | Llama 3.1 Community | Together, Fireworks, OpenRouter, Groq |
| **Llama 3.1 70B** 🔓💸 | Meta | 70B | 128K | Llama 3.1 Community | Together, Fireworks, Groq, OpenRouter, Replicate |
| **Llama 3.1 8B** 🔓💸 | Meta | 8B | 128K | Llama 3.1 Community | Together, Fireworks, Groq, OpenRouter, Replicate |
| **Llama 3 70B** 🔓💸 | Meta | 70B | 8K | Llama 3 Community | Groq, Together, Fireworks, OpenRouter |
| **Llama 3 8B** 🔓💸 | Meta | 8B | 8K | Llama 3 Community | Groq, Together, Fireworks, OpenRouter |
| **Mixtral 8x22B** 🔓💸 | Mistral | 141B MoE | 64K | Apache 2.0 | Together, Fireworks, OpenRouter, Replicate |
| **Mixtral 8x7B** 🔓💸 | Mistral | 47B MoE | 32K | Apache 2.0 | Groq, Together, Fireworks, OpenRouter, Replicate |
| **Mistral 7B v0.3** 🔓💸 | Mistral | 7B | 32K | Apache 2.0 | Groq, Together, Fireworks, OpenRouter |
| **Gemma 2 27B** 🔓💸 | Google | 27B | 8K | Gemma | Together, Fireworks, OpenRouter, Replicate |
| **Gemma 2 9B** 🔓💸 | Google | 9B | 8K | Gemma | Together, Fireworks, Groq, OpenRouter |
| **Gemma 2 2B** 🔓💸 | Google | 2B | 8K | Gemma | Together, Fireworks, OpenRouter |
| **Qwen 2.5 72B** 🔓💸 | Alibaba | 72B | 128K | Apache 2.0 | Together, Fireworks, OpenRouter |
| **Qwen 2.5 32B** 🔓💸 | Alibaba | 32B | 128K | Apache 2.0 | Together, Fireworks, OpenRouter |
| **Qwen 2.5 7B** 🔓💸 | Alibaba | 7B | 128K | Apache 2.0 | Together, Fireworks, OpenRouter, Groq |
| **Qwen 2.5 0.5B** 🔓 | Alibaba | 0.5B | 32K | Apache 2.0 | Edge / Mobile |
| **DeepSeek-V2 Lite** 🔓💸 | DeepSeek | 16B | 128K | MIT | Fireworks, OpenRouter |
| **Phi-3 Medium** 🔓💸 | Microsoft | 14B | 128K | MIT | Together, Fireworks, OpenRouter |
| **Phi-3.5 Mini** 🔓💸 | Microsoft | 3.8B | 128K | MIT | Together, Fireworks, OpenRouter |
| **Falcon 2 11B** 🔓 | TII | 11B | 8K | Apache 2.0 | OpenRouter, Replicate |
| **DBRX** 🔓 | Databricks | 132B MoE | 32K | Databricks | Together, Fireworks, OpenRouter |
| **Yi 1.5 34B** 🔓 | 01.AI | 34B | 4K | Yi License | Together, OpenRouter |
| **Yi 1.5 9B** 🔓 | 01.AI | 9B | 4K | Yi License | Together, OpenRouter |
| **Olmo 2 7B** 🔓 | AI2 | 7B | 4K | Apache 2.0 | OpenRouter |
| **Olmo 1.7B** 🔓 | AI2 | 1.7B | 2K | Apache 2.0 | Research / Mobile |
| **Solar 10.7B** 🔓 | Upstage | 10.7B | 4K | Apache 2.0 | OpenRouter |

### 2.2 Open Model Size Comparison

```
Parameters (billions):
┌──────────────────────────────────────────────────┐
│ 405B  ██████████████████████████████████████  Llama│
│ 141B  ████████████████                       Mixtral│
│ 132B  ██████████████                         DBRX│
│  72B  ███████                                 Qwen│
│  70B  ███████                                 Llama│
│  47B  █████                                   Mixtral│
│  34B  ████                                    Yi│
│  27B  ███                                     Gemma│
│  16B  ██                                      DeepSeek│
│  14B  ██                                      Phi-3│
│  11B  █                                       Falcon│
│   9B  █                                       Gemma│
│   8B  █                                       Llama│
│   7B                                          Mistral│
│   3B                                          Phi│
│   2B                                          Gemma│
│ 0.5B                                          Qwen│
└──────────────────────────────────────────────────┘
```

### 2.3 Best Open Models by Use Case

| Use Case | Best Model | Why |
|---|---|---|
| General chat (self-host) | Llama 3.1 8B / Qwen 2.5 7B | Best quality for size |
| General chat (API) | Llama 3.1 70B / DeepSeek-V2 Lite | Great quality, low cost via API |
| Multilingual | Qwen 2.5 / Mistral / Gemma 2 | Strong non-English support |
| Reasoning | DeepSeek-V2 Lite / Llama 3.1 405B | Structured reasoning |
| Fastest inference | Llama 3 8B / Mistral 7B / Gemma 2 2B | Small, fast on consumer GPU |
| Edge / Mobile | Gemma 2 2B / Qwen 2.5 0.5B / Phi-3.5 Mini | Tiny, efficient |
| Long context | Qwen 2.5 / Phi-3 (128K) / DeepSeek-V2 (128K) | 128K context windows |

---

## 3. Vision Models (Image Understanding)

Models that can analyze images, understand visual content, and answer questions about them.

| Model | Developer | Type | Context | Pricing (Input / 1M tok) | APIs | Notes |
|---|---|---|---|---|---|---|
| **GPT-4o** 🔒💸 | OpenAI | Native multi | 128K | $2.50 im / $10.00 out | [OpenAI](openai-api.md), [OpenRouter](openrouter-api.md) | Best-in-class image understanding |
| **Claude 3 Opus/Sonnet** 🔒 | Anthropic | Image input | 200K | $3-15 im / $15-75 out | [Anthropic](anthropic-api.md), [OpenRouter](openrouter-api.md) | Strong document/OCR analysis |
| **Gemini 1.5 Pro** 🔒💸🎓 | Google | Native multi | 1M | $1.25 im / $5.00 out | [Gemini](gemini-api.md) | Video understanding, long video |
| **Gemini 1.5 Flash** 🔒💸🎓 | Google | Native multi | 1M | $0.075 im / $0.30 out | [Gemini](gemini-api.md) | Cheap vision + 1M context |
| **Llama 3.2 90B Vision** 🔓💸 | Meta | Visual | 128K | — | Together, Fireworks, OpenRouter | Largest open vision model |
| **Llama 3.2 11B Vision** 🔓💸 | Meta | Visual | 128K | — | Together, Fireworks, Groq, OpenRouter | Good open vision model |
| **Pixtral 12B** 🔓 | Mistral | Visual | — | — | [Mistral](mistral-api.md) | Mistral's vision model |
| **Qwen-VL-Max** 🔓💸 | Alibaba | Visual | 128K | $0.40 / $1.20 | OpenRouter | Strong Chinese + English |
| **Qwen-VL-Plus** 🔓 | Alibaba | Visual | 8K | — | OpenRouter | Lighter vision model |
| **LLaVA-NeXT** 🔓 | Community | Visual | 32K | — | [Replicate](replicate-api.md), [HuggingFace](huggingface-api.md) | Popular open VLMs |
| **CogVLM2** 🔓 | THU | Visual | 8K | — | [HuggingFace](huggingface-api.md) | Strong open-source VLM |
| **Fuyu-8B** 🔓 | Adept | Visual | 8K | — | [Replicate](replicate-api.md) | Simple but effective |
| **PaliGemma 2** 🔓 | Google | Visual | — | — | [HuggingFace](huggingface-api.md) | Lightweight vision-language |
| **Florence-2** 🔓 | Microsoft | Visual | — | — | [HuggingFace](huggingface-api.md) | Captioning + detection |

### Vision Model Capabilities Matrix

| Model | OCR | Chart | Diagram | Video | Face | Object | Scene |
|---|---|---|---|---|---|---|---|
| GPT-4o | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Gemini 1.5 Pro | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Claude 3 Opus | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Llama 3.2 90B | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | — | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Qwen-VL-Max | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Pixtral 12B | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | — | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## 4. Image Generation Models

Text-to-image and image-to-image generation models.

| Model | Developer | Type | License | APIs | Strengths |
|---|---|---|---|---|---|
| **DALL-E 3** 🔒💸 | OpenAI | TTI | Proprietary | [OpenAI](openai-api.md) | Best prompt adherence, quality |
| **Flux Pro** 🔒💸 | Black Forest Labs | TTI | Proprietary | [Together](together-api.md), [Replicate](replicate-api.md) | Photorealism, anatomy |
| **Flux Schnell** 🔓💸 | Black Forest Labs | TTI | Apache 2.0 | [Together](together-api.md), [Replicate](replicate-api.md), [Fireworks](fireworks-api.md) | Fast, open, good quality |
| **Flux Dev** 🔓💸 | Black Forest Labs | TTI | Non-commercial | [Replicate](replicate-api.md), Together | Fine-tuneable Flux variant |
| **Stable Diffusion 3.5** 🔓💸 | Stability AI | TTI | Stability AI | [Together](together-api.md), [Replicate](replicate-api.md), [Fireworks](fireworks-api.md) | Versatile, open weights |
| **SDXL** 🔓💸 | Stability AI | TTI | Open RAIL-M | [Together](together-api.md), [Replicate](replicate-api.md), [Fireworks](fireworks-api.md) | Widely supported, many LoRAs |
| **SDXL Turbo** 🔓 | Stability AI | TTI | Open RAIL-M | [Replicate](replicate-api.md) | Real-time generation |
| **SD 1.5** 🔓 | Stability AI | TTI | Open RAIL-M | [Replicate](replicate-api.md), [HuggingFace](huggingface-api.md) | Legacy, huge LoRA ecosystem |
| **Playground v3** 🔒 | Playground | TTI | Proprietary | — | Design-focused, UI elements |
| **Ideogram 2** 🔒 | Ideogram | TTI | Proprietary | — | Best text rendering in images |
| **Midjourney** 🔒 | Midjourney | TTI | Proprietary | Discord | Artistic quality, stylization |
| **Imagen 3** 🔒💸 | Google | TTI | Proprietary | [Gemini](gemini-api.md) | Photorealism via Vertex AI |
| **Adobe Firefly 3** 🔒 | Adobe | TTI | Proprietary | Adobe API | Commercial-safe, integrated |
| **Recraft V3** 🔒 | Recraft | TTI | Proprietary | — | Vector + raster, style control |

### Image Generation Comparison

```
Photorealism:          Flux Pro > Imagen 3 > DALL-E 3 > SD 3.5
Artistic quality:      Midjourney > Flux Pro > DALL-E 3 > Ideogram
Text rendering:        Ideogram 2 > DALL-E 3 > Flux Pro > SD 3.5
Speed:                 SDXL Turbo > Flux Schnell > SD 3.5 > DALL-E 3
Prompt adherence:      DALL-E 3 > Flux Pro > Midjourney > SDXL
Open weights:          SD 3.5 > Flux Dev > SDXL > SD 1.5
Free via API:          Flux Schnell (Together/Fireworks) > SDXL (all APIs)
```

---

## 5. Audio / Speech Models

### 5.1 Speech-to-Text (STT) / Transcription

| Model | Developer | Type | Languages | License | APIs |
|---|---|---|---|---|---|
| **Whisper Large-v3** 🔓💸 | OpenAI | STT | 99+ | MIT | [Groq](groq-api.md), [Replicate](replicate-api.md), [HuggingFace](huggingface-api.md), [OpenAI](openai-api.md) |
| **Distil-Whisper** 🔓💸 | Hugging Face | STT | 10+ | MIT | [Groq](groq-api.md), [HuggingFace](huggingface-api.md) |
| **Whisper Turbo** 🔓 | OpenAI | STT | 99+ | MIT | [Groq](groq-api.md) |
| **Deepgram Nova-2** 🔒💸 | Deepgram | STT | 30+ | Proprietary | Deepgram API |
| **AssemblyAI** 🔒💸 | AssemblyAI | STT | 20+ | Proprietary | AssemblyAI API |
| **Wav2Vec 2.0** 🔓 | Meta | STT | 30+ | MIT | [HuggingFace](huggingface-api.md) |
| **Massively Multilingual** 🔓 | Meta | STT | 1400+ | CC BY-NC | [HuggingFace](huggingface-api.md) |
| **MMS** 🔓 | Meta | STT | 1100+ | CC BY-NC | [HuggingFace](huggingface-api.md) |
| **Parakeet** 🔓 | NVIDIA | STT | 10+ | Apache 2.0 | [HuggingFace](huggingface-api.md) |

### 5.2 Text-to-Speech (TTS)

| Model | Developer | Quality | Languages | License | APIs |
|---|---|---|---|---|---|
| **Eleven Turbo v2** 🔒💸 | ElevenLabs | ⭐⭐⭐⭐⭐ | 29+ | Proprietary | ElevenLabs API |
| **OpenAI TTS** 🔒💸 | OpenAI | ⭐⭐⭐⭐ | 6+ | Proprietary | [OpenAI](openai-api.md) |
| **Bark** 🔓 | Suno | ⭐⭐⭐ | 13+ | MIT | [HuggingFace](huggingface-api.md) |
| **XTTS-v2** 🔓 | Coqui | ⭐⭐⭐⭐ | 17+ | CPML | [HuggingFace](huggingface-api.md) |
| **Parler-TTS** 🔓 | Hugging Face | ⭐⭐⭐ | 1+ | Apache 2.0 | [HuggingFace](huggingface-api.md) |
| **Fish Speech 1.5** 🔓💸 | Fish Audio | ⭐⭐⭐⭐ | 8+ | CC BY-NC-SA 4.0 | Fish Audio API, Replicate |
| **CosmicTTS** 🔓 | Cosmic | ⭐⭐⭐ | 1+ | MIT | [HuggingFace](huggingface-api.md) |
| **Kokoro 82M** 🔓 | — | ⭐⭐⭐ | 1+ | Apache 2.0 | [HuggingFace](huggingface-api.md) |

### 5.3 Voice Cloning

| Model | Developer | Type | License | APIs |
|---|---|---|---|---|
| **ElevenLabs Voice Lab** 🔒💸 | ElevenLabs | Professional | Proprietary | ElevenLabs API |
| **OpenAI Voice Engine** 🔒 | OpenAI | Professional | Proprietary | [OpenAI](openai-api.md) |
| **Fish Speech** 🔓💸 | Fish Audio | Open | CC BY-NC-SA 4.0 | [HuggingFace](huggingface-api.md), Replicate |
| **RVC v2** 🔓 | Community | Open | MIT | Local |
| **So-VITS-SVC** 🔓 | Community | Open | MIT | Local |

### 5.4 Music / Audio Generation

| Model | Developer | Type | License | APIs |
|---|---|---|---|---|
| **Suno v4** 🔒 | Suno | Music generation | Proprietary | Suno API |
| **Udio** 🔒 | Udio | Music generation | Proprietary | Udio API |
| **MusicGen** 🔓 | Meta | Music generation | CC BY-NC 4.0 | [HuggingFace](huggingface-api.md), [Replicate](replicate-api.md) |
| **AudioCraft** 🔓 | Meta | Audio generation | MIT | [HuggingFace](huggingface-api.md) |
| **Stable Audio** 🔓💸 | Stability AI | Audio gen / SFX | Stability AI | [HuggingFace](huggingface-api.md) |

### 5.5 Translation / Speech-to-Speech

| Model | Developer | Type | License | APIs |
|---|---|---|---|---|
| **SeamlessM4T v2** 🔓 | Meta | Speech-to-speech translation | CC BY-NC 4.0 | [HuggingFace](huggingface-api.md) |
| **SeamlessExpressive** 🔓 | Meta | Expressive translation | CC BY-NC 4.0 | [HuggingFace](huggingface-api.md) |
| **OpenAI Realtime API** 🔒💸 | OpenAI | Realtime speech | Proprietary | [OpenAI](openai-api.md) |

---

## 6. Reasoning Models

Models with enhanced reasoning capabilities — chain-of-thought, mathematical reasoning, logic, and multi-step problem solving.

| Model | Developer | Type | Context | Pricing (Input / 1M tok) | APIs | Strengths |
|---|---|---|---|---|---|---|
| **o3** 🔒 | OpenAI | Reasoning | 200K | ~$10.00 / $40.00 | [OpenAI](openai-api.md) | Best reasoning overall, PhD-level |
| **o1** 🔒💸 | OpenAI | Reasoning | 200K | $15.00 / $60.00 | [OpenAI](openai-api.md), [OpenRouter](openrouter-api.md) | Strong math + coding |
| **o1-mini** 🔒💸 | OpenAI | Reasoning | 128K | $1.10 / $4.40 | [OpenAI](openai-api.md), [OpenRouter](openrouter-api.md) | Cheap reasoning, coding focus |
| **Claude 3 Opus** 🔒 | Anthropic | Deep reasoning | 200K | $15.00 / $75.00 | [Anthropic](anthropic-api.md), [OpenRouter](openrouter-api.md) | Nuanced multi-step reasoning |
| **Gemini 1.5 Pro (Reasoning)** 🔒💸🎓 | Google | Reasoning | 1M | $1.25 / $5.00 | [Gemini](gemini-api.md) | Long-context reasoning |
| **DeepSeek-R1** 🔓💸 | DeepSeek | Reasoning | 128K | $0.55 / $2.19 | [DeepSeek](deepseek-api.md), [OpenRouter](openrouter-api.md), [Together](together-api.md) | Open reasoning, matches o1 |
| **DeepSeek-R1-Distill** 🔓💸 | DeepSeek | Reasoning | 128K | $0.14 / $0.28 | [Fireworks](fireworks-api.md), Together | Distilled variants: Llama 8B/70B, Qwen |
| **QwQ-32B-Preview** 🔓 | Alibaba | Reasoning | 32K | — | [HuggingFace](huggingface-api.md), [Together](together-api.md) | Open Chinese reasoning model |
| **Grok 2 Reasoning** 🔒 | xAI | Reasoning | 128K | $2.00 / $10.00 | xAI API, [OpenRouter](openrouter-api.md) | Real-time reasoning via X |
| **Llama 3.1 405B (Reasoning)** 🔓 | Meta | Reasoning | 128K | — | [Together](together-api.md), [Fireworks](fireworks-api.md) | Open-source reasoning |

### Reasoning Benchmarks (Approximate)

```
MATH (Competition Math):
o3                  ████████████████  ~96%
o1                  ███████████████   ~94%
DeepSeek-R1         ███████████████   ~93%
Claude 3 Opus       ████████████      ~78%
Gemini 1.5 Pro      ████████████      ~77%
GPT-4o              ████████████      ~76%

HumanEval (Coding):
o1                  ████████████████  ~96%
DeepSeek-R1         ███████████████   ~94%
Claude 3 Opus       █████████████     ~84%
GPT-4o              █████████████     ~83%

GPQA (Graduate Science):
o3                  ████████████████  ~87%
o1                  ███████████████   ~85%
DeepSeek-R1         ██████████████    ~80%
Claude 3 Opus       ████████████      ~68%
```

---

## 7. Coding Models

Specialized for code generation, completion, refactoring, and debugging.

| Model | Developer | Type | Context | Pricing (Input / 1M tok) | APIs | Strengths |
|---|---|---|---|---|---|---|
| **o1** 🔒💸 | OpenAI | Reasoning + Code | 200K | $15.00 / $60.00 | [OpenAI](openai-api.md), [OpenRouter](openrouter-api.md) | Best complex code generation |
| **o1-mini** 🔒💸 | OpenAI | Reasoning + Code | 128K | $1.10 / $4.40 | [OpenAI](openai-api.md), [OpenRouter](openrouter-api.md) | Best cost for complex code |
| **GPT-4o** 🔒💸 | OpenAI | General | 128K | $2.50 / $10.00 | [OpenAI](openai-api.md), [OpenRouter](openrouter-api.md) | Best all-around coding |
| **Claude 3.5 Sonnet** 🔒 | Anthropic | General + Code | 200K | $3.00 / $15.00 | [Anthropic](anthropic-api.md), [OpenRouter](openrouter-api.md) | Best frontend code, clean output |
| **Claude 3 Opus** 🔒 | Anthropic | Deep Code | 200K | $15.00 / $75.00 | [Anthropic](anthropic-api.md) | Complex refactoring |
| **Gemini 1.5 Pro** 🔒💸🎓 | Google | General + Code | 1M | $1.25 / $5.00 | [Gemini](gemini-api.md) | Long-context code understanding |
| **Codestral** 🔓💸 | Mistral | Code-specific | 32K | €0.001/1K | [Mistral](mistral-api.md) | Fill-in-the-middle, open weights |
| **DeepSeek-Coder V2** 🔓💸 | DeepSeek | Code-specific | 128K | $0.14 / $0.28 | [DeepSeek](deepseek-api.md), [OpenRouter](openrouter-api.md), [Fireworks](fireworks-api.md) | Cheapest high-quality code model |
| **CodeGemma 7B** 🔓💸 | Google | Code-specific | 8K | — | [Together](together-api.md), [HuggingFace](huggingface-api.md) | Code completion, lightweight |
| **CodeGemma 2B** 🔓 | Google | Code-specific | 8K | — | [HuggingFace](huggingface-api.md) | Fastest code completion |
| **StarCoder 2 15B** 🔓 | ServiceNow | Code-specific | 16K | — | [HuggingFace](huggingface-api.md) | Open code LLM |
| **StarCoder 2 7B** 🔓 | ServiceNow | Code-specific | 16K | — | [HuggingFace](huggingface-api.md), [Replicate](replicate-api.md) | Lightweight code model |
| **StarCoder 2 3B** 🔓 | ServiceNow | Code-specific | 16K | — | [HuggingFace](huggingface-api.md) | Edge code completion |
| **CodeLlama 70B** 🔓 | Meta | Code-specific | 100K | — | [Together](together-api.md), [Fireworks](fireworks-api.md), [Replicate](replicate-api.md) | Strong open code model |
| **CodeLlama 34B** 🔓 | Meta | Code-specific | 16K | — | [Together](together-api.md), [Replicate](replicate-api.md) | Large open code model |
| **CodeLlama 7B / 13B** 🔓 | Meta | Code-specific | 16K | — | [Together](together-api.md), [Groq](groq-api.md), [Replicate](replicate-api.md) | Versatile open code models |
| **Qwen2.5-Coder 7B** 🔓 | Alibaba | Code-specific | 128K | — | [Together](together-api.md), [Fireworks](fireworks-api.md) | Best 7B code model |
| **Qwen2.5-Coder 1.5B** 🔓 | Alibaba | Code-specific | 32K | — | [HuggingFace](huggingface-api.md) | Tiny code model |

### Coding Model Language Support Matrix

| Model | Python | JS/TS | Java | C++ | Go | Rust | SQL | Shell |
|---|---|---|---|---|---|---|---|---|
| o1 / o1-mini | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| GPT-4o | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Claude 3.5 Sonnet | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Codestral | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| DeepSeek-Coder V2 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| CodeGemma 7B | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| StarCoder 2 15B | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Qwen2.5-Coder | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

### Code Model Pricing Comparison (per 1M tokens)

```
DeepSeek-Coder V2    $0.14 ────────────────────────
Codestral            ~$0.10 ──────────────────────────
GPT-4o               $2.50 ──────
o1-mini              $1.10 ─────────
o1                   $15.00 ──
Claude 3.5 Sonnet    $3.00 ────
CodeGemma (API)*     ~$0.15 ────────────────────────
──────────────────────────────────────────────────
* Via Together/Fireworks for open code models
```

---

## 8. Embeddings Models

Models that convert text/images into vector representations for search, RAG, clustering, and classification.

| Model | Developer | Dimensions | Max Tokens | Pricing / 1M tok | License | APIs |
|---|---|---|---|---|---|---|
| **text-embedding-3-large** 🔒💸 | OpenAI | 256-3072 | 8191 | $0.13 | Proprietary | [OpenAI](openai-api.md) |
| **text-embedding-3-small** 🔒💸 | OpenAI | 512-1536 | 8191 | $0.02 | Proprietary | [OpenAI](openai-api.md) |
| **text-embedding-ada-002** 🔒💸 | OpenAI | 1536 | 8191 | $0.10 | Proprietary | [OpenAI](openai-api.md) |
| **Gemini Embeddings** 🔒💸🎓 | Google | 768 | 2048 | Free tier | Proprietary | [Gemini](gemini-api.md) |
| **Embed v3 (English)** 🔒💸 | Cohere | 1024 | 512 | $0.10 | Proprietary | [Cohere](cohere-api.md) |
| **Embed v3 (Multilingual)** 🔒💸 | Cohere | 1024 | 512 | $0.10 | Proprietary | [Cohere](cohere-api.md) |
| **BGE-M3** 🔓 | BAAI | 1024 | 8192 | Free | MIT | [HuggingFace](huggingface-api.md) |
| **BGE-Large-EN-v1.5** 🔓 | BAAI | 1024 | 512 | Free | MIT | [HuggingFace](huggingface-api.md) |
| **BGE-Small-EN-v1.5** 🔓 | BAAI | 384 | 512 | Free | MIT | [HuggingFace](huggingface-api.md) |
| **Instructor-XL** 🔓 | Hugging Face | 768 | 512 | Free | Apache 2.0 | [HuggingFace](huggingface-api.md) |
| **GTE-Large** 🔓 | Alibaba | 1024 | 512 | Free | MIT | [HuggingFace](huggingface-api.md) |
| **GTE-Small** 🔓 | Alibaba | 384 | 512 | Free | MIT | [HuggingFace](huggingface-api.md) |
| **E5-Large-v2** 🔓 | Microsoft | 1024 | 512 | Free | MIT | [HuggingFace](huggingface-api.md) |
| **E5-Small-v2** 🔓 | Microsoft | 384 | 512 | Free | MIT | [HuggingFace](huggingface-api.md) |
| **Jina Embeddings v3** 🔓💸 | Jina | 1024 | 8192 | 1M free | Apache 2.0 | Jina API, [HuggingFace](huggingface-api.md) |

### Embeddings Performance (MTEB Benchmark)

```
text-embedding-3-large    ████████████████  64.6
Embed v3 (English)        ████████████████  64.5
BGE-M3                    ███████████████   64.0
GTE-Large                 ███████████████   63.9
E5-Large-v2               ██████████████   62.9
text-embedding-3-small    ██████████████   62.3
Instructor-XL             █████████████    61.7
BGE-Large-EN-v1.5         ████████████     60.4
─────────────────────────────────────────
MTEB Score (higher = better)
```

---

## 9. Multimodal Models

Models that natively understand and generate across multiple modalities (text, image, audio, video).

| Model | Developer | Inputs | Outputs | Context | APIs |
|---|---|---|---|---|---|
| **GPT-4o** 🔒💸 | OpenAI | Text, Image, Audio | Text, Image (DALL-E) | 128K | [OpenAI](openai-api.md) |
| **GPT-4o Realtime** 🔒💸 | OpenAI | Text, Audio | Text, Audio | 128K | [OpenAI](openai-api.md) |
| **Gemini 1.5 Pro** 🔒💸🎓 | Google | Text, Image, Audio, Video | Text | 1M | [Gemini](gemini-api.md) |
| **Gemini 1.5 Flash** 🔒💸🎓 | Google | Text, Image, Audio, Video | Text | 1M | [Gemini](gemini-api.md) |
| **Gemini 1.5 Flash-8B** 🔒💸🎓 | Google | Text, Image, Audio, Video | Text | 1M | [Gemini](gemini-api.md) |
| **Claude 3 Opus/Sonnet/Haiku** 🔒 | Anthropic | Text, Image | Text | 200K | [Anthropic](anthropic-api.md) |
| **Llama 3.2 11B/90B Vision** 🔓 | Meta | Text, Image | Text | 128K | Together, Fireworks, Groq, OpenRouter |
| **Qwen-VL-Max** 🔓💸 | Alibaba | Text, Image | Text | 128K | OpenRouter |
| **Realtime API (Omni)** 🔒💸 | OpenAI | Text, Audio | Text, Audio | 128K | [OpenAI](openai-api.md) |

### Multimodal Capability Matrix

| Model | Image In | Audio In | Video In | Image Out | Audio Out | Web Search |
|---|---|---|---|---|---|---|
| GPT-4o | ✅ | ✅ | ❌ | ✅ (DALL-E) | ✅ (Realtime) | ✅ (Browsing) |
| Gemini 1.5 | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ (Via tools) |
| Claude 3 | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Llama 3.2 Vision | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |

---

## 10. Model Selection Guide

### Quick Decision: Which Model Should I Use?

```
What are you building?
│
├── Chat / assistant?
│   ├── Free tier → Gemini 1.5 Flash or GPT-4o mini
│   ├── Production → GPT-4o or Claude Sonnet
│   └── Self-host → Llama 3.1 70B or Qwen 2.5 72B
│
├── Code generation?
│   ├── Best → o1-mini or Claude Sonnet
│   ├── Cheapest → DeepSeek-Coder V2
│   └── Self-host → Codestral or Qwen2.5-Coder
│
├── Image understanding?
│   ├── Best → GPT-4o or Gemini 1.5 Pro
│   ├── Cheapest → Gemini 1.5 Flash
│   └── Open source → Llama 3.2 90B Vision
│
├── Image generation?
│   ├── Best quality → Flux Pro or DALL-E 3
│   ├── Open source → SD 3.5 or Flux Schnell
│   └── Free → Flux Schnell (Together/Fireworks)
│
├── Audio / Speech?
│   ├── STT → Whisper Large-v3 (Groq free)
│   ├── TTS → ElevenLabs or OpenAI TTS
│   └── Music → Suno or MusicGen
│
├── Retrieval / RAG?
│   ├── Embeddings → text-embedding-3-small or BGE-M3
│   └── Generator → Command R+ or GPT-4o mini
│
└── Research / Experiment?
    └── Hugging Face Inference API (150K+ free models)
```

### Cost Optimization Strategy

| Budget | Recommendation | Cost / Month |
|---|---|---|
| $0 | Gemini 1.5 Flash + Hugging Face free tier + Groq free tier | $0 |
| $5 | GPT-4o mini + DeepSeek-Coder V2 | ~$2-5 |
| $20 | GPT-4o + Claude Sonnet (light use) | ~$15-25 |
| $50 | GPT-4o + o1-mini + Gemini Pro | ~$40-60 |
| $100+ | All models via OpenRouter (pay-as-you-go) | Flexible |
| Enterprise | Direct API contracts with all providers | Custom |

---

## 11. Model Availability by API Provider

| Provider | Proprietary | Open Source | Vision | Audio | Embeddings |
|---|---|---|---|---|---|
| [OpenAI](openai-api.md) | GPT-4o, o1, o3 | ❌ | ✅ | ✅ | ✅ |
| [Gemini](gemini-api.md) | Gemini 1.5 Pro/Flash | ❌ | ✅ | ✅ | ✅ |
| [Anthropic](anthropic-api.md) | Claude 3 Opus/Sonnet/Haiku | ❌ | ✅ (images) | ❌ | ❌ |
| [Groq](groq-api.md) | ❌ | Llama, Mixtral, Gemma | ✅ (11B Vision) | ✅ (Whisper) | ❌ |
| [Together](together-api.md) | ❌ | 100+ open models | ✅ | ❌ | ✅ |
| [Fireworks](fireworks-api.md) | ❌ | 50+ open models | ✅ | ❌ | ✅ |
| [DeepSeek](deepseek-api.md) | DeepSeek-V2 | ❌ (open weights) | ❌ | ❌ | ❌ |
| [Mistral](mistral-api.md) | Mistral Large | Mistral 7B, Mixtral | ✅ (Pixtral) | ❌ | ❌ |
| [Cohere](cohere-api.md) | Command R/R+ | ❌ | ❌ | ❌ | ✅ |
| [Hugging Face](huggingface-api.md) | ❌ | 150K+ models | ✅ | ✅ | ✅ |
| [Replicate](replicate-api.md) | ❌ | Community models | ✅ | ✅ | ✅ |
| [OpenRouter](openrouter-api.md) | All providers | All providers | ✅ | ✅ | ✅ |
| [Perplexity](perplexity-api.md) | Sonar Pro | ❌ | ✅ (images) | ❌ | ❌ |

---

## 12. Model Size vs Performance Guide

```
Parameters needed for task complexity:

Simple tasks (classification, extraction, summarization):
  │ 1-8B parameters → Sufficient for most simple tasks
  │ Example: GPT-4o mini, Mistral 7B, Llama 3 8B

Moderate tasks (chat, content generation, Q&A):
  │ 8-70B parameters → Good quality for most applications
  │ Example: Llama 3.1 70B, Mixtral 8x7B, GPT-4o mini

Complex tasks (reasoning, math, code, analysis):
  │ 70-405B+ parameters → Best quality for hard problems
  │ Example: GPT-4o, Claude 3 Opus, Llama 3.1 405B

Expert-level (research, advanced math, PhD-level):
  │ Reasoning models → o1, o3, DeepSeek-R1, Claude Opus
```

### Practical Rule of Thumb

```
Don't use a 405B model when a 7B will do.
Don't use o1 when GPT-4o is sufficient.

Start small, scale up only when quality demands it.
Rational scaling saves 10-100x in API costs.
```

---

## 13. Glossary

| Term | Definition |
|---|---|
| **Parameters** | The number of weights in a neural network. More parameters generally means more capability but higher compute cost. |
| **Context Window** | The maximum number of tokens a model can process in a single request. Longer = can handle larger documents. |
| **MoE** | Mixture of Experts. Architecture where only a subset of parameters is activated per token, allowing larger effective model size at lower compute cost. |
| **Tokens** | The basic unit of text that LLMs process. ~0.75 words per token for English. |
| **TTI** | Text-to-Image. Models that generate images from text descriptions. |
| **STT** | Speech-to-Text. Models that transcribe audio into text. |
| **TTS** | Text-to-Speech. Models that generate audio from text. |
| **LoRA** | Low-Rank Adaptation. A parameter-efficient fine-tuning method. |
| **VLM** | Vision-Language Model. A model that processes both images and text. |
| **RAG** | Retrieval-Augmented Generation. Enhancing LLM outputs with retrieved information. |
| **MTEB** | Massive Text Embedding Benchmark. Standard benchmark for embedding model quality. |

---

## 14. Related Resources

- [AI APIs](apis.md) — API providers that serve these models
- [AI / Image Generation](../ai/image-generation/) — Specialized image generation tools
- [AI / Embeddings](../ai/embeddings/) — Dedicated embedding services
- [AI / Speech](../ai/speech/) — Speech-to-text and TTS services
- [Open Source](../open-source/) — Self-hostable AI model infrastructure

---

> ⚠️ Model availability, pricing, and capabilities change frequently. Always verify current info on the provider's official documentation before making decisions. Pricing listed is approximate per 1M input tokens unless otherwise noted.
