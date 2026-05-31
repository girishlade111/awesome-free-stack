# Repository Audit — awesome-free-stack

> **Date**: 2026-05-24 | **Audit scope**: All 20 categories, data layer, automation, community templates, content quality
> **Method**: Automated scripts + manual cross-reference of every file in the repository

---

## 1. Executive Summary

| Metric | Value | Status |
|---|---|---|
| Total categories | 20 | ⚠️ 16/20 are completely empty |
| Total subcategories | 135 | ⚠️ 131/135 have NO resources |
| Resources in `data/resources.json` | 4 | ❌ Only 4 entries cover 3 categories |
| Resource files in `categories/` (non-guide) | 0 | ❌ Zero actual tool entries exist |
| Student/startup guide files | 14 | ✅ Content exists but not in `resources.json` |
| Tags defined | 175 | ❌ Only ~13 tags used across 4 resources |
| Tags valid (exist in `tags.json`) | — | ❌ 11 invalid tags used in resources |
| Schema compliance | — | ✅ All 4 resources pass field validation |
| Rankings composite accuracy | — | ❌ 5/15 entries have wrong scores |
| Resource density | 3.0% | ❌ 4 resources / 135 subcategories |
| Deprecated entries | 12 | ✅ Schema valid, migration paths present |

### Critical Issues

1. **18/20 categories are skeleton folders** — only `student-packs/` and `startup-credits/` have content
2. **Zero actual tool entries exist** — all 14 files in `categories/` are student/startup guides, not tool resources
3. **Dual-format sync is broken** — 4 `resources.json` entries have no markdown files; 14 markdown files have no JSON entries
4. **Tags are invalid** — 11 tag IDs used in `resources.json` don't exist in `tags.json`
5. **Rankings are inaccurate** — 5 of 15 ranked entries have wrong composite scores
6. **Quantified limits missing** — 2/4 resources have no structured limit fields (all `null`)

---

## 2. Missing Categories Report

### 2.1 Categories With Zero Resources

**16 of 20 categories have no resource files and no `resources.json` entries:**

| Category | Icon | Subcategories | Suggested First Resources |
|---|---|---|---|
| `deployment` | 🚀 | 6 | Render, Railway, Fly.io, Netlify, Cloudflare Workers, Deno Deploy |
| `cloud` | ☁️ | 7 | AWS Free Tier, GCP Free Tier, Azure Free, Oracle Cloud, Vultr, Linode |
| `storage` | 💾 | 5 | Cloudflare R2, Backblaze B2, Supabase Storage, Uploadthing, Bunny CDN |
| `auth` | 🔐 | 7 | Clerk, Supabase Auth, Kinde, Auth0, Hanko, NextAuth.js |
| `email-sms` | 📧 | 6 | Resend, Loops.so, Mailgun, Brevo, SendGrid, Twilio |
| `monitoring` | 📊 | 7 | PostHog, Sentry, Grafana, Umami, Plausible, Highlight.io |
| `ci-cd` | 🔄 | 6 | GitHub Actions, CircleCI, GitLab CI, Jenkins, Buildkite, Woodpecker |
| `devtools` | 🛠️ | 8 | VS Code, GitPod, Hoppscotch, Insomnia, Postman, Sourcegraph |
| `design` | 🎨 | 9 | Figma, Canva, Excalidraw, tldraw, Penpot, Huge Icons |
| `domains` | 🔗 | 5 | Cloudflare DNS, is-a.dev, us.kg, DuckDNS, Namecheap FreeDNS |
| `testing` | 🧪 | 7 | Playwright, Cypress, Vitest, Jest, Postman, Loader.io |
| `mobile` | 📱 | 7 | Expo, Flutter, React Native, Firebase, App Center, EAS Build |
| `learning` | 📚 | 8 | freeCodeCamp, The Odin Project, Full Stack Open, MDN, roadmap.sh |
| `open-source` | 🌍 | 5 | Cal.com, Appwrite, N8N, Plausible, Documenso |
| `student-packs` | 🎓 | 6 | ⚠️ 9 guide files exist but NO entries in `resources.json` |
| `startup-credits` | 🏢 | 5 | ⚠️ 5 guide files exist but NO entries in `resources.json` |

