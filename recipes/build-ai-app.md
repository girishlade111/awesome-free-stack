# Build an AI App

Build and deploy an AI-powered application using free LLMs, vector storage, and hosting.

## Stack

| Layer | Choice | Why |
|---|---|---|
| **Frontend** | Next.js + Tailwind CSS | Rapid UI, API routes for AI proxying |
| **Backend** | Next.js API Routes + AI SDK | Vercel AI SDK for streaming LLM responses |
| **Hosting** | Vercel Free | Edge runtime for low-latency AI responses |
| **Database** | Supabase Free + pgvector | Store embeddings + metadata, vector search |
| **Auth** | Clerk Free | 10k MAUs, pre-built AI consent screens |
| **Storage** | Cloudflare R2 Free | 10 GB, S3-compatible for model assets |
| **Email** | Resend Free | 100 emails/day for AI-generated reports |
| **Analytics** | PostHog Free | 1M events/mo, session replay for AI interactions |
| **LLM** | Groq / Gemini / DeepSeek | Free tier LLM APIs with generous rate limits |
| **Vector DB** | Supabase (pgvector) | Free vector storage within PostgreSQL |

## Estimated Monthly Cost

| Item | Cost |
|---|---|
| LLM API Calls | ₹0 (free tier quotas) |
| Hosting | ₹0 |
| Database + Vectors | ₹0 |
| Auth | ₹0 |
| Storage | ₹0 |
| Analytics | ₹0 |
| **Total** | **₹0** |

## Setup Steps

1. Create Next.js app with `create-next-app`
2. Set up Clerk for user auth
3. Create Supabase project with pgvector extension enabled
4. Implement embedding generation pipeline
5. Build RAG flow: embed → store → query → respond
6. Add LLM provider (Groq for speed, Gemini for quality)
7. Stream responses using Vercel AI SDK
8. Deploy to Vercel

## Architecture

```
User → Frontend → API Route → LLM Provider
                         ↓
                    Vector Search (pgvector)
                         ↓
                    Context + Prompt → Response
```

## Scaling Path

| Resource | Free | Paid |
|---|---|---|
| LLM Calls | 30 req/min (Groq) | $0.15/1M tokens (GPT-4o mini) |
| Vector Storage | 500 MB | $25/mo (Supabase Pro) |
| Hosting | 100 GB bandwidth | $20/mo (Vercel Pro) |

## Alternatives

| Layer | Alternative |
|---|---|
| LLM Provider | OpenRouter (many models), Together AI |
| Vector DB | Pinecone (free starter), Weaviate (OSS) |
| AI SDK | LangChain, LlamaIndex, raw fetch |
| Hosting | Cloudflare Workers (edge AI) |
