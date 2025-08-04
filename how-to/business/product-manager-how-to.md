# How to Use: Product Manager

## Quick Prompts

### Feature Management
- "We have 10 feature requests for our SaaS platform. Help prioritize them for the next sprint."
- "Convert our requirement for 'better search functionality' into actionable user stories"
- "Define MVP for our new AI-powered analytics tool targeting SMB market"
- "Create 6-month product roadmap aligned with company growth targets"

### Product Strategy
- "Launch a new B2B SaaS product for project management with subscription billing"
- "Our SaaS pricing isn't competitive. Design a new pricing model with feature tiers."
- "Analyze competitor features and identify our differentiation opportunities"
- "Define success metrics for our new feature release"

### User Feedback & Analytics
- "Users are complaining about our reporting features. Analyze feedback and plan improvements."
- "Use analytics to identify which features to deprecate and which to enhance"
- "Implement a customer feedback loop that directly influences product development"
- "Create feature adoption plan for enterprise customers"

### Planning & Alignment
- "Align product roadmap with business OKRs for Q4"
- "Product manager should work with development team to balance feature delivery with technical debt"
- "Plan features considering our current tech stack: Nuxt 4, Cloudflare Workers, SQLite"
- "Balance user requests, technical debt, and business goals in the roadmap"

### Testing & Validation
- "Design A/B tests for new onboarding flow with success metrics"
- "Product manager should define success as: 20% reduction in churn, 15% increase in daily active users"
- "Create validation criteria for our MVP launch"
- "Plan beta testing program for new features"

### Migration & Sunset
- "Plan the deprecation of legacy features while maintaining user satisfaction"
- "Create migration plan for users moving from free to paid tiers"
- "Define sunset strategy for outdated API versions"

## Overview
The Product Manager agent specializes in strategic product development, feature prioritization, user story creation, and ensuring alignment between business goals and technical implementation.

## Basic Usage Examples

### Example 1: Feature Prioritization
**User Prompt:**
```
"We have 10 feature requests for our SaaS platform. Help prioritize them for the next sprint."
```

**Product Manager Response:**
- Analyzes business value vs. effort
- Considers user impact and retention
- Evaluates technical dependencies
- Produces prioritized backlog with justification

### Example 2: User Story Creation
**User Prompt:**
```
"Convert our requirement for 'better search functionality' into actionable user stories"
```

**Product Manager Output:**
```
As a user, I want to search by multiple criteria
So that I can find specific items quickly
Acceptance Criteria:
- Search supports text, date, and category filters
- Results appear within 2 seconds
- Search history is maintained
```

## Multi-Agent Collaborative Scenarios

### Scenario 1: New Product Launch
**User Prompt:**
```
"Launch a new B2B SaaS product for project management with subscription billing"
```

**Product Manager Coordination:**
```
product-manager leads:
├── Market Analysis Phase
│   ├── product-manager: Competitive analysis, pricing strategy
│   ├── ux-designer: User research, personas
│   └── data-scientist: Market size analysis
├── Product Definition Phase
│   ├── product-manager: Feature roadmap, MVP definition
│   ├── backend-architect: Technical feasibility
│   └── ui-designer: Design system requirements
├── Development Planning
│   ├── product-manager: Sprint planning, user stories
│   ├── agent-organizer: Team assembly
│   └── full-stack-developer: Effort estimation
└── Launch Preparation
    ├── product-manager: Go-to-market strategy
    ├── api-documenter: API documentation
    └── qa-expert: Launch readiness checklist
```

### Scenario 2: Feature Enhancement Based on User Feedback
**User Prompt:**
```
"Users are complaining about our reporting features. Analyze feedback and plan improvements."
```

**Multi-Agent Collaboration:**
```
product-manager coordinates:
├── Feedback Analysis
│   ├── product-manager: Categorize feedback, identify patterns
│   ├── data-scientist: Sentiment analysis, usage data
│   └── ux-designer: User interview insights
├── Solution Design
│   ├── product-manager: Feature specifications
│   ├── frontend-developer: UI/UX improvements
│   ├── backend-architect: Data processing enhancements
│   └── database-optimizer: Query performance
├── Implementation Planning
│   ├── product-manager: Release strategy
│   ├── agent-organizer: Development team setup
│   └── test-automator: Test plan
└── Success Metrics
    ├── product-manager: KPI definition
    └── data-engineer: Analytics implementation
```

### Scenario 3: Pricing Model Optimization
**User Prompt:**
```
"Our SaaS pricing isn't competitive. Design a new pricing model with feature tiers."
```

**Product Manager Orchestration:**
```
product-manager drives:
├── Market Research
│   ├── product-manager: Competitor pricing analysis
│   ├── data-scientist: Price elasticity modeling
│   └── polar-billing-specialist: Billing platform capabilities
├── Tier Design
│   ├── product-manager: Feature allocation per tier
│   ├── backend-architect: Feature flag implementation
│   └── database-optimizer: Multi-tenant data isolation
├── Migration Strategy
│   ├── product-manager: Customer communication plan
│   ├── full-stack-developer: Grandfathering logic
│   └── qa-expert: Migration testing
└── Revenue Impact
    ├── product-manager: Revenue projections
    └── data-engineer: Billing analytics dashboard
```

