const fs = require('fs');
const path = require('path');

const repoRoot = 'C:\\Users\\Girish Lade\\OneDrive\\Desktop\\awesome-free-stack';

function loadJSON(rel) {
  return JSON.parse(fs.readFileSync(path.join(repoRoot, rel), 'utf8'));
}

const resources = loadJSON('data/resources.json').resources;
const taxonomy = loadJSON('data/taxonomy.json').categories;
const tagsData = loadJSON('data/tags.json');
const ratingsData = loadJSON('data/ratings.json');

console.log('=== COMPREHENSIVE VALIDATION REPORT ===');
console.log(`Generated: ${new Date().toISOString().slice(0, 10)}\n`);
console.log(`Loaded: ${resources.length} resources, ${taxonomy.length} categories\n`);

// ============================================================
// SECTION 1: BASIC COUNTS
// ============================================================
console.log('=== SECTION 1: BASIC COUNTS ===');
const catCounts = {};
resources.forEach(r => { catCounts[r.category] = (catCounts[r.category] || 0) + 1; });
console.log(`Total: ${resources.length}`);
console.log('\nCount by category:');
Object.keys(catCounts).sort().forEach(c => console.log(`  ${c}: ${catCounts[c]}`));
console.log('');

// ============================================================
// SECTION 2: SCHEMA VIOLATIONS
// ============================================================
console.log('=== SECTION 2: SCHEMA VIOLATIONS ===');
const violations = [];
const validVerStatus = ['tested', 'community-verified', 'unverified'];
const validResStatus = ['active', 'deprecated', 'limited'];
const ratingFields = ['beginner_friendly', 'docs', 'free_generosity', 'setup', 'reliability', 'performance', 'community'];

resources.forEach(r => {
  if (!validVerStatus.includes(r.verification.status)) {
    violations.push(`[${r.id}] verification.status = '${r.verification.status}'`);
  }
  if (!validResStatus.includes(r.status)) {
    violations.push(`[${r.id}] status = '${r.status}'`);
  }
  ratingFields.forEach(f => {
    if (r.ratings[f] < 1 || r.ratings[f] > 5) {
      violations.push(`[${r.id}] ratings.${f} = ${r.ratings[f]}`);
    }
  });
  if (typeof r.requires_card !== 'boolean') {
    violations.push(`[${r.id}] requires_card = ${r.requires_card}`);
  }
});

console.log(violations.length === 0 ? 'None' : violations.join('\n'));
console.log('');

// ============================================================
// SECTION 3: RATING FORMULA VALIDATION
// ============================================================
console.log('=== SECTION 3: RATING FORMULA VALIDATION ===');
const weights = { beginner_friendly: 1.0, docs: 1.0, free_generosity: 1.5, setup: 0.8, reliability: 1.2, performance: 0.8, community: 0.5 };
const weightSum = Object.values(weights).reduce((a, b) => a + b, 0);

const mismatches = [];
const expectedScores = {};
resources.forEach(r => {
  const num = ratingFields.reduce((s, f) => s + r.ratings[f] * weights[f], 0);
  const expected = Math.round(num / weightSum * 10) / 10;
  expectedScores[r.id] = expected;
  if (Math.abs(expected - r.ratings.overall) > 0.05) {
    mismatches.push({ id: r.id, stored: r.ratings.overall, expected });
  }
});

console.log(`Mismatches: ${mismatches.length} / ${resources.length} (${(mismatches.length / resources.length * 100).toFixed(1)}%)`);
if (mismatches.length > 0) {
  mismatches.slice(0, 20).forEach(m => console.log(`  [${m.id}] stored=${m.stored.toFixed(1)} expected=${m.expected}`));
  if (mismatches.length > 20) console.log(`  ... and ${mismatches.length - 20} more`);
  console.log(`\nWeighted formula from ratings.json:\n  (beginner_friendly×1.0 + docs×1.0 + free_generosity×1.5 + setup×0.8 + reliability×1.2 + performance×0.8 + community×0.5) / 6.8\n`);
  console.log('The stored `overall` values were computed with a DIFFERENT formula (weights summing to 1.0 instead of 6.8).');
  console.log('All 193 entries need recalculation. See RECALCULATE-RATINGS.md.');
}
console.log('');

