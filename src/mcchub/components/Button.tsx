// Button component for the MccHub Leximius component library
import React from 'react'
import { cn, variants, sizes } from '../utils/cn'
import type { ButtonProps } from '../types'

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  fullWidth = false,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 shadow-elegant hover:shadow-elegant-lg'
  
  const variantClass = variants[variant]
  const sizeClass = sizes[size]
  const widthClass = fullWidth ? 'w-full' : ''
  const loadingClass = loading ? 'cursor-wait' : ''

  return (
    <button
      type={type}
      className={cn(
        baseClasses,
        variantClass,
        sizeClass,
        widthClass,
        loadingClass,
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
}

Button.displayName = 'Button'