# Repository Standards — awesome-free-stack

> **Version**: 1.0.0 | **Last updated**: 2026-05-24 | **Applies globally**: all categories, data files, and submissions

---

## 1. Inclusion & Exclusion Rules

### 1.1 What We Include

| Type | Example | Accepted? | Notes |
|---|---|---|---|
| **Free tier** | Supabase (500 MB PG free) | ✅ | Must have a meaningful permanent free tier |
| **Freemium** | Vercel (free tier + Pro upgrade) | ✅ | Free tier must be usable without paying |
| **Free trial** | Any new SaaS trial | ✅ | Minimum 14-day trial with no card required OR 30-day trial with card |
| **Open source self-hostable** | Appwrite, Cal.com | ✅ | Must be actively maintained or have stable release |
| **Student programs** | GitHub Student Pack | ✅ | Must provide verified benefit beyond regular free tier |
| **Startup credits** | AWS Activate ($100k) | ✅ | Must be currently accepting applications |
| **Forever-free tools** | Cloudflare R2 (10 GB) | ✅ | No paid tier required |
| **Community editions** | GitLab CE, Sentry self-hosted | ✅ | Must be a genuine free edition, not a crippled trial |
| **APIs with free quota** | Groq API (30 req/min) | ✅ | Rate-limited free tiers are accepted if usable |

### 1.2 What We Exclude

| Type | Example | Rejected? | Rationale |
|---|---|---|---|
| **Dead projects** | Parse.com hosted | ❌ | Redirected to deprecated/ only |
| **Scam tools** | Fake ChatGPT wrappers, data harvesters | ❌ | Zero tolerance |
| **Unmaintained OSS** | Abandoned GitHub repos (>2 yrs) | ❌ | Move to deprecated/unmaintained.md instead |
| **Card-only trials** | Tools requiring card for <14 day trial | ❌ | Not a real free tier |
| **Pirated/cracked** | Nulled scripts, warez | ❌ | Illegal |
| **Affiliate content** | "Free" tools that are affiliate landing pages | ❌ | No value-add |
| **Crypto speculation** | Trading bots, mining tools | ❌ | Outside scope |
| **Adult content** | NSFW APIs or tools | ❌ | Outside scope |
| **No meaningful free tier** | <100 API requests/month, <24h trial | ❌ | Not useful |
| **Paid-only tools** | No free tier at all | ❌ | Wrong repo |

### 1.3 Grace Period for Deprecated Tools

When a tool removes its free tier:
1. Mark as `status: deprecated` in `data/resources.json`
2. Move entry to `data/deprecated.json` with migration paths
3. After 30 days, move markdown to `deprecated/` folder
4. After 90 days, remove from `resources.json` entirely

---

## 2. Resource Field Standards

Every resource MUST have all 16 fields below. Fields marked **MUST** are required. Fields marked **SHOULD** are strongly recommended.

### 2.1 Name (MUST)

| Rule | Standard |
|---|---|
| Format | Sentence case |
| Examples | `Supabase`, `OpenAI API`, `GitHub Actions` |
| Max length | 64 characters |
| No | ALL CAPS, brand violations, marketing slogans |

### 2.2 Description (MUST)

| Rule | Standard |
|---|---|
| Length | 1-3 sentences, max 200 characters |
| Content | What it does + who it's for + key differentiator |
| Examples | `Open-source Firebase alternative. Provides PostgreSQL database, authentication, real-time subscriptions, storage, and Edge Functions in a single platform.` |
| No | Marketing fluff, vague statements, feature lists |

### 2.3 Website (MUST)

| Rule | Standard |
|---|---|
| Format | Full HTTPS URL |
| Example | `https://supabase.com` |
| Validation | Must resolve to active page (checked by CI) |
| No | Referral URLs, `?ref=` parameters, landing pages |

### 2.4 Docs (MUST for APIs/SDKs, SHOULD for others)

