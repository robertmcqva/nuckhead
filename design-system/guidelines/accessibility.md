# Accessibility Guidelines (WCAG AA Compliance)

## Core Principles

### WCAG AA by Default
- **Ship WCAG AA compliance as minimum standard** (not AAA unless required)
- **Test with screen readers** (VoiceOver, NVDA, JAWS)
- **Keyboard-only navigation** must work perfectly
- **Color-independent information** - never rely on color alone

## Semantic HTML & ARIA

### HTML First, ARIA Second
```html
<!-- Good: Semantic HTML -->
<button onclick="save()">Save Document</button>

<!-- Bad: Div with ARIA (unless absolutely necessary) -->
<div role="button" tabindex="0" onclick="save()">Save Document</div>
```

### Required ARIA Patterns
```html
<!-- Custom widgets need name, role, value -->
<div role="slider" 
     aria-label="Volume" 
     aria-valuemin="0" 
     aria-valuemax="100" 
     aria-valuenow="75"
     tabindex="0">
</div>

<!-- Form associations -->
<label for="email">Email Address</label>
<input id="email" 
       type="email" 
       aria-describedby="email-error"
       aria-invalid="true">
<div id="email-error">Please enter a valid email</div>
```

## Focus Management

### Visible Focus Rings
```css
/* Required: Always visible focus rings */
.button:focus-visible {
  outline: 2px solid var(--focus-ring-color);
  outline-offset: 2px;
}

/* Never remove focus rings completely */
.button:focus {
  outline: none; /* ❌ Bad */
}
```

### Focus Flow Management
- **Tab order follows visual order** (left-to-right, top-to-bottom)
- **Send focus to new surfaces** (modal opens → focus first element)
- **Restore focus on close** (modal closes → focus returns to trigger)
- **Skip links for main content**: "Skip to content"

### Keyboard Interactions
```typescript
// Standard keyboard patterns
const keyboardPatterns = {
  modal: {
    open: 'Focus first focusable element',
    close: 'Escape key, return focus to trigger',
    navigation: 'Tab/Shift+Tab for focus flow'
  },
  dropdown: {
    open: 'Arrow down, focus first item',
    navigation: 'Arrow keys, Home/End',
    select: 'Enter or Space',
    close: 'Escape, Tab out'
  },
  form: {
    submit: 'Enter key in any field',
    navigation: 'Tab to next field',
    validation: 'Show errors on blur and submit'
  }
}
```

## Color & Contrast

### Contrast Requirements
- **Normal text** (14-16px): 4.5:1 minimum ratio
- **Large text** (18px+ or 14px+ bold): 3:1 minimum ratio
- **UI components** (buttons, borders): 3:1 minimum ratio
- **Focus indicators**: 3:1 against background

### Testing Tools
```bash
# Install contrast checker
npm install --save-dev @axe-core/cli

# Check contrast in components
npx axe-core ./src/components --tags="wcag2a,wcag2aa"
```

### Color Independence
```html
<!-- Good: Multiple indicators -->
<div class="status error" aria-label="Error">
  <Icon name="error" aria-hidden="true" />
  <span>Failed to save</span>
</div>

<!-- Bad: Color only -->
<div class="text-red-500">Failed to save</div>
```

## Form Accessibility

### Label Association
```html
<!-- Good: Explicit labels -->
<label for="username">Username</label>
<input id="username" type="text" required>

<!-- Good: Implicit labels -->
<label>
  Username
  <input type="text" required>
</label>

<!-- Bad: Placeholder as label -->
<input type="text" placeholder="Username">
```

### Error Messages
```html
<!-- Proper error association -->
<label for="email">Email Address</label>
<input id="email" 
       type="email" 
       aria-describedby="email-error email-help"
       aria-invalid="true">
<div id="email-help">We'll never share your email</div>
<div id="email-error" role="alert">
  Please enter a valid email address
</div>
```

### Required Field Indicators
```html
<!-- Good: Multiple indicators for required -->
<label for="name">
  Full Name
  <abbr title="required" aria-label="required">*</abbr>
</label>
<input id="name" type="text" required aria-required="true">

<!-- Also announce in form instructions -->
<p>Fields marked with * are required</p>
```

## Screen Reader Support

### Live Regions
```html
<!-- Announce dynamic content -->
<div aria-live="polite" id="status">
  <!-- Content updates announced automatically -->
</div>

<div aria-live="assertive" id="errors">
  <!-- Urgent updates interrupt screen reader -->
</div>
```

### Descriptive Text
```html
<!-- Good: Descriptive links -->
<a href="/docs/getting-started">
  Read the getting started guide
</a>

<!-- Bad: Generic links -->
<a href="/docs/getting-started">Click here</a>

<!-- Good: Button descriptions -->
<button aria-label="Delete project: Homepage Redesign">
  <Icon name="trash" aria-hidden="true" />
</button>
```

