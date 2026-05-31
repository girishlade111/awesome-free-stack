const fs = require('fs');
const path = require('path');
const rp = path.join(__dirname, '..', 'data', 'resources.json');
const mdDir = path.join(__dirname, '..', 'categories', 'ci-cd');

const all = JSON.parse(fs.readFileSync(rp, 'utf-8'));
const exist = new Set(all.resources.map(r => r.id));
const nameMap = {};
all.resources.forEach(r => nameMap[r.slug] = r.name);
const nameMapExtra = {
  'travis-ci':'Travis CI','azure-pipelines':'Azure Pipelines','bitbucket-pipelines':'Bitbucket Pipelines',
  'teamcity':'TeamCity','drone-ci':'Drone CI','woodpecker-ci':'Woodpecker CI','codefresh':'Codefresh',
  'semaphore-ci':'Semaphore CI','appveyor':'AppVeyor','cirrus-ci':'Cirrus CI','codemagic':'Codemagic',
  'gocd':'GoCD','concourse-ci':'Concourse CI','harness-ci':'Harness CI','gitea-actions':'Gitea Actions',
  'bazel':'Bazel','cmake':'CMake','gnu-make':'GNU Make','apache-ant':'Apache Ant','sbt':'SBT',
  'msbuild':'MSBuild','nx':'Nx','turborepo':'TurboRepo','lerna':'Lerna','rush':'Rush',
  'pants-build':'Pants Build','buck2':'Buck2','meson-build':'Meson','ninja-build':'Ninja','just':'Just',
  'tox':'Tox','nox':'Nox','testcontainers':'Testcontainers','act':'Act','katalon':'Katalon Studio',
  'testcafe':'TestCafe','selenoid':'Selenoid','zalenium':'Zalenium','junit':'JUnit','cucumber':'Cucumber',
  'robot-framework':'Robot Framework','mockito':'Mockito','sinon':'Sinon.js','wiremock':'WireMock',
  'appium':'Appium','sonatype-nexus':'Sonatype Nexus Repository','jfrog-artifactory':'JFrog Artifactory',
  'docker-hub':'Docker Hub','ghcr':'GitHub Container Registry','harbor':'Harbor','quay-io':'Quay.io',
  'cloudsmith':'Cloudsmith','packagecloud':'PackageCloud','gemfury':'Gemfury','proget':'ProGet',
  'jitpack':'JitPack','chartmuseum':'ChartMuseum','minio':'MinIO','cloudrepo':'CloudRepo','myget':'MyGet',
  'sonarqube':'SonarQube','sonarcloud':'SonarCloud','codacy':'Codacy','codeclimate':'Code Climate',
  'codecov':'Codecov','coveralls':'Coveralls','eslint':'ESLint','prettier':'Prettier','semgrep':'Semgrep',
  'codeql':'CodeQL','trivy':'Trivy','snyk':'Snyk','deepsource':'DeepSource','reviewdog':'Reviewdog',
  'ruff-linter':'Ruff','ansible':'Ansible','terraform':'Terraform','pulumi':'Pulumi','argocd':'ArgoCD',
  'flux-cd':'Flux','spinnaker':'Spinnaker','octopus-deploy':'Octopus Deploy','helm':'Helm',
  'crossplane':'Crossplane','nomad':'Nomad','serverless-framework':'Serverless Framework',
  'aws-sam':'AWS SAM','aws-cdk':'AWS CDK','terragrunt':'Terragrunt','atlantis':'Atlantis'
};
Object.assign(nameMap, nameMapExtra);
function nm(s) { return nameMap[s] || s; }

function compute(rr) {
  const w = { beginner_friendly: 1.0, docs: 1.0, free_generosity: 1.5, setup: 0.8, reliability: 1.2, performance: 0.8, community: 0.5 };
  return Math.round(Object.keys(w).reduce((a,k) => a + rr[k]*w[k], 0) / 6.8 * 10) / 10;
}

function star(n) { return '⭐'.repeat(n); }

