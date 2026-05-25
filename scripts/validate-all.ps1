# Comprehensive validation script for awesome-free-stack

$ErrorActionPreference = "Stop"
$repoRoot = "C:\Users\Girish Lade\OneDrive\Desktop\awesome-free-stack"

Write-Host "=== COMPREHENSIVE VALIDATION REPORT ===" -ForegroundColor Cyan
Write-Host "Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm')`n" -ForegroundColor Cyan

# Load data files
$resourcesFile = Join-Path $repoRoot "data" "resources.json"
$taxonomyFile = Join-Path $repoRoot "data" "taxonomy.json"
$tagsFile = Join-Path $repoRoot "data" "tags.json"
$ratingsFile = Join-Path $repoRoot "data" "ratings.json"

$resources = (Get-Content $resourcesFile -Raw | ConvertFrom-Json).resources
$taxonomy = (Get-Content $taxonomyFile -Raw | ConvertFrom-Json).categories
$tagsData = Get-Content $tagsFile -Raw | ConvertFrom-Json
$ratingsData = Get-Content $ratingsFile -Raw | ConvertFrom-Json

Write-Host "File loaded: $($resources.count) resources" -ForegroundColor Green
Write-Host "File loaded: $($taxonomy.count) categories" -ForegroundColor Green
Write-Host ""

# ============================================================
# SECTION 1: BASIC COUNTS
# ============================================================
Write-Host "=== SECTION 1: BASIC COUNTS ===" -ForegroundColor Yellow

$total = $resources.Count
Write-Host "Total resources: $total"

# Count by category
$catCounts = @{}
foreach ($r in $resources) {
    $catCounts[$r.category] = ($catCounts[$r.category] ?? 0) + 1
}
Write-Host "`nCount by category:" -ForegroundColor White
$catCounts.GetEnumerator() | Sort-Object Name | ForEach-Object {
    Write-Host "  $($_.Name): $($_.Value)"
}
Write-Host ""

# ============================================================
# SECTION 2: SCHEMA VIOLATIONS
# ============================================================
Write-Host "=== SECTION 2: SCHEMA VIOLATIONS ===" -ForegroundColor Yellow

$schemaErrors = @()

# Check verification.status enum
$validStatuses = @("tested", "community-verified", "unverified")
foreach ($r in $resources) {
    if ($r.verification.status -notin $validStatuses) {
        $schemaErrors += "  [$($r.id)] verification.status = '$($r.verification.status)' (valid: $($validStatuses -join ', '))"
    }
}

# Check resource status enum
$validResourceStatuses = @("active", "deprecated", "limited")
foreach ($r in $resources) {
    if ($r.status -notin $validResourceStatuses) {
        $schemaErrors += "  [$($r.id)] status = '$($r.status)' (valid: $($validResourceStatuses -join ', '))"
    }
}

# Check category enum
$validCategories = $taxonomy.id
foreach ($r in $resources) {
    if ($r.category -notin $validCategories) {
        $schemaErrors += "  [$($r.id)] category = '$($r.category)' (invalid)"
    }
}

# Check rating values (1-5)
$ratingFields = @("beginner_friendly", "docs", "free_generosity", "setup", "reliability", "performance", "community")
foreach ($r in $resources) {
    foreach ($f in $ratingFields) {
        $v = $r.ratings.$f
        if ($v -lt 1 -or $v -gt 5) {
            $schemaErrors += "  [$($r.id)] ratings.$f = $v (must be 1-5)"
        }
    }
}

# Check requires_card is boolean
foreach ($r in $resources) {
    if ($null -eq $r.requires_card -or ($r.requires_card -isnot [bool])) {
        $schemaErrors += "  [$($r.id)] requires_card = $($r.requires_card) (must be boolean)"
    }
}

if ($schemaErrors.Count -eq 0) {
    Write-Host "No schema violations found." -ForegroundColor Green
} else {
    Write-Host "Schema violations ($($schemaErrors.Count)):" -ForegroundColor Red
    $schemaErrors | ForEach-Object { Write-Host $_ }
}
Write-Host ""

