# How to Use: Cloud Architect

## Quick Prompts

### Infrastructure Design
- "Design cloud infrastructure for a SaaS application expecting 1M users with global distribution"
- "Create scalable infrastructure for e-commerce platform with Black Friday traffic spikes"
- "Design multi-region architecture for financial services with 99.99% uptime"
- "Build cloud infrastructure for ML training and inference at scale"

### Cloudflare & Edge Computing
- "Create Terraform modules for our microservices infrastructure on Cloudflare"
- "Build globally distributed platform with <50ms latency worldwide using Cloudflare's edge network"
- "Implement edge computing for real-time data processing at 200+ locations"
- "Design Cloudflare Workers architecture for serverless API"
- "Set up Cloudflare R2 storage with automatic failover to S3"

### Multi-Cloud Strategy
- "Migrate from AWS to a multi-cloud strategy with Cloudflare as primary and AWS as backup"
- "Design multi-cloud architecture with vendor lock-in prevention"
- "Implement cloud-agnostic infrastructure using Terraform"
- "Create hybrid cloud solution connecting on-premise with cloud"

### Cost Optimization
- "Reduce our cloud infrastructure costs by 40% while maintaining performance"
- "Optimize cloud spending while improving performance"
- "Implement FinOps practices for cloud cost management"
- "Design auto-scaling to minimize costs during low traffic"

### Migration & Modernization
- "Migrate from on-premise to cloud with zero downtime"
- "Containerize legacy applications for Kubernetes deployment"
- "Migrate monolith to microservices on cloud infrastructure"
- "Plan data center exit strategy to full cloud"

### Disaster Recovery
- "Implement disaster recovery with RTO < 1 hour and RPO < 15 minutes"
- "Design backup strategy across multiple regions"
- "Create business continuity plan for critical systems"
- "Implement automated failover for high availability"

### Security & Compliance
- "Ensure cloud infrastructure meets SOC 2 and GDPR compliance requirements"
- "Design zero-trust network architecture in cloud"
- "Implement cloud security posture management (CSPM)"
- "Create compliant infrastructure for healthcare (HIPAA)"

### Serverless Architecture
- "Design completely serverless architecture using Cloudflare Workers and edge services"
- "Build event-driven serverless application on AWS Lambda"
- "Implement FaaS architecture for variable workloads"
- "Create serverless data processing pipeline"

### Container Orchestration
- "Design Kubernetes cluster for production workloads"
- "Implement service mesh with Istio for microservices"
- "Create container registry and CI/CD for Docker images"
- "Design auto-scaling container infrastructure"

### Monitoring & Observability
- "Implement comprehensive monitoring for cloud infrastructure"
- "Design centralized logging architecture"
- "Create real-time alerting for infrastructure issues"
- "Build custom dashboards for infrastructure metrics"

## Overview
The Cloud Architect agent specializes in designing scalable, secure, and cost-efficient cloud infrastructure. Expert in Terraform IaC, multi-cloud strategies, and edge computing with particular focus on Cloudflare architecture.

## Basic Usage Examples

### Example 1: Infrastructure Design
**User Prompt:**
```
"Design cloud infrastructure for a SaaS application expecting 1M users with global distribution"
```

**Cloud Architect Response:**
- Multi-region architecture design
- CDN and edge computing strategy
- Auto-scaling configuration
- Disaster recovery planning
- Cost optimization recommendations

### Example 2: Terraform Implementation
**User Prompt:**
```
"Create Terraform modules for our microservices infrastructure on Cloudflare"
```

**Cloud Architect Actions:**
- Modular Terraform structure
- Cloudflare Workers configuration
- KV and Durable Objects setup
- R2 storage implementation
- Zero-downtime deployment strategy

## Multi-Agent Collaborative Scenarios

### Scenario 1: Global Edge Platform
**User Prompt:**
```
"Build a globally distributed platform with <50ms latency worldwide using Cloudflare's edge network"
```

