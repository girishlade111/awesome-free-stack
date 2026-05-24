# AI APIs

> **Last updated**: 2026-05-24 | **Resources**: 13 | **Category**: AI → APIs

A curated collection of AI and LLM APIs with free tiers suitable for development, prototyping, and production applications.

---

## Overview

| # | Provider | Best For | Free Tier | Card | Rating |
|---|---|---|---|---|---|
| 1 | [OpenAI](openai-api.md) | General purpose, multimodal, embeddings | $5 credit + rate-limited GPT-4o mini | ✅ | 4.3 |
| 2 | [Gemini](gemini-api.md) | Multimodal, long context, code | 60 req/min, 1M token context, free | ❌ | 4.8 |
| 3 | [Groq](groq-api.md) | Ultra-fast open model inference | 30 req/min, 14.4K req/day | ✅ | 4.1 |
| 4 | [Anthropic](anthropic-api.md) | Safety, reasoning, long context | 5 req/min API + free claude.ai | ✅ | 3.9 |
| 5 | [Together AI](together-api.md) | Open models, image gen, fine-tuning | $1 free, no card required | ❌ | 3.8 |
| 6 | [Cohere](cohere-api.md) | Enterprise RAG, embeddings | 100 trial req/month | ❌ | 3.5 |
| 7 | [Mistral AI](mistral-api.md) | Open-weight models, code | Rate-limited free API + free Le Chat | ❌ | 4.0 |
| 8 | [DeepSeek](deepseek-api.md) | Cost-effective chat + code | 500M free tokens | ❌ | 3.8 |
| 9 | [OpenRouter](openrouter-api.md) | Multi-provider gateway | $1 free, no card required | ❌ | 4.4 |
| 10 | [Hugging Face](huggingface-api.md) | 150K+ open models | 30K free tokens/month | ❌ | 4.1 |
| 11 | [Replicate](replicate-api.md) | Community ML models | ~$0.05 free credits | ✅ | 3.8 |
| 12 | [Fireworks AI](fireworks-api.md) | Fast open model inference | 25 req/min, no card required | ❌ | 4.1 |
| 13 | [Perplexity](perplexity-api.md) | Search-grounded generation | $5 free credits | ✅ | 3.8 |

---

## By Use Case

### LLM Chat / Text Generation
| Provider | Models | Context | Strengths |
|---|---|---|---|
| [OpenAI](openai-api.md) | GPT-4o, GPT-4o mini | 128K | Best overall quality, tool use, vision |
| [Gemini](gemini-api.md) | Gemini 1.5 Pro, Flash | 1M | Longest context, multimodal, free tier |
| [Anthropic](anthropic-api.md) | Claude 3 Opus, Sonnet, Haiku | 200K | Best reasoning, safety, coding |
| [Groq](groq-api.md) | Llama 3, Mixtral | Varies | Fastest inference speeds |
| [Mistral AI](mistral-api.md) | Mistral Large, Small | 32K | Strong multilingual support |
| [DeepSeek](deepseek-api.md) | DeepSeek-V2, Coder | 128K | Cheapest, great for code |
| [Cohere](cohere-api.md) | Command R/R+ | 128K | Best for RAG and tool use |

### Multimodal (Text + Image + Audio + Video)
| Provider | Capabilities | Free Tier |
|---|---|---|
| [OpenAI](openai-api.md) | GPT-4o vision, DALL-E 3, Whisper | $5 credit |
| [Gemini](gemini-api.md) | Image, audio, video understanding | ✅ 60 req/min free |
| [Anthropic](anthropic-api.md) | Image analysis | Limited free API |

### Embeddings
| Provider | Models | Dimensions | Free Tier |
|---|---|---|---|
| [OpenAI](openai-api.md) | text-embedding-3-small/large | 512-3072 | Rate-limited |
| [Gemini](gemini-api.md) | text-embedding-004 | 768 | ✅ Free |
| [Cohere](cohere-api.md) | Embed v3 | 1024 | 100 req/month |
| [Hugging Face](huggingface-api.md) | 1000+ embedding models | Varies | 30K tokens/month |

