# How to Use: Agent Organizer

## Quick Prompts

### Basic Prompts
- "I need to add a user profile page to my Vue application"
- "Build a real-time notification system with websockets, database storage, and a React frontend"
- "I need to build a complete e-commerce platform with product catalog, shopping cart, payment processing, and admin dashboard"
- "Modernize our jQuery-based application to use Vue 3 with Nuxt, maintaining all existing functionality"
- "Create an AI-powered analytics dashboard that processes user behavior data, generates insights, and visualizes trends"

### Security & Compliance Prompts
- "Build a secure healthcare data management system with HIPAA compliance"
- "Implement PCI-compliant payment processing system with end-to-end security"
- "Create a GDPR-compliant user data management system"

### Performance & Optimization Prompts
- "Optimize our application to handle 100,000 concurrent users"
- "Build a high-performance API platform handling 100K requests/second"
- "Reduce application load time to under 2 seconds on 3G networks"

### Team Assembly Prompts
- "Use the agent-organizer to assemble a team focused on accessibility and internationalization for our e-commerce platform"
- "Have agent-organizer coordinate with context-manager to maintain project state across multiple development sessions"
- "Agent-organizer should enforce code review and security audit for all payment-related features"

### Migration & Modernization Prompts
- "Migrate our monolithic application to microservices architecture"
- "Convert our REST API to GraphQL with backwards compatibility"
- "Upgrade from Vue 2 to Vue 3 with Composition API"

### Project Planning Prompts
- "Use agent-organizer to break down this epic into stories and assign appropriate agents: Epic: Implement complete user authentication system"
- "Create a development team for building a multi-tenant SaaS application"
- "Assemble a team for emergency production issue resolution"

## Overview
The Agent Organizer is your master orchestrator that analyzes complex tasks and assembles optimal teams of specialized agents. It doesn't implement solutions directly but strategically delegates work to the right experts.

## Basic Usage Examples

### Example 1: Simple Feature Request
**User Prompt:**
```
"I need to add a user profile page to my Vue application"
```

**Agent Organizer Response:**
- Analyzes: Vue frontend task with UI/UX requirements
- Assembles team: `frontend-developer` + `ui-designer`
- Delegation strategy: UI design first, then implementation

### Example 2: Complex Full-Stack Feature
**User Prompt:**
```
"Build a real-time notification system with websockets, database storage, and a React frontend"
```

**Agent Organizer Response:**
- Analyzes: Multi-layer architecture with real-time requirements
- Assembles team: `backend-architect` + `frontend-developer` + `database-optimizer`
- Delegation strategy: Architecture design → Backend implementation → Frontend integration

## Multi-Agent Collaborative Scenarios

### Scenario 1: E-Commerce Platform Development
**User Prompt:**
```
"I need to build a complete e-commerce platform with product catalog, shopping cart, payment processing, and admin dashboard"
```

**Agent Orchestration:**
```
agent-organizer coordinates:
├── Phase 1: Architecture & Planning
│   ├── backend-architect: System design, API structure
│   └── database-optimizer: Schema design, indexing strategy
├── Phase 2: Core Implementation
│   ├── full-stack-developer: Product catalog, cart logic
│   ├── frontend-developer: User interface components
│   └── product-manager: Feature prioritization
├── Phase 3: Payment Integration
│   ├── backend-architect: Payment gateway integration
│   └── security-auditor: Security review
└── Phase 4: Quality Assurance
    ├── test-automator: E2E test suite
    └── code-reviewer: Final review
```

### Scenario 2: Legacy System Modernization
**User Prompt:**
```
"Modernize our jQuery-based application to use Vue 3 with Nuxt, maintaining all existing functionality"
```

**Agent Orchestration:**
```
agent-organizer coordinates:
├── Discovery Phase
│   ├── legacy-modernizer: Analyze existing codebase
│   └── architect-reviewer: Identify technical debt
├── Planning Phase
│   ├── nuxt4-pro: Migration strategy
│   └── frontend-developer: Component mapping
├── Implementation Phase
│   ├── legacy-modernizer: Incremental migration
│   ├── frontend-developer: Vue component creation
│   └── test-automator: Regression testing
└── Validation Phase
    ├── qa-expert: Functionality verification
    └── performance-engineer: Performance comparison
```

