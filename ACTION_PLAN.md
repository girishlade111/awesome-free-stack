# ACTION_PLAN.md — Awesome Free Stack

## Current State Summary

```
Resources:   601 across 20 categories
Coverage:    90/135 subcategories populated (66.7%)
Unused tags: 30 defined but never applied
Undefined tags: 68 used but not in tags.json
Broken refs: 317 cross-references to nonexistent IDs
Rating:      ALL 601 resources missing `rating` field
Verification violations: 1 (freenom: "limited")
Empty subcats: 45 (33.3% of taxonomy)
```

---

## ⚠️ Critical (Data Integrity)

### 1. Restore `rating` field on all 601 resources

**Problem**: Every resource has `rating: undefined` — the field exists in schema but every entry lacks it.

**Action**: Bulk-assign ratings based on `ratings.overall` scores. Link to a `MIGRATION_RATING.md` scoring rubric.

```
overall >= 4.0 → "must-have"
overall >= 3.0 → "nice-to-have"
overall >= 2.0 → "supplementary"
overall <  2.0 → "avoid"
```

**Estimate**: 1 batch script + manual review of edge cases (~30 mins)

### 2. Fix broken cross-references (317)

**Problem**: Resources reference IDs like `"docker-hub"`, `"aws-cdk"`, `"semgrep"` that don't exist in `resources.json`.

**Action**:
1. Extract the unique list of broken refs (~150 unique IDs)
2. Either add the referenced resources OR fix the reference (remove/redirect)
3. Many are from categories built after the initial 193-resource audit — need to populate new resources

**Estimate**: 2-4 hours to resolve

### 3. Fix `verification.status` violation (freenom)

**Problem**: `verification.status: "limited"` is not in allowed values (`tested`, `community-verified`, `unverified`, `deprecated`).

**Action**: Change to `"community-verified"` or create a schema change to allow `"limited"`.

---

## 🟠 Coverage Gaps (45 empty subcategories)

### Priority 1: Core infrastructure gaps (high user demand)

| Category | Empty Subcategories | Suggested Starting Points |
|----------|-------------------|--------------------------|
| cloud (6/7 empty) | serverless-compute, cloud-storage, networking, cdn, cloud-functions, free-tier | Cloudflare Free Plan, Vercel Edge, AWS Free Tier |
| databases (3/8 empty) | vector-databases, graph-databases, time-series | Supabase Vector, Dgraph, InfluxDB, TimescaleDB |
| hosting (4/6 empty) | static-sites, dns, ssl-certificates, reverse-proxy | Cloudflare Pages, Namecheap FreeDNS, Let's Encrypt, Nginx |
| payments (5/6 empty) | invoicing, subscription-management, checkout, fraud-detection, payouts | Invoice Ninja, Stripe Invoicing, Chargebee Free |

### Priority 2: Developer experience

| Category | Empty Subcategories | Suggested Starting Points |
|----------|-------------------|--------------------------|
| devtools (1/8 empty) | collaboration | Tuple, CodeWithMe |
| design (4/9 empty) | ui-kits, design-systems, mockups, screenshot-tools | Material UI, shadcn/ui, ShotEasy |
| testing (1/7 empty) | test-management | TestRail Free, Zephyr |
| mobile (1/7 empty) | app-testing | Firebase Test Lab Free |

### Priority 3: Niche depth

| Category | Empty Subcategories | Suggested Starting Points |
|----------|-------------------|--------------------------|
| ai (1/11 empty) | video-generation | Runway Gen-2 Free, Pika |
| storage (3/5 empty) | file-hosting, backup, image-optimization | Filebin, Imgix Free |
| email-sms (3/6 empty) | sms, push-notifications, multi-channel | Twilio Free Credits, OneSignal |
| monitoring (2/7 empty) | real-user-monitoring, synthetic-monitoring | OpenReplay, Checkly |
| domains (1/5 empty) | domain-forwarding | Namecheap Free Forwarding |
| learning (3/8 empty) | certifications, newsletters, podcasts | Google Certificates Free, DevBytes |
| startup-credits (1/5 empty) | open-source-grants | NLnet, GitHub Accelerator |

---

## 🟡 Data Hygiene

### 5. Reconcile tags (30 unused + 68 undefined)

**30 unused tags** — defined in tags.json but no resource uses them:

| Group | Tags |
|-------|------|
| global | `new`, `trending`, `top-rated`, `verified` |
| category | `deep-learning`, `time-series`, `billing`, `artificial-intelligence` |
| pricing | `pay-what-you-want`, `donation` |
| region | `us-friendly`, `eu-compliant`, `india-restricted`, `china-restricted`, `russia-restricted`, `sanctioned-restricted`, `eu-only`, `asia-pacific` |
| compatibility | `svelte`, `grpc`, `webhook`, `stripe-compatible`, `webassembly` |
| verification | ALL 7 (`tested`, `community-verified`, `unverified`, `deprecated`, `limited`, `requires-invite`, `waitlist`) |

**Action**: Either apply these to matching resources OR remove from schema.

**68 undefined tags** — used in resources but missing from tags.json:

Notable: `npm`, `apple`, `vite`, `cpp`, `rails`, `scala`, `c`, `storybook`, `puppeteer`, `terraform`, `github-actions`, `helm`, `flutter`, `windows`, `linux`, `vscode`, `jetbrains`, `terraform`, `ssh`, `html`, `css`, `seo`, and many more.

**Action**: Batch-add these to the tags.json taxonomy schema under the `compatibility` and `category` groups.

### 6. Update stale stats.json

**Problem**: `stats.json` reports data that may not match current resource count after batch operations. The last audit was at 193 resources.

**Action**: Regenerate `stats.json` after all other fixes via a build script.

---

## 🟢 Subcategory thin spots (36 subcats with <3 resources)

Many have only 1-2 entries. Focus on:

**1-resource subcategories** (underbuilt):
- `databases/backend-platforms`, `databases/caching`, `databases/managed-databases`
- `design/color-tools`, `design/icons`
- `email-sms/email-marketing`, `email-sms/transactional-email`
- `monitoring/*` (all 5 subcats have 1 each)
- `mobile/app-analytics`, `mobile/app-builders`, `mobile/deep-linking`, `mobile/push-notifications`
- `learning/documentation`, `learning/interactive-tutorials`
- `startup-credits/incubators`
- `storage/cdn-storage`
- `student-packs/design-tools`, `student-packs/github-student-pack`

Add 2-3 resources each to make these subcategories meaningfully useful.

---

## Execution Priority

```
P0 — Critical data integrity   (ratings, broken refs, freenom fix)
P1 — Coverage gaps             (populate empty subcategories)
P2 — Tag reconciliation        (unused + undefined tags)
P3 — Thin spots                (1-2 resources per subcat)
P4 — stats.json regeneration   (after all other fixes)
```

---

*Generated: 2026-06-25 | `.build/category-build.md` and `data/` files are the source of truth.*
