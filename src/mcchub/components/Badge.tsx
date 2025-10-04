// Badge component for the MccHub Leximius component library
import React from 'react'
import { cn } from '../utils/cn'
import type { BadgeProps } from '../types'

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  dot = false,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full'
  
  const variantClasses = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-cyan-100 text-cyan-800',
    gradient: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white',
    ghost: 'bg-transparent border border-gray-300 text-gray-700',
    outline: 'bg-transparent border border-blue-500 text-blue-700',
  }
  
  const sizeClasses = {
    xs: 'px-2 py-0.5 text-xs',
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-sm',
    xl: 'px-3.5 py-1 text-base',
  }

  if (dot) {
    const dotSizeClasses = {
      xs: 'w-1.5 h-1.5',
      sm: 'w-2 h-2',
      md: 'w-2 h-2',
      lg: 'w-2.5 h-2.5',
      xl: 'w-3 h-3',
    }
    
    const dotColorClasses = {
      primary: 'bg-blue-500',
      secondary: 'bg-gray-500',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      error: 'bg-red-500',
      info: 'bg-cyan-500',
      gradient: 'bg-gradient-to-r from-blue-500 to-purple-600',
      ghost: 'bg-gray-400',
      outline: 'bg-blue-500',
    }

    return (
      <span
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <div className={cn('rounded-full mr-1.5', dotSizeClasses[size], dotColorClasses[variant])} />
        {children}
      </span>
    )
  }

  return (
    <span
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

Badge.displayName = 'Badge'