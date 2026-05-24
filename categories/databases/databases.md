## Databases

> **Last updated**: 2026-05-24 | **Category**: Databases

Comprehensive catalog of database services with generous free tiers — from serverless SQL to managed NoSQL and caching.

---

## 1. Overview Comparison

| Database | Type | Free Tier | Storage | Card Required |
|---|---|---|---|---|
| [Supabase](supabase.md) | SQL (Postgres) | 500 MB DB, 2 GB storage | 500 MB | No |
| [Neon](neon.md) | SQL (Serverless Postgres) | 500 MB DB, 100h compute/mo | 500 MB | Yes |
| [PlanetScale](planetscale.md) | SQL (Serverless MySQL) | 1 DB, 10 GB storage, 1B reads/mo | 10 GB | Yes |
| [CockroachDB](cockroachdb.md) | SQL (Distributed Postgres) | 5 GB, 250M RU/mo | 5 GB | No |
| [MongoDB Atlas](mongodb-atlas.md) | NoSQL (Document) | 512 MB shared cluster | 512 MB | No |
| [Firebase Firestore](firebase-firestore.md) | NoSQL (Document) | 1 GB, 50K reads/day | 1 GB | No |
| [Upstash](upstash.md) | Cache (Serverless Redis) | 10K commands/day, 50 MB | 50 MB | No |

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
