// Card component for the MccHub Leximius component library
import React from 'react'
import { cn } from '../utils/cn'
import type { CardProps } from '../types'

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hover = false,
  ...props
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-200'
  
  const variantClasses = {
    default: 'bg-white border border-gray-200 shadow-elegant',
    outlined: 'bg-white border-2 border-gray-300',
    elevated: 'bg-white shadow-elegant-lg border border-gray-100',
    glass: 'bg-white/80 backdrop-blur-xl border border-white/20 shadow-elegant',
    gradient: 'bg-gradient-to-br from-brand-50 to-purple-50 border border-brand-200'
  }
  
  const paddingClasses = {
    xs: 'p-4',
    sm: 'p-6',
    md: 'p-8',
    lg: 'p-10',
    xl: 'p-12'
  }
  
  const hoverClass = hover ? 'hover:shadow-elegant-lg hover:-translate-y-1 hover:scale-[1.02] cursor-pointer' : ''

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        paddingClasses[padding],
        hoverClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Card.displayName = 'Card'