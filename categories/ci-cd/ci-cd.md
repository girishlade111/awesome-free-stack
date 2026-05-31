# Free CI/CD & DevOps Tools

Curated collection of continuous integration, delivery, build automation, testing, artifact hosting, code quality, and deployment tools — all with meaningful free tiers.

## Quick Comparison

### Pipelines

| Platform | Free Tier | Self-Host? | Card? |
|---|---|---|---|
| **GitHub Actions** | 2,000 min/mo, unlimited public | No | No |
| **GitLab CI/CD** | 400 min/mo (SaaS), unlimited (self) | Yes | No |
| **CircleCI** | 6K credits/mo, 30 parallel | No | No |
| **Harness CI** | 100K CI min/mo, 2 users | No | No |
| **Travis CI** | Free for public repos | No | No |
| **Jenkins** | Unlimited (self-hosted) | Yes | No |
| **Drone CI** | Unlimited (self-hosted OSS) | Yes | No |
| **Azure Pipelines** | 1,800 min/mo, 1 job, public free | No | No |

### Build Automation

| Tool | Type | Free Tier | Card? |
|---|---|---|---|
| **Bazel** | Multi-language build | Free OSS | No |
| **Nx** | Monorepo build | Free OSS + 500GB cache | No |
| **CMake** | C/C++ build generator | Free OSS | No |
| **Ninja** | Fast build backend | Free OSS | No |
| **GNU Make** | Classic build tool | Free OSS | No |
| **TurboRepo** | Monorepo (Vercel) | Free OSS + 100GB cache | No |

### Testing Automation

| Tool | Type | Free Tier | Card? |
|---|---|---|---|
| **Testcontainers** | Integration test containers | Free OSS | No |
| **JUnit** | Java test framework | Free OSS | No |
| **Cucumber** | BDD framework | Free OSS | No |
| **WireMock** | HTTP mock server | Free OSS | No |
| **Tox** | Python test env manager | Free OSS | No |
| **Katalon Studio** | Test automation | 5 users, 1K runs/mo | No |

### Artifact Hosting

| Platform | Type | Free Tier | Card? |
|---|---|---|---|
| **Docker Hub** | Container registry | 1 private repo, public unlimited | No |
| **GitHub Container Registry** | Container registry | Free for public, 500MB private | No |
| **Sonatype Nexus** | Universal repo | Free OSS (self-hosted) | No |
| **Harbor** | Container registry | Free OSS (self-hosted) | No |
| **MinIO** | S3-compatible storage | Free OSS | No |
| **Cloudsmith** | Package manager | 1GB storage, 5 users | No |

### Code Quality

| Tool | Type | Free Tier | Card? |
|---|---|---|---|
| **SonarQube** | Static analysis | Free OSS (self-hosted) | No |
| **SonarCloud** | Cloud code quality | Free for public repos | No |
| **Codecov** | Coverage reporting | Free for public repos | No |
| **ESLint** | JS/TS linter | Free OSS | No |
| **Prettier** | Code formatter | Free OSS | No |
| **Semgrep** | SAST | Free OSS + 25 contributors | No |

### Deployment Automation

| Tool | Type | Free Tier | Card? |
|---|---|---|---|
| **Ansible** | Config management | Free OSS | No |
| **Terraform** | IaC | Free OSS + Cloud (5 users) | No |
| **Pulumi** | IaC (general-purpose) | Free OSS + state management | No |
| **ArgoCD** | GitOps for K8s | Free OSS | No |
| **Helm** | K8s package manager | Free OSS | No |
| **AWS SAM** | Serverless IaC | Free OSS | No |

## Selection Guide

- **Best all-in-one CI/CD**: GitHub Actions — native GitHub integration, massive marketplace, 2,000 free min/mo
- **Best self-hosted CI**: Jenkins or Drone CI — unlimited builds, full control
- **Best cloud CI for speed**: CircleCI — caching, parallelism, Docker optimization
- **Best hybrid CI**: Buildkite — your infrastructure, their UI
- **Best free minutes**: Harness CI — 100K min/mo for 2 users
- **Best monorepo builds**: Nx or TurboRepo — incremental builds, remote caching
- **Best container registry**: Docker Hub or GitHub Container Registry — free for public images
- **Best universal artifact repo**: Sonatype Nexus or MinIO — free OSS self-hosted
- **Best code quality**: SonarCloud — free for public repos, all languages
- **Best IaC**: Terraform or Pulumi — free OSS with generous cloud tiers
- **Best GitOps**: ArgoCD or Flux — CNCF graduated projects
- **Best mobile CI**: Codemagic — purpose-built for Flutter/mobile
- **Best CI testing**: Testcontainers — Docker-based integration testing
- **Best for students**: GitHub Actions (Student Pack), Azure Pipelines (Azure for Students)
