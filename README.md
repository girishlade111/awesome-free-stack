# awesome-free-stack

> The largest curated collection of **free developer resources**, **free AI APIs**, **student developer tools**, and **free cloud services**. Replace expensive SaaS with high-quality free alternatives.

<p align="center">
  <a href="https://github.com/girishlade111/awesome-free-stack"><img src="https://img.shields.io/github/stars/girishlade111/awesome-free-stack?style=flat-square&logo=github&label=Stars" alt="GitHub Stars"></a>
  <a href="https://github.com/girishlade111/awesome-free-stack/graphs/contributors"><img src="https://img.shields.io/github/contributors/girishlade111/awesome-free-stack?style=flat-square&logo=github&label=Contributors" alt="Contributors"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green?style=flat-square&label=License" alt="License"></a>
  <a href="https://github.com/girishlade111/awesome-free-stack/commits/main"><img src="https://img.shields.io/github/last-commit/girishlade111/awesome-free-stack?style=flat-square&logo=github&label=Last%20Updated" alt="Last Updated"></a>
  <a href="https://github.com/girishlade111/awesome-free-stack/discussions"><img src="https://img.shields.io/github/discussions/girishlade111/awesome-free-stack?style=flat-square&logo=github&label=Discussions" alt="Discussions"></a>
  <a href="https://github.com/girishlade111/awesome-free-stack/watchers"><img src="https://img.shields.io/github/watchers/girishlade111/awesome-free-stack?style=flat-square&logo=github&label=Watchers" alt="Watchers"></a>
</p>

<p align="center">
  <a href="#-mission">Mission</a> •
  <a href="#-features">Features</a> •
  <a href="#-system-architecture">Architecture</a> •
  <a href="#-categories">Categories</a> •
  <a href="#%EF%B8%8F-dev-stack--configuration">Dev Stack</a> •
  <a href="#-stats">Stats</a> •
  <a href="#-getting-started">Get Started</a> •
  <a href="#-build-recipes">Recipes</a> •
  <a href="#-learning-paths">Paths</a> •
  <a href="#-student-packs">Students</a> •
  <a href="#-startup-credits">Startups</a> •
  <a href="#-rankings">Rankings</a> •
  <a href="#-alternatives">Alternatives</a> •
  <a href="#-contributing">Contribute</a>
</p>

---

## 🎯 Mission

**Replace expensive developer tools with free alternatives.**

This repository is the largest curated collection of **free and freemium resources** for developers, students, indie hackers, and startups. Every resource is:

- ✅ **Vetted** — Free tier confirmed working
- 🗂️ **Categorized** — Sorted into 20 categories with 135 subcategories
- ⭐ **Rated** — Scored across 7 metrics (1-5)
- 🏆 **Ranked** — Community-powered quarterly rankings
- 🔄 **Verified** — Monthly automated checks for broken links and expired free tiers

> 💡 **Save thousands of dollars per year.** Whether you need free cloud hosting, free AI APIs, student developer packs, free PostgreSQL databases, free authentication services, or free CI/CD pipelines — this repo has you covered.

---

## ✨ Features

### 📋 Core Features

- **20 Categories** — AI, hosting, databases, auth, payments, monitoring, CI/CD, design, mobile, and more
- **135 Subcategories** — Fine-grained classification (e.g., AI has: APIs, Models, Agents, RAG, Embeddings, Speech, Image Generation, ML Platforms, Vector DBs)
- **175 Standardized Tags** — Cross-cutting filters across 6 groups: Global, Category, Pricing, Region, Compatibility, Verification
- **7-Dimension Rating System** — Each resource scored 1-5 on beginner friendliness, docs quality, free generosity (weighted ×1.5), setup ease, reliability (×1.2), performance, and community
- **Composite Ranking Algorithm** — Weighted scores from community votes (25%), popularity (20%), maintainer score (30%), free quality (25%)
- **10 Verification Badges** — Tested, community-verified, deprecated, archived, student-friendly, india-friendly, top-rated, no-card, global, unverified
- **Paid-to-Free Mapping** — 80+ direct replacements for expensive tools like Notion → AppFlowy, Firebase → Supabase, ChatGPT → Gemini
- **7 Build Recipes** — Complete free stacks for SaaS, AI apps, MVPs, portfolios, mobile apps, docs sites, and file-sharing platforms
- **7 Learning Paths** — Curated roadmaps for Frontend, Backend, Full Stack, AI Engineering, DevOps, Mobile, and Indie Hacking
- **7 Student Pack Guides** — Step-by-step guides to claim $200k+ in free tools including GitHub Student Pack, AWS Educate, Azure for Students, Google Cloud for Students, Figma Education, Notion Education, JetBrains Student
- **5 Startup Credit Guides** — Apply to AWS Activate ($100k), Google Cloud for Startups ($200k), Azure for Startups ($150k), and more

