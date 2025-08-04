# How to Use: Frontend Developer

## Quick Prompts

### Component Development
- "Create a responsive card component with image, title, description, and CTA button using Vue 3 and Tailwind"
- "Build a multi-step form with validation, file uploads, and progress saving"
- "Create sortable, filterable data table with pagination and export functionality"
- "Build product catalog with filters, cart, and checkout flow"
- "Create admin dashboard with charts, metrics, and real-time updates"

### State Management
- "Set up global state management for user authentication with Pinia in our Nuxt 4 app"
- "Implement shopping cart state with persistence across sessions"
- "Create composable for reusable user data fetching logic"

### UI/UX Implementation
- "Build a real-time collaborative document editor with Vue 3 frontend and WebSocket backend"
- "Create a comprehensive design system with reusable Vue 3 components following our brand guidelines"
- "Implement micro-frontend architecture for our enterprise application with multiple teams"
- "Convert our Nuxt application into a PWA with offline support and push notifications"

### Performance Optimization
- "Our Vue application is slow. Optimize load time and runtime performance to achieve 90+ Lighthouse score"
- "Implement virtual scrolling for lists over 100 items, lazy load routes, optimize images"
- "Implement code splitting and lazy loading for better performance"
- "Optimize bundle size to under 500KB initial load"

### Authentication & Security
- "Implement complete auth flow with login, registration, password reset, and 2FA"
- "Add OAuth2 authentication with Google and GitHub providers"
- "Implement role-based access control in Vue components"

### Data Visualization
- "Implement complex data visualization dashboard with interactive charts"
- "Create real-time monitoring dashboard with WebSocket updates"
- "Build analytics dashboard with customizable widgets"

### Integration
- "Frontend needs to consume GraphQL API with real-time subscriptions"
- "Integrate with REST API using Axios with interceptors for auth"
- "Connect frontend to Cloudflare Workers backend"

### Accessibility
- "Every interactive element must be keyboard accessible with proper ARIA attributes"
- "Ensure WCAG 2.1 AA compliance for all components"
- "Add screen reader support to complex UI components"

### Testing
- "Set up component testing with Vitest and Vue Test Utils"
- "Create E2E tests for critical user flows with Playwright"
- "Implement visual regression testing for UI components"

## Overview
The Frontend Developer agent specializes in Vue 3, Nuxt 4, and modern UI development with a focus on performance, accessibility, and clean architecture. Expert in Composition API, TypeScript, and Tailwind CSS.

## Basic Usage Examples

### Example 1: Create a Responsive Component
**User Prompt:**
```
"Create a responsive card component with image, title, description, and CTA button using Vue 3 and Tailwind"
```

**Frontend Developer Response:**
- Creates type-safe Vue component
- Implements responsive design
- Adds accessibility attributes
- Optimizes for performance

### Example 2: Implement Complex State Management
**User Prompt:**
```
"Set up global state management for user authentication with Pinia in our Nuxt 4 app"
```

**Frontend Developer Actions:**
- Creates Pinia store with TypeScript
- Implements auth actions and getters
- Sets up middleware for route protection
- Adds composables for easy access

## Multi-Agent Collaborative Scenarios

### Scenario 1: Full-Stack Feature Implementation
**User Prompt:**
```
"Build a real-time collaborative document editor with Vue 3 frontend and WebSocket backend"
```

**Frontend Developer Collaboration:**
```
frontend-developer works with:
├── Initial Planning
│   ├── backend-architect: WebSocket API design
│   ├── ui-designer: Editor UI mockups
│   └── ux-designer: Collaboration UX patterns
├── Frontend Implementation
│   ├── frontend-developer: Vue 3 editor component
│   ├── Creates: Collaborative cursor system
│   ├── Implements: Conflict resolution UI
│   └── Adds: Real-time sync indicators
├── Integration Phase
│   ├── With backend-architect: WebSocket client setup
│   ├── With database-optimizer: Optimistic UI updates
│   └── With test-automator: E2E collaboration tests
└── Polish Phase
    ├── With ui-designer: Visual refinements
    ├── With ux-designer: User testing feedback
    └── With performance-engineer: Rendering optimization
```

### Scenario 2: Design System Implementation
**User Prompt:**
```
"Create a comprehensive design system with reusable Vue 3 components following our brand guidelines"
```

**Multi-Agent Workflow:**
```
frontend-developer coordinates with:
├── Design Foundation
│   ├── ui-designer: Design tokens, color system
│   ├── ux-designer: Component behavior patterns
│   └── frontend-developer: Technical architecture
├── Component Development
│   ├── frontend-developer: Core components
│   │   ├── Button, Input, Card components
│   │   ├── Form validation system
│   │   └── Layout components
│   ├── ui-designer: Visual QA
│   └── qa-expert: Cross-browser testing
├── Documentation
│   ├── frontend-developer: Storybook setup
│   ├── documentation-expert: Usage guides
│   └── api-documenter: Component API docs
└── Integration
    ├── full-stack-developer: App integration
    └── test-automator: Component testing
```

### Scenario 3: Performance Optimization Project
**User Prompt:**
```
"Our Vue application is slow. Optimize load time and runtime performance to achieve 90+ Lighthouse score"
```

