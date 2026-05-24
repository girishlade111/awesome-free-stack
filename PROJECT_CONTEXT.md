# awesome-free-stack — Complete Project Context

> This document describes the entire repository for AI tools, maintainers, and contributors.
> Last updated: 2026-05-24 | Schema version: 1.0.0

---

## 1. Purpose

**awesome-free-stack** is the largest curated collection of free and freemium developer resources. Its mission is to help developers, students, indie hackers, and startups replace expensive SaaS tools with high-quality free alternatives.

The repository serves as:
- A **directory** of free tools across 20 categories
- A **rankings system** with community-driven scores
- A **learning resource** with guided learning paths and build recipes
- A **student benefits hub** documenting $5k+/year in free tools
- A **startup credits database** tracking $600k+ in available credits
- An **alternatives index** mapping paid tools to free replacements
- A **deprecation tracker** monitoring tools whose free tiers disappear

---

## 2. Repository Architecture

### 2.1 Directory Structure

```
awesome-free-stack/
├── README.md                  # Main entry point, SEO-optimized
├── CONTRIBUTING.md            # Contribution guidelines
├── CODE_OF_CONDUCT.md         # Community rules
├── CATEGORIES.md              # Human-readable taxonomy
├── DISCUSSIONS.md             # Discussion system guide
├── LICENSE                    # (empty, needs content)
├── ROADMAP.md                 # (empty, needs content)
├── CHANGELOG.md               # (empty, needs content)
├── FAQ.md                     # (empty, needs content)
│
├── categories/                # 20 category folders, each with .md resource files
│   ├── ai/                    # AI APIs, models, agents, RAG, etc.
│   ├── deployment/            # Serverless, containers, PaaS, BaaS
│   ├── cloud/                 # Compute, storage, CDN, free tiers
│   ├── hosting/               # Static sites, VPS, DNS, SSL
│   ├── databases/             # SQL, NoSQL, managed, vector, cache
│   ├── storage/               # Object storage, file hosting, backup
│   ├── auth/                  # Authentication, SSO, MFA, passwordless
│   ├── payments/              # Processing, invoicing, subscriptions
│   ├── email-sms/             # Transactional, marketing, SMS, push
│   ├── monitoring/            # APM, logs, uptime, errors, RUM
│   ├── ci-cd/                 # Pipelines, builds, artifacts, code quality
│   ├── devtools/              # Editors, version control, CLI, API tools
│   ├── design/                # UI kits, icons, illustrations, prototyping
│   ├── domains/               # Free domains, subdomains, DNS
│   ├── testing/               # Unit, E2E, API, load, browser testing
│   ├── mobile/                # SDKs, push, hosting, app builders
│   ├── learning/              # Platforms, courses, certifications
│   ├── student-packs/         # 9 files: GH Pack, AWS, Azure, GCP, Figma, Notion, JetBrains, verification guide, benefits overview
│   ├── startup-credits/       # 5 files: cloud, AI, hosting, accelerators, SaaS support
│   └── open-source/           # Self-hostable, libraries, community editions
│
├── alternatives/              # Paid-to-free mappings
│   ├── index.md               # 80+ mappings across 12 categories
│   ├── notion.md              # Notion -> AppFlowy, Outline, Anytype, SiYuan
│   ├── firebase.md            # Firebase -> Supabase, Appwrite, PocketBase
│   ├── chatgpt.md             # ChatGPT -> Gemini, DeepSeek, Claude, Groq
│   └── vercel.md              # Vercel -> Cloudflare Pages, Netlify, Render
│
├── recipes/                   # 7 build recipe templates
│   ├── build-saas-with-zero-budget.md
│   ├── build-ai-app.md
│   ├── build-portfolio.md
│   ├── build-startup-mvp.md
│   ├── build-file-sharing-platform.md
│   ├── build-docs-app.md
│   └── build-mobile-app.md
│
├── learning-paths/            # 7 developer learning paths
│   ├── frontend.md
│   ├── backend.md
│   ├── full-stack.md
│   ├── ai-engineer.md
│   ├── devops.md
│   ├── mobile.md
│   └── indie-hacker.md
│
├── rankings/                  # Published ranking pages
│   ├── best-ai-tools-2026.md
│   ├── best-databases-2026.md
│   └── best-hosting-2026.md
│
├── deprecated/                # Deprecation tracking
│   ├── README.md              # System overview
│   ├── deprecated.md          # 11 tools with free tier removed
│   ├── archived.md            # Permanently shut down services
│   ├── unmaintained.md        # OSS projects no longer maintained
│   └── dead-projects.md       # Completely defunct projects
│
├── data/                      # Machine-readable data files
│   ├── resources.json         # 4 example resources with full schema
│   ├── resources-schema.json  # JSON Schema for resources
│   ├── tags.json              # 155 tags in 6 groups
│   ├── taxonomy.json          # 20 categories with 135 subcategories
│   ├── ratings.json           # 7-metric scoring system with 6 tiers
│   ├── badges.json            # 10 verification badges with criteria
│   ├── rankings.json          # 3 published rankings with methodology
│   ├── deprecated.json        # 12 deprecated entries
│   └── deprecated-schema.json # Schema for deprecated entries
│
├── .github/                   # GitHub configuration
│   ├── workflows/             # 6 CI/CD automation workflows
│   ├── ISSUE_TEMPLATE/        # 4 issue form templates
│   ├── DISCUSSION_TEMPLATE/   # 6 discussion form templates
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── resource-template.md   # Resource entry template
│   └── FUNDING.yml
│
└── (planning files)           # Badge System, Community, SEO Keywords, etc.
```

