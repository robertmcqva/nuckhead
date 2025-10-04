import React from 'react'
import { Link as RouterLink, type LinkProps } from 'react-router-dom'
import { isRouteAvailable } from '../config/navigationConfig'

interface SmartLinkProps extends Omit<LinkProps, 'to'> {
  to: string
  children: React.ReactNode
  className?: string
  forceExternal?: boolean
}

export const SmartLink: React.FC<SmartLinkProps> = ({ 
  to, 
  children, 
  className = '', 
  forceExternal = false,
  ...props 
}) => {
  // Check if it's an external link
  const isExternalLink = to.startsWith('http') || to.startsWith('mailto:') || forceExternal
  
  // Check if route is available
  const routeAvailable = isRouteAvailable(to)
  
  // Handle external links
  if (isExternalLink) {
    return (
      <a 
        href={to} 
        className={className}
        target="_blank" 
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }
  
  // Handle unavailable internal routes - redirect to coming soon
  if (!routeAvailable) {
    return (
      <RouterLink 
        to={`/coming-soon?page=${encodeURIComponent(to)}`} 
        className={className}
        {...props}
      >
        {children}
      </RouterLink>
    )
  }
  
  // Handle available internal routes
  return (
    <RouterLink 
      to={to} 
      className={className}
      {...props}
    >
      {children}
    </RouterLink>
  )
}

// Hook to check route availability
export const useRouteAvailability = (path: string) => {
  return {
    isAvailable: isRouteAvailable(path),
    shouldRedirect: !isRouteAvailable(path)
  }
}