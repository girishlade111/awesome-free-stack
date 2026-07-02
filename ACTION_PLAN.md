# Action Plan — awesome-free-stack

> Generated: 2026-07-01 | Data verified against live `resources.json`
> Status: ✅ Data-verified (meta corrected from stale reports)

---

## 1. Current State Snapshot

| Metric | Value |
|---|---|
| Total resources | **601** (meta wrongly says 511 — needs fix) |
| Categories | **20** |
| Total subcategories | **135** |
| Populated subcategories | **90 (66.7%)** |
| Empty subcategories | **45 (33.3%)** |
| Schema violations | **1** (`freenom` has `verification.status: "limited"`) |
| Broken cross-references | **222** (targeting non-existent resource IDs) |
| Tags defined (tags.json) | **211** |
| Tags used in resources | **249** |
| Tags used but undefined | **68** |
| Tags defined but unused | **30** |
| Resources with `requires_card: false` | **551** |
| Resources with `requires_card: true` | **50** |
| Verification: `community-verified` | **510** |
| Verification: `tested` | **90** |
| Verification: unverified | **0** |
| Verification: (violation) | **1** (`freenom` = `"limited"`) |

---

## 2. Category Coverage Detail

| Category | Resources | Subcats | Populated | Empty | Coverage |
|---|---|---|---|---|---|
| AI | 139 | 11 | 10 | 1 | 91% |
| Auth | 63 | 7 | 7 | 0 | 100% |
| CI/CD | 95 | 6 | 6 | 0 | 100% |
| Cloud | 8 | 7 | 1 | 6 | 14% |
| Databases | 11 | 8 | 5 | 3 | 63% |
| Deployment | 14 | 6 | 4 | 2 | 67% |
| Design | 12 | 9 | 5 | 4 | 56% |
| DevTools | 96 | 8 | 7 | 1 | 88% |
| Domains | 11 | 5 | 4 | 1 | 80% |
| Email-SMS | 5 | 6 | 3 | 3 | 50% |
| Hosting | 6 | 6 | 2 | 4 | 33% |
| Learning | 10 | 8 | 5 | 3 | 63% |
| Mobile | 10 | 7 | 6 | 1 | 86% |
| Monitoring | 5 | 7 | 5 | 2 | 71% |
| Open Source | 10 | 5 | 1 | 4 | 20% |
| Payments | 5 | 6 | 1 | 5 | 17% |
| Startup Credits | 12 | 5 | 4 | 1 | 80% |
| Storage | 6 | 5 | 2 | 3 | 40% |
| Student Packs | 14 | 6 | 6 | 0 | 100% |
| Testing | 69 | 7 | 6 | 1 | 86% |

---

## 3. Category Priority Order

Ranked by **urgency** (low resources + high empty subcats = highest priority):

### Tier 1 — Critical (0-10 resources, 3+ empty subcats)
| Rank | Category | Res | Empty Subcats | Why |
|---|---|---|---|---|
| 1 | Cloud | 8 | 6 | Only 1/7 subcats populated; core infrastructure category |
| 2 | Payments | 5 | 5 | Only 1/6 subcats; essential for SaaS |
| 3 | Design | 12 | 4 | Visual tools needed by all developers |
| 4 | Open Source | 10 | 4 | Only 1/5 subcats; core identity of repo |
| 5 | Hosting | 6 | 4 | Only 2/6 subcats; essential category |
| 6 | Email-SMS | 5 | 3 | Critical communication infra; 3/6 empty |
| 7 | Storage | 6 | 3 | Only 2/5 subcats; apps need storage |
| 8 | Databases | 11 | 3 | 3 core subcats empty (vector, graph, time-series) |
| 9 | Learning | 10 | 3 | 3 education subcats empty |

### Tier 2 — High Priority (under 20 resources, gaps exist)
| 10 | Deployment | 14 | 2 | BaaS & platform orchestration missing |
| 11 | Monitoring | 5 | 2 | RUM & synthetic monitoring empty |
| 12 | Student Packs | 14 | 0 | Fully covered — maintain |
| 13 | Startup Credits | 12 | 1 | Open source grants missing |
| 14 | Domains | 11 | 1 | Domain forwarding missing |
| 15 | Mobile | 10 | 1 | App testing subcategory empty |

### Tier 3 — Healthy (60+ resources, minor gaps)
| 16 | Testing | 69 | 1 | Test management missing |
| 17 | DevTools | 96 | 1 | Collaboration missing |
| 18 | AI | 139 | 1 | Video generation missing |

### Tier 4 — Mature (fully covered)
| 19 | Auth | 63 | 0 | Complete |
| 20 | CI/CD | 95 | 0 | Complete |

---

## 4. Population Roadmap