# ============================================================
# SECTION 3: RATING FORMULA VALIDATION
# ============================================================
Write-Host "=== SECTION 3: RATING FORMULA VALIDATION ===" -ForegroundColor Yellow

$weights = @{
    "beginner_friendly" = 1.0
    "docs" = 1.0
    "free_generosity" = 1.5
    "setup" = 0.8
    "reliability" = 1.2
    "performance" = 0.8
    "community" = 0.5
}
$weightSum = ($weights.Values | Measure-Object -Sum).Sum

$ratingMismatches = @()
foreach ($r in $resources) {
    $num = 0.0
    foreach ($f in $ratingFields) {
        $num += $r.ratings.$f * $weights[$f]
    }
    $expected = [Math]::Round($num / $weightSum, 1)
    $stored = $r.ratings.overall
    if ([Math]::Abs($expected - $stored) -gt 0.05) {
        $ratingMismatches += @{ id = $r.id; expected = $expected; stored = $stored }
    }
}

Write-Host "Rating mismatches: $($ratingMismatches.Count) / $total" -ForegroundColor $(if ($ratingMismatches.Count -eq 0) { "Green" } else { "Red" })
if ($ratingMismatches.Count -gt 0) {
    Write-Host "Examples:" -ForegroundColor White
    $ratingMismatches | Select-Object -First 20 | ForEach-Object {
        Write-Host "  [$($_.id)] stored=$($_.stored) expected=$($_.expected)"
    }
    if ($ratingMismatches.Count -gt 20) {
        Write-Host "  ... and $($ratingMismatches.Count - 20) more"
    }
}
Write-Host ""

# ============================================================
# SECTION 4: RATING TIER DISTRIBUTION
# ============================================================
Write-Host "=== SECTION 4: RATING TIER DISTRIBUTION ===" -ForegroundColor Yellow

$tiers = @{
    "Elite (4.5-5.0)"      = 0
    "Excellent (4.0-4.4)"  = 0
    "Good (3.0-3.9)"       = 0
    "Fair (2.0-2.9)"       = 0
    "Limited (1.0-1.9)"    = 0
    "Insufficient (<1.0)"  = 0
}

# Recalculate expected scores
$expectedScores = @{}
foreach ($r in $resources) {
    $num = 0.0
    foreach ($f in $ratingFields) {
        $num += $r.ratings.$f * $weights[$f]
    }
    $expected = [Math]::Round($num / $weightSum, 1)
    $expectedScores[$r.id] = $expected

    if ($expected -ge 4.5) { $tiers["Elite (4.5-5.0)"]++ }
    elseif ($expected -ge 4.0) { $tiers["Excellent (4.0-4.4)"]++ }
    elseif ($expected -ge 3.0) { $tiers["Good (3.0-3.9)"]++ }
    elseif ($expected -ge 2.0) { $tiers["Fair (2.0-2.9)"]++ }
    elseif ($expected -ge 1.0) { $tiers["Limited (1.0-1.9)"]++ }
    else { $tiers["Insufficient (<1.0)"]++ }
}

$tiers.GetEnumerator() | Sort-Object Name | ForEach-Object {
    Write-Host "  $($_.Name): $($_.Value)"
}

# Average rating per category
Write-Host "`nAverage rating by category:" -ForegroundColor White
$catScores = @{}
foreach ($r in $resources) {
    $catScores[$r.category] ??= @()
    $catScores[$r.category] += $expectedScores[$r.id]
}
$catScores.GetEnumerator() | Sort-Object Name | ForEach-Object {
    $avg = [Math]::Round(($_.Value | Measure-Object -Average).Average, 2)
    Write-Host "  $($_.Name): $avg"
}

# Top 10 and Bottom 10
$sortedScores = $expectedScores.GetEnumerator() | Sort-Object Value -Descending
Write-Host "`nTop 10 highest-rated:" -ForegroundColor Green
$sortedScores | Select-Object -First 10 | ForEach-Object {
    Write-Host "  $($_.Name): $($_.Value)"
}
Write-Host "`nBottom 10 lowest-rated:" -ForegroundColor Red
$sortedScores | Select-Object -Last 10 | ForEach-Object {
    Write-Host "  $($_.Name): $($_.Value)"
}
Write-Host ""

