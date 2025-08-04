# How to Use: Context Manager

## Quick Prompts

### Project Initialization
- "Set up context management for our new e-commerce project using Nuxt 4 and Cloudflare"
- "Initialize project context for a multi-tenant SaaS application"
- "Create context tracking for our microservices migration project"

### Session Management
- "Resume work on the authentication system we started yesterday"
- "Load previous session state and continue with the payment integration"
- "Show me the progress from our last development session"

### Multi-Agent Coordination
- "Build a multi-step wizard form with progress tracking, validation, and backend persistence"
- "Our application is experiencing intermittent slowdowns in production. Find and fix the root cause."
- "Refactor our monolithic application into microservices while maintaining continuous deployment"

### Knowledge Management
- "Have context-manager provide tailored briefings as agent-organizer assembles teams for each phase"
- "Maintain context across multiple sessions for our month-long migration project"
- "Track all code changes and ensure they pass through appropriate review agents"

### Team Coordination
- "Coordinate frontend, backend, and DevOps teams working on different aspects of the same feature"
- "Build a comprehensive understanding of our legacy system for modernization"
- "Synchronize findings from multiple debugging agents investigating production issues"

### Documentation & Tracking
- "Use context-manager to onboard new agents mid-project with relevant history"
- "Context-manager should consolidate findings after each major phase"
- "Create regular snapshots of project state for rollback capabilities"
- "Consolidate documentation from all agents into comprehensive project docs"

### Integration Prompts
- "Have context-manager correlate findings from multiple debugging agents"
- "Context-manager should provide role-specific information to avoid information overload"
- "Record architectural decisions and their rationale for future reference"
- "Track quality gates and review status across all file changes"

## Overview
The Context Manager acts as the central nervous system for multi-agent projects, maintaining state, facilitating cross-agent communication, and ensuring all agents work with consistent project understanding.

## Basic Usage Examples

### Example 1: Initialize Project Context
**User Prompt:**
```
"Set up context management for our new e-commerce project using Nuxt 4 and Cloudflare"
```

**Context Manager Actions:**
- Creates project state file
- Maps technology stack
- Initializes agent communication channels
- Sets up activity tracking

### Example 2: Cross-Session Continuity
**User Prompt:**
```
"Resume work on the authentication system we started yesterday"
```

**Context Manager Response:**
- Loads previous session state
- Briefs newly activated agents
- Provides progress summary
- Maintains file modification history

## Multi-Agent Collaborative Scenarios

### Scenario 1: Complex Feature Development with State Management
**User Prompt:**
```
"Build a multi-step wizard form with progress tracking, validation, and backend persistence"
```

**Context Manager Coordination:**
```
context-manager orchestrates:
├── State Initialization
│   ├── Records: Project structure, tech stack
│   └── Tracks: Agent assignments
├── Agent Briefing
│   ├── frontend-developer: UI requirements, existing components
│   ├── backend-architect: API endpoints, data models
│   └── ux-designer: User flow, accessibility needs
├── Progress Tracking
│   ├── frontend-developer: Reports component creation
│   ├── backend-architect: Reports API implementation
│   └── Updates: Shared state for all agents
└── Knowledge Synthesis
    ├── Consolidates: Design decisions
    ├── Documents: Implementation patterns
    └── Shares: Learnings across agents
```

### Scenario 2: Debugging Complex System Issue
**User Prompt:**
```
"Our application is experiencing intermittent slowdowns in production. Find and fix the root cause."
```

**Context Manager Coordination:**
```
context-manager facilitates:
├── Information Gathering
│   ├── performance-engineer: Collects metrics
│   ├── debugger: Analyzes logs
│   └── devops-incident-responder: Reviews infrastructure
├── Knowledge Sharing
│   ├── Correlates: Findings from all agents
│   ├── Identifies: Pattern across reports
│   └── Distributes: Relevant context to each agent
├── Solution Coordination
│   ├── backend-architect: Proposes fixes
│   ├── database-optimizer: Suggests query improvements
│   └── Tracks: Implementation progress
└── Validation Tracking
    ├── test-automator: Confirms fix
    └── Records: Solution for future reference
```

### Scenario 3: Large-Scale Refactoring Project
**User Prompt:**
```
"Refactor our monolithic application into microservices while maintaining continuous deployment"
```

**Context Manager Orchestration:**
```
context-manager manages:
├── Project Mapping Phase
│   ├── Maps: Current architecture with legacy-modernizer
│   ├── Documents: Dependencies with architect-reviewer
│   └── Tracks: Technical debt with code-reviewer
├── Planning Coordination
│   ├── Shares: Architecture analysis with all agents
│   ├── Maintains: Refactoring roadmap
│   └── Tracks: Service boundaries
├── Implementation Tracking
│   ├── backend-architect: Service extraction progress
│   ├── deployment-engineer: CI/CD pipeline updates
│   ├── test-automator: Test coverage maintenance
│   └── Updates: Real-time progress dashboard
└── Knowledge Preservation
    ├── Documents: Decisions and rationale
    ├── Records: Patterns and anti-patterns
    └── Maintains: Migration playbook
```

