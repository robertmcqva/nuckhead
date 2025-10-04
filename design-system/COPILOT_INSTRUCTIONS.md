# Copilot Design System Instructions

## 🎯 Core Mission
Follow these battle-tested UI principles to ensure consistent, accessible, and high-quality design decisions. When building components or making design corrections, **always reference these guidelines first**.

## 📐 Design System Foundations (MANDATORY)

### Use Design Tokens Only
```typescript
// ✅ ALWAYS use design tokens
import { spacing, colors, typography } from './design-system/foundations/tokens'

// ❌ NEVER use arbitrary values
const badStyle = { padding: '23px', color: '#3a7bd4' }

// ✅ USE predefined tokens
const goodStyle = { 
  padding: spacing[6], // 24px
  color: colors.brand[500] 
}
```

### 8px Spacing Scale (STRICT RULE)
- **ONLY use multiples of 8px**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96
- **No arbitrary values** like 13px, 25px, 37px
- **Grid alignment**: All elements snap to 8px grid

### Typography Scale
- **Base font: 16px** (never below 14px for body text)
- **Modular scale: 1.125-1.2** (12, 14, 16, 18, 20, 24, 30, 36px)
- **Line height: 1.4-1.6** for body, 1.2-1.35 for headings
- **Reading width: 60-80ch** for content

## 🎨 Color & Accessibility (NON-NEGOTIABLE)

### Contrast Requirements
- **Normal text: 4.5:1 ratio minimum**
- **Large text (18px+): 3:1 ratio minimum**
- **UI components: 3:1 ratio minimum**
- **Never encode meaning by color alone** - use icons + text

### Focus Management
```css
/* REQUIRED: Always visible focus rings */
.element:focus-visible {
  outline: 2px solid var(--focus-ring-color);
  outline-offset: 2px;
}
/* NEVER remove focus completely */
```

## 📱 Layout & Responsive (CRITICAL RULES)

### Touch Targets
- **Minimum 44×44px** on touch devices
- **48px comfortable**, 56px for primary actions
- **8px minimum spacing** between tappable elements

### Container Patterns
- **Page padding: 24-32px**
- **Card padding: 16-24px**
- **Content max-width: 60-80ch** for reading
- **App shells: 1200-1440px** with fluid columns

### Responsive Breakpoints
```typescript
const breakpoints = {
  mobile: '0-599px',
  tablet: '600-959px', 
  desktop: '960-1279px',
  wide: '1280px+'
}
```

## 🔧 Component Guidelines (ENFORCE THESE)

### Button Hierarchy
- **One primary button per view** - main action only
- **Secondary/tertiary for alternatives**
- **Descriptive labels**: "Create Invoice" not "Submit"
- **Touch target ≥44px**

### Form Requirements
```html
<!-- REQUIRED pattern -->
<label for="email">Email Address</label>
<input id="email" 
       type="email" 
       aria-describedby="email-error"
       required>
<div id="email-error">Error message here</div>
```

### Modal Usage Rules
- **Modals: ≤1 step tasks** (confirmations, quick edits)
- **Drawers: Multi-step processes**
- **Dedicated pages: Complex workflows**

## ⚡ Performance Requirements (STRICT LIMITS)

### Bundle Budgets
- **Critical CSS/JS: ≤100KB**
- **LCP: ≤2.5s**
- **CLS: <0.1**
- **INP: <200ms**

### Optimization Patterns
```typescript
// ✅ Use lazy loading
const LazyComponent = lazy(() => import('./Component'))

// ✅ Optimize images
<img 
  src="image.webp" 
  loading="lazy" 
  width="400" 
  height="300" 
  alt="Descriptive text"
/>
```

## 🎬 Animation Guidelines

### Duration & Easing
- **150-250ms for small UI** (buttons, hovers)
- **250-350ms for modals/drawers**
- **Standard easing: ease-in-out**
- **Honor prefers-reduced-motion**

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🧠 Decision Framework

### When Designing Components:
1. **Check design tokens first** - use existing before creating new
2. **Verify accessibility** - WCAG AA compliance required
3. **Test touch targets** - 44px minimum
4. **Validate contrast** - 4.5:1 for normal text
5. **Review keyboard flow** - Tab order logical
6. **Check responsive** - works at all breakpoints

### When Writing Code:
1. **Use semantic HTML** before ARIA
2. **Import design tokens** - no arbitrary values
3. **Add proper labels** - screen reader compatible
4. **Test keyboard navigation** - all functionality accessible
5. **Optimize performance** - lazy load, optimize images
6. **Error handling** - graceful degradation

## 🚨 Quality Gates (MUST PASS)

### Before Any Component Ships:
- [ ] Uses design system tokens (no arbitrary values)
- [ ] WCAG AA accessibility verified
- [ ] Keyboard navigation tested
- [ ] Touch targets ≥44px on mobile
- [ ] Performance budget respected
- [ ] All states designed (hover, focus, error, loading)
- [ ] Responsive behavior verified
- [ ] Error handling implemented

### Red Flags (FIX IMMEDIATELY):
- ❌ Arbitrary spacing values (13px, 25px, etc.)
- ❌ Missing focus indicators
- ❌ Text contrast below 4.5:1
- ❌ Touch targets below 44px
- ❌ Layout shifts on load
- ❌ Missing error states
- ❌ Keyboard inaccessible functionality

## 📚 Quick Reference Numbers

```typescript
// Golden Numbers - Memorize These
const GOLDEN_NUMBERS = {
  baseFontSize: '16px',
  touchTarget: '44px',
  pagepadding: '24px',
  cardPadding: '16px',
  textContrast: '4.5:1',
  largeTextContrast: '3:1',
  animationFast: '150ms',
  animationNormal: '250ms',
  focusRingWidth: '2px',
  focusRingOffset: '2px',
  readingWidth: '65ch',
  contentMaxWidth: '1200px'
}
```

## 🔍 Implementation Checklist

### Every Time You Code:
1. ✅ Import design tokens: `import { spacing, colors } from './design-system/foundations/tokens'`
2. ✅ Use semantic HTML: `<button>` not `<div role="button">`
3. ✅ Add proper labels: `aria-label`, `aria-describedby`
4. ✅ Check contrast: Use color tokens with verified ratios
5. ✅ Test keyboard: Tab through your component
6. ✅ Responsive design: Mobile-first approach
7. ✅ Performance: Lazy load, optimize images
8. ✅ Error states: Handle all failure scenarios

### File Structure Reference:
```
design-system/
├── foundations/
│   ├── tokens.ts     # Import these tokens
│   ├── colors.ts     # WCAG AA compliant colors
│   └── spacing.ts    # 8px scale
├── guidelines/
│   ├── layout.md     # Spacing & grid rules
│   ├── components.md # Component patterns
│   ├── accessibility.md # A11y requirements
│   └── quality.md    # QA checklist
└── README.md
```

## 🎯 Success Metrics

### Ship Quality Code When:
- Zero arbitrary values in CSS
- 100% keyboard accessible
- WCAG AA compliant (4.5:1 contrast)
- Performance budget met (<100KB critical)
- All component states designed
- Mobile touch targets ≥44px
- Semantic HTML structure
- Progressive enhancement working

**Remember: These are not suggestions - they are requirements for professional, accessible, high-performing web applications.**