### 2.2 Categories With Partial Resources (1 entry each)

| Category | Subcategories | Covered | Missing |
|---|---|---|---|
| `ai` | 11 | models (openai-api) | apis, agents, rag, embeddings, image-generation, video-generation, speech, vector-databases, ml-platforms, prompt-tools |
| `hosting` | 6 | static-sites (vercel) | vps, web-servers, dns, ssl-certificates, reverse-proxy |
| `databases` | 8 | backend-platforms (supabase — note: supabase is in "backend-platforms" not "sql" or "managed") | sql, nosql, managed-databases, caching, vector-databases, graph-databases, time-series |
| `payments` | 6 | payment-processing (stripe) | invoicing, subscription-management, checkout, fraud-detection, payouts |

### 2.3 Subcategory Coverage Gap

**Only 4 of 135 subcategories have resources:**

```
Covered:   models (ai), static-sites (hosting), backend-platforms (databases), payment-processing (payments)
Missing:   131 subcategories (97.0% uncovered)
```

---

## 3. Missing Resource Density Report

### 3.1 Resource Density by Category

| Category | Resources | Subcategories | Density | Priority |
|---|---|---|---|---|
| `ai` | 1 | 11 | 9.1% | 🔴 HIGH |
| `hosting` | 1 | 6 | 16.7% | 🔴 HIGH |
| `databases` | 1 | 8 | 12.5% | 🔴 HIGH |
| `payments` | 1 | 6 | 16.7% | 🔴 HIGH |
| `deployment` | 0 | 6 | 0.0% | 🔴 HIGH |
| `cloud` | 0 | 7 | 0.0% | 🔴 HIGH |
| `storage` | 0 | 5 | 0.0% | 🔴 HIGH |
| `auth` | 0 | 7 | 0.0% | 🔴 HIGH |
| `email-sms` | 0 | 6 | 0.0% | 🔴 HIGH |
| `monitoring` | 0 | 7 | 0.0% | 🔴 HIGH |
| `ci-cd` | 0 | 6 | 0.0% | 🔴 HIGH |
| `devtools` | 0 | 8 | 0.0% | 🟡 MEDIUM |
| `design` | 0 | 9 | 0.0% | 🟡 MEDIUM |
| `testing` | 0 | 7 | 0.0% | 🟡 MEDIUM |
| `mobile` | 0 | 7 | 0.0% | 🟡 MEDIUM |
| `learning` | 0 | 8 | 0.0% | 🟡 MEDIUM |
| `domains` | 0 | 5 | 0.0% | 🟢 LOW |
| `open-source` | 0 | 5 | 0.0% | 🟢 LOW |
| `student-packs` | 0 | 6 | 0.0%* | 🟢 LOW |
| `startup-credits` | 0 | 5 | 0.0%* | 🟢 LOW |

*\*student-packs and startup-credits have guide files but no structured `resources.json` entries*

### 3.2 File Reality vs `resources.json`

**Resources in `resources.json` but missing markdown files:**

| ID | Category | Markdown File Expected |
|---|---|---|
| `openai-api` | ai | `categories/ai/openai-api.md` ❌ |
| `supabase` | databases | `categories/databases/supabase.md` ❌ |
| `vercel` | hosting | `categories/hosting/vercel.md` ❌ |
| `stripe` | payments | `categories/payments/stripe.md` ❌ |

**Markdown files in `categories/` but missing from `resources.json`:**