### Phase 1 — Foundation Fixes (Do First)
| Task | Est. Effort | Details |
|---|---|---|
| Fix stale meta count (511 → 601) | 5 min | Update `resources.json` meta |
| Fix `freenom` schema violation | 5 min | Change `verification.status` from `"limited"` to `"tested"` |
| Fix 222 broken cross-refs | 2-3 hrs | Either remove dangling refs or add missing resources |
| Audit & fix 68 undefined tags | 1-2 hrs | Add missing tags to tags.json or fix typos in resource tags |
| Remove or mark 30 unused tags | 30 min | Deprecate or document unused tag IDs |

### Phase 2 — Critical Coverage (Tier 1 categories)
Target: **~80 new resources** across 9 categories

| Category | Empty Subcats to Fill | Est. New Resources | Notes |
|---|---|---|---|
| Cloud | serverless-compute, cloud-storage, networking, CDN, cloud-functions, free-tier | 12-18 | Major cloud free tiers (Vercel, Netlify, Cloudflare, Supabase) |
| Payments | invoicing, subscription-management, checkout, fraud-detection, payouts | 10-15 | Stripe alternatives, open-source invoicing |
| Design | UI kits, design-systems, mockups, screenshot-tools | 8-12 | shadcn/ui, Radix, Screenshot API tools |
| Open Source | libraries, community-editions, templates, boilerplates | 8-12 | Popular MIT/Apache projects, starter repos |
| Hosting | static-sites, DNS, SSL, reverse-proxy | 8-10 | Vercel, Netlify, Cloudflare Pages, Let's Encrypt |
| Email-SMS | SMS, push-notifications, multi-channel | 6-9 | Twilio alternatives, push notification services |
| Storage | file-hosting, backup, image-optimization | 6-9 | File hosting, backup services, image CDN |
| Databases | vector-databases, graph-databases, time-series | 6-9 | Pinecone alternatives, Neo4j Aura, Timescale |
| Learning | certifications, newsletters, podcasts | 6-9 | Free cert programs, dev newsletters, podcasts |

### Phase 3 — Secondary Gaps (Tier 2)
Target: **~30 new resources** across 6 categories

| Category | Empty Subcats to Fill | Est. New Resources |
|---|---|---|
| Deployment | platform-orchestration, BaaS | 6-8 |
| Monitoring | RUM, synthetic monitoring | 4-6 |
| Startup Credits | open-source grants | 3-5 |
| Domains | domain forwarding | 2-3 |
| Mobile | app testing | 4-6 |
| AI | video generation | 6-10 |

### Phase 4 — Polish & Deepen (Tier 3-4)
Target: **~25 new resources** for depth

| Category | Thin Subcats to Deepen | Est. New Resources |
|---|---|---|
| Testing | Add to test-management | 4-6 |
| DevTools | Add to collaboration | 3-5 |
| AI | Deepen video-generation, speech, image-gen | 8-10 |
| Student Packs | Deepen existing, add GitHub Pack guide | 3-5 |
| CI/CD | Deepen with more runners, registries | 4-6 |

---

## 5. Missing Coverage Report

### 45 Empty Subcategories (alphabetical by category)

