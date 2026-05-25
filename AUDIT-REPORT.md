# Repository Audit Report

Generated: 2026-05-25

## Executive Summary

| Metric | Value |
|---|---|
| **Total Resources** | 193 |
| **Total Tags (registry)** | 216 (claimed 175 — actual count differs) |
| **Tags Used** | 164 |
| **Categories** | 20/20 (100%) |
| **Populated Subcategories** | 63/134 (47%) |
| **Empty Subcategories** | 71/134 (53%) |
| **Duplicate IDs** | None |
| **Duplicate Slugs** | None |
| **Missing Markdown Files** | 0 |
| **Extra Markdown Files** | 12 (subcategory overviews) |
| **Orphan Tags** | 0 |
| **Schema Violations** | 1 |
| **Rating Mismatches** | 125/193 (64.8%) |

---

## 1. Data Integrity

| Check | Result |
|---|---|
| Unique IDs | ✅ 193/193 unique |
| Unique Slugs | ✅ 193/193 unique |
| `id`/`slug` consistency | ✅ 193/193 match |
| Resources match schema `required` fields | ✅ 193/193 |
| `free_tier.summary` present | ✅ 193/193 |
| `ratings` has all 7 dimensions | ✅ 193/193 |
| `verification.status` present | ✅ 193/193 |
| `requires_card` is boolean | ✅ 193/193 |
| `region_restrictions.global` is boolean | ✅ 193/193 |
| `last_verified` is date | ✅ 193/193 |
| `docs` URL present | ✅ 192/193 (freenom has `null`) |

### Schema Violation

| Resource | Field | Issue |
|---|---|---|
| **freenom** | `verification.status` | Value is `"limited"` — schema enum allows only `"tested"`, `"community-verified"`, `"unverified"` |

### Cross-Reference: JSON ↔ Markdown Files

- **0 missing markdown files**: Every resource slug in resources.json has a matching `.md` file under `categories/`
- **12 extra markdown files** (no JSON entry, used as subcategory/supplemental content): `accelerator-programs`, `agents`, `ai-credits`, `apis`, `azure-for-students`, `cloud-credits`, `google-cloud-for-students`, `hosting-credits`, `models`, `notion-education`, `startup-support`, `vector-db`

### Multi-category tools

| Tool | Categories |
|---|---|
| **Firebase** | deployment, databases, auth, mobile |
| **Supabase** | databases, storage, auth |
| **Cloudflare** | deployment, storage, domains |
| **GitHub** | deployment, ci-cd, devtools, student-packs |
| **AWS** | cloud, student-packs, startup-credits |
| **Google** | cloud, design, student-packs, startup-credits |
| **Auth0** | auth, startup-credits |
| **Figma** | design, student-packs |
| **Namecheap** | domains, student-packs |
| **OpenAI** | ai, student-packs, startup-credits |
| **Stripe** | payments, startup-credits |

---

## 2. Category & Subcategory Analysis

### Category Distribution

| Category | Resources | Populated Subcategories |
|---|---|---|
| ai | 30 | apis(13), agents(9), vector-databases(8) |
| deployment | 14 | paas(7), edge-functions(3), serverless(2), containers(2) |
| student-packs | 14 | cloud-credits(5), ide-licenses(3), learning-platforms(2), domain-benefits(2), design-tools(1), github-student-pack(1) |
| design | 12 | prototyping(6), illustrations(2), typography(2), color-tools(1), icons(1) |
| startup-credits | 12 | cloud-programs(6), saas-programs(3), founder-perks(2), incubators(1) |
| databases | 11 | sql(5), nosql(3), managed-databases(1), caching(1), backend-platforms(1) |
| domains | 11 | dns-management(4), dynamic-dns(3), subdomains(2), free-domains(2) |
| learning | 10 | platforms(3), courses(3), coding-challenges(2), interactive-tutorials(1), documentation(1) |
| mobile | 10 | mobile-sdks(4), app-hosting(2), push-notifications(1), app-builders(1), deep-linking(1), app-analytics(1) |
| open-source | 10 | self-hostable(10) |
| cloud | 8 | compute(8) |
| auth | 8 | authentication(6), user-management(2) |
| hosting | 6 | vps(4), web-servers(2) |
| devtools | 6 | code-editors(6) |
| storage | 6 | object-storage(5), cdn-storage(1) |
| payments | 5 | payment-processing(5) |
| email-sms | 5 | email-api(3), email-marketing(1), transactional-email(1) |
| monitoring | 5 | apm(1), log-management(1), uptime-monitoring(1), error-tracking(1), infrastructure-monitoring(1) |
| ci-cd | 5 | pipelines(4), build-automation(1) |
| testing | 5 | api-testing(3), e2e-testing(2) |

### Subcategory Validation

- **63 subcategories populated** (including some not in taxonomy — verified as valid entries)
- **0 invalid subcategories** (all match taxonomy)
- **0 missing subcategories** (all resources have a subcategory)
- **71 empty subcategories** (defined in taxonomy but no resources)

### Top 10 Empty Subcategories (by priority)

