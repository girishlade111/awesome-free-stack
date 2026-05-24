const fs = require('fs');

// ===== SCHEMA COMPLIANCE =====
const raw = JSON.parse(fs.readFileSync('data/resources.json','utf8'));
const resources = raw.resources;
const taxonomy = JSON.parse(fs.readFileSync('data/taxonomy.json','utf8'));
const validCategories = new Set(taxonomy.categories.map(c => c.id));

console.log('=== SCHEMA COMPLIANCE AUDIT ===\n');

let issues = [];

resources.forEach(r => {
  const id = r.id;
  const required = ['id','slug','name','website','description','category','tags','free_tier','ratings','verification','status','requires_card','region_restrictions','last_verified'];
  required.forEach(field => {
    if (r[field] === undefined || r[field] === null) {
      issues.push(id + ': MISSING required field "' + field + '"');
    }
  });

  if (!validCategories.has(r.category)) {
    issues.push(id + ': INVALID category "' + r.category + '"');
  }

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(r.id)) {
    issues.push(id + ': id NOT kebab-case ("' + r.id + '")');
  }
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(r.slug)) {
    issues.push(id + ': slug NOT kebab-case ("' + r.slug + '")');
  }

  if (r.website && !r.website.startsWith('http')) {
    issues.push(id + ': website is not a valid URL');
  }

  const ratingFields = ['beginner_friendly','docs','free_generosity','setup','reliability','performance','community'];
  ratingFields.forEach(f => {
    const v = r.ratings && r.ratings[f];
    if (v !== undefined) {
      if (!Number.isInteger(v) || v < 1 || v > 5) {
        issues.push(id + ': ratings.' + f + ' = ' + v + ' (must be integer 1-5)');
      }
    }
  });

  if (r.verification && !['tested','community-verified','unverified'].includes(r.verification.status)) {
    issues.push(id + ': verification.status invalid');
  }
  if (!['active','deprecated','limited'].includes(r.status)) {
    issues.push(id + ': status invalid');
  }
  if (typeof r.requires_card !== 'boolean') {
    issues.push(id + ': requires_card not boolean');
  }
  if (r.region_restrictions && typeof r.region_restrictions.global !== 'boolean') {
    issues.push(id + ': region_restrictions.global not boolean');
  }
  if (r.last_verified && !/^\d{4}-\d{2}(-\d{2})?$/.test(r.last_verified)) {
    issues.push(id + ': last_verified not ISO 8601 ("' + r.last_verified + '")');
  }
  if (r.student_benefits && typeof r.student_benefits.available !== 'boolean') {
    issues.push(id + ': student_benefits.available not boolean');
  }
});

if (raw.meta && raw.meta.total_resources !== resources.length) {
  issues.push('META: total_resources (' + raw.meta.total_resources + ') != actual (' + resources.length + ')');
}

console.log('Schema issues: ' + issues.length);
if (issues.length === 0) {
  console.log('All resources pass schema compliance');
} else {
  issues.forEach(i => console.log('  [ISSUE] ' + i));
}

// === RESOURCE QUALITY AUDIT ===
console.log('\n=== RESOURCE QUALITY AUDIT ===\n');

resources.forEach(r => {
  const q = [];
  
  if (r.description && r.description.length > 200) {
    q.push('Description exceeds 200 chars (' + r.description.length + ')');
  }

  if (r.free_tier && r.free_tier.summary) {
    const s = r.free_tier.summary;
    const hasNumbers = /\d+/.test(s);
    if (!hasNumbers) {
      q.push('Free tier summary has no numeric limits');
    }
  } else {
    q.push('Missing free_tier.summary');
  }

  if (r.ratings) {
    if (r.ratings.overall !== undefined) {
      const expectedOverall = Math.round(
        ( (r.ratings.beginner_friendly || 0) * 1.0 +
          (r.ratings.docs || 0) * 1.0 +
          (r.ratings.free_generosity || 0) * 1.5 +
          (r.ratings.setup || 0) * 0.8 +
          (r.ratings.reliability || 0) * 1.2 +
          (r.ratings.performance || 0) * 0.8 +
          (r.ratings.community || 0) * 0.5 ) / 6.8 * 10
      ) / 10;
      if (r.ratings.overall !== expectedOverall) {
        q.push('Overall rating ' + r.ratings.overall + ' but computed ' + expectedOverall + ' from scores/weights');
      }
    }
  }

  if (r.tags && r.tags.length === 0) {
    q.push('No tags');
  }

  if (q.length > 0) {
    console.log(r.id + ':');
    q.forEach(i => console.log('  [QUALITY] ' + i));
  }
});

// === MISSING SUB-CATEGORIES ANALYSIS ===
console.log('\n=== MISSING SUBCATEGORIES ANALYSIS ===\n');

taxonomy.categories.forEach(cat => {
  const existingResources = resources.filter(r => r.category === cat.id);
  const subcatsWith = new Set(existingResources.map(r => r.subcategory).filter(Boolean));
  const allSubcatIds = new Set(cat.subcategories.map(s => s.id));
  
  const covered = [...subcatsWith].filter(s => allSubcatIds.has(s));
  const missingSubcats = cat.subcategories.filter(s => !subcatsWith.has(s.id));
  
  const existingCount = existingResources.length;
  console.log(cat.name + ' (' + cat.id + '): ' + existingCount + ' resources, ' + covered.length + '/' + cat.subcategories.length + ' subcategories covered');
  
  if (missingSubcats.length > 0 && missingSubcats.length <= 5) {
    missingSubcats.forEach(s => console.log('  - MISSING: ' + s.name + ' (' + s.id + ')'));
  } else if (missingSubcats.length > 5) {
    console.log('  - ' + missingSubcats.length + ' subcategories have no resources (all except ' + covered.join(', ') + ')');
  }
});

// === RATING QUALITY ===
console.log('\n=== RATING QUALITY ===\n');

resources.forEach(r => {
  if (r.ratings) {
    const scores = [
      r.ratings.beginner_friendly,
      r.ratings.docs,
      r.ratings.free_generosity,
      r.ratings.setup,
      r.ratings.reliability,
      r.ratings.performance,
      r.ratings.community
    ];
    const allSame = scores.every(s => s === scores[0]);
    if (allSame) {
      console.log(r.id + ': ALL ratings are identical (' + scores[0] + ') — may be default values');
    }
    const allMax = scores.every(s => s === 5);
    if (allMax) {
      console.log(r.id + ': ALL ratings are maximum (5) — may be inflated');
    }
  }
});

// === FREE TIER COMPLETENESS ===
console.log('\n=== FREE TIER SUMMARY ANALYSIS ===\n');

resources.forEach(r => {
  const ft = r.free_tier || {};
  const limits = ft.limits || {};
  const hasQuantified = limits.requests_per_month || limits.tokens_per_minute || limits.storage_gb || limits.seats;
  if (!hasQuantified) {
    console.log(r.id + ': free_tier.limits has NO quantified limits (all null) — summary only: "' + (ft.summary || 'NONE') + '"');
  }
});
