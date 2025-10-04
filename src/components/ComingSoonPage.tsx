import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Clock, Star, TrendingUp, Users, Zap } from 'lucide-react'

interface ComingSoonPageProps {
  title: string
  description?: string
  expectedDate?: string
  relatedPages?: Array<{
    title: string
    href: string
    description: string
    icon: React.ReactNode
  }>
}

export const ComingSoonPage: React.FC<ComingSoonPageProps> = ({
  title,
  description = "We're working hard to bring you this amazing feature.",
  expectedDate,
  relatedPages
}) => {
  const defaultRelatedPages = [
    {
      title: "Component Library",
      href: "/library",
      description: "Explore our comprehensive React components",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Getting Started",
      href: "/library/getting-started",
      description: "Learn how to integrate our components",
      icon: <Star className="w-5 h-5" />
    },
    {
      title: "About Us",
      href: "/about",
      description: "Discover our mission and team",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Contact",
      href: "/contact",
      description: "Get in touch with our team",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ]

  const pagesToShow = relatedPages || defaultRelatedPages

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-brand-600 hover:text-brand-700 transition-colors group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Coming Soon Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-brand-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Clock className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-4">
            Coming Soon
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          
          {expectedDate && (
            <div className="inline-flex items-center px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-medium">
              <Clock size={16} className="mr-2" />
              Expected: {expectedDate}
            </div>
          )}
        </div>

        {/* Popular/Related Pages */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Meanwhile, explore these popular sections
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pagesToShow.map((page, index) => (
              <Link
                key={index}
                to={page.href}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-brand-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-brand-50 rounded-lg mb-4 group-hover:bg-brand-100 transition-colors">
                  {page.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {page.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}