| Rule | Standard |
|---|---|
| Format | Full HTTPS URL |
| Example | `https://supabase.com/docs` |
| Fallback | If no dedicated docs, use GitHub README URL |
| No | Generic homepage, login pages |

### 2.5 GitHub (SHOULD for open-source, OPTIONAL for proprietary)

| Rule | Standard |
|---|---|
| Format | Must match `^https://github\\.com/` |
| Example | `https://github.com/supabase/supabase` |
| No | Self-hosted GitLab, non-GitHub repos |

### 2.6 Category (MUST)

| Rule | Standard |
|---|---|
| Values | One of exactly 20 categories from `data/taxonomy.json` |
| Mapping | See [Section 4 — Category Assignment](#4-category-assignment-rules) |
| Validation | CI validates against `taxonomy.json` |
| No | Free-text categories, made-up names |

### 2.7 Subcategory (SHOULD)

| Rule | Standard |
|---|---|
| Values | From `subcategories[]` in `data/taxonomy.json` for the assigned category |
| Example | `ai` category → `models`, `rag`, `image-generation` |
| Multiple | If a tool spans multiple, pick the primary one |
| No | Inventing new subcategories |

### 2.8 Tags (MUST — at least 1, at most 10)

| Rule | Standard |
|---|---|
| Source | Must exist in `data/tags.json` (155 tags in 6 groups) |
| Minimum | 1 tag |
| Maximum | 10 tags |
| Required patterns | See [Section 5 — Tag Assignment Rules](#5-tag-assignment-rules) |
| Validation | CI validates against `tags.json` |

### 2.9 Free Tier (MUST)

| Rule | Standard |
|---|---|
| `summary` | Human-readable. MUST include specific numbers. |
| `limits.requests_per_month` | Integer or `null`. Fill if applicable. |
| `limits.tokens_per_minute` | Integer or `null`. Fill for AI/API tools. |
| `limits.storage_gb` | Number or `null`. Fill for storage/database tools. |
| `limits.seats` | Integer or `null`. Fill for team/collaboration tools. |
| Additional | Add custom fields as needed (bandwidth, users, projects, etc.) |

**Example**:
```json
"free_tier": {
  "summary": "500 MB database, 2 GB storage, 50,000 monthly active users, 2 GB bandwidth",
  "limits": {
    "requests_per_month": null,
    "tokens_per_minute": null,
    "storage_gb": 2,
    "seats": null
  }
}
```

**Numbers required**: Every free tier summary MUST contain at least 2 specific numeric values. "Generous free tier" is not acceptable — write `10,000 requests/month` instead.

### 2.10 Paid Plans (MUST if freemium, OPTIONAL if forever-free)

| Rule | Standard |
|---|---|
| `summary` | Plan name + key upgrade features |
| `starting_price_usd` | Number or `null`. Always in USD. |
| `billing_model` | One of: `subscription`, `usage-based`, `transaction-fee`, `one-time`, `contact-sales` |

**Example**:
```json
"paid_plan": {
  "summary": "Pro — $25/month: 8 GB database, 100 GB storage, 100,000 MAUs",
  "starting_price_usd": 25,
  "billing_model": "subscription"
}
```

### 2.11 Ratings (MUST)

| Metric | Weight | Scale | Guidance |
|---|---|---|---|
| `beginner_friendly` | 1.0 | 1-5 | See `data/ratings.json` scoring rubrics |
| `docs` | 1.0 | 1-5 | See `data/ratings.json` scoring rubrics |
| `free_generosity` | **1.5** | 1-5 | See `data/ratings.json` scoring rubrics |
| `setup` | 0.8 | 1-5 | See `data/ratings.json` scoring rubrics |
| `reliability` | **1.2** | 1-5 | See `data/ratings.json` scoring rubrics |
| `performance` | 0.8 | 1-5 | See `data/ratings.json` scoring rubrics |
| `community` | 0.5 | 1-5 | See `data/ratings.json` scoring rubrics |

**Overall MUST be computed automatically**:
```
overall = SUM(score_i × weight_i) / 6.8
rounded to 1 decimal place
```

**Rating rules**:
- Each dimension is a 1-5 integer (no decimals, no 0)
- NOT all dimensions can be the same value (differentiate)
- NOT all 5s unless truly best-in-class across every dimension
- Overall MUST match the weighted formula output

### 2.12 Verification (MUST)

| Field | Options | Description |
|---|---|---|
| `status` | `tested` / `community-verified` / `unverified` | How verified |
| `verified_by` | string | GitHub handle of the verifier |
| `date` | ISO 8601 (YYYY-MM) | When verified |

**Verification badges** (from `data/badges.json`):
- ✅ **Tested** — Maintainer personally confirmed. Valid for 6 months.
- 🟡 **Community Verified** — 3+ community reports. Valid for 3 months.
- 🔴 **Unverified** — Submitted, not confirmed. Expires in 30 days.
- ⚠️ **Deprecated** — Free tier removed. Permanent.
- 💳 **No Card Required** — Signup completed without card. Valid for 6 months.

### 2.13 Status (MUST)

| Value | Meaning |
|---|---|
| `active` | Free tier is currently available and working |
| `deprecated` | Free tier has been removed or reduced to unusable |
| `limited` | Free tier is still available but severely restricted |

### 2.14 Region Restrictions (MUST)

| Field | Standard |
|---|---|
| `global` | `true` if available worldwide; `false` if any country blocked |
| `restricted_countries` | ISO 3166-1 alpha-2 codes (e.g., `CN`, `RU`, `IR`) |
| `notes` | Human-readable region notes |

### 2.15 Student Benefits (MUST)

| Field | Standard |
|---|---|
| `available` | Boolean. `true` if student verification unlocks more features/quota |
| `details` | What the student benefit is |
| `verification_method` | One of: `edu-email`, `github-education`, `iscard`, `sheerid`, `id-card`, `null` |

**When to mark `available: true`**:
- Tool has a dedicated student program (e.g., GitHub Student Pack partners)
- Tool offers enhanced quota with `.edu` email
- Tool is included in a student pack as a benefit

### 2.16 Requires Card (MUST)

| Value | Meaning |
|---|---|
| `true` | Credit/debit card required to sign up for free tier |
| `false` | No card required; email-only signup works |

### 2.17 Alternatives (SHOULD)

| Field | Standard |
|---|---|
| `alternatives_to` | Array of paid tool names this replaces (e.g., `["firebase"]`) |
| `alternatives` | Array of `resources.json` slugs for related free tools |

### 2.18 Last Verified (MUST)

| Rule | Standard |
|---|---|
| Format | ISO 8601: `YYYY-MM-DD` |
| Example | `2026-05-24` |
| Meaning | Date the free tier was last confirmed working |
| Automation | Flagged by `monthly-verification.yml` if >6 months old |

---

## 3. Tag Assignment Rules

Every resource MUST use tags from `data/tags.json` (155 tags, 6 groups). Follow these rules:

### 3.1 Required Tags by Group

| Group | Must Include | When |
|---|---|---|
| **Global** | At least 1 | Always |
| **Category** | At least 1 matching the resource's category | Always |
| **Pricing** | At least 1 | Always |
| **Region** | At least 1 | Always |
| **Compatibility** | As appropriate | When applicable |
| **Verification** | At least 1 matching verification status | Always |

### 3.2 Minimum Tag Set

Every resource MUST have at minimum these 4 tags:
1. One **Global** tag: `open-source`, `self-hosted`, `saas`, `api`, `sdk`, `cli`, etc.
2. One **Category** tag matching the resource category (e.g., `ai` for AI tools, `database` for databases)
3. One **Pricing** tag: `free-tier`, `freemium`, `trial`, `no-card`, `card-required`, `forever-free`, `generous-free-tier`
4. One **Verification** tag: `tested`, `community-verified`, or `unverified`

### 3.3 Tag Selection Guidance

| Scenario | Recommended Tags |
|---|---|
| Open-source tool | `open-source`, `self-hosted`, `community` |
| SaaS with free tier | `saas`, `free-tier`, `freemium`, `no-card` |
| API-first product | `api`, `rest`, `sdk` + language tags |
| No card required | `no-card`, `free-tier` |
| Student only | `student`, `free-for-students` |
| India-available | `india-friendly`, `global` |
| Supports multiple languages | `javascript`, `python`, `typescript`, `go`, etc. |

### 3.4 Tags That Do Not Exist Yet

If a needed tag is missing from `data/tags.json`:
1. Open a **suggest-category** issue proposing the new tag
2. Do NOT use non-existent tags in resources (CI will reject)
3. Wait for maintainer approval before using new tag

---

## 4. Category Assignment Rules

### 4.1 Primary Category Selection

Each resource belongs to exactly ONE of 20 categories. Use this decision tree:

```
Is the tool primarily an AI service?
  ├── Yes → ai/
  ├── No → Is it a deployment platform?
  │   ├── Yes → deployment/
  │   ├── No → Is it cloud infrastructure?
  │   │   ├── Yes → cloud/
  │   │   ├── No → Is it web hosting?
  │   │   │   ├── Yes → hosting/
  │   │   │   ├── No → Is it a database?
  │   │   │   │   ├── Yes → databases/
  │   │   │   │   ├── No → Is it file storage?
  │   │   │   │   │   ├── Yes → storage/
  │   │   │   │   │   ├── No → Is it auth/identity?
  │   │   │   │   │   │   ├── Yes → auth/
  │   │   │   │   │   │   ├── No → Is it payments/billing?
  │   │   │   │   │   │   │   ├── Yes → payments/
  │   │   │   │   │   │   │   ├── No → Is it email/SMS/messaging?
  │   │   │   │   │   │   │   │   ├── Yes → email-sms/
  │   │   │   │   │   │   │   │   ├── No → Is it monitoring/observability?
  │   │   │   │   │   │   │   │   │   ├── Yes → monitoring/
  │   │   │   │   │   │   │   │   │   ├── No → Is it CI/CD?
  │   │   │   │   │   │   │   │   │   │   ├── Yes → ci-cd/
  │   │   │   │   │   │   │   │   │   │   ├── No → Is it a dev tool?
  │   │   │   │   │   │   │   │   │   │   │   ├── Yes → devtools/
  │   │   │   │   │   │   │   │   │   │   │   ├── No → Is it design?
  │   │   │   │   │   │   │   │   │   │   │   │   ├── Yes → design/
  │   │   │   │   │   │   │   │   │   │   │   │   ├── No → Is it domains/DNS?
  │   │   │   │   │   │   │   │   │   │   │   │   │   ├── Yes → domains/
  │   │   │   │   │   │   │   │   │   │   │   │   │   ├── No → Is it testing/QA?
  │   │   │   │   │   │   │   │   │   │   │   │   │   │   ├── Yes → testing/
  │   │   │   │   │   │   │   │   │   │   │   │   │   │   ├── No → Is it mobile?
  │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   ├── Yes → mobile/
  │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   ├── No → Is it educational?
  │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   ├── Yes → learning/
  │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   ├── No → Is it OSS/infra?
  │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   ├── Yes → open-source/
  │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   ├── No → Student program?
  │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   ├── Yes → student-packs/
  │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   ├── No → Startup program?
  │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   ├── Yes → startup-credits/
```

### 4.2 Multi-Category Tools

Tools that span multiple categories (e.g., Supabase = database + auth + storage):

| Rule | Implementation |
|---|---|
| Primary category | Pick the MOST prominent feature |
| Subcategory | Use the matching subcategory |
| Tags | Add tags for secondary categories |
| Alternatives | Add related tool slugs in `alternatives` field |
| Recipes | Reference tool in recipes for its primary category |

### 4.3 Category Exceptions

| Tool Type | Category | Rationale |
|---|---|---|
| Supabase, Appwrite, PocketBase | `databases` (sub: backend-platforms) | Core is PostgreSQL/SQLite + backend |
| Vercel, Netlify, Cloudflare Pages | `hosting` (sub: static-sites) | Core is frontend hosting |
| Clerk, Auth0, Kinde | `auth` | Primary function is authentication |
| Stripe, Lemon Squeezy, Paddle | `payments` | Primary function is payment processing |

---

## 5. Free Tier Documentation Standards

### 5.1 What "Meaningful Free Tier" Means

A free tier is meaningful if it meets ANY of these thresholds:

| Category | Minimum Free Tier |
|---|---|
| AI API | 1,000 requests/month OR 100k tokens/month |
| Hosting | 1 GB bandwidth, 1 site |
| Database | 100 MB storage |
| Storage | 1 GB storage |
| Auth | 1,000 MAUs |
| Email | 100 emails/month |
| Monitoring | 10k events/month |
| CI/CD | 500 build minutes/month |
| DevTools | Full basic features |
| Design | Full basic features |
| Learning | At least 1 free course/path |

### 5.2 Free Tier Formatting Rules

```
DO write:    "500 MB database, 2 GB storage, 50,000 monthly active users"
DON'T write: "Generous free tier with lots of storage and users"
DO write:    "60 requests/minute, 1M token context window"
DON'T write: "Rate limited but reasonable for most users"
DO write:    "2,000 minutes/month, unlimited public repos"
DON'T write: "Free for small teams"
```

### 5.3 Structured Limits

Map free tier features to the closest field:

| Field | Maps To |
|---|---|
| `requests_per_month` | API calls, function invocations, build minutes |
| `tokens_per_minute` | LLM tokens, API rate limits |
| `storage_gb` | Database size, file storage, object storage |
| `seats` | Team members, users, collaborators |
| `bandwidth_gb` (custom) | Data transfer, CDN egress |
| `monthly_active_users` (custom) | Auth MAUs, app MAUs |

---

## 6. Rating Standards

### 6.1 Rating Guidance by Metric

Use the rubrics from `data/ratings.json`. Summary:

| Score | Beginner Friendly | Docs | Free Generosity | Setup | Reliability | Performance | Community |
|---|---|---|---|---|---|---|---|
| 1 | Needs deep knowledge | No docs exist | No free tier | Days to integrate | <90% uptime | Very slow | No community |
| 2 | Prior knowledge needed | Minimal docs | <100 req/mo | Hours to integrate | 90-95% | Slow | Small |
| 3 | Average learning curve | Adequate docs | 1k req/mo OR 500 MB | ~30 min | 95-99% | Acceptable | Moderate |
| 4 | Good onboarding | Well-organized | 10k+ req/mo OR 2 GB+ | ~10 min | 99.5%+ | Fast | Large |
| 5 | Exceptional | Interactive examples | 100k+ OR 5 GB+, no card | <5 min | 99.99%+ | Sub-100ms | Massive |

### 6.2 Rating Anti-Patterns

| Anti-pattern | Why |
|---|---|
| All dimensions = 5 | Unlikely any tool is perfect everywhere. Differentiate. |
| All dimensions = same value | Every dimension differs — docs vs community vs performance are always different. |
| Overall != weighted formula | CI may not catch this, but maintainer review will. Use the formula. |
| Free generosity rated 5 but card required | If card is required, free_generosity cannot be 5 (see rubric: "no card required"). |

### 6.3 Computing Overall

```javascript
function computeOverall(ratings) {
  const weights = {
    beginner_friendly: 1.0,
    docs: 1.0,
    free_generosity: 1.5,
    setup: 0.8,
    reliability: 1.2,
    performance: 0.8,
    community: 0.5
  };
  const sum = Object.keys(weights).reduce(
    (acc, key) => acc + (ratings[key] || 0) * weights[key], 0
  );
  const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
  return Math.round(sum / totalWeight * 10) / 10;
}
```

---

## 7. Verification Standards

### 7.1 Verification Status Lifecycle

```
New Submission
    │
    ▼
unverified ──────────────────────────────────► (auto-flagged after 90 days)
    │
    ├──► 3+ community reports → community-verified (expires 3 months)
    │
    └──► Maintainer tests → tested (expires 6 months)
                                    │
                                    ├──► Re-tested → tested (renew 6 months)
                                    │
                                    └──► Not re-tested → community-verified (downgrade)
```

### 7.2 When to Test

| Scenario | Verification Required |
|---|---|
| New resource submission | Must be at least `unverified` |
| Adding free tier details | Must be at least `community-verified` |
| Updating pricing | Must be at least `community-verified` |
| Changing category | Must be at least `community-verified` |
| Deprecating a resource | Must be `tested` by maintainer |

### 7.3 Testing Protocol

To mark a resource as `tested` (`✅`), a maintainer MUST:
1. Sign up for the free tier
2. Confirm the free tier limits match the documentation
3. Verify card requirement (or absence)
4. Check region restrictions by attempting access
5. Spot-check documentation for accuracy
6. Record the verification date

---

## 8. File & Data Standards

### 8.1 Naming Conventions

| Entity | Convention | Example |
|---|---|---|
| Resource markdown file | `kebab-case.md` | `supabase.md`, `openai-api.md` |
| Resource ID | `kebab-case` | `supabase`, `openai-api` |
| Resource slug | `kebab-case` | `supabase`, `openai-api` |
| Category folder | `kebab-case` | `ci-cd`, `email-sms`, `student-packs` |
| Subcategory ID | `kebab-case` | `static-sites`, `payment-processing` |
| Tag ID | `kebab-case` | `free-tier`, `open-source`, `s3-compatible` |
| Workflow file | `kebab-case.yml` | `detect-broken-resources.yml` |

### 8.2 Dual-Format Sync Rule

EVERY resource MUST exist in BOTH places:

```
data/resources.json  ◄──►  categories/<category>/<slug>.md
```

- Adding to `resources.json` without a markdown file = ❌ rejected
- Adding a markdown file without a `resources.json` entry = ❌ rejected
- CI will validate this once implemented

### 8.3 Markdown File Structure

```markdown
## Tool Name

**Website**: https://...
**Docs**: https://...
**GitHub**: https://...
**Category**: <category-id>
**Subcategory**: <subcategory-id>

### Description
1-3 sentences (max 200 chars).

### Free Tier
- Specific limit 1: value
- Specific limit 2: value
- Specific limit 3: value

### Paid Plan
- Plan Name: Pro
- Price: $XX/month
- Upgrades: feature list

### Ratings
| Dimension | Rating |
|---|---|
| Beginner Friendly | ⭐⭐⭐⭐ |
| Documentation | ⭐⭐⭐⭐⭐ |
| Free Generosity | ⭐⭐⭐⭐⭐ |
| Setup Ease | ⭐⭐⭐⭐ |
| Reliability | ⭐⭐⭐⭐ |
| Performance | ⭐⭐⭐⭐ |
| Community | ⭐⭐⭐⭐ |

### Verification
- Status: tested | community-verified | unverified
- Verified By: <handle>
- Date: 2026-05

### Status
active | deprecated | limited

### Region Restrictions
- Global: Yes | No
- Restricted Countries: CN, RU, ...
- Notes: ...

### Student Benefits
- Available: Yes | No
- Details: ...
- Verification Method: edu-email | sheerid | iscard | ...

### Tags
tag1 tag2 tag3

### Alternatives To
Tool A, Tool B

### Alternatives
tool-c-slug, tool-d-slug
```

### 8.4 JSON Entry Structure

See `data/resources-schema.json` for full specification. Each entry is exactly 22 fields.

### 8.5 Date Format

All dates use ISO 8601:
- Full date: `2026-05-24`
- Month-only: `2026-05` (for verification.date)
- Timezone: Always UTC

### 8.6 Language Codes

Use ISO 639-1:
- `en` (English), `fr` (French), `de` (German), `ja` (Japanese), `es` (Spanish)
- Regional variants: `en-US`, `en-GB`, `zh-CN`, `pt-BR`

### 8.7 Country Codes

Use ISO 3166-1 alpha-2:
- `US`, `GB`, `IN`, `CN`, `RU`, `DE`, `FR`, `JP`, `BR`
- Always uppercase

---

## 9. Submission & Review Standards

### 9.1 PR Requirements

Every pull request MUST:
1. Use the PR template checklist
2. Include either a new resource file OR changes to existing data
3. Pass CI validation (JSON schema, tags, categories)
4. Include verification status
5. Disclose card requirement
6. Link to evidence (screenshots, docs pages)

### 9.2 Review Checklist

Maintainers verify:

| Check | Auto/Manual |
|---|---|
| JSON schema valid | Auto (CI) |
| Category exists in taxonomy | Auto (CI) |
| Tags exist in tags.json | Auto (CI) |
| URLs resolve | Auto (link checker) |
| Free tier is meaningful | Manual |
| Free tier details are accurate | Manual |
| Card requirement is accurate | Manual |
| Region restrictions are accurate | Manual |
| No duplicate exists | Manual (CI assist) |
| Ratings follow rubrics | Manual |
| Overall rating matches formula | Manual |
| Description is clear and under 200 chars | Manual |

### 9.3 What Triggers an Auto-Reject

| Condition | Reason |
|---|---|
| Invalid JSON | Won't parse |
| Missing required field | Schema violation |
| Invalid category | Not in taxonomy |
| Invalid tag | Not in tags.json |
| Duplicate ID | Already exists in resources.json |
| No free tier | Doesn't belong in repo |
| Affiliate URL in website | Spam |

---

## 10. Quality Standards

### 10.1 Minimum Quality Bar

Every resource entry MUST meet ALL of:

| Standard | Threshold |
|---|---|
| Description quality | Specific, accurate, under 200 chars |
| Free tier clarity | At least 2 numeric limits in summary |
| Structured limits | At least 1 non-null `free_tier.limits` field |
| Rating differentiation | NOT all same value; NOT all 5s |
| Overall accuracy | MUST match weighted formula |
| Tags | At least 1 per required group; all valid |
| URLs | All resolve (website, docs, github) |
| Card disclosure | Accurate (`true`/`false`) |
| Region disclosure | Global flag set + restricted countries listed |
| Last verified | Within 6 months |

### 10.2 Quality Scoring (Internal)

Resources are scored against this rubric to determine ranking readiness:

| Factor | Weight | Pass Threshold |
|---|---|---|
| Field completeness | 25% | All required fields present |
| Free tier detail | 25% | ≥2 numeric limits, ≥1 structured limit |
| Verification | 20% | `tested` or `community-verified` |
| Rating quality | 15% | Differentiated, follows rubric |
| Tag accuracy | 15% | All valid, good category match |

### 10.3 Deprecation Quality

When marking a resource as deprecated:
- MUST include primary reason from enum
- MUST include at least 1 migration alternative
- SHOULD include 2-3 migration alternatives
- SHOULD include notes explaining what changed

---

## 11. Automation Integration Standards

All standards in this document are enforced by:

| Standard | Enforced By | When |
|---|---|---|
| JSON schema | `validate-json.yml` | Every PR to `data/*.json` |
| Taxonomy compliance | `validate-json.yml` (step 6) | Every PR to `data/*.json` |
| Tag compliance | `validate-json.yml` (step 7) | Every PR to `data/*.json` |
| URL health | `detect-broken-resources.yml` | Bi-weekly |
| Verification expiry | `monthly-verification.yml` | Monthly |
| Link freshness | `check-links.yml` | Monthly |
| Stats accuracy | `generate-stats.yml` + `update-readme.yml` | Monthly |

---

## 12. Global Tags Addition

Before populating resources, the following tags must be added to `data/tags.json` (identified by audit as missing but needed):

| Tag | Group | Used By | Suggested Description |
|---|---|---|---|
| `gpt` | Category | openai-api | GPT-specific models and APIs |
| `embeddings` | Category | openai-api | Embedding model APIs |
| `image-generation` | Category | openai-api | Image generation AI tools |
| `speech` | Category | openai-api | Speech-to-text and text-to-speech |
| `realtime` | Category | supabase | Real-time subscriptions and WebSocket |
| `edge` | Category | vercel | Edge computing and edge functions |
| `frontend` | Category | vercel | Frontend development frameworks |
| `jamstack` | Category | vercel | Jamstack architecture tools |
| `invoicing` | Category → merge with `billing` | stripe | Invoice generation and management |
| `subscriptions` → fix to `subscription` (exists) | Category | stripe | Subscription management (fix: use existing `subscription` tag) |
| `fraud-detection` | Category | stripe | Fraud detection and prevention |

**Action**: Either add these tags to `data/tags.json` or fix the 4 existing resources to use only valid tags.

---

## 13. Quick Reference

### Quick Decision Matrix

| Question | Action |
|---|---|
| Does it have a free tier? | ✅ Include (with limits documented) |
| Does it have a free trial only? | ✅ Include if ≥14 days |
| Is it open-source? | ✅ Include; add `open-source` tag |
| Is it student-only? | ✅ Include in `student-packs` |
| Is it startup credits? | ✅ Include in `startup-credits` |
| Is it dead? | ❌ Exclude (move to deprecated/) |
| Is it unmaintained for 2+ years? | ❌ Exclude (move to deprecated/unmaintained) |
| Does it require card for trial? | ❌ Exclude if trial is <14 days |
| Is it a referral/affiliate page? | ❌ Exclude |
| Is it crypto/blockchain? | ❌ Exclude unless developer infrastructure |
| Is it adult content? | ❌ Exclude |

### Quick Tag Reference

| Need | Tag |
|---|---|
| Source available | `open-source` |
| Self-deployable | `self-hosted` |
| Cloud service | `saas` |
| API available | `api` |
| No credit card | `no-card` |
| Credit card needed | `card-required` |
| Forever free | `forever-free` |
| Has free + paid | `freemium` |
| Works worldwide | `global` |
| Works in India | `india-friendly` |
| Easy to start | `beginner-friendly` |
| Production quality | `production-ready` |
| Student special | `student`, `free-for-students` |
| Startup program | `startup`, `credits` |

### Quick Category Reference

| Tool Looks Like | Assign To |
|---|---|
| AI model/API | `ai` |
| Serverless/PaaS/BaaS | `deployment` |
| Cloud VM/CDN/storage | `cloud` |
| Static site/VPS/DNS | `hosting` |
| SQL/NoSQL/Vector/Cache | `databases` |
| File/object storage | `storage` |
| Login/SSO/MFA | `auth` |
| Payment processing | `payments` |
| Email/SMS/Push | `email-sms` |
| Monitoring/APM/Logs | `monitoring` |
| CI/CD pipelines | `ci-cd` |
| IDE/Git/CLI | `devtools` |
| UI/Icons/Prototyping | `design` |
| Domain/DNS | `domains` |
| Test framework/runner | `testing` |
| Mobile SDK/hosting | `mobile` |
| Courses/tutorials | `learning` |
| Student discounts | `student-packs` |
| Startup credits | `startup-credits` |
| OSS/library | `open-source` |
