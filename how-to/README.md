# Agent How-To Guides Index

Welcome to the comprehensive collection of how-to guides for all 41 agents in the Claude Code Sub-Agents system. Each guide provides practical examples, multi-agent collaboration scenarios, and best practices.

## 📚 Quick Navigation

The how-to guides are now organized into category subdirectories for easier navigation.

### 📁 [orchestration/](orchestration/) - Orchestration & Management (2 agents)
- [**agent-organizer**](orchestration/agent-organizer-how-to.md) - Master orchestrator for team assembly and workflow coordination
- [**context-manager**](orchestration/context-manager-how-to.md) - Central state management and cross-agent communication

### 📁 [business/](business/) - Business & Product (1 agent)
- [**product-manager**](business/product-manager-how-to.md) - Strategic product development and feature prioritization

### 📁 [development/](development/) - Development Specialists (13 agents)

#### Frontend & UI/UX
- [**frontend-developer**](development/frontend-developer-how-to.md) - Vue 3, Nuxt 4, and modern UI development
- [**ui-designer**](development/ui-designer-how-to.md) - Visual design and component systems
- [**ux-designer**](development/ux-designer-how-to.md) - User experience and interaction design
- [**nuxt4-pro**](development/nuxt4-pro-how-to.md) - Nuxt 4 specialist for SSR/SSG

#### Backend & Full-Stack
- [**backend-architect**](development/backend-architect-how-to.md) - API design and scalable backend systems
- [**full-stack-developer**](development/full-stack-developer-how-to.md) - End-to-end application development

#### Language Specialists
- [**python-pro**](development/python-pro-how-to.md) - Python best practices and ecosystem
- [**golang-pro**](development/golang-pro-how-to.md) - Go concurrency and systems programming
- [**typescript-pro**](development/typescript-pro-how-to.md) - TypeScript patterns and type safety

#### Platform & Tools
- [**mobile-developer**](development/mobile-developer-how-to.md) - React Native and Flutter development
- [**electron-pro**](development/electron-pro-how-to.md) - Desktop applications with Electron
- [**dx-optimizer**](development/dx-optimizer-how-to.md) - Developer experience enhancement
- [**legacy-modernizer**](development/legacy-modernizer-how-to.md) - Legacy code transformation

### 📁 [data-ai/](data-ai/) - Data & AI Specialists (8 agents)

#### Data Engineering
- [**data-engineer**](data-ai/data-engineer-how-to.md) - Data pipelines, ETL/ELT, and streaming
- [**data-scientist**](data-ai/data-scientist-how-to.md) - Analytics and machine learning
- [**database-optimizer**](data-ai/database-optimizer-how-to.md) - Query and schema optimization
- [**sqlite3-pro**](data-ai/sqlite3-pro-how-to.md) - SQLite expertise for edge deployments
- [**graphql-architect**](data-ai/graphql-architect-how-to.md) - GraphQL API design and implementation

#### AI/ML Engineering
- [**ai-engineer**](data-ai/ai-engineer-how-to.md) - AI system architecture
- [**ml-engineer**](data-ai/ml-engineer-how-to.md) - Machine learning implementation
- [**prompt-engineer**](data-ai/prompt-engineer-how-to.md) - LLM optimization and prompt design

### 📁 [infrastructure/](infrastructure/) - Infrastructure & DevOps (5 agents)
- [**cloud-architect**](infrastructure/cloud-architect-how-to.md) - Cloud infrastructure design
- [**deployment-engineer**](infrastructure/deployment-engineer-how-to.md) - CI/CD and deployment automation
- [**devops-incident-responder**](infrastructure/devops-incident-responder-how-to.md) - Incident management
- [**incident-responder**](infrastructure/incident-responder-how-to.md) - Critical incident response
- [**performance-engineer**](infrastructure/performance-engineer-how-to.md) - Performance optimization

### 📁 [quality-testing/](quality-testing/) - Quality & Testing (5 agents)
- [**qa-expert**](quality-testing/qa-expert-how-to.md) - Comprehensive testing strategies
- [**test-automator**](quality-testing/test-automator-how-to.md) - Automated testing implementation
- [**code-reviewer**](quality-testing/code-reviewer-how-to.md) - Code quality and best practices
- [**architect-reviewer**](quality-testing/architect-reviewer-how-to.md) - Architecture and design review
- [**debugger**](quality-testing/debugger-how-to.md) - Advanced debugging techniques

### 📁 [security/](security/) - Security (1 agent)
- [**security-auditor**](security/security-auditor-how-to.md) - Security assessment and compliance

### 📁 [specialization/](specialization/) - Documentation & Specialization (2 agents)
- [**api-documenter**](specialization/api-documenter-how-to.md) - API documentation specialist
- [**documentation-expert**](specialization/documentation-expert-how-to.md) - Technical writing expert