# ============================================================
# SECTION 5: DUPLICATE DETECTION
# ============================================================
Write-Host "=== SECTION 5: DUPLICATE DETECTION ===" -ForegroundColor Yellow

$duplicates = @{}

# Check duplicate IDs
$ids = @{}
foreach ($r in $resources) {
    if ($ids.ContainsKey($r.id)) {
        $duplicates["id"] ??= @()
        $duplicates["id"] += $r.id
    }
    $ids[$r.id] = $true
}

# Check duplicate slugs
$slugs = @{}
foreach ($r in $resources) {
    if ($slugs.ContainsKey($r.slug)) {
        $duplicates["slug"] ??= @()
        $duplicates["slug"] += $r.slug
    }
    $slugs[$r.slug] = $true
}

# Check duplicate names
$names = @{}
foreach ($r in $resources) {
    if ($names.ContainsKey($r.name.ToLower())) {
        $duplicates["name"] ??= @()
        $duplicates["name"] += $r.name
    }
    $names[$r.name.ToLower()] = $true
}

# Check duplicate websites
$sites = @{}
foreach ($r in $resources) {
    $site = $r.website.TrimEnd('/').ToLower()
    if ($sites.ContainsKey($site)) {
        $duplicates["website"] ??= @()
        $duplicates["website"] += $r.website
    }
    $sites[$site] = $true
}

if ($duplicates.Count -eq 0) {
    Write-Host "No duplicates found." -ForegroundColor Green
} else {
    Write-Host "Duplicates found:" -ForegroundColor Red
    $duplicates.GetEnumerator() | ForEach-Object {
        Write-Host "  $($_.Key): $($_.Value -join ', ')"
    }
}
Write-Host ""

# ============================================================
# SECTION 6: SUBCATEGORY ANALYSIS
# ============================================================
Write-Host "=== SECTION 6: SUBCATEGORY ANALYSIS ===" -ForegroundColor Yellow

$allSubcategories = @{}
$subcatUsage = @{}
foreach ($cat in $taxonomy) {
    foreach ($sub in $cat.subcategories) {
        $key = "$($cat.id)/$($sub.id)"
        $allSubcategories[$key] = $sub.name
        $subcatUsage[$key] = 0
    }
}

foreach ($r in $resources) {
    $key = "$($r.category)/$($r.subcategory)"
    if ($subcatUsage.ContainsKey($key)) {
        $subcatUsage[$key]++
    } else {
        Write-Host "  WARNING: [$($r.id)] invalid subcategory '$key'" -ForegroundColor Yellow
    }
}

$emptySubcats = $subcatUsage.GetEnumerator() | Where-Object { $_.Value -eq 0 } | Sort-Object Name
$populatedSubcats = $subcatUsage.GetEnumerator() | Where-Object { $_.Value -gt 0 } | Sort-Object Name

Write-Host "Total subcategories defined: $($allSubcategories.Count)" -ForegroundColor White
Write-Host "Populated subcategories: $($populatedSubcats.Count)" -ForegroundColor Green
Write-Host "Empty subcategories: $($emptySubcats.Count)" -ForegroundColor $(if ($emptySubcats.Count -eq 0) { "Green" } else { "Yellow" })

if ($emptySubcats.Count -gt 0) {
    Write-Host "`nEmpty subcategories:" -ForegroundColor Yellow
    $emptySubcats | ForEach-Object {
        $displayName = $allSubcategories[$_.Name]
        Write-Host "  $($_.Name) ($displayName)"
    }
}

# Resource distribution
Write-Host "`nResource density by category/subcategory:" -ForegroundColor White
$catSubcatCounts = @{}
foreach ($r in $resources) {
    $key = $r.category
    $catSubcatCounts[$key] ??= @{}
    $catSubcatCounts[$key][$r.subcategory] = ($catSubcatCounts[$key][$r.subcategory] ?? 0) + 1
}