// ============================================================
// SECTION 4: RATING TIER DISTRIBUTION
// ============================================================
console.log('=== SECTION 4: RATING TIER DISTRIBUTION (corrected) ===');
const tiers = { 'Elite (4.5+)': 0, 'Excellent (4.0-4.4)': 0, 'Good (3.0-3.9)': 0, 'Fair (2.0-2.9)': 0, 'Limited (1.0-1.9)': 0, 'Insufficient (<1.0)': 0 };
Object.values(expectedScores).forEach(s => {
  if (s >= 4.5) tiers['Elite (4.5+)']++;
  else if (s >= 4.0) tiers['Excellent (4.0-4.4)']++;
  else if (s >= 3.0) tiers['Good (3.0-3.9)']++;
  else if (s >= 2.0) tiers['Fair (2.0-2.9)']++;
  else if (s >= 1.0) tiers['Limited (1.0-1.9)']++;
  else tiers['Insufficient (<1.0)']++;
});
Object.entries(tiers).forEach(([k, v]) => console.log(`  ${k}: ${v}`));

// Average per category
console.log('\nAverage rating by category:');
const catRating = {};
resources.forEach(r => {
  if (!catRating[r.category]) catRating[r.category] = [];
  catRating[r.category].push(expectedScores[r.id]);
});
Object.entries(catRating).sort().forEach(([cat, scores]) => {
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  console.log(`  ${cat}: ${avg.toFixed(2)}`);
});

// Top/Bottom
const sorted = Object.entries(expectedScores).sort((a, b) => b[1] - a[1]);
console.log('\nTop 10:');
sorted.slice(0, 10).forEach(([id, s]) => console.log(`  ${id}: ${s}`));
console.log('\nBottom 10:');
sorted.slice(-10).forEach(([id, s]) => console.log(`  ${id}: ${s}`));
console.log('');

// ============================================================
// SECTION 5: DUPLICATES
// ============================================================
console.log('=== SECTION 5: DUPLICATES ===');
const seen = { id: {}, slug: {}, name: {}, site: {} };
const dups = [];
resources.forEach(r => {
  if (seen.id[r.id]) dups.push(`Duplicate ID: ${r.id}`);
  seen.id[r.id] = true;
  if (seen.slug[r.slug]) dups.push(`Duplicate slug: ${r.slug}`);
  seen.slug[r.slug] = true;
  const nl = r.name.toLowerCase();
  if (seen.name[nl]) dups.push(`Duplicate name: ${r.name}`);
  seen.name[nl] = true;
  const si = r.website.replace(/\/$/, '').toLowerCase();
  if (seen.site[si]) dups.push(`Duplicate website: ${r.website}`);
  seen.site[si] = true;
});
console.log(dups.length === 0 ? 'None' : dups.join('\n'));
console.log('');

// ============================================================
// SECTION 6: SUBCATEGORY ANALYSIS
// ============================================================
console.log('=== SECTION 6: SUBCATEGORY ANALYSIS ===');
const allSubcats = {};
const subcatUsage = {};
taxonomy.forEach(cat => {
  cat.subcategories.forEach(sub => {
    const key = `${cat.id}/${sub.id}`;
    allSubcats[key] = sub.name;
    subcatUsage[key] = 0;
  });
});

resources.forEach(r => {
  const key = `${r.category}/${r.subcategory}`;
  if (subcatUsage[key] !== undefined) subcatUsage[key]++;
  else console.log(`  WARNING: [${r.id}] invalid subcategory '${key}'`);
});

const empty = Object.entries(subcatUsage).filter(([, v]) => v === 0).sort();
const populated = Object.entries(subcatUsage).filter(([, v]) => v > 0).sort();

