# How to Use: Backend Architect

## Quick Prompts

### API Design
- "Design a RESTful API for an e-commerce platform with products, orders, and user management"
- "Create comprehensive REST API with authentication, rate limiting, and documentation"
- "Design API that supports both mobile and web clients with different data needs"
- "Convert our REST API to GraphQL with backwards compatibility"
- "Design WebSocket API for real-time notifications"

### Architecture Patterns
- "Break down our monolithic application into microservices for better scalability"
- "Design multi-tenant architecture for our B2B SaaS with data isolation and custom domains"
- "Implement CQRS with event sourcing for our financial transaction system"
- "Set up API gateway with service mesh for our microservices architecture"
- "Implement event-driven architecture for our order processing system with real-time inventory updates"

### Performance & Scaling
- "Build a high-performance API platform handling 100K requests/second with sub-100ms latency"
- "Design caching strategy across application, database, and CDN layers"
- "Design stateless services, implement horizontal scaling, use caching strategically"
- "Optimize API response times to under 200ms"

### Database Architecture
- "Design scalable database schema for multi-tenant SaaS application"
- "Design data architecture for analytics-heavy application with real-time and batch processing"
- "Implement database sharding strategy for massive scale"
- "Design event store for event sourcing architecture"

### Security & Compliance
- "Implement defense in depth: Input validation, rate limiting, authentication, authorization, encryption"
- "Design zero-trust security architecture for our APIs"
- "Implement OAuth2 and JWT authentication system"
- "Design PCI-compliant payment processing architecture"

### Integration
- "Design integration layer for third-party services with retry and fallback"
- "Implement saga orchestration for distributed transactions"
- "Design message queue architecture with RabbitMQ/Kafka"
- "Create webhook system for external integrations"

### Migration
- "Plan zero-downtime migration from monolith to microservices"
- "Design blue-green deployment strategy"
- "Create database migration strategy with rollback capabilities"

### Observability
- "Implement structured logging, distributed tracing, metrics collection, health checks"
- "Design monitoring and alerting strategy for microservices"
- "Set up distributed tracing with OpenTelemetry"

## Overview
The Backend Architect agent specializes in designing scalable, secure, and maintainable backend systems. Expert in API design, microservices architecture, database design, and cloud-native patterns.

## Basic Usage Examples

### Example 1: API Design
**User Prompt:**
```
"Design a RESTful API for an e-commerce platform with products, orders, and user management"
```

**Backend Architect Response:**
- Defines resource endpoints
- Establishes naming conventions
- Implements versioning strategy
- Designs authentication/authorization
- Documents with OpenAPI spec

### Example 2: Microservices Architecture
**User Prompt:**
```
"Break down our monolithic application into microservices for better scalability"
```

**Backend Architect Actions:**
- Identifies service boundaries
- Designs inter-service communication
- Plans data consistency strategy
- Implements service discovery
- Creates deployment architecture

## Multi-Agent Collaborative Scenarios

### Scenario 1: High-Performance API Platform
**User Prompt:**
```
"Build a high-performance API platform handling 100K requests/second with sub-100ms latency"
```

**Backend Architect Orchestration:**
```
backend-architect leads:
├── Architecture Design
│   ├── backend-architect: System architecture
│   ├── database-optimizer: Database sharding strategy
│   ├── cloud-architect: Infrastructure design
│   └── performance-engineer: Performance targets
├── Implementation Planning
│   ├── backend-architect: Service decomposition
│   │   ├── API Gateway design
│   │   ├── Service mesh configuration
│   │   └── Caching strategy
│   ├── database-optimizer: Query optimization
│   └── deployment-engineer: Auto-scaling setup
├── Development Coordination
│   ├── With full-stack-developer: API implementation
│   ├── With graphql-architect: GraphQL layer
│   └── With test-automator: Load testing
└── Optimization Phase
    ├── performance-engineer: Bottleneck analysis
    ├── backend-architect: Architecture refinement
    └── cloud-architect: Infrastructure tuning
```

### Scenario 2: Event-Driven Architecture Implementation
**User Prompt:**
```
"Implement event-driven architecture for our order processing system with real-time inventory updates"
```

**Multi-Agent Implementation:**
```
backend-architect coordinates:
├── Event System Design
│   ├── backend-architect: Event schema, routing
│   ├── data-engineer: Event streaming setup
│   └── database-optimizer: Event store design
├── Service Implementation
│   ├── backend-architect: Service contracts
│   ├── Order Service:
│   │   ├── full-stack-developer: Implementation
│   │   └── test-automator: Service tests
│   ├── Inventory Service:
│   │   ├── full-stack-developer: Implementation
│   │   └── database-optimizer: Real-time updates
│   └── Notification Service:
│       └── full-stack-developer: Implementation
├── Integration Layer
│   ├── backend-architect: Saga orchestration
│   ├── data-engineer: Event processing
│   └── devops-incident-responder: Monitoring
└── Resilience
    ├── backend-architect: Circuit breakers
    ├── deployment-engineer: Fault tolerance
    └── qa-expert: Chaos testing
```

### Scenario 3: Multi-Tenant SaaS Architecture
**User Prompt:**
```
"Design multi-tenant architecture for our B2B SaaS with data isolation and custom domains"
```

