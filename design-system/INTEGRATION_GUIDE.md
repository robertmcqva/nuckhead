# Design System Integration Guide

## 🚀 Quick Start

### 1. Import Design Tokens
```typescript
// Import design tokens in your components
import { spacing, colors, typography } from './design-system'

// Example usage
const Button = styled.button`
  padding: ${spacing[4]} ${spacing[6]};  // 16px 24px
  background: ${colors.brand[500]};
  font-size: ${typography.fontSize.base};
  border-radius: ${borderRadius.lg};
`
```

### 2. Use with Tailwind CSS
Our Tailwind config already enforces the design system:
```typescript
// These classes now use our design system values
<div className="p-6 bg-brand-500 text-base rounded-lg">
  {/* 24px padding, brand color, 16px text, 12px radius */}
</div>
```

### 3. TypeScript Support
```typescript
import type { SpacingScale, BrandColor, FontSize } from './design-system'

interface ComponentProps {
  spacing?: SpacingScale    // Only accepts valid spacing keys
  color?: BrandColor        // Only accepts valid brand colors
  fontSize?: FontSize       // Only accepts valid font sizes
}
```

## 📋 Migration Strategy

### Phase 1: Foundation Setup ✅
- [x] Design tokens created (`design-system/foundations/`)
- [x] Tailwind config updated with design system values
- [x] Guidelines documentation created
- [x] TypeScript types for design tokens

### Phase 2: Component Migration (Next Steps)
1. **Audit existing components** for arbitrary values
2. **Replace hardcoded values** with design tokens
3. **Add accessibility** compliance (WCAG AA)
4. **Implement proper states** (hover, focus, error, loading)
5. **Add keyboard navigation** support

### Phase 3: Quality Enforcement
1. **ESLint rules** to prevent arbitrary values
2. **Pre-commit hooks** for accessibility testing
3. **CI/CD integration** for performance budgets
4. **Visual regression testing** setup

## 🛠️ Development Workflow

### Before Starting Any Component:
1. **Read the guidelines**: Check `design-system/guidelines/`
2. **Review Copilot instructions**: `design-system/COPILOT_INSTRUCTIONS.md`
3. **Plan with tokens**: Use design system values only
4. **Design all states**: Default, hover, focus, error, loading

### While Developing:
```typescript
// ✅ Good: Using design tokens
import { spacing, colors } from './design-system'

const styles = {
  padding: spacing[6],        // 24px
  backgroundColor: colors.brand[500],
  color: colors.neutral[0]    // White
}

// ❌ Bad: Arbitrary values
const badStyles = {
  padding: '23px',           // Not on 8px grid
  backgroundColor: '#0ea5e9', // Hardcoded color
  color: '#ffffff'           // Hardcoded color
}
```

### Component Example:
```typescript
import React from 'react'
import { spacing, colors, typography, borderRadius } from './design-system'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  ...props
}) => {
  const baseStyles = {
    fontFamily: typography.fontFamily.sans,
    fontSize: size === 'sm' ? typography.fontSize.sm : typography.fontSize.base,
    borderRadius: borderRadius.lg,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 150ms ease-in-out',
    // Minimum touch target
    minHeight: '44px',
    minWidth: '44px',
  }

  const variantStyles = {
    primary: {
      backgroundColor: disabled ? colors.neutral[300] : colors.brand[500],
      color: colors.neutral[0],
      padding: `${spacing[3]} ${spacing[6]}`, // 12px 24px
    },
    secondary: {
      backgroundColor: 'transparent',
      color: disabled ? colors.neutral[400] : colors.brand[600],
      border: `1px solid ${disabled ? colors.neutral[300] : colors.brand[600]}`,
      padding: `${spacing[3]} ${spacing[6]}`,
    }
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      style={{
        ...baseStyles,
        ...variantStyles[variant]
      }}
      {...props}
    >
      {children}
    </button>
  )
}
```

## 🎯 Enforcement Tools

### ESLint Rules (Recommended)
```javascript
// .eslintrc.js additions
module.exports = {
  rules: {
    // Prevent arbitrary values in Tailwind
    'tailwindcss/no-arbitrary-value': 'error',
    
    // Ensure accessibility
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': 'error',
  }
}
```

### Pre-commit Hooks
```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{ts,tsx,html}": [
      "axe-core --tags wcag2a,wcag2aa"
    ]
  }
}
```

## 📊 Monitoring & Metrics

### Performance Monitoring
```typescript
// Set up performance budgets
const performanceBudgets = {
  javascript: 100 * 1024,  // 100KB
  css: 50 * 1024,          // 50KB
  images: 500 * 1024,      // 500KB
  fonts: 100 * 1024       // 100KB
}
```

### Accessibility Testing
```bash
# Automated accessibility testing
npm run test:a11y

# Manual testing checklist
npm run dev
# 1. Tab through all interactive elements
# 2. Test with screen reader (VoiceOver/NVDA)
# 3. Verify color contrast
# 4. Test at 200% zoom
```

## 🎨 Design Handoff Process

### For Designers:
1. **Use design tokens** in Figma/design tools
2. **Specify states** for all interactive elements
3. **Include accessibility notes** (contrast, focus states)
4. **Design empty and error states**
5. **Consider mobile touch targets** (44px minimum)

### For Developers:
1. **Validate design** against design system guidelines
2. **Check accessibility** requirements are met
3. **Verify responsive** behavior at all breakpoints
4. **Test keyboard navigation** before code review
5. **Document any deviations** from design system

## 🚨 Common Pitfalls to Avoid

### ❌ Don't Do This:
```css
/* Arbitrary values */
.component {
  padding: 23px;
  margin: 15px;
  color: #3a7bd4;
  font-size: 15px;
}

/* Missing focus states */
.button:focus {
  outline: none; /* Never remove completely */
}

/* Hardcoded breakpoints */
@media (max-width: 768px) {
  /* Use design system breakpoints */
}
```

### ✅ Do This Instead:
```css
/* Design system values */
.component {
  padding: var(--spacing-6); /* 24px */
  margin: var(--spacing-4);  /* 16px */
  color: var(--brand-500);
  font-size: var(--text-base); /* 16px */
}

/* Proper focus states */
.button:focus-visible {
  outline: 2px solid var(--focus-ring-color);
  outline-offset: 2px;
}

/* Design system breakpoints */
@media (min-width: var(--breakpoint-md)) {
  /* 960px from design system */
}
```

## 📚 Resources & References

### Documentation Links:
- **Design Guidelines**: `design-system/guidelines/`
- **Component Patterns**: `design-system/guidelines/components.md`
- **Accessibility**: `design-system/guidelines/accessibility.md`
- **Quality Checklist**: `design-system/guidelines/quality.md`

### External Resources:
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design](https://material.io/design)
- [Inclusive Components](https://inclusive-components.design/)

### Tools & Testing:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Wave Web Accessibility Evaluator](https://wave.webaim.org/)

## 🎉 Success Criteria

### You'll Know You're Successful When:
- ✅ Zero arbitrary values in your CSS
- ✅ All components pass WCAG AA accessibility tests
- ✅ Performance budgets consistently met
- ✅ Keyboard navigation works everywhere
- ✅ Design system tokens used consistently
- ✅ Touch targets ≥44px on mobile
- ✅ Error states designed and implemented
- ✅ Loading states prevent user confusion

**Remember: This design system is not just documentation—it's a quality assurance tool that ensures we ship professional, accessible, high-performing web applications every time.**