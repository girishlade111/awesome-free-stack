# Webhook Setup Guide (Local Development)

> **Problem:** Automatic webhook registration fails with GitHub error:
>
> ```
> Validation Failed: {"resource":"Hook","code":"custom","field":"url",
> "message":"url is not supported because it isn't reachable over the public Internet (localhost)"}
> ```
>
> **Cause:** GitHub's servers cannot reach `http://localhost:3000` — webhooks must point to a publicly accessible URL. The solution is to expose your local server through a secure tunnel, then register the webhook with that public URL.

---

## Table of Contents

- [How It Works](#how-it-works)
- [Option 1: Cloudflare Tunnel (cloudflared) — Recommended](#option-1-cloudflare-tunnel-cloudflared--recommended)
- [Option 2: ngrok](#option-2-ngrok)
- [Option 3: smee.io (GitHub Webhook Proxy)](#option-3-smeeio-github-webhook-proxy)
- [Register the Webhook on GitHub](#register-the-webhook-on-github)
- [Verify the Webhook](#verify-the-webhook)
- [Comparison Table](#comparison-table)
- [Troubleshooting](#troubleshooting)

---

## How It Works

```
GitHub ──► Public Tunnel URL ──► Tunnel Client ──► http://localhost:3000
           (https://xyz.trycloudflare.com)         (your local app)
```

1. Your app runs locally on port `3000` and listens for `POST /webhook`.
2. A tunnel tool creates a public HTTPS URL that forwards traffic to your local port.
3. You register that public URL as the webhook payload URL in your GitHub repository.
4. When an event fires, GitHub delivers the payload through the tunnel to your local machine.

---

## Option 1: Cloudflare Tunnel (cloudflared) — Recommended

Free, no account required for quick tunnels, stable HTTPS URLs.

### Step 1: Install cloudflared

**Windows (winget):**

```powershell
winget install --id Cloudflare.cloudflared
```

**Windows (manual download):**

Download the `.exe` from <https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/> and add it to your `PATH`.

**macOS:**

```bash
brew install cloudflared
```

**Linux:**

```bash
# Debian / Ubuntu
curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | sudo tee /usr/share/keyrings/cloudflare-main.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/cloudflared.list
sudo apt-get update && sudo apt-get install cloudflared
```

### Step 2: Start your local server

Make sure your app is running and reachable:

```powershell
node server.js        # or python -m uvicorn main:app --port 3000, etc.
curl.exe http://localhost:3000/webhook   # sanity check (expect any response, even 405)
```

### Step 3: Start the tunnel

```powershell
cloudflared tunnel --url http://localhost:3000
```

Example output:

```
+------------------------------------------------------------+
|  Your quick Tunnel has been created! Visit it at:          |
|  https://random-words-here-here.trycloudflare.com          |
+------------------------------------------------------------+
```

Copy that URL — this is your **public webhook base URL**.

> **Note:** Quick tunnels generate a new random URL every restart. For a fixed subdomain (`https://myapp.yourdomain.com`), log in with `cloudflared tunnel login` and create a named tunnel.

### Step 4: Register it with GitHub

See [Register the Webhook on GitHub](#register-the-webhook-on-github) using your tunnel URL, e.g.:

```
https://random-words-here-here.trycloudflare.com/webhook
```

---

## Option 2: ngrok

Popular, easy to use; free tier gives a rotating URL per session.

### Step 1: Install ngrok

**Windows:** Download from <https://ngrok.com/download>, unzip, and place `ngrok.exe` in a folder on your `PATH`.

```powershell
# Or via winget / chocolatey
winget install ngrok.ngrok
choco install ngrok
```

### Step 2: Authenticate (one-time)

Create a free account at <https://dashboard.ngrok.com>, get your authtoken, then:

```powershell
ngrok config add-authtoken YOUR_AUTHTOKEN_HERE
```

### Step 3: Start your local server

Confirm it responds on `http://localhost:3000` before continuing.

### Step 4: Start the tunnel

```powershell
ngrok http 3000
```

Example output:

```
Session Status                online
Forwarding                    https://a1b2-103-21-244-10.ngrok-free.app -> http://localhost:3000
Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

Copy the `https://...ngrok-free.app` URL — this is your **public webhook base URL**.

> **Notes:**
> - The free-tier URL changes each time ngrok restarts → re-register the webhook or upgrade for a static domain.
> - Free tier shows an interstitial warning page to browsers, but **API/webhook POST requests from GitHub pass through fine**.

### Step 5: Register it with GitHub

Use your ngrok URL as described below, e.g.:

```
https://a1b2-103-21-244-10.ngrok-free.app/webhook
```

---

## Option 3: smee.io (GitHub Webhook Proxy)

Purpose-built for GitHub webhooks. No public exposure needed — smee receives GitHub payloads and replays them to localhost via a client.

```powershell
# 1. Create a channel (prints your unique https://smee.io/XXXXX URL)
npx smee.io

# 2. Forward payloads to your local endpoint
npx smee-client --url https://smee.io/XXXXX --port 3000 --path /webhook

# 3. Register https://smee.io/XXXXX as your webhook URL
```

Best when you only need GitHub events locally and don't want to expose anything else.

---

## Register the Webhook on GitHub

### Manual (Web UI)

1. Open: `https://github.com/YOUR_OWNER/YOUR_REPO/settings/hooks/new`
2. Fill in:
   - **Payload URL:** your tunnel URL + path (e.g., `https://your-tunnel-url.com/webhook`)
   - **Content type:** `application/json`
   - **Secret:** a strong random string — must match what your local app uses to verify signatures
   - **SSL verification:** Enable (tunnels provide valid certificates)
3. Choose **Let me select individual events** and pick only what you need (e.g., `Push`, `Pull request`, `Issues`).
4. Click **Add webhook**.
5. GitHub sends a `ping` event — check the delivery status under *Settings → Webhooks*.

### Via CLI (`gh`)

```powershell
gh api repos/YOUR_OWNER/YOUR_REPO/hooks `
  -f name=webhook `
  -F config[url]="https://YOUR-TUNNEL-URL.com/webhook" `
  -F config[content_type]=json `
  -F config[secret]="YOUR_SECRET" `
  -f active=true
```

Generate a good secret:

```powershell
# PowerShell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

Your local app should validate the `X-Hub-Signature-256` header against this secret (HMAC-SHA256).

---

## Verify the Webhook

1. **Check recent deliveries:** `Repo → Settings → Webhooks → your hook → Recent Deliveries`. Look for green ✓ on the initial `ping`.
2. **Trigger a test event:** push a commit or open an issue depending on subscribed events.
3. **Watch your local logs** — you should see the incoming `POST /webhook`.
4. **Inspect headers** GitHub sends:
   - `X-GitHub-Event` — event type (e.g., `push`)
   - `X-GitHub-Delivery` — unique GUID
   - `X-Hub-Signature-256` — HMAC signature for verification
   - `X-GitHub-Hook-ID` — webhook ID

---

## Comparison Table

| Feature | cloudflared | ngrok | smee.io |
|---|---|---|---|
| Account needed | No (quick tunnel) | Yes (free authtoken) | No |
| Free static URL | Named tunnels (w/ account) | Paid plan only | Yes (persistent channel) |
| Protocol support | HTTP/HTTPS/TCP | HTTP/HTTPS/TCP | GitHub events only |
| Inspect requests | Cloudflare dashboard | Local web UI (:4040) | smee web UI |
| Best for | Production-like setups | General dev/debugging | GitHub-only webhooks |

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Still getting "not reachable over public Internet" | You registered `localhost` again by mistake — the Payload URL must be the tunnel URL. |
| `ping` delivery fails / timeout | Tunnel not running. Keep `cloudflared`/`ngrok` process open while testing. |
| Works in browser, 502 from webhook | Wrong port or path — confirm the app listens on `:3000` at `/webhook`. |
| Signature validation fails locally | Secret mismatch between GitHub hook config and your app's verifier. |
| ngrok URL changed after restart | Re-register the webhook, or set up a reserved domain (paid). |
| cloudflared quick tunnel URL changes | Use `cloudflared tunnel login` + a named tunnel for a stable hostname. |
| Firewall blocks tunnel client | Allow `cloudflared.exe` / `ngrok.exe` through Windows Defender Firewall. |

---

## Quick Reference

```powershell
# --- Cloudflare ---
winget install --id Cloudflare.cloudflared
cloudflared tunnel --url http://localhost:3000
# → register printed URL at github.com/<owner>/<repo>/settings/hooks/new

# --- ngrok ---
winget install ngrok.ngrok
ngrok config add-authtoken YOUR_TOKEN
ngrok http 3000
# → register printed URL

# --- Register via gh CLI ---
gh api repos/OWNER/REPO/hooks -f name=webhook -F config[url]="TUNNEL_URL/webhook" -F config[content_type]=json -F config[secret]="SECRET" -f active=true
```
