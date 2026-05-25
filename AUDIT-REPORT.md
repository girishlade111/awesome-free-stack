# Repository Audit Report

**Generated**: 2026-05-25
**Total Resources**: 193
**Categories**: 20/20 populated

---

## 🔴 Critical Issues

### 1. Rating Mismatches: 125/193 (64.8%)

The stored `overall` scores were computed with an **incorrect formula**. The correct weighted formula as defined in `data/ratings.json` is:

```
overall = (beginner_friendly×1.0 + docs×1.0 + free_generosity×1.5 + setup×0.8 + reliability×1.2 + performance×0.8 + community×0.5) / 6.8
```

Previously, scores were computed using weights that summed to 1.0 (e.g., `docs×0.20 + free_generosity×0.20 + ...`), which gives different weight distribution. The correct formula uses raw weights (1.0, 1.0, 1.5, 0.8, 1.2, 0.8, 0.5) that sum to 6.8, then divides by 6.8.

**Impact**: 125 entries have `overall` values off by 0.1–0.3. This affects tier badges (Elite/Excellent/Good), BEST-OF rankings, and all category comparisons.

### 2. Schema Violation: 1

| Resource | Field | Value | Expected |
|---|---|---|---|
| `freenom` | `verification.status` | `"limited"` | `"tested"`, `"community-verified"`, or `"unverified"` |

The field `verification.status` only allows `["tested", "community-verified", "unverified"]` per the JSON Schema, but freenom has `"limited"`.

---

## 🟡 Notable Issues

### 3. Broken Cross-References: 147 references to non-existent IDs

The `alternatives` and `alternatives_to` fields reference resource IDs that don't exist in `data/resources.json`. Examples:
- `[langchain].alternatives → haystack` (no resource with ID `haystack`)
- `[crewai].alternatives → swarm` (no resource with ID `swarm`)
- `[ollama].alternatives → lm-studio` (no resource with ID `lm-studio`)

Some of these reference tools that should be added to the collection; others reference external tools that may never be added. Consider cleaning up or resolving.

### 4. Orphan Markdown Files: 33

These are markdown files in `categories/` directories that have **no corresponding JSON entry** in `resources.json`:

- **Overview docs** (expected): `ai/agents.md`, `ai/apis.md`, `ai/models.md`, `ai/vector-db.md`, `auth/auth.md`, `ci-cd/ci-cd.md`, `cloud/cloud.md`, `databases/databases.md`, `deployment/deployment.md`, `design/design.md`, `devtools/devtools.md`, `domains/domains.md`, `email-sms/email-sms.md`, `hosting/hosting.md`, `learning/learning.md`, `mobile/mobile.md`, `monitoring/monitoring.md`, `open-source/open-source.md`, `payments/payments.md`, `startup-credits/startup-credits.md`, `storage/storage.md`, `testing/testing.md`
- **Extra guides**: `startup-credits/accelerator-programs.md`, `startup-credits/ai-credits.md`, `startup-credits/cloud-credits.md`, `startup-credits/hosting-credits.md`, `startup-credits/startup-support.md`, `student-packs/azure-for-students.md`, `student-packs/benefits-overview.md`, `student-packs/google-cloud-for-students.md`, `student-packs/notion-education.md`, `student-packs/student-packs.md`, `student-packs/verification-guide.md`

The overview docs are likely intentional, but the guide files in `student-packs/` and `startup-credits/` should be reviewed for relevance.

### 5. Duplicate Website: 1

| Resource | Website |
|---|---|
| `namecheap-student` | `https://www.namecheap.com/education` |
| `dotme-students` | `https://www.namecheap.com/education` |

Both point to the same Namecheap education page. This is **partially by design** (two separate offers on the same page: Namecheap bundle vs. .me domain), but the duplicate URL could cause confusion.

---

## 🟢 Good News

- **No duplicate IDs, slugs, or names**
- **No missing markdown files** — all 193 resources have their `.md` files
- **No orphan tags** — every tag used in `resources.json` exists in `tags.json`
- **All required fields present** — every resource has all 22 required fields
- **All subcategories valid** — no resource uses an undefined subcategory

---

## 📊 Empty Subcategories: 71/135 (52.6%)