### 2.2 Key Architectural Decisions

- **Markdown-first**: All content is markdown for maximum accessibility and Git-friendliness
- **JSON data layer**: Machine-readable data in `data/` powers automation, rankings, and future website
- **No build step required**: The repo is consumable directly from GitHub without preprocessing
- **Schema validation**: All JSON files have corresponding JSON Schemas for CI validation
- **Automation via GitHub Actions**: 6 workflows handle link checking, JSON validation, stats generation, verification monitoring, and README updates

---

## 3. Data Models

### 3.1 Resource Entry (`data/resources.json`)

Each resource has these required fields:

| Field | Type | Description |
|---|---|---|
| `id` | string (kebab) | Unique identifier |
| `slug` | string (kebab) | URL-friendly identifier |
| `name` | string | Display name |
| `website` | URI | Official website |
| `docs` | URI (optional) | Documentation URL |
| `github` | URI (optional) | Repository URL |
| `description` | string (max 500) | Purpose and use cases |
| `category` | enum | One of 20 allowed categories |
| `subcategory` | string (optional) | From taxonomy subcategories |
| `tags` | string[] | From tag system (validated) |
| `free_tier` | object | `{ summary, limits: { requests_per_month, tokens_per_minute, storage_gb, seats } }` |
| `paid_plan` | object (optional) | `{ summary, starting_price_usd, billing_model }` |
| `ratings` | object | `{ beginner_friendly (1-5), docs, free_generosity, setup, reliability, performance, community, overall }` |
| `verification` | object | `{ status: tested|community-verified|unverified, verified_by, date }` |
| `status` | enum | `active|deprecated|limited` |
| `student_benefits` | object | `{ available, details, verification_method }` |
| `requires_card` | boolean | Credit card requirement |
| `region_restrictions` | object | `{ global, restricted_countries[], notes }` |
| `languages` | string[] (optional) | ISO 639-1 language codes |
| `alternatives_to` | string[] (optional) | Paid tools this replaces |
| `alternatives` | string[] (optional) | Related free resource slugs |
| `last_verified` | date | ISO 8601 date of last confirmation |

### 3.2 Taxonomy (`data/taxonomy.json`)

20 categories, each with:
- `id`, `name`, `icon` (emoji), `description`, `tags[]`
- `subcategories[]`: `{ id, name, description }`
- 135 total subcategories

### 3.3 Tags (`data/tags.json`)

155 tags across 6 groups:
- **Global** (15 tags): open-source, self-hosted, api, sdk, cli, etc.
- **Category** (77 tags): ai, llm, database, serverless, auth, payments, etc.
- **Pricing** (12 tags): free-tier, freemium, no-card, forever-free, etc.
- **Region** (12 tags): global, india-friendly, eu-compliant, china-restricted, etc.
- **Compatibility** (32 tags): javascript, python, docker, postgresql, s3-compatible, etc.
- **Verification** (7 tags): tested, community-verified, unverified, deprecated, etc.

### 3.4 Ratings (`data/ratings.json`)

7 metrics with weights (sum = 6.8):

