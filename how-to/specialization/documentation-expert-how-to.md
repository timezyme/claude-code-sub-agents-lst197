# How to Use: Documentation Expert

## Quick Prompts

### API Documentation
- "Create comprehensive API documentation for our REST endpoints"
- "Document GraphQL API with interactive examples and playground"
- "Generate OpenAPI/Swagger specification from code annotations"
- "Write SDK documentation for multiple programming languages"
- "Create webhook documentation with payload examples"

### User Guides
- "Write a user guide for our SaaS application targeting non-technical users"
- "Create getting started guide with step-by-step tutorials"
- "Build interactive onboarding documentation with videos"
- "Write admin guide for system configuration and management"
- "Create mobile app user manual with screenshots"

### Technical Documentation
- "Document system architecture with diagrams and explanations"
- "Create technical specifications for new feature development"
- "Write database schema documentation with relationships"
- "Document deployment procedures and infrastructure setup"
- "Create troubleshooting guide for common technical issues"

### Developer Documentation
- "Create comprehensive documentation for our entire platform including API, user guides, and developer docs"
- "Write contributing guide for open source project"
- "Document code standards and best practices"
- "Create library documentation with code examples"
- "Write integration guide for third-party developers"

### Migration & Legacy
- "Document our legacy system and create migration guides for moving to the new platform"
- "Create upgrade guide from version 2.x to 3.x"
- "Document breaking changes and migration strategies"
- "Write legacy system decommission plan"

### Knowledge Management
- "Build searchable knowledge base for customer self-service"
- "Create internal wiki for team documentation"
- "Organize documentation with proper information architecture"
- "Implement documentation search and navigation"
- "Create FAQ section from support tickets"

### Process Documentation
- "Document CI/CD pipeline and deployment process"
- "Create runbooks for incident response"
- "Write standard operating procedures (SOPs)"
- "Document business processes and workflows"
- "Create onboarding documentation for new team members"

### Release Documentation
- "Generate release notes highlighting new features and fixes"
- "Create changelog with semantic versioning"
- "Write product update announcements"
- "Document version compatibility matrix"

### Localization
- "Create documentation in multiple languages with consistent terminology"
- "Set up translation workflow for documentation"
- "Implement internationalization for docs site"
- "Create style guide for multilingual content"

### Automation
- "Implement docs-as-code workflow with automated generation and versioning"
- "Set up automated API documentation from code"
- "Create documentation CI/CD pipeline"
- "Implement automated screenshot generation"

## Overview
The Documentation Expert agent specializes in creating comprehensive, user-friendly technical documentation. Expert in various documentation formats, style guides, information architecture, and making complex technical concepts accessible to diverse audiences.

## Basic Usage Examples

### Example 1: API Documentation
**User Prompt:**
```
"Create comprehensive API documentation for our REST endpoints"
```

**Documentation Expert Response:**
- OpenAPI specification creation
- Endpoint descriptions with examples
- Authentication guide
- Error code reference
- Interactive API explorer setup

### Example 2: User Guide Creation
**User Prompt:**
```
"Write a user guide for our SaaS application targeting non-technical users"
```

**Documentation Expert Actions:**
- Getting started guide
- Feature walkthroughs with screenshots
- Common use cases and workflows
- Troubleshooting section
- Glossary of terms

## Multi-Agent Collaborative Scenarios

### Scenario 1: Complete Documentation System
**User Prompt:**
```
"Create comprehensive documentation for our entire platform including API, user guides, and developer docs"
```

