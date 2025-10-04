/**
 * Design System Index
 * 
 * Centralized exports for all design system tokens and utilities.
 * Import from this file to access design tokens in components.
 */

// Core design tokens
export {
  spacing,
  typography,
  borderRadius,
  elevation as shadowElevation,
  zIndex,
  breakpoints,
  containers,
  duration,
  easing,
  touchTarget
} from './foundations/tokens'

export {
  brand,
  semantic,
  neutral,
  states,
  dark,
  contrast,
  focus,
  elevation as backgroundElevation
} from './foundations/colors'

// Import for type definitions
import {
  spacing,
  typography,
  borderRadius,
  elevation as shadowElevation,
} from './foundations/tokens'

import {
  brand,
} from './foundations/colors'

// Utility types for TypeScript
export type SpacingScale = keyof typeof spacing
export type FontSize = keyof typeof typography.fontSize
export type BrandColor = keyof typeof brand
export type SemanticColor = 'success' | 'warning' | 'error' | 'info'
export type BorderRadius = keyof typeof borderRadius
export type ShadowElevation = keyof typeof shadowElevation

// Design system configuration
export const designSystem = {
  name: 'MccHub Leximius Design System',
  version: '1.0.0',
  scales: {
    spacing: '8px base',
    typography: '1.125 modular scale',
    borderRadius: '4px increments',
    elevation: '4 levels maximum'
  },
  principles: [
    'Token-based design (no arbitrary values)',
    '8px spacing rhythm',
    'WCAG AA accessibility by default',
    'Mobile-first responsive design',
    'Progressive disclosure',
    'Performance-first development'
  ]
} as const