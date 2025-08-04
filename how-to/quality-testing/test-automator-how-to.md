# How to Use: Test Automator

## Quick Prompts

### E2E Testing
- "Create E2E tests for our e-commerce checkout flow using Playwright"
- "Set up cross-browser testing for Chrome, Firefox, Safari, and Edge"
- "Build E2E test suite for user authentication flow"
- "Create visual regression tests for UI components"
- "Implement E2E tests for critical business workflows"

### API Testing
- "Build automated API testing suite for our REST endpoints with contract testing"
- "Create Postman collection with automated tests"
- "Implement contract testing with Pact between services"
- "Build GraphQL API test suite with schema validation"

### Test Strategy
- "Implement comprehensive testing strategy achieving 90% code coverage with CI/CD integration"
- "Create testing framework for microservices architecture with service virtualization"
- "Set up automated testing for React Native app across iOS and Android platforms"
- "Design test pyramid with unit, integration, and E2E tests"

### Performance Testing
- "Implement load testing simulating 10,000 concurrent users"
- "Create performance benchmarks for API endpoints"
- "Build stress testing suite for system limits"
- "Set up continuous performance monitoring"

### BDD/TDD
- "Implement behavior-driven development with Cucumber for better stakeholder collaboration"
- "Set up TDD workflow with Jest and watch mode"
- "Create Gherkin scenarios for user stories"
- "Build living documentation from test specs"

### Mobile Testing
- "Set up Appium for cross-platform mobile testing"
- "Create Detox tests for React Native app"
- "Implement device farm testing strategy"
- "Build automated UI tests for mobile app"

### Security Testing
- "Automate OWASP security testing in CI/CD pipeline"
- "Create security test suite for authentication"
- "Implement dependency vulnerability scanning"
- "Build penetration testing automation"

### Accessibility Testing
- "Create automated accessibility tests ensuring WCAG compliance"
- "Implement axe-core testing in CI/CD"
- "Build keyboard navigation tests"
- "Create screen reader compatibility tests"

### CI/CD Integration
- "Integrate automated testing into our development workflow with shift-left approach"
- "Set up test stages in GitHub Actions pipeline"
- "Implement parallel test execution for speed"
- "Create test reporting dashboard"

### Test Management
- "Implement quality metrics dashboard tracking test effectiveness"
- "Create test data management strategy"
- "Build flaky test detection and handling"
- "Design test environment provisioning"

## Overview
The Test Automator agent specializes in creating comprehensive automated testing strategies, implementing test frameworks, and ensuring quality through continuous testing practices across unit, integration, and E2E levels.

## Basic Usage Examples

### Example 1: E2E Test Suite
**User Prompt:**
```
"Create E2E tests for our e-commerce checkout flow using Playwright"
```

**Test Automator Response:**
- Sets up Playwright configuration
- Creates page object models
- Implements test scenarios
- Adds data fixtures
- Configures CI/CD integration

### Example 2: API Testing Framework
**User Prompt:**
```
"Build automated API testing suite for our REST endpoints with contract testing"
```

**Test Automator Actions:**
- Implements request/response validation
- Creates contract tests with Pact
- Sets up test data management
- Implements performance assertions
- Adds negative test scenarios

## Multi-Agent Collaborative Scenarios

### Scenario 1: Complete Testing Strategy Implementation
**User Prompt:**
```
"Implement comprehensive testing strategy achieving 90% code coverage with CI/CD integration"
```