function expand(r) {
  const json = {
    id: r.id, slug: r.id, name: r.name,
    website: r.web,
    docs: r.docs || undefined,
    github: r.git || undefined,
    description: r.desc,
    category: 'ci-cd',
    subcategory: r.sub,
    tags: [...new Set(r.tags)],
    free_tier: { summary: r.free, limits: { requests_per_month: null, tokens_per_minute: null, storage_gb: null, seats: null } },
    ratings: { beginner_friendly: r.bf, docs: r.doc, free_generosity: r.fg, setup: r.se, reliability: r.re, performance: r.pe, community: r.co },
    verification: { status: r.tb === 'community-verified' ? 'community-verified' : 'tested', verified_by: r.tbv || r.tb, date: '2026-05-31' },
    status: 'active',
    requires_card: r.card,
    region_restrictions: { global: r.rg, restricted_countries: r.rc || [], notes: r.rn },
    languages: r.la || ['en'],
    alternatives_to: r.at ? r.at.split(', ').filter(Boolean) : [],
    alternatives: r.al || [],
    last_verified: '2026-05-31'
  };
  json.ratings.overall = compute(json.ratings);
  if (r.paid !== null && r.paid !== undefined) {
    json.paid_plan = { summary: r.paid, starting_price_usd: r.pp, billing_model: r.pm };
  }
  if (r.sd === true) {
    json.student_benefits = { available: true, details: r.sdet || '', verification_method: r.svm || '' };
  }
  // Clean up empty arrays
  if (json.alternatives_to.length === 0) delete json.alternatives_to;
  if (json.alternatives.length === 0) delete json.alternatives;
  return json;
}

const newEntries = raw.map(expand);

// Generate markdown files
if (!fs.existsSync(mdDir)) fs.mkdirSync(mdDir, { recursive: true });
const mdTemplate = (j) => {
  const lines = [
    '## ' + j.name, '',
    '**Website**: ' + j.website,
    j.docs ? '**Docs**: ' + j.docs : '',
    j.github ? '**GitHub**: ' + j.github : '',
    '**Category**: ' + j.category,
    '**Subcategory**: ' + j.subcategory, '',
    '### Description', j.description, '',
    '### Free Tier', j.free_tier.summary, '',
  ];
  if (j.paid_plan) {
    lines.push('### Paid Plan', j.paid_plan.summary, '');
  }
  const r = j.ratings;
  lines.push(
    '### Ratings',
    '| Dimension | Rating |',
    '|---|---|',
    '| Beginner Friendly | ' + star(r.beginner_friendly) + ' |',
    '| Documentation | ' + star(r.docs) + ' |',
    '| Free Generosity | ' + star(r.free_generosity) + ' |',
    '| Setup Ease | ' + star(r.setup) + ' |',
    '| Reliability | ' + star(r.reliability) + ' |',
    '| Performance | ' + star(r.performance) + ' |',
    '| Community | ' + star(r.community) + ' |',
    '| **Overall** | **' + r.overall + '** |', '',
    '### Verification',
    '- **Status**: ' + (j.verification.status === 'tested' ? 'Tested' : j.verification.status),
    '- **Verified by**: ' + j.verification.verified_by,
    '- **Date**: ' + j.verification.date, '',
    '### Status', j.status, '',
    '### Region Restrictions',
    '- **Global**: ' + (j.region_restrictions.global ? 'Yes' : 'No'),
    j.region_restrictions.restricted_countries.length ? '- **Restricted**: ' + j.region_restrictions.restricted_countries.join(', ') : '',
    '- **Notes**: ' + j.region_restrictions.notes, '',
  );
  if (j.student_benefits && j.student_benefits.available) {
    lines.push(
      '### Student Benefits',
      '- **Available**: Yes 🎓',
      '- **Details**: ' + j.student_benefits.details,
      '- **Verification**: ' + (j.student_benefits.verification_method || ''), '',
    );
  }
  lines.push(
    '### Requires Card',
    '**' + (j.requires_card ? 'Yes' : 'No') + '**' + (j.requires_card ? '' : ' — No credit card required.'), '',
    '### Tags',
    j.tags.map(t => '`' + t + '`').join(' '), '',
  );
  if (j.alternatives && j.alternatives.length) {
    lines.push('### Alternatives');
    lines.push(j.alternatives.map(a => '[' + nm(a) + '](' + a + '.md)').join(', '));
    lines.push('');
  }
  return lines.filter(l => l !== '' || lines.indexOf(l) < lines.length - 1).join('\n');
};

// Write markdown files
for (const j of newEntries) {
  const fp = path.join(mdDir, j.slug + '.md');
  fs.writeFileSync(fp, mdTemplate(j) + '\n', 'utf-8');
  console.log('Wrote ' + fp);
}

// Update resources.json
let added = 0;
for (const j of newEntries) {
  if (exist.has(j.id)) {
    console.log('SKIP (exists): ' + j.id);
    continue;
  }
  all.resources.push(j);
  added++;
}
fs.writeFileSync(rp, JSON.stringify(all, null, 2), 'utf-8');
console.log('Added ' + added + ' new entries to resources.json');
console.log('Total: ' + all.resources.length);
