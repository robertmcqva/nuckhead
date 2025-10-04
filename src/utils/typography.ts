// Typography utilities for preventing awkward text wrapping and ensuring professional appearance

// CSS classes for preventing text wrapping issues
export const typographyClasses = {
  // Prevent awkward breaks in headings
  noBreakHeading: 'whitespace-nowrap sm:whitespace-normal',
  
  // For multi-word titles that should stay together on mobile
  keepTogether: 'whitespace-nowrap xs:whitespace-normal',
  
  // For brand names and important phrases
  noBreakBrand: 'whitespace-nowrap',
  
  // For responsive text that breaks gracefully
  responsiveBreak: 'break-words hyphens-auto',
  
  // For navigation items
  navText: 'whitespace-nowrap',
  
  // For button text
  buttonText: 'whitespace-nowrap',
  
  // For inline code or technical terms
  codeText: 'whitespace-nowrap font-mono',
  
  // For preventing orphans (single words on new lines)
  noOrphans: 'text-balance', // Modern browsers only
  
  // For long form content
  readableText: 'leading-relaxed break-words'
}

// Common text patterns that should never break
export const noBreakPhrases = [
  'MccHub Leximius',
  'React Components',
  'TypeScript',
  'Getting Started',
  'Component Library',
  'Design System',
  'User Experience',
  'Our Blog',
  'Our Team',
  'Our Mission',
  'Privacy Policy',
  'Terms of Service',
  'Coming Soon',
  'Sign In',
  'Sign Up',
  'Get Started',
  'Learn More',
  'Read More',
  'Try Now',
  'Contact Us',
  'About Us'
]

// Helper function to wrap text that shouldn't break
export const wrapNoBreakText = (text: string): string => {
  let wrappedText = text
  
  noBreakPhrases.forEach(phrase => {
    const regex = new RegExp(`\\b${phrase}\\b`, 'gi')
    wrappedText = wrappedText.replace(regex, `<span class="whitespace-nowrap">${phrase}</span>`)
  })
  
  return wrappedText
}

// Hook for checking if text might cause wrapping issues
export const useTextWrappingCheck = (text: string) => {
  const wordCount = text.split(' ').length
  const hasLongWords = text.split(' ').some(word => word.length > 12)
  const shouldPreventBreak = wordCount <= 3 || hasLongWords
  
  return {
    shouldPreventBreak,
    recommendedClass: shouldPreventBreak ? typographyClasses.noBreakHeading : typographyClasses.responsiveBreak
  }
}

// Professional heading sizes with consistent responsive behavior
export const headingSizes = {
  hero: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold',
  pageTitle: 'text-3xl sm:text-4xl md:text-5xl font-bold',
  sectionTitle: 'text-2xl sm:text-3xl md:text-4xl font-bold',
  subsectionTitle: 'text-xl sm:text-2xl md:text-3xl font-semibold',
  cardTitle: 'text-lg sm:text-xl md:text-2xl font-semibold',
  smallTitle: 'text-base sm:text-lg md:text-xl font-semibold'
}

export default {
  typographyClasses,
  noBreakPhrases,
  wrapNoBreakText,
  useTextWrappingCheck,
  headingSizes
}