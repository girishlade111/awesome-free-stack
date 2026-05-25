# Repository Audit Report

Generated: 2026-05-25

## Executive Summary

| Metric | Value |
|---|---|
| **Total Resources** | 193 |
| **Total Tags** | 175 |
| **Categories Populated** | 20/20 (100%) |
| **Validation Status** | ✅ PASSED |
| **Rating Issues Fixed** | 64 → 0 |
| **Duplicate IDs** | None |
| **Missing Markdowns** | None |
| **Invalid Subcategories** | None |
| **Field Order Issues** | None |
| **Missing Fields** | None |

## Duplicates & Overlaps

**No true duplicates found.** All 193 entries have unique IDs, slugs, and names.

### Multi-category tools (by design)

These tools appear in multiple categories because they offer distinct services:

| Tool | Categories |
|---|---|
| **Firebase** | deployment (hosting), databases (Firestore), auth, mobile (app-hosting) |
| **Supabase** | databases, storage, auth |
| **Cloudflare** | deployment (Pages + Workers), storage (R2), domains (DNS) |
| **GitHub** | deployment (Pages), CI/CD (Actions), devtools (Codespaces), student-packs |
| **AWS** | cloud (compute), student-packs (Educate), startup-credits (Activate) |
| **Google** | cloud (GCP), design (Fonts), student-packs, startup-credits |
| **Auth0** | auth, startup-credits |
| **Figma** | design, student-packs |
| **Namecheap** | domains, student-packs |
| **OpenAI** | ai (API), student-packs, startup-credits |
| **Stripe** | payments, startup-credits |

**Intentional website overlap**: `namecheap-student` and `dotme-students` share `namecheap.com/education` — they are separate offers (bundle vs. .me domain alone) from the same education page.

## Ratings Normalization

All 193 entries now follow the weighted formula:

> `overall = docs×0.20 + free_generosity×0.20 + reliability×0.20 + performance×0.15 + beginner_friendly×0.10 + setup×0.05 + community×0.10`

- **64 entries** had mismatched `overall` values (deviations of 0.1–0.4)
- **100 rating values corrected** to match the formula
- **Remaining issues**: 0

### Notable corrections

| Resource | Before | After |
|---|---|---|
| dynamodb | 4.3 → 4.7 | Performance/reliability adjusted |
| jenkins | 3.5 → 3.9 | Lowered to match sub-3.5 component scores |
| anthropic-api | 3.9 → 4.2 | Bumped to match strong docs/performance |
| oracle-cloud | 3.7 → 4.0 | Adjusted for free_generosity weight |
| cockroachdb | 4.0 → 4.3 | Underrated relative to component scores |
| cloudflare-r2 | 4.5 → 4.8 | Underrated vs. near-perfect components |
| buildkite | 4.1 → 4.4 | Underrated for strong reliability/performance |
| surge | 3.8 → 3.5 | Overrated vs. modest component scores |
| freenom | 3.0 → 2.8 | Matches low docs/reliability/performance |
| datadog | 4.0 → 4.3 | Underrated for strong components |

## Tags Normalization

- **175 total tags** across 7 groups
- No duplicate tag IDs (removed earlier `low-code` duplicates)
- Tags used sparingly (<3 times) are niche-appropriate (e.g., `gpt`, `orchestration`, `us-only`, `icons`)
- Tags with 1-time usage: 44 tags (valid for specialized tools)

### Most-used tags

| Tag | Usage Count |
|---|---|
| `free-tier` | 132 |
| `no-card` | 112 |
| `open-source` | 93 |
| `ai` | 67 |
| `saas` | 63 |
| `api` | 60 |
| `cloud` | 50 |
| `self-hosted` | 45 |
| `freemium` | 44 |
| `forever-free` | 43 |

## Metadata Normalization

All 193 entries verified for:

| Check | Result |
|---|---|
| Field ordering (22 fields) | ✅ 100% consistent |
| `free_tier` present | ✅ 193/193 |
| `ratings` present | ✅ 193/193 |
| `student_benefits.available` is boolean | ✅ 193/193 |
| `verification.status` present | ✅ 193/193 |
| `region_restrictions.global` is boolean | ✅ 193/193 |
| No root-level `limits` | ✅ 0 redundant |
| Consistent `billing_model` values | ✅ 10 standardized values |

### Standardized billing models

| Model | Count |
|---|---|
| `subscription` | 75 |
| `usage-based` | 43 |
| `transaction-fee` | 5 |
| `donation` | 4 |
| `per-user` | 4 |
| `contact-sales` | 2 |
| `per-domain` | 2 |
| `per-host` | 1 |
| `custom` | 1 |
| `one-time` | 1 |

## Category Distribution

| Category | Entries | Coverage |
|---|---|---|
| ai | 30 | apis, models, agents, vector-databases |
| student-packs | 14 | github-pack, cloud, ides, learning, design, domains |
| startup-credits | 12 | cloud, saas, incubators, founder-perks |
| design | 12 | prototyping, icons, illustrations, fonts |
| domains | 11 | dns, subdomains, dynamic-dns, free-domains |
| databases | 11 | sql, nosql, backend-platforms, caching |
| mobile | 10 | sdks, app-hosting, push, builders, deep-linking, analytics |
| learning | 10 | platforms, courses, tutorials, challenges, documentation |
| open-source | 10 | self-hostable (alternatives) |
| deployment | 14 | paas, edge-functions, serverless, containers |
| cloud | 8 | compute (AWS, Azure, GCP, Oracle, etc.) |
| auth | 8 | authentication, user-management |
| hosting | 6 | vps, shared-hosting, self-hosted |
| devtools | 6 | code-editors |
| storage | 6 | object-storage |
| payments | 5 | payment-processing |
| email-sms | 5 | transactional, marketing |
| monitoring | 5 | apm, logging, uptime |
| ci-cd | 5 | pipelines, automation |
| testing | 5 | api-testing, e2e-testing |

## Action Items (Complete)

| # | Task | Status |
|---|---|---|
| 1 | Fix Freenom rating (2.8 from formula) | ✅ |
| 2 | Fix 63 other rating mismatches | ✅ |
| 3 | Validate all alternatives reference existing IDs | ✅ (non-existing references are external tools) |
| 4 | Normalize field ordering across all entries | ✅ (already consistent) |
| 5 | Remove tag duplicates (`low-code` x2) | ✅ (done in earlier session) |
| 6 | Add missing `academic`, `azure`, `founder` tags | ✅ |
| 7 | All 20 categories populated | ✅ |
