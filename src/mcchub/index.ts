// MccHub Leximius Component Library
// Main export file for all components, hooks, and utilities

// Components (only export components that exist)
export { Button } from './components/Button.tsx'
export { Input } from './components/Input.tsx'
export { Card } from './components/Card.tsx'
export { Badge } from './components/Badge.tsx'
export { Avatar } from './components/Avatar.tsx'
export { Alert } from './components/Alert.tsx'

// Hooks (only export hooks that exist)
export { useLocalStorage } from './hooks/useLocalStorage.ts'
export { useToggle } from './hooks/useToggle.ts'
export { useDebounce } from './hooks/useDebounce.ts'
export { useClickOutside } from './hooks/useClickOutside.ts'

// Utils
export { cn } from './utils/cn.ts'
export * from './utils/formatters.ts'
export * from './utils/validators.ts'

// Types
export * from './types.ts'

// Version
export const version = '1.0.0'