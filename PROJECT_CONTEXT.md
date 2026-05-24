# awesome-free-stack — Complete Project Context

> **Purpose**: This file explains the entire `awesome-free-stack` repository to AI tools, maintainers, and contributors.  
> **Last updated**: 2026-05-24 | **Schema version**: 1.0.0 | **Repository topics**: 14 (free-developer-resources, awesome-list, free-ai-apis, etc.)

---

## 1. Project Identity

### 1.1 Mission Statement

**awesome-free-stack** is the largest curated collection of free and freemium developer resources. Its mission is to help developers, students, indie hackers, and startups replace expensive SaaS tools with high-quality free alternatives — zero upfront cost.

### 1.2 Repository Topics

Set in `.github/repo-topics.txt` (14 topics):
```
free-developer-resources, free-software, awesome-list, developer-tools,
student-developer-tools, free-ai-apis, free-cloud-services, open-source,
free-hosting, free-databases, startup-credits, free-saas, devops-tools,
learning-resources
```

### 1.3 Funding

`FUNDING.yml` specifies GitHub sponsor: `girishlade111`.

### 1.4 Seven Core Functions

| Function | Description | Implementation |
|---|---|---|
| **Directory** | Free tools across 20 categories, 135 subcategories | `categories/` + `data/resources.json` |
| **Rankings** | Community-driven composite scores | `data/rankings.json` + `rankings/` |
| **Learning** | Guided learning paths + build recipes | `learning-paths/` (7) + `recipes/` (7) |
| **Student Benefits** | $5k+/year in free tools with verification guide | `categories/student-packs/` (9 files) |
| **Startup Credits** | $600k+ available cloud/AI credits | `categories/startup-credits/` (5 files) |
| **Alternatives** | Paid-to-free tool mappings | `alternatives/` (5 files, 80+ swaps) |
| **Deprecation** | Tracks tools whose free tiers disappear | `deprecated/` (4 files) + `data/deprecated.json` |

### 1.5 SEO Strategy

- **21 target keywords** in `SEO Keywords` file
- 8 primary keywords are embedded in README opening blockquote and footer
- Category descriptions written with keyword-rich phrases
- Repository description configured for GitHub search indexing
- 14 GitHub topics set for discoverability

---

## 2. Repository Architecture

### 2.1 Visual Data Flow

```
                    ┌─────────────────────────────┐
                    │      CONTRIBUTORS            │
                    │  (opens PR / issue /         │
                    │   discussion)                │
                    └──────────┬──────────────────┘
                               │
          ┌────────────────────┼────────────────────┐
          ▼                    ▼                    ▼
   ┌──────────────┐   ┌────────────────┐   ┌──────────────────┐
   │  categories/ │   │  alternatives/  │   │  data/*.json      │
   │  recipes/    │   │  learning-paths/│   │  (resources.json, │
   │  rankings/   │   │  deprecated/    │   │   taxonomy.json,  │
   │  student-    │   │                 │   │   tags.json, ...) │
   │  packs/      │   │                 │   └────────┬─────────┘
   └──────┬───────┘   └────────────────┘            │
          │                                         │
          └──────────┬──────────────────────────────┘
                     ▼
          ┌─────────────────────┐
          │  GitHub Actions     │
          │  (6 workflows)      │
          │  ┌───────────────┐  │
          │  │ validate-json │  │  ← schema, category, tags
          │  │ check-links   │  │  ← lychee
          │  │ monthly-verif │  │  ← expiry tracking
          │  │ detect-broken │  │  ← HTTP checks
          │  │ generate-stats│  │  ← data/stats.json
          │  │ update-readme │  │  ← README PR
          │  └───────────────┘  │
          └──────────┬──────────┘
                     ▼
          ┌─────────────────────┐
          │  README.md          │
          │  CATEGORIES.md      │
          │  DISCUSSIONS.md     │
          │  CONTRIBUTING.md    │
          │  CODE_OF_CONDUCT.md │
          └─────────────────────┘
```

### 2.2 Directory Tree

