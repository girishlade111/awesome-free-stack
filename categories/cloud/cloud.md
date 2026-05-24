## Cloud Computing Platforms

> **Last updated**: 2026-05-24 | **Category**: Cloud

Comprehensive catalog of cloud computing providers, their free tier offerings, student plans, and startup credits.

---

## 1. Overview Comparison

### Cloud Provider Free Tiers

| Provider | Free Tier Type | Credit | Compute | Storage | Duration |
|---|---|---|---|---|---|
| AWS | Time-limited + Always Free | — | 750h/mo EC2 (t2.micro) | 5GB S3, 20GB EBS | 12 months |
| Azure | Trial + Always Free | $200 | 750h/mo B1s VM | 5GB blob, 64GB files | 30 days |
| GCP | Trial + Always Free | $300 | 1 f1-micro VM | 5GB cloud storage | 90 days |
| Oracle Cloud | Always Free | — | 2 AMD VMs (1GB ea) + 4 ARM (24GB) | 200GB block + 10GB object | Forever |
| Alibaba Cloud | Trial + Free Tier | $300 | 1 ecs.t6-c1m1.large | 5GB OSS | 30-90 days |
| IBM Cloud | Trial | $200 | 1 free VM (128MB) | 5GB COS | 30 days |
| DigitalOcean | Credits | $200 | 1 droplet (512MB) | 25GB block storage | 60 days |
| Hetzner | None | — | — | — | No free tier |

### Student Plans

| Provider | Program | Credits | Requirements |
|---|---|---|---|
| AWS | AWS Educate / AWS Academy | $100-500 | .edu email or institution |
| Azure | Azure for Students | $100 | .edu email (verified) |
| GCP | Google for Education | $50-300 | .edu email |
| Oracle | Oracle for Education | $300 | .edu email |
| Alibaba | Alibaba Cloud for Students | $300 | .edu email |
| IBM | IBM Academic Initiative | $200 | .edu email |
| DigitalOcean | GitHub Student Pack | $50 | GitHub Education |
| Hetzner | None | — | — |

### Startup Credits

| Provider | Program | Credits | Requirements |
|---|---|---|---|
| AWS | AWS Activate | $1K-$100K | VC-backed or accelerator |
| Azure | Microsoft for Startups | $150K | VC-backed or partner-approved |
| GCP | Google for Startups | $2K-$200K | Early-stage startup |
| Oracle | Oracle for Startups | $10K | Startup program approval |
| Alibaba | Alibaba Startup | $3K-$20K | Registered startup |
| IBM | IBM Startup | $120K | VC-backed startup |
| DigitalOcean | Hatch / Startup | $5K-$50K | Early-stage startup |
| Hetzner | None | — | — |

---

## 2. Provider Selection Guide

### By Use Case

```
Need a cloud provider...
│
├── Full ecosystem with most services?
│   ├── AWS (largest ecosystem, 200+ services)
│   ├── Azure (best Microsoft/Enterprise integration)
│   └── GCP (best for data/ML/AI workloads)
│
├── Simple VPS or droplets?
│   ├── DigitalOcean (simplest UX, developer-friendly)
│   └── Hetzner (best price/performance for VMs)
│
├── Always free / no time limit?
│   └── Oracle Cloud (2 AMD + 4 ARM VMs forever)
│
├── Best free credits for learning?
│   ├── GCP ($300 for 90 days)
│   ├── Azure ($200 for 30 days)
│   └── Alibaba ($300 for 90 days)
│
├── Startup seeking cloud credits?
│   ├── Azure for Startups ($150K)
│   ├── AWS Activate ($1K-$100K)
│   └── IBM Startup ($120K)
│
├── Asia-Pacific presence?
│   └── Alibaba Cloud (strongest in APAC)
│
├── European data sovereignty?
│   └── Hetzner (German data centers, GDPR)
│
└── Enterprise hybrid cloud?
    ├── Azure (best hybrid with Azure Arc)
    └── IBM Cloud (best for regulated industries)
```

### By Geography

| Provider | Strongest Regions | Edge Locations |
|---|---|---|
| AWS | US, Europe, APAC | 105+ AZs in 33 regions |
| Azure | US, Europe, APAC | 160+ AZs in 60+ regions |
| GCP | US, Europe, APAC | 121+ AZs in 40 regions |
| Oracle | US, EU, APAC | 49+ AZs in 20 regions |
| Alibaba | APAC, Europe | 80+ AZs in 30 regions |
| IBM | US, Europe | 60+ AZs in 20 regions |
| DigitalOcean | US, EU, APAC | 15 regions |
| Hetzner | Europe, US | 4 regions |

---

## 3. Free Credits Summary

### Trial Credits (No Credit Card Required)

| Provider | Credits | Duration | Card Required? |
|---|---|---|---|
| AWS | 12-month free tier | 12 months | Yes |
| Azure | $200 | 30 days | Yes |
| GCP | $300 | 90 days | Yes |
| Oracle | Always free + $300 trial | 30 days | Yes |
| Alibaba | $300 | 30-90 days | Yes |
| IBM | $200 | 30 days | Yes |
| DigitalOcean | $200 | 60 days | No |
| Hetzner | €20 | Promotional | No |

### Startup Credits (VC-Backed)

| Provider | Max Credits | Equity Required? | Approval |
|---|---|---|---|
| AWS Activate | $100K | No | VC/accelerator |
| Microsoft for Startups | $150K | No | Partner |
| Google for Startups | $200K | No | Application |
| Oracle for Startups | $10K | No | Application |
| Alibaba Startup | $20K | No | Application |
| IBM Startup | $120K | No | Application |
| DigitalOcean Hatch | $50K | No | Application |

### Credit Utilization Tips

- **Start with GCP** ($300 for 90 days — most generous trial)
- **Layer free tiers**: Use Oracle Always Free + another provider's trial
- **Combine student + startup**: Student plans are separate from startup programs
- **Use DigitalOcean** if no credit card: Only major provider with no-card-free-tier
- **Hetzner** has no free tier but the lowest prices for sustained workloads

---

## 4. Rating Methodology

Ratings are based on:
- **Beginner Friendly**: Ease of getting started, documentation, UX
- **Documentation**: Quality of docs, tutorials, learning resources
- **Free Generosity**: Value of free tier offering
- **Setup Ease**: Time to first VM/instance
- **Reliability**: Uptime, SLA guarantees, track record
- **Performance**: Compute, network, and storage performance
- **Community**: Size of community, StackOverflow presence, forums
- **Overall**: Weighted average (docs 20%, free 20%, reliability 20%, performance 15%, beginner 10%, setup 5%, community 10%)

---

## 5. Related Resources

- [Deployment Platforms](../deployment/deployment.md) — PaaS/serverless alternatives
- [VPS Hosting](../hosting/vps.md) — Simple VM hosting
- [Object Storage](#) — S3-compatible storage services
- [CDN Services](#) — Content delivery networks
