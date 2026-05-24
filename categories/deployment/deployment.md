# Deployment Platforms

> **Last updated**: 2026-05-24 | **Category**: Deployment

Comprehensive catalog of application deployment platforms — from static site hosting to full-stack PaaS, serverless functions, container orchestration, and edge compute.

---

## Legend

| Icon | Meaning |
|---|---|
| 🆓 | Open-source / Self-hostable |
| ☁️ | Cloud / Managed |
| 💸 | Free tier available |
| 🐳 | Docker / Container support |
| ⚡ | Edge compute |
| 🎓 | Student benefits |

---

## 1. Overview Comparison

| Platform | Type | Free Tier | Card | Student | Best For |
|---|---|---|---|---|---|
| [Vercel](#2-vercel) | Frontend + Edge | 100GB BW, 6K min | ❌ | ✅ | Next.js, React, SSG |
| [Netlify](#3-netlify) | Frontend + Serverless | 100GB BW, 300 min | ❌ | ✅ | SSG, serverless functions |
| [Cloudflare Pages](#4-cloudflare-pages) | Static + Edge | Unlimited BW, 500 builds | ❌ | ❌ | JAMstack, Workers integration |
| [Render](#5-render) | Full-stack PaaS | 512MB RAM, 100GB BW | ❌ | ✅ | Web services, cron, Postgres |
| [Railway](#6-railway) | Full-stack PaaS | $5 free credit, 500MB | ❌ | ❌ | Full-stack apps, databases |
| [Fly.io](#7-fly-io) | Docker + Edge | 3 shared VMs, 3GB | ✅ | ❌ | Docker, edge compute |
| [Firebase Hosting](#8-firebase-hosting) | Static + Serverless | 10GB storage, 360MB BW | ❌ | 🔜 | GCP integration |
| [Surge](#9-surge) | Static only | Unlimited sites, basic | ❌ | ❌ | Simple static deploys |
| [GitHub Pages](#10-github-pages) | Static only | 1GB storage, 100GB BW | ❌ | ✅ | Project pages, docs |
| [Cloudflare Workers](#11-cloudflare-workers) | Edge functions | 100K req/day, 10ms CPU | ❌ | ✅ | Serverless at edge |
| [Deno Deploy](#12-deno-deploy) | Edge runtime | 100K req/day, 1GB | ❌ | ❌ | JS/TS edge apps |
| [Koyeb](#13-koyeb) | Serverless PaaS | 1 app, 512MB RAM | ❌ | ❌ | Docker + Git deploy |
| [Coolify](#14-coolify) 🆓 | Self-hosted PaaS | Unlimited | ❌ | ❌ | Self-hosted Vercel alternative |
| [Dokku](#15-dokku) 🆓 | Self-hosted PaaS | Unlimited | ❌ | ❌ | Self-hosted Heroku alternative |
| [Northflank](#16-northflank) | PaaS + Containers | 2 services, 1GB RAM | ❌ | ✅ | Hybrid cloud + containers |
| [Cyclic](#17-cyclic) | Serverless PaaS | 1 app, 1GB memory | ❌ | ❌ | Full-stack JS/TS |
| [Zeabur](#18-zeabur) | PaaS | 1 app, 512MB RAM | ❌ | ❌ | Simple deploy, auto HTTPS |
| [Adaptable](#19-adaptable) | PaaS | 1 app, 512MB RAM | ❌ | ❌ | Container + template deploy |
| [Porter](#20-porter) 🆓 | Self-hosted PaaS | Unlimited | ❌ | ❌ | Kubernetes-based PaaS |
| [CapRover](#21-caprover) 🆓 | Self-hosted PaaS | Unlimited | ❌ | ❌ | Docker Swarm PaaS |
| [Glitch](#22-glitch) | Node.js + IDE | 512MB RAM, 4K req/hr | ❌ | ❌ | Prototyping, Node.js |
| [Replit](#23-replit) | Online IDE + Deploy | 500MB storage, 1 CPU | ❌ | 🎓 | Online coding + deploy |

---

## 2. Vercel

**Website**: https://vercel.com
**Docs**: https://vercel.com/docs
**GitHub**: https://github.com/vercel
**Category**: Deployment → PaaS / Edge Functions

### Overview
Frontend deployment platform with global edge network. The standard for Next.js deployment but supports React, Svelte, Vue, Astro, and all major frameworks. Includes serverless functions, edge config, ISR, and analytics.

### Free Tier 💸
- **Static sites**: Unlimited
- **Bandwidth**: 100 GB/month
- **Build minutes**: 6,000/month
- **Serverless functions**: 100 invocations/day
- **Edge functions**: 10 invocations/day
- **Concurrent builds**: 1

### Paid Plan
- **Pro**: $20/month per member, unlimited builds, 1TB bandwidth, team features

### Tags
`deployment` `serverless` `edge` `frontend` `jamstack` `saas` `cli`

### Alternatives
[Netlify](netlify.md), [Cloudflare Pages](cloudflare-pages.md), [Render](render.md)

---

## 3. Netlify

**Website**: https://netlify.com
**Docs**: https://docs.netlify.com
**GitHub**: https://github.com/netlify
**Category**: Deployment → PaaS

### Overview
Pioneering JAMstack deployment platform with global CDN, serverless functions, forms, identity, and split testing. Excellent developer experience with Git-based CI/CD and deploy previews.

### Free Tier 💸🎓
- **Bandwidth**: 100 GB/month
- **Build minutes**: 300 minutes/month
- **Serverless functions**: 125K invocations/month, 100 hours runtime
- **Forms**: 100 submissions/month
- **Identity**: 1,000 active users
- **Deploy previews**: Unlimited

### Paid Plan
- **Pro**: $19/month, unlimited builds, 1TB bandwidth, priority support

### Tags
`deployment` `serverless` `edge` `jamstack` `saas` `cdn`

### Alternatives
[Vercel](vercel.md), [Cloudflare Pages](cloudflare-pages.md), [Render](render.md)

---

## 4. Cloudflare Pages

**Website**: https://pages.cloudflare.com
**Docs**: https://developers.cloudflare.com/pages
**GitHub**: https://github.com/cloudflare
**Category**: Deployment → Edge Functions

### Overview
Static site and JAMstack hosting on Cloudflare's global edge network. Unlimited bandwidth, instant deploy, and deep integration with Cloudflare Workers, D1, R2, and KV.

### Free Tier 💸
- **Bandwidth**: Unlimited
- **Builds**: 500/month
- **Concurrent builds**: 1
- **Workers integration**: 100K requests/day via Workers
- **Storage**: 500MB

### Paid Plan
- **Pro**: $20/month, 5,000 builds, advanced analytics

### Tags
`deployment` `edge` `serverless` `jamstack` `saas` `cdn`

### Alternatives
[Vercel](vercel.md), [Netlify](netlify.md), [Cloudflare Workers](cloudflare-workers.md)

---

## 5. Render

**Website**: https://render.com
**Docs**: https://render.com/docs
**GitHub**: https://github.com/render
**Category**: Deployment → PaaS

### Overview
Full-stack PaaS with native Docker support, managed databases, cron jobs, and static sites. The most complete Heroku alternative with a generous free tier for web services and databases.

### Free Tier 💸🎓
- **Web services**: 512MB RAM, 1 CPU (sleeps after inactivity)
- **Static sites**: 100GB bandwidth, 1GB storage
- **PostgreSQL**: 1GB database free
- **Cron jobs**: 1 job free
- **Build hours**: 500/month (free tier)

### Paid Plan
- **Starter**: $7/month, no sleep, 1TB bandwidth, 2GB RAM

### Tags
`deployment` `paas` `docker` `serverless` `postgresql` `saas`

### Alternatives
[Railway](railway.md), [Fly.io](fly-io.md), [Koyeb](koyeb.md)

---

## 6. Railway

**Website**: https://railway.app
**Docs**: https://docs.railway.app
**GitHub**: https://github.com/railwayapp
**Category**: Deployment → PaaS

### Overview
Modern full-stack PaaS with Git-based deployment, native Docker support, and built-in database provisioning. Known for its $5 free credit model and excellent developer UX.

### Free Tier 💸
- **Credits**: $5 free credit/month
- **Apps**: Unlimited (within credit limits)
- **Storage**: 500MB included
- **Network**: 1GB egress included
- **Databases**: Provisioned via credits

### Paid Plan
- **Developer**: $5/month, $5 + $0.001/credit beyond
- **Team**: $25/month per member

### Tags
`deployment` `paas` `docker` `serverless` `saas`

### Alternatives
[Render](render.md), [Fly.io](fly-io.md), [Koyeb](koyeb.md)

---

## 7. Fly.io

**Website**: https://fly.io
**Docs**: https://fly.io/docs
**GitHub**: https://github.com/superfly
**Category**: Deployment → Containers

### Overview
Docker container hosting platform that runs your app on the edge. Deploy containers close to your users with global Anycast network, auto-scaling, and free tier for small projects.

### Free Tier 💸
- **Shared VMs**: 3 free VMs (256MB RAM each)
- **Storage**: 3GB free
- **Bandwidth**: 160GB/month
- **CPU**: 1 shared CPU per VM
- **PostgreSQL**: 1GB free, 1 snapshot

### Paid Plan
- **Pay-as-you-go**: $0.0017/GB RAM/hour, $0.0004/CPU/hour
- **Starters**: $19.17/month for 4GB RAM, 2 vCPU

### Tags
`deployment` `docker` `edge` `serverless` `containers` `saas` `global`

### Alternatives
[Railway](railway.md), [Render](render.md), [Koyeb](koyeb.md)

---

## 8. Firebase Hosting

**Website**: https://firebase.google.com/products/hosting
**Docs**: https://firebase.google.com/docs/hosting
**GitHub**: https://github.com/firebase
**Category**: Deployment → PaaS

### Overview
Google's production-grade static and dynamic hosting with global CDN, one-click rollbacks, and deep integration with Firebase/Google Cloud ecosystem. Often paired with Cloud Functions.

### Free Tier 💸
- **Storage**: 10 GB
- **Bandwidth**: 360 MB/day
- **Custom domains**: Multiple
- **CDN**: Global, free SSL
- **Cloud Functions**: 2M invocations/month free

### Paid Plan
- **Blaze**: Pay-as-you-go, $0.026/GB bandwidth, $0.15/GB storage

### Tags
`deployment` `serverless` `saas` `google` `cdn`

### Alternatives
[Vercel](vercel.md), [Cloudflare Pages](cloudflare-pages.md), [GitHub Pages](github-pages.md)

---

## 9. Surge

**Website**: https://surge.sh
**Docs**: https://surge.sh/help
**GitHub**: https://github.com/sintaxi/surge
**Category**: Deployment → Static Sites

### Overview
Single-command static site deployment from the CLI. The simplest deployment tool — `surge .` deploys any folder to a publicly accessible URL. No config files needed.

### Free Tier 💸
- **Sites**: Unlimited
- **Custom domains**: 1 free domain
- **SSL**: Automatic Let's Encrypt
- **CLI tool**: `npm install -g surge`

### Paid Plan
- **Surge Pro**: $30/month, custom SSL, basic auth, team collaboration

### Tags
`deployment` `static-site` `cli` `saas` `cdn`

### Alternatives
[GitHub Pages](github-pages.md), [Netlify](netlify.md), [Vercel](vercel.md)

---

## 10. GitHub Pages

**Website**: https://pages.github.com
**Docs**: https://docs.github.com/pages
**GitHub**: https://github.com/github/pages-gem
**Category**: Deployment → Static Sites

### Overview
Free static site hosting directly from GitHub repositories. Perfect for project documentation, personal sites, and team pages. Integrates with Jekyll and GitHub Actions.

### Free Tier 💸🎓
- **Storage**: 1 GB
- **Bandwidth**: 100 GB/month
- **Builds**: 10 builds/hour
- **Custom domains**: Yes, with automatic SSL
- **Jekyll**: Built-in support

### Paid Plan
- Included free with all GitHub accounts. Enhanced limits on Pro ($4/month).

### Tags
`deployment` `static-site` `git` `saas` `cli` `cdn`

### Alternatives
[Netlify](netlify.md), [Vercel](vercel.md), [Cloudflare Pages](cloudflare-pages.md)

---

## 11. Cloudflare Workers

**Website**: https://workers.cloudflare.com
**Docs**: https://developers.cloudflare.com/workers
**GitHub**: https://github.com/cloudflare/workers-sdk
**Category**: Deployment → Edge Functions

### Overview
Serverless execution environment that runs JavaScript, Wasm, and Python on Cloudflare's global edge network. Sub-10ms cold starts, 280+ data centers, and unlimited bandwidth.

### Free Tier 💸🎓
- **Requests**: 100,000/day
- **Duration**: 10ms CPU, 50ms CPU (paid)
- **Workers**: 30 free scripts
- **KV**: 1GB, 1M reads/day
- **Durable Objects**: 1M req/month

### Paid Plan
- **Paid**: $5/month, 10M requests/month

### Tags
`deployment` `edge` `serverless` `saas` `cdn` `javascript`

### Alternatives
[Deno Deploy](deno-deploy.md), [Vercel Edge Functions](vercel.md), [Fly.io](fly-io.md)

---

## 12. Deno Deploy

**Website**: https://deno.com/deploy
**Docs**: https://deno.com/deploy/docs
**GitHub**: https://github.com/denoland/deploy_framework
**Category**: Deployment → Edge Functions

### Overview
JavaScript/TypeScript edge runtime by the creators of Deno. Run serverless functions and full applications at the edge with zero config, global distribution, and instant deployment.

### Free Tier 💸
- **Requests**: 100,000/month
- **Bandwidth**: 1 GB/day
- **Execution**: 10ms CPU per request
- **Regions**: 34+ global regions
- **Git integration**: Auto-deploy from GitHub

### Paid Plan
- **Pro**: $10/month, 5M requests, 100GB bandwidth, team features

### Tags
`deployment` `edge` `serverless` `saas` `javascript` `typescript`

### Alternatives
[Cloudflare Workers](cloudflare-workers.md), [Vercel Edge Functions](vercel.md), [Fly.io](fly-io.md)

---

## 13. Koyeb

**Website**: https://koyeb.com
**Docs**: https://www.koyeb.com/docs
**GitHub**: https://github.com/koyeb
**Category**: Deployment → PaaS

### Overview
Serverless platform for deploying full-stack apps, APIs, and databases globally. Supports Docker, Git-based deployment, and native auto-scaling across multiple regions.

### Free Tier 💸
- **Apps**: 1 web app + 1 worker
- **RAM**: 512MB
- **Bandwidth**: 100GB/month
- **Custom domains**: Yes, with auto SSL
- **Regions**: Multiple global regions

### Paid Plan
- **Starter**: $5/month, 2GB RAM, 4 apps

### Tags
`deployment` `serverless` `docker` `paas` `saas` `global`

### Alternatives
[Render](render.md), [Railway](railway.md), [Fly.io](fly-io.md)

---

## 14. Coolify 🆓

**Website**: https://coolify.io
**Docs**: https://coolify.io/docs
**GitHub**: https://github.com/coollabsio/coolify
**Category**: Deployment → Platform Orchestration

### Overview
Open-source, self-hosted PaaS alternative to Vercel, Netlify, and Heroku. Deploy anything — static sites, Node.js, Python, Docker, databases — on your own server with a beautiful web UI.

### Free Tier 💸
- **Self-hosted**: Unlimited, completely free
- **Apps**: Unlimited projects and deployments
- **Servers**: Deploy to any VPS
- **Databases**: PostgreSQL, MySQL, MongoDB, Redis

### Paid Plan
- **Coolify Cloud**: Coming soon (managed hosting)
- **Self-hosted**: Free forever

### Tags
`deployment` `paas` `open-source` `self-hosted` `docker` `docker`

### Alternatives
[Dokku](dokku.md), [CapRover](#), [Porter](#)

---

## 15. Dokku 🆓

**Website**: https://dokku.com
**Docs**: https://dokku.com/docs
**GitHub**: https://github.com/dokku/dokku
**Category**: Deployment → Containers

### Overview
Docker-powered mini-Heroku you can run on a $5 VPS. Heroku-compatible buildpacks, Git-based deployment, and 100+ plugins. The simplest way to self-host apps.

### Free Tier 💸
- **Self-hosted**: Unlimited, completely free
- **Apps**: Unlimited
- **Databases**: PostgreSQL, MySQL, Redis via plugins
- **Deploy**: `git push dokku master`

### Paid Plan
- Software is free; pay only for your VPS ($5+/month)

### Tags
`deployment` `docker` `open-source` `self-hosted` `cli`

### Alternatives
[Coolify](coolify.md), [CapRover](#), [Porter](#)

---

## 16. Additional Platforms

| Platform | Type | Free Tier | OSS | Card | Best For |
|---|---|---|---|---|---|
| **Northflank** ☁️💸 | PaaS + Containers | 2 services, 1GB RAM | ❌ | ❌ | Hybrid cloud, multi-cloud |
| **Cyclic** ☁️💸 | Serverless PaaS | 1 app, 1GB memory | ❌ | ❌ | Full-stack JS/TS apps |
| **Zeabur** ☁️💸 | PaaS | 1 app, 512MB RAM | ❌ | ❌ | Deploy with auto HTTPS |
| **Adaptable** ☁️💸 | PaaS | 1 app, 512MB, 1GB DB | ❌ | ❌ | Container + template deploy |
| **Porter** 🆓 | Self-hosted PaaS | Unlimited | ✅ | — | Kubernetes-based PaaS |
| **CapRover** 🆓 | Self-hosted PaaS | Unlimited | ✅ | — | Docker Swarm PaaS |
| **Glitch** ☁️💸 | Node.js + IDE | 512MB, 4K req/hr | ❌ | ❌ | Prototyping, Node.js |
| **Replit** ☁️💸🎓 | Online IDE + Deploy | 500MB storage, 1 CPU | ❌ | ❌ | Online coding + deploy |
| **Zeet** ☁️💸 | Multi-cloud PaaS | 1 app, 1GB RAM | ❌ | ✅ | Multi-cloud orchestration |
| **Kubernaut** 🆓 | K8s PaaS | Unlimited | ✅ | — | DevOps simplicity |

---

## 17. Feature Comparison

### Free Tier Limits

| Platform | Bandwidth | Builds | RAM | Database | Sleep? |
|---|---|---|---|---|---|
| Vercel | 100 GB | 6K min | — | — | No |
| Netlify | 100 GB | 300 min | — | — | No |
| Cloudflare Pages | Unlimited | 500 | — | — | No |
| Render | 100 GB | 500 min | 512MB | 1GB PG | Yes |
| Railway | Credit-based | — | 500MB | — | No |
| Fly.io | 160 GB | — | 256MB×3 | 1GB PG | No |
| Firebase Hosting | 360 MB/day | — | — | — | No |
| GitHub Pages | 100 GB | 10/hr | — | — | No |
| Koyeb | 100 GB | — | 512MB | — | Yes |
| Coolify | Your VPS | — | Your VPS | Your VPS | No |

### Supported Languages & Frameworks

```
                JavaScript  Python  Go  Rust  Docker  PHP  Ruby  Java  Static
Vercel           ✅         ✅     ✅  ✅   ✅      ✅   ✅    ✅    ✅
Netlify          ✅         ✅     ✅  ✅   ✅      ✅   ✅    ✅    ✅
Cloudflare Pages ✅         ❌     ❌  ❌   ❌      ❌   ❌    ❌    ✅
Render           ✅         ✅     ✅  ✅   ✅      ✅   ✅    ✅    ✅
Railway          ✅         ✅     ✅  ✅   ✅      ✅   ✅    ✅    ✅
Fly.io           ✅         ✅     ✅  ✅   ✅      ✅   ✅    ✅    ✅
GitHub Pages     ✅ (Jekyll) ❌    ❌  ❌   ❌      ❌   ❌    ❌    ✅
Coolify          ✅         ✅     ✅  ✅   ✅      ✅   ✅    ✅    ✅
Dokku            ✅         ✅     ✅  ✅   ✅      ✅   ✅    ✅    ✅
```

### Git Integration

| Platform | Auto Deploy | Deploy Previews | Branch Deploy | Rollback | CLI |
|---|---|---|---|---|---|
| Vercel | ✅ | ✅ | ✅ | ✅ | ✅ |
| Netlify | ✅ | ✅ | ✅ | ✅ | ✅ |
| Cloudflare Pages | ✅ | ✅ | ✅ | ✅ | ✅ |
| Render | ✅ | ✅ | ✅ | ✅ | ✅ |
| Railway | ✅ | ❌ | ✅ | ✅ | ✅ |
| Fly.io | ✅ | ❌ | ✅ | ✅ | ✅ |
| Firebase | ✅ | ❌ | ✅ | ✅ | ✅ |
| GitHub Pages | ✅ | ❌ | ❌ | ✅ | ✅ |

---

## 18. Selection Guide

```
Building a static site?
├── Using Next.js → Vercel
├── Using any framework → Netlify
├── Need unlimited bandwidth → Cloudflare Pages
├── Just a simple site → GitHub Pages
├── CLI only → Surge
└── Custom domain + SSL → Any of the above

Building a full-stack app?
├── Node.js / Python / Go → Render or Railway
├── Docker containers → Fly.io or Dokku
├── Want to self-host → Coolify or Dokku
├── React frontend + Node backend → Vercel + Railway
└── Google Cloud ecosystem → Firebase Hosting

Need serverless / edge functions?
├── JavaScript / TypeScript → Cloudflare Workers or Deno Deploy
├── Next.js API routes → Vercel Serverless
├── Sub-10ms cold starts → Cloudflare Workers
└── Docker + edge → Fly.io

On a budget ($0/month)?
├── GitHub Pages (static only)
├── Cloudflare Pages (unlimited bandwidth)
├── Render (web service + database)
├── Coolify on $5 VPS
└── Fly.io (3 free VMs)
```

### By Hosting Preference

```
Want managed? 
├── Simple static → GitHub Pages, Surge, Netlify
├── Full-stack → Render, Railway, Koyeb
├── Containers → Fly.io, Northflank
└── Edge → Cloudflare Workers, Deno Deploy

Want to self-host?
├── Easiest → Coolify (web UI, 1-click)
├── Lightest → Dokku (single VPS)
├── Kubernetes → Porter
├── Docker Swarm → CapRover
└── Bare Docker → Fly.io launch command
```

---

## 19. Related Resources

- [Cloud](../cloud/) — Cloud compute and storage
- [Databases](../databases/) — Managed databases for deployment
- [Domains](../domains/) — Custom domains and DNS

---

> ⚠️ Free tiers change frequently. Verify current limits on provider pricing pages. Build minutes and bandwidth limits are especially subject to change.
