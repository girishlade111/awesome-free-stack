---
name: Resource Entry
description: Template for adding a new free/freemium resource to awesome-free-stack
---

# Resource Template

Copy the block below, paste it into the appropriate category file under `categories/<category>/`, and fill in every field. Fields marked with `<!-- comment -->` are optional — remove or fill them as needed.

---

```markdown
## Tool Name

<!-- Display name of the tool or service. -->

**Website**: https://example.com

**Docs**: https://example.com/docs

**GitHub**: https://github.com/example/repo

**Category**: <one-of: ai | deployment | cloud | hosting | databases | storage | auth | payments | email-sms | monitoring | ci-cd | devtools | design | domains | testing | mobile | learning | student-packs | startup-credits | open-source>

**Subcategory**: <!-- e.g. apis, models, static-sites, payment-processing -->

---

### Description

<!-- 1-3 sentences explaining what the tool does and its ideal use case. -->

A short, clear description of the tool's purpose and who it's for.

---

### Free Tier

<!-- What is included in the free plan? Be specific about limits. -->

- **Requests**: 10,000/month
- **Storage**: 500 MB
- **Users**: Unlimited
- **Bandwidth**: 2 GB/month
- **Other**: Custom domain support, SSL

### Paid Plan

<!-- Summarize the cheapest paid plan. -->

- **Plan Name**: Pro
- **Price**: $20/month
- **Upgrades**: 100 GB storage, team seats, priority support

---

### Ratings

<!-- Rate each dimension from 1 to 5. 1 = poor, 5 = excellent. -->

| Dimension | Rating |
|-----------|--------|
| Beginner Friendly | ⭐⭐⭐⭐⭐ |
| Documentation | ⭐⭐⭐⭐ |
| Free Generosity | ⭐⭐⭐⭐⭐ |
| Setup Ease | ⭐⭐⭐⭐ |
| Reliability | ⭐⭐⭐⭐⭐ |

---

### Verification

<!-- How was this entry verified? -->

- **Status**: <tested | community-verified | unverified>
- **Verified By**: <your-name-or-handle>
- **Date**: 2026-05

### Status

<!-- Current operational status of the tool. -->

<active | deprecated | limited>

---

### Region Restrictions

<!-- Is the service available globally or restricted? -->

- **Global**: <Yes | No>
- **Restricted Countries**: <!-- e.g. CN, RU, IR — leave blank if global -->
- **Notes**: <!-- e.g. Available in 46+ countries -->

### Student Benefits

<!-- Are there special benefits for students? -->

- **Available**: <Yes | No>
- **Details**: <!-- e.g. Free Pro tier with .edu email via GitHub Student Pack -->
- **Verification Method**: <edu-email | github-education | iscard | sheerid | id-card | none>

---

### Tags

<!-- Space-separated lowercase tags for search/filtering. -->

ai api llm open-source

### Alternatives To

<!-- Paid tools this resource can replace (comma-separated). -->

Tool A, Tool B

### Alternatives

<!-- Other free resources in this repo that serve similar purposes (comma-separated slugs). -->

tool-c-slug, tool-d-slug
```

---

## Quick Reference

| Field | Required | Notes |
|---|---|---|
| Tool Name | Yes | Display name |
| Website | Yes | Official URL |
| Docs | No | Documentation URL |
| GitHub | No | Repo URL (must start with `https://github.com/`) |
| Category | Yes | Must match one of 20 allowed values |
| Subcategory | No | Free-form |
| Description | Yes | 1-3 sentences |
| Free Tier | Yes | Be specific about numeric limits |
| Paid Plan | No | Summarize cheapest tier |
| Ratings | Yes | 1-5 for each of 5 dimensions |
| Verification | Yes | Status + who + date |
| Status | Yes | active / deprecated / limited |
| Region Restrictions | Yes | Global flag + restricted country codes |
| Student Benefits | Yes | Available flag + details |
| Tags | Yes | At least 1 tag |
| Alternatives To | No | Paid tools this replaces |
| Alternatives | No | Related free tools in this repo |

---

> After completing your entry, submit a pull request. See [CONTRIBUTING.md](../CONTRIBUTING.md) for the full contribution workflow.