$catSubcatCounts.GetEnumerator() | Sort-Object Name | ForEach-Object {
    $catName = $_.Name
    Write-Host "  $catName ($($catCounts[$catName]) total):" -ForegroundColor White
    $_.Value.GetEnumerator() | Sort-Object Name | ForEach-Object {
        Write-Host "    $($_.Name): $($_.Value)"
    }
}
Write-Host ""

# ============================================================
# SECTION 7: TAG ANALYSIS
# ============================================================
Write-Host "=== SECTION 7: TAG ANALYSIS ===" -ForegroundColor Yellow

$allTags = @{}
foreach ($group in $tagsData.groups) {
    foreach ($tag in $group.tags) {
        $allTags[$tag.id] = @{ group = $group.name; count = $tag.count }
    }
}

Write-Host "Total tags defined: $($allTags.Count)" -ForegroundColor White

# Check tags used in resources vs defined in tags.json
$usedTags = @{}
foreach ($r in $resources) {
    foreach ($tag in $r.tags) {
        $usedTags[$tag] = ($usedTags[$tag] ?? 0) + 1
    }
}

$orphanTags = $usedTags.Keys | Where-Object { $_ -notin $allTags.Keys } | Sort-Object
$unusedTags = $allTags.Keys | Where-Object { $_ -notin $usedTags.Keys } | Sort-Object

if ($orphanTags.Count -eq 0) {
    Write-Host "No orphan tags (used but not defined)." -ForegroundColor Green
} else {
    Write-Host "Orphan tags ($($orphanTags.Count)):" -ForegroundColor Red
    $orphanTags | ForEach-Object { Write-Host "  $_ (used $($usedTags[$_]) times)" }
}

if ($unusedTags.Count -eq 0) {
    Write-Host "No unused tags (defined but never used)." -ForegroundColor Green
} else {
    Write-Host "Unused tags ($($unusedTags.Count)):" -ForegroundColor Yellow
    $unusedTags | ForEach-Object {
        $tagInfo = $allTags[$_]
        Write-Host "  $_ (group: $($tagInfo.group), defined count: $($tagInfo.count))"
    }
}

Write-Host "`nMost commonly used tags:" -ForegroundColor White
$usedTags.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 15 | ForEach-Object {
    Write-Host "  $($_.Name): $($_.Value)"
}

Write-Host "`nTags used by only 1 resource:" -ForegroundColor Yellow
$rareTags = $usedTags.GetEnumerator() | Where-Object { $_.Value -eq 1 } | Sort-Object Name
$rareTags | ForEach-Object {
    Write-Host "  $($_.Name)"
}
Write-Host "Total rare tags: $($rareTags.Count)"
Write-Host ""

# ============================================================
# SECTION 8: MISSING MARKDOWN FILES
# ============================================================
Write-Host "=== SECTION 8: MISSING MARKDOWN FILES ===" -ForegroundColor Yellow

$missingMarkdown = @()
foreach ($r in $resources) {
    $mdPath = Join-Path $repoRoot "categories" $r.category "$($r.slug).md"
    if (-not (Test-Path $mdPath)) {
        $missingMarkdown += $r.id
    }
}

if ($missingMarkdown.Count -eq 0) {
    Write-Host "No missing markdown files. All 193 resources have markdown." -ForegroundColor Green
} else {
    Write-Host "Missing markdown files ($($missingMarkdown.Count)):" -ForegroundColor Red
    $missingMarkdown | ForEach-Object { Write-Host "  $_" }
}

# Check for orphan markdowns (md files without JSON entries)
Write-Host "`nChecking for orphan markdowns..." -ForegroundColor White
$orphanMds = @()
$catDirs = Get-ChildItem (Join-Path $repoRoot "categories") -Directory
foreach ($catDir in $catDirs) {
    $mdFiles = Get-ChildItem $catDir.FullName -Filter "*.md"
    foreach ($md in $mdFiles) {
        $slug = [System.IO.Path]::GetFileNameWithoutExtension($md.Name)
        # Check if any resource has this slug
        $found = $false
        foreach ($r in $resources) {
            if ($r.slug -eq $slug -and $r.category -eq $catDir.Name) {
                $found = $true
                break
            }
        }
        if (-not $found) {
            $orphanMds += "$($catDir.Name)/$($md.Name)"
        }
    }
}

