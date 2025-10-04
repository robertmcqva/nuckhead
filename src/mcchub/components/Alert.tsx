// Alert component for the MccHub Leximius component library
import React from 'react'
import { cn } from '../utils/cn'
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react'
import type { AlertProps } from '../types'

export const Alert: React.FC<AlertProps> = ({
  children,
  className,
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
  ...props
}) => {
  const baseClasses = 'rounded-lg border p-4'
  
  const variantClasses = {
    primary: 'bg-blue-50 border-blue-200 text-blue-900',
    secondary: 'bg-gray-50 border-gray-200 text-gray-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    error: 'bg-red-50 border-red-200 text-red-900',
    info: 'bg-cyan-50 border-cyan-200 text-cyan-900',
    gradient: 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 text-blue-900',
    ghost: 'bg-transparent border-gray-200 text-gray-700',
    outline: 'bg-transparent border-blue-200 text-blue-700',
  }

  const iconClasses = {
    primary: 'text-blue-500',
    secondary: 'text-gray-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
    info: 'text-cyan-500',
    gradient: 'text-blue-500',
    ghost: 'text-gray-500',
    outline: 'text-blue-500',
  }

  const icons = {
    primary: Info,
    secondary: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertCircle,
    info: Info,
    gradient: Info,
    ghost: Info,
    outline: Info,
  }

  const Icon = icons[variant]

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      role="alert"
      {...props}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={cn('w-5 h-5', iconClasses[variant])} />
        </div>
        <div className="ml-3 flex-1">
          {title && (
            <h3 className="text-sm font-medium mb-1">
              {title}
            </h3>
          )}
          <div className="text-sm">
            {children}
          </div>
        </div>
        {dismissible && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className={cn(
                  'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
                  iconClasses[variant],
                  'hover:bg-black hover:bg-opacity-10'
                )}
                onClick={onDismiss}
              >
                <span className="sr-only">Dismiss</span>
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Alert.displayName = 'Alert'