| File | Category | Type |
|---|---|---|
| `aws-educate.md` | student-packs | Guide |
| `azure-for-students.md` | student-packs | Guide |
| `benefits-overview.md` | student-packs | Guide |
| `figma-education.md` | student-packs | Guide |
| `github-student-pack.md` | student-packs | Guide |
| `google-cloud-for-students.md` | student-packs | Guide |
| `jetbrains-student.md` | student-packs | Guide |
| `notion-education.md` | student-packs | Guide |
| `verification-guide.md` | student-packs | Guide |
| `accelerator-programs.md` | startup-credits | Guide |
| `ai-credits.md` | startup-credits | Guide |
| `cloud-credits.md` | startup-credits | Guide |
| `hosting-credits.md` | startup-credits | Guide |
| `startup-support.md` | startup-credits | Guide |

**Neither in `resources.json` nor in categories/:**

| Tool (referenced in alternatives) | Category | Source |
|---|---|---|
| AppFlowy, Outline, Anytype, SiYuan | (productivity) | alternatives/notion.md |
| Appwrite, PocketBase, Nhost | (backend) | alternatives/firebase.md |
| Gemini, DeepSeek, Claude, Groq, Perplexity | ai | alternatives/chatgpt.md |
| Cloudflare Pages, Netlify, Render | hosting | alternatives/vercel.md |
| Excalidraw, tldraw, Plane, Taiga, Vikunja | design/devtools | alternatives/index.md |
| Bitwarden, Keycloak, Hanko, Meilisearch, Typesense | auth/devtools | alternatives/index.md |
| Grafana, SigNoz, GlitchTip, Highlight.io | monitoring | alternatives/index.md |
| DuckDB, ClickHouse, Upstash, Redis Stack | databases | alternatives/index.md |
| Inkscape, GIMP, Immich, Cal.com, N8N | open-source | alternatives/index.md |

---

## 4. Tag Consistency Report

### 4.1 Invalid Tags Used in `resources.json`

**11 tag IDs used that don't exist in `data/tags.json`:**

| Resource | Invalid Tag | Should Be |
|---|---|---|
| `openai-api` | `gpt` | `llm` or remove |
| `openai-api` | `embeddings` | Not defined as a standalone tag; category-level is fine |
| `openai-api` | `image-generation` | Not defined; closest: `openai-compatible` |
| `openai-api` | `speech` | Not defined; category ai/speech exists but no tag |
| `supabase` | `realtime` | Not defined; closest: `webhook` or `api` |
| `vercel` | `edge` | Not defined; closest: `serverless` |
| `vercel` | `frontend` | Not defined; closest: `hosting` |
| `vercel` | `jamstack` | Not defined; no replacement |
| `stripe` | `invoicing` | Not defined; closest: `billing` |
| `stripe` | `subscriptions` | Not defined; closest: `subscription` (note: singular) |
| `stripe` | `fraud-detection` | Not defined; no replacement |

**Impact**: All 4 resources currently have tags that would fail CI validation against `data/tags.json`.

### 4.2 Tag Coverage by Group

| Group | Total Tags | Used | Unused | Unused % |
|---|---|---|---|---|
| Global | 15 | 1 | 14 | 93% |
| Category | 77 | 11 | 66 | 86% |
| Pricing | 12 | 0 | 12 | 100% |
| Region | 12 | 0 | 12 | 100% |
| Compatibility | 32 | 1 | 31 | 97% |
| Verification | 7 | 0 | 7 | 100% |

**Key tags that should be used but aren't**: `free-tier`, `no-card`, `generous-free-tier`, `tested`, `open-source`, `beginner-friendly`, `javascript`, `typescript`, `python`, `docker`, `postgresql`, `nodejs`, `react`, `india-friendly`, `global`

### 4.3 Tags Currently Used (from 4 resources)

`ai`, `llm`, `gpt` ❌, `embeddings` ❌, `image-generation` ❌, `speech` ❌, `database`, `postgresql`, `auth`, `storage`, `realtime` ❌, `open-source`, `serverless`, `hosting`, `deployment`, `edge` ❌, `frontend` ❌, `jamstack` ❌, `cdn`, `payments`, `invoicing` ❌, `subscriptions` ❌, `fraud-detection` ❌, `checkout`

---

## 5. JSON Schema Consistency Report

### 5.1 Schema Compliance