if ($orphanMds.Count -eq 0) {
    Write-Host "No orphan markdown files." -ForegroundColor Green
} else {
    Write-Host "Orphan markdown files ($($orphanMds.Count)):" -ForegroundColor Yellow
    $orphanMds | ForEach-Object { Write-Host "  $_" }
}
Write-Host ""

# ============================================================
# SECTION 9: ALTERNATIVES CROSS-REFERENCE
# ============================================================
Write-Host "=== SECTION 9: CROSS-REFERENCE VALIDITY ===" -ForegroundColor Yellow

$allIds = @{}
foreach ($r in $resources) {
    $allIds[$r.id] = $true
}

$brokenRefs = @()
foreach ($r in $resources) {
    if ($r.PSObject.Properties.Name -contains "alternatives") {
        foreach ($alt in $r.alternatives) {
            if ($alt -notin $allIds.Keys) {
                $brokenRefs += "[$($r.id)].alternatives -> $alt"
            }
        }
    }
    if ($r.PSObject.Properties.Name -contains "alternatives_to") {
        foreach ($alt in $r.alternatives_to) {
            if ($alt -notin $allIds.Keys) {
                $brokenRefs += "[$($r.id)].alternatives_to -> $alt"
            }
        }
    }
}

if ($brokenRefs.Count -eq 0) {
    Write-Host "No broken cross-references." -ForegroundColor Green
} else {
    Write-Host "Broken cross-references ($($brokenRefs.Count)):" -ForegroundColor Yellow
    $brokenRefs | ForEach-Object { Write-Host "  $_" }
}
Write-Host ""

# ============================================================
# SECTION 10: FIELD ORDERING CONSISTENCY
# ============================================================
Write-Host "=== SECTION 10: FIELD ORDERING ===" -ForegroundColor Yellow

# Check if all resources have the same fields in the same order
$expectedFields = @("id", "slug", "name", "website", "docs", "github", "description", "category", "subcategory", "tags", "free_tier", "paid_plan", "ratings", "verification", "status", "student_benefits", "requires_card", "region_restrictions", "languages", "alternatives_to", "alternatives", "last_verified")

$orderIssues = @()
foreach ($r in $resources) {
    $props = $r.PSObject.Properties.Name
    # Check required fields present
    foreach ($ef in $expectedFields) {
        if ($ef -notin $props) {
            $orderIssues += "[$($r.id)] missing field: $ef"
        }
    }
}

if ($orderIssues.Count -eq 0) {
    Write-Host "All resources have all required fields." -ForegroundColor Green
} else {
    Write-Host "Field issues ($($orderIssues.Count)):" -ForegroundColor Yellow
    $orderIssues | ForEach-Object { Write-Host "  $_" }
}
Write-Host ""

# ============================================================
# SECTION 11: FREE TIER QUALITY
# ============================================================
Write-Host "=== SECTION 11: FREE TIER QUALITY ===" -ForegroundColor Yellow

$vagueSummaries = @()
foreach ($r in $resources) {
    $summary = $r.free_tier.summary.ToLower()
    # Check if the summary mentions any numeric limits
    $hasNumbers = $summary -match '\d+'
    $hasLimitWords = $summary -match '(free|unlimited|unmetered|open.?source|no cost)'
    if (-not $hasNumbers -and -not ($summary -match 'open source' -or $summary -match 'unlimited')) {
        $vagueSummaries += "[$($r.id)] $($r.free_tier.summary.Substring(0, [Math]::Min(80, $r.free_tier.summary.Length)))..."
    }
}

