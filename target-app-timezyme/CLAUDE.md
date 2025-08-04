# CLAUDE.md


This file provides guidance to Claude Code and its subagents for **TimeZyme**, a SaaS app built with Nuxt 4, Vue 3, Tailwind CSS 4, Nuxt UI Pro, Polar, and Cloudflare Workers/D1/R2/KV. It serves as the central knowledge base, proactively maintained by the **`Indexer`** subagent through periodic **Knowledge Synthesis Runs** to ensure all best practices are up-to-date.

## Available Agents

TimeZyme has TWO sets of agents: generic and TimeZyme-specific.

### TimeZyme-Specific Agents (Use These!)
These agents have deep knowledge of TimeZyme's codebase and tech stack:

1. **timezyme-nuxt4-specialist** - Nuxt 4, Vue 3, Nuxt UI Pro (NOT Shadcn!)
2. **timezyme-edge-specialist** - Cloudflare Workers, D1, R2, KV
3. **polar-billing-specialist** - Polar SDK, subscriptions, billing
4. **timezyme-saas-architect** - Multi-tenancy, DDD, feature flags
5. **timezyme-test-guardian** - E2E testing, test verification
6. **i18n-accessibility-champion** - i18n, WCAG, RTL support

## 🚨 Critical Requirements

### Test Requirements for All Tasks
**MANDATORY**: The codebase has working authentication, payment integration (Polar), and admin functionality that MUST NOT be broken.

#### Before Starting Any Task
1. Understand existing features are working and tested.  
2. Review test suite in `/app/e2e/tests/` for critical functionality.  
3. Run `./scripts/health-check.sh` to verify system health.

#### After Completing Any Task
**You MUST run:**
```bash
./scripts/post-task-verify.sh        # Quick verification (TypeScript, lint, auth)
./scripts/post-task-verify.sh --full # Full test suite (includes E2E tests)
```
If **ANY** tests fail, fix issues before considering the task complete.

#### Critical Features That Must Not Break
1. **Authentication**: Login with `demo-user@nuxtstarterkit.com` must work (`NUXT_PUBLIC_AUTH_ENABLED=true` on preview site; main branch in marketing mode).  
   - Demo User: `demo-user@nuxtstarterkit.com` / `demoUserNuxtStarterKit`  
   - Demo Admin: `demo-admin@nuxtstarterkit.com` / `demoAdminNuxtStarterKit0815#`
2. **Payment System**: Polar integration on `/pricing` and `/dashboard/billing`.  
3. **Admin Access**: Admin functionality for `demo-admin@nuxtstarterkit.com` (enabled on preview site).  
4. **Protected Routes**: `/dashboard` redirects to login when unauthenticated (enabled on preview site).  
5. **Database Integrity**: Demo users must remain in D1 database.  
6. **Note**: A previous session deleted the database, causing data loss. The test suite prevents this.

#### Critical Port Requirement
- Development server MUST run on port **9009**.  
- If port 9009 is in use:  
  1. Kill process: `lsof -i :9009 | grep LISTEN | awk '{print $2}' | xargs -r kill -9`  
  2. Run `./scripts/dev-stop.sh` to clean up.  
  3. Start with `./scripts/dev-start.sh`.

---

## Project Overview

TimeZyme is a Nuxt 4 SaaS app with a layered, modular architecture. Documentation is in `/doc/TimeZyme-*`.

- **Tech Stack**: Nuxt 4, Vue 3, Tailwind CSS 4, Nuxt UI Pro, Polar, Cloudflare Workers/D1/R2/KV, Drizzle ORM, `@nuxtjs/i18n`.  
- **Architecture**: Domain-driven design, SOLID principles, TypeScript strict types.  
- **Deployment**: NuxtHub with Cloudflare bindings (D1, R2, KV).

---

## Project Context
```json
{
  "files": ["/app/pages/index.vue", "/server/api/v1", "/drizzle", "/locales"],
  "dependencies": ["nuxt-auth-utils", "@polar-sdk", "@nuxt/image", "drizzle-orm", "@nuxtjs/i18n"],
  "recent_changes": []
}
```

---

