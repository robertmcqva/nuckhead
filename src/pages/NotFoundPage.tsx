import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Compass } from 'lucide-react'
import { getPopularRoutes } from '../config/navigationConfig'

export const NotFoundPage: React.FC = () => {
  const popularRoutes = getPopularRoutes().slice(0, 4) // Get top 4 popular pages
  
  const routeDescriptions: Record<string, string> = {
    '/library': 'Browse our comprehensive component library',
    '/library/getting-started': 'Learn how to integrate our components',
    '/pricing': 'View our pricing plans and features',
    '/contact': 'Get in touch with our team',
    '/blog': 'Read the latest updates and tutorials',
    '/about': 'Learn about our mission and team',
    '/docs': 'Comprehensive documentation and guides'
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. 
          It might have been moved, deleted, or the URL might be incorrect.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="btn-enhanced-gradient inline-flex items-center justify-center"
          >
            <Home className="mr-2" size={20} />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="btn-secondary inline-flex items-center justify-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Go Back
          </button>
        </div>

        {/* Popular Pages */}
        <div className="bg-white rounded-2xl shadow-elegant p-8">
          <div className="flex items-center justify-center mb-6">
            <Compass className="w-6 h-6 text-brand-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Popular Pages</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularRoutes.map((route, index) => (
              <Link
                key={index}
                to={route.path}
                className="text-left p-4 rounded-xl border border-gray-200 hover:border-brand-300 hover:bg-brand-50 transition-all duration-200 group"
              >
                <h4 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
                  {route.label}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {routeDescriptions[route.path] || 'Explore this section of our platform'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}