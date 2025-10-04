// Avatar component for the MccHub Leximius component library
import React from 'react'
import { cn } from '../utils/cn'
import type { AvatarProps } from '../types'

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  fallback,
  size = 'md',
  className,
  ...props
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
  }

  const baseClasses = 'inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-600 font-medium overflow-hidden'

  // If src is provided and loads successfully, show image
  if (src) {
    return (
      <div
        className={cn(baseClasses, sizeClasses[size], className)}
        {...props}
      >
        <img
          src={src}
          alt={alt || 'Avatar'}
          className="w-full h-full object-cover"
          onError={(e) => {
            // If image fails to load, show fallback
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent && fallback) {
              parent.textContent = fallback
            }
          }}
        />
      </div>
    )
  }

  // Show fallback text or initials
  return (
    <div
      className={cn(baseClasses, sizeClasses[size], className)}
      {...props}
    >
      {fallback || '?'}
    </div>
  )
}

Avatar.displayName = 'Avatar'