### Image Generation
| Provider | Models | Free Tier |
|---|---|---|
| [OpenAI](openai-api.md) | DALL-E 3, DALL-E 2 | Rate-limited |
| [Together AI](together-api.md) | Stable Diffusion, Flux | $1 free |
| [Replicate](replicate-api.md) | Stable Diffusion, SDXL, Flux | ~$0.05 free |

### Speech / Audio
| Provider | Models | Free Tier |
|---|---|---|
| [OpenAI](openai-api.md) | Whisper (STT), TTS | Rate-limited |
| [Groq](groq-api.md) | Whisper, Distil-Whisper | 30 req/min |
| [Hugging Face](huggingface-api.md) | 1000+ speech models | 30K tokens/month |

### Code Models
| Provider | Models | Best For |
|---|---|---|
| [Mistral AI](mistral-api.md) | Codestral | Code generation, completion |
| [DeepSeek](deepseek-api.md) | DeepSeek-Coder | Code generation, infilling |
| [Fireworks AI](fireworks-api.md) | DeepSeek-Coder, CodeLlama | Fast code inference |
| [Together AI](together-api.md) | CodeLlama, DeepSeek-Coder | Open code models |

### Open Source Inference APIs (No-card Friendly)
| Provider | Free Tier | Card Required | Models Available |
|---|---|---|---|
| [Fireworks AI](fireworks-api.md) | 25 req/min | ❌ | 50+ open models |
| [Together AI](together-api.md) | $1 free | ❌ | 100+ open models |
| [Hugging Face](huggingface-api.md) | 30K tokens/month | ❌ | 150,000+ models |
| [DeepSeek](deepseek-api.md) | 500M free tokens | ❌ | 5+ models |
| [Mistral AI](mistral-api.md) | Rate-limited | ❌ | 10+ open models |
| [Groq](groq-api.md) | 30 req/min | ✅ | 15+ open models |

---

## Key Comparisons

### Best Free Tier Wins
| Category | Winner | Why |
|---|---|---|
| Overall free tier | **Gemini API** | 60 req/min, 1M context, no card |
| No-card required | **Fireworks AI** | 25 req/min, all open models, no card |
| Open models | **Hugging Face** | 150K models, 30K free tokens |
| Cheapest paid | **DeepSeek** | $0.14/1M tokens |
| Speed | **Groq** | LPU hardware, 480 tok/s+ |
| Multi-provider | **OpenRouter** | 200 models, 20 providers, $1 free |

### Quick Decision Guide

```
Need an API for LLM text generation?
├── Want the best quality? → OpenAI
├── Need long context? → Gemini (1M) or Anthropic (200K)
├── On a budget? → DeepSeek or Fireworks
├── Need speed? → Groq
└── Want to try many providers? → OpenRouter

Need embeddings?
├── Best quality → OpenAI text-embedding-3-large
├── Best free → Gemini embeddings
└── Most options → Hugging Face

Need image generation?
├── Best quality → OpenAI DALL-E 3
├── Most open models → Together AI
└── Community variety → Replicate

Need code generation?
├── Best general → OpenAI or Anthropic
├── Best cost → DeepSeek-Coder
└── Open source → Mistral Codestral
```

---

## Provider Details

See individual provider pages for full specifications:
- [OpenAI API](openai-api.md)
- [Gemini API](gemini-api.md)
- [Groq API](groq-api.md)
- [Anthropic API](anthropic-api.md)
- [Together AI](together-api.md)
- [Cohere API](cohere-api.md)
- [Mistral AI](mistral-api.md)
- [DeepSeek API](deepseek-api.md)
- [OpenRouter](openrouter-api.md)
- [Hugging Face Inference API](huggingface-api.md)
- [Replicate](replicate-api.md)
- [Fireworks AI](fireworks-api.md)
- [Perplexity API](perplexity-api.md)

---

## Related Categories

- [AI/Embeddings](../ai/embeddings/) — Standalone embedding services
- [AI/Image Generation](../ai/image-generation/) — Dedicated image generation platforms
- [AI/Speech](../ai/speech/) — Speech-to-text and text-to-speech services
- [Open Source](../open-source/) — Self-hostable AI models

---

> ⚠️ Free tiers change frequently. Always verify current limits on the provider's official pricing page before relying on free tier limits in production.
