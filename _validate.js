const fs = require('fs');
const resources = JSON.parse(fs.readFileSync('./data/resources.json', 'utf8'));
const taxonomy = JSON.parse(fs.readFileSync('./data/taxonomy.json', 'utf8'));
const tags = JSON.parse(fs.readFileSync('./data/tags.json', 'utf8'));
console.log('Resources:', resources.resources.length, 'Meta:', resources.meta.total_resources);
const validCats = taxonomy.categories.map(c => c.id);
const validTags = new Set(tags.groups.flatMap(g => g.tags.map(t => t.id)));
const errs = [];
resources.resources.forEach(r => {
  if (!validCats.includes(r.category)) errs.push(r.id + ': invalid category "' + r.category + '"');
  (r.tags || []).forEach(t => { if (!validTags.has(t)) errs.push(r.id + ': unknown tag "' + t + '"'); });
  const md = './categories/' + r.category + '/' + r.slug + '.md';
  if (!fs.existsSync(md)) errs.push(r.id + ': missing markdown at ' + md);
});
if (errs.length) { console.error('Errors:'); errs.forEach(e => console.error('  ' + e)); process.exit(1); }
else console.log('All ' + resources.resources.length + ' resources passed validation');
