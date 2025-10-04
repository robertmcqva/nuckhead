import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { User, ChevronDown, Code2, Sparkles, Github, Twitter, Linkedin, Instagram, ArrowRight, Star, Zap, Heart, Users, Globe, MessageCircle, BookOpen } from 'lucide-react'
import { Breadcrumb } from './Breadcrumb'
import { useBreadcrumbs, getBreadcrumbConfig } from '../hooks/useBreadcrumbs'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false)
  const location = useLocation()
  const breadcrumbs = useBreadcrumbs()
  const breadcrumbConfig = getBreadcrumbConfig(location.pathname)
  
  const isAuthPage = location.pathname.startsWith('/auth')
  const isDashboard = location.pathname.startsWith('/dashboard') || 
                     location.pathname.startsWith('/profile') ||
                     location.pathname.startsWith('/projects') ||
                     location.pathname.startsWith('/analytics') ||
                     location.pathname.startsWith('/admin')

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setIsMenuOpen(false)
      setIsUserMenuOpen(false)
    }
    if (isMenuOpen || isUserMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen, isUserMenuOpen])

  return (
    <div className="min-h-screen bg-gray-50">
      {!isAuthPage && (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-elegant">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0 flex items-center group">
                  <div className="relative">
                    <Code2 className="h-8 w-8 text-brand-600 group-hover:text-brand-700 transition-colors" />
                    <Sparkles className="h-3 w-3 text-brand-400 absolute -top-1 -right-1 animate-pulse" />
                  </div>
                  <h1 className="ml-3 text-xl font-bold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                    MccHub Leximius
                  </h1>
                </Link>
                
                {!isDashboard && (
                  <div className="hidden md:ml-8 md:flex md:space-x-1">
                    <Link to="/about" className="nav-link group">
                      <span className="relative">
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link to="/services" className="nav-link group">
                      <span className="relative">
                        Services
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link to="/library" className="nav-link group">
                      <span className="relative">
                        Components
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link to="/pricing" className="nav-link group">
                      <span className="relative">
                        Pricing
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link to="/blog" className="nav-link group">
                      <span className="relative">
                        Blog
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link to="/contact" className="nav-link group">
                      <span className="relative">
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-4">
                {isDashboard ? (
                  <div className="flex items-center space-x-1">
                    <Link to="/dashboard" className="nav-link">
                      Dashboard
                    </Link>
                    <Link to="/projects" className="nav-link">
                      Projects
                    </Link>
                    <Link to="/analytics" className="nav-link">
                      Analytics
                    </Link>
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                      <button 
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        className="flex items-center space-x-2 nav-link"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-brand-500 to-purple-600 rounded-full flex items-center justify-center">
                          <User size={16} className="text-white" />
                        </div>
                        <ChevronDown size={16} className={`transform transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isUserMenuOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-elegant-lg border border-gray-100 py-2 z-50 animate-fade-in-down">
                          <div className="px-4 py-3 border-b border-gray-100">
                            <p className="text-sm font-medium text-gray-900">John Doe</p>
                            <p className="text-xs text-gray-500">john@example.com</p>
                          </div>
                          <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                            <User size={16} className="inline mr-3" />
                            Profile
                          </Link>
                          <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                            Settings
                          </Link>
                          <hr className="my-2" />
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                            Sign out
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3">
                    <Link to="/auth/login" className="btn-ghost whitespace-nowrap">
                      Sign in
                    </Link>
                    <Link to="/auth/register" className="btn-enhanced-gradient whitespace-nowrap">
                      Get started
                    </Link>
                  </div>
                )}

                {/* Mobile menu button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsMenuOpen(!isMenuOpen)
                  }}
                  className="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <div className="relative w-6 h-6">
                    <span className={`absolute top-2 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                    <span className={`absolute top-3.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-elegant-lg z-40 animate-fade-in-down">
                <div className="px-4 py-6 space-y-4">
                  {!isDashboard ? (
                    <>
                      <Link 
                        to="/about" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About
                      </Link>
                      <Link 
                        to="/services" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Services
                      </Link>
                      <Link 
                        to="/library" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Components
                      </Link>
                      <Link 
                        to="/pricing" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Pricing
                      </Link>
                      <Link 
                        to="/blog" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Blog
                      </Link>
                      <Link 
                        to="/contact" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact
                      </Link>
                      <hr className="my-4" />
                      <Link 
                        to="/auth/login" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign in
                      </Link>
                      <Link 
                        to="/auth/register" 
                        className="btn-enhanced-gradient block text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Get started
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link 
                        to="/dashboard" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link 
                        to="/projects" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Projects
                      </Link>
                      <Link 
                        to="/analytics" 
                        className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Analytics
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </nav>
        </header>
      )}

      <main className="flex-1">
        {/* Simple breadcrumb navigation */}
        {breadcrumbConfig.show && !isAuthPage && breadcrumbs.length > 0 && (
          <Breadcrumb 
            items={breadcrumbs}
            showHome={breadcrumbConfig.showHome}
          />
        )}
        
        {/* Content with appropriate top spacing when breadcrumb is present */}
        <div className={
          breadcrumbConfig.show && !isAuthPage && breadcrumbs.length > 0 
            ? 'pt-10 bg-gray-50' 
            : ''
        }>
          {children}
        </div>
      </main>

      {!isAuthPage && !isDashboard && (
        <footer className="relative overflow-hidden">
          {/* Premium Footer with Enhanced Design */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black relative">
            {/* Advanced Background Elements */}
            <div className="absolute inset-0 bg-mesh opacity-5"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-brand-500/15 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-radial from-pink-500/8 to-transparent rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            
            <div className="relative max-w-7xl mx-auto">
              {/* Top CTA Section */}
              <div className="px-4 sm:px-6 lg:px-8 py-20 text-center border-b border-gray-800/50">
                <div className="max-w-4xl mx-auto">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-500/20 to-purple-500/20 backdrop-blur-sm border border-brand-500/30 rounded-full text-brand-400 text-sm font-medium mb-8 shadow-lg">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Join the Revolution
                    <div className="ml-2 px-2 py-1 bg-brand-500 text-white text-xs rounded-full">Free</div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Ready to{" "}
                    <span className="bg-gradient-to-r from-brand-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      transform
                    </span>{" "}
                    your development?
                  </h2>
                  
                  <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Join 10,000+ developers building the future with our premium component library.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Link 
                      to="/auth/register" 
                      className="group bg-gradient-to-r from-brand-500 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold hover:from-brand-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-brand-500/25 transform hover:-translate-y-1 text-lg"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                    
                    <Link 
                      to="/library" 
                      className="group bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-2xl font-semibold border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 inline-flex items-center text-lg"
                    >
                      Explore Components
                    </Link>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                    {['Google', 'Microsoft', 'GitHub', 'Vercel', 'Linear'].map((company, index) => (
                      <div key={index} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
                        {company}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Main Footer Content */}
              <div className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
                  {/* Brand Section - Enhanced */}
                  <div className="lg:col-span-2">
                    <div className="group flex items-center mb-8">
                      <div className="relative">
                        <Code2 className="h-10 w-10 text-brand-400 group-hover:text-brand-300 transition-colors" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <h3 className="ml-3 text-2xl font-bold text-white">MccHub Leximius</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                      Building the future of professional web applications with cutting-edge React components and modern design patterns.
                    </p>
                    
                    {/* Enhanced Social Links */}
                    <div className="flex space-x-4 mb-8">
                      <a href="#" className="group w-12 h-12 bg-gray-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-brand-600 transition-all duration-300 hover-lift border border-gray-700 hover:border-brand-500">
                        <Github size={20} className="text-gray-300 group-hover:text-white" />
                      </a>
                      <a href="#" className="group w-12 h-12 bg-gray-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover-lift border border-gray-700 hover:border-blue-500">
                        <Twitter size={20} className="text-gray-300 group-hover:text-white" />
                      </a>
                      <a href="#" className="group w-12 h-12 bg-gray-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover-lift border border-gray-700 hover:border-blue-500">
                        <Linkedin size={20} className="text-gray-300 group-hover:text-white" />
                      </a>
                      <a href="#" className="group w-12 h-12 bg-gray-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover-lift border border-gray-700 hover:border-pink-500">
                        <Instagram size={20} className="text-gray-300 group-hover:text-white" />
                      </a>
                    </div>
                    
                    {/* Status Indicators */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-gray-400">All systems operational</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-gray-400">99.9% uptime</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Navigation Columns */}
                  <div>
                    <h4 className="font-bold mb-6 text-lg text-white flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-brand-400" />
                      Product
                    </h4>
                    <ul className="space-y-4">
                      <li><Link to="/library" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Components</span>
                        <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link></li>
                      <li><Link to="/library/getting-started" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Getting Started</span>
                        <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link></li>
                      <li><Link to="/library/playground" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Playground</span>
                        <div className="ml-2 px-2 py-0.5 bg-brand-500 text-white text-xs rounded-full">New</div>
                      </Link></li>
                      <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Pricing</span>
                        <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link></li>
                      <li><Link to="/integrations" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Integrations</span>
                        <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-6 text-lg text-white flex items-center">
                      <Users className="w-4 h-4 mr-2 text-purple-400" />
                      Company
                    </h4>
                    <ul className="space-y-4">
                      <li><Link to="/about" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>About Us</span>
                        <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link></li>
                      <li><Link to="/blog" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Blog</span>
                        <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link></li>
                      <li><Link to="/contact" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Contact</span>
                        <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link></li>
                      <li><Link to="/careers" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Careers</span>
                        <div className="ml-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">Hiring</div>
                      </Link></li>
                      <li><Link to="/press" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Press Kit</span>
                        <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-6 text-lg text-white flex items-center">
                      <Heart className="w-4 h-4 mr-2 text-pink-400" />
                      Support
                    </h4>
                    <ul className="space-y-4">
                      <li><Link to="/help" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Help Center</span>
                        <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link></li>
                      <li><Link to="/docs" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Documentation</span>
                        <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link></li>
                      <li><Link to="/community" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Community</span>
                        <MessageCircle size={14} className="ml-2 text-green-400" />
                      </Link></li>
                      <li><Link to="/legal/privacy" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Privacy Policy</span>
                        <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link></li>
                      <li><Link to="/legal/terms" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Terms of Service</span>
                        <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link></li>
                    </ul>
                  </div>
                  
                  {/* Enhanced Resources Column */}
                  <div>
                    <h4 className="font-bold mb-6 text-lg text-white flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-cyan-400" />
                      Resources
                    </h4>
                    <ul className="space-y-4">
                      <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Design System</span>
                        <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Templates</span>
                        <div className="ml-2 px-2 py-0.5 bg-purple-500 text-white text-xs rounded-full">Pro</div>
                      </a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Tutorials</span>
                        <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Changelog</span>
                        <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-1 transform block group flex items-center">
                        <span>Status Page</span>
                        <Globe size={14} className="ml-2 text-green-400" />
                      </a></li>
                    </ul>
                  </div>
                </div>
                
                {/* Enhanced Stats Section */}
                <div className="border-t border-gray-800/50 pt-12 mb-12">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="group">
                      <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">10k+</div>
                      <div className="text-sm text-gray-400">Developers</div>
                    </div>
                    <div className="group">
                      <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">2M+</div>
                      <div className="text-sm text-gray-400">Downloads</div>
                    </div>
                    <div className="group">
                      <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">50+</div>
                      <div className="text-sm text-gray-400">Components</div>
                    </div>
                    <div className="group">
                      <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform flex items-center justify-center">
                        4.9
                        <Star size={20} className="ml-1 text-yellow-400 fill-current" />
                      </div>
                      <div className="text-sm text-gray-400">Rating</div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Bottom Section */}
                <div className="border-t border-gray-800/50 pt-8">
                  <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                      <p className="text-gray-400 text-sm">
                        &copy; 2025 MccHub Leximius. All rights reserved.
                      </p>
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-gray-400">Operational</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Heart size={12} className="text-red-400" />
                          <span className="text-xs text-gray-400">Built with React</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-8">
                      <span className="text-gray-400 text-sm">Powered by</span>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 group">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded animate-pulse group-hover:scale-110 transition-transform"></div>
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">TypeScript</span>
                        </div>
                        <div className="flex items-center space-x-2 group">
                          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded animate-pulse group-hover:scale-110 transition-transform"></div>
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">React</span>
                        </div>
                        <div className="flex items-center space-x-2 group">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded animate-pulse group-hover:scale-110 transition-transform"></div>
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Tailwind</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}