| Category | Subcategory | Notes |
|---|---|---|
| auth | sso, mfa, authorization, passwordless, social-login | Core auth features |
| learning | certifications, newsletters, podcasts | Popular content types |
| testing | unit-testing, load-testing, browser-testing, visual-regression | Common testing needs |
| storage | file-hosting, backup, image-optimization | Essential storage use cases |
| ci-cd | testing-automation, code-quality, deployment-automation | CI/CD pipeline stages |
| devtools | version-control, cli-tools, api-tools, package-managers | Developer essentials |
| ai | models, rag, embeddings, image-generation, speech | High-demand AI features |
| deployment | platform-orchestration, backend-as-a-service | Modern deployment patterns |
| cloud | storage, networking, cdn, cloud-functions | Standard cloud services |
| mobile | app-testing | Mobile QA tools |

---

## 3. Tag Analysis

### Tag Registry vs Usage

| Metric | Value |
|---|---|
| Tags in registry (`tags.json`) | 216 (declared as 175 — count mismatch) |
| Unique tags used in resources | 164 |
| Orphan tags (used but not in registry) | **0** ✅ |
| Unused tags (in registry, not in resources) | 52 |

### Most-Used Tags

| Tag | Usage Count |
|---|---|
| `free-tier` | ~140 |
| `no-card` | ~120 |
| `open-source` | ~95 |
| `ai` | ~70 |
| `saas` | ~65 |
| `api` | ~60 |
| `cloud` | ~50 |
| `self-hosted` | ~45 |
| `freemium` | ~45 |
| `forever-free` | ~43 |

### Unused Tags (52 tags in registry, never used in resources)

Examples: `card-required`, `pay-what-you-want`, `rate-limited`, `generous-free-tier`, `china-restricted`, `russia-restricted`, `sanctioned-restricted`, `us-only`, `eu-only`, `india-friendly`, `india-restricted`, `asia-pacific`, `wasm`, `saml`, `oauth`, `grpc`, `rest`, `webhook`, `redis`, `mongodb`, `s3-compatible`, `stripe-compatible`, `openai-compatible`, `enterprise`, `distributed`, `gpu`, `realtime`, `extension`, `cassandra`, `search`

---

## 4. Rating Analysis ⚠️ CRITICAL

### Formula (from `ratings.json`)

```
overall = (beginner_friendly×1.0 + docs×1.0 + free_generosity×1.5 + setup×0.8 + reliability×1.2 + performance×0.8 + community×0.5) / 6.8

Rounded to 1 decimal place.
```

### Finding: 125/193 (64.8%) resources have incorrect `overall` scores

The previous audit report claimed 64 entries were fixed. However:
- It used a **different formula** (`docs×0.20 + free_generosity×0.20 + reliability×0.20 + performance×0.15 + beginner_friendly×0.10 + setup×0.05 + community×0.10`) which does **not match** `ratings.json`
- Using the **correct weighted formula** from `ratings.json`, **125 resources** have mismatched stored `overall` values

### Example Mismatches

| Resource | Stored | Calculated | Delta |
|---|---|---|---|
| langchain | 4.2 | 3.9 | +0.3 |
| autogen | 3.7 | 3.5 | +0.2 |
| anthropic-api | 4.2 | 3.9 | +0.3 |
| flowise | 4.0 | 4.2 | -0.2 |
| cohere-api | 3.7 | 3.5 | +0.2 |
| stripe | 4.6 | 4.5 | +0.1 |
| jenkins | 3.9 | 3.6 | +0.3 |
| freenom | 2.8 | 3.0 | -0.2 |
| dynamodb | 4.7 | 4.5 | +0.2 |
| cloudflare-r2 | 4.8 | 4.7 | +0.1 |

### Rating Distribution

| Score Range | Count |
|---|---|
| 4.5–5.0 (Elite) | ~25 |
| 4.0–4.4 (Excellent) | ~80 |
| 3.0–3.9 (Good) | ~80 |
| 2.0–2.9 (Fair) | ~8 |

### Verification Status Distribution

| Status | Count |
|---|---|
| tested | 19 |
| community-verified | 173 |
| limited | 1 (freenom — schema violation) |

### Resource Status Distribution

| Status | Count |
|---|---|
| active | 192 |
| limited | 1 |

---

## 5. Missing Content

### Empty Subcategories (71 total)

**High Priority (developer-facing gaps):**

| Category | Empty Subcategories |
|---|---|
| **ai** | models, rag, embeddings, image-generation, video-generation, speech, ml-platforms, prompt-tools |
| **auth** | sso, mfa, authorization, passwordless, social-login |
| **testing** | unit-testing, load-testing, browser-testing, test-management, visual-regression |
| **ci-cd** | artifact-hosting, testing-automation, code-quality, deployment-automation |
| **deployment** | platform-orchestration, backend-as-a-service |
| **devtools** | version-control, cli-tools, api-tools, package-managers, browser-devtools, code-generation, collaboration |
| **cloud** | serverless-compute, cloud-storage, networking, cdn, cloud-functions, free-tier |
| **hosting** | static-sites, dns, ssl-certificates, reverse-proxy |
| **storage** | file-hosting, backup, image-optimization |
| **payments** | invoicing, subscription-management, checkout, fraud-detection, payouts |
| **email-sms** | sms, push-notifications, multi-channel |
| **mobile** | app-testing |
| **learning** | certifications, newsletters, podcasts |
| **databases** | vector-databases, graph-databases, time-series |
| **monitoring** | real-user-monitoring, synthetic-monitoring |
| **design** | ui-kits, design-systems, mockups, screenshot-tools |
| **open-source** | libraries, community-editions, templates, boilerplates |
| **startup-credits** | open-source-grants |