```
awesome-free-stack/
│
├── 📄 README.md                    # Main entry, SEO-optimized, auto-updated stats section
├── 📄 CONTRIBUTING.md              # Full contribution guide with requirements and style guide
├── 📄 CODE_OF_CONDUCT.md           # Contributor Covenant v2.1
├── 📄 CATEGORIES.md                # Human-readable taxonomy of 20 categories + 135 subcategories
├── 📄 DISCUSSIONS.md               # Community discussion guidelines (6 categories)
├── 📄 FAQ.md                       # ❌ EMPTY (0 lines)
├── 📄 CHANGELOG.md                 # ❌ EMPTY (0 lines)
├── 📄 ROADMAP.md                   # ❌ EMPTY (0 lines)
├── 📄 LICENSE                      # ❌ EMPTY (0 lines)
├── 📄 PROJECT_CONTEXT.md           # This file
│
├── 📁 categories/                  # 20 category folders
│   ├── ai/                         # ❌ contains only .gitkeep
│   ├── deployment/                 # ❌ contains only .gitkeep
│   ├── cloud/                      # ❌ contains only .gitkeep
│   ├── hosting/                    # ❌ contains only .gitkeep
│   ├── databases/                  # ❌ contains only .gitkeep
│   ├── storage/                    # ❌ contains only .gitkeep
│   ├── auth/                       # ❌ contains only .gitkeep
│   ├── payments/                   # ❌ contains only .gitkeep
│   ├── email-sms/                  # ❌ contains only .gitkeep
│   ├── monitoring/                 # ❌ contains only .gitkeep
│   ├── ci-cd/                      # ❌ contains only .gitkeep
│   ├── devtools/                   # ❌ contains only .gitkeep
│   ├── design/                     # ❌ contains only .gitkeep
│   ├── domains/                    # ❌ contains only .gitkeep
│   ├── testing/                    # ❌ contains only .gitkeep
│   ├── mobile/                     # ❌ contains only .gitkeep
│   ├── learning/                   # ❌ contains only .gitkeep
│   ├── open-source/                # ❌ contains only .gitkeep
│   ├── student-packs/              # ✅ 9 files (7 guides + verification guide + overview)
│   └── startup-credits/            # ✅ 5 files (cloud, AI, hosting, accelerators, SaaS support)
│
├── 📁 alternatives/                # Paid-to-free mappings
│   ├── index.md                    # 80+ mappings across 12 categories
│   ├── notion.md                   # Notion → AppFlowy, Outline, Anytype, SiYuan
│   ├── firebase.md                 # Firebase → Supabase, Appwrite, PocketBase, Nhost
│   ├── chatgpt.md                  # ChatGPT Plus → Gemini, DeepSeek, Claude, Groq, Perplexity
│   └── vercel.md                   # Vercel → Cloudflare Pages, Netlify, Render
│
├── 📁 recipes/                     # 7 build recipes (₹0/month stacks)
│   ├── build-saas-with-zero-budget.md
│   ├── build-ai-app.md
│   ├── build-portfolio.md
│   ├── build-startup-mvp.md
│   ├── build-file-sharing-platform.md
│   ├── build-docs-app.md
│   └── build-mobile-app.md
│
├── 📁 learning-paths/              # 7 developer learning paths
│   ├── frontend.md                 # HTML/CSS → Deployed Next.js (16 weeks)
│   ├── backend.md                  # Python/Node → Dockerized API (14 weeks)
│   ├── full-stack.md               # JavaScript → Full-stack SaaS (18 weeks)
│   ├── ai-engineer.md              # Python → RAG + LangChain (16 weeks)
│   ├── devops.md                   # Linux → K8s → Terraform (20 weeks)
│   ├── mobile.md                   # Expo → Published app (16 weeks)
│   └── indie-hacker.md             # Idea → First dollar (10 weeks)
│
├── 📁 rankings/                    # Published ranking pages
│   ├── best-ai-tools-2026.md       # 1. Gemini (4.7), 2. Groq (4.5), 3. DeepSeek (4.3)
│   ├── best-databases-2026.md      # 1. Supabase (4.8), 2. Neon (4.5), 3. MongoDB Atlas (4.2)
│   └── best-hosting-2026.md        # 1. Vercel (4.7), 2. Cloudflare Pages (4.6), 3. Netlify (4.2)
│
├── 📁 deprecated/                  # Deprecation tracking (12 entries)
│   ├── README.md                   # System overview with status definitions
│   ├── deprecated.md               # 11 tools (free tier removed)
│   ├── archived.md                 # 1 service (permanently shut down)
│   ├── unmaintained.md             # Template for OSS projects (no entries yet)
│   └── dead-projects.md            # 1 project (completely defunct)
│
├── 📁 data/                        # Machine-readable data layer
│   ├── resources.json              # 4 example resources (OpenAI, Supabase, Vercel, Stripe)
│   ├── resources-schema.json       # JSON Schema (draft-07) with full validation rules
│   ├── taxonomy.json               # 20 categories, 135 subcategories
│   ├── tags.json                   # 155 tags in 6 groups
│   ├── ratings.json                # 7 metrics, weighted formula, 6 performance tiers
│   ├── badges.json                 # 10 verification badges with criteria + validity
│   ├── rankings.json               # 4-factor composite scoring, 3 published rankings
│   ├── deprecated.json             # 12 deprecated entries with migration paths
│   └── deprecated-schema.json      # JSON Schema for deprecated entries
│
├── 📁 .github/                     # GitHub configuration
│   ├── workflows/                  # 6 automation workflows
│   ├── ISSUE_TEMPLATE/             # 4 YAML issue forms
│   ├── DISCUSSION_TEMPLATE/        # 6 markdown discussion templates
│   ├── PULL_REQUEST_TEMPLATE.md    # PR checklist template
│   ├── resource-template.md        # Resource entry template with field reference
│   ├── repo-topics.txt             # 14 repository topic tags
│   ├── FUNDING.yml                 # GitHub sponsor: girishlade111
│   └── .gitkeep
│
└── 📄 SEO Keywords                 # 21 target SEO keywords
```

### 2.3 Key Architectural Decisions

| Decision | Rationale |
|---|---|
| **Markdown-first** | Maximum accessibility, Git-friendly, no build step required |
| **JSON data layer** | Powers automation, rankings, and future website generation |
| **No build step** | Consumable directly from GitHub without preprocessing |
| **Schema validation** | All JSON files validated against schemas in CI |
| **Dual format** | Human-readable markdown + machine-readable JSON coexist |
| **Emoji icons** | Visual category identification without external assets |
| **Kebab-case everywhere** | File names, IDs, slugs all kebab-case for URL consistency |

---

## 3. Content Standards & Formats

### 3.1 Resource Entry Format

Each resource in `categories/<category>/` follows this structure:

```markdown
## Tool Name
**Website**: https://...
**Docs**: https://...
**GitHub**: https://...
**Category**: <one-of-20>
**Subcategory**: <from-taxonomy>

### Description
1-3 sentences (max 200 chars).

### Free Tier
Specific numeric limits (requests, storage, users, bandwidth).

### Paid Plan (optional)
Plan name, price, billing model.

### Ratings (1-5)
Beginner Friendly, Documentation, Free Generosity, Setup, Reliability, Performance, Community.

### Verification
Status: tested | community-verified | unverified
Verified By: <handle>
Date: 2026-05

### Status
active | deprecated | limited

### Region Restrictions
Global: Yes | No
Restricted Countries: CN, RU, ...

### Student Benefits
Available: Yes | No
Details: ...
Verification Method: edu-email | github-education | iscard | sheerid | id-card

### Tags
ai api open-source llm

### Alternatives To (optional)
Tool A, Tool B

### Alternatives (optional)
tool-c-slug, tool-d-slug
```

### 3.2 Recipe Format

Each recipe includes:
- **Stack table**: Frontend, Backend, Hosting, DB, Auth, Storage, Email, Analytics
- **Estimated monthly cost**: ₹0
- **Setup steps**: Numbered instructions
- **Scaling path**: Upgrade individual layers with costs
- **Alternatives table**: Layer → alternative tool

### 3.3 Learning Path Format

Each path includes:
- **4-5 phases**: Phase name → (Topic, Free Resource, Duration) table
- **Tools list**: Editor, browser, API client, version control
- **Platforms list**: Hosting, database, auth, storage, CI/CD
- **Build projects**: Beginner → Advanced with stack and difficulty
- **Recommended sequence**: Arrow notation
- **Key free resources**: Links

### 3.4 Alternative File Format

Each alternative file includes:
- **Comparison table**: Column per tool, rows for features
- **Migration path**: Arrow notation mapping features
- **When-to-switch guide**: Scenario-based recommendations
- **Switch difficulty**: Easy/Medium/Hard label

