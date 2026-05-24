# Build a File Sharing Platform

Build a file upload and sharing platform with links, expiry, and previews.

## Stack

| Layer | Choice | Why |
|---|---|---|
| **Frontend** | React + Tailwind + Dropzone UI | Drag-and-drop upload UX |
| **Backend** | Next.js API Routes | File handling + streaming |
| **Hosting** | Vercel Free | Serverless + edge for fast uploads |
| **Database** | Supabase Free | Store file metadata, share links, expiry |
| **Auth** | Supabase Auth | Email + OAuth, per-user file isolation |
| **Storage** | Cloudflare R2 Free | 10 GB, S3-compatible, no egress fees |
| **Email** | Resend Free | Share link notifications, expiry alerts |
| **Analytics** | Plausible Free | Track shares, downloads, page views |
| **CDN** | Cloudflare | R2 serves directly from edge |

## Estimated Monthly Cost

| Item | Cost |
|---|---|
| Hosting | ₹0 |
| Database | ₹0 |
| Storage (10 GB) | ₹0 |
| Auth | ₹0 |
| CDN | ₹0 |
| Analytics | ₹0 |
| **Total** | **₹0** |

## Setup Steps

1. Create Next.js app with file upload UI
2. Set up Supabase for file metadata (id, filename, size, type, expiry)
3. Configure Cloudflare R2 with S3-compatible presigned URLs
4. Implement direct-to-R2 upload using presigned URLs
5. Build share link generation with expiry dates
6. Add password protection for shared files (optional)
7. Implement file preview (images, PDFs, videos)
8. Set up download tracking with Plausible
9. Add email notifications for shared files
10. Deploy to Vercel

## Features

- Drag-and-drop file upload
- Direct-to-storage uploads (server-free)
- Shareable links with expiry
- Password-protected shares
- File preview in browser
- Download count tracking
- User file management dashboard
- Upload progress indicators

## Data Model

```sql
files (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users,
  filename TEXT,
  size BIGINT,
  mime_type TEXT,
  r2_key TEXT,
  share_token TEXT UNIQUE,
  expires_at TIMESTAMP,
  password_hash TEXT,
  download_count INT DEFAULT 0,
  created_at TIMESTAMP
)
```

## Scaling Path

| Limit | Free Tier | Paid Upgrade |
|---|---|---|
| Storage | 10 GB | R2: $0.015/GB/mo |
| File Size | 500 MB (R2) | No limit |
| Downloads | Unlimited | No egress fees |
| Users | 50k MAUs (Supabase) | $25/mo |

## Alternatives

| Layer | Alternative |
|---|---|
| Storage | Supabase Storage (2 GB), Backblaze B2 (10 GB) |
| File Upload | Uploadthing (2 GB free), Uppy (OSS) |
| Database | Neon, SQLite (Turso) |
| Hosting | Cloudflare Pages + Workers |
| Email | Loops.so, EmailJS |