**Documentation Expert Orchestration:**
```
documentation-expert leads:
├── Documentation Planning
│   ├── documentation-expert: Information architecture
│   ├── product-manager: Audience analysis
│   ├── ux-designer: User journey mapping
│   └── backend-architect: Technical scope
├── Content Creation
│   ├── API Documentation
│   │   ├── documentation-expert: Writing
│   │   ├── api-documenter: OpenAPI spec
│   │   └── backend-architect: Technical review
│   ├── User Documentation
│   │   ├── documentation-expert: User guides
│   │   ├── ux-designer: UI screenshots
│   │   └── frontend-developer: Feature details
│   ├── Developer Documentation
│   │   ├── documentation-expert: Integration guides
│   │   ├── backend-architect: Architecture docs
│   │   └── deployment-engineer: Deployment guides
│   └── Video Tutorials
│       ├── documentation-expert: Scripts
│       ├── ui-designer: Visual assets
│       └── product-manager: Use cases
├── Review & Validation
│   ├── documentation-expert: Consistency check
│   ├── qa-expert: Accuracy validation
│   └── product-manager: Completeness review
└── Publishing & Maintenance
    ├── documentation-expert: Publishing setup
    ├── deployment-engineer: CI/CD integration
    └── frontend-developer: Doc site deployment
```

### Scenario 2: Migration Documentation Project
**User Prompt:**
```
"Document our legacy system and create migration guides for moving to the new platform"
```

**Migration Documentation:**
```
documentation-expert coordinates with:
├── Legacy System Documentation
│   ├── documentation-expert: System overview
│   ├── legacy-modernizer: Code analysis
│   ├── backend-architect: Architecture mapping
│   └── database-optimizer: Data model docs
├── Migration Planning Docs
│   ├── documentation-expert: Migration strategy
│   ├── architect-reviewer: Risk assessment
│   └── product-manager: Timeline and phases
├── Migration Guides
│   ├── Step-by-Step Procedures
│   │   ├── documentation-expert: Writing
│   │   ├── data-engineer: Data migration
│   │   └── deployment-engineer: Deployment steps
│   ├── Rollback Procedures
│   │   ├── documentation-expert: Contingency docs
│   │   └── devops-incident-responder: Recovery steps
│   └── Validation Checklists
│       ├── documentation-expert: Checklist creation
│       └── qa-expert: Test procedures
└── Training Materials
    ├── documentation-expert: Training guides
    ├── frontend-developer: New UI guides
    └── product-manager: Feature comparison
```

### Scenario 3: Open Source Project Documentation
**User Prompt:**
```
"Create documentation for our open source library to encourage community contributions"
```

**Open Source Documentation:**
```
documentation-expert drives:
├── Core Documentation
│   ├── documentation-expert: README creation
│   │   ├── Quick start guide
│   │   ├── Installation instructions
│   │   └── Basic examples
│   ├── backend-architect: Architecture overview
│   └── frontend-developer: Component docs
├── Contributor Documentation
│   ├── documentation-expert: Contributing guide
│   ├── code-reviewer: Code standards
│   ├── test-automator: Testing guide
│   └── deployment-engineer: Release process
├── Community Resources
│   ├── documentation-expert: Community guidelines
│   ├── product-manager: Roadmap documentation
│   └── dx-optimizer: Developer experience
└── Example Projects
    ├── documentation-expert: Tutorial writing
    ├── full-stack-developer: Sample apps
    └── test-automator: Test examples
```

## Advanced Documentation Patterns

### Pattern 1: Documentation as Code
**User Prompt:**
```
"Implement docs-as-code workflow with automated generation and versioning"
```

**Docs-as-Code Implementation:**
```yaml
documentation_pipeline:
  source_control:
    - documentation-expert: Markdown files
    - Version control: Git
    - Branch strategy: GitFlow
  
  generation:
    - Static site generators: Docusaurus, VitePress
    - API docs: OpenAPI + Redoc
    - Diagrams: Mermaid, PlantUML
  
  automation:
    - documentation-expert: CI/CD setup
    - deployment-engineer: Auto-deployment
    - test-automator: Link checking
```

### Pattern 2: Multi-Language Documentation
**User Prompt:**
```
"Create documentation in multiple languages with consistent terminology"
```