**Test Automator Orchestration:**
```
test-automator leads:
├── Testing Architecture
│   ├── test-automator: Test strategy design
│   ├── qa-expert: Quality standards
│   ├── backend-architect: Testability review
│   └── frontend-developer: Component testing
├── Test Implementation Layers
│   ├── Unit Testing
│   │   ├── test-automator: Jest/Vitest setup
│   │   ├── frontend-developer: Component tests
│   │   └── backend-architect: Service tests
│   ├── Integration Testing
│   │   ├── test-automator: API test suite
│   │   ├── database-optimizer: Database tests
│   │   └── backend-architect: Service integration
│   ├── E2E Testing
│   │   ├── test-automator: Playwright suite
│   │   ├── ux-designer: User journey tests
│   │   └── frontend-developer: UI assertions
│   └── Performance Testing
│       ├── test-automator: Load test scripts
│       ├── performance-engineer: Metrics definition
│       └── backend-architect: Bottleneck analysis
├── CI/CD Integration
│   ├── test-automator: Pipeline configuration
│   ├── deployment-engineer: Test stages
│   └── devops-incident-responder: Monitoring
└── Quality Gates
    ├── test-automator: Coverage thresholds
    ├── code-reviewer: Quality metrics
    └── qa-expert: Release criteria
```

### Scenario 2: Microservices Testing Strategy
**User Prompt:**
```
"Create testing framework for microservices architecture with service virtualization"
```

**Microservices Testing:**
```
test-automator coordinates:
├── Service Testing
│   ├── test-automator: Service test framework
│   ├── backend-architect: Service contracts
│   └── graphql-architect: Schema testing
├── Contract Testing
│   ├── test-automator: Pact implementation
│   │   ├── Consumer tests
│   │   ├── Provider verification
│   │   └── Pact broker setup
│   ├── backend-architect: API versioning
│   └── deployment-engineer: Contract CI/CD
├── Integration Testing
│   ├── test-automator: Service orchestration tests
│   ├── data-engineer: Data flow testing
│   └── devops-incident-responder: Chaos testing
├── Service Virtualization
│   ├── test-automator: Mock service setup
│   ├── backend-architect: Service stubs
│   └── qa-expert: Test data management
└── Observability Testing
    ├── test-automator: Trace validation
    ├── performance-engineer: Metrics testing
    └── devops-incident-responder: Alert testing
```

### Scenario 3: Mobile App Testing Automation
**User Prompt:**
```
"Set up automated testing for React Native app across iOS and Android platforms"
```

**Mobile Testing Setup:**
```
test-automator implements:
├── Test Framework Setup
│   ├── test-automator: Appium configuration
│   ├── mobile-developer: Test environment
│   └── qa-expert: Device matrix
├── Test Implementation
│   ├── Unit Tests
│   │   ├── test-automator: Component tests
│   │   └── mobile-developer: Logic tests
│   ├── Integration Tests
│   │   ├── test-automator: API integration
│   │   └── backend-architect: Backend mocks
│   ├── UI Tests
│   │   ├── test-automator: Detox setup
│   │   ├── ux-designer: User flow tests
│   │   └── mobile-developer: Platform-specific tests
│   └── Performance Tests
│       ├── test-automator: Performance benchmarks
│       └── performance-engineer: Metrics analysis
├── CI/CD Pipeline
│   ├── test-automator: Test automation
│   ├── deployment-engineer: Build pipeline
│   └── mobile-developer: App distribution
└── Cross-Platform Validation
    ├── test-automator: Platform parity tests
    ├── qa-expert: Manual validation
    └── ui-designer: Visual regression
```

## Advanced Testing Patterns

### Pattern 1: BDD Testing Implementation
**User Prompt:**
```
"Implement behavior-driven development with Cucumber for better stakeholder collaboration"
```

**BDD Framework:**
```yaml
bdd_implementation:
  feature_files:
    - test-automator: Gherkin syntax setup
    - product-manager: Scenario writing
    - qa-expert: Acceptance criteria
  
  step_definitions:
    - test-automator: Step implementation
    - frontend-developer: UI steps
    - backend-architect: API steps
  
  execution:
    - test-automator: Test runner config
    - deployment-engineer: CI integration
    - documentation-expert: Living documentation
```

### Pattern 2: Visual Regression Testing
**User Prompt:**
```
"Set up visual regression testing to catch UI changes automatically"
```