### 🛠️ Automation & DevOps Features

- **6 GitHub Actions Workflows** — Automated validation, link checking, verification expiry detection, stats generation, README updates, and broken resource detection
- **JSON Schema Validation** — Full schema enforcement across all data files (resources, taxonomy, tags, ratings, badges, rankings, deprecated)
- **Monthly Verification Expiry** — Flags resources not re-tested in 6+ months; generates actionable issues
- **Bi-weekly Broken Resource Detection** — HTTP HEAD/GET checks on every resource URL; auto-creates issues for broken links
- **Monthly Link Checking** — `lychee` scans all markdown files for broken URLs
- **Monthly Stats Generation** — Auto-computed repository metrics committed to the repo
- **README Auto-Update** — Pull request with updated stats, categories, and top-rated resources

### 👥 Community Features

- **6 Discussion Categories** — Ideas, Tool Requests, Comparisons, Monthly Highlights, Support, Voting — each with dedicated templates
- **4 Issue Templates** — Add Resource, Report Broken Tool, Suggest Category, Feature Request — standardized for quick triage
- **PR Template** — Standardized submission checklist including free tier verification, category matching, tag validation, and cross-reference checking
- **Contributor Badges** — Tiered recognition for community members (Bronze/Silver/Gold based on contribution count)
- **Quarterly Voting System** — Community polls influence official rankings; votes weighted by contributor status
- **2-5 Business Day Review** — Maintainers review all submissions within 2-5 business days

---

## 🏗️ System Architecture

```mermaid
flowchart TB
    subgraph CONTRIBUTORS["Contributors"]
        PR[Pull Request]
        ISSUE[Issue / Discussion]
    end

    subgraph CONTENT["Content Layer"]
        CAT[category/*.md<br/>Resource Files]
        REC[recipes/<br/>Build Recipes]
        PATHS[learning-paths/<br/>Learning Paths]
        ALT[alternatives/<br/>Paid-to-Free Mappings]
        RANK_MD[rankings/<br/>Published Rankings]
        DEPR_MD[deprecated/<br/>Deprecation Logs]
    end

    subgraph DATA["Data Layer"]
        RES[data/resources.json<br/>Resource Entries]
        TAX[data/taxonomy.json<br/>20 Categories + 135 Subcategories]
        TAGS[data/tags.json<br/>175 Tags in 6 Groups]
        RATINGS[data/ratings.json<br/>7-Metric Scoring System]
        BADGES[data/badges.json<br/>10 Verification Badges]
        RANK_DATA[data/rankings.json<br/>4-Factor Ranking Engine]
        DEPR_DATA[data/deprecated.json<br/>12 Deprecated Entries]
        SCHEMA[data/*-schema.json<br/>JSON Validation Schemas]
    end

    subgraph CI["Automation Layer"]
        VALIDATE[validate-json.yml<br/>Schema + Consistency Checks]
        LINKS[check-links.yml<br/>Broken Link Detection]
        VERIFY[monthly-verification.yml<br/>Verification Age Tracking]
        STATS[generate-stats.yml<br/>Monthly Statistics]
        README_UPDATE[update-readme.yml<br/>README Auto-Update]
        BROKEN[detect-broken-resources.yml<br/>URL Health Checks]
    end

    subgraph OUTPUT["Output Layer"]
        README[README.md<br/>Main Entry Point]
        DISCUSS[DISCUSSIONS.md<br/>Community Guide]
        CONTRIB[CONTRIBUTING.md<br/>Contribution Guide]
        CAT_MD[CATEGORIES.md<br/>Human Taxonomy]
        WEBSITE[Future Website<br/>JSON → Web UI]
    end

    CONTRIBUTORS --> CAT
    CONTRIBUTORS --> DATA
    CONTRIBUTORS --> REC
    CONTRIBUTORS --> PATHS
    CONTRIBUTORS --> ALT

    CAT --> RES
    RES --> VALIDATE
    RES --> LINKS
    RES --> BROKEN
    DATA --> VALIDATE
    DATA --> STATS
    DATA --> README_UPDATE
    DATA --> VERIFY

    VALIDATE -->|Pass/Fail| PR
    LINKS -->|Issue| ISSUE
    BROKEN -->|Issue| ISSUE
    VERIFY -->|Issue| ISSUE
    STATS -->|Commit| DATA
    README_UPDATE -->|PR| README

    RES --> RANK_DATA
    RANK_DATA --> RANK_MD
    TAX --> CAT_MD
    TAX --> RANK_DATA
    TAGS --> RES
    RATINGS --> RES
    BADGES --> CAT

    DEPR_DATA --> DEPR_MD

    README --> WEBSITE
    DATA --> WEBSITE
```