## Advanced Product Management Patterns

### Pattern 1: Data-Driven Product Decisions
**User Prompt:**
```
"Use analytics to identify which features to deprecate and which to enhance"
```

**Collaborative Approach:**
```yaml
decision_framework:
  data_collection:
    - product-manager: Define success metrics
    - data-engineer: Implement tracking
    - data-scientist: Analyze usage patterns
  
  analysis_phase:
    - product-manager: Feature usage vs. maintenance cost
    - performance-engineer: Performance impact analysis
    - security-auditor: Security risk assessment
  
  decision_making:
    - product-manager: Deprecation roadmap
    - frontend-developer: UI sunset warnings
    - documentation-expert: Migration guides
```

### Pattern 2: Customer-Centric Development
**User Prompt:**
```
"Implement a customer feedback loop that directly influences product development"
```

**Integration Strategy:**
```yaml
feedback_loop:
  collection:
    agents: [product-manager, ux-designer]
    methods: [surveys, interviews, analytics]
  
  analysis:
    agents: [product-manager, data-scientist]
    outputs: [feature_requests, pain_points, satisfaction_scores]
  
  prioritization:
    agents: [product-manager, backend-architect, frontend-developer]
    criteria: [impact, effort, strategic_alignment]
  
  implementation:
    agents: [agent-organizer, full-stack-developer, test-automator]
    tracking: [velocity, quality, user_satisfaction]
```

## Integration Examples

### With Development Teams
**User Prompt:**
```
"Product manager should work with development team to balance feature delivery with technical debt"
```

**Collaboration Model:**
```
product-manager + backend-architect + legacy-modernizer:
├── Technical Debt Assessment
│   └── Impact on feature velocity
├── Prioritization Matrix
│   ├── Feature value vs. debt cost
│   └── Risk assessment
└── Sprint Allocation
    ├── 70% new features
    ├── 20% technical debt
    └── 10% bugs/maintenance
```

### With Business Stakeholders
**User Prompt:**
```
"Align product roadmap with business OKRs for Q4"
```

**Alignment Process:**
```
product-manager facilitates:
1. OKR breakdown into product initiatives
2. Feature mapping to objectives
3. Success metrics definition
4. Resource allocation with agent-organizer
5. Progress tracking with context-manager
```

### With Customer Success
**User Prompt:**
```
"Create feature adoption plan for enterprise customers"
```

**Adoption Strategy:**
```yaml
adoption_plan:
  segmentation:
    - product-manager: Customer tier analysis
    - data-scientist: Usage pattern clustering
  
  enablement:
    - product-manager: Feature rollout plan
    - documentation-expert: Training materials
    - frontend-developer: In-app guidance
  
  monitoring:
    - product-manager: Adoption metrics
    - data-engineer: Dashboard creation
    - qa-expert: Success criteria validation
```

## Best Practices

### 1. Start with Problem, Not Solution
**Good Prompt:**
```
"Users are churning after 30 days. Help identify why and plan retention improvements."
```

**Less Effective:**
```
"Add more features to retain users"
```

### 2. Define Clear Success Metrics
**Example:**
```
"Product manager should define success as: 20% reduction in churn, 15% increase in daily active users"
```

### 3. Consider Technical Constraints
**Example:**
```
"Plan features considering our current tech stack: Nuxt 4, Cloudflare Workers, SQLite"
```

### 4. Balance Stakeholder Needs
**Example:**
```
"Balance user requests, technical debt, and business goals in the roadmap"
```

## Common Use Cases

### 1. MVP Definition
```
"Define MVP for our new AI-powered analytics tool targeting SMB market"
```

### 2. Feature Sunset Planning
```
"Plan the deprecation of legacy features while maintaining user satisfaction"
```

### 3. Competitive Analysis
```
"Analyze competitor features and identify our differentiation opportunities"
```

### 4. Roadmap Creation
```
"Create 6-month product roadmap aligned with company growth targets"
```

### 5. A/B Testing Strategy
```
"Design A/B tests for new onboarding flow with success metrics"
```

## Tips for Effective Use

1. **Provide business context** - Market, competition, constraints
2. **Include user feedback** - Real user pain points and requests
3. **Specify target metrics** - Clear, measurable goals
4. **Consider technical feasibility** - Work with technical agents
5. **Think iteratively** - MVP first, then enhancements

## Common Pitfalls to Avoid

1. **Feature creep** - Stay focused on core value
2. **Ignoring technical debt** - Balance new features with maintenance
3. **Assumption-based decisions** - Use data from data-scientist
4. **Siloed planning** - Collaborate with technical agents
5. **Unclear success criteria** - Define measurable outcomes

## Related Agents
- **agent-organizer**: Team assembly for product initiatives
- **ux-designer**: User research and experience design
- **data-scientist**: Analytics and user behavior analysis
- **backend-architect**: Technical feasibility assessment
- **documentation-expert**: Product documentation