**Architecture Collaboration:**
```
backend-architect designs with:
├── Tenant Isolation Strategy
│   ├── backend-architect: Isolation patterns
│   ├── database-optimizer: Schema design
│   │   ├── Shared database, separate schemas
│   │   ├── Row-level security
│   │   └── Connection pooling
│   └── security-auditor: Security boundaries
├── Routing Layer
│   ├── backend-architect: Tenant resolution
│   ├── cloud-architect: DNS configuration
│   └── frontend-developer: Subdomain handling
├── Customization Framework
│   ├── backend-architect: Feature flags
│   ├── database-optimizer: Tenant configs
│   └── product-manager: Tier management
└── Scaling Strategy
    ├── backend-architect: Horizontal scaling
    ├── cloud-architect: Auto-scaling rules
    └── performance-engineer: Load distribution
```

## Advanced Architecture Patterns

### Pattern 1: CQRS with Event Sourcing
**User Prompt:**
```
"Implement CQRS with event sourcing for our financial transaction system"
```

**Implementation Strategy:**
```yaml
architecture:
  command_side:
    - backend-architect: Command handlers, aggregates
    - database-optimizer: Event store optimization
    - security-auditor: Command validation
  
  query_side:
    - backend-architect: Projection design
    - database-optimizer: Read model optimization
    - data-engineer: Event replay system
  
  integration:
    - backend-architect: Event bus design
    - full-stack-developer: Implementation
    - test-automator: Event flow testing
```

### Pattern 2: API Gateway with Service Mesh
**User Prompt:**
```
"Set up API gateway with service mesh for our microservices architecture"
```

**Architecture Setup:**
```yaml
gateway_layer:
  backend-architect:
    - Rate limiting strategy
    - Authentication/authorization
    - Request routing
    - Response aggregation
  
  service_mesh:
    - Service discovery
    - Load balancing
    - Circuit breaking
    - Distributed tracing
  
  collaboration:
    - cloud-architect: Infrastructure setup
    - deployment-engineer: Mesh deployment
    - devops-incident-responder: Observability
```

## Integration Examples

### With Frontend Applications
**User Prompt:**
```
"Design API that supports both mobile and web clients with different data needs"
```

**API Design Strategy:**
```
backend-architect + frontend-developer + mobile-developer:
├── API Versioning
│   ├── Version strategy (URL vs Header)
│   ├── Deprecation policy
│   └── Client compatibility
├── Response Optimization
│   ├── Field filtering
│   ├── Pagination strategies
│   └── GraphQL consideration
├── Authentication
│   ├── JWT implementation
│   ├── OAuth2 flow
│   └── Session management
└── Real-time Features
    ├── WebSocket design
    ├── SSE implementation
    └── Polling fallback
```

### With Data Layer
**User Prompt:**
```
"Design data architecture for analytics-heavy application with real-time and batch processing"
```

**Data Architecture:**
```
backend-architect + data-engineer + database-optimizer:
├── Operational Database
│   ├── OLTP optimization
│   ├── Transaction handling
│   └── Data integrity
├── Analytics Pipeline
│   ├── CDC implementation
│   ├── Stream processing
│   └── Data warehouse design
├── Caching Layer
│   ├── Redis architecture
│   ├── Cache invalidation
│   └── Session storage
└── Search Infrastructure
    ├── Elasticsearch setup
    ├── Indexing strategy
    └── Query optimization
```

## Best Practices

### 1. API Design Principles
**Good Example:**
```yaml
REST_API:
  - Use nouns for resources: /api/v1/users
  - HTTP methods for actions: GET, POST, PUT, DELETE
  - Consistent error responses
  - HATEOAS for discoverability
  - Pagination for lists
```

### 2. Security First
**Example:**
```
"Implement defense in depth: Input validation, rate limiting, authentication, authorization, encryption"
```

### 3. Scalability by Design
**Example:**
```
"Design stateless services, implement horizontal scaling, use caching strategically"
```

### 4. Observability
**Example:**
```
"Structured logging, distributed tracing, metrics collection, health checks"
```

## Common Use Cases

### 1. API Development
```
"Create comprehensive REST API with authentication, rate limiting, and documentation"
```

### 2. Database Design
```
"Design scalable database schema for multi-tenant SaaS application"
```

### 3. Integration Architecture
```
"Design integration layer for third-party services with retry and fallback"
```

### 4. Migration Strategy
```
"Plan zero-downtime migration from monolith to microservices"
```

### 5. Performance Architecture
```
"Design caching strategy across application, database, and CDN layers"
```

## Tips for Effective Use

1. **Provide context** - Business requirements, scale expectations
2. **Specify constraints** - Technology stack, team expertise
3. **Define NFRs** - Performance, security, availability requirements
4. **Include integration points** - External services, legacy systems
5. **Clarify data requirements** - Consistency, durability needs

## Common Pitfalls to Avoid

1. **Over-engineering** - Start with simple, proven patterns
2. **Ignoring data consistency** - Plan for distributed transactions
3. **Missing error handling** - Design for failure scenarios
4. **Poor API design** - Follow REST/GraphQL best practices
5. **Security afterthought** - Build security into architecture

## Technology Focus

- **Languages**: Node.js, Python, Go, Java
- **Frameworks**: Express, FastAPI, Gin, Spring Boot
- **Databases**: PostgreSQL, MongoDB, Redis, Elasticsearch
- **Message Queues**: RabbitMQ, Kafka, AWS SQS
- **Cloud**: AWS, Azure, GCP, Cloudflare Workers

## Related Agents
- **database-optimizer**: Database performance and design
- **cloud-architect**: Infrastructure and deployment
- **security-auditor**: Security architecture review
- **graphql-architect**: GraphQL API design
- **full-stack-developer**: Implementation partner