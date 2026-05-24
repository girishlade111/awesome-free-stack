const fs = require('fs');
const r = JSON.parse(fs.readFileSync('./data/resources.json','utf8'));
const t = JSON.parse(fs.readFileSync('./data/taxonomy.json','utf8'));
const g = JSON.parse(fs.readFileSync('./data/tags.json','utf8'));
console.log('Resources:', r.resources.length, 'Meta:', r.meta.total_resources);
const vc = t.categories.map(c=>c.id);
const vt = new Set(g.groups.flatMap(g=>g.tags.map(t=>t.id)));
const e = [];
r.resources.forEach(x=>{
  if (!vc.includes(x.category)) e.push(x.id+': invalid category "'+x.category+'"');
  (x.tags||[]).forEach(t=>{if(!vt.has(t)) e.push(x.id+': unknown tag "'+t+'"')});
  if (!fs.existsSync('./categories/'+x.category+'/'+x.slug+'.md')) e.push(x.id+': missing markdown');
  if (x.subcategory) {
    const cat = t.categories.find(c=>c.id===x.category);
    if (cat && !cat.subcategories.find(s=>s.id===x.subcategory)) e.push(x.id+': invalid subcategory "'+x.subcategory+'"');
  }
});
if (e.length) { console.error('Errors:'); e.forEach(x=>console.error('  '+x)); process.exit(1); }
else console.log('All '+r.resources.length+' resources passed validation');
