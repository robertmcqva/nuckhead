// Class name utility function (cn)
// A utility to merge and conditionally apply class names
// Similar to the popular 'clsx' library but customized for MccHub Leximius

export type ClassValue = string | number | boolean | undefined | null | ClassValue[]

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = []
  
  for (const input of inputs) {
    if (!input) continue
    
    if (typeof input === 'string' || typeof input === 'number') {
      classes.push(String(input))
    } else if (Array.isArray(input)) {
      const nested = cn(...input)
      if (nested) classes.push(nested)
    } else if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key)
      }
    }
  }
  
  return classes.join(' ')
}

// Variant and size class mappings
export const variants = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500 hover:shadow-glow',
  secondary: 'bg-white text-gray-900 border-2 border-gray-200 hover:border-brand-300 hover:bg-brand-50 focus:ring-brand-500',
  success: 'bg-success-600 text-white hover:bg-success-700 focus:ring-success-500 hover:shadow-glow',
  warning: 'bg-warning-500 text-white hover:bg-warning-600 focus:ring-warning-500 hover:shadow-glow',
  error: 'bg-error-600 text-white hover:bg-error-700 focus:ring-error-500 hover:shadow-glow',
  info: 'bg-brand-500 text-white hover:bg-brand-600 focus:ring-brand-500 hover:shadow-glow',
  gradient: 'bg-gradient-to-r from-brand-600 to-purple-600 text-white hover:from-brand-700 hover:to-purple-700 focus:ring-brand-500 hover:shadow-glow',
  ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500',
  outline: 'border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white focus:ring-brand-500'
}

export const sizes = {
  xs: 'px-3 py-1.5 text-xs',
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl'
}

export const inputSizes = {
  xs: 'px-3 py-1.5 text-xs',
  sm: 'px-4 py-2 text-sm',
  md: 'px-4 py-3 text-base',
  lg: 'px-6 py-4 text-lg',
  xl: 'px-8 py-5 text-xl'
}