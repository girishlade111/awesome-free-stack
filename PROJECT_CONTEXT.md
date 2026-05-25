# awesome-free-stack — Project Context

> AI-ready project context file. Generated 2026-05-25.

---

## 1. Purpose

**awesome-free-stack** is a curated, community-driven collection of free and freemium developer tools — APIs, databases, hosting, CI/CD, auth, payments, design assets, learning platforms, student packs, startup credits, and open-source alternatives to paid SaaS products.

**Core mission**: Replace expensive developer tools with free alternatives — one verified resource at a time.

**Target audience**: Indie developers, students, startups, bootstrappers, and anyone building on a budget.

### Key Design Principles

1. **Every entry requires a meaningful free tier** — time-limited trials and credit-card-gated trials are explicitly rejected
2. **Dual-format storage** — each resource exists as both a human-readable markdown file and a machine-readable JSON entry
3. **Verification-driven** — resources carry a verification badge (Tested, Community-Verified, Unverified) with defined expiry
4. **Rating by formula** — 7 weighted metrics computed into a single overall score, validated programmatically
5. **Always improving** — the project is designed to expand to 20+ categories with 500+ resources

---

## 2. Repository Map

```
awesome-free-stack/
├── .github/                          # GitHub workflows, templates, issue forms
├── categories/                        # 20 content categories (the core)
│   ├── ai/                           # AI APIs, models, agent frameworks, vector DBs
│   ├── auth/                         # Authentication & user management
│   ├── ci-cd/                        # CI/CD pipelines & automation
│   ├── cloud/                        # Cloud providers & compute
│   ├── databases/                    # Managed databases & backend platforms
│   ├── deployment/                   # PaaS, serverless, containers
│   ├── design/                       # Prototyping, icons, fonts, illustrations
│   ├── devtools/                     # Code editors & developer tools
│   ├── domains/                      # DNS, subdomains, free domains
│   ├── email-sms/                    # Transactional email, marketing, SMS
│   ├── hosting/                      # VPS, web servers, self-hosted platforms
│   ├── learning/                     # Courses, tutorials, documentation
│   ├── mobile/                       # Mobile SDKs, backend, push, analytics
│   ├── monitoring/                   # APM, logging, uptime, error tracking
│   ├── open-source/                  # Self-hostable alternatives to paid tools
│   ├── payments/                     # Payment processing & billing
│   ├── startup-credits/              # Cloud credits & founder perks
│   ├── student-packs/                # Student verification benefits
│   ├── storage/                      # Object storage & CDN storage
│   └── testing/                      # API testing, E2E testing
├── data/                             # Machine-readable data (JSON)
│   ├── resources.json                # Master resource index (193 entries)
│   ├── tags.json                     # Tag taxonomy (175 tags, 7 groups)
│   ├── taxonomy.json                 # Category taxonomy (20 categories, ~135 subcategories)
│   ├── ratings.json                  # Rating metric definitions & score tiers
│   ├── rankings.json                 # Ranking algorithm & factors
│   ├── badges.json                   # Verification & feature badge standards
│   ├── deprecated.json               # Archived/deprecated resources
│   ├── resources-schema.json         # JSON Schema for resource validation
│   └── deprecated-schema.json        # JSON Schema for deprecated entries
├── deprecated/                        # Archived resource entries
├── alternatives/                      # Paid-to-free mapping files
├── learning-paths/                    # Curated learning pathways
├── rankings/                          # Generated ranking pages
├── recipes/                           # Integration recipes & guides
├── README.md                          # Main documentation
├── STANDARDS.md                       # Project-wide standards & conventions
├── CONTRIBUTING.md                    # Contribution guidelines
├── BEST-OF.md                         # Category winner rankings
├── AUDIT-REPORT.md                    # Most recent data audit
└── PROJECT_CONTEXT.md                 # This file
```

---

## 3. Categories (Taxonomy)

Each resource belongs to exactly one **category** (top-level) and one **subcategory** (within that category).

