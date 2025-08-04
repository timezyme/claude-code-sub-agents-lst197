# Project Structure

```
timezyme/
├── app/                    # Main application code (Nuxt 4)
├── layers/                 # Modular feature layers
├── server/                 # Server-side API and utilities
├── docs/                   # Project documentation
├── scripts/                # Build and utility scripts
├── PRPs/                   # Product Requirements Proposals
├── planning/               # Planning documents
├── public/                 # Static assets
├── i18n/                   # Internationalization
├── content/                # Content management (Nuxt Content)
├── drizzle.config.ts       # Database ORM configuration
├── nuxt.config.ts          # Main Nuxt configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Detailed Structure

### Application Layer (`/app`)
The main Nuxt 4 application following Vue 3 Composition API patterns:

```
app/
├── assets/                 # Styles and static assets
│   └── css/
│       ├── main.css       # Main stylesheet with Tailwind CSS 4 and Nuxt UI Pro
│       └── critical.css   # Critical CSS for performance optimization
├── components/             # Vue components
│   ├── story/             # Interactive story/demo components
│   │   ├── KnowledgeGraphDemo.vue
│   │   ├── KnowledgeHopDemo.vue
│   │   └── ZymeCardDemo.vue
│   ├── OgImage/           # Open Graph image components
│   ├── ContactForm.vue    # Contact form with Turnstile
│   ├── OptimizedImage.vue # Performance-optimized images
│   ├── StarsBg.vue        # Animated background effect
│   └── FAQ.vue            # Frequently asked questions
├── composables/            # Vue composables for shared logic
│   ├── useAuthFeature.ts
│   ├── usePerformance.ts
│   └── useStoryScenes.ts
├── layouts/                # Nuxt layouts
│   ├── default.vue        # Standard layout with header/footer
│   ├── landing.vue        # Hero-focused marketing layout
│   └── story.vue          # Story presentation layout
├── middleware/             # Route middleware
│   ├── auth-disabled.global.ts
│   └── performance.global.ts.disabled
├── pages/                  # Route pages (file-based routing)
│   ├── index.vue          # Homepage with hero section
│   ├── pricing.vue        # Pricing page with Polar integration
│   ├── story/             # Story presentation routes
│   ├── legal/             # Legal pages (privacy, terms)
│   └── de/                # German localized pages
├── plugins/                # Nuxt plugins
│   └── error-handler.client.ts
├── providers/              # Custom providers
│   └── customCloudflare.ts # Cloudflare image provider
├── server/                 # App-specific server code
│   ├── api/               # API endpoints
│   ├── middleware/        # Server middleware
│   └── utils/             # Server utilities
└── e2e/                   # End-to-end tests (Playwright)
    ├── tests/             # Test specifications
    ├── fixtures/          # Test data and fixtures
    ├── page/              # Page object models
    └── utils/             # Test utilities
```

### Modular Layers (`/layers`)
Self-contained feature modules with domain-driven design:

```
layers/
├── core/                   # Core functionality and shared utilities
│   ├── components/        # Shared UI components (AppHeader, AppFooter, etc.)
│   ├── composables/       # Shared composables (useAppToast, useLogger)
│   ├── server/            # Core API utilities and error handling
│   └── nuxt.config.ts
├── auth/                   # Authentication system
│   ├── middleware/        # Auth middleware (auth.ts, otp.ts)
│   ├── pages/auth/        # Auth pages (login, register, reset-password)
│   ├── server/api/auth/   # Auth endpoints (OAuth, password, OTP)
│   └── nuxt.config.ts
├── dashboard/              # User dashboard and admin panel
│   ├── components/        # Dashboard components
│   ├── pages/dashboard/   # Dashboard pages
│   ├── middleware/        # Admin middleware
│   ├── server/api/admin/  # Admin API endpoints
│   └── nuxt.config.ts
├── db/                     # Database layer (Drizzle ORM + Cloudflare D1)
│   ├── server/utils/      # Database utilities
│   │   ├── db.ts          # Database connection
│   │   ├── schema.ts      # Database schema
│   │   └── use*Db.ts      # Domain-specific DB utilities
│   └── nuxt.config.ts
├── email/                  # Email service integration
│   ├── components/email/  # Email templates (Vue Email)
│   ├── server/providers/  # Email providers (Resend, Plunk)
│   └── nuxt.config.ts
├── payment/                # Payment integration (Polar)
│   ├── components/        # Payment UI components
│   ├── composables/       # Payment composables
│   ├── server/api/payment/ # Payment endpoints and webhooks
│   └── nuxt.config.ts
├── docs/                   # Documentation site (Nuxt Content)
├── testimonials/           # Testimonials feature
└── waitlist/              # Waitlist management
```

### Server Infrastructure (`/server`)
Root-level server code for cross-cutting concerns:

```
server/
├── api/                    # Global API endpoints
│   ├── test/              # Test and debug endpoints
│   ├── health.get.ts      # Health check endpoint
│   └── test-errors.get.ts # Error testing endpoint
├── database/               # Database infrastructure
│   └── migrations/        # Drizzle schema migrations
├── plugins/                # Server plugins (order matters)
│   ├── 00.errorHandler.ts # Global error handling
│   ├── 01.apiErrorWrapper.ts # API error wrapping
│   └── database-env.ts    # Database environment setup
├── routes/                 # Server routes
│   └── images/            # Image proxy for optimization
└── utils/                  # Server utilities
    ├── env.ts             # Environment helpers
    └── secure-auth.ts     # Security utilities
```

### Supporting Directories

**Documentation (`/docs`):**
- `cloudflare/` - Cloudflare setup and configuration
- `db/` - Database guides and references
- `security/` - Security documentation and audits
- `technical/` - Technical implementation guides
- `testing/` - Testing documentation and guides
- `timezyme-biz/` - Business and product documentation

**Scripts (`/scripts`):**
- Development: `dev-start.sh`, `dev-stop.sh`, `dev-preview.sh`
- Database: `db-backup.sh`, `db-restore.sh`, `db-seed.sh`
- Testing: `post-task-verify.sh`, `health-check.sh`
- Deployment: `preview-deploy.sh`, `setup-local.sh`

**Static Assets (`/public`):**
- `images/logo/` - Logo variants for different contexts
- `images/story/` - Story presentation assets (images, videos)
- `images/tz-in-action/` - Product screenshots and demos

**Configuration Files:**
- `nuxt.config.ts` - Main Nuxt 4 configuration
- `app.config.ts` - Runtime app configuration
- `drizzle.config.ts` - Database ORM configuration
- `playwright.config.ts` - E2E test configuration
- `tsconfig.json` - TypeScript strict mode configuration
- `eslint.config.mjs` - ESLint with @antfu/eslint-config
- `tailwind.config.js` - Tailwind CSS 4 configuration (if exists)
- `package.json` - Dependencies and npm scripts

**Development Guidelines:**
- `CLAUDE.md` - AI assistant guidelines and best practices
- `PRPs/` - Product Requirements Proposals for features
- `planning/` - Implementation plans and specifications
