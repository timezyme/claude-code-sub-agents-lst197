# UI/UX Documentation for TimeZyme

## Design System Specifications

### Tech Stack
- **Framework**: Nuxt 4 with Vue 3 Composition API
- **UI Library**: Nuxt UI Pro (pre-built accessible components)
- **Styling**: Tailwind CSS 4 with utility-first approach
- **Icons**: Lucide Icons via UIcon component
- **Fonts**: System fonts with Google Fonts preconnection
- **Image Optimization**: @nuxt/image with Cloudflare provider

### Color Palette
- **Primary**: Cyan (#06b6d4 to #22d3ee gradient)
- **Neutral**: Zinc (as configured in app.config.ts)
- **Dark Theme Background**: #0a0a0f (--timezyme-bg-dark)
- **Dark Surface**: #1a1a2e (--timezyme-surface-dark)
- **Accent Colors**:
  - Success: Green (#10b981)
  - Info: Blue (#3b82f6)
  - Warning: Yellow (#eab308)
  - Error: Red (#ef4444)

### Design Tokens
```css
--timezyme-gradient: linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)
--timezyme-bg-dark: #0a0a0f
--timezyme-surface-dark: #1a1a2e
```

### Theme Configuration
- **Border Radius**: 0.25rem (4px) - configured in app.config.ts
- **Toaster Notifications**: 
  - Duration: 5000ms
  - Position: top-right
  - Expand: true
- **Color Mode**: Dark mode default with light mode support
- **View Transitions**: Enabled for smooth page transitions

## UI Component Guidelines

### Component Architecture
- **Composition**: Vue 3 Composition API with `<script setup>`
- **Type Safety**: Strict TypeScript for all components
- **State Management**: Composables pattern (useI18n, useSeoMeta, etc.)
- **Performance**: Lazy loading with `<Lazy*>` prefix components

### Core UI Components
1. **Layout Components**:
   - `UMain`: Main content wrapper
   - `UContainer`: Responsive container with max-width
   - `AppHeader`: Global navigation header
   - `AppFooter`: Global footer
   - `AppBanners`: Announcement/notification banners

2. **Interactive Components**:
   - `UBadge`: Status indicators and labels
   - `UButton`: Primary action buttons with gradient styling
   - `UIcon`: Icon wrapper for Lucide icons
   - `ContactForm`: Contact form with Turnstile captcha
   - `WaitlistForm`: Email capture for early access

3. **Display Components**:
   - `OptimizedImage`: Performance-optimized images
   - `StarsBg`: Animated background effect
   - `PreviewModeBanner`: Environment indicator
   - `ProductShowcase`: Feature demonstration

### Component Styling Patterns
- **Gradient Effects**: 
  ```css
  .gradient-text: Background gradient with text clipping
  .gradient-btn: Button with gradient background and hover effects
  .purple-glow: Radial gradient glow effect
  ```

- **Badge Variants**:
  ```css
  .badge-new: Green success indicator
  .badge-hiring: Blue information indicator
  ```

- **Hover States**: Transform and shadow effects on interactive elements
- **Dark Mode**: CSS variables for theme-aware styling

## User Experience Flow

### Page Transitions
- **Layout Transition**: `mode: 'out-in'`, name: 'layout'
- **Page Transition**: `mode: 'out-in'`, name: 'page'
- **View Transitions API**: Enabled for smooth navigation

### Navigation Structure
1. **Landing Layout**: Hero-focused pages (index, marketing)
2. **Default Layout**: Standard pages with header/footer
3. **Dashboard Layout**: Authenticated user area
4. **Auth Layout**: Login/registration flows

### Core User Journeys
1. **Visitor → Lead**:
   - Landing page with value proposition
   - Interactive demos (KnowledgeGraphDemo, ZymeCardDemo)
   - Waitlist signup with email capture

2. **Lead → User**:
   - Authentication flow with nuxt-auth-utils
   - Onboarding with product tours
   - Dashboard access

3. **User → Subscriber**:
   - Pricing page with plan comparison
   - Polar integration for payments
   - Billing management in dashboard

## Responsive Design Requirements

### Breakpoint System (Mobile-First)
- **Base**: 0-639px (Mobile)
- **sm**: 640px+ (Tablet portrait)
- **md**: 768px+ (Tablet landscape)
- **lg**: 1024px+ (Desktop)
- **xl**: 1280px+ (Wide desktop)
- **2xl**: 1536px+ (Ultra-wide)

### Responsive Patterns
1. **Typography Scaling**:
   ```html
   <h1 class="text-5xl md:text-7xl">
   <h2 class="text-4xl md:text-6xl">
   <p class="text-xl">
   ```

2. **Grid Layouts**:
   ```html
   <div class="grid md:grid-cols-3 gap-8">
   ```

3. **Container Widths**:
   - Max-width constraints with UContainer
   - Padding: `px-4` on mobile, responsive increases

4. **Component Adaptations**:
   - Stack on mobile, side-by-side on desktop
   - Collapsible navigation on mobile
   - Touch-friendly tap targets (min 44x44px)

## Accessibility Standards

### WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Focus Indicators**: Visible focus states on all interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Semantic HTML and ARIA labels

### Implementation Guidelines
1. **Semantic HTML**: Use proper heading hierarchy and landmarks
2. **ARIA Labels**: Descriptive labels for icons and interactive elements
3. **Alt Text**: Meaningful descriptions for all images
4. **Form Accessibility**: 
   - Label associations
   - Error messages
   - Required field indicators
5. **Motion Preferences**: Respect `prefers-reduced-motion`

### Nuxt UI Pro Accessibility Features
- Pre-built accessible components
- Keyboard navigation support
- Screen reader announcements
- Focus management in modals and dropdowns

### Testing Requirements
- Automated accessibility testing in CI/CD
- Manual testing with screen readers
- Keyboard-only navigation testing
- Color contrast validation