console.log(`Total subcategories: ${Object.keys(allSubcats).length}`);
console.log(`Populated: ${populated.length}`);
console.log(`Empty: ${empty.length}`);
if (empty.length > 0) {
  console.log('\nEmpty subcategories:');
  empty.forEach(([k]) => console.log(`  ${k} (${allSubcats[k]})`));
}

// Density map
console.log('\nResource density by subcategory:');
const density = {};
resources.forEach(r => {
  if (!density[r.category]) density[r.category] = {};
  if (!density[r.category][r.subcategory]) density[r.category][r.subcategory] = 0;
  density[r.category][r.subcategory]++;
});
Object.keys(density).sort().forEach(cat => {
  console.log(`  ${cat} (${catCounts[cat]}):`);
  Object.keys(density[cat]).sort().forEach(sub => {
    console.log(`    ${sub}: ${density[cat][sub]}`);
  });
});
console.log('');

// ============================================================
// SECTION 7: TAG ANALYSIS
// ============================================================
console.log('=== SECTION 7: TAG ANALYSIS ===');
const definedTags = {};
tagsData.groups.forEach(g => g.tags.forEach(t => { definedTags[t.id] = { group: g.name, count: t.count }; }));
console.log(`Tags defined: ${Object.keys(definedTags).length}`);

const usedTags = {};
resources.forEach(r => r.tags.forEach(t => { usedTags[t] = (usedTags[t] || 0) + 1; }));

const orphan = Object.keys(usedTags).filter(t => !definedTags[t]).sort();
const unused = Object.keys(definedTags).filter(t => !usedTags[t]).sort();

if (orphan.length > 0) {
  console.log(`Orphan tags (${orphan.length}):`);
  orphan.forEach(t => console.log(`  ${t} (used ${usedTags[t]}x)`));
} else {
  console.log('No orphan tags.');
}
if (unused.length > 0) {
  console.log(`Unused tags (${unused.length}):`);
  unused.forEach(t => console.log(`  ${t} (${definedTags[t].group}, defined count: ${definedTags[t].count})`));
} else {
  console.log('No unused tags.');
}

console.log('\nMost common tags (top 15):');
Object.entries(usedTags).sort((a, b) => b[1] - a[1]).slice(0, 15).forEach(([t, n]) => console.log(`  ${t}: ${n}`));

const rare = Object.entries(usedTags).filter(([, n]) => n === 1).map(([t]) => t).sort();
console.log(`\nTags used by only 1 resource (${rare.length}):`);
if (rare.length > 0) rare.forEach(t => console.log(`  ${t}`));
console.log('');

// ============================================================
// SECTION 8: MISSING MARKDOWN FILES
// ============================================================
console.log('=== SECTION 8: MARKDOWN FILES ===');
const missingMds = [];
resources.forEach(r => {
  const mp = path.join(repoRoot, 'categories', r.category, `${r.slug}.md`);
  if (!fs.existsSync(mp)) missingMds.push(r.id);
});
console.log(missingMds.length === 0 ? 'All markdowns present.' : `Missing: ${missingMds.join(', ')}`);

// Orphan markdowns
const catDirs = fs.readdirSync(path.join(repoRoot, 'categories'), { withFileTypes: true }).filter(d => d.isDirectory());
const orphanMds = [];
catDirs.forEach(dir => {
  const mds = fs.readdirSync(path.join(repoRoot, 'categories', dir.name)).filter(f => f.endsWith('.md'));
  mds.forEach(md => {
    const slug = md.replace(/\.md$/, '');
    const found = resources.some(r => r.slug === slug && r.category === dir.name);
    if (!found) orphanMds.push(`${dir.name}/${md}`);
  });
});
console.log(orphanMds.length === 0 ? 'No orphan markdowns.' : `Orphan markdowns: ${orphanMds.join(', ')}`);
console.log('');

