# MccHub Leximius - React Component Library

A professional, accessible, and high-performance React component library built with modern web standards.

## 🎯 Design System

This project follows a **battle-tested design system** with strict guidelines for consistent, accessible UI development. 

### 📐 Key Principles
- **8px spacing rhythm** - All spacing uses multiples of 8px
- **WCAG AA accessibility** - 4.5:1 contrast ratio minimum
- **Token-based design** - No arbitrary values allowed
- **44px touch targets** - Mobile-first responsive design
- **Performance budgets** - <100KB critical resources

### 🚀 Quick Start with Design System
```typescript
// Import design tokens
import { spacing, colors, typography } from './design-system'

// Use in components (TypeScript enforced)
const Button = styled.button`
  padding: ${spacing[4]} ${spacing[6]};  // 16px 24px
  background: ${colors.brand[500]};
  font-size: ${typography.fontSize.base};
`
```

### 📚 Design System Documentation
- **[Copilot Instructions](./design-system/COPILOT_INSTRUCTIONS.md)** - Core guidelines for AI development
- **[Integration Guide](./design-system/INTEGRATION_GUIDE.md)** - Complete setup and usage
- **[Layout Guidelines](./design-system/guidelines/layout.md)** - Spacing and responsive design
- **[Component Patterns](./design-system/guidelines/components.md)** - Usage guidelines
- **[Accessibility Guide](./design-system/guidelines/accessibility.md)** - WCAG AA compliance
- **[Quality Checklist](./design-system/guidelines/quality.md)** - QA requirements

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Quality Assurance
```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Accessibility testing
npm run test:a11y
```

## 🎨 Component Library

### Available Components
- **Button** - Primary, secondary, tertiary variants
- **Input** - Text, email, password with validation
- **Card** - Content containers with consistent styling  
- **Alert** - Success, warning, error, info notifications
- **Badge** - Status indicators and labels
- **Avatar** - User profile images with fallbacks

### Usage Example
```typescript
import { Button, Card, Alert } from './mcchub'

function App() {
  return (
    <Card>
      <Alert variant="success">
        Welcome to MccHub Leximius!
      </Alert>
      <Button variant="primary" size="lg">
        Get Started
      </Button>
    </Card>
  )
}
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 0-599px
- **Tablet**: 600-959px  
- **Desktop**: 960-1279px
- **Wide**: 1280px+

### Touch Targets
- **Minimum**: 44×44px
- **Comfortable**: 48×48px
- **Large**: 56×56px

## ♿ Accessibility

### Standards
- **WCAG 2.1 AA** compliance required
- **Keyboard navigation** for all functionality
- **Screen reader** compatible
- **Focus management** with visible indicators
- **Color-independent** information design

### Testing
```bash
# Automated accessibility testing
npx axe-core ./src --tags="wcag2a,wcag2aa"

# Manual testing checklist in quality.md
```

## ⚡ Performance

### Budgets
- **JavaScript**: <100KB critical
- **CSS**: <50KB
- **Images**: <500KB total
- **Fonts**: <100KB (2 families max)

### Core Web Vitals Targets
- **LCP**: <2.5s
- **FID**: <100ms  
- **CLS**: <0.1
- **INP**: <200ms

## 🚀 Deployment

Deployed on Vercel with automatic deployments from main branch.

### Build Configuration
- **Framework**: Vite + React
- **TypeScript**: Strict mode enabled
- **CSS**: Tailwind + PostCSS
- **Bundle**: ESM + legacy fallbacks

## 📊 Project Structure

```
src/
├── components/          # Shared UI components
├── mcchub/             # Component library
│   ├── components/     # Core components
│   ├── hooks/          # Reusable hooks
│   └── utils/          # Utility functions
├── pages/              # Application pages
├── hooks/              # App-specific hooks
└── utils/              # App utilities

design-system/          # Design system documentation
├── foundations/        # Design tokens
├── guidelines/         # Usage guidelines
└── COPILOT_INSTRUCTIONS.md
```

## 🤝 Contributing

### Before Contributing
1. **Read design system guidelines** in `design-system/`
2. **Follow accessibility requirements** (WCAG AA)
3. **Use design tokens only** (no arbitrary values)
4. **Test keyboard navigation** 
5. **Verify responsive design** at all breakpoints

### Code Quality Requirements
- [ ] TypeScript strict mode compliance
- [ ] ESLint + Prettier formatting
- [ ] WCAG AA accessibility verified
- [ ] Performance budget respected
- [ ] Design system tokens used exclusively
- [ ] Keyboard navigation tested
- [ ] All component states designed

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Links

- **Live Demo**: [nuckhead.vercel.app](https://nuckhead.vercel.app)
- **Repository**: [github.com/robertmcqva/nuckhead](https://github.com/robertmcqva/nuckhead)
- **Design System**: [./design-system/README.md](./design-system/README.md)