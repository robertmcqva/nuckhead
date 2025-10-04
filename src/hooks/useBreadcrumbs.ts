import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'

export interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
  icon?: string
}

// Comprehensive route mapping for all application routes
const routeMapping: Record<string, { 
  label: string
  parent?: string
  icon?: string
  category?: string
}> = {
  // Core pages
  '/': { label: 'Home', icon: 'Home' },
  '/about': { label: 'About Us', icon: 'Info' },
  '/services': { label: 'Services', icon: 'Settings' },
  '/pricing': { label: 'Pricing', icon: 'DollarSign' },
  '/contact': { label: 'Contact', icon: 'Mail' },
  '/blog': { label: 'Blog', icon: 'FileText' },
  '/docs': { label: 'Documentation', icon: 'Book' },
  
  // Library routes - comprehensive mapping
  '/library': { label: 'Component Library', icon: 'Package' },
  '/library/overview': { label: 'Overview', parent: '/library', icon: 'Eye' },
  '/library/getting-started': { label: 'Getting Started', parent: '/library', icon: 'Play' },
  '/library/components': { label: 'Browse Components', parent: '/library', icon: 'Grid' },
  '/library/playground': { label: 'Playground', parent: '/library', icon: 'Code' },
  
  // Individual component pages
  '/library/components/button': { label: 'Button', parent: '/library/components', icon: 'MousePointer' },
  '/library/components/input': { label: 'Input', parent: '/library/components', icon: 'Type' },
  '/library/components/card': { label: 'Card', parent: '/library/components', icon: 'Square' },
  '/library/components/alert': { label: 'Alert', parent: '/library/components', icon: 'AlertCircle' },
  '/library/components/badge': { label: 'Badge', parent: '/library/components', icon: 'Tag' },
  '/library/components/avatar': { label: 'Avatar', parent: '/library/components', icon: 'User' },
  
  // Authentication routes
  '/auth': { label: 'Authentication', icon: 'Shield' },
  '/auth/login': { label: 'Sign In', parent: '/auth', icon: 'LogIn' },
  '/auth/register': { label: 'Sign Up', parent: '/auth', icon: 'UserPlus' },
  
  // Dashboard and protected routes
  '/dashboard': { label: 'Dashboard', icon: 'BarChart3' },
  '/profile': { label: 'Profile', icon: 'User' },
  '/projects': { label: 'Projects', icon: 'FolderOpen' },
  '/analytics': { label: 'Analytics', icon: 'TrendingUp' },
  
  // Legal routes
  '/legal': { label: 'Legal', icon: 'Scale' },
  '/legal/privacy': { label: 'Privacy Policy', parent: '/legal', icon: 'Shield' },
  '/legal/terms': { label: 'Terms of Service', parent: '/legal', icon: 'FileText' },
  
  // Admin routes
  '/admin': { label: 'Admin Panel', icon: 'Settings' },
  '/admin/users': { label: 'User Management', parent: '/admin', icon: 'Users' },
  '/admin/settings': { label: 'System Settings', parent: '/admin', icon: 'Cog' },
  
  // Coming soon and special pages
  '/coming-soon': { label: 'Coming Soon', icon: 'Clock' },
  '/404': { label: 'Page Not Found', icon: 'AlertTriangle' },
  '/500': { label: 'Server Error', icon: 'AlertTriangle' },
}

// Helper function to build hierarchical breadcrumb chain
const buildBreadcrumbChain = (pathname: string): BreadcrumbItem[] => {
  const breadcrumbs: BreadcrumbItem[] = []
  const routeConfig = routeMapping[pathname]
  
  if (!routeConfig) {
    return []
  }
  
  // Recursively build parent chain
  if (routeConfig.parent) {
    const parentBreadcrumbs = buildBreadcrumbChain(routeConfig.parent)
    breadcrumbs.push(...parentBreadcrumbs)
    
    // Add parent as clickable link
    const parentConfig = routeMapping[routeConfig.parent]
    if (parentConfig) {
      breadcrumbs.push({
        label: parentConfig.label,
        href: routeConfig.parent,
        icon: parentConfig.icon
      })
    }
  }
  
  return breadcrumbs
}

