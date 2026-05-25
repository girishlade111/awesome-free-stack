# Comprehensive validation script for awesome-free-stack (PowerShell 5.1 compatible)
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

$total = $resources.Count
Write-Host "File loaded: $total resources" -ForegroundColor Green
Write-Host "File loaded: $($taxonomy.Count) categories" -ForegroundColor Green
Write-Host ""

# ============================================================
# SECTION 1: BASIC COUNTS
# ============================================================
Write-Host "=== SECTION 1: BASIC COUNTS ===" -ForegroundColor Yellow
Write-Host "Total resources: $total"

$catCounts = @{}
foreach ($r in $resources) {
    $cat = $r.category
    if (-not $catCounts.ContainsKey($cat)) { $catCounts[$cat] = 0 }
    $catCounts[$cat]++
}
Write-Host "`nCount by category:" -ForegroundColor White
$catCounts.Keys | Sort-Object | ForEach-Object {
    Write-Host "  $_: $($catCounts[$_])"
}
Write-Host ""

# ============================================================
# SECTION 2: SCHEMA VIOLATIONS
# ============================================================
Write-Host "=== SECTION 2: SCHEMA VIOLATIONS ===" -ForegroundColor Yellow

$schemaErrors = @()
$validStatuses = @("tested", "community-verified", "unverified")
$validResourceStatuses = @("active", "deprecated", "limited")
$validCategories = @()
foreach ($cat in $taxonomy) { $validCategories += $cat.id }

foreach ($r in $resources) {
    if ($validStatuses -notcontains $r.verification.status) {
        $schemaErrors += "[$($r.id)] verification.status = '$($r.verification.status)'"
    }
    if ($validResourceStatuses -notcontains $r.status) {
        $schemaErrors += "[$($r.id)] status = '$($r.status)'"
    }
    if ($validCategories -notcontains $r.category) {
        $schemaErrors += "[$($r.id)] category = '$($r.category)' invalid"
    }
}

$ratingFields = @("beginner_friendly", "docs", "free_generosity", "setup", "reliability", "performance", "community")
foreach ($r in $resources) {
    foreach ($f in $ratingFields) {
        $v = $r.ratings.$f
        if ($v -lt 1 -or $v -gt 5) {
            $schemaErrors += "[$($r.id)] ratings.$f = $v (must be 1-5)"
        }
    }
}

if ($schemaErrors.Count -eq 0) {
    Write-Host "No schema violations found." -ForegroundColor Green
} else {
    Write-Host "Schema violations ($($schemaErrors.Count)):" -ForegroundColor Red
    foreach ($e in $schemaErrors) { Write-Host "  $e" }
}
Write-Host ""

# ============================================================
# SECTION 3: RATING FORMULA VALIDATION
# ============================================================
Write-Host "=== SECTION 3: RATING FORMULA VALIDATION ===" -ForegroundColor Yellow

$weights = @{}
$weights["beginner_friendly"] = 1.0
$weights["docs"] = 1.0
$weights["free_generosity"] = 1.5
$weights["setup"] = 0.8
$weights["reliability"] = 1.2
$weights["performance"] = 0.8
$weights["community"] = 0.5

$weightSum = 0
$weights.Values | ForEach-Object { $weightSum += $_ }

$ratingMismatches = @()
$expectedAll = @{}
foreach ($r in $resources) {
    $num = 0.0
    foreach ($f in $ratingFields) {
        $num += $r.ratings.$f * $weights[$f]
    }
    $expected = [Math]::Round($num / $weightSum, 1)
    $expectedAll[$r.id] = $expected
    $stored = $r.ratings.overall
    if ([Math]::Abs($expected - $stored) -gt 0.05) {
        $ratingMismatches += @{ id = $r.id; expected = $expected; stored = $stored }
    }
}