**Optimization Collaboration:**
```
frontend-developer leads with:
├── Performance Audit
│   ├── frontend-developer: Bundle analysis
│   ├── performance-engineer: Metrics collection
│   └── backend-architect: API performance review
├── Optimization Implementation
│   ├── frontend-developer:
│   │   ├── Code splitting setup
│   │   ├── Lazy loading implementation
│   │   ├── Image optimization
│   │   └── Virtual scrolling
│   ├── backend-architect: API response optimization
│   └── cloud-architect: CDN configuration
├── Validation
│   ├── performance-engineer: Load testing
│   ├── qa-expert: Regression testing
│   └── frontend-developer: Lighthouse audits
└── Monitoring
    ├── frontend-developer: Performance budgets
    └── devops-incident-responder: Alerting setup
```

## Advanced Frontend Patterns

### Pattern 1: Micro-Frontend Architecture
**User Prompt:**
```
"Implement micro-frontend architecture for our enterprise application with multiple teams"
```

**Implementation Strategy:**
```yaml
architecture:
  orchestration:
    - frontend-developer: Module federation setup
    - backend-architect: API gateway design
    - deployment-engineer: CI/CD per micro-app
  
  development:
    - frontend-developer:
        - Shared component library
        - Cross-app communication bus
        - Routing orchestration
        - State synchronization
    - test-automator: Integration testing
    - security-auditor: Security boundaries
```

### Pattern 2: Progressive Web App (PWA)
**User Prompt:**
```
"Convert our Nuxt application into a PWA with offline support and push notifications"
```

**PWA Implementation:**
```yaml
frontend-developer implements:
  service_worker:
    - Caching strategies
    - Offline fallbacks
    - Background sync
  
  features:
    - Install prompts
    - Push notifications with backend-architect
    - Offline data with database-optimizer
  
  testing:
    - With qa-expert: Offline scenarios
    - With test-automator: PWA criteria
```

## Integration Examples

### With Backend Services
**User Prompt:**
```
"Frontend needs to consume GraphQL API with real-time subscriptions"
```

**Integration Flow:**
```
frontend-developer + graphql-architect:
├── Schema Understanding
│   └── Type definitions and operations
├── Client Setup
│   ├── Apollo Client configuration
│   ├── Subscription handling
│   └── Cache management
├── Component Integration
│   ├── Query hooks
│   ├── Mutation handling
│   └── Optimistic updates
└── Error Handling
    ├── Network errors
    └── GraphQL errors
```

### With UI/UX Design
**User Prompt:**
```
"Implement complex data visualization dashboard with interactive charts"
```

**Design Implementation:**
```
frontend-developer + ui-designer + ux-designer:
├── Design Translation
│   ├── Figma to Vue components
│   ├── Responsive breakpoints
│   └── Animation specifications
├── Interactivity
│   ├── Chart interactions
│   ├── Filter system
│   └── Real-time updates
└── Accessibility
    ├── Keyboard navigation
    ├── Screen reader support
    └── ARIA labels
```

## Best Practices

### 1. Component Architecture
**Good Example:**
```vue
// Composable for reusable logic
const useUserData = () => {
  const user = ref(null)
  const loading = ref(false)
  // Logic here
  return { user, loading }
}

// Clean component using composable
<script setup lang="ts">
const { user, loading } = useUserData()
</script>
```

### 2. Type Safety
**Example:**
```
"Always use TypeScript with proper interfaces for props, emits, and API responses"
```

### 3. Performance First
**Example:**
```
"Implement virtual scrolling for lists over 100 items, lazy load routes, optimize images"
```

### 4. Accessibility by Default
**Example:**
```
"Every interactive element must be keyboard accessible with proper ARIA attributes"
```

## Common Use Cases

### 1. Form Handling
```
"Create multi-step form with validation, file uploads, and progress saving"
```

### 2. Data Tables
```
"Build sortable, filterable data table with pagination and export functionality"
```

### 3. Authentication Flow
```
"Implement complete auth flow with login, registration, password reset, and 2FA"
```

### 4. Dashboard Creation
```
"Create admin dashboard with charts, metrics, and real-time updates"
```

### 5. E-commerce UI
```
"Build product catalog with filters, cart, and checkout flow"
```

## Tips for Effective Use

1. **Specify framework versions** - "Use Vue 3.4+ with Composition API"
2. **Include design requirements** - Provide mockups or design system reference
3. **Mention performance targets** - "Must load in under 3 seconds"
4. **Define browser support** - "Support last 2 versions of major browsers"
5. **Clarify state management** - "Use Pinia for global state"

## Common Pitfalls to Avoid

1. **Over-engineering** - Start simple, iterate based on needs
2. **Ignoring accessibility** - Build it in from the start
3. **Poor state management** - Use appropriate tools (Pinia, composables)
4. **Bundle size bloat** - Monitor and optimize regularly
5. **Missing error boundaries** - Handle errors gracefully

## Technology Stack

- **Framework**: Vue 3.4+, Nuxt 4
- **Styling**: Tailwind CSS 3.4+, UnoCSS
- **State**: Pinia, VueUse composables
- **UI Libraries**: Nuxt UI Pro, Headless UI
- **Build Tools**: Vite, Nitro
- **Testing**: Vitest, Playwright

## Related Agents
- **ui-designer**: Visual design and design systems
- **ux-designer**: User experience and interactions
- **backend-architect**: API integration
- **test-automator**: Frontend testing
- **performance-engineer**: Performance optimization