### Scenario 3: AI-Powered Analytics Dashboard
**User Prompt:**
```
"Create an AI-powered analytics dashboard that processes user behavior data, generates insights, and visualizes trends"
```

**Agent Orchestration:**
```
agent-organizer coordinates:
├── Data Architecture
│   ├── data-engineer: Pipeline design
│   ├── database-optimizer: Query optimization
│   └── ai-engineer: ML model architecture
├── Backend Development
│   ├── backend-architect: API design
│   ├── ml-engineer: Model implementation
│   └── graphql-architect: GraphQL schema
├── Frontend Development
│   ├── frontend-developer: Dashboard UI
│   ├── ui-designer: Data visualization
│   └── ux-designer: User workflows
└── Integration & Testing
    ├── full-stack-developer: System integration
    └── test-automator: Integration tests
```

## Advanced Delegation Patterns

### Pattern 1: Security-First Development
**User Prompt:**
```
"Build a secure healthcare data management system with HIPAA compliance"
```

**Orchestration Strategy:**
```yaml
priority: security
team_composition:
  lead: security-auditor
  support:
    - backend-architect
    - database-optimizer
    - frontend-developer
workflow:
  - Security requirements analysis
  - Threat modeling with security-auditor
  - Architecture review with backend-architect
  - Implementation with security validation at each step
  - Continuous security testing with qa-expert
```

### Pattern 2: Performance-Critical Application
**User Prompt:**
```
"Optimize our application to handle 100,000 concurrent users"
```

**Orchestration Strategy:**
```yaml
priority: performance
team_composition:
  lead: performance-engineer
  support:
    - backend-architect
    - database-optimizer
    - cloud-architect
workflow:
  - Performance baseline with performance-engineer
  - Bottleneck identification across all layers
  - Architecture optimization with backend-architect
  - Database tuning with database-optimizer
  - Infrastructure scaling with cloud-architect
  - Load testing validation with test-automator
```

## Tips for Effective Use

### 1. Provide Clear Context
**Good Prompt:**
```
"Build a multi-tenant SaaS application using Nuxt 4, Cloudflare Workers, and SQLite with user authentication and billing"
```
- Specifies technology stack
- Clear requirements
- Mentions key features

**Less Effective:**
```
"Build a web app"
```
- Too vague
- No technology preferences
- Unclear requirements

### 2. Specify Constraints
**Example:**
```
"Modernize our application within 2 weeks, maintaining backward compatibility, with zero downtime deployment"
```
- Time constraint: 2 weeks
- Technical constraint: backward compatibility
- Operational constraint: zero downtime

### 3. Request Specific Team Compositions
**Example:**
```
"Use the agent-organizer to assemble a team focused on accessibility and internationalization for our e-commerce platform"
```
- Agent-organizer will prioritize: `ux-designer`, `frontend-developer`, `i18n-accessibility-champion`

## Integration with Other Systems

### With Context Manager
```
"Have agent-organizer coordinate with context-manager to maintain project state across multiple development sessions"
```

### With Task Management
```
"Use agent-organizer to break down this epic into stories and assign appropriate agents:
Epic: Implement complete user authentication system"
```

### With Quality Gates
```
"Agent-organizer should enforce code review and security audit for all payment-related features"
```

## Common Pitfalls to Avoid

1. **Don't bypass for complex tasks** - Let agent-organizer handle team assembly
2. **Don't overload teams** - Optimal team size is 1-3 agents
3. **Don't ignore dependencies** - Agent-organizer manages execution order
4. **Don't skip context** - Provide technology stack and constraints

## Best Practices

1. **Start with agent-organizer for multi-domain tasks**
2. **Trust its delegation decisions** - It knows agent capabilities
3. **Provide business context** - Helps with prioritization
4. **Specify quality requirements** - Ensures appropriate review agents
5. **Use for architecture decisions** - Assembles design-focused teams

## Related Agents
- **context-manager**: Maintains project state
- **product-manager**: Business requirement analysis
- **architect-reviewer**: Technical design validation