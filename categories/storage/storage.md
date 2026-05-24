## Storage

> **Last updated**: 2026-05-24 | **Category**: Storage

Comprehensive catalog of object storage, file hosting, CDN storage, and backup services with generous free tiers.

---

## 1. Overview Comparison

| Provider | Type | Free Tier | S3 Compatible | Card Required |
|---|---|---|---|---|
| [Amazon S3](amazon-s3.md) | Object Storage | 5 GB, 20K GET req/mo | ✅ Native | Yes |
| [Cloudflare R2](cloudflare-r2.md) | Object Storage | 10 GB, 1M GET/mo, 0 egress fees | ✅ | No |
| [Backblaze B2](backblaze-b2.md) | Object Storage / Backup | 10 GB, 1K downloads/day | ✅ | No |
| [Wasabi](wasabi.md) | Hot Cloud Storage | 1 GB permanent | ✅ | Yes |
| [Bunny Storage](bunny-storage.md) | CDN Edge Storage | 10 GB, 250 GB bandwidth/mo | ❌ | Yes |
| [Supabase Storage](supabase-storage.md) | Object Storage | 1 GB, 50 MB file size, 50K MAU | ✅ | No |

---

## 2. Selection Guide

```
Need storage...
│
├── S3-compatible (works with AWS SDK)?
│   ├── No egress fees → Cloudflare R2 (cheapest bandwidth)
│   ├── Most generous free tier → Backblaze B2 (10 GB, 10K downloads/day)
│   ├── Hot storage (no retrieval fees) → Wasabi (instant access)
│   ├── Native AWS → Amazon S3 (deepest ecosystem)
│   └── Best with Supabase → Supabase Storage (tightly integrated)
│
├── CDN / Edge storage?
│   └── Bunny Storage (edge-optimized, 10 GB free)
│
└── Backup?
    └── Backblaze B2 (purpose-built backup, large free tier)
```

---

## 3. Storage Pricing Comparison

| Provider | Storage Cost | Egress Cost | Class |
|---|---|---|---|
| Amazon S3 | $0.023/GB | $0.09/GB | Standard |
| Cloudflare R2 | $0.015/GB | $0.00/GB | Standard |
| Backblaze B2 | $0.006/GB | $0.01/GB | Standard |
| Wasabi | $0.0059/GB | $0.00/GB (min 90 day retention) | Hot |
| Bunny Storage | $0.005/GB (EU) | $0.003/GB | Edge |
| Supabase Storage | $0.021/GB | Included | Standard |

---

## 4. Related Resources

- [Cloud Platforms](../cloud/cloud.md) — Larger cloud storage offerings (GCS, Blob)
- [Deployment](../deployment/) — CDN and edge storage
- [Backup Tools](#) — Backup automation and scheduling