### Hidden Content
```html
<!-- Hide decorative elements -->
<Icon name="star" aria-hidden="true" />

<!-- Screen reader only content -->
<span class="sr-only">Current page:</span>
<span>Dashboard</span>

<!-- CSS for sr-only -->
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## Navigation Accessibility

### Skip Links
```html
<!-- First focusable element -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<!-- CSS for skip links -->
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: white;
  color: black;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

### Landmark Regions
```html
<header role="banner">
  <nav role="navigation" aria-label="Main navigation">
    <!-- Primary navigation -->
  </nav>
</header>

<main role="main" id="main-content">
  <section aria-labelledby="content-title">
    <h1 id="content-title">Page Title</h1>
  </section>
</main>

<aside role="complementary" aria-label="Related links">
  <!-- Sidebar content -->
</aside>

<footer role="contentinfo">
  <!-- Footer content -->
</footer>
```

## Data Tables

### Accessible Table Structure
```html
<table role="table" aria-label="User list">
  <caption>List of team members and their roles</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Role</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">John Doe</th>
      <td>Developer</td>
      <td>Active</td>
      <td>
        <button aria-label="Edit John Doe">Edit</button>
      </td>
    </tr>
  </tbody>
</table>
```

### Complex Tables
- Use `scope` attributes for header relationships
- Add `aria-describedby` for complex relationships
- Provide table summaries for data-heavy tables

## Media Accessibility

### Images
```html
<!-- Informative images -->
<img src="chart.png" alt="Sales increased 25% from Q1 to Q2">

<!-- Decorative images -->
<img src="decoration.png" alt="" role="presentation">

<!-- Complex images -->
<img src="complex-chart.png" 
     alt="Sales data by quarter" 
     aria-describedby="chart-description">
<div id="chart-description" class="sr-only">
  Detailed description of chart data...
</div>
```

### Videos
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" srclang="en" label="English">
  <track kind="descriptions" src="descriptions.vtt" srclang="en">
</video>
```

## Testing & Validation

### Automated Testing
```javascript
// Jest + @testing-library/jest-dom
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

test('Button is accessible', async () => {
  const { container } = render(<Button>Save</Button>)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

// Check for proper labeling
test('Form has proper labels', () => {
  render(<LoginForm />)
  expect(screen.getByLabelText('Email')).toBeInTheDocument()
  expect(screen.getByLabelText('Password')).toBeInTheDocument()
})
```

### Manual Testing Checklist
- [ ] **Tab through entire page** - all interactive elements reachable
- [ ] **Focus visible at all times** - clear focus indicators
- [ ] **Screen reader navigation** - logical reading order
- [ ] **Keyboard shortcuts work** - Enter, Space, Arrow keys, Escape
- [ ] **Color contrast** - 4.5:1 for normal text, 3:1 for large
- [ ] **Zoom to 200%** - content remains usable
- [ ] **Text resize** - readable at 150% browser zoom
- [ ] **Error messages** - clear, associated with fields
- [ ] **Status updates** - announced to screen readers

### Browser Testing
```bash
# Test with screen readers
# macOS: VoiceOver (Cmd + F5)
# Windows: NVDA (free), JAWS (enterprise)
# Linux: Orca

# Test keyboard navigation
# Tab, Shift+Tab, Enter, Space, Arrow keys, Escape, Home, End

# Test with browser zoom
# 150%, 200%, 400% zoom levels

# Test with reduced motion
# prefers-reduced-motion: reduce
```

## Implementation Guidelines

### CSS for Accessibility
```css
/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast support */
@media (prefers-contrast: high) {
  .button {
    border: 2px solid currentColor;
  }
}

/* Focus styles */
.focus-visible {
  outline: 2px solid var(--focus-color);
  outline-offset: 2px;
}
```

### React/TypeScript Patterns
```typescript
// Accessible component interface
interface ButtonProps {
  children: React.ReactNode
  'aria-label'?: string
  'aria-describedby'?: string
  disabled?: boolean
  onClick: () => void
}

// Use semantic elements
const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button type="button" {...props}>
    {children}
  </button>
)
```

## Quality Checklist

### Before Shipping - A11y Requirements:
- [ ] WCAG AA compliance verified (automated + manual)
- [ ] Keyboard navigation works for all functionality
- [ ] Focus management implemented for dynamic content
- [ ] Screen reader tested (VoiceOver/NVDA)
- [ ] Color contrast meets 4.5:1 (normal) / 3:1 (large) ratios
- [ ] Error messages are descriptive and associated
- [ ] Form labels properly associated with inputs
- [ ] Skip links provided for main content
- [ ] Live regions announce dynamic updates
- [ ] Images have appropriate alt text
- [ ] Tables have proper headers and captions
- [ ] Reduced motion preferences respected