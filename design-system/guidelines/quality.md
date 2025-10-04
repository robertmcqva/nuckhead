# Quality Assurance Checklist

## Pre-Development Planning

### Design System Compliance
- [ ] All design tokens defined and documented
- [ ] 8px spacing scale established and enforced
- [ ] Typography scale (1.125-1.2 modular) implemented
- [ ] Color palette with semantic meanings defined
- [ ] Component states documented (default, hover, focus, active, disabled)
- [ ] Responsive breakpoints defined (600px, 960px, 1280px, 1920px)

## Development Quality Gates

### Code Review Checklist

#### Design System Adherence
- [ ] **No arbitrary values** - all spacing/sizing uses design tokens
- [ ] **8px grid alignment** - no 1-3px nudges for "visual alignment"
- [ ] **Typography scale compliance** - font sizes from predefined scale
- [ ] **Color usage** - semantic colors used appropriately
- [ ] **Touch targets** - minimum 44×44px on mobile

#### Performance Requirements
- [ ] **Critical CSS/JS ≤100KB** - initial bundle size optimized
- [ ] **LCP ≤2.5s** - largest contentful paint under target
- [ ] **CLS <0.1** - cumulative layout shift minimal
- [ ] **INP <200ms** - interaction to next paint responsive
- [ ] **Images optimized** - modern formats (AVIF/WebP), srcset, lazy loading

#### Accessibility (WCAG AA)
- [ ] **Semantic HTML** used before ARIA
- [ ] **Keyboard navigation** - Tab order follows visual order
- [ ] **Focus management** - visible focus rings, proper flow
- [ ] **Color contrast** - 4.5:1 normal text, 3:1 large text
- [ ] **Screen reader** - proper labels, live regions for updates
- [ ] **Error handling** - descriptive, associated with form fields

#### Responsive Design
- [ ] **Mobile-first approach** - base styles for mobile, enhance for desktop
- [ ] **Touch targets** - 44×44px minimum, 8px spacing between
- [ ] **Layout shifts prevented** - reserved space for images/content
- [ ] **Fluid typography** - clamp() for responsive font sizing
- [ ] **Container queries** used where appropriate

## Component Quality Standards

### Button Components
- [ ] **Hierarchy respected** - one primary per view
- [ ] **Touch targets** - 44×44px minimum
- [ ] **States defined** - default, hover, focus, active, disabled, loading
- [ ] **Keyboard support** - Enter/Space activation
- [ ] **Loading states** - disabled with spinner for async actions
- [ ] **Descriptive labels** - "Create Invoice" not "Submit"

### Form Components
- [ ] **Labels always visible** - no placeholder-only labels
- [ ] **Validation timing** - format on blur, business rules on submit
- [ ] **Error association** - aria-describedby linking errors to fields
- [ ] **Required indicators** - multiple cues (*, "required", aria-required)
- [ ] **Auto-save** - for long forms, with status indication
- [ ] **Progressive disclosure** - chunk fields, multi-step for >8 fields

### Navigation Components
- [ ] **Skip links** - "Skip to content" for main areas
- [ ] **Landmark regions** - header, nav, main, aside, footer
- [ ] **Breadcrumbs** - for deep hierarchies (>3 levels)
- [ ] **Active states** - clear indication of current page/section
- [ ] **Responsive behavior** - collapse/hamburger on mobile

### Data Display
- [ ] **Table structure** - proper th/td, scope attributes
- [ ] **Progressive disclosure** - pagination for >50 rows
- [ ] **Empty states** - explanation + CTA + sample data option
- [ ] **Loading states** - skeletons for content, spinners for actions
- [ ] **Error states** - retry mechanism, diagnostic info

## Testing Requirements

### Automated Testing
```bash
# Performance testing
npm run lighthouse:ci
npm run bundle-analyzer

# Accessibility testing  
npm run test:a11y
npx axe-core ./src --tags="wcag2a,wcag2aa"

# Visual regression testing
npm run test:visual
npm run chromatic

# Unit/Integration testing
npm run test:coverage -- --threshold=80
```

### Manual Testing Matrix

#### Browser Support
- [ ] **Chrome** - Latest 2 versions
- [ ] **Firefox** - Latest 2 versions  
- [ ] **Safari** - Latest 2 versions
- [ ] **Edge** - Latest 2 versions
- [ ] **Mobile Safari** - iOS 15+
- [ ] **Chrome Mobile** - Android 10+

#### Screen Sizes
- [ ] **Mobile** - 375px (iPhone SE), 414px (iPhone Pro Max)
- [ ] **Tablet** - 768px (iPad), 1024px (iPad Pro)
- [ ] **Desktop** - 1280px, 1440px, 1920px
- [ ] **Ultra-wide** - 2560px+