### 📁 [timezyme/](timezyme/) - Timezyme-Specific Agents (8 agents)
- [**timezyme-nuxt4-specialist**](timezyme/timezyme-nuxt4-specialist-how-to.md) - Nuxt 4 architecture
- [**timezyme-edge-specialist**](timezyme/timezyme-edge-specialist-how-to.md) - Edge computing with Cloudflare
- [**timezyme-saas-architect**](timezyme/timezyme-saas-architect-how-to.md) - Multi-tenancy and SaaS patterns
- [**timezyme-quality-guardian**](timezyme/timezyme-quality-guardian-how-to.md) - Code quality standards
- [**timezyme-test-guardian**](timezyme/timezyme-test-guardian-how-to.md) - Testing strategy
- [**cloudflare-edge-engineer**](timezyme/cloudflare-edge-engineer-how-to.md) - Cloudflare platform expertise
- [**polar-billing-specialist**](timezyme/polar-billing-specialist-how-to.md) - Billing integration
- [**i18n-accessibility-champion**](timezyme/i18n-accessibility-champion-how-to.md) - i18n and accessibility

## 🚀 Getting Started

### Understanding the Guides

Each how-to guide contains:
1. **Overview** - Agent's primary purpose and expertise
2. **Basic Usage Examples** - Simple, single-agent scenarios
3. **Multi-Agent Collaborative Scenarios** - Complex workflows with team coordination
4. **Advanced Patterns** - Sophisticated implementation strategies
5. **Integration Examples** - How agents work with other systems
6. **Best Practices** - Recommended approaches and tips
7. **Common Use Cases** - Typical scenarios for the agent
8. **Related Agents** - Agents that commonly work together

### How to Use These Guides

#### For Simple Tasks
1. Find the appropriate specialist agent
2. Review basic usage examples
3. Adapt the prompt to your needs

**Example:**
```
"Use the frontend-developer to create a responsive dashboard component"
```

#### For Complex Projects
1. Start with agent-organizer for team assembly
2. Review multi-agent scenarios in relevant guides
3. Let agents coordinate through context-manager

**Example:**
```
"Build a complete e-commerce platform with real-time inventory"
# Agent-organizer will assemble: backend-architect + frontend-developer + database-optimizer + test-automator
```

#### For Learning
1. Read through integration examples
2. Study the collaboration patterns
3. Practice with increasing complexity

## 📊 Common Multi-Agent Patterns

### Full-Stack Development Pattern
```
agent-organizer
├── backend-architect (API design)
├── frontend-developer (UI implementation)
└── test-automator (Testing)
```

### Security-First Pattern
```
security-auditor
├── backend-architect (Secure architecture)
├── frontend-developer (Input validation)
└── deployment-engineer (Secure CI/CD)
```

### Performance Optimization Pattern
```
performance-engineer
├── database-optimizer (Query tuning)
├── backend-architect (Caching strategy)
└── frontend-developer (UI optimization)
```

### Data Pipeline Pattern
```
data-engineer
├── database-optimizer (Schema design)
├── ml-engineer (Feature engineering)
└── backend-architect (API integration)
```

## 💡 Pro Tips

### 1. Let Agents Specialize
Don't ask one agent to do everything. Use agent-organizer to assemble the right team.

### 2. Provide Context
The more context you provide, the better agents can collaborate:
- Technology stack
- Business requirements
- Performance targets
- Security constraints

### 3. Use Context Manager
For complex projects, let context-manager maintain state across agent interactions.

### 4. Follow the Patterns
Review the multi-agent scenarios in these guides - they represent proven collaboration patterns.

### 5. Iterative Approach
Start with core functionality, then enhance with specialized agents:
1. MVP with full-stack-developer
2. Optimize with performance-engineer
3. Secure with security-auditor
4. Scale with cloud-architect

## 🔄 Workflow Examples

### Example 1: New Feature Development
```
1. product-manager - Define requirements
2. agent-organizer - Assemble team
3. backend-architect - Design API
4. frontend-developer - Build UI
5. test-automator - Create tests
6. code-reviewer - Review implementation
```

### Example 2: Performance Crisis
```
1. incident-responder - Immediate response
2. performance-engineer - Identify bottlenecks
3. database-optimizer - Query optimization
4. backend-architect - Architecture improvements
5. deployment-engineer - Deploy fixes
```

### Example 3: Security Audit
```
1. security-auditor - Vulnerability assessment
2. backend-architect - Fix architecture issues
3. frontend-developer - Implement security features
4. test-automator - Security testing
5. documentation-expert - Security documentation
```

## 📈 Continuous Improvement

These guides are living documents. As you use the agents:
- Note successful patterns
- Share feedback on improvements
- Contribute new scenarios
- Help expand the guides

## 🆘 Need Help?

### Quick Reference
- **Simple task?** → Use single specialist agent
- **Complex project?** → Start with agent-organizer
- **Don't know which agent?** → Agent-organizer will decide
- **Cross-cutting concern?** → Use context-manager

### Common Questions

**Q: How many agents should I use?**
A: Optimal team size is 1-3 agents. Let agent-organizer decide.

**Q: Can agents work in parallel?**
A: Yes, independent tasks can be handled by multiple agents simultaneously.

**Q: How do agents share information?**
A: Through context-manager, which maintains project state.

**Q: What if I need an agent not listed?**
A: Describe your needs to agent-organizer - it will find the best available match.

## 📚 Additional Resources

- [Main README](../README.md) - Project overview and setup
- [PROJECT_INDEX](../PROJECT_INDEX.md) - Complete agent directory
- [AI_SUMMARY](../AI_SUMMARY.md) - System intelligence report
- [CLAUDE.md](../CLAUDE.md) - Dispatcher protocol

---

*These guides demonstrate the power of multi-agent collaboration in Claude Code. Start with simple examples and gradually explore more complex scenarios.*