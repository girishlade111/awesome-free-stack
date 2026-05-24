# Build a Mobile App

Build a cross-platform mobile app with a free backend and zero upfront costs.

## Stack

| Layer | Choice | Why |
|---|---|---|
| **Frontend** | React Native (Expo) | Cross-platform, OTA updates, free |
| **Backend** | Supabase Free | Database, auth, real-time, storage |
| **Hosting** | EAS Build (Expo) | Free OTA updates via EAS |
| **Database** | Supabase Free | 500 MB PostgreSQL, real-time sync |
| **Auth** | Supabase Auth | 50k MAUs, OAuth, magic link |
| **Storage** | Supabase Storage | 2 GB for user images, files |
| **Email** | Resend Free | 100 emails/day for verification |
| **Analytics** | PostHog Free | 1M events/mo, mobile SDK |
| **Push** | Expo Push Notifications | Free, built into Expo |
| **Testing** | Maestro (mobile E2E) | Free for open source |
| **Maps** | MapLibre (OSS) | Free map rendering |

## Estimated Monthly Cost

| Item | Cost |
|---|---|
| App Development | ₹0 |
| Backend + DB | ₹0 |
| Push Notifications | ₹0 |
| Auth | ₹0 |
| Storage | ₹0 |
| Analytics | ₹0 |
| Deployment | ₹0 |
| **Total** | **₹0** |

## Setup Steps

1. Initialize Expo project with `npx create-expo-app`
2. Set up Supabase client SDK
3. Configure auth (magic link + OAuth)
4. Build navigation with Expo Router
5. Implement real-time data sync via Supabase subscriptions
6. Add push notifications with Expo Push API
7. Set up image upload to Supabase Storage
8. Configure PostHog mobile analytics
9. Build with EAS and submit to stores

## Features

- Cross-platform (iOS + Android)
- Real-time data sync
- Push notifications
- Offline support (via local cache)
- Image upload and gallery
- User profiles
- Dark mode
- OTA updates (no App Store review)

## Architecture

```
Mobile App (Expo)
    ↕ Supabase SDK (realtime + REST)
Supabase (DB + Auth + Storage)
    ↕ External APIs (if needed)
App Stores (via EAS Submit)
```

## Store Deployment

| Step | Tool | Cost |
|---|---|---|
| Apple Developer Account | Apple | $99/yr |
| Google Play Account | Google | $25 one-time |
| EAS Build | Expo | Free (30 builds/mo) |
| EAS Submit | Expo | Free |
| OTA Updates | Expo | Free (10k updates/mo) |

## Alternatives

| Layer | Alternative |
|---|---|
| Framework | Flutter, Kotlin Multiplatform, Ionic |
| Backend | Appwrite (OSS Firebase alt), PocketBase |
| Auth | Clerk, Firebase Auth, Auth0 |
| Storage | Cloudflare R2, Firebase Storage |
| Push | OneSignal (10k push/mo free) |
| Analytics | Firebase Analytics, Amplitude (10k free) |
| Maps | Leaflet (web), Google Maps free tier |
| CI/CD | GitHub Actions (free for public repos) |

## Testing

- Unit: Jest + React Native Testing Library
- Component: Storybook (React Native)
- E2E: Maestro (free, runs in CI)
- Device: Expo Go (free, real device testing)