// ============================================================
// SECTION 9: CROSS-REFERENCES
// ============================================================
console.log('=== SECTION 9: CROSS-REFERENCES ===');
const allIds = new Set(resources.map(r => r.id));
const broken = [];
resources.forEach(r => {
  (r.alternatives || []).forEach(a => { if (!allIds.has(a)) broken.push(`[${r.id}].alternatives -> ${a}`); });
  (r.alternatives_to || []).forEach(a => { if (!allIds.has(a)) broken.push(`[${r.id}].alternatives_to -> ${a}`); });
});
console.log(broken.length === 0 ? 'None broken.' : broken.join('\n'));
console.log('');

// ============================================================
// SECTION 10: FIELD ORDERING
// ============================================================
console.log('=== SECTION 10: FIELD ORDERING ===');
const expectedFields = ['id', 'slug', 'name', 'website', 'docs', 'github', 'description', 'category', 'subcategory', 'tags', 'free_tier', 'paid_plan', 'ratings', 'verification', 'status', 'student_benefits', 'requires_card', 'region_restrictions', 'languages', 'alternatives_to', 'alternatives', 'last_verified'];
const missingFields = [];
resources.forEach(r => {
  expectedFields.forEach(f => {
    if (!(f in r)) missingFields.push(`[${r.id}] missing: ${f}`);
  });
});
console.log(missingFields.length === 0 ? 'All fields present across all resources.' : missingFields.join('\n'));
console.log('');

// ============================================================
// SECTION 11: GAP ANALYSIS
// ============================================================
console.log('=== SECTION 11: GAP ANALYSIS ===');
const targets = {
  ai: 50, deployment: 20, cloud: 15, hosting: 12, databases: 20,
  storage: 12, auth: 15, payments: 10, 'email-sms': 12, monitoring: 12,
  'ci-cd': 12, devtools: 15, design: 20, domains: 15, testing: 15,
  mobile: 20, learning: 20, 'student-packs': 20, 'startup-credits': 20, 'open-source': 20
};

console.log('Category gap analysis:');
const gapData = taxonomy.map(cat => {
  const current = catCounts[cat.id] || 0;
  const target = targets[cat.id] || 10;
  const gapPct = target > 0 ? Math.round((target - current) / target * 100) : 0;
  const emptySubs = empty.filter(([k]) => k.startsWith(`${cat.id}/`)).length;
  return { category: cat.id, current, target, gapPct, emptySubs };
});
gapData.forEach(g => console.log(`  ${g.category}: ${g.current}/${g.target} (${g.gapPct}% gap, ${g.emptySubs} empty subcats)`));

console.log('\nPriority ranking:');
gapData.sort((a, b) => b.gapPct - a.gapPct || b.emptySubs - a.emptySubs)
  .forEach((g, i) => console.log(`  #${i + 1} ${g.category} (gap: ${g.gapPct}%, empty: ${g.emptySubs})`));
console.log('');