**Result**: All 4 resources in `data/resources.json` pass schema validation against `resources-schema.json` (draft-07).

| Check | Pass/Fail |
|---|---|
| Required fields present | ✅ All 4 pass |
| Category in taxonomy | ✅ All 4 pass |
| id/slug kebab-case | ✅ All 4 pass |
| website URL format | ✅ All 4 pass |
| Ratings 1-5 integers | ✅ All 4 pass |
| verification.status enum | ✅ All 4 pass |
| status enum | ✅ All 4 pass |
| requires_card boolean | ✅ All 4 pass |
| region_restrictions.global boolean | ✅ All 4 pass |
| last_verified ISO 8601 | ✅ All 4 pass |
| student_benefits.available boolean | ✅ All 4 pass |
| meta.total_resources count | ✅ Correct (4) |

### 5.2 Schema Gaps (Not Enforced But Problematic)

| Gap | Detail | Impact |
|---|---|---|
| `free_tier.limits` all-null allowed | Schema permits `null` for all limit fields | 2/4 resources have no structured limits |
| `alternatives_to` not cross-validated | Schema accepts any string array | No validation that referenced tools exist |
| `alternatives` slugs not validated | Schema accepts kebab-case but doesn't check existence | Cross-reference will have dead links |
| `ratings.overall` not formula-verified | Schema accepts any number 0-5 | Manual values may not match computed formula |
| `tags` not validated against `tags.json` | Schema only checks `minItems: 1, uniqueItems: true` | Invalid tags pass schema but fail workflow step |
| No uniqueness constraint on `id` | Schema doesn't check for duplicate ids across resources | Potential for ID collision |

### 5.3 `deprecated-schema.json` Compliance

| Check | Pass/Fail |
|---|---|
| 12 entries have valid structure | ✅ Pass |
| All reasons in allowed enum | ✅ Pass |
| All statuses in allowed enum | ✅ Pass (deprecated=10, archived=1, dead=1) |
| ISO 8601 dates | ✅ Pass |
| Migration entries have names | ✅ Pass |
| Migration URLs valid | ✅ Pass |

### 5.4 Deprecated Entry Issues

| Issue | Detail | Severity |
|---|---|---|
| `parse-server-migrated` has category `backend` | `backend` is not a valid taxonomy category (should be `deployment`) | ⚠️ Medium |
| `unmaintained.md` has 0 entries | Template exists but no actual data | ⚠️ Low |
| `deprecated.md` covers 10 entries but JSON has 12 | archived (Parse) and dead (Pusher) entries not duplicated in deprecated.md | ⚠️ Low |

---

## 6. Dual-Format Sync Audit

### 6.1 The Sync Problem

The repository uses a **dual-format architecture** where:
- **Markdown** (`categories/<cat>/<tool>.md`): Human-readable content for GitHub browsing
- **JSON** (`data/resources.json`): Machine-readable data for automation, rankings, website

**Current state**: These two layers are completely out of sync.

| Aspect | Markdown Layer | JSON Layer | Match |
|---|---|---|---|
| Core tool entries | 0 files | 4 entries | ❌ Zero overlap |
| Student/startup guides | 14 files | 0 entries | ❌ Not represented |
| Tool tool names | — | openai-api, supabase, vercel, stripe | — |
| Guide names | 14 unique | — | — |

### 6.2 Correct Sync Should Be

```
resources.json entry  ←→  categories/<cat>/<tool-slug>.md  (both must exist)
```

Currently:
- 4 JSON entries have no markdown files → they're invisible on GitHub browsing
- 14 markdown files have no JSON entries → they're invisible to automation, rankings, stats

---

## 7. Resource Quality Audit

### 7.1 Per-Resource Quality Score