| # | Category | Icon | Subcategories | Example Resources |
|---|---|---|---|---|
| 1 | ai | 🤖 | apis, models, agents, rag, embeddings, image-generation, video-generation, speech, vector-databases, ml-platforms, prompt-tools | 30 entries |
| 2 | deployment | 🚀 | serverless, containers, paas, edge-functions, platform-orchestration, baas | 14 entries |
| 3 | cloud | ☁️ | compute, serverless-compute, cloud-storage, networking, cdn, cloud-functions, free-tier | 8 entries |
| 4 | hosting | 🌐 | static-sites, vps, web-servers, dns, ssl-certificates, reverse-proxy | 6 entries |
| 5 | databases | 🗄️ | sql, nosql, managed-databases, caching, vector-databases, graph-databases, time-series, backend-platforms | 11 entries |
| 6 | storage | 💾 | object-storage, file-hosting, cdn-storage, backup, image-optimization | 6 entries |
| 7 | auth | 🔐 | authentication, sso, mfa, user-management, authorization, passwordless, social-login | 8 entries |
| 8 | payments | 💳 | payment-processing, invoicing, subscription-management, checkout, fraud-detection, payouts | 5 entries |
| 9 | email-sms | 📧 | transactional-email, email-marketing, email-api, sms, push-notifications, multi-channel | 5 entries |
| 10 | monitoring | 📊 | apm, log-management, uptime-monitoring, error-tracking, real-user-monitoring, infrastructure-monitoring, synthetic-monitoring | 5 entries |
| 11 | ci-cd | 🔄 | pipelines, build-automation, artifact-hosting, testing-automation, code-quality, deployment-automation | 5 entries |
| 12 | devtools | 🛠️ | code-editors, version-control, cli-tools, api-tools, package-managers, browser-devtools, code-generation, collaboration | 6 entries |
| 13 | design | 🎨 | ui-kits, icons, illustrations, prototyping, design-systems, color-tools, typography, mockups, screenshot-tools | 12 entries |
| 14 | domains | 🔗 | free-domains, subdomains, dns-management, domain-forwarding, dynamic-dns | 11 entries |
| 15 | testing | 🧪 | unit-testing, e2e-testing, api-testing, load-testing, browser-testing, test-management, visual-regression | 5 entries |
| 16 | mobile | 📱 | mobile-sdks, push-notifications, app-hosting, app-builders, deep-linking, app-testing, app-analytics | 10 entries |
| 17 | learning | 📚 | platforms, courses, certifications, interactive-tutorials, coding-challenges, documentation, newsletters, podcasts | 10 entries |
| 18 | student-packs | 🎓 | github-student-pack, cloud-credits, ide-licenses, learning-platforms, design-tools, domain-benefits | 14 entries |
| 19 | startup-credits | 🏢 | cloud-programs, saas-programs, incubators, founder-perks, open-source-grants | 12 entries |
| 20 | open-source | 🌍 | self-hostable, libraries, community-editions, templates, boilerplates | 10 entries |

**Total**: 20 categories, ~135 subcategories, 193 resources.

---

## 4. Data Architecture

### 4.1 Dual-Format Storage

Every resource exists in two synchronized formats:

```
categories/<category>/<slug>.md     # Human-readable markdown
data/resources.json                 # Machine-readable JSON (master index)
```

The JSON file is the **source of truth**. Markdown files are generated/maintained to match.

### 4.2 Resource JSON Schema

Each entry in `data/resources.json` has exactly 22 fields in this order:

```json
{
  "id": "unique-kebab-case",
  "slug": "unique-kebab-case",
  "name": "Display Name",
  "website": "https://...",
  "docs": "https://...",
  "github": "https://github.com/...",
  "description": "<200 char summary",
  "category": "category-id",
  "subcategory": "subcategory-id",
  "tags": ["tag-id", "tag-id", "..."],
  "free_tier": {
    "summary": "What's free, with specific numeric limits",
    "limits": {
      "requests_per_month": null,
      "tokens_per_minute": null,
      "storage_gb": null,
      "seats": null
    }
  },
  "paid_plan": {
    "summary": "What the paid tier includes and pricing",
    "starting_price_usd": null,
    "billing_model": "subscription | usage-based | transaction-fee | one-time | contact-sales | donation | per-user | per-host | per-domain | custom"
  },
  "ratings": {
    "beginner_friendly": 1-5,
    "docs": 1-5,
    "free_generosity": 1-5,
    "setup": 1-5,
    "reliability": 1-5,
    "performance": 1-5,
    "community": 1-5,
    "overall": "computed via weighted formula"
  },
  "verification": {
    "status": "tested | community-verified | limited",
    "verified_by": "maintainer | community",
    "date": "2026-MM"
  },
  "status": "active | limited",
  "student_benefits": {
    "available": true/false,
    "details": "Description of student offer",
    "verification_method": "github-education | institutional-email | sheerid | id-card"
  },
  "requires_card": true/false,
  "region_restrictions": {
    "global": true/false,
    "restricted_countries": [],
    "notes": ""
  },
  "languages": ["en", "es", "..."],
  "alternatives_to": ["existing-resource-id"],
  "alternatives": ["existing-resource-id"],
  "last_verified": "2026-MM-DD"
}
```

