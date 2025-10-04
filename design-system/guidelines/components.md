# Component Usage Guidelines

## Core Component Principles

### Progressive Disclosure
- **Show essentials first**, collapse advanced & edge options
- Use expand/collapse patterns for complex forms
- Provide "Show more" options rather than overwhelming interfaces

### Consistent Patterns
- **One primary button per view** - all others secondary/tertiary
- **Inline actions** preferred over distant toolbars
- **Contextual placement** - actions near their related content

## Button Guidelines

### Hierarchy & Usage
```typescript
// Primary: One per view, main action
<Button variant="primary">Save Changes</Button>

// Secondary: Alternative actions
<Button variant="secondary">Cancel</Button>

// Tertiary: Less important actions
<Button variant="tertiary">Learn More</Button>
```

### Size & Touch Targets
- **Minimum 44×44px touch target** (Apple HIG & Material Design)
- Comfortable: 48px, Large: 56px for primary actions
- Icon buttons: 40×40px minimum with adequate spacing

### Button Text
- **Use verbs that state outcomes**: "Create Invoice", "Send Message"
- Avoid generic "OK", "Submit" - be specific about the action
- Keep text concise: 1-3 words maximum

## Input Components

### Labels & Helpers
```html
<!-- Good: Label always visible -->
<label for="email">Email Address</label>
<input id="email" type="email" placeholder="you@company.com">
<div class="helper-text">We'll never share your email</div>

<!-- Bad: Placeholder as label -->
<input type="email" placeholder="Email Address">
```

### Validation Patterns
- **Inline validation on blur** for format checking
- **Real-time for format**, server-side for business rules
- **Summary validation on submit** for long forms
- Show success states, not just errors

### States Required
- Default, Focus, Error, Success, Disabled
- Clear visual differences between states
- Error text below input with icon + color

## Modal & Drawer Usage

### When to Use Modals
- **Interruptive tasks ≤1 step** (confirmations, quick edits)
- Critical information that requires immediate attention
- Simple forms (≤5 fields)

### When to Use Drawers/Side Panels
- **Multi-step processes**
- Complex forms (>5 fields)
- Detail views with actions
- Navigation panels

### When to Use Dedicated Pages
- **Complex workflows**
- Multi-step forms with progress
- Full document editing
- Primary content areas

## Table Components

### Structure Requirements
- **Sticky header** for scrollable tables
- **Column minimum width**: 120-160px
- **Row height**: 40-48px (desktop), 56-64px (touch)
- **Zebra stripes only for dense data** (>10 columns)

### Progressive Disclosure
- **Row expanders** for additional details
- **Column toggles** for customization
- **Pagination** for >50 rows
- **Filtering/search** for >100 rows

### Actions
- **Row-level actions** in the row (preferred)
- **Bulk actions** in toolbar when needed
- **Context menus** for advanced options

## Card Components

### Usage Patterns
- **Use for "objects"** - users, projects, articles
- **Consistent padding**: 16-24px internal spacing
- **Media aspect ratios**: 16:9 for landscape, 1:1 for avatars
- **Hover states** for interactive cards

### Content Structure
```html
<div class="card">
  <header class="card-header">
    <h3 class="card-title">Object Name</h3>
    <div class="card-actions">...</div>
  </header>
  <div class="card-content">
    <p class="card-description">...</p>
  </div>
  <footer class="card-footer">
    <div class="card-meta">...</div>
  </footer>
</div>
```

## Navigation Components

### Tabs vs Side Navigation
- **Tabs**: ≤5 sibling views, same hierarchical level
- **Side Navigation**: Product areas, hierarchical structure
- **Breadcrumbs**: Deep hierarchies, spatial navigation

### Tab Guidelines
- **Maximum 7 tabs** (5 recommended)
- **Active state clearly visible**
- **Keyboard navigation** with arrow keys
- **Responsive**: Convert to dropdown on mobile

## Toast/Notification Components

### Usage Rules
- **Non-critical information only**
- **Auto-dismiss**: 3-5 seconds
- **Include undo** for destructive actions
- **Position**: Top-right or bottom-center

### Types & Timing
```typescript
// Success: 3 seconds
toast.success("File saved successfully", { duration: 3000 })

// Error: 5 seconds (user needs more time to read)
toast.error("Failed to save file", { duration: 5000 })

// Info: 4 seconds
toast.info("New feature available", { duration: 4000 })
```

## Empty States

### Required Elements
1. **Icon or illustration** (not too cute, professional)
2. **1-2 lines of explanation** ("No projects yet")
3. **Prominent CTA** ("Create your first project")
4. **Sample data link** if relevant ("Import sample data")

### Tone & Content
- **Explain "why empty"** and **"how to fill"**
- Encouraging, not concerning
- Provide next steps, not just acknowledgment

## Form Components

### Field Grouping
- **Chunk related fields** with visual grouping
- **Multi-step for >8-10 fields**
- **Progress indicators** for multi-step forms
- **Save progress** for long forms

### Default Values
- **Safe and reversible** defaults
- **Smart defaults** based on context
- **Avoid pre-selecting** destructive options

### Error Handling
- **Keep user data** on errors
- **Provide retry mechanisms**
- **Diagnostic codes** for support
- **Plain language explanations**

## Component States

### Loading States
- **Skeletons for content** (200-400ms minimum to avoid flicker)
- **Spinners for operations** (<200ms)
- **Progress bars** for file uploads/long operations
- **Optimistic UI** where possible

### Success States
- **Unobtrusive confirmation** (toast + visual change)
- **Visual confirmation in UI** (checkmark, color change)
- **Clear next steps** ("What's next?")

### Error States
- **Keep user context and data**
- **Provide specific remediation**
- **Support contact** for complex errors
- **Retry mechanisms** where appropriate

## Quality Checklist

### Before Shipping Components:
- [ ] Touch targets ≥44px on mobile
- [ ] All states defined (default, hover, focus, active, disabled)
- [ ] Keyboard navigation works (Tab, Enter, Escape, arrows)
- [ ] Focus rings visible and properly styled
- [ ] Error messages are actionable and clear
- [ ] Loading states prevent user confusion
- [ ] Empty states provide clear next steps
- [ ] Responsive behavior tested at all breakpoints
- [ ] Color-independent meaning (not just red/green)
- [ ] Screen reader compatible (proper labels, ARIA)
- [ ] Works without JavaScript (progressive enhancement)