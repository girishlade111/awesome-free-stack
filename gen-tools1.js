const w = { beginner_friendly: 1.0, docs: 1.0, free_generosity: 1.5, setup: 0.8, reliability: 1.2, performance: 0.8, community: 0.5 };
function ov(r) {
  return Math.round(Object.keys(w).reduce((a,k) => a + r[k]*w[k], 0) / 6.8 * 10) / 10;
}
function mk(r) {
  r.ratings.overall = ov(r.ratings);
  r.tags = [...new Set(r.tags)];
  return r;
}
const now = '2026-05-31';
const cat = 'ci-cd';

function star(n) { return '⭐'.repeat(n); }

const nameMap = {
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
  'aws-sam':'AWS SAM','aws-cdk':'AWS CDK','terragrunt':'Terragrunt','atlantis':'Atlantis',
  'github-actions':'GitHub Actions','circleci':'CircleCI','gitlab-ci':'GitLab CI/CD','buildkite':'Buildkite',
  'jenkins':'Jenkins'
};

function nm(s) { return nameMap[s] || s; }

function genMD(r) {
  const lines = [
    '## ' + r.name, '',
    '**Website**: ' + r.website,
    r.docs ? '**Docs**: ' + r.docs : '',
    r.github ? '**GitHub**: ' + r.github : '',
    '**Category**: ' + r.category,
    '**Subcategory**: ' + r.subcategory, '',
    '### Description', r.description, '',
    '### Free Tier', r.free_tier.summary, '',
  ];
  if (r.paid_plan) {
    lines.push('### Paid Plan', r.paid_plan.summary, '');
  }
  lines.push(
    '### Ratings',
    '| Dimension | Rating |',
    '|---|---|',
    '| Beginner Friendly | ' + star(r.ratings.beginner_friendly) + ' |',
    '| Documentation | ' + star(r.ratings.docs) + ' |',
    '| Free Generosity | ' + star(r.ratings.free_generosity) + ' |',
    '| Setup Ease | ' + star(r.ratings.setup) + ' |',
    '| Reliability | ' + star(r.ratings.reliability) + ' |',
    '| Performance | ' + star(r.ratings.performance) + ' |',
    '| Community | ' + star(r.ratings.community) + ' |',
    '| **Overall** | **' + r.ratings.overall + '** |', '',
    '### Verification',
    '- **Status**: ' + (r.verification.status === 'tested' ? 'Tested' : r.verification.status),
    '- **Verified by**: ' + r.verification.verified_by,
    '- **Date**: ' + r.verification.date, '',
    '### Status', r.status, '',
    '### Region Restrictions',
    '- **Global**: ' + (r.region_restrictions.global ? 'Yes' : 'No'),
    r.region_restrictions.restricted_countries && r.region_restrictions.restricted_countries.length ? '- **Restricted**: ' + r.region_restrictions.restricted_countries.join(', ') : '',
    '- **Notes**: ' + r.region_restrictions.notes, '',
  );
  if (r.student_benefits && r.student_benefits.available) {
    lines.push(
      '### Student Benefits',
      '- **Available**: Yes 🎓',
      '- **Details**: ' + r.student_benefits.details,
      '- **Verification**: ' + (r.student_benefits.verification_method || ''), '',
    );
  }
  lines.push(
    '### Requires Card',
    '**' + (r.requires_card ? 'Yes' : 'No') + '**' + (r.requires_card ? '' : ' — No credit card required.'), '',
    '### Tags',
    r.tags.map(t => '`' + t + '`').join(' '), '',
  );
  if (r.alternatives && r.alternatives.length) {
    lines.push('### Alternatives');
    lines.push(r.alternatives.map(a => '[' + nm(a) + '](' + a + '.md)').join(', '));
    lines.push('');
  }
  return lines.filter(l => l !== '' || lines.indexOf(l) < lines.length-1).join('\n');
}