### 4.3 Rating Formula

The `overall` score is computed from 7 weighted metrics:

| Metric | Weight | Description |
|---|---|---|
| beginner_friendly | 1.0 | Ease of getting started |
| docs | 1.0 | Documentation quality |
| free_generosity | 1.5 | Generosity of the free tier |
| setup | 0.8 | Setup time and effort |
| reliability | 1.2 | Uptime and trustworthiness |
| performance | 0.8 | Speed and responsiveness |
| community | 0.5 | Community size and activity |

**Formula**:
```
overall = SUM(score_i × weight_i) / SUM(weight_i)
        = (beginner_friendly×1.0 + docs×1.0 + free_generosity×1.5 + setup×0.8 + reliability×1.2 + performance×0.8 + community×0.5) / 6.8
```

**Score tiers**:
- Elite (≥4.5) 🏆, Excellent (4.0–4.4) ⭐, Good (3.0–3.9) ✅, Fair (2.0–2.9) 🟡, Limited (1.0–1.9) 🔴, Insufficient (<1.0) ⚠

### 4.4 Ranking Algorithm

The overall **rank score** is a weighted composite of 4 factors:

| Factor | Weight | Source |
|---|---|---|
| Community Votes | 25% | GitHub Discussions reactions |
| Popularity | 20% | GitHub stars, npm downloads, web traffic |
| Maintainer Score | 30% | Maintainer review board |
| Free Tier Quality | 25% | Rating free_generosity score |

### 4.5 Verification Badges

10 badges with defined criteria and expiry:

| Badge | Type | Duration | Meaning |
|---|---|---|---|
| ✅ Tested | verification | 6 months | Maintainer-verified |
| 🟡 Community Verified | verification | 3 months | 3+ community reports |
| 🔴 Unverified | verification | 30 days | Submitted, not tested |
| ⚠️ Deprecated | status | Permanent | Free tier removed |
| 🗄️ Archived | status | Permanent | Moved to archive |
| 🎓 Student Friendly | audience | 12 months | Student benefit available |
| 🇮🇳 India Friendly | region | 12 months | Works in India |
| 🏆 Top Rated | achievement | 3 months | Score ≥ 4.5 |
| 💳 No Card Required | pricing | 6 months | No credit card needed |
| 🌍 Global | region | 12 months | Available worldwide |

---

## 5. Tag Taxonomy

175 tags organized into 7 groups:

| Group | Tags | Purpose |
|---|---|---|
| **global** (15) | open-source, self-hosted, saas, api, sdk, cli, no-code, low-code, new, trending, top-rated, verified, community-pick, production-ready, beginner-friendly | Cross-cutting attributes |
| **category** (137) | ai, llm, cloud, database, auth, payments, mobile, testing, etc. | Derived from categories & subcategories |
| **pricing** (12) | free-tier, freemium, trial, usage-based, no-card, card-required, pay-what-you-want, donation, forever-free, generous-free-tier, usage-limits, rate-limited | Cost/billing attributes |
| **region** (12) | global, india-friendly, us-friendly, eu-compliant, china-restricted, russia-restricted, sanctioned-restricted, us-only, eu-only, asia-pacific, multi-region | Geographic attributes |
| **compatibility** (33) | javascript, typescript, python, rust, go, java, ruby, php, dotnet, swift, kotlin, react, nextjs, vue, svelte, nodejs, docker, kubernetes, graphql, rest, grpc, webhook, postgresql, mysql, mongodb, redis, s3-compatible, stripe-compatible, openai-compatible, oauth, saml, webassembly | Tech stack compatibility |
| **verification** (7) | tested, community-verified, unverified, deprecated, limited, requires-invite, waitlist | Status verification |

