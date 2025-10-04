// MccHub Leximius Component Library Overview Page
import React from 'react'
import { Link } from 'react-router-dom'
import { Code, Palette, Zap, Shield, Users, BookOpen } from 'lucide-react'

export const LibraryOverviewPage: React.FC = () => {
  const features = [
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: 'TypeScript First',
      description: 'Built with TypeScript for better development experience and type safety.',
    },
    {
      icon: <Palette className="text-purple-600" size={32} />,
      title: 'Tailwind CSS',
      description: 'Styled with Tailwind CSS for consistent and customizable design.',
    },
    {
      icon: <Zap className="text-yellow-600" size={32} />,
      title: 'High Performance',
      description: 'Optimized components for fast loading and smooth interactions.',
    },
    {
      icon: <Shield className="text-green-600" size={32} />,
      title: 'Accessible',
      description: 'Built following WAI-ARIA guidelines for maximum accessibility.',
    },
    {
      icon: <Users className="text-indigo-600" size={32} />,
      title: 'Team Ready',
      description: 'Designed for collaborative development with consistent patterns.',
    },
    {
      icon: <BookOpen className="text-orange-600" size={32} />,
      title: 'Well Documented',
      description: 'Comprehensive documentation with examples and best practices.',
    },
  ]

  const stats = [
    { label: 'Components', value: '25+' },
    { label: 'Hooks', value: '15+' },
    { label: 'Utilities', value: '30+' },
    { label: 'Examples', value: '100+' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Code className="text-white" size={32} />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            MccHub Leximius
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          A modern React component library built with TypeScript and Tailwind CSS. 
          Create beautiful, accessible, and performant user interfaces with ease.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/library/components"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Browse Components
            <Code className="ml-2" size={20} />
          </Link>
          <Link
            to="/library/getting-started"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/library/playground"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Try Playground
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Why Choose MccHub Leximius?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Start */}
      <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Building?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get up and running with MccHub Leximius in minutes. Install the package and start using our components right away.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-8 text-left">
          <code className="text-green-400 font-mono">
            npm install @mcchub/leximius
          </code>
        </div>
        <Link
          to="/library/installation"
          className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
        >
          View Installation Guide
          <BookOpen className="ml-2" size={20} />
        </Link>
      </div>
    </div>
  )
}