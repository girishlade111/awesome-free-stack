const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data/resources.json', 'utf8'));
const tags = JSON.parse(fs.readFileSync('data/tags.json', 'utf8'));
const tax = JSON.parse(fs.readFileSync('data/taxonomy.json', 'utf8'));

let allOk = true;

// 1. Resource count
if (data.resources.length !== data.meta.total_resources) {
  console.log('FAIL: Count mismatch: ' + data.resources.length + ' vs meta ' + data.meta.total_resources);
  allOk = false;
} else {
  console.log('PASS: Resource count: ' + data.resources.length);
}

// 2. All tags exist
const allTags = {};
tags.groups.forEach(g => { g.tags.forEach(t => { allTags[t.id] = true; }); });
let tagIssues = 0;
data.resources.forEach(r => {
  (r.tags || []).forEach(tag => {
    if (!allTags[tag]) { console.log('FAIL: Invalid tag "' + tag + '" in ' + r.id); tagIssues++; allOk = false; }
  });
});
if (tagIssues === 0) console.log('PASS: All tags valid');

// 3. Global + category tag rules
const globalTags = {}; tags.groups[0].tags.forEach(t => { globalTags[t.id] = true; });
const catTags = {}; tags.groups[1].tags.forEach(t => { catTags[t.id] = true; });
let ruleIssues = 0;
data.resources.forEach(r => {
  const hasGlobal = (r.tags || []).some(t => globalTags[t]);
  const hasCat = (r.tags || []).some(t => catTags[t]);
  if (!hasGlobal) { console.log('FAIL: Missing global tag in ' + r.id); ruleIssues++; allOk = false; }
  if (!hasCat) { console.log('FAIL: Missing category tag in ' + r.id); ruleIssues++; allOk = false; }
  if ((r.tags || []).length < 2) { console.log('FAIL: <2 tags in ' + r.id); ruleIssues++; allOk = false; }
  if ((r.tags || []).length > 10) { console.log('FAIL: >10 tags in ' + r.id); ruleIssues++; allOk = false; }
});
if (ruleIssues === 0) console.log('PASS: Tag rules satisfied');

// 4. Verify ratings
let pass = 0, fail = 0;
data.resources.forEach(r => {
  const w = { beginner_friendly: 1.0, docs: 1.0, free_generosity: 1.5, setup: 0.8, reliability: 1.2, performance: 0.8, community: 0.5 };
  let sum = 0;
  Object.keys(w).forEach(k => { sum += (r.ratings[k] || 0) * w[k]; });
  const totalWeight = Object.values(w).reduce((a, b) => a + b, 0);
  const computed = Math.round(sum / totalWeight * 10) / 10;
  if (computed !== r.ratings.overall) { console.log('FAIL: Rating mismatch ' + r.id + ' declared=' + r.ratings.overall + ' computed=' + computed); fail++; allOk = false; }
  else { pass++; }
});
if (fail === 0) console.log('PASS: All ' + pass + ' ratings correct');

// 5. Markdown files exist
let mdMissing = 0;
data.resources.forEach(r => {
  const p = 'categories/' + r.category + '/' + r.slug + '.md';
  if (!fs.existsSync(p)) { console.log('FAIL: Missing ' + p); mdMissing++; allOk = false; }
});
if (mdMissing === 0) console.log('PASS: All ' + data.resources.length + ' markdown files present');

// 6. Category exists in taxonomy
const cats = {}; tax.categories.forEach(c => { cats[c.id] = true; });
let catIssues = 0;
data.resources.forEach(r => {
  if (!cats[r.category]) { console.log('FAIL: Invalid category ' + r.category + ' in ' + r.id); catIssues++; allOk = false; }
});
if (catIssues === 0) console.log('PASS: All categories valid');

// 7. Duplicate IDs
const ids = {};
let dupIssues = 0;
data.resources.forEach(r => {
  if (ids[r.id]) { console.log('FAIL: Duplicate ID ' + r.id); dupIssues++; allOk = false; }
  ids[r.id] = true;
});
if (dupIssues === 0) console.log('PASS: No duplicate IDs');

if (allOk) {
  console.log('\n=== ALL VALIDATIONS PASSED ===');
} else {
  console.log('\n=== SOME CHECKS FAILED ===');
  process.exit(1);
}