### 3.5 Ranking Format

Each ranking includes:
- **Methodology table**: 4 factors with weights
- **Per-entry breakdown**: 4 factor scores + composite score
- **Rationale**: Why #1 won
- **Link**: Reference to `data/rankings.json`

### 3.6 Deprecated File Format

Each deprecated entry includes:
- **Status badge**: ⚠️ Deprecated / 🗄️ Archived / 🔧 Unmaintained / 💀 Dead
- **Date**: When deprecation occurred
- **What happened**: Explanation
- **Migration recommendations**: Table (Alternative, Notes, URL)

---

## 4. Data Models

### 4.1 Resource Entry Schema (`data/resources.json` + `data/resources-schema.json`)

**Top-level structure**:
```json
{
  "$schema": "./resources-schema.json",
  "meta": { "version": "1.0.0", "last_updated": "2026-05-24", "total_resources": 4 },
  "resources": [ /* array of resource objects */ ]
}
```

**Resource object fields** (22 fields, 14 required):

| Field | Type | Required | Constraints |
|---|---|---|---|
| `id` | string (kebab-case) | ✅ | Pattern: `^[a-z0-9]+(-[a-z0-9]+)*$` |
| `slug` | string (kebab-case) | ✅ | Same pattern as id |
| `name` | string (max 128) | ✅ | Display name |
| `website` | URI | ✅ | Official URL |
| `docs` | URI | ❌ | Documentation URL |
| `github` | URI | ❌ | Must match `^https://github\\.com/` |
| `description` | string (max 500) | ✅ | Purpose and use cases |
| `category` | enum (20 values) | ✅ | Must exist in taxonomy.json |
| `subcategory` | string | ❌ | Free-form |
| `tags` | string[] (min 1, unique) | ✅ | Must exist in tags.json |
| `free_tier` | object | ✅ | `{ summary (required), limits: { requests_per_month, tokens_per_minute, storage_gb, seats } }` |
| `paid_plan` | object | ❌ | `{ summary, starting_price_usd, billing_model: subscription|usage-based|transaction-fee|one-time|contact-sales }` |
| `ratings` | object | ✅ | `{ beginner_friendly, docs, free_generosity, setup, reliability, performance, community (all 1-5), overall (computed 0-5) }` |
| `verification` | object | ✅ | `{ status: tested|community-verified|unverified, verified_by, date }` |
| `status` | enum | ✅ | `active|deprecated|limited` |
| `student_benefits` | object | ✅ | `{ available (bool), details, verification_method }` |
| `requires_card` | boolean | ✅ | Credit card requirement |
| `region_restrictions` | object | ✅ | `{ global (bool), restricted_countries[], notes }` |
| `languages` | string[] | ❌ | ISO 639-1 codes |
| `alternatives_to` | string[] | ❌ | Paid tool names this replaces |
| `alternatives` | string[] | ❌ | Slugs of related free resources |
| `last_verified` | date (ISO 8601) | ✅ | Last confirmation date |

**Schema validation** (enforced by `resources-schema.json`):
- JSON Schema draft-07
- Uses `ajv` with `--strict=true --all-errors` in CI
- Additional properties not allowed on any object

### 4.2 Taxonomy Model (`data/taxonomy.json`)

```json
{
  "version": "1.0.0",
  "last_updated": "2026-05-24",
  "description": "Complete category taxonomy for awesome-free-stack",
  "categories": [
    {
      "id": "ai",
      "name": "AI",
      "icon": "🤖",
      "description": "Artificial intelligence APIs, models, and infrastructure.",
      "subcategories": [
        { "id": "apis", "name": "APIs", "description": "..." },
        /* ... 10 more subcategories for AI */
      ],
      "tags": ["ai", "llm", "machine-learning", "deep-learning", "artificial-intelligence"]
    }
    /* ... 19 more categories */
  ]
}
```

### 4.3 Tag System (`data/tags.json`)

155 tags in **6 groups**:

| Group | Count | Purpose | Examples |
|---|---|---|---|
| **Global** | 15 | Cross-cutting | `open-source`, `self-hosted`, `api`, `sdk`, `cli`, `top-rated` |
| **Category** | 77 | Derived from categories | `ai`, `llm`, `database`, `payments`, `design`, `mobile` |
| **Pricing** | 12 | Cost/billing | `free-tier`, `freemium`, `no-card`, `forever-free`, `generous-free-tier` |
| **Region** | 12 | Geographic | `global`, `india-friendly`, `eu-compliant`, `china-restricted` |
| **Compatibility** | 32 | Platform/language | `javascript`, `python`, `docker`, `postgresql`, `react`, `s3-compatible` |
| **Verification** | 7 | Status | `tested`, `community-verified`, `unverified`, `deprecated`, `limited` |

### 4.4 Rating System (`data/ratings.json`)

**7 metrics with weighted formula** (total weight = 6.8):

| # | Metric | Weight | Icon | 1-Poor | 5-Excellent |
|---|---|---|---|---|---|
| 1 | Beginner Friendliness | 1.0 | 🌱 | Requires deep prior knowledge | Exceptional onboarding, interactive tutorials |
| 2 | Documentation Quality | 1.0 | 📖 | No docs or extremely outdated | Interactive examples, video guides, playground |
| 3 | Free Tier Generosity | **1.5** | 🎁 | No free tier or unusable (<10 req) | Can run real product indefinitely |
| 4 | Setup Ease | 0.8 | ⚡ | Complex, days to integrate | Copy-paste, <5 minutes |
| 5 | Reliability | **1.2** | 🔒 | <90% uptime | 99.99%+, multi-region |
| 6 | Performance | 0.8 | 🚀 | Very slow, throttled to unusable | Sub-100ms, global edge |
| 7 | Community | 0.5 | 👥 | No community | Massive, plugins, courses, conferences |

**Formula**: `overall = SUM(score_i × weight_i) / SUM(weight_i)` — rounded to 1 decimal

**Example**: `(5×1.0 + 4×1.0 + 5×1.5 + 5×0.8 + 4×1.2 + 4×0.8 + 3×0.5) / 6.8 = 4.4`

**6 Performance Tiers**:

