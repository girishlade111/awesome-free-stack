# AI Agent Frameworks

> **Last updated**: 2026-05-24 | **Category**: AI → Agents

Comprehensive catalog of frameworks, SDKs, and platforms for building autonomous AI agents — from simple function-calling to complex multi-agent orchestration.

---

## Legend

| Icon | Meaning |
|---|---|
| 🐍 | Python |
| 📘 | TypeScript / JavaScript |
| ☕ | Java |
| 🟣 | .NET |
| 🆓 | Free / Open-source |
| 💸 | Free tier via cloud |
| ⭐ | High community adoption (10k+ GitHub stars) |

---

## 1. Overview Comparison

| Framework | Lang | Type | Stars | License | Best For |
|---|---|---|---|---|---|
| [LangChain](#2-langchain) 🐍📘🆓⭐ | Python, TS | General agent framework | 100k+ | MIT | All-purpose agent orchestration, tool use, chains |
| [LangGraph](#3-langgraph) 🐍📘🆓⭐ | Python, TS | Graph-based agents | 12k+ | MIT | Complex multi-step agent workflows, cycles, state |
| [CrewAI](#4-crewai) 🐍🆓⭐ | Python | Multi-agent orchestration | 25k+ | MIT | Role-based multi-agent teams with collaboration |
| [AutoGen](#5-autogen) 🐍🆓⭐ | Python | Multi-agent conversations | 35k+ | MIT | Multi-agent chat, code generation agents |
| [PydanticAI](#6-pydanticai) 🐍🆓 | Python | Type-safe agents | 5k+ | MIT | Structured outputs, validation, type safety |
| [Semantic Kernel](#7-semantic-kernel) 🐍🟣☕🆓⭐ | Python, .NET, Java | Enterprise AI SDK | 23k+ | MIT | Enterprise integration, Microsoft ecosystem |
| [LlamaIndex](#8-llamaindex) 🐍📘🆓⭐ | Python, TS | Data + agent framework | 38k+ | MIT | RAG-powered agents, data orchestration |
| [OpenAI SDK](#9-openai-sdk) 🐍📘🆓⭐ | Python, TS | Official OpenAI SDK | 80k+ | Apache 2.0 | Assistants API, function calling, streaming |
| [Vercel AI SDK](#10-vercel-ai-sdk) 📘🆓⭐ | TS | Frontend AI SDK | 12k+ | Apache 2.0 | React/Vue/Svelte AI apps, streaming UI |
| [Google Gen AI SDK](#11-google-gen-ai-sdk) 🐍📘🆓 | Python, TS | Google AI SDK | 3k+ | Apache 2.0 | Gemini agents, Google ecosystem |
| [Dify](#12-dify) 🐍📘🆓⭐ | Python, TS | Low-code AI platform | 55k+ | Apache 2.0 | No-code agent building, RAG workflows |
| [Flowise](#13-flowise) 📘🆓⭐ | TS | Low-code AI builder | 32k+ | Apache 2.0 | Drag-and-drop agent flow builder |
| [Swarm](#14-swarm) 🐍🆓 | Python | Lightweight multi-agent | 15k+ | MIT | Simple multi-agent orchestration (experimental) |
| [SmolAgents](#15-smolagents) 🐍🆓⭐ | Python | Minimal agent framework | 8k+ | Apache 2.0 | Simple agents with HuggingFace integration |
| [Agno (Phidata)](#16-agno-phidata) 🐍🆓 | Python | Full-stack agents | 18k+ | MPL 2.0 | Production agents with databases |
| [TaskWeaver](#17-taskweaver) 🐍🆓⭐ | Python | Code-first agents | 6k+ | MIT | Code-aware planning, data analysis |
| [AutoGPT](#18-autogpt) 🐍🆓⭐ | Python | Autonomous agents | 170k+ | MIT | Autonomous goal-driven agents |
| [SuperAGI](#19-superagi) 🐍🆓⭐ | Python | Agent platform | 16k+ | MIT | Agent deployment and management |
| [Camel](#20-camel) 🐍🆓⭐ | Python | Multi-agent research | 6k+ | Apache 2.0 | Role-playing agent research |
| [Haystack](#21-haystack) 🐍📘🆓⭐ | Python, TS | NLP pipeline framework | 18k+ | Apache 2.0 | Search + RAG agent pipelines |
| [Mem0 / Letta](#22-mem0--letta) 🐍🆓⭐ | Python | Agent memory | 14k+ | Apache 2.0 | Long-term memory for agents |
| [Agnext](#23-agnext) 🐍🆓 | Python | Agent orchestration | 3k+ | MIT | Distributed multi-agent coordination |
| [Mastra](#24-mastra) 📘🆓 | TS | TypeScript agent SDK | 4k+ | MIT | TypeScript-native agents |
| [FastGPT](#25-fastgpt) 📘🆓⭐ | TS | Knowledge-base agents | 18k+ | Apache 2.0 | Knowledge QA with workflow automation |

---

## 2. LangChain

**Website**: https://langchain.com
**GitHub**: https://github.com/langchain-ai/langchain
**Language**: Python, TypeScript
**License**: MIT
**Stars**: 100k+ (Python) + 20k+ (TS)

### Overview
The most popular framework for building LLM-powered applications. Provides a modular ecosystem for chains, agents, tools, memory, RAG, and model integration. The de facto standard for LLM development.

### Key Features
- **Agent framework**: Tool-calling agents, structured output agents, custom agent executors
- **Chain construction**: LCEL (LangChain Expression Language) for composing chains
- **Memory systems**: Conversation memory, vector store memory, entity memory, summary memory
- **Tool integration**: 700+ built-in integrations with APIs, databases, search engines
- **Model support**: OpenAI, Anthropic, Google, Hugging Face, local models (Ollama, LlamaCPP)
- **RAG support**: Document loaders, text splitters, vector stores, retrievers
- **Streaming**: First-class streaming support for tokens and events
- **LangSmith**: Observability platform (free tier: 5k traces/month)

### Components

```
LangChain Ecosystem
├── langchain-core        → Base abstractions (LCEL)
├── langchain-community   → 700+ third-party integrations
├── langchain             → Chains, agents, retrieval strategies
├── langchain-experimental → Experimental features
├── LangGraph             → Graph-based agent orchestration
├── LangServe             → Deploy LangChain as REST API
└── LangSmith             → Observability + tracing (free tier)
```

### Free Tier
- **Open source**: ✅ MIT license, self-hosted
- **LangSmith**: 5,000 traces/month free
- **LangServe**: Free for self-hosted deployment
- **No cloud required**: Run entirely locally with Ollama

### Tags
`agent-framework` `llm` `rag` `python` `typescript` `open-source` `production-ready` `tool-use`

### Alternatives
[Haystack](#21-haystack), [LlamaIndex](#8-llamaindex), [Semantic Kernel](#7-semantic-kernel)

---

## 3. LangGraph

**Website**: https://langchain-ai.github.io/langgraph
**GitHub**: https://github.com/langchain-ai/langgraph
**Language**: Python, TypeScript
**License**: MIT
**Stars**: 12k+

### Overview
Graph-based framework for building complex, stateful agent workflows built on top of LangChain. Enables cycles, branching, parallel execution, and persistent state across agent steps.

### Key Features
- **State graphs**: Nodes and edges define agent execution flow
- **Cycles**: Support for loops and iterative refinement
- **Persistence**: Built-in checkpointing and state persistence
- **Human-in-the-loop**: Pause/resume agent execution for human approval
- **Streaming**: Stream intermediate states and partial results
- **Multi-agent**: Agent supervisor, swarm, and hierarchical patterns

### Free Tier
- **Open source**: ✅ MIT license
- **LangGraph Cloud**: Free tier with rate limits

### Tags
`agent-framework` `stateful` `orchestration` `python` `typescript` `open-source`

---

## 4. CrewAI

**Website**: https://crewai.com
**GitHub**: https://github.com/crewAIInc/crewAI
**Language**: Python
**License**: MIT
**Stars**: 25k+

### Overview
Multi-agent orchestration framework that enables you to create role-based AI teams. Each agent has a specific role, goal, and backstory — they collaborate like a crew to complete complex tasks.

### Key Features
- **Role-based agents**: Assign roles, goals, backstories, and constraints
- **Task delegation**: Agents can delegate subtasks to each other
- **Sequential + hierarchical**: Linear, hierarchical, and custom workflows
- **Tool integration**: LangChain tools, CrewAI tools, custom tools
- **Process management**: Sequential, consensual, and autonomous process types
- **Output tracking**: Structured output, callback handlers

### Free Tier
- **Open source**: ✅ MIT license
- **Self-hosted**: Run locally with any LLM (OpenAI, Ollama, etc.)
- **CrewAI Enterprise**: Paid tier for team collaboration

### Tags
`agent-framework` `multi-agent` `orchestration` `python` `open-source` `role-based`

### Alternatives
[AutoGen](#5-autogen), [Swarm](#14-swarm), [Camel](#20-camel)

---

## 5. AutoGen

**Website**: https://microsoft.github.io/autogen
**GitHub**: https://github.com/microsoft/autogen
**Language**: Python
**License**: MIT
**Stars**: 35k+

### Overview
Microsoft's multi-agent conversation framework that enables LLM agents to converse with each other and with humans. Supports code generation, execution, and debugging through agent collaboration.

### Key Features
- **Multi-agent conversations**: Agents chat with each other autonomously
- **Code execution**: Agents can write, execute, and debug code in sandboxed environments
- **Human-in-the-loop**: Can pause for human input and approval
- **Tool use**: Built-in tool and function calling
- **AutoGen Studio**: GUI for prototyping and debugging agents
- **Group chat**: Multiple agents in group conversations with routing

### Free Tier
- **Open source**: ✅ MIT license
- **Self-hosted**: Fully free and open source
- **AutoGen Studio**: Free GUI tooling

### Tags
`agent-framework` `multi-agent` `python` `open-source` `code-generation` `microsoft`

### Alternatives
[CrewAI](#4-crewai), [Swarm](#14-swarm), [TaskWeaver](#17-taskweaver)

---

## 6. PydanticAI

**Website**: https://ai.pydantic.dev
**GitHub**: https://github.com/pydantic/pydantic-ai
**Language**: Python
**License**: MIT
**Stars**: 5k+

### Overview
Agent framework built on Pydantic for type-safe, validated LLM interactions. Provides structured outputs, dependency injection, and streaming — all with full type checking at compile time.

### Key Features
- **Type-safe agents**: Define structured outputs with Pydantic models
- **Validation**: Automatic response validation against schemas
- **Dependency injection**: Inject services, databases, APIs into agents
- **Streaming**: Stream structured data and text tokens
- **Model support**: OpenAI, Anthropic, Gemini, Ollama, Groq
- **Tool integration**: Type-safe tool definitions with auto-validation

### Free Tier
- **Open source**: ✅ MIT license
- **Self-hosted**: Fully free

### Tags
`agent-framework` `python` `type-safe` `open-source` `validation` `structured-output`

### Alternatives
[LangChain](#2-langchain), [Instructor](#-related-tools)

---

## 7. Semantic Kernel

**Website**: https://learn.microsoft.com/semantic-kernel
**GitHub**: https://github.com/microsoft/semantic-kernel
**Language**: Python, .NET (C#), Java
**License**: MIT
**Stars**: 23k+ (aggregate across all SDKs)

### Overview
Microsoft's enterprise AI orchestration SDK that integrates LLMs with existing programming languages. Designed for enterprise apps that need AI capabilities with .NET, Python, or Java codebases.

### Key Features
- **Multi-language SDK**: First-class support for .NET, Python, and Java
- **Plugin system**: Extend agents with native code plugins
- **Function calling**: Automatic function calling and tool selection
- **Memory**: Vector memory, semantic memory, text memory
- **Planning**: Sequential planners and stepwise planners
- **RAG patterns**: Built-in RAG with Azure AI Search integration
- **Azure integration**: Deep integration with Azure OpenAI, AI Search, Cosmos DB
- **Enterprise ready**: Responsible AI filters, telemetry, auth

### Free Tier
- **Open source**: ✅ MIT license
- **Azure AI**: Free tier available ($200 free credits)

### Tags
`agent-framework` `python` `dotnet` `java` `open-source` `enterprise` `microsoft`

### Alternatives
[LangChain](#2-langchain), [LlamaIndex](#8-llamaindex), [OpenAI SDK](#9-openai-sdk)

---

## 8. LlamaIndex

**Website**: https://llamaindex.ai
**GitHub**: https://github.com/run-llama/llama_index
**Language**: Python, TypeScript
**License**: MIT
**Stars**: 38k+

### Overview
Data framework for LLM applications with powerful agent capabilities. Excels at connecting LLMs to external data sources, building RAG pipelines, and creating data-aware agents.

### Key Features
- **Data connectors**: 160+ data source integrations
- **RAG pipeline**: Ingestion, indexing, retrieval in one flow
- **Agent framework**: Agent runner with tool integration
- **Workflow engine**: Event-driven agent orchestration
- **Structured outputs**: Pydantic extraction, structured generation
- **Agent types**: ReAct agents, OpenAI agents, custom agents
- **Observability**: Built-in tracing and callbacks

### Free Tier
- **Open source**: ✅ MIT license
- **LlamaCloud**: Managed parsing + retrieval (free tier available)
- **Self-hosted**: Fully free

### Tags
`agent-framework` `rag` `python` `typescript` `open-source` `data-framework`

### Alternatives
[LangChain](#2-langchain), [Haystack](#21-haystack), [Semantic Kernel](#7-semantic-kernel)

---

## 9. OpenAI SDK

**Website**: https://platform.openai.com
**GitHub**: https://github.com/openai/openai-python
**Language**: Python, TypeScript, Go, Java, .NET, curl
**License**: Apache 2.0
**Stars**: 80k+ (Python) + 15k+ (TS)

### Overview
Official OpenAI client libraries with built-in agent capabilities through the Assistants API, function calling, streaming, and structured outputs. The most widely deployed LLM SDK.

### Key Features
- **Assistants API**: Persistent agents with instructions, tools, and files
- **Function calling**: Automatic tool selection and execution
- **Streaming**: Real-time token, text, and event streaming
- **Structured outputs**: JSON mode, response_format for typed responses
- **File handling**: Upload, process, and reference files in conversations
- **Code interpreter**: Built-in Python code execution sandbox
- **Vector stores**: File search across uploaded documents
- **Realtime API**: Voice-to-voice agent interactions
- **Multi-language**: Python, TS, Go, Java, .NET, curl

### Free Tier
- **SDK cost**: Free (open source)
- **API cost**: $5 free credit for new users
- **Assistants**: GPT-4o mini at $0.15/1M input tokens

### Tags
`agent-framework` `llm` `python` `typescript` `open-source` `api` `streaming` `assistant`

### Alternatives
[Vercel AI SDK](#10-vercel-ai-sdk), [Google Gen AI SDK](#11-google-gen-ai-sdk)

---

## 10. Vercel AI SDK

**Website**: https://sdk.vercel.ai
**GitHub**: https://github.com/vercel/ai
**Language**: TypeScript
**License**: Apache 2.0
**Stars**: 12k+

### Overview
The standard TypeScript toolkit for building AI-powered user interfaces. Provides React/Vue/Svelte hooks for streaming, chat, agent interactions, and tool calling in the browser.

### Key Features
- **React hooks**: `useChat`, `useCompletion`, `useAssistant` React hooks
- **Streaming UI**: Built-in streaming text generation with smooth rendering
- **Multi-model**: OpenAI, Anthropic, Google, Mistral, open-source (Ollama)
- **Tool calling**: Client and server-side tool execution
- **Agent integration**: Works with LangChain, LlamaIndex, OpenAI Assistants
- **Edge ready**: Works with Vercel Edge Functions, Cloudflare Workers
- **AI SDK UI**: Framework-agnostic UI primitives
- **AI SDK RSC**: React Server Components for AI

### Free Tier
- **Open source**: ✅ Apache 2.0 license
- **Framework cost**: Free
- **API cost**: Varies by provider (free tiers available)

### Tags
`agent-framework` `typescript` `react` `open-source` `streaming` `frontend` `vercel`

### Alternatives
[OpenAI SDK](#9-openai-sdk)

---

## 11. Google Gen AI SDK

**Website**: https://ai.google.dev
**GitHub**: https://github.com/google-generative-ai
**Language**: Python, TypeScript, Go, Dart (Flutter), Swift, Kotlin
**License**: Apache 2.0
**Stars**: 3k+

### Overview
Google's official SDK for the Gemini API and Vertex AI. Provides agent capabilities including function calling, system instructions, safety settings, and multimodal agent interactions.

### Key Features
- **Function calling**: Declarative and automatic tool calling
- **System instructions**: Persistent agent configuration
- **Safety settings**: Content filtering and safety controls
- **Multimodal agents**: Text, image, audio, video understanding
- **Streaming**: Real-time token and content streaming
- **Google AI Studio**: Free prototyping and API key management
- **Vertex AI**: Enterprise-grade agent deployment

### Free Tier
- **SDK cost**: Free (open source)
- **API cost**: 60 requests/minute free (Gemini 1.5 Flash)
- **Google AI Studio**: Free tier with 1M token context

### Tags
`agent-framework` `python` `typescript` `open-source` `google` `multimodal`

### Alternatives
[OpenAI SDK](#9-openai-sdk), [Vercel AI SDK](#10-vercel-ai-sdk)

---

## 12. Dify

**Website**: https://dify.ai
**GitHub**: https://github.com/langgenius/dify
**Language**: Python, TypeScript
**License**: Apache 2.0
**Stars**: 55k+

### Overview
Open-source LLM app development platform with a visual agent builder. Combines RAG pipeline, agent workflow, model management, and monitoring in a single web interface.

### Key Features
- **Visual agent builder**: Drag-and-drop workflow for agent creation
- **RAG engine**: Built-in document ingestion, chunking, and retrieval
- **Multi-model**: OpenAI, Anthropic, Gemini, Llama, local models
- **Agent types**: ReAct, function calling, multi-agent, chatbot
- **Plugin system**: Extend with tools and APIs
- **Built-in tools**: Web search, image generation, code execution
- **API publishing**: Deploy agents as public/private APIs
- **Conversation logs**: View, annotate, and improve conversations
- **Dify Cloud**: Hosted version with free tier

### Free Tier
- **Self-hosted**: ✅ Apache 2.0, fully free
- **Dify Cloud**: Free tier with limited resources
- **Community edition**: Feature-complete self-hosted version

### Tags
`agent-platform` `low-code` `rag` `python` `typescript` `open-source` `visual-builder`

### Alternatives
[Flowise](#13-flowise), [FastGPT](#25-fastgpt), [LangFlow](#-related-tools)

---

## 13. Flowise

**Website**: https://flowiseai.com
**GitHub**: https://github.com/FlowiseAI/Flowise
**Language**: TypeScript
**License**: Apache 2.0
**Stars**: 32k+

### Overview
Low-code, drag-and-drop LLM application builder. Provides a visual interface for creating AI agents, chatbots, RAG pipelines without writing code.

### Key Features
- **Visual flow builder**: Drag-and-drop nodes for agents, models, tools
- **Agent types**: Conversation agents, ReAct agents, function calling agents
- **Tool integration**: 50+ built-in nodes (search, database, API, document loader)
- **RAG pipeline**: Document chunking, embedding, vector store in visual flow
- **Chat UI**: Embeddable chat widgets
- **API endpoints**: Expose flows as REST APIs
- **Authentication**: Built-in auth for API endpoints
- **Custom nodes**: Build and import custom components

### Free Tier
- **Self-hosted**: ✅ Apache 2.0, fully free
- **Flowise Cloud**: Paid hosting option
- **Docker deployment**: One-command deployment

### Tags
`agent-platform` `low-code` `typescript` `open-source` `visual-builder` `drag-drop`

### Alternatives
[Dify](#12-dify), [FastGPT](#25-fastgpt)

---

## 14. Swarm

**Website**: https://github.com/openai/swarm
**GitHub**: https://github.com/openai/swarm
**Language**: Python
**License**: MIT
**Stars**: 15k+

### Overview
OpenAI's experimental lightweight framework for multi-agent orchestration. Focuses on agent handoffs, routine-based execution, and simple coordination patterns.

### Key Features
- **Agent handoffs**: Seamless transfer between specialized agents
- **Routines**: Encapsulated agent behaviors and functions
- **Minimal abstraction**: ~300 lines of code, easy to customize
- **OpenAI-native**: Built for OpenAI function calling
- **Educational focus**: Designed for learning multi-agent patterns

### Free Tier
- **Open source**: ✅ MIT license
- **Self-hosted**: Fully free
- **Note**: Experimental, not for production

### Tags
`agent-framework` `multi-agent` `python` `open-source` `experimental` `openai`

### Alternatives
[CrewAI](#4-crewai), [AutoGen](#5-autogen), [Camel](#20-camel)

---

## 15. SmolAgents

**Website**: https://huggingface.co/docs/smolagents
**GitHub**: https://github.com/huggingface/smolagents
**Language**: Python
**License**: Apache 2.0
**Stars**: 8k+

### Overview
Hugging Face's minimal agent framework that enables agents to write and execute code, use tools, and interact with Hugging Face Hub models. Emphasizes code-actions over JSON tool calls.

### Key Features
- **Code agents**: Agents that write and execute Python code
- **Tool agents**: JSON-based tool calling agents
- **Multi-agent**: Agent teams and hubs for collaboration
- **HF Hub integration**: Use any model from Hugging Face
- **Lightweight**: Minimal dependencies, fast to prototype
- **Gradio integration**: Quick UI for agent interactions

### Free Tier
- **Open source**: ✅ Apache 2.0
- **Self-hosted**: Fully free
- **HF Inference API**: Free tier (30K tokens/month)

### Tags
`agent-framework` `python` `open-source` `huggingface` `minimal` `code-agents`

### Alternatives
[PydanticAI](#6-pydanticai), [Agno](#16-agno-phidata)

---

## 16. Agno (Phidata)

**Website**: https://agno.so
**GitHub**: https://github.com/agno-agi/agno
**Language**: Python
**License**: MPL 2.0
**Stars**: 18k+

### Overview
Full-stack agent framework for building production-grade AI agents with databases, knowledge bases, and tools. Includes a managed agent platform for deployment and monitoring.

### Key Features
- **Agent architecture**: Memory, knowledge, tools, and storage
- **Multi-model support**: OpenAI, Anthropic, Gemini, Ollama, open-source
- **Knowledge bases**: Vector DB, text, PDF, URL knowledge sources
- **Agent storage**: Postgres, SQLite, MongoDB for agent state
- **Team agents**: Hierarchical agent teams with delegation
- **Managed UI**: Built-in agent dashboard and playground
- **API endpoints**: REST API for agent interactions

### Free Tier
- **Open source**: ✅ MPL 2.0
- **Self-hosted**: Fully free
- **Agno Cloud**: Free tier available

### Tags
`agent-framework` `python` `open-source` `production` `knowledge-base` `storage`

### Alternatives
[LangChain](#2-langchain), [CrewAI](#4-crewai)

---

## 17. TaskWeaver

**Website**: https://microsoft.github.io/TaskWeaver
**GitHub**: https://github.com/microsoft/TaskWeaver
**Language**: Python
**License**: MIT
**Stars**: 6k+

### Overview
Microsoft's code-first agent framework that treats code snippets as first-class actions. Agents plan, write, execute, and debug code to complete complex data analysis and automation tasks.

### Key Features
- **Code-first actions**: Agents generate and execute code
- **Rich data structures**: DataFrame, numpy array, file operations
- **Stateful execution**: Conversation history, variable persistence
- **Plugin system**: Custom plugins for domain-specific actions
- **Planner-Executor**: Separate planner and executor agents
- **Sandbox execution**: Secure code execution environment

### Free Tier
- **Open source**: ✅ MIT license
- **Self-hosted**: Fully free

### Tags
`agent-framework` `python` `open-source` `code-first` `microsoft` `data-analysis`

### Alternatives
[AutoGen](#5-autogen), [OpenAI Code Interpreter](#9-openai-sdk)

---

## 18. AutoGPT

**Website**: https://autogpt.net
**GitHub**: https://github.com/Significant-Gravitas/AutoGPT
**Language**: Python
**License**: MIT
**Stars**: 170k+

### Overview
The original autonomous agent project that sparked the AI agent movement. Agents set goals, create tasks, and work autonomously with minimal human input. Now a modular agent platform.

### Key Features
- **Autonomous mode**: Self-directed goal completion
- **Modular architecture**: Pluggable components (memory, tools, models)
- **Benchmark testing**: Built-in agent benchmarking suite
- **Web navigation**: Browse the web, extract information
- **File operations**: Create, read, modify files
- **Code generation**: Write and execute code
- **Plugin ecosystem**: Community-built extensions

### Free Tier
- **Open source**: ✅ MIT license
- **Self-hosted**: Fully free
- **AutoGPT Cloud**: Managed hosting (free tier)

### Tags
`agent-framework` `autonomous` `python` `open-source` `goal-oriented`

### Alternatives
[SuperAGI](#19-superagi), [Camel](#20-camel)

---

## 19. SuperAGI

**Website**: https://superagi.com
**GitHub**: https://github.com/TransformerOptimus/SuperAGI
**Language**: Python
**License**: MIT
**Stars**: 16k+

### Overview
Open-source autonomous agent framework with a web interface for creating, managing, and deploying agents. Includes tools for agent performance monitoring and resource management.

### Key Features
- **Web UI**: Create and manage agents via browser interface
- **Agent templates**: Pre-built agent configurations
- **Toolkits**: 30+ built-in tools and toolkits
- **Vector DB integration**: Long-term memory for agents
- **Scheduling**: Run agents on schedules (cron jobs)
- **Telemetry**: Agent performance monitoring and logging
- **Multi-model**: OpenAI, Anthropic, Google, local models

### Free Tier
- **Open source**: ✅ MIT license
- **Self-hosted**: Fully free
- **SuperAGI Cloud**: Managed hosting (free tier)

### Tags
`agent-platform` `autonomous` `python` `open-source` `web-ui` `management`

### Alternatives
[AutoGPT](#18-autogpt), [Dify](#12-dify)

---

## 20. Camel

**Website**: https://www.camel-ai.org
**GitHub**: https://github.com/camel-ai/camel
**Language**: Python
**License**: Apache 2.0
**Stars**: 6k+

### Overview
Research framework for multi-agent role-playing where agents take on roles (e.g., AI assistant + AI user) and communicate to solve tasks. Pioneered the role-playing agent paradigm.

### Key Features
- **Role-playing agents**: Agents with assigned personas and roles
- **Multi-agent chat**: Structured conversations between agents
- **Task specification**: Auto task generation and decomposition
- **Vector memory**: Semantic memory for agents
- **Open-source models**: Support for local and self-hosted models
- **Research tools**: Built-in evaluation and data collection

### Free Tier
- **Open source**: ✅ Apache 2.0
- **Self-hosted**: Fully free

### Tags
`agent-framework` `multi-agent` `python` `open-source` `research` `role-playing`

### Alternatives
[AutoGen](#5-autogen), [Swarm](#14-swarm), [CrewAI](#4-crewai)

---

## 21. Haystack

**Website**: https://haystack.deepset.ai
**GitHub**: https://github.com/deepset-ai/haystack
**Language**: Python, TypeScript
**License**: Apache 2.0
**Stars**: 18k+

### Overview
NLP framework for building search systems, RAG pipelines, and agent-based applications. Provides modular components for document processing, retrieval, and LLM interaction.

### Key Features
- **Pipeline architecture**: Component-based pipeline construction
- **Agent support**: Tool calling, function calling agents
- **RAG patterns**: 100+ examples for different retrieval strategies
- **Document processing**: 50+ file format converters
- **Model integration**: OpenAI, Anthropic, Cohere, Hugging Face, local
- **Evaluation**: Built-in pipeline evaluation and metrics
- **Haystack 2.0**: Fully rewritten with agent-native pipeline design

### Free Tier
- **Open source**: ✅ Apache 2.0
- **Haystack Cloud**: Hosted pipelines (free tier)
- **Self-hosted**: Fully free

### Tags
`agent-framework` `rag` `python` `typescript` `open-source` `search` `nlp`

### Alternatives
[LlamaIndex](#8-llamaindex), [LangChain](#2-langchain)

---

## 22. Mem0 / Letta

**Website**: https://mem0.ai
**GitHub**: https://github.com/mem0ai/mem0
**Language**: Python
**License**: Apache 2.0
**Stars**: 14k+ (Mem0) + 15k+ (Letta)

### Overview
Memory layer for AI agents that provides long-term, short-term, and semantic memory. Mem0 adds persistent memory to any agent, while Letta (formerly MemGPT) provides OS-like memory management for LLMs.

### Key Features
- **Mem0**: Add memory to any agent with 3 lines of code
  - User-specific memory, session memory, permanent memory
  - Automatic memory consolidation and retrieval
  - Works with any LLM and agent framework
- **Letta (MemGPT)**: 
  - Virtual context management (OS paging for LLMs)
  - Tiered memory system (working, archival, recall)
  - Agent functions and tool calling
  
### Free Tier
- **Mem0**: ✅ Apache 2.0, self-hosted free
- **Mem0 Cloud**: Free tier (1K memories)
- **Letta**: ✅ Apache 2.0, fully free

### Tags
`memory` `agent-framework` `python` `open-source` `persistence` `context-management`

### Alternatives
LangChain Memory, [CrewAI](#4-crewai) memory, SuperAGI memory

---

## 23. Agnext

**Website**: https://agnext.dev
**GitHub**: https://github.com/agnext/agnext
**Language**: Python
**License**: MIT
**Stars**: 3k+

### Overview
Distributed multi-agent orchestration framework designed for scaling agents across machines. Handles agent communication, distributed execution, and coordination.

### Key Features
- **Distributed agents**: Run agents across multiple processes/machines
- **Message passing**: Agent-to-agent communication protocol
- **Task scheduling**: Intelligent task distribution
- **Fault tolerance**: Crash recovery and retry mechanisms
- **Monitoring**: Agent health and performance dashboards

### Free Tier
- **Open source**: ✅ MIT license
- **Self-hosted**: Fully free

### Tags
`agent-framework` `distributed` `python` `open-source` `orchestration`

---

## 24. Mastra

**Website**: https://mastra.dev
**GitHub**: https://github.com/mastra-ai/mastra
**Language**: TypeScript
**License**: MIT
**Stars**: 4k+

### Overview
TypeScript-native agent framework for building agentic applications with workflows, agents, and RAG. Designed for the JavaScript/TypeScript ecosystem with first-class React support.

### Key Features
- **Agent SDK**: Define agents with tools, instructions, and memory
- **Workflows**: Event-driven workflow orchestration
- **RAG engine**: Built-in retrieval augmented generation
- **TypeScript native**: Full type safety, async-native
- **React hooks**: useAgent, useWorkflow for React integration
- **Model support**: OpenAI, Anthropic, Google, Ollama

### Free Tier
- **Open source**: ✅ MIT license
- **Self-hosted**: Fully free

### Tags
`agent-framework` `typescript` `open-source` `workflows` `rag`

### Alternatives
[Vercel AI SDK](#10-vercel-ai-sdk), [LangChain](#2-langchain)

---

## 25. FastGPT

**Website**: https://fastgpt.in
**GitHub**: https://github.com/labring/FastGPT
**Language**: TypeScript
**License**: Apache 2.0
**Stars**: 18k+

### Overview
Open-source knowledge-based Q&A platform with workflow automation. Combines RAG pipelines with visual workflow orchestration for creating intelligent agent applications.

### Key Features
- **Knowledge base**: Document management, chunking, vector search
- **Workflow engine**: Visual workflow automation with 40+ nodes
- **Agent system**: Tool calling, multi-agent coordination
- **API publishing**: Deploy agents as standard APIs
- **Team collaboration**: Role-based access control
- **Fed deployment**: One-click deployment options

### Free Tier
- **Open source**: ✅ Apache 2.0
- **Self-hosted**: Fully free
- **FastGPT Cloud**: Paid hosting

### Tags
`agent-platform` `knowledge-base` `typescript` `open-source` `workflow` `qa`

### Alternatives
[Dify](#12-dify), [Flowise](#13-flowise)

---

## 26. Additional Notable Tools

| Tool | Lang | Description | GitHub | License |
|---|---|---|---|---|
| **LangFlow** 🐍 | Python | LangChain visual UI builder | 20k+⭐ | MIT |
| **Embedchain** 🐍 | Python | RAG framework for unstructured data | 10k+⭐ | Apache 2.0 |
| **OpenDevin** 🐍 | Python | AI software development agent | 35k+⭐ | MIT |
| **ChatDev** 🐍 | Python | Multi-agent software company simulation | 26k+⭐ | Apache 2.0 |
| **AgentLite** 🐍 | Python | Lightweight agent building blocks | 2k+⭐ | Apache 2.0 |
| **LoopGPT** 🐍 | Python | Autonomous task management agents | 8k+⭐ | MIT |
| **Praison AI** 🐍 | Python | Multi-agent LLM framework | 2k+⭐ | MIT |
| **Atomic Agents** 🐍 | Python | Atomic, composable agent framework | 1k+⭐ | MIT |
| **Bito AI** 📘 | TS | AI agent for code review | — | Freemium |
| **Copilot Kit** 📘 | TS | React AI copilot components | 8k+⭐ | MIT |

---

## 27. Agent Framework Selection Guide

### By Use Case

```
Need an agent framework for...
│
├── General-purpose LLM applications?
│   └── LangChain (most flexible, largest ecosystem)
│
├── Multi-agent collaboration?
│   ├── Role-based teams → CrewAI
│   ├── Conversation-driven → AutoGen
│   └── Lightweight → Swarm
│
├── Type-safe structured outputs?
│   └── PydanticAI (validation-first)
│
├── Enterprise .NET/Java apps?
│   └── Semantic Kernel (first-class enterprise support)
│
├── Data-intensive RAG agents?
│   └── LlamaIndex (best data connectors)
│
├── React/Vue/Svelte frontend AI?
│   └── Vercel AI SDK (streaming UI components)
│
├── No-code / low-code agent building?
│   ├── Dify (most features, knowledge base)
│   └── Flowise (easiest drag-and-drop)
│
├── Production deployment?
│   └── Agno (storage, monitoring, deployment)
│
├── Autonomous goal-driven agents?
│   ├── AutoGPT (largest community)
│   └── SuperAGI (best management UI)
│
├── Memory & context management?
│   └── Mem0 / Letta (persistent memory layer)
│
└── TypeScript-native?
    ├── Mastra (workflows + agents)
    └── Vercel AI SDK (UI-focused)
```

### By Language

| Language | Primary Frameworks |
|---|---|
| **Python** | LangChain, CrewAI, AutoGen, PydanticAI, LlamaIndex, SmolAgents, TaskWeaver, Agno, AutoGPT, SuperAGI, Camel, Semantic Kernel |
| **TypeScript** | LangChain (TS), Vercel AI SDK, Mastra, Flowise, FastGPT, LlamaIndex (TS) |
| **Java** | Semantic Kernel |
| **.NET (C#)** | Semantic Kernel |
| **Multi-language** | OpenAI SDK, Google Gen AI SDK, Semantic Kernel |

### By Skill Level

| Skill Level | Recommended Frameworks |
|---|---|
| **No-code** | Dify, Flowise, FastGPT |
| **Beginner** | OpenAI SDK, Vercel AI SDK, SmolAgents |
| **Intermediate** | LangChain, LlamaIndex, PydanticAI |
| **Advanced** | LangGraph, CrewAI, AutoGen, TaskWeaver |
| **Researcher** | Camel, AutoGPT, OpenDevin |

### By Scale

| Scale | Recommended Approach |
|---|---|
| **Prototype** | SmolAgents, PydanticAI, Vercel AI SDK |
| **Small app** | LangChain, LlamaIndex, OpenAI Assistants |
| **Production** | LangGraph, CrewAI, Semantic Kernel, Agno |
| **Enterprise** | Semantic Kernel, LangGraph Cloud, Azure AI |
| **Distributed** | Agnext, AutoGen (scalable), TaskWeaver |

---

## 28. Agent Architecture Patterns

### Single Agent (Function Calling)

```
User → Agent → LLM → Tool Selection → Tool Execution → Response
```

Best for: Simple Q&A, tool orchestration, data extraction
Frameworks: OpenAI SDK, PydanticAI, SmolAgents

### Supervisor / Orchestrator

```
          ┌── Tool Agent 1 ──┐
User → Supervisor Agent ──┼── Tool Agent 2 ──┼→ Response
          └── Tool Agent 3 ──┘
```

Best for: Complex tasks requiring specialized sub-agents
Frameworks: LangGraph, CrewAI, Agno

### Conversational Multi-Agent

```
Agent A ←→ Agent B ←→ Agent C
   ↑           ↑            ↑
User ─────── Human Input ─────
```

Best for: Research, brainstorming, complex problem-solving
Frameworks: AutoGen, Swarm, Camel

### Hierarchical

```
                     ┌── Worker 1 ──┐
Manager Agent ──┬── Worker 2 ──┼→ Combined Response
                └── Worker 3 ──┘
```

Best for: Task decomposition, parallel execution
Frameworks: CrewAI, Agnext, LangGraph

### Memory-Augmented

```
Agent ←→ Short-term Memory
  ↑          ↓
User ←→ Long-term Memory
           ↓
      Vector Store
```

Best for: Long-running conversations, personalized agents
Frameworks: Mem0, Letta, LangChain, Agno

---

## 29. Glossary

| Term | Definition |
|---|---|
| **Agent** | An LLM-powered system that can perceive its environment, reason, and take actions using tools. |
| **Tool** | A function or API that an agent can call to interact with external systems (search, database, calculator). |
| **Function Calling** | LLM feature that returns structured JSON suggesting which function to call with which arguments. |
| **Tool Use** | The agent's ability to select and execute tools based on the task. |
| **Multi-Agent** | Multiple agents collaborating, delegating, or competing to solve tasks. |
| **Orchestration** | Coordinating the flow of execution between agents, tools, and humans. |
| **RAG** | Retrieval-Augmented Generation — augmenting LLM responses with retrieved data. |
| **ReAct** | Reasoning + Acting pattern where agents alternate between thinking and taking actions. |
| **Chain-of-Thought** | Step-by-step reasoning before producing a final answer. |
| **Human-in-the-Loop** | Agent pauses execution to request human input or approval. |
| **Agent Handoff** | One agent transfers control to another specialized agent. |
| **State Graph** | Graph-based agent execution where nodes are actions and edges are transitions. |
| **Memory** | Persistence layer for agent context across conversations and sessions. |
| **Assistants API** | OpenAI's API for persistent, stateful agents with built-in tools. |
| **LCEL** | LangChain Expression Language — declarative way to chain LLM calls. |

---

## 30. Related Resources

- [AI APIs](apis.md) — API providers for powering agents
- [AI Models](models.md) — Foundation models used by agents
- [Open Source](../open-source/) — Self-hostable infrastructure for agents

---

> ⚠️ Agent frameworks evolve rapidly. Check individual repositories for latest versions, breaking changes, and licensing updates. Star counts and metrics are approximate.
