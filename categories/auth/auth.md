## Auth

> **Last updated**: 2026-05-24 | **Category**: Auth

Comprehensive catalog of authentication and identity services — from hosted auth platforms to open-source libraries.

---

## 1. Overview Comparison

| Provider | Type | Free Tier | Social Login | MFA | Card Required |
|---|---|---|---|---|---|
| [Clerk](clerk.md) | Hosted Auth | 10K MAU, 1 org | Unlimited | ✅ | No |
| [Auth0](auth0.md) | Identity Platform | 7K MAU, 2 social | 2 connections | ✅ | Yes |
| [Firebase Auth](firebase-auth.md) | Hosted Auth | 50K MAU, phone 10K | 30+ providers | ✅ | Yes |
| [Kinde](kinde.md) | Startup Auth | 7.5K MAU, all features | Unlimited | ✅ | No |
| [Supabase Auth](supabase-auth.md) | Hosted Auth (OSS) | 50K MAU | Unlimited | ✅ | No |
| [Logto](logto.md) | Identity (OSS) | 50K MAU (Cloud) | Built-in UI | ✅ | No |
| [Better Auth](better-auth.md) | Auth Library (OSS) | Self-hosted, free | Plugins | ❌ | No |
| [NextAuth.js](nextauth-js.md) | Auth Library (OSS) | Self-hosted, free | 80+ providers | ❌ | No |

---

## 2. Selection Guide

```
Need auth...
│
├── Hosted (no server management)?
│   ├── Best free tier → Supabase Auth / Firebase Auth (50K MAU)
│   ├── Best developer UX → Clerk (10K MAU, pre-built UI)
│   ├── Best for startups → Kinde (7.5K MAU, feature flags)
│   └── Enterprise-grade → Auth0 (7K MAU, 50+ social)
│
├── Open-source / self-hosted?
│   ├── Full identity platform → Logto (pre-built UI, user mgmt)
│   └── Auth library → NextAuth.js (80+ providers)
│
└── TypeScript auth library?
    └── Better Auth (pluggable, framework-agnostic)
```

---

## 3. Feature Matrix

| Provider | Open Source | Self-Host | Passwordless | Organization | API Keys |
|---|---|---|---|---|---|
| Clerk | ❌ | ❌ | ✅ | ✅ (1 free) | ✅ |
| Auth0 | ❌ | ❌ | ✅ | ❌ (paid) | ✅ |
| Firebase Auth | ❌ | ❌ | ✅ | ❌ | ✅ |
| Kinde | ❌ | ❌ | ✅ | ✅ (1 free) | ✅ |
| Supabase Auth | ✅ | ✅ | ✅ | ✅ | ✅ |
| Logto | ✅ | ✅ | ✅ | ✅ | ✅ |
| Better Auth | ✅ | ✅ | ❌ | ❌ | ❌ |
| NextAuth.js | ✅ | ✅ | ✅ | ❌ | ❌ |

---

## 4. Related Resources

- [Databases](../databases/databases.md) — User data storage
- [Security](#) — Security and compliance tools
- [User Management](#) — CRM and user engagement