| Tier | Range | Color | Description |
|---|---|---|---|
| 🏆 Elite | 4.5 – 5.0 | `#FFD700` | Best-in-class |
| ⭐ Excellent | 4.0 – 4.4 | `#1DB954` | Highly recommended |
| ✅ Good | 3.0 – 3.9 | `#58A6FF` | Solid choice |
| 🟡 Fair | 2.0 – 2.9 | `#F0883E` | Notable limitations |
| 🔴 Limited | 1.0 – 1.9 | `#F85149` | Use with caution |
| ⚠ Insufficient | 0.0 – 0.9 | `#8B0000` | Below minimum bar |

**Aggregate**: Mean of all resource scores within a group, rounded to 1 decimal.

### 4.5 Ranking System (`data/rankings.json`)

**4-factor composite score**:

| Factor | Weight | Max | Source | Refresh |
|---|---|---|---|---|
| 👍 Community Votes | 25% | 5 | GitHub Discussions poll reactions | Monthly |
| 📈 Popularity | 20% | 5 | GitHub stars, npm downloads, web traffic | Quarterly |
| 🔍 Maintainer Score | 30% | 5 | Maintainer review board (3+ reviews avg) | Quarterly |
| 🎁 Free Tier Quality | 25% | 5 | From `resources.json` → `ratings.free_generosity` | Monthly |

**Formula**: `composite = SUM(factor_score × weight) / SUM(weights)`
**Tiebreaker**: `free_quality` → `maintainer_score` → `community_votes`
**Minimum**: 5 entries required to publish a category ranking
**Badges**: 🥇 (rank 1), 🥈 (rank 2), 🥉 (rank 3), 🏅 (top 10%)

**Published rankings**: AI (3 entries), Databases (3 entries), Hosting (3 entries)

**Eligible categories** (all 20): All are eligible; only those with 5+ entries are published.

### 4.6 Badge System (`data/badges.json`)

10 badges across 6 categories:

| Badge | Icon | Category | Validity | Expiry Action |
|---|---|---|---|---|
| Tested | ✅ | Verification | 6 months | Downgrade to Community Verified |
| Community Verified | 🟡 | Verification | 3 months | Downgrade to Unverified |
| Unverified | 🔴 | Verification | 30 days | Warning if >90 days unverified |
| Deprecated | ⚠️ | Status | Permanent | Move to `deprecated/` |
| Archived | 🗄️ | Status | Permanent | Historical record |
| Student Friendly | 🎓 | Audience | 12 months | Re-verify benefit |
| India Friendly | 🇮🇳 | Region | 12 months | Re-verify availability |
| Top Rated | 🏆 | Achievement | 3 months | Re-calculate from ratings |
| No Card Required | 💳 | Pricing | 6 months | Re-test signup flow |
| Global | 🌍 | Region | 12 months | Check sanctions list |

### 4.7 Deprecated Entry Model (`data/deprecated.json` + `data/deprecated-schema.json`)

**7 reason categories**: `free-tier-removed`, `service-shut-down`, `unmaintained`, `acquired`, `paywalled`, `degraded`, `superseded`

**4 status types**: `deprecated` (free tier gone, service exists), `archived` (shut down), `unmaintained` (no updates), `dead` (completely defunct)

**12 entries currently tracked**: Heroku, Replit, Glitch, CodeSandbox, Algolia, Auth0, npm, Oracle Cloud VPS, Parse Server, Pusher Chatkit, Babel, Imgix

Each entry has: `id`, `name`, `website`, `category`, `reason` (primary + detail), `deprecated_on`, `last_verified`, `status`, `migration[]` (alternative_name, alternative_url, notes), `notes`.

---

## 5. Automation Workflows (`.github/workflows/`)

6 workflows, all enabling `workflow_dispatch` for manual trigger. All use `ubuntu-latest` runner.

### 5.1 `check-links.yml` — Check Dead Links

| Property | Value |
|---|---|
| **Trigger** | Monthly (cron: `0 0 1 * *`) + `workflow_dispatch` |
| **Permissions** | `issues: write` |
| **Tool** | `lycheeverse/lychee-action@v1` |
| **Config** | `.lychee.toml` |
| **Output** | `lychee-report.md` |
| **On failure** | Creates issue: title `🔗 Broken links detected`, labels `bug`, `automated` |

### 5.2 `validate-json.yml` — Validate JSON

| Property | Value |
|---|---|
| **Trigger** | PR/push to `data/*.json`, push to main + `workflow_dispatch` |
| **Steps** | 1. Checkout `@v4` 2. Setup Node 20 3. `npm install -g ajv-cli ajv-formats` 4. Validate resources.json against schema (`--strict=true --all-errors`) 5. Syntax-check all `data/*.json` 6. Validate category consistency against taxonomy.json 7. Validate tag references against tags.json |

### 5.3 `monthly-verification.yml` — Monthly Verification Report

| Property | Value |
|---|---|
| **Trigger** | Monthly (cron: `0 6 1 * *`) + `workflow_dispatch` |
| **Permissions** | `issues: write`, `contents: read` |
| **Logic** | Compares `last_verified` dates against current date: expired (>6 months), expiring (3-6 months) |
| **Output** | Issue: title `🧪 Monthly Verification Report`, labels `maintenance`, `automated` |

### 5.4 `update-readme.yml` — Update README Stats

| Property | Value |
|---|---|
| **Trigger** | Monthly (cron: `0 2 1 * *`) + `workflow_dispatch` |
| **Permissions** | `contents: write`, `pull-requests: write` |
| **Logic** | Computes totals, by-category counts, verification stats, no-card count, student-friendly, global, open-source, top-rated |
| **Output** | PR via `peter-evans/create-pull-request@v6`: branch `stats/readme-update`, labels `automated` |

### 5.5 `generate-stats.yml` — Generate Stats

| Property | Value |
|---|---|
| **Trigger** | Monthly (cron: `0 4 1 * *`) + `workflow_dispatch` |
| **Permissions** | `contents: write` |
| **Logic** | Computes breakdowns: by_category, by_verification, by_status, by_card_requirement, by_region, by_student_benefits, by_rating. Extracts top 30 tags. |
| **Output** | Commits `data/stats.json` directly with message `chore: update stats [skip ci]` |

### 5.6 `detect-broken-resources.yml` — Detect Broken Resources