// ============================================================
// SECTION 12: NOTABLE MISSING TOOLS
// ============================================================
console.log('=== SECTION 12: NOTABLE MISSING TOOLS ===');
const missingSuggestions = {
  'ai': ['HuggingFace Inference API', 'Groq', 'Together AI', 'Mistral AI', 'DeepSeek API', 'Google Gemini API', 'Claude API', 'Replicate', 'OpenRouter'],
  'deployment': ['Fly.io', 'Railway', 'Koyeb', 'Deno Deploy', 'Zeabur', 'Northflank', 'Dokku'],
  'cloud': ['Alibaba Cloud', 'IBM Cloud', 'OVHcloud', 'Scaleway'],
  'hosting': ['Surge', 'Neocities', 'Tiiny.host', 'Alwaysdata'],
  'databases': ['Neon', 'PlanetScale', 'CockroachDB', 'Upstash', 'Turso', 'Xata', 'Fauna', 'EdgeDB', 'TiDB Serverless'],
  'storage': ['Backblaze B2', 'AWS S3 Free', 'Wasabi', 'Uploadthing', 'Tigris', 'Storj', 'Filebase'],
  'auth': ['Clerk', 'Logto', 'Supertokens', 'WorkOS', 'Ory', 'Keycloak', 'Zitadel', 'Descope', 'Propelauth'],
  'payments': ['Polar', 'RevenueCat', 'Lago', 'Moov', 'Mangopay', 'Chargebee Free'],
  'email-sms': ['Twilio SendGrid', 'Postmark', 'Amazon SES', 'Courier', 'Novu', 'Plunk', 'Mailslurp'],
  'monitoring': ['Checkly', 'UptimeRobot', 'SigNoz', 'Axiom', 'HyperDX', 'Highlight', 'New Relic Free', 'Elastic APM Free'],
  'ci-cd': ['Woodpecker CI', 'Drone CI', 'Earthly', 'Dagger', 'Act', 'Agola'],
  'devtools': ['Neovim', 'Helix', 'Lapce', 'Gitpod', 'DevPod', 'Daytona', 'inshellisense'],
  'design': ['Storybook', 'shadcn/ui', 'Radix UI', 'Tailwind UI', 'Font Awesome', 'Phosphor Icons', 'Tabler Icons', 'Heroicons', 'Open Props'],
  'domains': ['DNSExit', 'Cloudns', 'HE.NET DNS'],
  'testing': ['Vitest', 'Jest', 'Playwright (already present)', 'Testing Library', 'MSW', 'Hoppscotch', 'Puppeteer', 'Selenium', 'k6', 'Artillery', 'Chromatic', 'Percy'],
  'mobile': ['Swift/SwiftUI', 'Jetpack Compose', 'Capacitor', 'Ionic', 'Amplitude', 'Adjust', 'AppsFlyer', 'Rive', 'Lottie'],
  'learning': ['Harvard CS50', 'Khan Academy', 'edX', 'Exercism', 'Codewars', 'CodeSignal', 'Advent of Code'],
  'student-packs': ['Notion for Students', 'Canva for Education', 'Bitbucket Education', 'DigitalOcean for Students', 'MongoDB Atlas for Students', 'Replit for Education'],
  'startup-credits': ['Notion for Startups', 'Brex for Startups', 'Mercury', 'Linear for Startups', 'Vercel for Startups', 'Netlify for Startups', 'Supabase for Startups', 'MongoDB for Startups', 'Confluent for Startups'],
  'open-source': ['Supabase', 'Plausible', 'Matomo', 'Ghost', 'Nextcloud', 'MinIO', 'N8N', 'Huginn', 'Plane', 'Twenty', 'ERPNext', 'Directus', 'Strapi', 'Payload CMS']
};

const highPriority = gapData.sort((a, b) => b.gapPct - a.gapPct).filter(g => g.gapPct > 30);
highPriority.forEach(hp => {
  const suggestions = (missingSuggestions[hp.category] || []).filter(t => {
    const existing = resources.filter(r => r.category === hp.category).map(r => r.name.toLowerCase());
    return !existing.some(e => t.toLowerCase().includes(e.split(' ')[0].toLowerCase()) || e.includes(t.split(' ')[0].toLowerCase()));
  });
  console.log(`\n${hp.category} (gap ${hp.gapPct}%):`);
  suggestions.slice(0, 6).forEach(s => console.log(`  → ${s}`));
});
console.log('');

// ============================================================
// FINAL SUMMARY
// ============================================================
console.log('=== FINAL SUMMARY ===');
console.log(`Total resources:         ${resources.length}`);
console.log(`Rating mismatches:        ${mismatches.length}`);
console.log(`Schema violations:        ${violations.length}`);
console.log(`Empty subcategories:      ${empty.length}`);
console.log(`Duplicate detection:       ${dups.length}`);
console.log(`Missing markdowns:         ${missingMds.length}`);
console.log(`Orphan markdowns:          ${orphanMds.length}`);
console.log(`Broken references:         ${broken.length}`);
console.log(`Orphan tags:               ${orphan.length}`);
console.log(`Unused tags:               ${unused.length}`);
console.log(`\nCritical: Fix ${mismatches.length} rating mismatches + ${violations.length} schema violations.`);
