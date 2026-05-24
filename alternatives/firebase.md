# Firebase → Free Alternatives

Replace Firebase's paid plans with free or open-source alternatives.

## Supabase

| Detail | Info |
|---|---|
| **Type** | Open-source |
| **Self-host** | ✅ |
| **Free Tier** | 500 MB DB, 2 GB storage, 50k MAUs |
| **Database** | PostgreSQL (full SQL) |
| **Auth** | Built-in (email, OAuth, magic link) |
| **Realtime** | WebSocket subscriptions |
| **Storage** | 2 GB free, S3-compatible |
| **Edge Functions** | Deno-based |
| **SDKs** | JS, Dart, Python, Kotlin, Swift |

**Switch difficulty**: Medium (different data model)

### Migration Path

```
Firestore → PostgreSQL (Supabase)
Firebase Auth → Supabase Auth
Firebase Storage → Supabase Storage
Firebase Functions → Supabase Edge Functions
Firebase Realtime → Supabase Realtime
FCM → Supabase Realtime (web) or Expo Push
```

## Appwrite

| Detail | Info |
|---|---|
| **Type** | Open-source |
| **Self-host** | ✅ |
| **Free Tier** | 50k MAUs, 5 GB storage, 100 GB bandwidth |
| **Database** | Document-based (similar to Firestore) |
| **Auth** | Built-in (multi-provider) |
| **Storage** | 5 GB free |
| **Functions** | Node.js, Python, PHP, Dart |
| **Messaging** | Push, email, SMS |
| **SDKs** | Web, Flutter, Apple, Android |

**Switch difficulty**: Easy (similar document model)

## PocketBase

| Detail | Info |
|---|---|
| **Type** | Open-source |
| **Self-host** | ✅ (single binary) |
| **Free Tier** | Full features (self-host) |
| **Database** | SQLite (embedded) |
| **Auth** | Built-in |
| **UI** | Admin dashboard included |
| **Files** | Local file storage |
| **Size** | Single ~20MB binary |

**Switch difficulty**: Very easy (simplest option)

## Comparison

| Tool | Data Model | Auth | Realtime | Storage | Functions | Self-Host |
|---|---|---|---|---|---|---|
| Firebase | Document | ✅ | ✅ | ✅ | ✅ | ❌ |
| Supabase | SQL (PG) | ✅ | ✅ | ✅ | ✅ | ✅ |
| Appwrite | Document | ✅ | ✅ | ✅ | ✅ | ✅ |
| PocketBase | SQLite | ✅ | ✅ | ✅ | ❌ | ✅ |
| Nhost | SQL (PG) | ✅ | ✅ | ✅ | ✅ | ✅ |