---

## 6. Automation & CI

### 6.1 Validation Pipeline

All resources undergo automated checks:

1. **JSON Schema validation** — against `data/resources-schema.json` (ajv, draft-07)
2. **Taxonomy validation** — category and subcategory must exist in `data/taxonomy.json`
3. **Tag validation** — every tag must exist in `data/tags.json` with a non-zero count
4. **Markdown presence** — every resource must have a markdown file at `categories/<category>/<slug>.md`
5. **Subcategory validity** — subcategory must exist within the assigned category
6. **Duplicate detection** — no duplicate IDs, slugs, or names across resources
7. **Rating validation** — overall score must match the weighted formula within ±0.05
8. **Link checking** — all URLs checked by lychee link checker

### 6.2 GitHub Automation

- **PR validation** — runs all checks on pull requests
- **Scheduled re-verification** — periodic badge expiry checks
- **Ranking updates** — quarterly ranking re-computation
- **Deprecation sweeps** — automatic deprecation of stale entries

### 6.3 Stack

- **Runtime**: Node.js 20
- **Validation**: ajv (JSON Schema draft-07, ajv-formats)
- **Links**: lychee
- **CI**: GitHub Actions

---

## 7. Contribution Workflow

### 7.1 Adding a New Resource

1. Choose the correct category and subcategory from `data/taxonomy.json`
2. Check `data/resources.json` for existing entries (no duplicates)
3. Add JSON entry to `data/resources.json` with all 22 fields
4. Create markdown file at `categories/<category>/<slug>.md`
5. Ensure tags exist in `data/tags.json` (add new tags with count updates)
6. Open a PR — automated validation runs, maintainer reviews within 2–5 business days

### 7.2 What is NOT Accepted

- Services requiring a credit card for a time-limited trial only
- Tools with no meaningful free tier (under 100 requests or 24-hour trial)
- Dead or abandoned projects
- Pirated software or cracked tools
- Affiliate links or referral rewards
- Adult content or crypto/blockchain speculation tools

### 7.3 Requirements for Every Resource

| Criteria | Required |
|---|---|
| Meaningful free tier | Yes |
| Active service | Yes |
| Accurate free tier details | Yes |
| Card requirement disclosure | Yes |
| Category match | Yes |
| No duplicate | Yes |

---

## 8. Verification Standards

### 8.1 Tested (✅)
- Maintainer signed up and successfully used the free tier
- Free tier limits confirmed accurate
- No credit card requirement verified
- Region restrictions confirmed
- Valid for 6 months, then re-test or downgrade

### 8.2 Community Verified (🟡)
- At least 3 independent community reports
- No conflicting reports of broken free tier
- Entry in repo for at least 30 days
- Valid for 3 months

### 8.3 Deprecation Workflow
1. Mark resource as `status: "limited"` with reason
2. After 30 days, move to `deprecated/` folder
3. Keep in `deprecated.json` for historical reference

---

## 9. Current Stats

| Metric | Value |
|---|---|
| **Total resources** | 193 |
| **Total tags** | 175 |
| **Categories populated** | 20/20 (100%) |
| **Verification badges** | 10 types |
| **Testing entries** | 19 tested, 173 community-verified, 1 limited |
| **No-card entries** | 156 (80.8%) |
| **Forever-free entries** | 43 (22.3%) |
| **Student-friendly entries** | 24 (12.4%) |
| **Rating formula compliance** | 100% |
| **Field ordering consistency** | 100% |
| **Missing markdowns** | 0 |
| **Duplicate IDs** | 0 |

---

## 10. Future Expansion

### 10.1 More Resources (Short-term)
- Continue adding entries to existing categories (target: 500+ resources)
- Fill gaps in sparsely populated categories