| Category | Populated | Empty | Total |
|---|---|---|---|
| ai | 3 (agents, apis, vector-db) | 8 | 11 |
| auth | 2 (authentication, user-mgmt) | 5 | 7 |
| ci-cd | 2 (pipelines, build-automation) | 4 | 6 |
| cloud | 1 (compute) | 6 | 7 |
| databases | 5 (sql, nosql, managed, caching, backend) | 3 | 8 |
| deployment | 4 | 2 | 6 |
| design | 5 | 4 | 9 |
| devtools | 1 (code-editors) | 7 | 8 |
| domains | 4 | 1 | 5 |
| email-sms | 3 | 3 | 6 |
| hosting | 2 | 4 | 6 |
| learning | 5 | 3 | 8 |
| mobile | 6 | 1 | 7 |
| monitoring | 5 | 2 | 7 |
| open-source | 1 (self-hostable) | 4 | 5 |
| payments | 1 (payment-processing) | 5 | 6 |
| startup-credits | 4 | 1 | 5 |
| storage | 2 | 3 | 5 |
| student-packs | 6 | 0 | 6 |
| testing | 2 (api, e2e) | 5 | 7 |

---

## 📈 Unused Tags: 47 defined but never used

Notable unused tags include: `artificial-intelligence`, `deep-learning`, `go`, `grpc`, `kotlin`, `nodejs`, `oauth`, `php`, `ruby`, `rust`, `saml`, `svelte`, `swift`, `vue`, `webassembly`, `webhook`, `time-series`, `unit-test`, `container`, `dotnet`, `java`, `mongodb`, `nextjs`, `rest`, `china-restricted`, `russia-restricted`, `eu-only`, `us-only`, `donation`, `trial`, `pay-what-you-want`, `community-pick`, `trending`, `verified`, `top-rated`, `new`, and all 7 verification tags except none.

---

## 📋 Priority Population Order

| Rank | Category | Current | Target | Gap | Empty Subs |
|---|---|---|---|---|---|
| 1 | **testing** | 5 | 15 | 67% | 5 |
| 2 | **devtools** | 6 | 15 | 60% | 7 |
| 3 | **ci-cd** | 5 | 12 | 58% | 4 |
| 4 | **email-sms** | 5 | 12 | 58% | 3 |
| 5 | **monitoring** | 5 | 12 | 58% | 2 |
| 6 | **payments** | 5 | 10 | 50% | 5 |
| 7 | **hosting** | 6 | 12 | 50% | 4 |
| 8 | **open-source** | 10 | 20 | 50% | 4 |
| 9 | **storage** | 6 | 12 | 50% | 3 |
| 10 | **learning** | 10 | 20 | 50% | 3 |
| 11 | **mobile** | 10 | 20 | 50% | 1 |
| 12 | **cloud** | 8 | 15 | 47% | 6 |
| 13 | **auth** | 8 | 15 | 47% | 5 |
| 14 | **databases** | 11 | 20 | 45% | 3 |
| 15 | **ai** | 30 | 50 | 40% | 8 |
| 16 | **design** | 12 | 20 | 40% | 4 |
| 17 | **startup-credits** | 12 | 20 | 40% | 1 |
| 18 | **deployment** | 14 | 20 | 30% | 2 |
| 19 | **student-packs** | 14 | 20 | 30% | 0 |
| 20 | **domains** | 11 | 15 | 27% | 1 |

---

## 🏆 Rating Tiers (After Correction)

| Tier | Count |
|---|---|
| 🏆 Elite (4.5+) | 57 |
| ⭐ Excellent (4.0–4.4) | 96 |
| ✅ Good (3.0–3.9) | 40 |
| 🟡 Fair (2.0–2.9) | 0 |
| 🔴 Limited (1.0–1.9) | 0 |
| ⚠ Insufficient (<1.0) | 0 |

**Highest**: cloudflare-dns, figma, google-fonts, vs-code (all 5.0)
**Lowest**: freenom (3.0), branch (3.4), nic-us (3.4), ibm-cloud (3.4)

---

## 🔧 Recommended Actions

### Immediate (fix data integrity)
1. **Recalculate all 125 rating mismatches** — script updates `overall` for every resource
2. **Fix freenom verification status** — change `"limited"` to `"community-verified"` (add a note in the markdown instead)

### Short-term (fill gaps)
3. Populate top-priority categories: **testing**, **devtools**, **ci-cd**, **email-sms**, **monitoring**
4. Add 2–3 entries to the most empty subcategories (embedded, models, RAG, SSO, MFA, etc.)
5. Clean up orphan guide files or add them to `resources.json`

### Medium-term (improve quality)
6. Resolve broken cross-references — either add the referenced tools or prune the references
7. Consider removing or using the 47 unused tags
8. Fix the Namecheap duplicate website URL (use distinct sub-pages if possible)

### Long-term (scale)
9. Expand toward target of 500+ resources
10. Build CI/CD pipeline to prevent rating drift
11. Add community voting infrastructure