| Property | Value |
|---|---|
| **Trigger** | Bi-weekly (cron: `0 8 1,15 * *`) + `workflow_dispatch` |
| **Permissions** | `issues: write`, `contents: read` |
| **Logic** | HTTP(S) GET to every `website`, `docs`, `github` URL in `resources.json`. 10s timeout. User-Agent set. Categorizes as ok (2xx), redirected (3xx), broken (4xx+), error, timeout, invalid. |
| **Output** | Issue if broken found: title `🔴 Broken Resources Detected`, labels `bug`, `maintenance`, `automated` |

---

## 6. Community System

### 6.1 Issue Templates (`.github/ISSUE_TEMPLATE/`)

4 YAML-based forms:

| Template | Fields | Labels |
|---|---|---|
| `add-resource.yml` | Tool Name, Website, Category (20-option dropdown), Description, Free Tier, Paid Plan, Card Required (Y/N), Verification checkboxes (4), Notes | `resource`, `new-submission` |
| `report-broken-tool.yml` | Tool Name, File Path, Issue Type (7 options: dead-link, free-tier-removed, shut-down, card-required, region-changed, student-benefits-gone, outdated, other), Details, Source/Evidence, Confirmation checkbox | `bug`, `maintenance` |
| `suggest-category.yml` | Category Name, Type (top-level/subcategory), Parent (if subcategory), Rationale, Example Resources, Research checkbox | `enhancement`, `taxonomy` |
| `feature-request.yml` | Area (8 options: structure, automation, tooling, website, docs, contribution, community, other), Problem, Solution, Alternatives, Duplicate check | `enhancement` |

### 6.2 Discussion Templates (`.github/DISCUSSION_TEMPLATE/`)

6 markdown templates:

| Template | Sections |
|---|---|
| `ideas.md` | Description, Why This Matters, Implementation Thoughts, Related |
| `tool-requests.md` | Tool Name, Website, Category, Why It Belongs, Free Tier Details, Paid Plan, Why Better Than Listed, Verification checkboxes (3) |
| `comparisons.md` | Tools Being Compared, Comparison Criteria, Your Experience, Free Tier Comparison (table), Verdict |
| `monthly-highlights.md` | Month, Top Additions (Best New Resource + Runner-Up), Trending Discussions, Community Highlights, By the Numbers |
| `support.md` | Summary, Resource, What I've Tried, Question, Additional Context |
| `voting.md` | Topic, Nominees, Voting Criteria, How to Vote, Results |

### 6.3 PR Template (`.github/PULL_REQUEST_TEMPLATE.md`)

Checklist-based template with 3 sections:
- **Submission**: CONTRIBUTING read, template used, no duplicate, meaningful free tier, valid category
- **Content**: Clear description, specific limits, card requirement disclosed, valid tags, working URLs
- **Verification**: Personally tested, tool active, region restrictions documented, student benefits documented

### 6.4 Resource Template (`.github/resource-template.md`)

Complete template with all fields, quick-reference table showing required/optional per field, and submission workflow reference.

### 6.5 Recognition System

Active community members earn badges:
- 🏅 **Top Voter** — Most votes cast in a quarter
- ⭐ **Helpful Member** — Frequently provides accurate answers
- 🔍 **Bug Hunter** — Reports broken tools with verified evidence

---

## 7. Category Taxonomy (Full)

20 categories, 135 subcategories total. See `CATEGORIES.md` and `data/taxonomy.json`.

| # | Category | Icon | Subcategories |
|---|---|---|---|
| 1 | AI | 🤖 | APIs, Models, Agents, RAG, Embeddings, Image Generation, Video Generation, Speech, Vector Databases, ML Platforms, Prompt Tools |
| 2 | Deployment | 🚀 | Serverless, Containers, PaaS, Edge Functions, Platform Orchestration, BaaS |
| 3 | Cloud | ☁️ | Compute, Serverless Compute, Cloud Storage, Networking, CDN, Cloud Functions, Free Tier |
| 4 | Hosting | 🌐 | Static Sites, VPS, Web Servers, DNS, SSL Certificates, Reverse Proxy |
| 5 | Databases | 🗄️ | SQL, NoSQL, Managed Databases, Caching, Vector Databases, Graph Databases, Time Series, Backend Platforms |
| 6 | Storage | 💾 | Object Storage, File Hosting, CDN Storage, Backup, Image Optimization |
| 7 | Auth | 🔐 | Authentication, SSO, MFA, User Management, Authorization, Passwordless, Social Login |
| 8 | Payments | 💳 | Payment Processing, Invoicing, Subscription Management, Checkout, Fraud Detection, Payouts |
| 9 | Email & SMS | 📧 | Transactional Email, Email Marketing, Email API, SMS, Push Notifications, Multi-Channel |
| 10 | Monitoring | 📊 | APM, Log Management, Uptime Monitoring, Error Tracking, Real User Monitoring, Infrastructure Monitoring, Synthetic Monitoring |
| 11 | CI/CD | 🔄 | Pipelines, Build Automation, Artifact Hosting, Testing Automation, Code Quality, Deployment Automation |
| 12 | DevTools | 🛠️ | Code Editors, Version Control, CLI Tools, API Tools, Package Managers, Browser DevTools, Code Generation, Collaboration |
| 13 | Design | 🎨 | UI Kits, Icons, Illustrations, Prototyping, Design Systems, Color Tools, Typography, Mockups, Screenshot Tools |
| 14 | Domains | 🔗 | Free Domains, Subdomains, DNS Management, Domain Forwarding, Dynamic DNS |
| 15 | Testing | 🧪 | Unit Testing, E2E Testing, API Testing, Load Testing, Browser Testing, Test Management, Visual Regression |
| 16 | Mobile | 📱 | Mobile SDKs, Push Notifications, App Hosting, App Builders, Deep Linking, App Testing, App Analytics |
| 17 | Learning | 📚 | Platforms, Courses, Certifications, Interactive Tutorials, Coding Challenges, Documentation, Newsletters, Podcasts |
| 18 | Student Packs | 🎓 | GitHub Student Pack, Cloud Credits, IDE Licenses, Learning Platforms, Design Tools, Domain Benefits |
| 19 | Startup Credits | 🏢 | Cloud Programs, SaaS Programs, Incubators, Founder Perks, Open Source Grants |
| 20 | Open Source | 🌍 | Self-Hostable, Libraries, Community Editions, Templates, Boilerplates |

---

## 8. Content Layer Details

### 8.1 Student Packs (`categories/student-packs/`)

9 files providing $5,000+/year in free tools for verified students:

