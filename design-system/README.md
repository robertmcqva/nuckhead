# MccHub Leximius Design System

## Overview
This design system ensures consistent, accessible, and high-quality UI development following battle-tested principles for top-tier web applications.

## Directory Structure
```
design-system/
├── foundations/          # Core design tokens and scales
│   ├── tokens.ts        # Design tokens configuration
│   ├── spacing.ts       # 8px spacing scale
│   ├── typography.ts    # Type scale and hierarchy
│   ├── colors.ts        # Color palette and states
│   └── motion.ts        # Animation and timing
├── guidelines/          # Design and development guidelines
│   ├── layout.md        # Layout and spacing guidelines
│   ├── components.md    # Component usage patterns
│   ├── accessibility.md # A11y requirements
│   ├── responsive.md    # Responsive design patterns
│   └── quality.md       # Quality checklist
└── README.md           # This file
```

## Core Principles
1. **Token-based design**: Everything references tokens, never ad-hoc values
2. **8px spacing scale**: All spacing based on 8px multiples
3. **Accessible by default**: WCAG AA compliance minimum
4. **Progressive disclosure**: Show essentials first
5. **Performance-first**: Sub-2.5s LCP, <0.1 CLS

## Quick Reference Numbers
- Base font: 16px
- Touch targets: 44×44px minimum
- Text contrast: 4.5:1 (normal), 3:1 (large/bold)
- Animation: 150-300ms typical
- Page padding: 24-32px
- Reading width: 60-80ch

## Usage
Import design tokens in your components:
```typescript
import { spacing, colors, typography } from './design-system/foundations/tokens'
```

Follow the guidelines in `design-system/guidelines/` for consistent implementation.