**Cloud Architect Orchestration:**
```
cloud-architect leads:
├── Architecture Design
│   ├── cloud-architect: Edge architecture
│   │   ├── Workers placement strategy
│   │   ├── Data replication design
│   │   └── Cache hierarchies
│   ├── backend-architect: Service design
│   └── database-optimizer: Edge database strategy
├── Infrastructure Implementation
│   ├── cloud-architect: Terraform modules
│   │   ├── Workers deployment
│   │   ├── KV namespaces
│   │   ├── Durable Objects
│   │   └── R2 buckets
│   ├── deployment-engineer: CI/CD pipeline
│   └── security-auditor: Security controls
├── Performance Optimization
│   ├── cloud-architect: Edge caching
│   ├── performance-engineer: Latency analysis
│   └── frontend-developer: Asset optimization
└── Monitoring & Operations
    ├── cloud-architect: Observability setup
    ├── devops-incident-responder: Alerting
    └── performance-engineer: SLA monitoring
```

### Scenario 2: Multi-Cloud Migration
**User Prompt:**
```
"Migrate from AWS to a multi-cloud strategy with Cloudflare as primary and AWS as backup"
```

**Migration Coordination:**
```
cloud-architect coordinates with:
├── Assessment Phase
│   ├── cloud-architect: Current state analysis
│   ├── backend-architect: Service dependencies
│   └── database-optimizer: Data migration plan
├── Architecture Redesign
│   ├── cloud-architect: Multi-cloud design
│   │   ├── Cloudflare primary
│   │   ├── AWS failover
│   │   └── Traffic routing
│   ├── security-auditor: Security architecture
│   └── deployment-engineer: Deployment strategy
├── Migration Execution
│   ├── cloud-architect: Infrastructure provisioning
│   ├── data-engineer: Data migration
│   ├── backend-architect: Service migration
│   └── test-automator: Migration testing
└── Cutover & Validation
    ├── cloud-architect: Traffic switching
    ├── performance-engineer: Performance validation
    └── qa-expert: Functionality verification
```

### Scenario 3: Cost Optimization Initiative
**User Prompt:**
```
"Reduce our cloud infrastructure costs by 40% while maintaining performance"
```

**Cost Optimization Project:**
```
cloud-architect drives:
├── Cost Analysis
│   ├── cloud-architect: Resource audit
│   ├── data-engineer: Usage analytics
│   └── product-manager: Feature utilization
├── Optimization Strategy
│   ├── cloud-architect: Right-sizing
│   │   ├── Worker optimization
│   │   ├── Storage tiering
│   │   └── Bandwidth optimization
│   ├── backend-architect: Service consolidation
│   └── database-optimizer: Query optimization
├── Implementation
│   ├── cloud-architect: Infrastructure changes
│   ├── deployment-engineer: Gradual rollout
│   └── performance-engineer: Performance monitoring
└── Validation
    ├── cloud-architect: Cost tracking
    ├── qa-expert: Service validation
    └── product-manager: User impact assessment
```

## Advanced Cloud Architecture Patterns

### Pattern 1: Serverless First Architecture
**User Prompt:**
```
"Design completely serverless architecture using Cloudflare Workers and edge services"
```

**Serverless Implementation:**
```yaml
architecture_components:
  compute:
    - cloud-architect: Workers configuration
    - technology: Cloudflare Workers
    - patterns: Request handling, API routing
  
  storage:
    - KV: Key-value storage
    - Durable Objects: Stateful coordination
    - R2: Object storage
    - D1: SQL database
  
  networking:
    - cloud-architect: Edge routing
    - Load balancing: Automatic
    - SSL/TLS: Universal SSL
  
  integration:
    - backend-architect: Service mesh
    - deployment-engineer: Wrangler setup
```

### Pattern 2: Disaster Recovery Architecture
**User Prompt:**
```
"Implement disaster recovery with RTO < 1 hour and RPO < 15 minutes"
```

**DR Strategy:**
```yaml
disaster_recovery:
  backup_strategy:
    - cloud-architect: Multi-region backup
    - database-optimizer: Database replication
    - data-engineer: Data pipeline redundancy
  
  failover_mechanism:
    - Automated health checks
    - DNS failover with Cloudflare
    - Traffic routing policies
  
  recovery_procedures:
    - cloud-architect: Runbook creation
    - devops-incident-responder: Incident response
    - test-automator: DR testing
```