| Metric | Weight | Description |
|---|---|---|
| Beginner Friendliness | 1.0 | Ease of getting started |
| Documentation Quality | 1.0 | Completeness of docs |
| Free Tier Generosity | **1.5** | How generous the free tier is |
| Setup Ease | 0.8 | Time to integrate |
| Reliability | **1.2** | Uptime and trustworthiness |
| Performance | 0.8 | Speed and latency |
| Community | 0.5 | Community size and activity |

Overall = weighted average, rounded to 1 decimal. 6 tiers from Elite (4.5+) to Insufficient (<1.0).

### 3.5 Rankings (`data/rankings.json`)

Composite score from 4 factors:

| Factor | Weight | Source |
|---|---|---|
| Community Votes | 25% | GitHub Discussion reactions |
| Popularity | 20% | GitHub stars, npm downloads, traffic |
| Maintainer Score | 30% | Maintainer review board average |
| Free Tier Quality | 25% | From resources.json ratings |

Tiebreaker order: free_quality → maintainer_score → community_votes. Minimum 5 entries required to publish a category ranking.

### 3.6 Badges (`data/badges.json`)

10 badges with validation criteria, color, background color, validity duration, and expiry actions. Badges are: Tested, Community Verified, Unverified, Deprecated, Archived, Student Friendly, India Friendly, Top Rated, No Card Required, Global.

### 3.7 Deprecated (`data/deprecated.json`)

Each entry: id, name, website, category, reason (primary enum + detail), deprecated_on, last_verified, status (deprecated|archived|unmaintained|dead), migration[] (alternative_name, alternative_url, notes), notes.

---

## 4. Category Taxonomy

20 categories, 135 subcategories total. Full hierarchy:

| Category | Subcategories |
|---|---|
| 🤖 AI (11) | APIs, Models, Agents, RAG, Embeddings, Image Gen, Video Gen, Speech, Vector DBs, ML Platforms, Prompt Tools |
| 🚀 Deployment (6) | Serverless, Containers, PaaS, Edge Functions, Orchestration, BaaS |
| ☁️ Cloud (7) | Compute, Serverless Compute, Storage, Networking, CDN, Functions, Free Tier |
| 🌐 Hosting (6) | Static Sites, VPS, Web Servers, DNS, SSL, Reverse Proxy |
| 🗄️ Databases (8) | SQL, NoSQL, Managed, Caching, Vector, Graph, Time Series, Backend Platforms |
| 💾 Storage (5) | Object, File Hosting, CDN Storage, Backup, Image Optimization |
| 🔐 Auth (7) | Auth, SSO, MFA, User Mgmt, Authorization, Passwordless, Social Login |
| 💳 Payments (6) | Processing, Invoicing, Subscriptions, Checkout, Fraud, Payouts |
| 📧 Email & SMS (6) | Transactional, Marketing, Email API, SMS, Push, Multi-Channel |
| 📊 Monitoring (7) | APM, Logs, Uptime, Errors, RUM, Infrastructure, Synthetic |
| 🔄 CI/CD (6) | Pipelines, Build, Artifacts, Testing, Code Quality, Deployment |
| 🛠️ DevTools (8) | Editors, Version Control, CLI, API Tools, Package Mgrs, Browser, Code Gen, Collaboration |
| 🎨 Design (9) | UI Kits, Icons, Illustrations, Prototyping, Design Systems, Color, Typography, Mockups, Screenshots |
| 🔗 Domains (5) | Free Domains, Subdomains, DNS, Forwarding, Dynamic DNS |
| 🧪 Testing (7) | Unit, E2E, API, Load, Browser, Test Mgmt, Visual Regression |
| 📱 Mobile (7) | SDKs, Push, Hosting, Builders, Deep Linking, Testing, Analytics |
| 📚 Learning (8) | Platforms, Courses, Certifications, Interactive, Challenges, Docs, Newsletters, Podcasts |
| 🎓 Student Packs (6) | GitHub Pack, Cloud Credits, IDEs, Learning, Design, Domains |
| 🏢 Startup Credits (5) | Cloud, SaaS, Incubators, Founder Perks, OSS Grants |
| 🌍 Open Source (5) | Self-Hostable, Libraries, Community Editions, Templates, Boilerplates |

---

## 5. Automation Workflows (`.github/workflows/`)

6 GitHub Actions workflows, all triggerable manually via `workflow_dispatch`:

