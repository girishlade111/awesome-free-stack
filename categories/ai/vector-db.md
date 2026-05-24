# Vector Databases

> **Last updated**: 2026-05-24 | **Category**: AI → Vector Databases

Comprehensive catalog of vector databases and similarity search engines for AI embeddings, RAG pipelines, and semantic search — from embedded libraries to cloud-native distributed systems.

---

## Legend

| Icon | Meaning |
|---|---|
| 🆓 | Open-source |
| ☁️ | Managed cloud available |
| 💸 | Free tier available |
| 🐍 | Python SDK |
| 📘 | TypeScript SDK |
| 🐳 | Docker deployment |
| 🗄️ | PostgreSQL compatible |

---

## 1. Overview Comparison

| DB | Type | License | Cloud | Indexing | Embedding Dim | Filters | Best For |
|---|---|---|---|---|---|---|---|
| [Pinecone](#2-pinecone) | Managed | Proprietary | ✅ | IVF, HNSW, Serverless | Up to 5K | ✅ Rich | Production, high-scale |
| [Weaviate](#3-weaviate) | OSS + cloud | BSD-3 | ✅ | HNSW, PQ, SQ | Up to 10K | ✅ Rich | Hybrid search, graph |
| [Chroma](#4-chroma) | OSS embedded | Apache 2.0 | — | HNSW | Up to 5K | Basic | Prototyping, notebooks |
| [Qdrant](#5-qdrant) | OSS + cloud | Apache 2.0 | ✅ | HNSW, IVF | Unlimited | ✅ Rich | Performance, filters |
| [Milvus](#6-milvus) | OSS + cloud | Apache 2.0 | ✅ (Zilliz) | IVF, HNSW, DiskANN | Up to 32K | ✅ Rich | Billion-scale, enterprise |
| [LanceDB](#7-lancedb) | OSS embedded | Apache 2.0 | ✅ | IVF, HNSW | Up to 16K | ✅ Multimodal | ML-native, multimodal |
| [pgvector](#8-pgvector) | OSS Postgres ext | PostgreSQL | ✅ (via Neon) | IVFFlat, HNSW | Up to 8K | ✅ | SQL ecosystems |
| [Astra DB](#9-astra-db) | Managed | Proprietary | ✅ | HNSW, ANN | Up to 4K | ✅ Rich | Serverless Cassandra |
| [Elasticsearch](#10-elasticsearch) | OSS + cloud | Elastic | ✅ (Elastic Cloud) | HNSW | Up to 8K | ✅ Rich | Full-text + vector search |
| [Redis Stack](#11-redis-stack) | OSS | Redis | ✅ (Redis Cloud) | HNSW, FLAT | Up to 8K | Basic | Real-time caching |
| [MongoDB Atlas](#12-mongodb-atlas) | Managed | Proprietary | ✅ | IVF, HNSW | Up to 4K | ✅ Rich | Document + vector Search |
| [Typesense](#13-typesense) | OSS + cloud | GPL 3.0 | ✅ | HNSW | Up to 8K | ✅ Rich | Typo-tolerant search |
| [Vald](#14-vald) | OSS | Apache 2.0 | — | NGT | Varies | ✅ | Cloud-native, microservices |
| [Vespa](#15-vespa) | OSS + cloud | Apache 2.0 | ✅ | HNSW, ANN | Varies | ✅ Rich | Big data serving |
| [Marqo](#16-marqo) | OSS + cloud | Apache 2.0 | ✅ | HNSW | Unlimited (uses CLIP) | ✅ | End-to-end search |
| [SingleStore](#17-singlestore) | Managed | Proprietary | ✅ | IVF, HNSW | Up to 8K | ✅ | Real-time analytics |
| [Couchbase](#18-couchbase) | OSS + cloud | BSL | ✅ | HNSW | Up to 8K | ✅ | Caching + vector |

---

## 2. Pinecone

**Website**: https://www.pinecone.io
**Docs**: https://docs.pinecone.io
**Category**: AI → Vector Databases

### Overview
Fully managed vector database purpose-built for production AI applications. Offers serverless and pod-based indexes with advanced filtering, hybrid search, and high throughput.

### Key Features
- **Managed**: Zero ops, auto-scaling, automatic replication
- **Serverless**: Pay-per-request, auto-scaling to zero
- **Indexing**: IVF, HNSW, serverless optimized
- **Dimensions**: Up to 5K dimensions
- **Metadata filtering**: Rich boolean and range filters
- **Hybrid search**: Dense + sparse vector search
- **Namespaces**: Multi-tenancy per index
- **Regions**: Multiple cloud regions

### Free Tier 💸
- **1 million vectors** (pod-based)
- **1 pod** (replica)
- **Serverless**: Free tier with limited throughput
- **No credit card**: Required for free tier signup

### Hosting
| Option | Details |
|---|---|
| ☁️ Pinecone Cloud | Managed — US, EU, Asia regions |
| 🏠 Self-hosted | Not available (managed only) |

### OSS Support
❌ **Proprietary** — Not open source. SDKs are open (Python, TS, Go, Java).

### Pricing
- **Starter**: Free tier (1M vectors, 1 pod)
- **Standard**: Pod-based, pay-per-pod-hour
- **Serverless**: Pay-per-million vectors stored + queries

### Tags
`vector-database` `saas` `managed` `production-ready` `api` `sdk`

### Alternatives
[Weaviate](#weaviate), [Qdrant](#qdrant), [Milvus](#milvus)

---

## 3. Weaviate

**Website**: https://weaviate.io
**Docs**: https://weaviate.io/developers/weaviate
**GitHub**: https://github.com/weaviate/weaviate
**Category**: AI → Vector Databases

### Overview
Open-source vector database with built-in vectorization modules, hybrid search (vector + keyword), and graph-like data model. Excellent for combining structured and unstructured data.

### Key Features
- **Hybrid search**: Dense + sparse + keyword BM25 fusion
- **Built-in modules**: OpenAI, Cohere, Hugging Face, CLIP vectorizers
- **GraphQL API**: First-class GraphQL + REST APIs
- **Multi-tenancy**: Data isolation per tenant
- **DiskANN**: Disk-based ANN for large-scale
- **CRUD**: Full create/read/update/delete support
- **Geo-search**: Spatial search support
- **Dimensions**: Up to 10K dimensions

### Free Tier 💸
- **Weaviate Cloud (WCD)**: Free sandbox (1 cluster, up to 1GB)
- **Self-hosted**: Unlimited, fully free
- **No credit card**: For free sandbox tier

### Hosting
| Option | Details |
|---|---|
| ☁️ Weaviate Cloud | Free sandbox + paid tiers |
| 🏠 Self-hosted | Docker, Docker Compose, K8s |
| ☁️ Embedded | Python embedded mode |

### OSS Support
✅ **Open source** — BSD-3 license. Full source on GitHub.

**GitHub**: 12k+ stars. Active community.

### Pricing
- **Self-hosted**: Free
- **Cloud sandbox**: Free (1GB, limited time)
- **Cloud Standard**: Usage-based

### Tags
`vector-database` `open-source` `saas` `hybrid-search` `docker` `graphql` `api`

### Alternatives
[Pinecone](#pinecone), [Qdrant](#qdrant), [Milvus](#milvus)

---

## 4. Chroma

**Website**: https://www.trychroma.com
**Docs**: https://docs.trychroma.com
**GitHub**: https://github.com/chroma-core/chroma
**Category**: AI → Vector Databases

### Overview
Lightweight, open-source embedding database designed for AI prototyping and simplicity. Runs in-memory or persisted to disk. The easiest vector DB to get started with — just `pip install chromadb`.

### Key Features
- **Simple API**: `pip install`, 3-line setup
- **Embedded**: Runs in your Python process
- **Automatic embedding**: Built-in embedding functions
- **Metadata filtering**: Basic metadata filter support
- **Multi-modal**: Text, image via embedding functions
- **Collections**: Named collection organization
- **Client/Server**: Embedded or client-server mode
- **LangChain/LlamaIndex**: First-class integrations

### Free Tier 💸
- **Self-hosted**: Completely free, unlimited usage
- **No limits**: No vector count, no dimension limits
- **No card**: Nothing to sign up for

### Hosting
| Option | Details |
|---|---|
| 🏠 Embedded | Run in-process (Python) |
| 🐳 Docker | Client-server mode |
| ☁️ Chroma Cloud | Announced (coming) |

### OSS Support
✅ **Open source** — Apache 2.0 license. 18k+ GitHub stars.

### Pricing
- **Self-hosted**: Free forever
- **Cloud**: TBD (managed offering incoming)

### Tags
`vector-database` `open-source` `embedded` `python` `prototyping` `free-tier` `no-card`

### Alternatives
[LanceDB](#lancedb), [Qdrant](#qdrant), [pgvector](#pgvector)

---

## 5. Qdrant

**Website**: https://qdrant.tech
**Docs**: https://qdrant.tech/documentation
**GitHub**: https://github.com/qdrant/qdrant
**Category**: AI → Vector Databases

### Overview
High-performance vector database written in Rust. Designed for production with rich filtering, quantization, and multi-tenant support. Outstanding performance with low memory footprint.

### Key Features
- **Rust native**: Blazing fast, memory efficient
- **Rich filtering**: Geo, range, keyword, nested filters
- **Quantization**: Scalar (SQ) and Product Quantization (PQ)
- **Multi-tenancy**: Native collection-level isolation
- **Grouping**: Faceted search and grouping results
- **Hybrid search**: Sparse + dense + full-text
- **Distributed**: Sharding, replication, cluster mode
- **gRPC + REST**: Dual API support
- **Dimensions**: Unlimited — up to 65K+ dimensions

### Free Tier 💸
- **Self-hosted**: Unlimited, fully free
- **Qdrant Cloud**: Free tier (1 cluster, 1GB)
- **No card**: For free cloud tier

### Hosting
| Option | Details |
|---|---|
| ☁️ Qdrant Cloud | Free + paid clusters |
| 🐳 Docker | Single docker run |
| 🏠 Self-hosted | K8s, bare metal |
| 🐍 Embedded | Python embedded (beta) |

### OSS Support
✅ **Open source** — Apache 2.0 license. 22k+ GitHub stars.

### Pricing
- **Self-hosted**: Free
- **Cloud Free**: 1GB, 1 cluster
- **Cloud Paid**: $25+/month for dedicated clusters

### Tags
`vector-database` `open-source` `saas` `rust` `high-performance` `docker` `kubernetes`

### Alternatives
[Pinecone](#pinecone), [Weaviate](#weaviate), [Milvus](#milvus)

---

## 6. Milvus

**Website**: https://milvus.io
**Docs**: https://milvus.io/docs
**GitHub**: https://github.com/milvus-io/milvus
**Category**: AI → Vector Databases

### Overview
Cloud-native vector database built for billion-scale similarity search. The most feature-rich OSS vector DB with multiple index types, GPU acceleration, and distributed architecture. Sponsored by Zilliz.

### Key Features
- **Billion-scale**: Proven at 10B+ vectors
- **Index types**: IVF_FLAT, IVF_SQ8, HNSW, DiskANN, GPU_IVF
- **GPU acceleration**: GPU-indexed search
- **Hybrid search**: Mix of dense, sparse, and scalar
- **Multi-vector**: Multiple vector columns per entity
- **Partitioning**: Data partition for isolation
- **Consistency levels**: Strong, bounded staleness, eventual
- **Change stream**: CDC for real-time sync
- **Dimensions**: Up to 32K dimensions

### Free Tier 💸
- **Self-hosted**: Unlimited, completely free
- **Zilliz Cloud**: Free tier (100K vectors)
- **Milvus Lite**: Embedded Python (pip install)

### Hosting
| Option | Details |
|---|---|
| ☁️ Zilliz Cloud (managed Milvus) | Free + paid tiers |
| 🐳 Docker Compose | Dev/test deployment |
| 🏠 Self-hosted | K8s (Helm), bare metal |
| 🐍 Milvus Lite | Embedded Python |

### OSS Support
✅ **Open source** — Apache 2.0 license. 32k+ GitHub stars.

### Pricing
- **Self-hosted**: Free
- **Zilliz Cloud Free**: 100K vectors, 1 CU
- **Zilliz Cloud Paid**: Usage-based CU pricing

### Tags
`vector-database` `open-source` `saas` `distributed` `high-performance` `gpu` `docker` `kubernetes`

### Alternatives
[Qdrant](#qdrant), [Weaviate](#weaviate), [Pinecone](#pinecone)

---

## 7. LanceDB

**Website**: https://lancedb.com
**Docs**: https://lancedb.github.io/lancedb
**GitHub**: https://github.com/lancedb/lancedb
**Category**: AI → Vector Databases

### Overview
Developer-friendly, open-source vector database built on the Lance columnar format. Designed for ML/AI workloads with native multi-modal support (text, image, video, audio embeddings).

### Key Features
- **Columnar storage**: Built on Lance format (fast columnar access)
- **Multi-modal**: Store images, videos alongside embeddings
- **No server**: Embedded zero-copy architecture
- **Disk-based**: Efficient disk-based index (no need to fit in RAM)
- **Automatic embedding**: Built-in embedding functions (OpenAI, CLIP)
- **LangChain integration**: First-class agent/RAG support
- **Pandas, Arrow**: Native DataFrame integration
- **Rust core**: Fast, compiled performance

### Free Tier 💸
- **Self-hosted**: Completely free, unlimited
- **LanceDB Cloud**: Free tier available
- **No limits**: No vector count or dimension restrictions

### Hosting
| Option | Details |
|---|---|
| 🏠 Embedded | Python, TypeScript in-process |
| ☁️ LanceDB Cloud | Managed — free tier |
| 🐳 Docker | Not needed (embedded) |

### OSS Support
✅ **Open source** — Apache 2.0 license. 5k+ GitHub stars.

### Pricing
- **Self-hosted**: Free forever
- **Cloud Free**: Limited storage and requests
- **Cloud Paid**: Usage-based

### Tags
`vector-database` `open-source` `embedded` `python` `typescript` `multi-modal` `ml-native`

### Alternatives
[Chroma](#chroma), [Qdrant](#qdrant), [pgvector](#pgvector)

---

## 8. pgvector

**Website**: https://github.com/pgvector/pgvector
**Docs**: https://github.com/pgvector/pgvector
**GitHub**: https://github.com/pgvector/pgvector
**Category**: AI → Vector Databases

### Overview
Open-source vector similarity search extension for PostgreSQL. The most widely deployed vector database because it piggybacks on PostgreSQL's ecosystem — available on every major Postgres provider.

### Key Features
- **PostgreSQL extension**: `CREATE EXTENSION vector`
- **Index types**: IVFFlat, HNSW (v0.7+)
- **Dimensions**: Up to 8K dimensions
- **Distance metrics**: L2, inner product, cosine distance, L1, Hamming, Jaccard
- **Full SQL**: All PostgreSQL query power — joins, aggregations, CTEs
- **ACID**: Full transactional guarantees
- **Index with filters**: Filtered HNSW and IVFFlat
- **Halfvec**: Half-precision vectors (f32/16)
- **Available everywhere**: Supabase, Neon, RDS, Cloud SQL, self-hosted

### Free Tier 💸
- **Self-hosted**: Free with PostgreSQL
- **Neon**: 0.5GB free (includes pgvector)
- **Supabase**: 500MB free (includes pgvector)
- **No card**: Available on free tiers of all providers

### Hosting
| Option | Details |
|---|---|
| 🗄️ Any PostgreSQL | Self-hosted, any cloud |
| ☁️ Supabase | 500MB free |
| ☁️ Neon | 0.5GB free |
| ☁️ RDS Aurora | AWS managed |
| ☁️ Cloud SQL | GCP managed |
| ☁️ Azure Database | Azure managed |

### OSS Support
✅ **Open source** — PostgreSQL license. 13k+ GitHub stars.

### Pricing
- **Self-hosted**: Free
- **Cloud**: Included in PostgreSQL hosting costs

### Tags
`vector-database` `open-source` `postgresql` `sql` `extension` `acid` `docker`

### Alternatives
[Qdrant](#qdrant), [Chroma](#chroma), [Milvus](#milvus)

---

## 9. Astra DB

**Website**: https://astra.datastax.com
**Docs**: https://docs.datastax.com/en/astra-serverless
**Category**: AI → Vector Databases

### Overview
Serverless vector database built on Apache Cassandra by DataStax. Offers a generous free tier with zero-ops scaling and built-in integration with LangChain, LlamaIndex, and OpenAI.

### Key Features
- **Serverless**: Auto-scaling, pay-per-request
- **Cassandra foundation**: Proven distributed architecture
- **HNSW indexing**: Fast ANN search
- **Metadata filtering**: Rich CQL-based filtering
- **JSON API**: Document + vector API
- **Built-in integrations**: LangChain, LlamaIndex, OpenAI
- **Multi-region**: Global data distribution
- **Vectorize**: Automatic vector generation via provider

### Free Tier 💸
- **80GB data** free
- **25M monthly reads** free
- **5M monthly writes** free
- **No credit card**: Required for signup

### Hosting
| Option | Details |
|---|---|
| ☁️ Astra DB Cloud | Free + paid tiers |
| 🏠 Self-hosted | Via DataStax Enterprise (paid) |

### OSS Support
❌ **Proprietary** (serverless). Cassandra ecosystem is Apache 2.0.

### Pricing
- **Free tier**: 80GB storage, 25M reads/month
- **Pay-as-you-go**: Usage-based beyond free tier

### Tags
`vector-database` `saas` `cassandra` `serverless` `managed` `multi-region` `api`

### Alternatives
[MongoDB Atlas](#mongodb-atlas), [Pinecone](#pinecone), [Weaviate](#weaviate)

---

## 10. Additional Vector Databases

| DB | OSS | Cloud | Free Tier | Best For |
|---|---|---|---|---|
| **Elasticsearch** 🔓☁️💸 | Elastic License | Elastic Cloud | Free tier (limited) | Full-text + vector hybrid search |
| **Redis Stack** 🔓☁️💸 | Redis License | Redis Cloud | 30MB free | Real-time caching + vector |
| **MongoDB Atlas** ☁️💸 | Closed source | MongoDB Atlas | 512MB free | Document + vector search |
| **Typesense** 🔓☁️💸 | GPL 3.0 | Typesense Cloud | Free tier (limited) | Typo-tolerant vector search |
| **Vald** 🔓 | Apache 2.0 | — | Self-hosted free | Cloud-native microservices |
| **Vespa** 🔓☁️💸 | Apache 2.0 | Vespa Cloud | Free tier | Big data serving, ML |
| **Marqo** 🔓☁️💸 | Apache 2.0 | Marqo Cloud | Free tier | End-to-end vector search |
| **SingleStore** ☁️💸 | Closed source | SingleStore | Free tier | Real-time analytics + vector |
| **Couchbase** 🔓☁️💸 | BSL | Couchbase Capella | Free tier | Caching + document + vector |

### Quick Facts

| Attribute | Elasticsearch | MongoDB Atlas | Redis Stack | Typesense | Vespa |
|---|---|---|---|---|---|
| **License** | Elastic License | Proprietary | Redis License | GPL 3.0 | Apache 2.0 |
| **Cloud** | Elastic Cloud | MongoDB Atlas | Redis Cloud | Typesense Cloud | Vespa Cloud |
| **Free tier** | Yes | 512MB | 30MB | Yes | Yes |
| **Docker** | ✅ | ❌ | ✅ | ✅ | ✅ |
| **Full-text** | ✅ Best-in-class | ✅ | ✅ | ✅ Typo-tolerant | ✅ |
| **Vector dim** | Up to 8K | Up to 4K | Up to 8K | Up to 8K | Varies |
| **Filters** | ✅ Rich | ✅ Rich | ✅ Basic | ✅ Rich | ✅ Rich |

---

## 11. Feature Comparison Matrix

### Indexing & Performance

| DB | Default Index | Quantization | GPU | Billion-scale | Hybrid Search |
|---|---|---|---|---|---|
| Pinecone | HNSW, Serverless | PQ | ❌ | ✅ | ✅ |
| Weaviate | HNSW, PQ, SQ | ✅ PQ/SQ | ❌ | ✅ (DiskANN) | ✅ |
| Chroma | HNSW | ❌ | ❌ | ❌ | ❌ |
| Qdrant | HNSW | ✅ SQ/PQ | ❌ | ✅ | ✅ |
| Milvus | IVF, HNSW, DiskANN | ✅ IVF_SQ8 | ✅ | ✅ (10B+) | ✅ |
| LanceDB | IVF, HNSW | ❌ | ❌ | ✅ | ❌ |
| pgvector | IVFFlat, HNSW | ❌ | ❌ | ✅ | ✅ (via SQL) |
| Astra DB | HNSW | ❌ | ❌ | ✅ | ❌ |

### Filter Support

| DB | Exact | Range | Geo | Boolean | Nested | Facets |
|---|---|---|---|---|---|---|
| Pinecone | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Weaviate | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Qdrant | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Milvus | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| LanceDB | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ |
| pgvector | ✅ | ✅ | ✅ | ✅ | ✅ (via SQL) | ✅ (via SQL) |

### SDK / Client Support

```
               Python  TS/JS  Go  Rust  Java  .NET  curl/REST  gRPC
Pinecone        ✅      ✅    ✅   ❌   ✅    ❌    ✅         ✅
Weaviate        ✅      ✅    ✅   ❌   ✅    ✅    ✅         ✅
Chroma          ✅      ✅    ❌   ❌   ❌    ❌    ✅         ❌
Qdrant          ✅      ✅    ✅   ✅   ✅    ✅    ✅         ✅
Milvus          ✅      ✅    ✅   ❌   ✅    ✅    ✅         ✅
LanceDB         ✅      ✅    ✅   ✅   ❌    ❌    —          ❌
pgvector        ✅      ✅    ✅   ✅   ✅    ✅    (via SQL)   ❌
```

---

## 12. Selection Guide

### By Use Case

```
Building a RAG pipeline?
├── Prototyping → Chroma (pip install, 3 lines)
├── Small production → pgvector (Supabase/Neon free tier)
├── Medium production → Qdrant or Weaviate
└── Large scale → Milvus or Pinecone

Building a search system?
├── Full-text + vector → Elasticsearch or Weaviate
├── Typo-tolerant → Typesense
├── Document + vector → MongoDB Atlas
└── Real-time analytics + vector → SingleStore

Need something embedded?
├── Python-only → Chroma or LanceDB
├── With PostgreSQL → pgvector
├── With Redis → Redis Stack
└── With filesystem → LanceDB (Lance format)

Operating at scale?
├── 1M - 10M vectors → Qdrant, Weaviate, Pinecone
├── 10M - 100M vectors → Milvus, Vespa
├── 100M - 1B+ vectors → Milvus (GPU), Qdrant (distributed)
└── Multi-region → Astra DB, MongoDB Atlas
```

### By Hosting Preference

```
Want a managed service?
├── Free tier → Weaviate Cloud, Qdrant Cloud, Astra DB
├── Serverless → Pinecone Serverless, Astra DB
├── Pay-as-you-go → Pinecone, Qdrant Cloud
└── Enterprise → Milvus (Zilliz), Elastic Cloud

Want to self-host?
├── Easiest → Chroma (pip install)
├── Docker → Qdrant, Weaviate, pgvector
├── Kubernetes → Milvus, Weaviate, Qdrant, Vald
└── Embedded → Chroma, LanceDB, pgvector

Want open source?
├── Apache 2.0 → Chroma, Qdrant, Milvus, LanceDB, Vald
├── BSD → Weaviate
├── PostgreSQL → pgvector
└── BSL → Couchbase
```

### By Team Skill Level

| Skill Level | Recommendation | Setup Time |
|---|---|---|
| Beginner | Chroma or LanceDB | 5 minutes |
| Intermediate | pgvector (via Supabase) | 15 minutes |
| Experienced | Qdrant or Weaviate | 30 minutes |
| Advanced | Milvus or Elasticsearch | 1-2 hours |
| Expert | Custom distributed setup (Vespa, Vald) | Days |

---

## 13. Free Tier Comparison

| DB | Free Vectors | Free Storage | Free Throughput | Card Required |
|---|---|---|---|---|
| Pinecone | 1M | — | Limited | ✅ (for pod) |
| Weaviate | Unlimited (sandbox) | 1GB | Rate-limited | ❌ |
| Chroma | Unlimited | Unlimited (local) | Unlimited | ❌ |
| Qdrant | Unlimited (self-host) | 1GB (cloud) | Rate-limited | ❌ |
| Milvus | Unlimited (self-host) | 100K (Zilliz) | 1 CU (Zilliz) | ❌ |
| LanceDB | Unlimited | Limited (cloud) | Rate-limited | ❌ |
| pgvector | Unlimited | Included in DB | Unlimited (local) | ❌ |
| Astra DB | — | 80GB | 25M reads/mo | ❌ |
| MongoDB Atlas | — | 512MB | — | ❌ |
| Redis Stack | — | 30MB | — | ❌ |

---

## 14. Hosting Quick Reference

```
Self-host options:
  pip install chromadb        → Chroma embedded
  pip install lancedb         → LanceDB embedded
  docker run qdrant/qdrant    → Qdrant single-node
  docker compose up milvus    → Milvus standalone
  docker run semitechnologies  → Weaviate single-node
  CREATE EXTENSION vector     → pgvector in any Postgres

Cloud options (with free tier):
  dashboard.pinecone.io       → Pinecone (1M vectors)
  console.weaviate.cloud      → Weaviate (1GB sandbox)
  cloud.qdrant.io             → Qdrant (1GB free)
  cloud.zilliz.com            → Zilliz/Milvus (100K vectors)
  console.astra.datastax.com  → Astra DB (80GB)
  supabase.com                → pgvector via Supabase (500MB)
  neon.tech                   → pgvector via Neon (0.5GB)
  cloud.typesense.org         → Typesense (free tier)

Embedded options:
  Python in-process:          Chroma, LanceDB, Milvus Lite, Weaviate Embedded
  No server needed:           Chroma, LanceDB
  DataFrame native:           LanceDB (Pandas, Arrow)
```

---

## 15. Related Resources

- [AI Models](models.md) — Embedding models for vector databases
- [AI APIs](apis.md) — API providers for generating embeddings
- [Databases](../databases/) — General database category
- [Open Source](../open-source/) — Self-hostable infrastructure

---

> ⚠️ Free tiers, pricing, and limits change frequently. Verify current limits on provider pricing pages. Vector dimensions and index types listed are approximate and may vary by configuration.