| Resource | Fields OK | Limits Quantified | Tags Valid | Rating Verified | Overall |
|---|---|---|---|---|---|
| `openai-api` | ✅ | ✅ (tokens_per_minute) | ❌ 4 invalid | ✅ 4.3 correct | ⚠️ 75% |
| `supabase` | ✅ | ✅ (storage_gb) | ❌ 1 invalid | ⚠️ 4.7 declared, computed 4.9 | ⚠️ 75% |
| `vercel` | ✅ | ❌ All null | ❌ 3 invalid | ❌ No rating issues detected | ⚠️ 60% |
| `stripe` | ✅ | ❌ All null | ❌ 3 invalid | ✅ 4.5 correct | ⚠️ 60% |

### 7.2 Common Quality Issues

| Issue | Affected Resources | Severity |
|---|---|---|
| Invalid tags (not in `tags.json`) | All 4 | 🔴 HIGH |
| Structured limits all `null` | vercel, stripe | 🔴 HIGH |
| Summary text has numbers but limits fields are null | vercel, stripe | 🟡 MEDIUM |
| Overall rating may be manually set (differs from formula) | supabase (4.7 vs 4.9) | 🟡 MEDIUM |
| `alternatives_to` references tools not in this repo | All 4 | 🟢 LOW |
| No `subcategory` for supabase (uses `backend-platform` which exists) | — | ✅ |

### 7.3 Free Tier Summary Quality

| Resource | Summary Has Numbers | Specific Limits | Card Disclosed | Region Disclosed |
|---|---|---|---|---|
| `openai-api` | ✅ "$5 free credit, rate limits" | ✅ 10k TPM | ✅ true | ✅ Listed countries |
| `supabase` | ✅ "500 MB, 2 GB, 50k MAU" | ✅ 2 GB storage | ✅ false | ✅ Global |
| `vercel` | ✅ "100 GB, 6k min, 100/day" | ❌ All null | ✅ false | ✅ Listed countries |
| `stripe` | ✅ "2.9% + $0.30" | ❌ All null | ✅ false | ✅ Listed countries |

---

## 8. Ranking Accuracy Audit

### 8.1 Composite Score Mismatches

From `data/rankings.json`, **5 of 15 ranked entries** have wrong composite scores:

| Ranking | Entry | Declared | Computed | Error |
|---|---|---|---|---|
| best-ai-tools-2026 | Hugging Face | 3.9 | **4.0** | +0.1 |
| best-databases-2026 | Supabase | 4.8 | **4.9** | +0.1 |
| best-hosting-2026 | Cloudflare Pages | 4.6 | **4.7** | +0.1 |
| best-hosting-2026 | Netlify | 4.2 | **4.1** | -0.1 |
| best-hosting-2026 | Render | 3.8 | **3.9** | +0.1 |

### 8.2 Ranking Methodology Issues

| Issue | Detail | Impact |
|---|---|---|
| All 5 entries per ranking | Minimum is 5, so these barely qualify | Thin rankings |
| Some ranked resources don't exist in `resources.json` | Gemini, Groq, DeepSeek, Neon, PlanetScale, Cloudflare Pages, etc. | Rankings reference phantom resources |
| Community votes have no actual data source | 0 voting discussions ever held | Community factor is estimated |
| Popularity scores lack documented source | No tracking of GitHub stars/npm downloads | Maintainer-estimated |

---

## 9. Empty File Inventory

### 9.1 Completely Empty (0 bytes)

| File | Purpose | Impact |
|---|---|---|
| `LICENSE` | Licensing (none selected) | 🔴 Cannot be used without license |
| `ROADMAP.md` | Future development plan | 🟡 No direction documented |
| `CHANGELOG.md` | Version history | 🟡 No history tracked |
| `FAQ.md` | Frequently asked questions | 🟢 Low impact |

### 9.2 Structurally Empty (Template Only)

| File | Content | Impact |
|---|---|---|
| `deprecated/unmaintained.md` | Template format only, 0 entries | 🟢 No unmaintained tools reported yet |

### 9.3 Empty Category Folders (`.gitkeep` Only)