if ($vagueSummaries.Count -eq 0) {
    Write-Host "All free tier summaries mention specific limits." -ForegroundColor Green
} else {
    Write-Host "Potentially vague free tier summaries ($($vagueSummaries.Count)):" -ForegroundColor Yellow
    $vagueSummaries | Select-Object -First 10 | ForEach-Object { Write-Host "  $_" }
    if ($vagueSummaries.Count -gt 10) {
        Write-Host "  ... and $($vagueSummaries.Count - 10) more"
    }
}
Write-Host ""

# ============================================================
# SECTION 12: RESOURCE GAPS & PRIORITY
# ============================================================
Write-Host "=== SECTION 12: GAP ANALYSIS & PRIORITY ===" -ForegroundColor Yellow

# Suggested target counts per category
$targets = @{
    "ai"             = 50
    "deployment"     = 20
    "cloud"          = 15
    "hosting"        = 12
    "databases"      = 20
    "storage"        = 12
    "auth"           = 15
    "payments"       = 10
    "email-sms"      = 12
    "monitoring"     = 12
    "ci-cd"          = 12
    "devtools"       = 15
    "design"         = 20
    "domains"        = 15
    "testing"        = 15
    "mobile"         = 20
    "learning"       = 20
    "student-packs"  = 20
    "startup-credits" = 20
    "open-source"    = 20
}

Write-Host "Category gap analysis:" -ForegroundColor White
Write-Host "  {0,-20} {1,6} {2,6} {3,8}" -f "Category", "Current", "Target", "Gap %"
Write-Host "  " + "-"*42

$gaps = @()
foreach ($cat in ($taxonomy | Sort-Object Name)) {
    $current = $catCounts[$cat.id] ?? 0
    $target = $targets[$cat.id] ?? 10
    $gapPct = if ($target -gt 0) { [Math]::Round(($target - $current) / $target * 100, 0) } else { 0 }
    $gaps += @{ category = $cat.id; current = $current; target = $target; gap = $gapPct; emptySubcats = $emptySubcats | Where-Object { $_.Name -like "$($cat.id)/*" } | Measure-Object | Select-Object -ExpandProperty Count }
    $color = if ($gapPct -le 0) { "Green" } elseif ($gapPct -le 30) { "Yellow" } else { "Red" }
    Write-Host "  {0,-20} {1,6} {2,6} {3,6}%" -f $cat.id, $current, $target, $gapPct -ForegroundColor $color
}

# Priority ranking
Write-Host "`nPriority population order:" -ForegroundColor Cyan
$priority = $gaps | Sort-Object @{Expression = "gap"; Descending = $true}, @{Expression = "emptySubcats"; Descending = $true}
$rank = 1
foreach ($p in $priority) {
    Write-Host "  #$rank $($p.category) (current: $($p.current), target: $($p.target), gap: $($p.gap)%, empty subcats: $($p.emptySubcats))"
    $rank++
}
Write-Host ""

# ============================================================
# SECTION 13: MISSING TOOLS SUGGESTIONS
# ============================================================
Write-Host "=== SECTION 13: NOTABLE MISSING TOOLS ===" -ForegroundColor Yellow