**Visual Testing Setup:**
```yaml
visual_testing:
  baseline_creation:
    - test-automator: Screenshot capture
    - ui-designer: Baseline approval
    - frontend-developer: Component isolation
  
  comparison_engine:
    - test-automator: Percy/Chromatic setup
    - qa-expert: Threshold configuration
    - ux-designer: Change review
  
  workflow:
    - test-automator: Automated capture
    - deployment-engineer: PR integration
    - frontend-developer: Fix implementation
```

## Integration Examples

### With Development Workflow
**User Prompt:**
```
"Integrate automated testing into our development workflow with shift-left approach"
```

**Shift-Left Integration:**
```
test-automator + development team:
├── Pre-Commit
│   ├── Unit tests
│   ├── Linting
│   └── Type checking
├── Pull Request
│   ├── Integration tests
│   ├── Code coverage
│   └── Performance tests
├── Staging
│   ├── E2E tests
│   ├── Security tests
│   └── Load tests
└── Production
    ├── Smoke tests
    ├── Synthetic monitoring
    └── A/B test validation
```

### With Quality Metrics
**User Prompt:**
```
"Implement quality metrics dashboard tracking test effectiveness"
```

**Metrics Implementation:**
```
test-automator + qa-expert:
├── Coverage Metrics
│   ├── Code coverage
│   ├── Test coverage
│   └── Requirement coverage
├── Quality Metrics
│   ├── Defect density
│   ├── Test effectiveness
│   └── Escape rate
├── Performance Metrics
│   ├── Test execution time
│   ├── Flaky test rate
│   └── Automation ROI
└── Reporting
    ├── Dashboard creation
    ├── Trend analysis
    └── Stakeholder reports
```

## Best Practices

### 1. Test Pyramid Approach
**Example:**
```yaml
test_distribution:
  unit_tests: 70%  # Fast, isolated
  integration_tests: 20%  # Service boundaries
  e2e_tests: 10%  # Critical paths only
```

### 2. Test Independence
**Example:**
```
"Each test should be independent, idempotent, and deterministic"
```

### 3. Data Management
**Example:**
```
"Use factories for test data, clean up after tests, avoid shared state"
```

### 4. Continuous Testing
**Example:**
```
"Run tests on every commit, parallelize execution, fail fast"
```

## Common Use Cases

### 1. Regression Testing
```
"Create automated regression suite for critical business flows"
```

### 2. Performance Testing
```
"Implement load testing simulating 10,000 concurrent users"
```

### 3. Security Testing
```
"Automate OWASP security testing in CI/CD pipeline"
```

### 4. Accessibility Testing
```
"Create automated accessibility tests ensuring WCAG compliance"
```

### 5. Cross-Browser Testing
```
"Set up cross-browser testing for Chrome, Firefox, Safari, and Edge"
```

## Testing Technologies

- **Unit Testing**: Jest, Vitest, Mocha, pytest
- **E2E Testing**: Playwright, Cypress, Selenium
- **API Testing**: Postman, REST Assured, Supertest
- **Performance**: JMeter, K6, Gatling
- **Mobile**: Appium, Detox, Espresso, XCTest
- **Visual**: Percy, Chromatic, BackstopJS

## Tips for Effective Use

1. **Define test scope** - What needs testing, priority areas
2. **Specify environments** - Local, staging, production
3. **Include test data** - Fixtures, factories, cleanup
4. **Set quality goals** - Coverage targets, performance thresholds
5. **Plan maintenance** - Test refactoring, flaky test handling

## Common Pitfalls to Avoid

1. **Over-testing** - Focus on critical paths
2. **Flaky tests** - Ensure deterministic results
3. **Slow tests** - Optimize execution time
4. **Poor maintenance** - Keep tests updated
5. **Missing assertions** - Test behavior, not implementation

## Related Agents
- **qa-expert**: Testing strategy and standards
- **frontend-developer**: Component testing
- **backend-architect**: API testing design
- **performance-engineer**: Performance testing
- **security-auditor**: Security test implementation