### Architecture Summary

| Layer | Purpose | Key Files |
|---|---|---|
| **Content** | Human-readable markdown files | `categories/*`, `recipes/*`, `learning-paths/*` |
| **Data** | Machine-readable JSON for automation | `data/resources.json`, `data/taxonomy.json`, `data/tags.json` |
| **Automation** | GitHub Actions workflows | `.github/workflows/*.yml` (6 workflows) |
| **Output** | Rendered docs and future website | `README.md`, `CATEGORIES.md`, `DISCUSSIONS.md` |

---

## 🗂️ Categories

| Category | Free Resources For |
|---|---|
| 🤖 [AI & LLMs](./categories/ai) | Free AI APIs, LLMs, agents, RAG, embeddings, image generation, speech-to-text, vector databases |
| 🚀 [Deployment](./categories/deployment) | Free serverless hosting, container orchestration, PaaS, edge functions, BaaS platforms |
| ☁️ [Cloud Platforms](./categories/cloud) | Free cloud computing, VMs, serverless compute, cloud storage, CDN, always-free tiers |
| 🌐 [Web Hosting](./categories/hosting) | Free static site hosting, VPS, DNS management, SSL certificates, reverse proxy |
| 🗄️ [Databases](./categories/databases) | Free SQL, NoSQL, managed databases, caching, vector databases, time-series, backend platforms |
| 💾 [Storage & Files](./categories/storage) | Free object storage, file hosting, CDN-backed storage, backup, image optimization |
| 🔐 [Auth & Identity](./categories/auth) | Free authentication, SSO, MFA, user management, passwordless, social login |
| 💳 [Payments](./categories/payments) | Free payment processing, invoicing, subscription management, checkout, fraud detection |
| 📧 [Email & SMS](./categories/email-sms) | Free transactional email, email marketing, SMS APIs, push notifications, multi-channel |
| 📊 [Monitoring](./categories/monitoring) | Free APM, log management, uptime monitoring, error tracking, real user monitoring |
| 🔄 [CI/CD](./categories/ci-cd) | Free CI/CD pipelines, build automation, artifact hosting, code quality, deployment automation |
| 🛠️ [Developer Tools](./categories/devtools) | Free code editors, version control, CLI tools, API clients, package managers, code generators |
| 🎨 [Design](./categories/design) | Free UI kits, icons, illustrations, prototyping, design systems, typography, mockups |
| 🔗 [Domains & DNS](./categories/domains) | Free domains, subdomains, DNS management, domain forwarding, dynamic DNS |
| 🧪 [Testing & QA](./categories/testing) | Free unit testing, E2E testing, API testing, load testing, browser testing, visual regression |
| 📱 [Mobile Development](./categories/mobile) | Free mobile SDKs, push notifications, app hosting, app builders, deep linking, analytics |
| 📚 [Learning](./categories/learning) | Free coding platforms, courses, certifications, interactive tutorials, coding challenges |
| 🎓 [Student Packs](./categories/student-packs) | Free tools with student verification — GitHub Student Pack, AWS/Azure/GCP credits, JetBrains, Figma |
| 🏢 [Startup Credits](./categories/startup-credits) | Free cloud credits, AI credits, hosting credits, accelerator programs, SaaS startup support |
| 🌍 [Open Source](./categories/open-source) | Free self-hostable alternatives, open-source libraries, community editions, templates |

