/**
 * MccHub Leximius Design System Tokens
 * 
 * Core design tokens following battle-tested UI principles.
 * All components must reference these tokens, never ad-hoc values.
 */

// Spacing Scale (8px base)
export const spacing = {
  0: '0',
  1: '4px',    // 0.25rem - fine control
  2: '8px',    // 0.5rem - base unit
  3: '12px',   // 0.75rem
  4: '16px',   // 1rem
  5: '20px',   // 1.25rem
  6: '24px',   // 1.5rem
  8: '32px',   // 2rem
  10: '40px',  // 2.5rem
  12: '48px',  // 3rem
  16: '64px',  // 4rem
  20: '80px',  // 5rem
  24: '96px',  // 6rem
} as const

// Typography Scale (1.125 modular scale)
export const typography = {
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
  },
  lineHeight: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.6',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  }
} as const

// Border Radius Scale
export const borderRadius = {
  none: '0',
  sm: '4px',
  default: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
} as const

// Elevation (Shadow) Scale
export const elevation = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
} as const

// Z-Index Scale
export const zIndex = {
  base: 0,
  tooltip: 10,
  dropdown: 20,
  modal: 30,
  notification: 40,
} as const

// Breakpoints
export const breakpoints = {
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
} as const

// Container Sizes
export const containers = {
  prose: '65ch',      // Reading width
  content: '1200px',  // App shell max-width
  section: '1440px',  // Full section width
} as const

// Animation Durations
export const duration = {
  fast: '150ms',
  normal: '250ms',
  slow: '350ms',
  slower: '500ms',
} as const

// Animation Easings
export const easing = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const

// Touch Targets
export const touchTarget = {
  min: '44px',  // Minimum touch target size
  comfortable: '48px',
  large: '56px',
} as const