**Localization Strategy:**
```yaml
localization_framework:
  content_management:
    - documentation-expert: Source content
    - i18n-accessibility-champion: Localization setup
    - Translation management: Crowdin/Lokalise
  
  consistency:
    - Terminology database
    - Style guide per language
    - Review process
  
  maintenance:
    - Version synchronization
    - Update notifications
    - Quality assurance
```

## Integration Examples

### With Development Workflow
**User Prompt:**
```
"Integrate documentation updates into our development sprint process"
```

**Sprint Integration:**
```
documentation-expert + development team:
├── Sprint Planning
│   ├── Documentation tasks estimation
│   ├── Feature documentation requirements
│   └── Update priorities
├── During Development
│   ├── API documentation updates
│   ├── Code comment reviews
│   └── README updates
├── Sprint Review
│   ├── Documentation completeness
│   ├── Technical accuracy
│   └── User feedback
└── Continuous Improvement
    ├── Documentation metrics
    ├── User satisfaction
    └── Process refinement
```

### With Support Team
**User Prompt:**
```
"Create documentation that reduces support ticket volume"
```

**Support-Focused Documentation:**
```
documentation-expert + support team:
├── Ticket Analysis
│   ├── Common issues identification
│   ├── Knowledge gaps
│   └── User pain points
├── Content Creation
│   ├── FAQs
│   ├── Troubleshooting guides
│   ├── Video tutorials
│   └── Knowledge base articles
├── Feedback Loop
│   ├── Support team input
│   ├── User feedback
│   └── Content effectiveness
└── Maintenance
    ├── Regular updates
    ├── Accuracy checks
    └── Search optimization
```

## Best Practices

### 1. Know Your Audience
**Example:**
```yaml
audience_types:
  - End users: Simple language, visual aids
  - Developers: Code examples, API references
  - Administrators: Configuration, deployment
  - Executives: High-level overviews, ROI
```

### 2. Structure for Scannability
**Example:**
```
"Use headers, bullet points, tables, code blocks, and visual elements for easy scanning"
```

### 3. Maintain Consistency
**Example:**
```
"Consistent terminology, formatting, style guide adherence, standardized templates"
```

### 4. Include Examples
**Example:**
```
"Real-world examples, code snippets, screenshots, video demonstrations"
```

## Common Use Cases

### 1. API Documentation
```
"Document REST API with interactive examples and SDK guides"
```

### 2. User Manuals
```
"Create comprehensive user manual for enterprise software"
```

### 3. Technical Specifications
```
"Write detailed technical specifications for system architecture"
```

### 4. Release Notes
```
"Generate release notes highlighting new features and fixes"
```

### 5. Knowledge Base
```
"Build searchable knowledge base for customer self-service"
```

## Documentation Tools

- **Authoring**: Markdown, AsciiDoc, reStructuredText
- **Site Generators**: Docusaurus, VitePress, MkDocs, Sphinx
- **API Docs**: OpenAPI/Swagger, Postman, Insomnia
- **Diagrams**: Mermaid, Draw.io, Lucidchart, PlantUML
- **Screenshots**: Snagit, CloudApp, ShareX
- **Version Control**: Git, GitHub, GitLab

## Tips for Effective Use

1. **Define target audience** - Technical level, use cases, goals
2. **Specify documentation type** - API, user guide, technical spec
3. **Provide existing materials** - Current docs, style guides
4. **Include examples** - Real scenarios, code samples
5. **Set maintenance plan** - Update frequency, ownership

## Common Pitfalls to Avoid

1. **Too technical** - Match language to audience
2. **Out of date** - Establish update process
3. **No examples** - Include practical demonstrations
4. **Poor organization** - Use clear information architecture
5. **Missing context** - Provide background and prerequisites

## Related Agents
- **api-documenter**: API specification specialist
- **product-manager**: User requirements and use cases
- **ux-designer**: User journey and visual design
- **frontend-developer**: UI documentation
- **backend-architect**: Technical architecture docs