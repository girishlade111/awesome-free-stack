# Build a Docs App

Build a documentation or knowledge base app with Markdown, search, and team collaboration.

## Stack

| Layer | Choice | Why |
|---|---|---|
| **Frontend** | Next.js + MDX | Write docs in Markdown, render as React |
| **Backend** | Next.js API Routes | Search indexing, doc CRUD |
| **Hosting** | Vercel Free | Static generation + serverless search |
| **Database** | Supabase Free | Store doc content, metadata, versions |
| **Auth** | Clerk Free | 10k MAUs, org-based access control |
| **Storage** | Cloudflare R2 Free | 10 GB for images, attachments, assets |
| **Email** | Resend Free | Notification on doc changes |
| **Analytics** | Plausible Free | Track page views, search queries |
| **Search** | Meilisearch Cloud Free | 10k docs, instant full-text search |
| **Editor** | Novel / Plate | Rich text editor built on TipTap |

## Estimated Monthly Cost

| Item | Cost |
|---|---|
| Hosting | ₹0 |
| Database | ₹0 |
| Auth | ₹0 |
| Storage | ₹0 |
| Search | ₹0 |
| Analytics | ₹0 |
| **Total** | **₹0** |

## Setup Steps

1. Scaffold Next.js with MDX support
2. Set up Clerk for team auth with orgs
3. Create Supabase tables for docs, collections, versions
4. Build Markdown editor (Novel or raw MDX)
5. Configure Meilisearch for full-text search
6. Implement doc versioning and history
7. Add image upload to R2
8. Build sidebar navigation from doc tree
9. Add edit suggestions / comments
10. Deploy to Vercel

## Features

- Markdown + rich text editing
- Sidebar navigation with nesting
- Full-text search
- Version history
- User roles (admin, editor, viewer)
- Comments on docs
- Dark mode
- Export to PDF
- SEO-friendly (static generated)

## Data Model

```sql
docs (
  id UUID PRIMARY KEY,
  collection_id UUID REFERENCES collections,
  title TEXT,
  slug TEXT UNIQUE,
  content TEXT,  -- MDX content
  published BOOLEAN DEFAULT false,
  version INT DEFAULT 1,
  author_id TEXT REFERENCES users,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)

collections (
  id UUID PRIMARY KEY,
  name TEXT,
  slug TEXT,
  org_id TEXT REFERENCES orgs,
  icon TEXT,
  sort_order INT
)
```

## Scaling Path

| Resource | Free | Paid |
|---|---|---|
| Search (Meilisearch) | 10k docs | $29/mo |
| Auth (Clerk) | 10k MAUs | $25/mo |
| Hosting | 100 GB bandwidth | $20/mo |
| Database | 500 MB | $25/mo |

## Alternatives

| Layer | Alternative |
|---|---|
| Framework | Docusaurus, Astro Starlight, VitePress |
| Search | Algolia (10k records free), Typesense (OSS) |
| Editor | TipTap (prosemirror), Blocknote, Plate |
| Hosting | Cloudflare Pages, Netlify |
| Database | Neon, Turso (SQLite edge) |
| Storage | Supabase Storage, Uploadthing |
