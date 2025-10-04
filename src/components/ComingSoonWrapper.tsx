import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { ComingSoonPage } from './ComingSoonPage'
import { getComingSoonInfo, getPopularRoutes } from '../config/navigationConfig'
import { Zap, Star, Users, TrendingUp } from 'lucide-react'

export const ComingSoonWrapper: React.FC = () => {
  const [searchParams] = useSearchParams()
  const requestedPage = searchParams.get('page') || ''
  
  const comingSoonInfo = getComingSoonInfo(requestedPage)
  const popularRoutes = getPopularRoutes()
  
  // Convert popular routes to the format expected by ComingSoonPage
  const relatedPages = popularRoutes.slice(0, 4).map((route, index) => {
    const icons = [
      <Zap className="w-5 h-5" />,
      <Star className="w-5 h-5" />,
      <Users className="w-5 h-5" />,
      <TrendingUp className="w-5 h-5" />
    ]
    
    return {
      title: route.label,
      href: route.path,
      description: getRouteDescription(route.path),
      icon: icons[index % icons.length]
    }
  })
  
  return (
    <ComingSoonPage
      title={comingSoonInfo?.title || 'Page Coming Soon'}
      description={comingSoonInfo?.description || "We're working hard to bring you this amazing feature."}
      expectedDate={comingSoonInfo?.expectedDate}
      relatedPages={relatedPages}
    />
  )
}

// Helper function to get route descriptions
const getRouteDescription = (path: string): string => {
  const descriptions: Record<string, string> = {
    '/': 'Discover our React component library',
    '/about': 'Learn about our mission and team',
    '/library': 'Explore our comprehensive React components',
    '/library/getting-started': 'Learn how to integrate our components',
    '/pricing': 'Find the perfect plan for your needs',
    '/contact': 'Get in touch with our team',
    '/blog': 'Read the latest updates and tutorials',
    '/docs': 'Comprehensive documentation and guides'
  }
  
  return descriptions[path] || 'Explore this section of our platform'
}