| Folder | Subcategories |
|---|---|
| `categories/ai/` | 11 |
| `categories/deployment/` | 6 |
| `categories/cloud/` | 7 |
| `categories/hosting/` | 6 |
| `categories/databases/` | 8 |
| `categories/storage/` | 5 |
| `categories/auth/` | 7 |
| `categories/payments/` | 6 |
| `categories/email-sms/` | 6 |
| `categories/monitoring/` | 7 |
| `categories/ci-cd/` | 6 |
| `categories/devtools/` | 8 |
| `categories/design/` | 9 |
| `categories/domains/` | 5 |
| `categories/testing/` | 7 |
| `categories/mobile/` | 7 |
| `categories/learning/` | 8 |
| `categories/open-source/` | 5 |

---

## 10. Priority Order for Population

### Tier 1: 🔴 Immediate (Critical Mass Needed)

These categories are mentioned most in `alternatives/`, `recipes/`, `learning-paths/`, and have the most demand:

| Priority | Category | Rationale | Suggested Min Entries | Key Tools to Add |
|---|---|---|---|---|
| 1 | `ai` | Referenced in 3 recipes, 2 learning paths, 1 ranking, 1 alternative | 8+ | Gemini, Groq, DeepSeek, Claude, Hugging Face, Together AI, Replicate, OpenRouter |
| 2 | `hosting` | Referenced in 5 recipes, 2 rankings, 2 alternatives | 6+ | Vercel (file), Cloudflare Pages, Netlify, Render, Railway, Fly.io |
| 3 | `databases` | Referenced in 5 recipes, 1 ranking, 1 alternative | 6+ | Supabase (file), Neon, MongoDB Atlas, PlanetScale, Upstash, Redis |
| 4 | `auth` | Referenced in 5 recipes, 1 alternative | 5+ | Clerk, Supabase Auth, Kinde, NextAuth.js, Hanko |
| 5 | `storage` | Referenced in 4 recipes, 1 alternative | 4+ | Cloudflare R2, Backblaze B2, Uploadthing, Bunny CDN |
| 6 | `email-sms` | Referenced in 4 recipes, 1 alternative | 4+ | Resend, Loops.so, Mailgun, Brevo |
| 7 | `deployment` | Referenced in 2 recipes, 1 alternative | 4+ | Render, Railway, Fly.io, Deno Deploy |
| 8 | `cloud` | Referenced in student-packs, startup-credits | 4+ | AWS Free Tier, GCP Free Tier, Azure Free, Oracle Cloud |
| 9 | `monitoring` | Referenced in 2 recipes, 1 alternative | 4+ | PostHog, Sentry, Grafana, Umami, Plausible |

### Tier 2: 🟡 Medium Priority

| Priority | Category | Rationale | Suggested Min Entries | Key Tools |
|---|---|---|---|---|
| 10 | `ci-cd` | Referenced in 1 recipe | 4+ | GitHub Actions, CircleCI, GitLab CI, Woodpecker |
| 11 | `payments` | Has 1 resource (Stripe) but needs more | 3+ | Stripe (file), Lemon Squeezy, Paddle, Razorpay |
| 12 | `mobile` | 1 learning path, 1 recipe | 4+ | Expo, Flutter, React Native, Firebase |
| 13 | `devtools` | Referenced in alternatives | 4+ | VS Code, GitPod, Hoppscotch, Insomnia |
| 14 | `learning` | 7 learning paths exist but no tools | 4+ | freeCodeCamp, Odin Project, Full Stack Open, roadmap.sh |
| 15 | `design` | Referenced in alternatives | 4+ | Figma, Canva, Excalidraw, Penpot |
| 16 | `testing` | Referenced in 1 learning path | 3+ | Playwright, Vitest, Cypress |

### Tier 3: 🟢 Lower Priority

| Priority | Category | Rationale | Suggested Min Entries | Key Tools |
|---|---|---|---|---|
| 17 | `domains` | Niche category | 3+ | Cloudflare DNS, is-a.dev, DuckDNS |
| 18 | `open-source` | Cross-cutting category | 3+ | Cal.com, Appwrite, N8N |
| 19 | `student-packs` | Already has guide content; needs JSON sync | — | Sync existing 9 guides to `resources.json` |
| 20 | `startup-credits` | Already has guide content; needs JSON sync | — | Sync existing 5 guides to `resources.json` |

