## Databases

> **Last updated**: 2026-05-24 | **Category**: Databases

Comprehensive catalog of database services with generous free tiers — from serverless SQL to managed NoSQL and caching.

---

## 1. Overview Comparison

| Database | Type | Free Tier | Storage | Card Required |
|---|---|---|---|---|---|
| [Supabase](supabase.md) | SQL (Postgres) | 500 MB DB, 2 GB storage, 50K MAU | 2 GB | No |
| [Neon](neon.md) | SQL (Serverless Postgres) | 500 MB, 100h compute/mo, 10 branches | 500 MB | Yes |
| [PlanetScale](planetscale.md) | SQL (Serverless MySQL) | 1 DB, 10 GB, 1B reads/mo, 10M writes/mo | 10 GB | Yes |
| [CockroachDB](cockroachdb.md) | SQL (Distributed Postgres) | 5 GB, 250M RU/mo, 1 cluster | 5 GB | No |
| [Turso](turso.md) | SQL (Edge SQLite) | 500 MB, 1B reads/mo, 250M writes/mo | 500 MB | No |
| [Xata](xata.md) | SQL (Serverless Postgres) | 15 GB, 5K records, search + vector | 15 GB | Yes |
| [MongoDB Atlas](mongodb-atlas.md) | NoSQL (Document) | 512 MB M0 cluster (shared RAM) | 512 MB | No |
| [Amazon DynamoDB](dynamodb.md) | NoSQL (Key-Value) | 25 GB, 200M requests/mo, 25 WCU/RCU | 25 GB | Yes |
| [Firebase Firestore](firebase-firestore.md) | NoSQL (Document) | 1 GB, 50K reads/day, 20K writes/day | 1 GB | No |
| [Upstash](upstash.md) | Cache (Serverless Redis) | 10K commands/day, 50 MB | 50 MB | No |
| [Aiven](aiven.md) | Managed (Multi-DB) | 1 GB PG/MySQL, 256 MB Redis, 1 GB Kafka | 1 GB | Yes |

---

## 2. Selection Guide

```
Need a database...
│
├── Relational / SQL?
│   ├── Serverless Postgres → Neon (best DX)
│   ├── Managed Postgres → Supabase (open-source Firebase)
│   ├── Serverless MySQL → PlanetScale (branching workflows)
│   └── Distributed SQL → CockroachDB (multi-region)
│
├── Document / NoSQL?
│   ├── General purpose → MongoDB Atlas (largest ecosystem)
│   └── Real-time sync → Firebase Firestore (Google ecosystem)
│
├── Caching / Key-Value?
│   └── Serverless Redis → Upstash (REST + Kafka)
│
└── Vector search?
    └── See [AI Vector Databases](../ai/vector-db.md)
```

---

## 3. License / Hosting Model

| Database | Open Source | Self-Hostable | Fully Managed |
|---|---|---|---|
| Supabase | ✅ | ✅ | ✅ |
| Neon | ✅ | ❌ | ✅ |
| PlanetScale | ❌ | ❌ | ✅ |
| CockroachDB | ✅ | ✅ | ✅ |
| MongoDB | ✅ | ✅ | ✅ |
| Firebase Firestore | ❌ | ❌ | ✅ |
| Upstash | ✅ | ❌ | ✅ |

---

## 4. Related Resources

- [AI Vector Databases](../ai/vector-db.md) — Vector search and similarity stores
- [Cloud Storage](../storage/) — Object and file storage services
- [Backend Platforms](../deployment/) — Backend-as-a-Service platforms