## Advanced Context Management Patterns

### Pattern 1: Multi-Team Coordination
**User Prompt:**
```
"Coordinate frontend, backend, and DevOps teams working on different aspects of the same feature"
```

**Context Management Strategy:**
```yaml
coordination_model:
  channels:
    frontend_team:
      agents: [frontend-developer, ui-designer, ux-designer]
      context: UI components, user flows, design system
    backend_team:
      agents: [backend-architect, database-optimizer, api-documenter]
      context: API contracts, data models, performance metrics
    devops_team:
      agents: [deployment-engineer, cloud-architect, devops-incident-responder]
      context: Infrastructure, deployment pipelines, monitoring
  
  synchronization:
    - API contract changes broadcast to all teams
    - Performance metrics shared across teams
    - Deployment status updates to all agents
    - Blocking issues escalated immediately
```

### Pattern 2: Knowledge Graph Building
**User Prompt:**
```
"Build a comprehensive understanding of our legacy system for modernization"
```

**Context Management Strategy:**
```yaml
knowledge_graph:
  nodes:
    - components: UI elements, business logic, data models
    - dependencies: Internal and external
    - patterns: Architectural and design patterns
    - issues: Technical debt, security vulnerabilities
  
  relationships:
    - component_dependencies
    - data_flow_paths
    - user_interaction_flows
    - deployment_dependencies
  
  agents_contributing:
    - legacy-modernizer: System analysis
    - architect-reviewer: Pattern identification
    - security-auditor: Vulnerability mapping
    - database-optimizer: Data relationship analysis
```

## Integration Examples

### With Agent Organizer
**User Prompt:**
```
"Have context-manager provide tailored briefings as agent-organizer assembles teams for each phase"
```

**Coordination Flow:**
1. Agent-organizer identifies required agents
2. Context-manager prepares specific briefings
3. Agents receive relevant context only
4. Progress updates flow back to context-manager

### With Long-Running Tasks
**User Prompt:**
```
"Maintain context across multiple sessions for our month-long migration project"
```

**Context Persistence:**
```json
{
  "project_id": "migration_2024",
  "sessions": [
    {
      "date": "2024-01-15",
      "agents_active": ["legacy-modernizer", "architect-reviewer"],
      "progress": "Analyzed 40% of codebase",
      "decisions": ["Chose microservices architecture"],
      "next_steps": ["Continue analysis", "Begin service extraction"]
    }
  ],
  "knowledge_base": {
    "patterns_identified": 23,
    "technical_debt_items": 145,
    "migration_risks": 12
  }
}
```

### With Quality Assurance
**User Prompt:**
```
"Track all code changes and ensure they pass through appropriate review agents"
```

**Quality Gate Tracking:**
```yaml
change_tracking:
  file: src/components/UserAuth.vue
  modified_by: frontend-developer
  review_required:
    - code-reviewer: General quality
    - security-auditor: Authentication logic
    - ux-designer: User experience
  status:
    code-reviewer: approved
    security-auditor: pending
    ux-designer: approved
```

## Best Practices

### 1. Initialize Early
**Good Practice:**
```
"Start with context-manager to establish project baseline before bringing in other agents"
```

### 2. Regular Synchronization
**Good Practice:**
```
"Have context-manager consolidate findings after each major phase"
```

### 3. Selective Briefing
**Good Practice:**
```
"Context-manager should provide role-specific information to avoid information overload"
```

### 4. Progress Checkpoints
**Good Practice:**
```
"Create regular snapshots of project state for rollback capabilities"
```

## Common Use Cases

### 1. Project Onboarding
```
"Use context-manager to onboard new agents mid-project with relevant history"
```

### 2. Debugging Coordination
```
"Context-manager correlates findings from multiple debugging agents"
```

### 3. Documentation Aggregation
```
"Consolidate documentation from all agents into comprehensive project docs"
```

### 4. Decision Tracking
```
"Record architectural decisions and their rationale for future reference"
```

## Tips for Effective Use

1. **Let context-manager initialize first** - Establishes baseline
2. **Use for cross-agent communication** - Prevents information silos
3. **Leverage for progress tracking** - Real-time project visibility
4. **Maintain session continuity** - Preserves context across breaks
5. **Document decisions** - Future agents understand rationale

## Related Agents
- **agent-organizer**: Team assembly and coordination
- **product-manager**: Requirements and prioritization
- **documentation-expert**: Knowledge preservation