## Integration Examples

### With CI/CD Pipeline
**User Prompt:**
```
"Integrate infrastructure provisioning with our GitHub Actions CI/CD pipeline"
```

**Pipeline Integration:**
```
cloud-architect + deployment-engineer:
├── Infrastructure as Code
│   ├── Terraform modules
│   ├── Environment separation
│   └── State management
├── Deployment Automation
│   ├── GitHub Actions workflows
│   ├── Terraform Cloud integration
│   └── Approval gates
├── Rollback Strategy
│   ├── Blue-green deployments
│   ├── Canary releases
│   └── Instant rollback
└── Monitoring
    ├── Deployment tracking
    └── Performance validation
```

### With Security Compliance
**User Prompt:**
```
"Ensure cloud infrastructure meets SOC 2 and GDPR compliance requirements"
```

**Compliance Implementation:**
```
cloud-architect + security-auditor:
├── Infrastructure Security
│   ├── Network segmentation
│   ├── Encryption everywhere
│   └── Access controls
├── Compliance Controls
│   ├── Audit logging
│   ├── Data residency
│   └── Privacy controls
├── Documentation
│   ├── Architecture diagrams
│   ├── Security policies
│   └── Compliance evidence
└── Continuous Compliance
    ├── Automated scanning
    ├── Compliance reporting
    └── Regular audits
```

## Best Practices

### 1. Infrastructure as Code
**Example:**
```hcl
# Terraform module structure
modules/
├── networking/
├── compute/
├── storage/
├── security/
└── monitoring/
```

### 2. Cost Optimization
**Example:**
```
"Use Workers for compute, KV for cache, R2 for storage, optimize bandwidth with caching"
```

### 3. Security by Default
**Example:**
```
"Zero Trust network, encryption at rest/transit, least privilege IAM, WAF rules"
```

### 4. Observability
**Example:**
```
"Structured logging, distributed tracing, custom metrics, real-time dashboards"
```

## Common Use Cases

### 1. Application Hosting
```
"Set up cloud infrastructure for hosting our Nuxt application with global distribution"
```

### 2. Edge Computing
```
"Implement edge computing for real-time data processing at 200+ locations"
```

### 3. Multi-Cloud Strategy
```
"Design multi-cloud architecture with Cloudflare primary and AWS backup"
```

### 4. Infrastructure Migration
```
"Migrate from on-premise to cloud with zero downtime"
```

### 5. Cost Reduction
```
"Optimize cloud spending while improving performance"
```

## Cloud Technologies

- **Cloudflare**: Workers, KV, R2, D1, Durable Objects
- **IaC**: Terraform, Pulumi, CloudFormation
- **Containers**: Kubernetes, Docker, ECS
- **Monitoring**: Datadog, Grafana, CloudWatch
- **AWS**: EC2, S3, RDS, Lambda, API Gateway
- **Azure**: Functions, Storage, CosmosDB

## Tips for Effective Use

1. **Specify scale requirements** - Users, requests/sec, data volume
2. **Define budget constraints** - Monthly spend limits, cost targets
3. **Include compliance needs** - GDPR, HIPAA, SOC 2, etc.
4. **Clarify performance targets** - Latency, availability SLAs
5. **Mention existing infrastructure** - Current setup, migration needs

## Common Pitfalls to Avoid

1. **Over-engineering** - Start simple, scale as needed
2. **Ignoring costs** - Monitor and optimize continuously
3. **Single point of failure** - Design for redundancy
4. **Poor secret management** - Use proper secret stores
5. **Missing monitoring** - Implement comprehensive observability

## Related Agents
- **backend-architect**: Application architecture alignment
- **deployment-engineer**: CI/CD and deployment automation
- **security-auditor**: Security architecture review
- **performance-engineer**: Performance optimization
- **devops-incident-responder**: Operational readiness