### Fixes Needed Before Adding New Resources

1. 🔴 **Fix invalid tags in `data/tags.json`** — Add `gpt`, `embeddings`, `image-generation`, `speech`, `realtime`, `edge`, `frontend`, `jamstack`, `invoicing`, `subscriptions`, `fraud-detection` to the tag system (or correct resource entries)
2. 🔴 **Fix ranking composite scores** — Recompute 5 mismatched entries in `data/rankings.json`
3. 🔴 **Reconcile dual-format** — Create markdown files for `openai-api`, `supabase`, `vercel`, `stripe` AND add JSON entries for student-packs and startup-credits
4. 🟡 **Add quantified limits** — Populate `free_tier.limits` with structured data for vercel and stripe
5. 🟡 **Fix deprecated category** — Change `parse-server-migrated` category from `backend` to `deployment`
6. 🟡 **Fill empty files** — LICENSE, ROADMAP.md, CHANGELOG.md, FAQ.md

---

## 11. Appendix: Data Files Summary

| File | Entries | Valid | Issues |
|---|---|---|---|
| `data/resources.json` | 4 resources | Schema: ✅ | Tags: ❌, Limits: ❌, Sync: ❌ |
| `data/taxonomy.json` | 20 categories, 135 subcategories | ✅ | None |
| `data/tags.json` | 175 tags in 6 groups | ✅ | ❌ Missing 11 tags used by resources |
| `data/ratings.json` | 7 metrics, 6 tiers | ✅ | None |
| `data/badges.json` | 10 badges | ✅ | None |
| `data/rankings.json` | 3 rankings, 15 entries | Schema: ✅ | Scores: ❌ (5 wrong) |
| `data/deprecated.json` | 12 entries | Schema: ✅ | Category: ❌ (1 invalid) |
| `data/resources-schema.json` | — | ✅ | Could add tag cross-validation |
| `data/deprecated-schema.json` | — | ✅ | None |

---

## 12. Appendix: Tag Additions Needed

If the decision is to add missing tags to `data/tags.json` rather than removing them from resources, the following tags should be added:

| Tag | Group | Used By |
|---|---|---|
| `gpt` | Category | openai-api |
| `embeddings` | Category | openai-api |
| `image-generation` | Category | openai-api |
| `speech` | Category | openai-api |
| `realtime` | Category | supabase |
| `edge` | Category | vercel |
| `frontend` | Category | vercel |
| `jamstack` | Category | vercel |
| `invoicing` | Category → suggest merging with `billing` | stripe |
| `subscriptions` → fix to `subscription` (singular exists) | Category | stripe |
| `fraud-detection` | Category | stripe |

Alternatively, fix the 4 resources to use only valid tags.

---

## 13. Summary of Actions Needed

| # | Action | Impact | Effort |
|---|---|---|---|
| 1 | Populate **all 20 categories** with real resource markdown files | 🔴 Critical | High (40-80 entries) |
| 2 | Fix invalid tags (add to tags.json or fix resource entries) | 🔴 Critical | Low |
| 3 | Fix ranking composite scores | 🔴 Critical | Low |
| 4 | Create markdown files for 4 existing JSON entries | 🔴 Critical | Low |
| 5 | Add JSON entries for 14 guide files | 🔴 Critical | Low |
| 6 | Populate structured limits fields for vercel, stripe | 🟡 Medium | Low |
| 7 | Fix parse-server-migrated category | 🟡 Medium | Low |
| 8 | Fill LICENSE, ROADMAP.md, CHANGELOG.md, FAQ.md | 🟡 Medium | Low |
| 9 | Add more ranking categories (monitoring, auth, etc.) | 🟢 Nice-to-have | Medium |
| 10 | Build website from JSON data layer | 🟢 Nice-to-have | High |
