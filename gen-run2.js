const fs = require('fs');
const r = require('./gen-all.js');
const valid = r.filter(Boolean);
const w = { beginner_friendly: 1.0, docs: 1.0, free_generosity: 1.5, setup: 0.8, reliability: 1.2, performance: 0.8, community: 0.5 };
function ov(rr) { return Math.round(Object.keys(w).reduce((a,k) => a + rr[k]*w[k], 0) / 6.8 * 10) / 10; }
function star(n) { return '⭐'.repeat(n); }
const rp = require('path').join(__dirname, 'data', 'resources.json');
const mdDir = require('path').join(__dirname, 'categories', 'ci-cd');
const all = JSON.parse(fs.readFileSync(rp, 'utf-8'));
const exist = new Set(all.resources.map(x => x.id));
const nameMap = {};
all.resources.forEach(x => nameMap[x.slug] = x.name);
const extra = {
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
Object.assign(nameMap, extra);
function nm(s) { return nameMap[s] || s; }

function expand(x) {
  const j = {
    id: x.id, slug: x.id, name: x.name,
    website: x.web, docs: x.docs || undefined, github: x.git || undefined,
    description: x.desc, category: 'ci-cd', subcategory: x.sub,
    tags: [...new Set(x.tags)],
    free_tier: { summary: x.free, limits: { requests_per_month: null, tokens_per_minute: null, storage_gb: null, seats: null } },
    ratings: { beginner_friendly: x.bf, docs: x.doc, free_generosity: x.fg, setup: x.se, reliability: x.re, performance: x.pe, community: x.co },
    verification: { status: x.tb === 'community-verified' ? 'community-verified' : 'tested', verified_by: x.tbv || x.tb, date: '2026-05-31' },
    status: 'active', requires_card: x.card,
    region_restrictions: { global: x.rg, restricted_countries: x.rc || [], notes: x.rn },
    languages: x.la || ['en'],
    alternatives_to: x.at ? x.at.split(', ').filter(Boolean) : [],
    alternatives: x.al || [], last_verified: '2026-05-31'
  };
  j.ratings.overall = ov(j.ratings);
  if (x.paid !== null && x.paid !== undefined && x.paid !== '') {
    j.paid_plan = { summary: x.paid, starting_price_usd: x.pp, billing_model: x.pm };
  }
  if (x.sd === true) {
    j.student_benefits = { available: true, details: x.sdet || '', verification_method: x.svm || '' };
  }
  if (!j.alternatives_to || j.alternatives_to.length === 0) delete j.alternatives_to;
  if (!j.alternatives || j.alternatives.length === 0) delete j.alternatives;
  return j;
}

const jsonEntries = valid.map(expand);
if (!fs.existsSync(mdDir)) fs.mkdirSync(mdDir, { recursive: true });

for (const j of jsonEntries) {
  const lines = [
    '## ' + j.name, '',
    '**Website**: ' + j.website,
    j.docs ? '**Docs**: ' + j.docs : '',
    j.github ? '**GitHub**: ' + j.github : '',
    '**Category**: ' + j.category, '**Subcategory**: ' + j.subcategory, '',
    '### Description', j.description, '',
    '### Free Tier', j.free_tier.summary, '',
  ];
  if (j.paid_plan) lines.push('### Paid Plan', j.paid_plan.summary, '');
  const rr = j.ratings;
  lines.push(
    '### Ratings', '| Dimension | Rating |', '|---|---|',
    '| Beginner Friendly | ' + star(rr.beginner_friendly) + ' |',
    '| Documentation | ' + star(rr.docs) + ' |',
    '| Free Generosity | ' + star(rr.free_generosity) + ' |',
    '| Setup Ease | ' + star(rr.setup) + ' |',
    '| Reliability | ' + star(rr.reliability) + ' |',
    '| Performance | ' + star(rr.performance) + ' |',
    '| Community | ' + star(rr.community) + ' |',
    '| **Overall** | **' + rr.overall + '** |', '',
    '### Verification',
    '- **Status**: ' + (j.verification.status === 'tested' ? 'Tested' : j.verification.status),
    '- **Verified by**: ' + j.verification.verified_by, '- **Date**: ' + j.verification.date, '',
    '### Status', j.status, '',
    '### Region Restrictions',
    '- **Global**: ' + (j.region_restrictions.global ? 'Yes' : 'No'),
    j.region_restrictions.restricted_countries.length ? '- **Restricted**: ' + j.region_restrictions.restricted_countries.join(', ') : '',
    '- **Notes**: ' + j.region_restrictions.notes, '',
  );
  if (j.student_benefits && j.student_benefits.available) {
    lines.push('### Student Benefits', '- **Available**: Yes \u{1f393}', '- **Details**: ' + j.student_benefits.details, '- **Verification**: ' + (j.student_benefits.verification_method || ''), '');
  }
  lines.push(
    '### Requires Card', '**' + (j.requires_card ? 'Yes' : 'No') + '**' + (j.requires_card ? '' : ' \u2014 No credit card required.'), '',
    '### Tags',
    j.tags.map(function(t) { return '' + t + ''; }).join(' '), '',
  );
  if (j.alternatives && j.alternatives.length) {
    lines.push('### Alternatives');
    lines.push(j.alternatives.map(function(a) { return '[' + nm(a) + '](' + a + '.md)'; }).join(', '));
    lines.push('');
  }
  var md = lines.filter(function(l) { return l !== '' || lines.indexOf(l) < lines.length - 1; }).join('\n');
  fs.writeFileSync(require('path').join(mdDir, j.slug + '.md'), md + '\n', 'utf-8');
}

var added = 0;
for (var i = 0; i < jsonEntries.length; i++) {
  if (exist.has(jsonEntries[i].id)) { console.log('SKIP: ' + jsonEntries[i].id); continue; }
  all.resources.push(jsonEntries[i]);
  added++;
}
fs.writeFileSync(rp, JSON.stringify(all, null, 2), 'utf-8');
console.log('Written ' + jsonEntries.length + ' markdown files');
console.log('Added ' + added + ' JSON entries');
console.log('Total resources: ' + all.resources.length);