| Category | Empty Subcategory | Priority | Suggested Targets |
|---|---|---|---|
| AI | video-generation | P3 | Runway, Pika, Synthesia, HeyGen |
| Cloud | serverless-compute | P1 | Vercel Functions, Netlify Edge, Cloudflare Workers |
| Cloud | cloud-storage | P1 | Wasabi free tier, Backblaze B2 |
| Cloud | networking | P1 | Tailscale, ZeroTier, Cloudflare Tunnel |
| Cloud | cdn | P1 | Cloudflare, Bunny CDN, CacheFly |
| Cloud | cloud-functions | P1 | AWS Lambda free, GCP Cloud Functions |
| Cloud | free-tier | P1 | Always-free tier guides |
| Databases | vector-databases | P1 | Pinecone free, Weaviate, Qdrant |
| Databases | graph-databases | P1 | Neo4j AuraDB Free |
| Databases | time-series | P2 | InfluxDB, TimescaleDB |
| Deployment | platform-orchestration | P2 | Porter, Coolify on K8s |
| Deployment | backend-as-a-service | P2 | Supabase, Appwrite, PocketBase |
| Design | ui-kits | P1 | shadcn/ui, Radix, Ark UI |
| Design | design-systems | P2 | Storybook, Pattern Lab |
| Design | mockups | P2 | Excalidraw, tldraw |
| Design | screenshot-tools | P2 | Urlbox, ScreenshotAPI |
| Domains | domain-forwarding | P2 | Namecheap, Cloudflare |
| Email-SMS | sms | P1 | Twilio free, Vonage |
| Email-SMS | push-notifications | P1 | OneSignal, Firebase |
| Email-SMS | multi-channel | P2 | Courier, Sendbird |
| Hosting | static-sites | P1 | Vercel, Netlify, Cloudflare Pages |
| Hosting | dns | P1 | Cloudflare DNS, He.net |
| Hosting | ssl-certificates | P1 | Let's Encrypt, ZeroSSL |
| Hosting | reverse-proxy | P2 | Cloudflare Tunnel, ngrok |
| Learning | certifications | P3 | FreeCodeCamp, Google Cloud Skills Boost |
| Learning | newsletters | P3 | ByteByteGo, TLDR, Pointer |
| Learning | podcasts | P3 | DevNews, Syntax, Changelog |
| Mobile | app-testing | P2 | Firebase Test Lab, BrowserStack |
| Monitoring | real-user-monitoring | P2 | Plausible, Umami, PostHog |
| Monitoring | synthetic-monitoring | P2 | Checkly, Better Stack |
| Open Source | libraries | P1 | Awesome lists, popular MIT libraries |
| Open Source | community-editions | P1 | GitLab CE, Mattermost |
| Open Source | templates | P2 | Cookie Cutter, SaaS starters |
| Open Source | boilerplates | P2 | Next.js boilerplates, Supabase starters |
| Payments | invoicing | P1 | Invoice Ninja, Invoice Simple |
| Payments | subscription-management | P1 | Stripe Billing, Chargebee |
| Payments | checkout | P1 | Stripe Checkout, Paddle |
| Payments | fraud-detection | P2 | Sift, FraudLabs Pro |
| Payments | payouts | P2 | Stripe Connect, Tipalti |
| Storage | file-hosting | P1 | Filestack, Transloadit |
| Storage | backup | P2 | Duplicati, Borg backup |
| Storage | image-optimization | P1 | Cloudinary, Imgix, ImageKit |
| Startup Credits | open-source-grants | P2 | OTF, NLnet, SOS |
| Testing | test-management | P2 | TestRail free, Qase, Zephyr |

---

## 6. Quality Improvement Tasks

### 6.1 Fix Stale Meta (5 min)
- `resources.json` meta says 511 → change to 601

### 6.2 Fix Schema Violation (5 min)
- `freenom`: change `verification.status: "limited"` → `"tested"`

### 6.3 Fix 222 Broken Cross-References (2-3 hrs)
- 60% are references to resources that were removed or renamed
- 40% are resources that should exist but haven't been added yet
- **Strategy**: For each broken ref, either (a) add the missing resource, (b) replace with an existing alternative, or (c) remove the dead reference

### 6.4 Fix Tag Drift (1-2 hrs)
- **68 tags used but not in tags.json**: Add them to appropriate groups, e.g.:
  - `accessibility`, `seo`, `documentation`, `code-review`, `linting` → global tags
  - `angular`, `flutter`, `react`, `vue`, `nextjs` → language/framework tags
  - `github-actions`, `terraform`, `helm`, `kubernetes`, `docker` → DevOps tags
- **30 tags defined but unused**: Remove or deprecate in tags.json

### 6.5 Verify Rating Accuracy
- All 601 resources have `ratings.overall` — verify scores match weighted formula from `ratings.json`
- Weights: free_generosity ×1.5, reliability ×1.2, others ×1.0

### 6.6 Set Up Validation Workflow
- Automate schema validation in CI/CD to prevent drift
- Run monthly tag audit + broken reference detection

---

## 7. Estimated Total Effort

| Phase | Task | Est. New Resources | Est. Time |
|---|---|---|---|
| 1 | Foundation fixes | 0 | 4-6 hrs |
| 2 | Critical coverage | ~80 | 20-30 hrs |
| 3 | Secondary gaps | ~30 | 8-12 hrs |
| 4 | Polish & deepen | ~25 | 6-10 hrs |
| **Total** | | **~135** | **38-58 hrs** |

---

## 8. Quick Wins (Do This Week)

1. **Fix meta count**: `resources.json` → `total_resources: 601`
2. **Fix schema violation**: `freenom` → `verification.status: "tested"`
3. **Fix broken refs with existing resources**: Many broken refs point to tools that already exist under different IDs — just update the reference
4. **Remove dead tags from tags.json**: 30 unused tags can be cleaned immediately
5. **Add low-hanging tags**: ~30 of the 68 undefined tags are common developer terms that can be added to tags.json immediately

---

## 9. Risk & Dependencies

| Risk | Impact | Mitigation |
|---|---|---|
| Schema violations increase without CI | High | Add `ajv` validation to GitHub Actions |
| Broken refs multiply as resources are removed | Medium | Add post-removal hook to check references |
| Tag drift continues | Medium | Add monthly tag audit workflow |
| Rating weights not enforced | Low | Add validation script for weighted score |
| Stale meta after bulk changes | Low | Auto-count on save |
