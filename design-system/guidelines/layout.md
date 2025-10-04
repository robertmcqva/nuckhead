# Layout & Spacing Guidelines

## Core Principles

### 8-Point Rhythm
- **Base all spacing on multiples of 8px** (or 4px for fine control)
- Use the predefined spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96
- Never use arbitrary spacing values like 13px, 25px, etc.

### Container Padding
- **Cards/Components**: 16-24px padding
- **Pages/Sections**: 24-32px padding
- **Mobile**: 16px minimum side padding
- **Desktop**: 24px minimum side padding

### Breathing Room
- **Vertical spacing should be ~1.5× horizontal spacing** to reduce visual crowding
- Example: If horizontal spacing is 16px, vertical should be 24px

### Grid Alignment
- **Snap all edges** of text, icons, and buttons to the 8px grid
- Avoid 1-3px nudges for "visual alignment" - use proper spacing tokens

### Section Hierarchy
- **Section gaps should be 2-3× intra-component gaps**
- If components use 16px internal spacing, sections should use 32-48px spacing

### Safe Areas
- **Respect OS notch/toolbar areas**
- Provide 16-24px side padding on mobile for safe touch zones
- Use `env(safe-area-inset-*)` CSS variables when needed

## Layout Patterns

### Navigation Layouts
```
Side Navigation:
- Width: 240-280px (standard), 200-220px (compact)
- Collapsible on mobile (< 960px)
- Sticky/fixed positioning

Content Areas:
- Max width: 720-960px for reading content
- App shells: 1200-1440px with fluid columns
- Use CSS Grid for complex layouts
```

### Content Layouts
```
Grid System:
- 12-column grid system
- 24px gutters between columns
- Responsive breakpoints: 600px, 960px, 1280px, 1920px

Reading Content:
- Max width: 60-80 characters (60-80ch)
- Line height: 1.4-1.6 for body text
- Paragraph spacing: 1.5rem (24px)
```

### Component Spacing
```
Card Layouts:
- Internal padding: 16-24px
- Border radius: 8-12px (use design tokens)
- Elevation: Use predefined shadow scale

Form Layouts:
- Field spacing: 16-24px vertical
- Label to input: 4-8px
- Error text: 4px below input
- Button spacing: 24px from last field
```

## Density Modes

### Comfortable (Default)
- Touch targets: 48px minimum
- Padding: 16-24px
- Text size: 16px base
- Line height: 1.5

### Compact
- Touch targets: 44px minimum  
- Padding: 12-16px
- Text size: 14px base
- Line height: 1.4
- Use for data-heavy interfaces, tables

## Responsive Breakpoints

```typescript
// Breakpoint ranges
const breakpoints = {
  mobile: '0-599px',
  tablet: '600-959px', 
  desktop: '960-1279px',
  wide: '1280-1919px',
  ultrawide: '1920px+'
}
```

### Layout Shifts Prevention
- **Reserve space for images/videos** with aspect-ratio boxes
- Use skeleton screens for loading content
- Avoid layout shifts (target CLS < 0.1)

### Touch Targets
- **Minimum 44×44px on touch devices**
- **Spacing ≥8px between tappable elements**
- Use comfortable padding around buttons/links

## CSS Implementation

### Using Design Tokens
```css
/* Good */
.card {
  padding: var(--spacing-6); /* 24px */
  margin-bottom: var(--spacing-8); /* 32px */
  border-radius: var(--radius-lg); /* 12px */
}

/* Bad */
.card {
  padding: 23px; /* Arbitrary value */
  margin-bottom: 30px; /* Not on grid */
  border-radius: 11px; /* Random radius */
}
```

### Grid Examples
```css
/* 12-column responsive grid */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--spacing-6); /* 24px */
  max-width: var(--container-content); /* 1200px */
  margin: 0 auto;
  padding: 0 var(--spacing-6);
}

/* Responsive content */
.content {
  grid-column: span 12; /* Full width on mobile */
}

@media (min-width: 960px) {
  .content {
    grid-column: span 8; /* 8/12 columns on desktop */
    grid-column-start: 3; /* Centered */
  }
}
```

## Quality Checklist

### Before Shipping Layout:
- [ ] All spacing uses design tokens (no arbitrary values)
- [ ] Text content max-width 60-80ch for readability
- [ ] Touch targets ≥44px on mobile
- [ ] Safe area padding on mobile (16-24px sides)
- [ ] No layout shifts on load (CLS < 0.1)
- [ ] Grid alignment verified (no 1-3px nudges)
- [ ] Responsive tested at all breakpoints
- [ ] Comfortable and compact density modes defined
- [ ] Keyboard navigation flow follows visual order