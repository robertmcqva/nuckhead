// Navigation Configuration - Single source of truth for all links
export interface NavRoute {
  path: string
  label: string
  isAvailable: boolean
  component?: string
  description?: string
  expectedDate?: string
  category: 'main' | 'library' | 'auth' | 'dashboard' | 'legal' | 'other'
  icon?: string
  isPopular?: boolean
}

export const navigationConfig: NavRoute[] = [
  // Main Navigation
  { path: '/', label: 'Home', isAvailable: true, category: 'main', isPopular: true },
  { path: '/about', label: 'About', isAvailable: true, category: 'main', isPopular: true },
  { path: '/services', label: 'Services', isAvailable: true, category: 'main' },
  { path: '/pricing', label: 'Pricing', isAvailable: true, category: 'main', isPopular: true },
  { path: '/contact', label: 'Contact', isAvailable: true, category: 'main', isPopular: true },
  { path: '/blog', label: 'Blog', isAvailable: true, category: 'main', isPopular: true },
  
  // Library Navigation
  { path: '/library', label: 'Components', isAvailable: true, category: 'library', isPopular: true },
  { path: '/library/getting-started', label: 'Getting Started', isAvailable: true, category: 'library', isPopular: true },
  { path: '/library/components', label: 'Component Library', isAvailable: true, category: 'library' },
  { path: '/library/playground', label: 'Playground', isAvailable: true, category: 'library' },
  
  // Auth Navigation
  { path: '/auth/login', label: 'Sign In', isAvailable: true, category: 'auth' },
  { path: '/auth/register', label: 'Sign Up', isAvailable: true, category: 'auth' },
  
  // Dashboard Navigation
  { path: '/dashboard', label: 'Dashboard', isAvailable: true, category: 'dashboard' },
  { path: '/profile', label: 'Profile', isAvailable: true, category: 'dashboard' },
  { path: '/projects', label: 'Projects', isAvailable: true, category: 'dashboard' },
  { path: '/analytics', label: 'Analytics', isAvailable: true, category: 'dashboard' },
  
  // Legal Navigation
  { path: '/legal/privacy', label: 'Privacy Policy', isAvailable: true, category: 'legal' },
  { path: '/legal/terms', label: 'Terms of Service', isAvailable: true, category: 'legal' },
  { path: '/docs', label: 'Documentation', isAvailable: true, category: 'other', isPopular: true },
  
  // Coming Soon Pages - Set these to false until developed
  { path: '/careers', label: 'Careers', isAvailable: false, category: 'other', expectedDate: 'Q1 2026', description: 'Join our growing team of developers and designers' },
  { path: '/integrations', label: 'Integrations', isAvailable: false, category: 'other', expectedDate: 'Q2 2026', description: 'Connect with your favorite tools and services' },
  { path: '/community', label: 'Community', isAvailable: false, category: 'other', expectedDate: 'Q1 2026', description: 'Join our community of developers and designers' },
  { path: '/help', label: 'Help Center', isAvailable: false, category: 'other', expectedDate: 'Q1 2026', description: 'Get help and support for all features' },
  { path: '/press', label: 'Press Kit', isAvailable: false, category: 'other', expectedDate: 'Q2 2026', description: 'Media resources and brand assets' },
  { path: '/settings', label: 'Settings', isAvailable: false, category: 'dashboard', expectedDate: 'Q1 2026', description: 'Customize your account preferences' },
]

// Helper functions
export const getRoute = (path: string): NavRoute | undefined => {
  return navigationConfig.find(route => route.path === path)
}

export const getPopularRoutes = (): NavRoute[] => {
  return navigationConfig.filter(route => route.isPopular && route.isAvailable)
}

export const getRoutesByCategory = (category: NavRoute['category']): NavRoute[] => {
  return navigationConfig.filter(route => route.category === category)
}

export const getAvailableRoutes = (): NavRoute[] => {
  return navigationConfig.filter(route => route.isAvailable)
}

export const getComingSoonRoutes = (): NavRoute[] => {
  return navigationConfig.filter(route => !route.isAvailable)
}

// Check if a route exists and is available
export const isRouteAvailable = (path: string): boolean => {
  const route = getRoute(path)
  return route ? route.isAvailable : false
}

// Get coming soon info for a route
export const getComingSoonInfo = (path: string) => {
  const route = getRoute(path)
  if (!route || route.isAvailable) return null
  
  return {
    title: route.label,
    description: route.description,
    expectedDate: route.expectedDate
  }
}