| File | Tool | Value | Verification |
|---|---|---|---|
| `github-student-pack.md` | GitHub Student Pack | $200k+ | .edu / ISIC / SheerID |
| `aws-educate.md` | AWS Educate | $110 credits | .edu / ISIC |
| `azure-for-students.md` | Azure for Students | $100 credits | .edu |
| `google-cloud-for-students.md` | Google Cloud for Students | $300 credits | .edu |
| `figma-education.md` | Figma Education | Free Pro ($144/yr) | .edu / SSO / ISIC |
| `notion-education.md` | Notion Education | Free Plus ($120/yr) | .edu |
| `jetbrains-student.md` | JetBrains Student | $649/yr | .edu / ISIC / docs |
| `verification-guide.md` | Verification Guide | 5 methods, 15+ platforms | Reference |
| `benefits-overview.md` | Benefits overview | All benefits combined | Reference |

**Verification methods** (from verification-guide.md):
1. `.edu` email (fastest, most platforms)
2. ISIC card (~$25, accepted by 6+ platforms)
3. Enrollment documentation (certificate, schedule, tuition receipt, ID, transcript)
4. SSO (Microsoft/Google for Education — GitHub, GCP, Azure, Figma)
5. SheerID (third-party verification — GitHub, Figma, Canva)

### 8.2 Startup Credits (`categories/startup-credits/`)

5 files tracking $600,000+ in available credits:

| File | Focus | Max Credits |
|---|---|---|
| `cloud-credits.md` | AWS Activate ($100k), GCP Startup ($200k), Azure for Startups ($150k), Oracle ($10k) | $450k+ |
| `ai-credits.md` | OpenAI ($5k+), Anthropic ($5k), Vertex ($2k+), Cohere ($1k), DeepSeek, Groq, Together | $16k+ |
| `hosting-credits.md` | Vercel ($240/yr), Cloudflare ($240/yr), Netlify ($180/yr), DigitalOcean ($100), Railway, Fly.io | $1k+ |
| `accelerator-programs.md` | YC ($500k+deal), Techstars ($120k), 500 Global ($150k), Seedcamp, Entrepreneur First, no-equity options | $2M+ |
| `startup-support.md` | Stripe ($20k waived), Notion ($240/seat), Figma ($360), Linear ($468), Intercom ($3.6k), HubSpot ($4.5k) | $40k+ |

### 8.3 Alternatives (`alternatives/`)

5 files, 80+ paid-to-free swaps across 12 categories:

| File | Paid Tools Replaced | Free Alternatives | Swaps |
|---|---|---|---|
| `index.md` | Notion, Confluence, Miro, Linear, Jira, Firebase, Vercel, AWS, Heroku, ChatGPT, Midjourney, Copilot, MongoDB, Redis, Snowflake, Dropbox, Datadog, New Relic, Splunk, Auth0, Okta, SendGrid, Mailchimp, Figma Pro, Canva Pro, etc. | AppFlowy, Supabase, Gemini, Vercel free, Grafana, Clerk, Resend, Cloudflare R2, FreeCodeCamp, etc. | 80+ |
| `notion.md` | Notion paid | AppFlowy, Outline, Anytype, SiYuan | 4 |
| `firebase.md` | Firebase | Supabase, Appwrite, PocketBase, Nhost | 4 |
| `chatgpt.md` | ChatGPT Plus | Gemini, DeepSeek, Claude, Groq, Perplexity | 5 |
| `vercel.md` | Vercel paid | Cloudflare Pages, Netlify, Render | 3 |

### 8.4 Build Recipes (`recipes/`)

7 recipes, each with specific ₹0/month stack:

| Recipe | Stack | Key Free Tools |
|---|---|---|
| Build a SaaS | Next.js + Supabase + Vercel + Resend | Vercel Free (100GB), Supabase Free (500MB PG, 50k MAU), Resend (100/day) |
| Build an AI App | Groq + pgvector + Vercel AI SDK + Clerk | Groq (30 req/min), Clerk (10k MAU), Vercel AI SDK, Supabase pgvector |
| Build a Startup MVP | Next.js + Supabase + Stripe + Sentry | Same as SaaS + Stripe (per-transaction), Sentry Free |
| Build a Portfolio | Astro + Cloudflare Pages + Umami | Cloudflare Pages (unlimited bandwidth), Umami (self-host) |
| Build a Mobile App | Expo + Supabase + EAS + PostHog | Expo (free build), EAS (30 builds/mo), PostHog (1M events) |
| Build a Docs Site | Next.js + MDX + Meilisearch + Clerk | Meilisearch Cloud (10k docs), Clerk Auth |
| Build File Sharing | Next.js + R2 + Supabase + Resend | Cloudflare R2 (10GB), Supabase Storage (2GB) |

### 8.5 Learning Paths (`learning-paths/`)

7 paths, each with phases, tools, platforms, and build projects:

| Path | Duration | From → To |
|---|---|---|
| Frontend | 16 weeks | HTML/CSS → Deployed Next.js |
| Backend | 14 weeks | Node.js/Python → Dockerized API |
| Full Stack | 18 weeks | JavaScript → Full-stack SaaS |
| AI Engineer | 16 weeks | Python → RAG + LangChain |
| DevOps | 20 weeks | Linux → K8s → Terraform |
| Mobile | 16 weeks | Expo → Published app |
| Indie Hacker | 10 weeks | Idea → First dollar |

### 8.6 Deprecated Tracking (`deprecated/`)

12 entries across 4 files:

| File | Count | Status | Examples |
|---|---|---|---|
| `deprecated.md` | 11 | ⚠️ Deprecated | Heroku, Replit, Glitch, Auth0, Algolia, CodeSandbox, npm, Oracle VPS, Babel, Imgix |
| `archived.md` | 1 | 🗄️ Archived | Parse.com |
| `unmaintained.md` | 0 (template) | 🔧 Unmaintained | — |
| `dead-projects.md` | 1 | 💀 Dead | Pusher Chatkit |

### 8.7 Rankings (`rankings/`)

3 published rankings with composite scores:

| Ranking | #1 | #2 | #3 |
|---|---|---|---|
| Best Free AI Tools 2026 | Gemini API (4.7) | Groq API (4.5) | DeepSeek API (4.3) |
| Best Free Databases 2026 | Supabase (4.8) | Neon (4.5) | MongoDB Atlas (4.2) |
| Best Free Hosting 2026 | Vercel (4.7) | Cloudflare Pages (4.6) | Netlify (4.2) |

