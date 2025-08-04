# How to Use: Security Auditor

## Quick Prompts

### Security Assessments
- "Conduct a security audit of our Node.js API that handles payment processing"
- "Perform penetration testing on our web application to find vulnerabilities"
- "Review pull request for security vulnerabilities before merging"
- "Audit AWS infrastructure for security misconfigurations"
- "Conduct black-box penetration testing of our web application"

### Compliance & Standards
- "Ensure our healthcare application meets HIPAA compliance requirements"
- "Verify SOC 2 Type II compliance for our SaaS platform"
- "Implement PCI-compliant payment processing system with end-to-end security"
- "Create GDPR-compliant data handling procedures"

### Security Architecture
- "Migrate our application to zero-trust architecture with complete security overhaul"
- "Design secure authentication system with MFA and session management"
- "Implement comprehensive API security with rate limiting, authentication, and threat protection"
- "Build DevSecOps pipeline with automated security scanning"

### Incident Response
- "We've detected suspicious activity in our production environment. Investigate and remediate."
- "Investigate potential data breach and provide forensic analysis"
- "Create incident response plan with runbooks and procedures"
- "Perform security incident post-mortem analysis"

### Vulnerability Management
- "Scan third-party dependencies for known vulnerabilities"
- "Implement vulnerability management process with CVSS scoring"
- "Create automated security testing in CI/CD pipeline"
- "Regular scanning, prioritized remediation based on CVSS scores, patch management process"

### Security Integration
- "Integrate security reviews into our sprint process without slowing development"
- "Implement SAST, DAST, and SCA tools in our pipeline"
- "Create security training program for development team"
- "Ensure cloud infrastructure meets SOC 2 and GDPR compliance requirements"

### Preventive Security
- "Implement WAF rules for application protection"
- "Design threat model for our payment processing system"
- "Create security policies and procedures documentation"
- "Implement Zero Trust network, encryption at rest/transit, least privilege IAM, WAF rules"

### Container & Cloud Security
- "Secure our Kubernetes cluster and container deployments"
- "Implement secrets management for cloud infrastructure"
- "Design secure CI/CD pipeline with supply chain security"

## Overview
The Security Auditor agent specializes in identifying vulnerabilities, implementing security best practices, ensuring compliance, and conducting comprehensive security assessments throughout the SDLC.

## Basic Usage Examples

### Example 1: Security Assessment
**User Prompt:**
```
"Conduct a security audit of our Node.js API that handles payment processing"
```

**Security Auditor Response:**
- Identifies OWASP Top 10 vulnerabilities
- Reviews authentication/authorization
- Checks data encryption practices
- Audits PCI DSS compliance
- Provides remediation roadmap

### Example 2: Penetration Testing
**User Prompt:**
```
"Perform penetration testing on our web application to find vulnerabilities"
```

**Security Auditor Actions:**
- Conducts reconnaissance
- Tests for injection vulnerabilities
- Checks authentication bypasses
- Tests for XSS and CSRF
- Documents findings with CVE scores

## Multi-Agent Collaborative Scenarios

### Scenario 1: Secure Payment System Implementation
**User Prompt:**
```
"Implement a PCI-compliant payment processing system with end-to-end security"
```

**Security-First Development:**
```
security-auditor leads:
├── Threat Modeling Phase
│   ├── security-auditor: STRIDE analysis
│   ├── backend-architect: Architecture review
│   └── product-manager: Risk acceptance
├── Secure Design Phase
│   ├── security-auditor: Security requirements
│   │   ├── Encryption standards
│   │   ├── Key management
│   │   └── Audit logging
│   ├── backend-architect: Secure architecture
│   └── database-optimizer: Data protection
├── Implementation Review
│   ├── security-auditor: Code security review
│   ├── full-stack-developer: Secure coding
│   └── frontend-developer: Input validation
├── Testing & Validation
│   ├── security-auditor: Penetration testing
│   ├── test-automator: Security test cases
│   └── qa-expert: Compliance validation
└── Deployment Security
    ├── security-auditor: Production hardening
    ├── deployment-engineer: Secure CI/CD
    └── cloud-architect: Infrastructure security
```

### Scenario 2: Zero-Trust Architecture Implementation
**User Prompt:**
```
"Migrate our application to zero-trust architecture with complete security overhaul"
```

**Zero-Trust Migration:**
```
security-auditor orchestrates:
├── Current State Assessment
│   ├── security-auditor: Security gaps analysis
│   ├── backend-architect: Architecture vulnerabilities
│   └── cloud-architect: Infrastructure audit
├── Zero-Trust Design
│   ├── security-auditor: Policy engine design
│   │   ├── Identity verification
│   │   ├── Device trust
│   │   └── Contextual access
│   ├── backend-architect: Service segmentation
│   └── database-optimizer: Data classification
├── Implementation Phases
│   ├── Phase 1: Identity & Access
│   │   ├── security-auditor: MFA implementation
│   │   └── backend-architect: OAuth2/OIDC setup
│   ├── Phase 2: Network Segmentation
│   │   ├── cloud-architect: Microsegmentation
│   │   └── security-auditor: Policy enforcement
│   └── Phase 3: Data Protection
│       ├── security-auditor: Encryption everywhere
│       └── database-optimizer: Data loss prevention
└── Continuous Monitoring
    ├── security-auditor: Security monitoring
    ├── devops-incident-responder: Incident response
    └── performance-engineer: Security metrics
```

### Scenario 3: Security Incident Response
**User Prompt:**
```
"We've detected suspicious activity in our production environment. Investigate and remediate."
```