$missingSuggestions = @{
    "ai"             = @("HuggingFace Inference API", "Groq", "Together AI", "Mistral AI", "Cohere", "Replicate", "Perplexity API", "OpenRouter", "Google Gemini API", "Claude API", "DeepSeek API", "LLaMA.cpp", "Ollama already present")
    "deployment"     = @("Fly.io", "Railway", "Koyeb", "Deno Deploy", "Zeabur", "Northflank", "Porter", "Dokku")
    "cloud"          = @("Alibaba Cloud", "IBM Cloud", "Linode (VPS, but maybe cloud)", "DigitalOcean added", "Hetzner added", "Vultr in hosting")
    "hosting"        = @("Vercel (deployment)", "Netlify (deployment)", "Cloudflare Pages (deployment)", "GitHub Pages (deployment)", "Surge", "Neocities", "Tiiny.host", "Alwaysdata added")
    "databases"      = @("MongoDB Atlas", "Neon", "PlanetScale", "CockroachDB", "TiDB Serverless", "Redis Cloud", "Upstash", "Fauna", "DynamoDB", "AstraDB", "Xata", "Turso", "EdgeDB")
    "storage"        = @("Cloudflare R2 added", "Backblaze B2", "AWS S3", "Google Cloud Storage", "Wasabi", "Filebase", "Uploadthing", "Tigris", "Storj")
    "auth"           = @("Clerk", "Auth0 added", "Supabase Auth (in databases)", "Firebase Auth (in mobile)", "Better Auth (in open-source)", "Logto", "Supertokens", "WorkOS", "Ory", "Keycloak", "Zitadel", "Descope", "Propelauth")
    "payments"       = @("Stripe added", "Lemon Squeezy added", "Paddle added", "Razorpay added", "PayPal added", "Polar", "Chargebee", "Recurly", "Lago", "RevenueCat", "Moov", "Mangopay")
    "email-sms"      = @("Resend added", "SendGrid added", "Mailgun added", "Brevo added", "Loops added", "Twilio SendGrid", "Postmark", "Amazon SES", "Mailchimp Transactional", "Sendinblue (Brevo added)", "Courier", "Novu", "Plunk", "Mailslurp")
    "monitoring"     = @("Sentry added", "Datadog added", "Grafana added", "BetterStack added", "Logtail added", "Checkly", "UptimeRobot", "New Relic", "Elastic APM", "SigNoz", "Axiom", "HyperDX", "Highlight", "OpenTelemetry")
    "ci-cd"          = @("GitHub Actions added", "Jenkins added", "CircleCI added", "GitLab CI/CD added", "Buildkite added", "Woodpecker CI", "Drone CI", "Agola", "Concourse", "Task", "Earthly", "Dagger", "Act")
    "devtools"       = @("VS Code added", "Cursor added", "Windsurf added", "Replit added", "Zed added", "GitHub Codespaces added", "Neovim", "Sublime Text", "JetBrains IDEs", "Vim", "Emacs", "Helix", "Lapce", "Gitpod", "DevPod", "Daytona")
    "design"         = @("Figma added", "Penpot added", "Canva added", "Framer added", "Excalidraw added", "Blender added", "Lucide added", "unDraw added", "Humaaans added", "Google Fonts added", "Fontsource added", "Coolors added", "Storybook", "Radix UI", "shadcn/ui", "Tailwind UI", "Flowbite", "Open Props", "Font Awesome", "Phosphor Icons", "Tabler Icons", "Heroicons")
    "domains"        = @("Cloudflare DNS added", "Duck DNS added", "No-IP added", "FreeDNS added", "eu.org added", "deSEC added", "NIC.US added", "Freenom added", "Porkbun added", "Namecheap added", "Dynu added", "DNSExit", "Cloudns", "HE.NET DNS", "Netlify DNS", "Vercel DNS", "GoDaddy Domain Coupons")
    "testing"        = @("Postman added", "Bruno added", "Playwright added", "Cypress added", "Insomnia added", "Vitest", "Jest", "Mocha", "Jasmine", "Karma", "Storybook Test", "Testing Library", "MSW", "Mock Service Worker", "Hoppscotch", "Puppeteer", "Selenium", "Applitools", "Percy", "Loki", "Chromatic", "k6", "Artillery", "Locust")
    "mobile"         = @("Flutter added", "Expo added", "Kotlin added", "React Native added", "Firebase added", "Appwrite added", "OneSignal added", "FlutterFlow added", "Branch added", "Mixpanel added", "Swift/SwiftUI", "Jetpack Compose", "Capacitor", "Cordova", "Ionic", "NativeScript", "Xamarin", "MAUI", "Flutter + Flame", "Rive", "Lottie", "Amplitude", "Adjust", "AppsFlyer")
    "learning"       = @("freeCodeCamp added", "roadmap.sh added", "Coursera added", "MIT OCW added", "OSSU added", "The Odin Project added", "Codecademy added", "LeetCode added", "MDN Web Docs added", "HackerRank added", "Khan Academy", "Harvard CS50", "Stanford Online", "edX", "Pluralsight", "Frontend Masters", "Egghead", "Scrimba", "CodeSignal", "Exercism", "Codewars", "Advent of Code", "Dev.to", "Hashnode", "Smashing Magazine")
    "student-packs"  = @("GitHub Student Dev Pack added", "AWS Educate added", "Google Cloud for Students added", "Azure for Students added", "Oracle for Education added", "JetBrains Student added", "GitHub Copilot for Students added", "GitKraken Student added", "Figma Education added", "Namecheap Bundle added", ".me Domain added", "LinkedIn Learning added", "DataCamp added", "OpenAI API Credits added", "Notion for Students", "Canva for Education", "Framer Education", "Bitbucket Education", "DigitalOcean for Students", "MongoDB Atlas for Students", "Datadog for Students", "Sentry for Students", "Stripe for Students", "Heroku for Students", "Replit for Education")
    "startup-credits" = @("AWS Activate added", "Microsoft Founders Hub added", "Google for Startups added", "Oracle for Startups added", "DigitalOcean Hatch added", "Stripe Atlas added", "Twilio for Startups added", "Auth0 for Startups added", "YC Startup School added", "OpenAI for Startups added", "NVIDIA Inception added", "HubSpot for Startups added", "Notion for Startups", "Brex for Startups", "Mercury", "Ramp", "Linear for Startups", "Vercel for Startups", "Netlify for Startups", "Supabase for Startups", "MongoDB for Startups", "Confluent for Startups", "Elastic for Startups", "Datadog for Startups", "Sentry for Startups")
    "open-source"    = @("Ollama added", "Open WebUI added", "AppFlowy added", "Outline added", "AFFiNE added", "PocketBase added", "Kamal added", "Cal.com added", "Documenso added", "NocoDB added", "Supabase", "Plausible", "Matomo", "Ghost", "WordPress", "Mastodon", "Lemmy", "Nextcloud", "Seafile", "MinIO", "Directus", "Strapi", "Payload CMS", "Webiny", "PocketBase added", "Appwrite (in databases)", "N8N", "Huginn", "Plane", "Twenty", "ERPNext", "Odoo")
}