#### Accessibility Testing
- [ ] **Screen reader** - VoiceOver (macOS), NVDA (Windows)
- [ ] **Keyboard only** - Tab through entire flow
- [ ] **High contrast** - Windows high contrast mode
- [ ] **Zoom levels** - 150%, 200%, 400% browser zoom
- [ ] **Reduced motion** - prefers-reduced-motion setting

## Content Quality Standards

### Microcopy Guidelines
- [ ] **Plain language** - clear, concise, jargon-free
- [ ] **Action-oriented** - buttons describe outcomes ("Create Invoice")
- [ ] **Consistent terminology** - same words for same concepts
- [ ] **Error messages** - specific, actionable remediation steps
- [ ] **Internationalization ready** - avoid text in images, plan for expansion

### Information Architecture
- [ ] **Logical hierarchy** - H1 → H2 → H3 progression
- [ ] **Scannable content** - bullet points, short paragraphs
- [ ] **Progressive disclosure** - essential info first, details on demand
- [ ] **Consistent navigation** - same patterns across sections

## Performance Budget

### Bundle Size Limits
```json
{
  "javascript": "100KB",
  "css": "50KB", 
  "images": "500KB total",
  "fonts": "100KB (2 families max)"
}
```

### Core Web Vitals Targets
- **LCP**: <2.5s (Largest Contentful Paint)
- **FID**: <100ms (First Input Delay) 
- **CLS**: <0.1 (Cumulative Layout Shift)
- **INP**: <200ms (Interaction to Next Paint)
- **TTFB**: <800ms (Time to First Byte)

### Performance Optimization
- [ ] **Code splitting** - route-based, component-based
- [ ] **Tree shaking** - remove unused code
- [ ] **Image optimization** - WebP/AVIF, responsive images
- [ ] **Font optimization** - subset, preload, font-display: swap
- [ ] **Caching strategy** - service worker, CDN configuration

## Security & Privacy

### Security Checklist
- [ ] **Input validation** - client and server-side
- [ ] **XSS prevention** - sanitize user content
- [ ] **CSRF protection** - tokens for state-changing operations
- [ ] **Content Security Policy** - restrict resource loading
- [ ] **HTTPS everywhere** - all connections encrypted

### Privacy Compliance
- [ ] **Cookie consent** - granular controls where required
- [ ] **Data minimization** - collect only necessary information
- [ ] **PII masking** - sensitive data hidden by default
- [ ] **Consent management** - clear opt-in/opt-out mechanisms

## Launch Readiness

### Pre-Launch Checklist
- [ ] **Analytics setup** - error tracking, user behavior, performance
- [ ] **Monitoring** - uptime, performance, error rates
- [ ] **Backup strategy** - data backup, rollback procedures
- [ ] **Documentation** - user guides, API docs, troubleshooting
- [ ] **Support readiness** - help desk, FAQ, contact methods

### Post-Launch Monitoring
- [ ] **User feedback** - surveys, support tickets, usage analytics
- [ ] **Performance metrics** - Core Web Vitals, error rates
- [ ] **A/B test results** - conversion rates, user satisfaction
- [ ] **Accessibility audits** - ongoing compliance monitoring

## Quality Gates Summary

### ❌ Blockers (Must Fix Before Ship)
- WCAG AA violations
- Core Web Vitals failures
- Broken keyboard navigation
- Mobile usability issues
- Security vulnerabilities

### ⚠️ Warnings (Should Fix)
- Performance budget overages
- Minor accessibility improvements
- Suboptimal UX patterns
- Inconsistent design system usage

### ✅ Nice to Have
- AAA accessibility features
- Advanced performance optimizations
- Enhanced animations
- Additional device testing

## Review Templates

### Design Review Template
```markdown
## Design System Compliance
- [ ] Spacing uses 8px grid
- [ ] Typography from modular scale
- [ ] Colors from defined palette
- [ ] Component states designed

## User Experience
- [ ] User flow is logical
- [ ] Progressive disclosure applied
- [ ] Error states designed
- [ ] Empty states included

## Accessibility
- [ ] Color contrast verified
- [ ] Focus states designed
- [ ] Touch targets ≥44px
- [ ] Text readable at 150% zoom
```

### Code Review Template
```markdown
## Code Quality
- [ ] No arbitrary values (spacing, colors, etc.)
- [ ] Performance budget respected
- [ ] Accessibility requirements met
- [ ] Error handling implemented

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] Accessibility tested
```