---

## 6. Quality & Consistency

### Field Consistency

| Check | Result |
|---|---|
| `free_tier` object | ✅ 193/193 |
| `paid_plan` object (can be null) | ✅ 193/193 |
| `student_benefits.available` boolean | ✅ 193/193 |
| `student_benefits.verification_method` enum | ✅ Valid values used |
| `region_restrictions.restricted_countries` array | ✅ ISO country codes |
| `languages` array with ISO codes | ✅ 193/193 |
| `alternatives` array format | ✅ All valid kebab-case |
| `billing_model` standardized | ✅ Uses enum values |

### Paid Plan Analysis

| Billing Model | Count |
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
| (null — no paid plan) | ~55 |

---

## 7. Resource Density & Gaps

### Density Heatmap

| Density | Categories | Count |
|---|---|---|
| **Very High** (>20) | ai | 30 |
| **High** (10–14) | student-packs, deployment, design, startup-credits, databases, domains, learning, mobile, open-source | 10–14 each |
| **Medium** (5–9) | cloud, auth, hosting, devtools, storage, payments, email-sms, monitoring, ci-cd, testing | 5–8 each |
| **Low** (<5) | — | 0 |

### Notable Gaps

- **AI**: Heavy on APIs (13) and agents (9), but missing models, rag, embeddings, image-generation subcategories entirely
- **Auth**: Only authentication (6) and user-management (2) — no SSO, MFA, passwordless, social-login entries
- **Testing**: No unit testing, load testing, or browser testing tools
- **CI/CD**: No artifact hosting, testing automation, code quality, or deployment automation entries
- **Payments**: Only basic payment processing — no invoicing, subscription management, or checkout tools
- **Cloud**: Only compute (VMs) — no storage, networking, CDN, or serverless compute entries

---

## 8. Priority Population Order

Based on: Developer demand, competitive landscape, strategic value, and current coverage gaps.

| Rank | Category | Priority Subcategories | Rationale |
|---|---|---|---|
| **1** | **auth** | sso, mfa, passwordless, social-login | Every app needs auth; current gap is a critical blind spot |
| **2** | **testing** | unit-testing, load-testing, browser-testing | Developer workflow essentials |
| **3** | **ci-cd** | testing-automation, code-quality, deployment-automation | Natural pipeline expansion |
| **4** | **ai** | models, rag, embeddings, image-generation | Highest-traffic category; subcategory gaps weaken authority |
| **5** | **payments** | subscription-management, invoicing, checkout | Monetization features every SaaS needs |
| **6** | **cloud** | cloud-storage, networking, cdn, cloud-functions | Standard infra services from cloud providers |
| **7** | **storage** | file-hosting, backup, image-optimization | Essential data management tools |
| **8** | **hosting** | static-sites, dns, ssl-certificates | Foundational web hosting tools |
| **9** | **devtools** | version-control, cli-tools, package-managers | Developer toolchain fundamentals |
| **10** | **mobile** | app-testing | Mobile QA is underserved |

---

## Action Items

| # | Task | Priority | Status |
|---|---|---|---|
| 1 | Recalculate all 125 rating mismatches using correct weighted formula from `ratings.json` | 🔴 Critical | ❌ Open |
| 2 | Fix `freenom` verification.status to valid enum value (`"community-verified"` or `"unverified"`) | 🟡 Medium | ❌ Open |
| 3 | Add missing `models` subcategory resources under AI | 🟡 Medium | ❌ Open |
| 4 | Add auth SSO/MFA/passwordless resources | 🟡 Medium | ❌ Open |
| 5 | Update `tags.json` `total_tags` from 175 to 216 (actual count) | 🟢 Low | ❌ Open |
| 6 | Populate high-priority empty subcategories (see Section 8) | 🟡 Medium | ❌ Open |
| 7 | Verify `alternatives` arrays reference only existing slugs | 🟢 Low | ❌ Open |

## Recommendations

1. **Rating formula must be applied programmatically** — manually setting `overall` leads to drift. Add a CI check that verifies `overall` matches the weighted formula.
2. **Tag count in `tags.json`** — correct the metadata from 175 to 216 to reflect actual tag count.
3. **Expand subcategory coverage** — focus on auth (SSO/MFA/passwordless), AI (models/RAG/embeddings), testing (unit/load/browser), and CI/CD (testing automation/code quality) as the highest-impact gaps.
4. **Remove or update the verification.status enum** in `resources-schema.json` to include `"limited"` if it should be a valid status, or fix freenom to use an allowed value.
5. **Add 71 empty subcategory entries** to improve coverage; target at least 2 resources per empty subcategory.