## Best Practices
This section is a structured knowledge index. Subagents should perform an internal search using relevant tags to find actionable best practices for their current task.

### Frontend Practices

#### Chunk: Nuxt 4 Performance Fundamentals
- **Summary**: Use Nuxt 4 with lazy loading, code splitting, and server-side rendering (SSR) using `<script setup>` and `useFetch` to optimize performance.
- **Tags**: `nuxt4`, `performance`, `lazy-loading`, `code-splitting`, `ssr`, `useFetch`
- **Source**: https://nuxt.com/docs/4.x/guide/best-practices/performance
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Vue 3 Composition API & TypeScript
- **Summary**: Follow Vue 3 Composition API with strict TypeScript types (e.g., `interface User { id: string }`) and composables (e.g., `useI18n`) for type-safe, reusable logic.
- **Tags**: `vue3`, `composition-api`, `typescript`, `composables`, `type-safety`
- **Source**: https://vuejs.org/guide/typescript/composition-api.html
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Tailwind CSS 4 Utility-First Patterns
- **Summary**: Apply Tailwind CSS 4 utility-first patterns with custom design tokens defined in `tailwind.config.js` (e.g., `bg-primary-50`) for a consistent design system.
- **Tags**: `tailwindcss4`, `utility-first`, `design-system`, `theming`
- **Source**: https://tailwindcss.com/docs/utility-first
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Nuxt UI Pro for Component Development
- **Summary**: Leverage pre-built, accessible components from Nuxt UI Pro to ensure UI consistency and WCAG 2.1 AA compliance.
- **Tags**: `nuxt-ui-pro`, `component`, `ui-library`, `accessibility`, `wcag`
- **Source**: https://ui.nuxt.com/getting-started
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Progressive Web App (PWA) Implementation
- **Summary**: Implement PWA capabilities using the `@nuxt/pwa` module to enable offline support and install prompts.
- **Tags**: `pwa`, `nuxt-pwa`, `offline-support`, `service-worker`
- **Source**: https://context7.com/nuxt-community/pwa-module
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Mobile-First Responsive Design
- **Summary**: Follow a mobile-first strategy using Tailwind’s breakpoint utilities (e.g., `sm:`, `md:`, `lg:`) to ensure a seamless experience across devices.
- **Tags**: `responsive-design`, `mobile-first`, `tailwindcss4`, `breakpoints`
- **Source**: https://tailwindcss.com/docs/responsive-design
- **Last Updated**: `2025-07-29T20:35:00Z`

### Backend

#### Chunk: RESTful API Design Conventions
- **Summary**: Design RESTful APIs using `/api/v1/resource` conventions and adhere to JSON:API or OpenAPI 3.1 specifications for consistency and interoperability.
- **Tags**: `backend`, `api-design`, `restful`, `openapi`, `json-api`
- **Source**: https://swagger.io/specification/
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Zod Schema Validation
- **Summary**: Use Zod for comprehensive, type-safe validation of API request bodies, query parameters, and environment variables.
- **Tags**: `zod`, `validation`, `api-security`, `type-safety`, `backend`
- **Source**: https://zod.dev/
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: API Versioning Strategy
- **Summary**: Implement API versioning through URL pathing (e.g., `/api/v2/`) to manage breaking changes without disrupting existing client integrations.
- **Tags**: `api-versioning`, `backend`, `api-design`
- **Source**: https://restfulapi.net/versioning/
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Cloudflare Workers Optimization
- **Summary**: Optimize backend functions for Cloudflare Workers by keeping bundles small and leveraging edge caching for static responses.
- **Tags**: `cloudflare-workers`, `performance`, `edge-computing`, `bundle-size`
- **Source**: https://developers.cloudflare.com/workers/
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Structured Logging
- **Summary**: Implement structured JSON logging for all backend services and deploy it through Cloudflare Logs for effective monitoring and debugging.
- **Tags**: `logging`, `observability`, `cloudflare-workers`, `debugging`, `json`
- **Source**: https://developers.cloudflare.com/logs/
- **Last Updated**: `2025-07-29T20:35:00Z`

### SaaS Logic