---

## ⚙️ Dev Stack & Configuration

### Repository Config

| Setting | Value |
|---|---|
| **Schema version** | 1.0.0 |
| **License** | MIT |
| **Node version** | 20 (for CI workflows) |
| **Validation** | JSON Schema (draft-07) via `ajv` |
| **Link checker** | `lychee` |
| **Runner** | `ubuntu-latest` |

### Data File Architecture

```
data/
├── resources.json         # Resource entries (22 fields each)
├── resources-schema.json  # Validation schema
├── taxonomy.json          # 20 categories, 135 subcategories
├── tags.json              # 175 tags in 6 groups
├── ratings.json           # 7 metrics, weighted formula, 6 tiers
├── badges.json            # 10 badges with criteria + expiry
├── rankings.json          # 4 ranking factors, 3 published rankings
├── deprecated.json        # 12 deprecated entries with migrations
└── deprecated-schema.json # Deprecation schema
```

### Rating System Configuration

| Metric | Weight | Scale |
|---|---|---|
| Beginner Friendliness | 1.0 | 1-5 |
| Documentation Quality | 1.0 | 1-5 |
| Free Tier Generosity | **1.5** | 1-5 |
| Setup Ease | 0.8 | 1-5 |
| Reliability | **1.2** | 1-5 |
| Performance | 0.8 | 1-5 |
| Community | 0.5 | 1-5 |

> **Formula:** `overall = SUM(score × weight) / SUM(weights)` — Rounded to 1 decimal

### Ranking Factors

| Factor | Weight | Data Source |
|---|---|---|
| 🗳️ Community Votes | 25% | GitHub Discussion reactions |
| 📈 Popularity | 20% | GitHub stars, npm downloads, traffic |
| 🔍 Maintainer Score | 30% | Maintainer review board |
| 🎁 Free Tier Quality | 25% | From resource rating scores |

### Badge Configuration

| Badge | Category | Validity |
|---|---|---|
| ✅ Tested | Verification | 6 months |
| 🟡 Community Verified | Verification | 3 months |
| 🔴 Unverified | Verification | 30 days |
| ⚠️ Deprecated | Status | Permanent |
| 🗄️ Archived | Status | Permanent |
| 🎓 Student Friendly | Audience | 12 months |
| 🇮🇳 India Friendly | Region | 12 months |
| 🏆 Top Rated | Achievement | 3 months |
| 💳 No Card Required | Pricing | 6 months |
| 🌍 Global | Region | 12 months |

---

## 📊 Stats

### 📦 Resource Statistics

| Metric | Value |
|---|---|
| **Total Categories** | 20 |
| **Total Subcategories** | 135 |
| **Standardized Tags** | 175 |
| **Tag Groups** | 6 (Global, Category, Pricing, Region, Compatibility, Verification) |
| **Resource Entries** | 601 |
| **Published Rankings** | 3 |
| **Deprecated Entries** | 12 |
| **Verification Badges** | 10 |
| **Automation Workflows** | 6 |
| **Issue Templates** | 4 |
| **Discussion Templates** | 6 |
| **Build Recipes** | 7 |
| **Learning Paths** | 7 |
| **Student Pack Guides** | 7 + 2 supporting |
| **Startup Credit Guides** | 5 |
| **Paid-to-Free Mappings** | 80+ (across 12 categories) |
| **Alternatives Files** | 5 |

### 💰 Value Statistics

| Benefit Area | Estimated Value |
|---|---|
| Student Packs (combined) | $5,000+ / year per student |
| Startup Credits (combined) | $600,000+ per startup |
| Cloud Credits (AWS + GCP + Azure) | $450,000+ max |
| AI Credits (OpenAI + Anthropic + others) | $16,000+ max |
| SaaS Startup Programs | $40,000+ combined |

### 🚀 Automation Frequency

| Workflow | Runs |
|---|---|
| Link checking | Monthly |
| JSON validation | On every PR/push |
| Verification monitoring | Monthly |
| Stats generation | Monthly |
| README update | Monthly |
| Broken resource detection | Bi-weekly |

---

## 🚀 Getting Started

### For Developers

```bash
# 1. Find what you need
browse categories/

# 2. Pick a recipe for your project
cat recipes/build-saas-with-zero-budget.md

# 3. Follow a learning path
cat learning-paths/full-stack.md

# 4. Check rankings
cat rankings/best-hosting-2026.md

# 5. Find alternatives to paid tools
cat alternatives/firebase.md
```