Write-Host "Rating mismatches: $($ratingMismatches.Count) / $total" -ForegroundColor $(if ($ratingMismatches.Count -eq 0) { "Green" } else { "Red" })
if ($ratingMismatches.Count -gt 0) {
    Write-Host "Examples:" -ForegroundColor White
    $i = 0
    foreach ($m in $ratingMismatches) {
        if ($i -ge 20) { break }
        Write-Host "  [$($m.id)] stored=$($m.stored) expected=$($m.expected)"
        $i++
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

$tierCounts = @{}
$tierCounts["Elite (4.5-5.0)"] = 0
$tierCounts["Excellent (4.0-4.4)"] = 0
$tierCounts["Good (3.0-3.9)"] = 0
$tierCounts["Fair (2.0-2.9)"] = 0
$tierCounts["Limited (1.0-1.9)"] = 0
$tierCounts["Insufficient (<1.0)"] = 0

foreach ($id in $expectedAll.Keys) {
    $score = $expectedAll[$id]
    if ($score -ge 4.5) { $tierCounts["Elite (4.5-5.0)"]++ }
    elseif ($score -ge 4.0) { $tierCounts["Excellent (4.0-4.4)"]++ }
    elseif ($score -ge 3.0) { $tierCounts["Good (3.0-3.9)"]++ }
    elseif ($score -ge 2.0) { $tierCounts["Fair (2.0-2.9)"]++ }
    elseif ($score -ge 1.0) { $tierCounts["Limited (1.0-1.9)"]++ }
    else { $tierCounts["Insufficient (<1.0)"]++ }
}

$tierCounts.Keys | Sort-Object | ForEach-Object {
    Write-Host "  $_: $($tierCounts[$_])"
}

# Average rating per category
Write-Host "`nAverage rating by category:" -ForegroundColor White
$catScores = @{}
foreach ($r in $resources) {
    $cat = $r.category
    if (-not $catScores.ContainsKey($cat)) { $catScores[$cat] = @() }
    $catScores[$cat] += $expectedAll[$r.id]
}
$catScores.Keys | Sort-Object | ForEach-Object {
    $scores = $catScores[$_]
    $total2 = 0
    foreach ($s in $scores) { $total2 += $s }
    $avg = [Math]::Round($total2 / $scores.Count, 2)
    Write-Host "  $_: $avg"
}

# Top 10 and Bottom 10
$sortedIds = $expectedAll.Keys | Sort-Object { $expectedAll[$_] } -Descending
Write-Host "`nTop 10 highest-rated:" -ForegroundColor Green
$i = 0
foreach ($id in $sortedIds) {
    if ($i -ge 10) { break }
    Write-Host "  $id: $($expectedAll[$id])"
    $i++
}
Write-Host "`nBottom 10 lowest-rated:" -ForegroundColor Red
$sortedIdsDesc = $expectedAll.Keys | Sort-Object { $expectedAll[$_] }
$i = 0
foreach ($id in $sortedIdsDesc) {
    if ($i -ge 10) { break }
    Write-Host "  $id: $($expectedAll[$id])"
    $i++
}
Write-Host ""

# ============================================================
# SECTION 5: DUPLICATE DETECTION
# ============================================================
Write-Host "=== SECTION 5: DUPLICATE DETECTION ===" -ForegroundColor Yellow

$dupReport = @()
$idSet = @{}
$slugSet = @{}
$nameSet = @{}
$siteSet = @{}

foreach ($r in $resources) {
    if ($idSet.ContainsKey($r.id)) { $dupReport += "Duplicate ID: $($r.id)" }
    else { $idSet[$r.id] = $true }
    
    if ($slugSet.ContainsKey($r.slug)) { $dupReport += "Duplicate slug: $($r.slug)" }
    else { $slugSet[$r.slug] = $true }
    
    $nLower = $r.name.ToLower()
    if ($nameSet.ContainsKey($nLower)) { $dupReport += "Duplicate name: $($r.name)" }
    else { $nameSet[$nLower] = $true }
    
    $site = $r.website.TrimEnd('/').ToLower()
    if ($siteSet.ContainsKey($site)) { $dupReport += "Duplicate website: $($r.website)" }
    else { $siteSet[$site] = $true }
}

if ($dupReport.Count -eq 0) {
    Write-Host "No duplicates found." -ForegroundColor Green
} else {
    Write-Host "Duplicates found:" -ForegroundColor Red
    foreach ($d in $dupReport) { Write-Host "  $d" }
}
Write-Host ""

# ============================================================
# SECTION 6: SUBCATEGORY ANALYSIS
# ============================================================
Write-Host "=== SECTION 6: SUBCATEGORY ANALYSIS ===" -ForegroundColor Yellow

$allSubcats = @{}
$subcatUsage = @{}
foreach ($cat in $taxonomy) {
    foreach ($sub in $cat.subcategories) {
        $key = "$($cat.id)/$($sub.id)"
        $allSubcats[$key] = $sub.name
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

$emptySubcats = @()
$populatedSubcats = @()
foreach ($key in $subcatUsage.Keys) {
    if ($subcatUsage[$key] -eq 0) { $emptySubcats += $key }
    else { $populatedSubcats += $key }
}
$emptySubcats = $emptySubcats | Sort-Object
$populatedSubcats = $populatedSubcats | Sort-Object

Write-Host "Total subcategories defined: $($allSubcats.Count)" -ForegroundColor White
Write-Host "Populated subcategories: $($populatedSubcats.Count)" -ForegroundColor Green
Write-Host "Empty subcategories: $($emptySubcats.Count)" -ForegroundColor $(if ($emptySubcats.Count -eq 0) { "Green" } else { "Yellow" })

if ($emptySubcats.Count -gt 0) {
    Write-Host "`nEmpty subcategories:" -ForegroundColor Yellow
    foreach ($key in $emptySubcats) {
        Write-Host "  $key ($($allSubcats[$key]))"
    }
}

# Resource distribution by category/subcategory
Write-Host "`nResource density by category/subcategory:" -ForegroundColor White
$catSubcatCounts = @{}
foreach ($r in $resources) {
    $cat = $r.category
    $sub = $r.subcategory
    if (-not $catSubcatCounts.ContainsKey($cat)) { $catSubcatCounts[$cat] = @{} }
    if (-not $catSubcatCounts[$cat].ContainsKey($sub)) { $catSubcatCounts[$cat][$sub] = 0 }
    $catSubcatCounts[$cat][$sub]++
}

foreach ($cat in ($catSubcatCounts.Keys | Sort-Object)) {
    Write-Host "  $cat ($($catCounts[$cat]) total):" -ForegroundColor White
    foreach ($sub in ($catSubcatCounts[$cat].Keys | Sort-Object)) {
        Write-Host "    $sub: $($catSubcatCounts[$cat][$sub])"
    }
}
Write-Host ""

# ============================================================
# SECTION 7: TAG ANALYSIS
# ============================================================
Write-Host "=== SECTION 7: TAG ANALYSIS ===" -ForegroundColor Yellow

$definedTags = @{}
foreach ($group in $tagsData.groups) {
    foreach ($tag in $group.tags) {
        $definedTags[$tag.id] = @{ group = $group.name; count = $tag.count }
    }
}

Write-Host "Total tags defined: $($definedTags.Count)" -ForegroundColor White

$usedTags = @{}
foreach ($r in $resources) {
    foreach ($tag in $r.tags) {
        if (-not $usedTags.ContainsKey($tag)) { $usedTags[$tag] = 0 }
        $usedTags[$tag]++
    }
}

$orphanTags = @()
$unusedTags = @()
foreach ($tag in $usedTags.Keys) {
    if (-not $definedTags.ContainsKey($tag)) { $orphanTags += $tag }
}
foreach ($tag in $definedTags.Keys) {
    if (-not $usedTags.ContainsKey($tag)) { $unusedTags += $tag }
}
$orphanTags = $orphanTags | Sort-Object
$unusedTags = $unusedTags | Sort-Object

if ($orphanTags.Count -eq 0) {
    Write-Host "No orphan tags (used but not defined)." -ForegroundColor Green
} else {
    Write-Host "Orphan tags ($($orphanTags.Count)):" -ForegroundColor Red
    foreach ($t in $orphanTags) { Write-Host "  $t (used $($usedTags[$t]) times)" }
}

if ($unusedTags.Count -eq 0) {
    Write-Host "No unused tags (defined but never used)." -ForegroundColor Green
} else {
    Write-Host "Unused tags ($($unusedTags.Count)):" -ForegroundColor Yellow
    foreach ($t in $unusedTags) {
        $info = $definedTags[$t]
        Write-Host "  $t (group: $($info.group), defined count: $($info.count))"
    }
}

Write-Host "`nMost commonly used tags:" -ForegroundColor White
$usedTagsSorted = $usedTags.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 15
foreach ($entry in $usedTagsSorted) {
    Write-Host "  $($entry.Name): $($entry.Value)"
}

Write-Host "`nTags used by only 1 resource:" -ForegroundColor Yellow
$rareTags = @()
foreach ($entry in $usedTags.GetEnumerator()) {
    if ($entry.Value -eq 1) { $rareTags += $entry.Name }
}
$rareTags = $rareTags | Sort-Object
foreach ($t in $rareTags) { Write-Host "  $t" }
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
    Write-Host "No missing markdown files. All $total resources have markdown." -ForegroundColor Green
} else {
    Write-Host "Missing markdown files ($($missingMarkdown.Count)):" -ForegroundColor Red
    foreach ($m in $missingMarkdown) { Write-Host "  $m" }
}

# Check orphan markdowns
Write-Host "`nChecking for orphan markdowns..." -ForegroundColor White
$orphanMds = @()
$catDirs = Get-ChildItem (Join-Path $repoRoot "categories") -Directory
foreach ($catDir in $catDirs) {
    $mdFiles = Get-ChildItem $catDir.FullName -Filter "*.md"
    foreach ($md in $mdFiles) {
        $slug = [System.IO.Path]::GetFileNameWithoutExtension($md.Name)
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
    foreach ($m in $orphanMds) { Write-Host "  $m" }
}
Write-Host ""

# ============================================================
# SECTION 9: ALTERNATIVES CROSS-REFERENCE
# ============================================================
Write-Host "=== SECTION 9: CROSS-REFERENCE VALIDITY ===" -ForegroundColor Yellow

$allIds = @{}
foreach ($r in $resources) { $allIds[$r.id] = $true }

$brokenRefs = @()
foreach ($r in $resources) {
    $props = $r.PSObject.Properties.Name
    if ($props -contains "alternatives") {
        foreach ($alt in $r.alternatives) {
            if (-not $allIds.ContainsKey($alt)) {
                $brokenRefs += "[$($r.id)].alternatives -> $alt"
            }
        }
    }
    if ($props -contains "alternatives_to") {
        foreach ($alt in $r.alternatives_to) {
            if (-not $allIds.ContainsKey($alt)) {
                $brokenRefs += "[$($r.id)].alternatives_to -> $alt"
            }
        }
    }
}

if ($brokenRefs.Count -eq 0) {
    Write-Host "No broken cross-references." -ForegroundColor Green
} else {
    Write-Host "Broken cross-references ($($brokenRefs.Count)):" -ForegroundColor Yellow
    foreach ($b in $brokenRefs) { Write-Host "  $b" }
}
Write-Host ""

# ============================================================
# SECTION 10: FIELD ORDERING CONSISTENCY
# ============================================================
Write-Host "=== SECTION 10: FIELD ORDERING ===" -ForegroundColor Yellow

$expectedFields = @("id", "slug", "name", "website", "docs", "github", "description", "category", "subcategory", "tags", "free_tier", "paid_plan", "ratings", "verification", "status", "student_benefits", "requires_card", "region_restrictions", "languages", "alternatives_to", "alternatives", "last_verified")

$fieldIssues = @()
foreach ($r in $resources) {
    $props = $r.PSObject.Properties.Name
    foreach ($ef in $expectedFields) {
        if ($props -notcontains $ef) {
            $fieldIssues += "[$($r.id)] missing field: $ef"
        }
    }
}

if ($fieldIssues.Count -eq 0) {
    Write-Host "All resources have all required fields." -ForegroundColor Green
} else {
    Write-Host "Field issues ($($fieldIssues.Count)):" -ForegroundColor Yellow
    foreach ($f in $fieldIssues) { Write-Host "  $f" }
}
Write-Host ""

# ============================================================
# SECTION 11: GAP ANALYSIS & PRIORITY
# ============================================================
Write-Host "=== SECTION 11: GAP ANALYSIS & PRIORITY ===" -ForegroundColor Yellow

$targets = @{}
$targets["ai"] = 50
$targets["deployment"] = 20
$targets["cloud"] = 15
$targets["hosting"] = 12
$targets["databases"] = 20
$targets["storage"] = 12
$targets["auth"] = 15
$targets["payments"] = 10
$targets["email-sms"] = 12
$targets["monitoring"] = 12
$targets["ci-cd"] = 12
$targets["devtools"] = 15
$targets["design"] = 20
$targets["domains"] = 15
$targets["testing"] = 15
$targets["mobile"] = 20
$targets["learning"] = 20
$targets["student-packs"] = 20
$targets["startup-credits"] = 20
$targets["open-source"] = 20

Write-Host "Category gap analysis:" -ForegroundColor White
Write-Host ("  {0,-20} {1,6} {2,6} {3,8} {4,8}" -f "Category", "Current", "Target", "Gap %", "EmptySub")
Write-Host ("  " + "-"*50)

$gaps = @()
foreach ($cat in ($taxonomy | Sort-Object Name)) {
    $cid = $cat.id
    $current = if ($catCounts.ContainsKey($cid)) { $catCounts[$cid] } else { 0 }
    $target = if ($targets.ContainsKey($cid)) { $targets[$cid] } else { 10 }
    $gapPct = 0
    if ($target -gt 0) { $gapPct = [Math]::Round(($target - $current) / $target * 100, 0) }
    
    $emptyCount = 0
    foreach ($ek in $emptySubcats) {
        if ($ek -like "$cid/*") { $emptyCount++ }
    }
    
    $gap = New-Object PSObject -Property @{ category=$cid; current=$current; target=$target; gap=$gapPct; emptySubcats=$emptyCount }
    $gaps += $gap
    
    $color = "Red"
    if ($gapPct -le 0) { $color = "Green" }
    elseif ($gapPct -le 30) { $color = "Yellow" }
    
    Write-Host ("  {0,-20} {1,6} {2,6} {3,6}% {4,8}" -f $cid, $current, $target, $gapPct, $emptyCount) -ForegroundColor $color
}

Write-Host "`nPriority population order:" -ForegroundColor Cyan
$priority = $gaps | Sort-Object gap -Descending
$rank = 1
foreach ($p in $priority) {
    Write-Host "  #$rank $($p.category) (current: $($p.current), target: $($p.target), gap: $($p.gap)%, empty subcats: $($p.emptySubcats))"
    $rank++
}
Write-Host ""

# ============================================================
# SUMMARY
# ============================================================
Write-Host "=== SUMMARY ===" -ForegroundColor Cyan
Write-Host "Total resources: $total"
Write-Host "Rating mismatches: $($ratingMismatches.Count)"
Write-Host "Schema violations: $($schemaErrors.Count)"
Write-Host "Empty subcategories: $($emptySubcats.Count)"
Write-Host "Duplicate IDs/Slugs/Names/Websites: $($dupReport.Count)"
Write-Host "Missing markdown files: $($missingMarkdown.Count)"
Write-Host "Orphan markdown files: $($orphanMds.Count)"
Write-Host "Broken cross-references: $($brokenRefs.Count)"
Write-Host "Orphan tags: $($orphanTags.Count)"
Write-Host "Unused tags: $($unusedTags.Count)"

Write-Host "`nValidation complete." -ForegroundColor Cyan
