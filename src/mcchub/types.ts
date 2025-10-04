// MccHub Leximius Component Library Types

export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'gradient' | 'ghost' | 'outline'
export type Color = 'gray' | 'brand' | 'success' | 'warning' | 'error' | 'purple' | 'pink' | 'indigo'

export interface ButtonProps extends BaseComponentProps {
  variant?: Variant
  size?: Size
  disabled?: boolean
  loading?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  disabled?: boolean
  required?: boolean
  error?: string
  label?: string
  size?: Size
}

export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'outlined' | 'elevated' | 'glass' | 'gradient'
  padding?: Size
  hover?: boolean
}

export interface ModalProps extends BaseComponentProps {
  open: boolean
  onClose: () => void
  title?: string
  size?: Size
  backdrop?: boolean
}

export interface BadgeProps extends BaseComponentProps {
  variant?: Variant
  size?: Size
  dot?: boolean
}

export interface AvatarProps extends BaseComponentProps {
  src?: string
  alt?: string
  fallback?: string
  size?: Size
}

export interface TooltipProps extends BaseComponentProps {
  content: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  trigger?: 'hover' | 'click' | 'focus'
}

export interface AlertProps extends BaseComponentProps {
  variant?: Variant
  title?: string
  dismissible?: boolean
  onDismiss?: () => void
}

export interface ComponentDocumentation {
  name: string
  description: string
  category: string
  props: Record<string, {
    type: string
    required: boolean
    defaultValue?: any
    description: string
  }>
  examples: {
    title: string
    code: string
    description?: string
  }[]
  dependencies?: string[]
  changelog?: {
    version: string
    changes: string[]
    date: string
  }[]
}