#### Chunk: Multi-Tenancy Architecture
- **Summary**: Design database schema and application logic for multi-tenancy by including a `tenant_id` in all relevant D1 tables to ensure data isolation.
- **Tags**: `multi-tenancy`, `saas`, `database-design`, `d1`, `data-isolation`
- **Source**: https://developers.cloudflare.com/reference-architecture/design-guides/leveraging-cloudflare-for-your-saas-applications/, https://developers.cloudflare.com/reference-architecture/diagrams/serverless/programmable-platforms/?utm_source=chatgpt.com
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Polar Subscription and Billing
- **Summary**: Use the Polar SDK for managing subscription flows. Implement robust webhook handling with retry logic and maintain strict separation between sandbox and production.
- **Tags**: `polar`, `billing`, `subscription`, `saas`, `webhook`, `payment`
- **Source**: https://docs.polar.sh/
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Feature Flag Implementation
- **Summary**: Implement feature flags using either the Nuxt runtime configuration or Cloudflare KV for gradual rollouts and A/B testing of new features.
- **Tags**: `feature-flags`, `saas`, `ci-cd`, `rollout`, `cloudflare-kv`
- **Source**: https://developers.cloudflare.com/kv/
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Customer Onboarding Flow
- **Summary**: Build intuitive onboarding (setup wizards, product tours) using Nuxt UI components like Modal and Stepper.
- **Tags**: `onboarding`, `ux`, `saas`, `nuxt-ui`
- **Source**: https://ui.nuxt.com/components/modal
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Umami Analytics Integration
- **Summary**: Integrate Umami for privacy-focused, client-side analytics. Ensure tracking activates only after user consent (GDPR).
- **Tags**: `analytics`, `umami`, `privacy`, `gdpr`
- **Source**: https://umami.is/docs/
- **Last Updated**: `2025-07-29T20:35:00Z`

### Infrastructure

#### Chunk: D1 Query Optimization with Drizzle
- **Summary**: Use Drizzle ORM for all database interactions to ensure type-safe, efficient queries against Cloudflare D1.
- **Tags**: `d1`, `drizzle-orm`, `database`, `query-optimization`, `type-safety`
- **Source**: https://orm.drizzle.team/docs/get-started-sqlite#better-sqlite3
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: R2 Image Storage
- **Summary**: Use Cloudflare R2 for user-uploaded images and serve them efficiently using `@nuxt/image` for on-the-fly optimization.
- **Tags**: `r2`, `image-storage`, `file-uploads`, `nuxt-image`, `performance`
- **Source**: https://developers.cloudflare.com/r2/
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Cloudflare KV for Configuration
- **Summary**: Store app configuration and feature flags in Cloudflare KV using distinct namespaces. Be mindful of eventual consistency.
- **Tags**: `cloudflare-kv`, `configuration`, `feature-flags`, `eventual-consistency`
- **Source**: https://developers.cloudflare.com/kv/
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: NuxtHub Deployment with IaC
- **Summary**: Manage deployments to NuxtHub using IaC principles, with Cloudflare bindings defined in `wrangler.toml`.
- **Tags**: `nuxthub`, `deployment`, `iac`, `wrangler`, `ci-cd`
- **Source**: https://hub.nuxt.com/docs/getting-started
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: CI/CD with GitHub Actions
- **Summary**: Set up robust CI/CD using GitHub Actions that enforce TDD by running the full test suite and linting on every push.
- **Tags**: `ci-cd`, `github-actions`, `testing`, `tdd`, `linting`
- **Source**: https://docs.github.com/en/actions
- **Last Updated**: `2025-07-29T20:35:00Z`

### Security & Compliance