// Helper function to format path segments into readable labels
const formatSegmentLabel = (segment: string): string => {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const useBreadcrumbs = (): BreadcrumbItem[] => {
  const location = useLocation()
  
  return useMemo(() => {
    const pathname = location.pathname
    const breadcrumbs: BreadcrumbItem[] = []
    
    // Always show Home as root (except on home page itself)
    if (pathname !== '/') {
      breadcrumbs.push({
        label: 'Home',
        href: '/',
        icon: 'Home'
      })
    }
    
    // Handle root path - show just Home as current
    if (pathname === '/') {
      return [{ label: 'Home', current: true, icon: 'Home' }]
    }
    
    // Handle exact route matches with parent hierarchy
    const routeConfig = routeMapping[pathname]
    if (routeConfig) {
      // Build parent chain
      const parentChain = buildBreadcrumbChain(pathname)
      breadcrumbs.push(...parentChain)
      
      // Add current page
      breadcrumbs.push({
        label: routeConfig.label,
        current: true,
        icon: routeConfig.icon
      })
      
      return breadcrumbs
    }
    
    // Handle dynamic/unmapped routes by building from path segments
    const pathSegments = pathname.split('/').filter(Boolean)
    
    for (let i = 0; i < pathSegments.length; i++) {
      const currentPath = '/' + pathSegments.slice(0, i + 1).join('/')
      const config = routeMapping[currentPath]
      
      if (config) {
        // Use mapped route configuration
        breadcrumbs.push({
          label: config.label,
          href: i === pathSegments.length - 1 ? undefined : currentPath,
          current: i === pathSegments.length - 1,
          icon: config.icon
        })
      } else {
        // Create breadcrumb from path segment
        const segment = pathSegments[i]
        const label = formatSegmentLabel(segment)
        
        breadcrumbs.push({
          label,
          href: i === pathSegments.length - 1 ? undefined : currentPath,
          current: i === pathSegments.length - 1
        })
      }
    }
    
    return breadcrumbs
  }, [location.pathname])
}

// Always show breadcrumbs - determine display style based on context
export const getBreadcrumbConfig = (pathname: string) => {
  const pathDepth = pathname.split('/').filter(Boolean).length
  
  return {
    // Show breadcrumbs on all pages except home
    show: pathname !== '/',
    
    // Ultra-minimal style for top-level pages to avoid navbar conflicts
    style: pathDepth <= 1 ? 'minimal' : 'full',
    
    // Show home icon for all pages except home itself
    showHome: pathname !== '/',
    
    // Less animation on simple pages to keep focus on navbar
    animated: pathDepth > 1,
    
    // Special styling for certain page types - more subtle approach
    variant: (() => {
      if (pathname.startsWith('/auth/')) return 'auth' as const
      if (pathname.startsWith('/admin/')) return 'admin' as const
      if (pathname.startsWith('/dashboard')) return 'dashboard' as const
      if (pathname.startsWith('/library/')) return 'library' as const
      return 'default' as const
    })()
  }
}

// Helper function to get navigation context for dead-end pages
export const getNavigationContext = (pathname: string) => {
  const contexts = {
    '/auth/login': {
      title: 'Welcome back',
      subtitle: 'Sign in to your account',
      backLink: { href: '/', label: 'Back to Home' },
      alternativeAction: { href: '/auth/register', label: "Don't have an account? Sign up" }
    },
    '/auth/register': {
      title: 'Join MccHub Leximius',
      subtitle: 'Create your account to get started',
      backLink: { href: '/', label: 'Back to Home' },
      alternativeAction: { href: '/auth/login', label: 'Already have an account? Sign in' }
    },
    '/legal/privacy': {
      title: 'Privacy Policy',
      subtitle: 'How we protect your data',
      backLink: { href: '/', label: 'Back to Home' },
    },
    '/legal/terms': {
      title: 'Terms of Service',
      subtitle: 'Our terms and conditions',
      backLink: { href: '/', label: 'Back to Home' },
    }
  }
  
  return contexts[pathname as keyof typeof contexts]
}