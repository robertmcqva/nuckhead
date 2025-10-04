// Input component for the MccHub Leximius component library
import React from 'react'
import { cn, inputSizes } from '../utils/cn'
import type { InputProps } from '../types'

export const Input: React.FC<InputProps> = ({
  className,
  type = 'text',
  size = 'md',
  label,
  error,
  disabled = false,
  required = false,
  ...props
}) => {
  const baseClasses = 'block w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed'
  const sizeClass = inputSizes[size]
  const errorClass = error ? 'border-red-500 focus:ring-red-500' : ''

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        className={cn(
          baseClasses,
          sizeClass,
          errorClass,
          className
        )}
        disabled={disabled}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

Input.displayName = 'Input'