#### Chunk: OWASP Top 10 Adherence
- **Summary**: Adhere to OWASP Top 10 guidelines: input sanitization (beyond Zod), secure headers (CSP, HSTS), prevent injection attacks.
- **Tags**: `security`, `owasp`, `input-sanitization`, `csp`, `headers`
- **Source**: https://owasp.org/www-project-top-ten/
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Authentication with `nuxt-auth-utils`
- **Summary**: Use `nuxt-auth-utils` for secure authentication (JWT generation/validation, session management). Ensure proper token refresh and revocation handling.
- **Tags**: `authentication`, `nuxt-auth-utils`, `jwt`, `session-management`, `security`
- **Source**: https://github.com/Atinux/nuxt-auth-utils, https://nuxt-security.vercel.app/getting-started/installation
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: GDPR Data Retention Policy
- **Summary**: Implement a GDPR-compliant data retention policy that deletes user data after 30 days of inactivity or upon request.
- **Tags**: `gdpr`, `compliance`, `data-retention`, `privacy`
- **Source**: https://gdpr.eu/tag/gdpr/
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Secure File Uploads to R2
- **Summary**: Secure file uploads with strict server-side validation of file size and MIME type before storing in R2.
- **Tags**: `security`, `file-uploads`, `r2`, `validation`
- **Source**: https://developers.cloudflare.com/r2/objects/
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: API Key and Secret Management
- **Summary**: Manage third-party API keys and secrets with Cloudflare Workers secrets. Implement rotation for critical keys.
- **Tags**: `secrets-management`, `security`, `api-keys`, `cloudflare-workers`
- **Source**: https://developers.cloudflare.com/workers/configuration/secrets/, https://developers.cloudflare.com/secrets-store/integrations/workers/,
- **Last Updated**: `2025-07-29T20:35:00Z`

### SEO

#### Chunk: SEO with `@nuxtjs/seo`
- **Summary**: Use the Nuxt SEO module to manage meta tags, generate sitemaps, and set canonical URLs for all public pages.
- **Tags**: `seo`, `nuxt-seo`, `meta-tags`, `sitemap`, `canonical-url`
- **Source**: https://nuxtseo.com/docs/nuxt-seo/getting-started/introduction
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: SEO Content Optimization
- **Summary**: Optimize titles and meta descriptions with relevant keywords to improve rankings and CTR.
- **Tags**: `seo`, `content-strategy`, `keywords`
- **Source**: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- **Last Updated**: `2025-07-29T20:35:00Z`

### Internationalization

#### Chunk: i18n with `@nuxtjs/i18n`
- **Summary**: Use the official Nuxt i18n module for locale switching; manage translations in JSON files within `/locales`.
- **Tags**: `i18n`, `nuxt-i18n`, `localization`, `translation`
- **Source**: https://i18n.nuxtjs.org/docs/getting-started
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Right-to-Left (RTL) Language Support
- **Summary**: Ensure proper layout/styling for RTL languages by using Tailwind’s logical/RTL-aware utilities (e.g., `start`/`end`) and `rtl:` variants.
- **Tags**: `i18n`, `rtl`, `tailwindcss4`, `accessibility`
- **Source**: https://tailwindcss.com/docs/top-right-bottom-left
- **Last Updated**: `2025-07-29T20:35:00Z`

### Customer Support

#### Chunk: Live Chat Integration
- **Summary**: Integrate a third-party live chat (e.g., Crisp or Intercom) to provide real-time support.
- **Tags**: `customer-support`, `live-chat`, `integration`, `ux`
- **Source**: https://crisp.chat/en/
- **Last Updated**: `2025-07-29T20:35:00Z`

#### Chunk: Support Ticket System
- **Summary**: Implement a support ticket submission system using Nuxt UI Form, ensuring requests are logged and tracked.
- **Tags**: `customer-support`, `ticketing-system`, `nuxt-ui`, `forms`
- **Source**: https://ui.nuxt.com/components/form
- **Last Updated**: `2025-07-29T20:35:00Z`

---

## Development Guidelines
- **Debugging Principle**: Do not assume variable values from documentation. Test in the preview environment (e.g., `NUXT_PUBLIC_AUTH_ENABLED=true`).  
- **TypeScript**: Use strict type safety and proper type definitions.  
- **Testing**: Follow TDD; run `./scripts/post-task-verify.sh --full` after changes.  
- **Code Style**: Use ESLint, Prettier, and `pnpm lint:fix`.

---

## Essential Commands

### Development
```bash
pnpm dev       # Start dev server on port 9009
pnpm build     # Build for production
pnpm preview   # Preview production build
pnpm typecheck # TypeScript type checking
pnpm lint      # ESLint
pnpm lint:fix  # ESLint with auto-fix
```