### 10.2 Planned Enhancements
- **Interactive web UI** — browse, filter, compare resources visually
- **User ratings** — direct community ratings integrated with maintainer scores
- **API endpoint** — programmatic access to the resource index
- **Changelog automation** — automated changelog from GitHub releases
- **Deprecation monitoring** — automated checks for free tier changes
- **Comparison engine** — side-by-side resource comparison
- **Learning paths generator** — auto-generated paths from resources

### 10.3 AI / Automation
- **AI-powered validation** — LLM-based free tier extraction from documentation
- **Smart alternatives** — AI-recommended free alternatives for paid tools
- **Auto-tagging** — ML-based tag suggestion for new resources
- **Freshness monitoring** — automated detection of free tier changes via periodic testing

### 10.4 Community Growth
- **Discussion-based voting** — community upvote system using GitHub Discussions
- **Leaderboards** — per-category ranked lists
- **Badge unlock system** — contribution milestones
- **Verified tester program** — community members can earn "Verified" badge

---

## 11. Key Relationships

### 11.1 Multi-Category Tools

Several tools appear in multiple categories because they offer distinct services:

| Tool | Categories | Entries |
|---|---|---|
| **Google** | cloud (GCP), design (Fonts), student-packs, startup-credits | 4 |
| **Firebase** | deployment (Hosting), databases (Firestore), auth, mobile | 4 |
| **Cloudflare** | deployment (Pages, Workers), storage (R2), domains (DNS) | 4 |
| **GitHub** | deployment (Pages), CI/CD (Actions), devtools (Codespaces), student-packs | 4 |
| **AWS** | cloud (Compute), student-packs (Educate), startup-credits (Activate) | 3 |
| **Supabase** | databases, storage, auth | 3 |
| **OpenAI** | ai (API), student-packs, startup-credits | 3 |

### 11.2 File Cross-References

```
resources.json ──tags────► tags.json
resources.json ──category/subcategory──► taxonomy.json
resources.json ──schema────► resources-schema.json
resources.json ──overall──► ratings.json (formula)
resources.json ──rank────► rankings.json (factors)
resources.json ──verification──► badges.json
deprecated.json ──schema────► deprecated-schema.json
```

---

## 12. Quick Reference

### 12.1 Key Files

| File | Lines | Size | Description |
|---|---|---|---|
| `data/resources.json` | ~13,888 | 414 KB | Master resource index (193 entries) |
| `data/tags.json` | ~268 | 24 KB | Tag taxonomy (175 tags) |
| `data/taxonomy.json` | ~323 | 21 KB | Category taxonomy (20 categories) |
| `data/ratings.json` | ~191 | 7.6 KB | Rating formulas and tiers |
| `data/rankings.json` | ~232 | 8.1 KB | Ranking algorithm |
| `data/badges.json` | ~180 | 6.8 KB | Badge definitions |
| `data/resources-schema.json` | ~301 | 11 KB | Resource JSON Schema |
| `README.md` | ~583 | 25 KB | Main project documentation |
| `STANDARDS.md` | ~500+ | 30 KB | Project standards |
| `CONTRIBUTING.md` | ~88 | 3 KB | Contribution guide |

### 12.2 Validation Commands

```bash
# Validate resources JSON against schema
npm install -g ajv-cli ajv-formats
ajv validate -s data/resources-schema.json -d data/resources.json

# Run comprehensive validation
node scripts/validate.js
```

### 12.3 Resource Count by Category

| Category | Count | Category | Count |
|---|---|---|---|
| ai | 30 | design | 12 |
| student-packs | 14 | domains | 11 |
| deployment | 14 | databases | 11 |
| startup-credits | 12 | mobile | 10 |
| learning | 10 | open-source | 10 |
| cloud | 8 | auth | 8 |
| hosting | 6 | storage | 6 |
| devtools | 6 | payments | 5 |
| email-sms | 5 | monitoring | 5 |
| ci-cd | 5 | testing | 5 |

---

## 13. License & Community

- **License**: MIT
- **Contributions**: Welcome via GitHub Issues and Pull Requests
- **Discussions**: Active on GitHub Discussions (suggestions, questions, voting)
- **Code of Conduct**: Standard open-source (contributor covenant)
- **Community Roles**: Contributors → Maintainers → Core Team

---

*This PROJECT_CONTEXT.md is maintained alongside the repository. Update when major structural changes occur.*