### For Contributors

```bash
# 1. Clone the repo
git clone https://github.com/girishlade111/awesome-free-stack.git
cd awesome-free-stack

# 2. Read the resource template
cat .github/resource-template.md

# 3. Add a resource
# Create categories/<category>/<tool-name>.md

# 4. Validate locally
npm install -g ajv-cli ajv-formats
ajv validate -s data/resources-schema.json -d data/resources.json

# 5. Submit a pull request
```

### For Students

- **[Claim the GitHub Student Pack](./categories/student-packs/github-student-pack.md)** — $200k+ in free tools
- **[Get AWS Educate credits](./categories/student-packs/aws-educate.md)** — $110, no card required
- **[Get Azure for Students](./categories/student-packs/azure-for-students.md)** — $100, no card
- **[Get Google Cloud for Students](./categories/student-packs/google-cloud-for-students.md)** — $300 + free labs
- **[Get Figma Education](./categories/student-packs/figma-education.md)** — Free Pro features
- **[Get Notion Plus for free](./categories/student-packs/notion-education.md)** — With `.edu` email
- **[Get JetBrains IDEs free](./categories/student-packs/jetbrains-student.md)** — $649/yr value

👉 [Full verification guide](./categories/student-packs/verification-guide.md)

### For Startups

- **[AWS Activate](./categories/startup-credits/cloud-credits.md)** — Up to $100,000 in credits
- **[Google Cloud for Startups](./categories/startup-credits/cloud-credits.md)** — Up to $200,000
- **[Azure for Startups](./categories/startup-credits/cloud-credits.md)** — Up to $150,000
- **[Apply to Y Combinator](./categories/startup-credits/accelerator-programs.md)** — $500k funding + $600k+ in perks
- **[Get startup SaaS discounts](./categories/startup-credits/startup-support.md)** — Stripe, Notion, Figma, Linear, HubSpot

---

## 🔥 Featured Resources

Top free tools notable for their generous free tiers:

| Tool | Category | Free Tier Highlights |
|---|---|---|
| [Gemini API](./categories/ai) | AI | 60 req/min, 1M token context, no credit card |
| [Supabase](./categories/databases) | Database | 500 MB PostgreSQL, 50k MAUs, real-time, auth, 2 GB storage |
| [Vercel](./categories/hosting) | Hosting | 100 GB bandwidth, 6k build min/mo, serverless + edge functions |
| [Cloudflare R2](./categories/storage) | Storage | 10 GB, S3-compatible, zero egress fees, global CDN |
| [Clerk](./categories/auth) | Auth | 10k monthly active users, pre-built UI, social login |
| [Resend](./categories/email-sms) | Email | 100 transactional emails/day, React email templates |
| [PostHog](./categories/monitoring) | Analytics | 1M events/month, session replay, feature flags, product analytics |
| [GitHub Actions](./categories/ci-cd) | CI/CD | 2,000 minutes/month, unlimited public repo builds |

---

## 👨‍🍳 Build Recipes

Ready-to-use free stacks for common projects:

| Recipe | Free Stack |
|---|---|
| [Build a SaaS ($0 budget)](./recipes/build-saas-with-zero-budget.md) | Next.js + Supabase + Vercel + Resend |
| [Build an AI App](./recipes/build-ai-app.md) | Groq + pgvector + Vercel AI SDK + Clerk |
| [Build a Startup MVP](./recipes/build-startup-mvp.md) | Next.js + Supabase + Stripe + Sentry |
| [Build a Portfolio](./recipes/build-portfolio.md) | Astro + Cloudflare Pages + Umami |
| [Build a Mobile App](./recipes/build-mobile-app.md) | Expo + Supabase + EAS + PostHog |
| [Build a Docs Site](./recipes/build-docs-app.md) | Next.js + MDX + Meilisearch + Clerk |
| [Build File Sharing](./recipes/build-file-sharing-platform.md) | Next.js + R2 + Supabase + Resend |

---

## 📚 Learning Paths

Curated **free learning resources** and roadmaps for developers:

