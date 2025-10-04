import React from 'react'
import { Link } from 'react-router-dom'
import { Book, Code, Zap, Layers, ArrowRight, Search, Star } from 'lucide-react'

export const DocsPage: React.FC = () => {
  const sections = [
    {
      title: "Getting Started",
      description: "Quick start guide to using MccHub Leximius components",
      icon: <Zap className="w-6 h-6" />,
      links: [
        { title: "Installation", href: "/docs/installation" },
        { title: "Setup & Configuration", href: "/docs/setup" },
        { title: "First Component", href: "/docs/first-component" },
        { title: "Theme Customization", href: "/docs/theming" }
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Components",
      description: "Comprehensive guide to all available components",
      icon: <Layers className="w-6 h-6" />,
      links: [
        { title: "Button", href: "/docs/components/button" },
        { title: "Input", href: "/docs/components/input" },
        { title: "Card", href: "/docs/components/card" },
        { title: "Modal", href: "/docs/components/modal" }
      ],
      gradient: "from-brand-500 to-purple-600"
    },
    {
      title: "Advanced",
      description: "Advanced patterns and customization techniques",
      icon: <Code className="w-6 h-6" />,
      links: [
        { title: "Custom Hooks", href: "/docs/hooks" },
        { title: "TypeScript Types", href: "/docs/typescript" },
        { title: "Performance", href: "/docs/performance" },
        { title: "Best Practices", href: "/docs/best-practices" }
      ],
      gradient: "from-purple-500 to-pink-600"
    }
  ]

  const popularDocs = [
    "Button Component",
    "Getting Started",
    "Theme Customization",
    "TypeScript Integration",
    "Performance Tips"
  ]

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-brand-50">
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-brand-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-brand-50 border border-brand-200 rounded-full text-brand-700 text-sm font-medium mb-8 animate-fade-in-up">
            <Book className="w-4 h-4 mr-2" />
            Comprehensive Documentation
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <span className="text-gray-900 block mb-2">Learn</span>
            <span className="bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">everything</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Complete guides, API references, and examples to help you build amazing applications with MccHub Leximius.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent shadow-elegant"
            />
          </div>
        </div>
      </div>

      {/* Documentation Sections */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="card-elevated p-8 hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-r ${section.gradient} rounded-3xl mb-6 flex items-center justify-center text-white shadow-elegant-lg`}>
                  {section.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{section.description}</p>
                
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="flex items-center text-gray-700 hover:text-brand-600 transition-colors group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Documentation */}
      <div className="py-24 bg-gradient-to-r from-gray-50 to-brand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-success-50 border border-success-200 rounded-full text-success-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Most Popular
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently accessed <span className="text-gradient">docs</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12">
            Start with these popular documentation pages
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDocs.map((doc, index) => (
              <Link
                key={index}
                to={`/docs/${doc.toLowerCase().replace(/\s+/g, '-')}`}
                className="card-glass p-6 text-left hover-lift group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
                  {doc}
                </h3>
                <ArrowRight className="w-4 h-4 mt-2 text-gray-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Quick <span className="text-gradient">links</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/library/getting-started" className="card-elevated p-8 text-left hover-lift group">
              <Zap className="w-12 h-12 text-brand-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                Quick Start Guide
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get up and running with MccHub Leximius in minutes
              </p>
              <ArrowRight className="w-5 h-5 mt-4 text-brand-600 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link to="/library/playground" className="card-elevated p-8 text-left hover-lift group">
              <Code className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                Interactive Playground
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Try components live with interactive examples
              </p>
              <ArrowRight className="w-5 h-5 mt-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}