# Build a SaaS with ₹0 Budget

Build and launch a SaaS product using entirely free tools. Zero upfront cost.

## Stack

| Layer | Choice | Why |
|---|---|---|
| **Frontend** | Next.js (React) | SSR, App Router, free hosting on Vercel |
| **Backend** | Next.js API Routes | Co-located with frontend, no separate server |
| **Hosting** | Vercel Free | 100 GB bandwidth, 6k build minutes/mo, SSL |
| **Database** | Supabase Free | 500 MB PostgreSQL, real-time, 50k MAUs |
| **Auth** | Supabase Auth | Built-in, supports email/password + OAuth |
| **Storage** | Supabase Storage | 2 GB, image optimization, CDN |
| **Email** | Resend Free | 100 emails/day, React email templates |
| **Analytics** | Plausible / Umami | Self-host or free tier, privacy-first |

## Estimated Monthly Cost

| Item | Cost |
|---|---|
| Hosting | ₹0 |
| Database | ₹0 |
| Auth | ₹0 |
| Storage | ₹0 |
| Email | ₹0 |
| Analytics | ₹0 |
| Domain | ₹0 (use `*.vercel.app` or `*.pages.dev`) |
| **Total** | **₹0** |

## Setup Steps

1. Scaffold with `create-next-app`
2. Set up Supabase project (free tier)
3. Configure Auth (email/password + GitHub OAuth)
4. Build your core feature with API routes
5. Deploy to Vercel via GitHub
6. Add Resend for transactional emails
7. Add analytics snippet

## Scaling Path

When you need to scale, upgrade individual layers:

- Hosting → Vercel Pro ($20/mo)
- Database → Supabase Pro ($25/mo)
- Email → Resend Growth ($15/mo)

## Alternatives

| Layer | Alternative |
|---|---|
| Hosting | Cloudflare Pages (unlimited bandwidth) |
| Database | Neon (serverless PostgreSQL, 500 MB) |
| Auth | Clerk (10k MAUs free) |
| Storage | Cloudflare R2 (10 GB free) |
| Email | Loops.so (100 free emails/mo) |
| Analytics | PostHog (1M events/mo free) |