| Path | Tech Stack |
|---|---|
| [Frontend Developer](./learning-paths/frontend.md) | HTML → CSS → JavaScript → React → Next.js → Tailwind |
| [Backend Developer](./learning-paths/backend.md) | Node.js/Python → SQL → PostgreSQL → Docker |
| [Full Stack Developer](./learning-paths/full-stack.md) | JavaScript → React → Next.js → Supabase → TypeScript |
| [AI Engineer](./learning-paths/ai-engineer.md) | Python → ML → LLMs → RAG → LangChain → pgvector |
| [DevOps Engineer](./learning-paths/devops.md) | Linux → Docker → K8s → GitHub Actions → Terraform |
| [Mobile Developer](./learning-paths/mobile.md) | React Native (Expo) → Supabase → Push → Deploy |
| [Indie Hacker](./learning-paths/indie-hacker.md) | Validate → Build MVP → Launch → Get users → Monetize |

---

## 🎓 Student Packs

**Free developer tools for students.** Verify your student status and unlock thousands of dollars in free resources:

| Pack | Value | Verification |
|---|---|---|
| [GitHub Student Developer Pack](./categories/student-packs/github-student-pack.md) | $200k+ | `.edu` email or ISIC |
| [AWS Educate](./categories/student-packs/aws-educate.md) | $110 credits | `.edu` email |
| [Azure for Students](./categories/student-packs/azure-for-students.md) | $100 credits | `.edu` email, no card |
| [Google Cloud for Students](./categories/student-packs/google-cloud-for-students.md) | $300 credits | `.edu` email |
| [Figma Education](./categories/student-packs/figma-education.md) | Free Pro | `.edu` email |
| [Notion Education](./categories/student-packs/notion-education.md) | Free Plus | `.edu` email |
| [JetBrains Student](./categories/student-packs/jetbrains-student.md) | $649/yr | `.edu` email |

📋 [Verification Guide](./categories/student-packs/verification-guide.md) — Step-by-step instructions for all platforms

---

## 🏢 Startup Credits

**Free cloud and SaaS credits for startups.** Apply to multiple programs — they stack:

| Program | Max Credits | Best For |
|---|---|---|
| [AWS Activate](./categories/startup-credits/cloud-credits.md) | $100k | Cloud infrastructure |
| [Google Cloud for Startups](./categories/startup-credits/cloud-credits.md) | $200k | AI/ML workloads, BigQuery |
| [Azure for Startups](./categories/startup-credits/cloud-credits.md) | $150k | Enterprise, OpenAI Service |
| [Stripe Startup Program](./categories/startup-credits/startup-support.md) | $20k+ waived fees | Payment processing |
| [Vercel for Startups](./categories/startup-credits/hosting-credits.md) | Free Pro | Frontend hosting |
| [Cloudflare for Startups](./categories/startup-credits/hosting-credits.md) | Free Pro | CDN, Workers, R2 |
| [Notion for Startups](./categories/startup-credits/startup-support.md) | 6 months free | Documentation |

---

## 🏆 Rankings

Quarterly rankings of the best free tools by category:

| Ranking | #1 | Score |
|---|---|---|
| [🏆 Best Free AI Tools 2026](./rankings/best-ai-tools-2026.md) | Gemini API | 4.7 |
| [🏆 Best Free Databases 2026](./rankings/best-databases-2026.md) | Supabase | 4.8 |
| [🏆 Best Free Hosting 2026](./rankings/best-hosting-2026.md) | Vercel | 4.7 |

> **Methodology**: Composite score from 4 factors — Community Votes (25%), Popularity (20%), Maintainer Score (30%), Free Tier Quality (25%). Updated quarterly.

---

## ♻️ Alternatives

**Replace paid tools with free alternatives:**

| Instead of | Try These Free Tools |
|---|---|
| [Notion](./alternatives/notion.md) → | AppFlowy, Outline, Anytype, SiYuan |
| [Firebase](./alternatives/firebase.md) → | Supabase, Appwrite, PocketBase |
| [ChatGPT Plus](./alternatives/chatgpt.md) → | Gemini, DeepSeek, Claude, Groq |
| [Vercel Pro](./alternatives/vercel.md) → | Cloudflare Pages, Netlify, Render |

Browse [80+ paid-to-free swaps](./alternatives/index.md) across all categories.

---

## 🤝 Contributing

We welcome contributions from developers worldwide.

### How to Add a Resource

