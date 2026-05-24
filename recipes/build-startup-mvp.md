# Build a Startup MVP

Ship a minimum viable product fast using free tools. Validate your idea before spending.

## Stack

| Layer | Choice | Why |
|---|---|---|
| **Frontend** | Next.js + Tailwind + shadcn/ui | Production UI components, fast iteration |
| **Backend** | Next.js API Routes + tRPC | Type-safe APIs, no schema duplication |
| **Hosting** | Vercel Free | Instant deploy, preview URLs for feedback |
| **Database** | Supabase Free | PostgreSQL + real-time + auth in one |
| **Auth** | Supabase Auth | Built-in, 50k MAUs free |
| **Storage** | Supabase Storage | 2 GB for user uploads |
| **Email** | Resend Free | 100 emails/day for notifications |
| **Analytics** | PostHog Free | 1M events/mo, feature flags, session replays |
| **Payments** | Stripe (test mode) | No fees until you go live |
| **Monitoring** | Sentry Free | 5k errors/mo, performance traces |
| **Domain** | `*.vercel.app` | Free until you validate |

## Estimated Monthly Cost

| Item | Cost |
|---|---|
| Hosting | ₹0 |
| Database | ₹0 |
| Auth | ₹0 |
| Storage | ₹0 |
| Email | ₹0 |
| Analytics | ₹0 |
| Monitoring | ₹0 |
| **Total** | **₹0** |

## Setup Steps

1. Create Next.js project with TypeScript + Tailwind
2. Set up shadcn/ui component library
3. Initialize Supabase project (DB + Auth)
4. Build core feature with tRPC routers
5. Add payment integration (Stripe test mode)
6. Set up Resend for transactional email
7. Add Sentry for error tracking
8. Configure PostHog for analytics
9. Deploy with `vercel` CLI
10. Share preview URL for user testing

## MVP Checklist

- Core feature functional (no polish)
- Auth working (email/password)
- One payment flow (test mode)
- Error tracking configured
- Basic analytics
- Feedback form / in-app widget
- Privacy policy + terms pages

## Scaling Path

| Trigger | Action |
|---|---|
| 100 users | Add monitoring alerts |
| 1k users | Upgrade to Supabase Pro ($25) |
| 10k users | Move to dedicated DB |
| First revenue | Upgrade Vercel + add team seats |

## Alternatives

| Layer | Alternative |
|---|---|
| Hosting | Railway (free $5 credit), Fly.io |
| Database | Neon (serverless Postgres, 500 MB) |
| Auth | Clerk (10k MAUs), Auth0 (7k users) |
| Email | Loops.so, EmailJS |
| Analytics | Plausible, Umami |
| Payments | Lemon Squeezy, Paddle |
| Monitoring | Highlight.io (10k sessions free) |
