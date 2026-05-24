# Vercel → Free Alternatives

Replace Vercel's paid plans with free or open-source alternatives.

## Cloudflare Pages

| Detail | Info |
|---|---|
| **Type** | Free tier (no card) |
| **Bandwidth** | Unlimited |
| **Builds** | 500 builds/mo |
| **Sites** | Unlimited |
| **Functions** | Cloudflare Workers (100k req/day) |
| **CDN** | Global (330+ cities) |
| **SSL** | Automatic |
| **Custom Domain** | ✅ |
| **Analytics** | Built-in |

**Switch difficulty**: Easy (Git-based deploy)

### Differences from Vercel
- No cold starts (isolates instead)
- Workers have different runtime limits
- Better global CDN coverage
- No serverless function warm-up issue

## Netlify

| Detail | Info |
|---|---|
| **Type** | Free tier |
| **Bandwidth** | 100 GB |
| **Builds** | 300 min/mo |
| **Sites** | Unlimited |
| **Functions** | 125k req/mo |
| **Forms** | 100 submissions/mo |
| **Identity** | 1k users |
| **CDN** | Global edge network |
| **SSL** | Automatic |
| **Custom Domain** | ✅ |

**Switch difficulty**: Very easy (identical workflow)

## Render

| Detail | Info |
|---|---|
| **Type** | Free tier |
| **Static Sites** | Unlimited |
| **Web Services** | 512 MB RAM, shared CPU |
| **PostgreSQL** | 1 GB storage |
| **Cron Jobs** | 1 job |
| **Bandwidth** | 100 GB |
| **SSL** | Automatic |
| **Custom Domain** | ✅ |

**Switch difficulty**: Medium (different platform)

## Comparison

| Feature | Vercel (free) | Cloudflare Pages | Netlify (free) | Render (free) |
|---|---|---|---|---|
| Static Sites | Unlimited | Unlimited | Unlimited | Unlimited |
| Bandwidth | 100 GB | Unlimited | 100 GB | 100 GB |
| Serverless | 100 invocations/day | 100k req/day | 125k req/mo | 512 MB RAM |
| Build Time | 6,000 min/mo | 500 builds/mo | 300 min/mo | Limited |
| CDN | Global | 330+ cities | Global | VA/FR/SG |
| Edge Functions | 10 invocations/day | Workers (100k req/day) | ❌ | ❌ |
| Database | ❌ | ❌ | ❌ | 1 GB PG |

## When to Switch

| Scenario | Best Alternative |
|---|---|
| High bandwidth needs | Cloudflare Pages (unlimited) |
| Heavy serverless usage | Cloudflare Workers |
| Need PostgreSQL | Render |
| Simple static sites | Cloudflare Pages or Netlify |
| Global audience | Cloudflare (most PoPs) |
| Budget ₹0 | Cloudflare Pages (most generous) |