# Show just a few notable missing per high-priority category
$highPriority = $priority | Where-Object { $_.gap -gt 30 } | Sort-Object gap -Descending
foreach ($p in $highPriority) {
    $suggestions = $missingSuggestions[$p.category]
    if ($suggestions) {
        Write-Host "$($p.category) (gap: $($p.gap)%):" -ForegroundColor White
        # Show only suggestions that aren't already in the collection
        $existingInCat = $resources | Where-Object { $_.category -eq $p.category } | ForEach-Object { $_.name }
        $newSuggestions = $suggestions | Where-Object { 
            $alreadyPresent = $false
            foreach ($e in $existingInCat) {
                if ($_ -match [regex]::Escape($e.Split(' ')[0])) { $alreadyPresent = $true; break }
            }
            -not $alreadyPresent
        }
        $newSuggestions | Select-Object -First 5 | ForEach-Object { Write-Host "    $_" }
        Write-Host ""
    }
}

# ============================================================
# SUMMARY
# ============================================================
Write-Host "=== SUMMARY ===" -ForegroundColor Cyan
Write-Host "Total resources: $total"
Write-Host "Rating mismatches: $($ratingMismatches.Count)"
Write-Host "Schema violations: $($schemaErrors.Count)"
Write-Host "Empty subcategories: $($emptySubcats.Count)"
Write-Host "Duplicate IDs/Slugs/Names/Websites: $(if ($duplicates.Count -eq 0) { '0' } else { $duplicates.Count })"
Write-Host "Missing markdown files: $($missingMarkdown.Count)"
Write-Host "Orphan markdown files: $($orphanMds.Count)"
Write-Host "Broken cross-references: $($brokenRefs.Count)"
Write-Host "Orphan tags (used but not defined): $($orphanTags.Count)"
Write-Host "Unused tags (defined but never used): $($unusedTags.Count)"

Write-Host "`nValidation complete." -ForegroundColor Cyan
