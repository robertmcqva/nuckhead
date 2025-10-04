// Validation utilities for the MccHub Leximius component library

export const validators = {
  // Email validation
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },

  // URL validation
  url: (url: string): boolean => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  },

  // Phone number validation (basic)
  phone: (phone: string): boolean => {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/\s|-|\(|\)/g, ''))
  },

  // Required field validation
  required: (value: any): boolean => {
    if (typeof value === 'string') return value.trim().length > 0
    if (Array.isArray(value)) return value.length > 0
    return value !== null && value !== undefined
  },

  // Minimum length validation
  minLength: (value: string, min: number): boolean => {
    return value.length >= min
  },

  // Maximum length validation
  maxLength: (value: string, max: number): boolean => {
    return value.length <= max
  },

  // Number range validation
  numberRange: (value: number, min: number, max: number): boolean => {
    return value >= min && value <= max
  },

  // Password strength validation
  password: (password: string): {
    isValid: boolean
    score: number
    feedback: string[]
  } => {
    const feedback: string[] = []
    let score = 0

    if (password.length >= 8) {
      score += 1
    } else {
      feedback.push('Password should be at least 8 characters long')
    }

    if (/[a-z]/.test(password)) {
      score += 1
    } else {
      feedback.push('Password should contain lowercase letters')
    }

    if (/[A-Z]/.test(password)) {
      score += 1
    } else {
      feedback.push('Password should contain uppercase letters')
    }

    if (/\d/.test(password)) {
      score += 1
    } else {
      feedback.push('Password should contain numbers')
    }

    if (/[^a-zA-Z\d]/.test(password)) {
      score += 1
    } else {
      feedback.push('Password should contain special characters')
    }

    return {
      isValid: score >= 4,
      score,
      feedback,
    }
  },

  // Credit card validation (Luhn algorithm)
  creditCard: (cardNumber: string): boolean => {
    const num = cardNumber.replace(/\s|-/g, '')
    if (!/^\d+$/.test(num)) return false

    let sum = 0
    let isEven = false

    for (let i = num.length - 1; i >= 0; i--) {
      let digit = parseInt(num.charAt(i), 10)

      if (isEven) {
        digit *= 2
        if (digit > 9) {
          digit -= 9
        }
      }

      sum += digit
      isEven = !isEven
    }

    return sum % 10 === 0
  },

  // Pattern validation
  pattern: (value: string, pattern: RegExp): boolean => {
    return pattern.test(value)
  },
}