**Incident Response Coordination:**
```
security-auditor coordinates:
├── Initial Response
│   ├── security-auditor: Threat assessment
│   ├── devops-incident-responder: System isolation
│   └── incident-responder: War room setup
├── Investigation Phase
│   ├── security-auditor: Forensic analysis
│   │   ├── Log analysis
│   │   ├── Attack vector identification
│   │   └── Impact assessment
│   ├── debugger: Code vulnerability search
│   └── database-optimizer: Data breach check
├── Containment & Eradication
│   ├── security-auditor: Threat removal
│   ├── backend-architect: Vulnerability patching
│   └── deployment-engineer: Emergency deployment
└── Recovery & Lessons
    ├── security-auditor: Security hardening
    ├── test-automator: Regression testing
    └── documentation-expert: Incident documentation
```

## Advanced Security Patterns

### Pattern 1: DevSecOps Pipeline
**User Prompt:**
```
"Integrate comprehensive security into our CI/CD pipeline"
```

**DevSecOps Implementation:**
```yaml
pipeline_security:
  static_analysis:
    - security-auditor: SAST tool selection
    - code-reviewer: Security code review
    - backend-architect: Secure patterns
  
  dynamic_analysis:
    - security-auditor: DAST configuration
    - test-automator: Security test automation
    - qa-expert: Vulnerability validation
  
  dependency_scanning:
    - security-auditor: SCA tools
    - deployment-engineer: Automated patching
    - legacy-modernizer: Dependency updates
  
  runtime_protection:
    - security-auditor: RASP implementation
    - devops-incident-responder: Monitoring
    - performance-engineer: Performance impact
```

### Pattern 2: API Security Framework
**User Prompt:**
```
"Implement comprehensive API security with rate limiting, authentication, and threat protection"
```

**API Security Layers:**
```yaml
security_layers:
  gateway_security:
    - security-auditor: WAF rules
    - backend-architect: Rate limiting
    - cloud-architect: DDoS protection
  
  authentication:
    - security-auditor: JWT security
    - backend-architect: OAuth2 flows
    - frontend-developer: Token handling
  
  authorization:
    - security-auditor: RBAC/ABAC design
    - backend-architect: Policy engine
    - database-optimizer: Permission storage
  
  data_protection:
    - security-auditor: Encryption standards
    - backend-architect: Data masking
    - database-optimizer: Secure queries
```

## Integration Examples

### With Development Teams
**User Prompt:**
```
"Integrate security reviews into our sprint process without slowing development"
```

**Agile Security Integration:**
```
security-auditor + development team:
├── Sprint Planning
│   ├── Security story points
│   ├── Threat modeling for features
│   └── Security acceptance criteria
├── Development Phase
│   ├── Secure coding guidelines
│   ├── Automated security tests
│   └── Peer security reviews
├── Sprint Review
│   ├── Security validation
│   ├── Vulnerability assessment
│   └── Compliance check
└── Continuous Improvement
    ├── Security metrics tracking
    ├── Team security training
    └── Process refinement
```

### With Compliance Requirements
**User Prompt:**
```
"Ensure our healthcare application meets HIPAA compliance requirements"
```

**Compliance Implementation:**
```
security-auditor ensures:
├── Technical Safeguards
│   ├── Access controls
│   ├── Audit logs
│   ├── Encryption
│   └── Transmission security
├── Administrative Safeguards
│   ├── Risk assessments
│   ├── Workforce training
│   └── Access management
├── Physical Safeguards
│   └── With cloud-architect
└── Documentation
    └── With documentation-expert
```

## Best Practices

### 1. Security by Design
**Example:**
```yaml
principles:
  - Threat model early and often
  - Implement defense in depth
  - Apply least privilege principle
  - Encrypt data at rest and in transit
  - Implement comprehensive logging
```

### 2. Vulnerability Management
**Example:**
```
"Regular scanning, prioritized remediation based on CVSS scores, patch management process"
```

### 3. Incident Preparedness
**Example:**
```
"Incident response plan, regular drills, automated detection, forensic capabilities"
```

### 4. Compliance Automation
**Example:**
```
"Automated compliance checks, continuous monitoring, audit trail generation"
```

## Common Use Cases

### 1. Code Security Review
```
"Review pull request for security vulnerabilities before merging"
```

### 2. Infrastructure Security
```
"Audit AWS infrastructure for security misconfigurations"
```

### 3. Penetration Testing
```
"Conduct black-box penetration testing of our web application"
```

### 4. Compliance Audit
```
"Verify SOC 2 Type II compliance for our SaaS platform"
```

### 5. Incident Investigation
```
"Investigate potential data breach and provide forensic analysis"
```

## Security Tools & Standards

- **SAST**: SonarQube, Checkmarx, Snyk Code
- **DAST**: OWASP ZAP, Burp Suite, Acunetix
- **SCA**: Snyk, WhiteSource, Black Duck
- **Standards**: OWASP, NIST, ISO 27001, PCI DSS
- **Frameworks**: MITRE ATT&CK, STRIDE, PASTA

## Tips for Effective Use

1. **Provide context** - Industry, compliance requirements, threat landscape
2. **Specify scope** - What to test, depth of assessment
3. **Include timeline** - Urgent fixes vs. planned improvements
4. **Define risk tolerance** - Acceptable risk levels
5. **Request documentation** - Detailed findings and remediation steps

## Common Pitfalls to Avoid

1. **Security as afterthought** - Integrate early in SDLC
2. **Ignoring dependencies** - Scan third-party libraries
3. **Weak authentication** - Implement MFA, strong passwords
4. **Missing monitoring** - Log and alert on security events
5. **Poor key management** - Use proper key rotation and storage

## Related Agents
- **backend-architect**: Secure architecture design
- **cloud-architect**: Infrastructure security
- **devops-incident-responder**: Incident response
- **qa-expert**: Security testing
- **code-reviewer**: Secure code review