| Workflow | Schedule | Purpose |
|---|---|---|
| `check-links.yml` | Monthly (1st, 00:00 UTC) | Uses `lychee` to scan all markdown files for broken links; creates issue on failure |
| `validate-json.yml` | PR/push to `data/*.json` | Validates JSON syntax, schema (ajv), category consistency, tag references |
| `monthly-verification.yml` | Monthly (1st, 06:00 UTC) | Flags resources with `last_verified` >6 months (expired) and 3-6 months (expiring); creates issue |
| `update-readme.yml` | Monthly (1st, 02:00 UTC) | Computes stats, updates README via PR |
| `generate-stats.yml` | Monthly (1st, 04:00 UTC) | Generates `data/stats.json` with full breakdowns; commits directly |
| `detect-broken-resources.yml` | Bi-weekly (1st & 15th, 08:00 UTC) | HTTP-checks all URLs in `resources.json`; creates issue if broken |

---

## 6. Community System

### 6.1 Issue Templates (`.github/ISSUE_TEMPLATE/`)

4 forms:
- **add-resource.yml**: Name, Website, Category (dropdown), Description, Free Tier, Paid Plan, Card Required, Verification checkboxes
- **report-broken-tool.yml**: Tool Name, File Path, Issue Type (7 options), Details, Source URL
- **suggest-category.yml**: Name, Type (top-level/subcategory), Parent, Rationale, Example Resources
- **feature-request.yml**: Area (8 options), Problem, Solution, Alternatives

### 6.2 Discussion Templates (`.github/DISCUSSION_TEMPLATE/`)

6 templates:
- `ideas.md`: Description, Why Matters, Implementation, Related
- `tool-requests.md`: Name, Website, Category, Free Tier, Paid Plan, Verification
- `comparisons.md`: Tools, Criteria, Experience, Feature table, Verdict
- `monthly-highlights.md`: Month, Additions, Top Resource, Stats
- `support.md`: Summary, Resource, Tried, Question, Context
- `voting.md`: Topic, Nominees, Criteria, How to Vote, Results

### 6.3 Badge System

10 badges each with: icon, name, category (verification|status|audience|region|achievement|pricing), color, bg_color, criteria[], validity_duration, expiry_action.

---

## 7. Content Standards

### 7.1 Resource Entry Format

```
## Tool Name

**Website**: https://...
**Docs**: https://...
**GitHub**: https://...
**Category**: <one-of-20>

### Description
1-3 sentences.

### Free Tier
Specific limits (requests, storage, users, bandwidth).

### Paid Plan
Plan name, price, upgrades.

### Ratings
| Dimension | Rating |
|-----------|---|---|
| Beginner Friendly | ⭐⭐⭐⭐⭐ |

### Verification
- Status: tested|community-verified|unverified
- Verified By: handle
- Date: 2026-05

### Status
active|deprecated|limited

### Region Restrictions
- Global: Yes|No
- Restricted Countries: CN, RU, ...

### Student Benefits
- Available: Yes|No
- Details: ...

### Tags
ai api open-source
```

### 7.2 Recipe Format

Each recipe includes: Stack table (Frontend, Backend, Hosting, DB, Auth, Storage, Email, Analytics), Estimated Monthly Cost ($0), Setup Steps, Architecture diagram, Scaling Path, Alternatives table.

### 7.3 Learning Path Format

Each path includes: 4-5 Phases (each with Topic, Free Resource, Duration), Tools list, Platforms list, Build projects (beginner→advanced), Recommended Sequence, Key Free Resources.

### 7.4 Ranking Format

Each ranking includes: Methodology table (4 factors with weights), Per-entry breakdown (4 factor scores + composite), Rationale for #1, Link to raw data.

### 7.5 Alternative Format

Each alternative file: Comparison table, Migration path table, When-to-switch guide.

---

## 8. SEO Strategy

### 8.1 Primary Keywords
- free developer resources
- free AI APIs
- student developer tools
- free cloud services
- free hosting
- free PostgreSQL
- free CI/CD
- free authentication

### 8.2 Secondary Keywords (21 total in SEO Keywords file)
free SaaS tools, free startup credits, free vector database, free LLM API, free serverless hosting, free databases, free monitoring tools, free payment processing, free email API, open source alternatives, awesome free tools, free for developers