---

## 9. Current Repository Status

### 9.1 What Exists

| Component | Status | Details |
|---|---|---|
| README.md | ✅ Comprehensive | SEO-optimized with stats, architecture, features, badges |
| CATEGORIES.md | ✅ Complete | 20 categories, 135 subcategories |
| CONTRIBUTING.md | ✅ Complete | Resource requirements, style guide, review process |
| CODE_OF_CONDUCT.md | ✅ Complete | Contributor Covenant v2.1 |
| DISCUSSIONS.md | ✅ Complete | 6 categories, guidelines, voting, recognition |
| data/*.json | ✅ 9 files, 2 schemas | Full data layer with validation |
| .github/workflows/ | ✅ 6 workflows | All automation operational |
| .github/ISSUE_TEMPLATE/ | ✅ 4 templates | All YAML forms |
| .github/DISCUSSION_TEMPLATE/ | ✅ 6 templates | All markdown templates |
| .github/PULL_REQUEST_TEMPLATE.md | ✅ Complete | Checklist-based |
| .github/resource-template.md | ✅ Complete | Full template + quick reference |
| categories/student-packs/ | ✅ 9 files | 7 guides + verification + overview |
| categories/startup-credits/ | ✅ 5 files | Cloud, AI, hosting, accelerators, SaaS support |
| alternatives/ | ✅ 5 files, 80+ swaps | index + 4 detailed files |
| recipes/ | ✅ 7 recipes | All zero-budget stacks |
| learning-paths/ | ✅ 7 paths | All developer roles covered |
| rankings/ | ✅ 3 rankings | AI, databases, hosting |
| deprecated/ | ✅ 4 files | 12 entries tracked |
| SEO Keywords | ✅ 21 keywords | Full SEO keyword list |

### 9.2 What Is Empty / Needs Content

| File / Directory | Status | Notes |
|---|---|---|
| `LICENSE` | ❌ Empty (0 lines) | No license selected |
| `ROADMAP.md` | ❌ Empty (0 lines) | No roadmap defined |
| `CHANGELOG.md` | ❌ Empty (0 lines) | No change history |
| `FAQ.md` | ❌ Empty (0 lines) | No FAQ content |
| `categories/ai/` | ❌ .gitkeep only | No resource files created |
| `categories/deployment/` | ❌ .gitkeep only | No resource files created |
| `categories/cloud/` | ❌ .gitkeep only | No resource files created |
| `categories/hosting/` | ❌ .gitkeep only | No resource files created |
| `categories/databases/` | ❌ .gitkeep only | No resource files created |
| `categories/storage/` | ❌ .gitkeep only | No resource files created |
| `categories/auth/` | ❌ .gitkeep only | No resource files created |
| `categories/payments/` | ❌ .gitkeep only | No resource files created |
| `categories/email-sms/` | ❌ .gitkeep only | No resource files created |
| `categories/monitoring/` | ❌ .gitkeep only | No resource files created |
| `categories/ci-cd/` | ❌ .gitkeep only | No resource files created |
| `categories/devtools/` | ❌ .gitkeep only | No resource files created |
| `categories/design/` | ❌ .gitkeep only | No resource files created |
| `categories/domains/` | ❌ .gitkeep only | No resource files created |
| `categories/testing/` | ❌ .gitkeep only | No resource files created |
| `categories/mobile/` | ❌ .gitkeep only | No resource files created |
| `categories/learning/` | ❌ .gitkeep only | No resource files created |
| `categories/open-source/` | ❌ .gitkeep only | No resource files created |
| `data/stats.json` | ❌ Not generated | Auto-generated by generate-stats.yml workflow |
| `data/*.json` files | ⚠️ Minimal | resources.json has only 4 example entries |
| `deprecated/unmaintained.md` | ⚠️ Template only | Format defined, no entries yet |

### 9.3 Known Gaps for Future Work

1. **Populate all 20 categories** with real resource markdown files
2. **Fill LICENSE, ROADMAP, CHANGELOG, FAQ**
3. **Add more entries to `data/resources.json`** (currently only 4 examples)
4. **Generate `data/stats.json`** (workflow will auto-create)
5. **Publish more rankings** (monitoring, auth, payments, CI/CD, etc.)
6. **Add unmaintained entries** to `deprecated/unmaintained.md`
7. **Build a website** from the JSON data layer
8. **Expand deprecated tracking** with community-sourced reports
9. **Add more alternative mappings** (databases, monitoring, CI/CD deep dives)
10. **Add more build recipes** (currently 7)

---

## 10. Constraints & Coding Conventions

### 10.1 Naming Conventions

| Entity | Convention | Example |
|---|---|---|
| File names (markdown) | kebab-case | `build-saas-with-zero-budget.md` |
| File names (YAML) | kebab-case | `detect-broken-resources.yml` |
| IDs (resources, categories, tags) | kebab-case | `openai-api`, `vector-databases` |
| Slugs (resources) | kebab-case | `openai-api`, `gemini-api` |
| Tool names (display) | Sentence case | Supabase, not SUPABASE |

### 10.2 Content Conventions

| Rule | Requirement |
|---|---|
| Description length | Max 200 characters |
| Free tier details | Specific numbers, not vague terms |
| Internal links | Relative paths |
| Tags | Must reference approved list in `data/tags.json` |
| Categories | Must exist in `data/taxonomy.json` |
| Date format | ISO 8601 (`2026-05-24`) |
| Rating values | Integers 1-5 |
| Country codes | ISO 3166-1 alpha-2 |
| Language codes | ISO 639-1 |
| GitHub URLs | Must match `^https://github\\.com/` |

### 10.3 Automation Constraints

| Rule | Requirement |
|---|---|
| Runner | `ubuntu-latest` |
| Checkout | `actions/checkout@v4` |
| Node setup | `actions/setup-node@v4` |
| Node version | 20 |
| JSON validation | `ajv-cli` + `ajv-formats` with `--strict=true --all-errors` |
| Link checking | `lychee` with config file |
| PR creation | `peter-evans/create-pull-request@v6` |
| Issue creation | `actions/github-script@v7` |
| Workflow permissions | `contents: write`, `issues: write`, `pull-requests: write` |
| Manual trigger | `workflow_dispatch` enabled on all workflows |

### 10.4 Submission Acceptance Criteria

| Criterion | Required |
|---|---|
| Meaningful free tier | ✅ (no trial-only) |
| Active service | ✅ (no abandoned projects) |
| Accurate free tier details | ✅ (verified before submission) |
| Card requirement disclosed | ✅ |
| Category matches taxonomy | ✅ (20 allowed values) |
| No duplicate | ✅ |
| Description under 200 chars | ✅ |
| Specific numeric limits | ✅ |
| Valid tags | ✅ (from `data/tags.json`) |

### 10.5 What Is NOT Accepted

- Services requiring card for time-limited trial only
- Tools with no meaningful free tier (<100 requests or 24h trial)
- Dead or abandoned projects
- Pirated software or cracked tools
- Affiliate links or referral rewards
- Adult content or crypto/blockchain speculation tools

---

## 11. Key File Relationships

```
resources.json ────────────────────────── resources-schema.json (draft-07)
     │                                         │
     ├── taxonomy.json (category validation)   │
     ├── tags.json (tag validation)            │
     ├── ratings.json (score computation)      │
     └── rankings.json (composite scoring)     │
                                               │
deprecated.json ────────────────────── deprecated-schema.json
                                               │
.github/workflows/ ──── data/*.json (validation, stats, URL checks)
.github/ISSUE_TEMPLATE/ ──── CONTRIBUTING.md (submission workflow)
.github/DISCUSSION_TEMPLATE/ ──── DISCUSSIONS.md (community guidelines)
.github/PULL_REQUEST_TEMPLATE.md ──── .github/resource-template.md

categories/<category>/*.md ──── data/resources.json (dual format sync)
README.md ──── data/stats.json (auto-updated stats section)
rankings/*.md ──── data/rankings.json (published from raw data)
deprecated/*.md ──── data/deprecated.json (published from raw data)
```

---

## 12. Quick Reference for AI Tools

When working with this repository:

| Action | Reference |
|---|---|
| **Add a resource** | Use `.github/resource-template.md`, place in `categories/<category>/`, add to `data/resources.json` |
| **Validate data** | `ajv validate -s data/resources-schema.json -d data/resources.json` |
| **Find categories** | `data/taxonomy.json` (20 categories, 135 subcategories) |
| **Find tags** | `data/tags.json` (155 tags in 6 groups) |
| **Score ratings** | `data/ratings.json` (7 metrics, weighted formula, 6 tiers) |
| **Compute rankings** | `data/rankings.json` (4 factors, composite formula) |
| **Deprecate a tool** | Move entry to `deprecated/`, add to `data/deprecated.json` |
| **Apply badges** | `data/badges.json` (10 badges with validity tracking) |
| **SEO** | Embed keywords naturally; maintain README footer keywords |
| **Directory naming** | Always kebab-case, descriptive, lowercase |
| **Internal links** | Always relative paths |
| **Dates** | ISO 8601 format (`2026-05-24`) |

---

## 13. All Resources Currently in Data Layer

From `data/resources.json` (4 entries):
1. **OpenAI API** (ai/models) — $5 free credit, 10k TPM, card required, overall 4.3
2. **Supabase** (databases/backend-platform) — 500 MB PG, 2 GB storage, 50k MAUs, no card, overall 4.7
3. **Vercel** (hosting/static-sites) — 100 GB bandwidth, 6k build min, no card, overall 4.9
4. **Stripe** (payments/payment-processing) — 2.9% + $0.30/charge, no card, overall 4.5

All are marked `tested`, `active`, and verified `2026-05`.

---

## 14. All Deprecated Entries (Current)

From `data/deprecated.json` (12 entries):

| Entry | Category | Status | Reason | Migrate To |
|---|---|---|---|---|
| Heroku | hosting | deprecated | free-tier-removed (2022-11) | Render, Railway, Fly.io |
| Replit | devtools | deprecated | free-tier-removed (2024-05) | GitHub Codespaces, GitPod |
| Glitch | hosting | deprecated | free-tier-removed (2023-03) | Vercel, Render |
| CodeSandbox | devtools | deprecated | free-tier-removed (2024-01) | StackBlitz, GitHub Codespaces |
| Algolia | devtools | deprecated | free-tier-removed (2024-06) | Meilisearch, Typesense |
| Auth0 | auth | deprecated | free-tier-removed (2024-03) | Clerk, Supabase Auth |
| npm | devtools | deprecated | free-tier-removed (2024-04) | GitHub Packages, JSR |
| Oracle Cloud VPS | cloud | deprecated | degraded (2025-09) | GCP Free Tier, AWS Free Tier |
| Parse Server | backend (sic) | archived | service-shut-down (2017-01) | Supabase, Appwrite, Parse Self-Host |
| Pusher Chatkit | mobile | dead | service-shut-down (2021-07) | Supabase Realtime, Stream Chat |
| Babel (CI) | ci-cd | deprecated | free-tier-removed (2024-02) | GitHub Actions, SWC |
| Imgix | storage | deprecated | free-tier-removed (2024-08) | Cloudinary, Cloudflare Images |

---

## 15. All Published Rankings

From `data/rankings.json`:

### AI Tools: 1. Gemini (4.7), 2. Groq (4.5), 3. DeepSeek (4.3), 4. OpenAI (4.0), 5. Hugging Face (3.9)
### Databases: 1. Supabase (4.8), 2. Neon (4.5), 3. MongoDB Atlas (4.2), 4. Appwrite (4.0), 5. PlanetScale (3.5)
### Hosting: 1. Vercel (4.7), 2. Cloudflare Pages (4.6), 3. Netlify (4.2), 4. Render (3.8), 5. Railway (3.6)

All eligible categories: 20. Published (have entries): 3.

---

## 16. Git History Summary

**Recent commit context** (most recent ~50 commits):
- Repository structure: `data/` (9 JSON files + 2 schemas), `.github/` (6 workflows, 4 issues, 6 discussions), `categories/` (20 folders), `alternatives/` (5 files), `recipes/` (7), `learning-paths/` (7), `rankings/` (3), `deprecated/` (4)
- Documentation: README (multiple overhauls), CATEGORIES.md, DISCUSSIONS.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, PROJECT_CONTEXT.md
- SEO: Keywords list (21), repository topics (14)
- Deprecation: Full tracking system with schemas, JSON, and markdown layers
- Community: All issue/discussion/PR templates
- Last commit: README overhaul with architecture, features, stats, badges, rankings
