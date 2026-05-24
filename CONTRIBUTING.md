# Contributing to awesome-free-stack — Free Developer Resources Collection

Thank you for contributing. Every resource helps developers replace expensive tools with free alternatives.

## Quick Start

1. Read the [resource template](.github/resource-template.md)
2. Check for duplicates in the relevant category folder
3. Add your resource as a markdown file in `categories/<category>/`
4. Open a pull request with the [PR template](.github/PULL_REQUEST_TEMPLATE.md)

## Resource Requirements

| Criteria | Required |
|---|---|
| Meaningful free tier | Yes (trial-only tools not accepted) |
| Active service | Yes (no abandoned projects) |
| Accurate free tier details | Yes (must be verified before submitting) |
| Card requirement disclosure | Yes (must state if card is needed) |
| Category match | Yes (must map to one of the [20 categories](CATEGORIES.md)) |
| No duplicate | Yes |

## What We Do Not Accept

- Services requiring a credit card for a time-limited trial only
- Tools with no meaningful free tier (under 100 requests or 24-hour trial)
- Dead or abandoned projects
- Pirated software or cracked tools
- Affiliate links or referral rewards
- Adult content or crypto/blockchain speculation tools

## File Structure

```
categories/<category>/<tool-name>.md
```

Use the [resource template](.github/resource-template.md) for the markdown format.

## Verification Badges

| Badge | Meaning | Applied By |
|---|---|---|
| ✅ Tested | Maintainer has personally verified | Maintainer |
| 🟡 Community Verified | Confirmed by 3+ community reports | Maintainer |
| 🔴 Unverified | Submitted but not tested | Default |
| ⚠️ Deprecated | Free tier removed or service dead | Maintainer |
| 🗄️ Archived | Moved to deprecated/ folder | Maintainer |

## Review Process

1. **Submission** — Contributor opens PR with resource file
2. **Automated checks** — JSON validation, link checks, duplicate detection
3. **Maintainer review** — Free tier confirmed, category verified, format checked
4. **Merge or feedback** — Changes requested if needed, merged when ready

Typical review time: 2-5 business days.

## Style Guide

- Use sentence case for tool names
- Keep descriptions under 200 characters
- Use relative links for internal references
- Format free tier limits as bullet points with specific numbers
- Tag consistently — reference [tags.json](data/tags.json) for valid tags

## Pull Request Best Practices

- One resource per PR (except bulk additions coordinated with maintainers)
- Use the PR template checklist
- Link to any verification evidence (screenshots, docs)
- Respond to review comments promptly

## Development Setup

```bash
# Validate JSON locally
npm install -g ajv-cli ajv-formats
ajv validate -s data/resources-schema.json -d data/resources.json

# Check links locally
npm install -g lychee
lychee .
```

## Questions

Open a [Discussion](https://github.com/your-org/awesome-free-stack/discussions) for questions, suggestions, or help with your submission.