### 8.3 Implementation
- Keywords embedded in README opening blockquote and footer `<sub>` tag
- Category descriptions written with keyword-rich phrases
- All heading levels use descriptive text (not just icons)
- Badge URLs point to actual repository
- Repository description and topics configured for GitHub search indexing

---

## 9. Roadmap / Gaps

### 9.1 Empty Files Needing Content
- `LICENSE` — No license selected (0 lines)
- `ROADMAP.md` — No roadmap defined (0 lines)
- `CHANGELOG.md` — No changelog history (0 lines)
- `FAQ.md` — No FAQ content (0 lines)

### 9.2 Empty Category Folders Needing Content
All 20 categories contain only `.gitkeep`. No resource markdown files have been created yet (except student-packs and startup-credits).

### 9.3 Missing Files (from original architecture plan)
- `stats.json` — Not yet generated (auto-generated by workflow)
- `CODE_OF_CONDUCT.md` — Now created
- `categories/ai/apis.md` through `categories/ai/vector-db.md` — Not yet created

### 9.4 Recommended Future Work
- Populate all 20 categories with resource entries
- Fill LICENCE, ROADMAP, CHANGELOG, FAQ
- Add `categories/ai/` subcategory files (apis.md, models.md, agents.md, etc.)
- Generate website from JSON data layer
- Add more ranking categories (monitoring, auth, payments, etc.)
- Expand deprecated tracking with community-sourced reports

---

## 10. Constraints & Coding Conventions

### 10.1 General
- All content is **markdown** (`.md`) — no HTML generators, no build step
- All structured data is **JSON** (`.json`) with accompanying JSON Schemas
- All automation is **GitHub Actions** (`.yml`) targeting `ubuntu-latest`
- File names are **kebab-case** (`build-saas-with-zero-budget.md`)
- IDs and slugs are **kebab-case** (`openai-api`, `vector-databases`)

### 10.2 Content
- Tool names use **sentence case** (not Title Case)
- Descriptions under **200 characters**
- Free tier limits are **specific** (numbers, not vague terms)
- Relative links for internal references
- Tags reference the approved list in `data/tags.json`

### 10.3 Data
- All JSON files validated against schemas in CI
- Resource categories must exist in `data/taxonomy.json`
- Resource tags must exist in `data/tags.json`
- Dates use ISO 8601 format (`2026-05-24`)
- Rating values are integers 1-5
- Country codes use ISO 3166-1 alpha-2

### 10.4 Workflows
- Uses `actions/checkout@v4` and `actions/setup-node@v4`
- Standard permissions: `contents: write`, `issues: write`, `pull-requests: write`
- Node.js 20 for all JavaScript steps
- `workflow_dispatch` enabled on all workflows for manual triggering

---

## 11. Key Relationships

```
resources.json ──── tags.json (tag validation)
     │                  │
     ├── taxonomy.json (category validation)
     │
     ├── ratings.json (score computation)
     │
     ├── resources-schema.json (structure validation)
     │
     └── rankings.json (composite scoring from 4 factors)

deprecated.json ──── deprecated-schema.json

.github/workflows/ ──── data/*.json (validation, stats, URL checks)
.github/ISSUE_TEMPLATE/ ──── CONTRIBUTING.md (submission workflow)
.github/DISCUSSION_TEMPLATE/ ──── DISCUSSIONS.md (community guidelines)
.github/PULL_REQUEST_TEMPLATE.md ──── .github/resource-template.md
```

---

## 12. Quick Reference for AI Tools

When working with this repository:

1. **Adding a resource**: Use `.github/resource-template.md`, place in `categories/<category>/`, add to `data/resources.json`
2. **Validating data**: Run `ajv validate -s data/resources-schema.json -d data/resources.json`
3. **Understanding categories**: Reference `data/taxonomy.json` for the 20 categories and 135 subcategories
4. **Tagging**: Use tags from `data/tags.json` (155 tags in 6 groups)
5. **Scoring**: Ratings use 7 metrics with weighted formula from `data/ratings.json`
6. **Ranking**: Composite score from 4 factors in `data/rankings.json`
7. **Deprecating**: Move entry to `deprecated/` and add to `data/deprecated.json`
8. **SEO**: Embed keywords naturally in descriptions; maintain the keyword footer in README
9. **Badges**: Apply from `data/badges.json` with proper validity tracking
10. **Directory naming**: Always kebab-case, descriptive, lowercase
