const fs = require('fs');
const path = require('path');

const rp = path.join(__dirname, '..', 'data', 'resources.json');
const md = path.join(__dirname, '..', 'categories', 'ci-cd');
if (!fs.existsSync(md)) fs.mkdirSync(md, { recursive: true });

const all = JSON.parse(fs.readFileSync(rp, 'utf-8'));
const exist = new Set(all.resources.map(r => r.id));

const now = '2026-05-31';
const cat = 'ci-cd';

function ov(r) {
  const w = { beginner_friendly: 1.0, docs: 1.0, free_generosity: 1.5, setup: 0.8, reliability: 1.2, performance: 0.8, community: 0.5 };
  return Math.round(Object.keys(w).reduce((a, k) => a + r[k] * w[k], 0) / 6.8 * 10) / 10;
}

const names = {};
function nameSlug(s) { return names[s] || s; }

// Compact resource definitions
// Format: [id, name, website, docs, github, desc, subcat, tags, freeSummary, paidSummary, paidPrice, paidModel, ratings obj, testedBy, student, card, region, altTo, alts, langs]