1. 📖 Read the [Resource Template](.github/resource-template.md)
2. 📝 Create a markdown file in `categories/<category>/<tool-name>.md`
3. ✅ Open a PR using the [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md)
4. 🔍 Maintainers review within 2-5 business days

### Submission Requirements

| Requirement | Details |
|---|---|
| ✅ Meaningful free tier | Yes (trial-only not accepted) |
| ✅ Active service | Yes |
| ✅ Accurate free tier | Must be verified before submitting |
| ✅ Card requirement | Must disclose |
| ✅ Category match | One of 20 categories |
| ✅ No duplicate | Must check first |

### ❌ Not Accepted

- Services requiring card for time-limited trial only
- Tools with no meaningful free tier (<100 requests or 24h trial)
- Dead or abandoned projects
- Pirated software or cracked tools
- Affiliate links or referral rewards
- Adult content or crypto speculation tools

[📖 Full Contributing Guide →](./CONTRIBUTING.md)

---

## 💬 Discussions

Join the conversation on [GitHub Discussions](https://github.com/girishlade111/awesome-free-stack/discussions):

| Category | Icon | Purpose |
|---|---|---|
| Ideas | 💡 | Suggest improvements to the repo |
| Tool Requests | 🔧 | Nominate a tool to add |
| Comparisons | ⚖️ | Compare free tools head-to-head |
| Monthly Highlights | 📅 | Monthly recap of additions |
| Support | 🆘 | Get help with a tool or contribution |
| Voting | 🗳️ | Community polls for rankings |

[📖 Discussion Guide →](./DISCUSSIONS.md)

---

## 🛡️ Code of Conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). We are committed to providing a welcoming, inclusive, and harassment-free experience for everyone.

- **Be respectful** — Disagreement is fine, personal attacks are not
- **Be constructive** — Provide actionable feedback
- **Be accurate** — Verify free tier information before submitting
- **Be patient** — Maintainers review on a volunteer basis

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 🌟 Community

| Activity | How to Participate |
|---|---|
| ⭐ **Star the repo** | Show support and track updates |
| 🐛 **Open an issue** | Report broken resources or suggest edits |
| 💬 **Start a discussion** | Ask questions and share your stack |
| 🔀 **Submit a PR** | Add new resources or fix existing entries |
| 🗳️ **Vote in rankings** | Influence which tools rank #1 |

Verified contributors earn badges. Top contributors are featured in our monthly highlights.

---

<p align="center">
  <strong>awesome-free-stack</strong> — Replacing expensive developer tools with free alternatives.<br>
  <sub>free developer resources · free AI APIs · student developer tools · free cloud services · free hosting · free PostgreSQL · free CI/CD · free authentication · open source alternatives · free SaaS tools · free startup credits</sub>
</p>

<p align="center">
  <a href="https://github.com/girishlade111/awesome-free-stack"><strong>⭐ Star this repo</strong></a> ·
  <a href="CONTRIBUTING.md"><strong>✏️ Contribute</strong></a> ·
  <a href="https://github.com/girishlade111/awesome-free-stack/discussions"><strong>💬 Discuss</strong></a> ·
  <a href="https://github.com/girishlade111/awesome-free-stack/issues"><strong>🐛 Report Issue</strong></a>
## 📊 Repository Stats

| Metric | Value |
|---|---|
| Total Resources | 601 |
| Categories | 20 |
| ✅ Tested & Verified | 90 |
| 💳 No Card Required | 551 |
| 🎓 Student Friendly | 128 |
| 🌍 Global Availability | 584 |
| 🌿 Open Source | 345 |
| 🏆 Top Rated (≥4.5) | 121 |

### Resources by Category

| Category | Count |
|---|---|
| AI | 139 |
| DevTools | 96 |
| CI/CD | 95 |
| Testing | 69 |
| Auth | 63 |
| Deployment | 14 |
| Student Packs | 14 |
| Design | 12 |
| Startup Credits | 12 |
| Databases | 11 |
| Domains | 11 |
| Mobile | 10 |
| Learning | 10 |
| Open Source | 10 |
| Cloud | 8 |
| Hosting | 6 |
| Storage | 6 |
| Payments | 5 |
| Email & SMS | 5 |
| Monitoring | 5 |

_Auto-generated on 2026-07-01_
</p>
