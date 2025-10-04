import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Zap, Shield, Code2, Sparkles, Rocket, ChevronRight, Play } from 'lucide-react'

export const HomePage: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Enhanced Hero Section with More Dynamic Elements */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-brand-50">
        {/* Enhanced Background decorations */}
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-brand-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        {/* More Floating elements for visual richness */}
        <div className="absolute top-20 right-20 animate-float">
          <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl rotate-12 shadow-elegant-lg"></div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{animationDelay: '2s'}}>
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl -rotate-12 shadow-elegant"></div>
        </div>
        <div className="absolute top-1/3 left-10 animate-float" style={{animationDelay: '3s'}}>
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full shadow-elegant opacity-60"></div>
        </div>
        <div className="absolute bottom-1/3 right-10 animate-float" style={{animationDelay: '4s'}}>
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg rotate-45 shadow-elegant opacity-70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Enhanced Badge with more appeal */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-50 to-purple-50 border border-brand-200 rounded-full text-brand-700 text-sm font-medium mb-8 animate-fade-in-up shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
            <Sparkles className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            <span className="font-semibold">Introducing MccHub Leximius v2.0</span>
            <div className="ml-2 px-2 py-1 bg-brand-600 text-white text-xs rounded-full">NEW</div>
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
          
          {/* Enhanced Main heading with more impact */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <span className="block text-gray-900 mb-2">Build the</span>
            <span className="block bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Future of Web
            </span>
            <span className="block text-gray-900 text-6xl md:text-7xl lg:text-8xl mt-2">with Style</span>
          </h1>
          
          {/* Enhanced Subtitle with more compelling copy */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            The most advanced React component library trusted by{" "}
            <span className="text-brand-600 font-semibold">10,000+ developers</span> worldwide. 
            Build stunning applications with{" "}
            <span className="text-purple-600 font-semibold">50+ premium components</span>, 
            TypeScript-first architecture, and production-ready excellence.
          </p>
          
          {/* Enhanced CTA Buttons with more options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <Link 
              to="/library" 
              className="group bg-gradient-to-r from-brand-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-brand-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center shadow-elegant-lg hover:shadow-glow transform hover:-translate-y-1 text-lg"
            >
              <Code2 className="mr-3 group-hover:animate-pulse" size={24} />
              Start Building Free
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
            
            <Link 
              to="/library/playground" 
              className="group bg-white text-gray-900 border-2 border-gray-200 px-10 py-5 rounded-2xl font-semibold hover:border-brand-300 hover:bg-brand-50 transition-all duration-300 inline-flex items-center shadow-elegant hover:shadow-elegant-lg text-lg"
            >
              <Play className="mr-3 group-hover:animate-bounce" size={24} />
              Live Demo
            </Link>
            
            <Link 
              to="/auth/register" 
              className="group bg-gray-900 text-white px-10 py-5 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 inline-flex items-center shadow-elegant-lg text-lg"
            >
              <Rocket className="mr-3" size={24} />
              Get Started
            </Link>
          </div>
          
          {/* Enhanced Stats with visual improvements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="text-center group">
              <div className="relative inline-block">
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">50+</div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <div className="text-sm text-gray-600">Premium Components</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-brand-600 mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-sm text-gray-600">TypeScript</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">10k+</div>
              <div className="text-sm text-gray-600">Happy Developers</div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center group-hover:border-brand-400 transition-colors">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse group-hover:bg-brand-400"></div>
          </div>
          <p className="text-xs text-gray-400 mt-2 group-hover:text-brand-400 transition-colors">Scroll</p>
        </div>
      </div>

      {/* Advanced Features Section with Enhanced Design */}
      <div className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-brand-100 to-purple-100 rounded-full blur-3xl opacity-30 -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-30 translate-x-32 translate-y-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-50 to-purple-50 border border-brand-200 rounded-full text-brand-700 text-sm font-medium mb-8 shadow-sm">
              <Zap className="w-4 h-4 mr-2" />
              Powerful Features
              <div className="ml-2 px-2 py-1 bg-brand-100 text-brand-800 text-xs rounded-full">50+</div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Everything you need to{" "}
              <span className="text-gradient">build faster</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Production-ready components with modern development practices, designed for teams that ship fast.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enhanced Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative card-elevated p-10 hover-lift hover:shadow-glow transition-all duration-500 border-0 ring-1 ring-gray-200 group-hover:ring-brand-300">
                <div className="w-20 h-20 bg-gradient-to-r from-brand-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-elegant-lg">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Optimized for performance with tree-shaking, lazy loading, and minimal bundle size. 
                  Built for speed without compromising functionality.
                </p>
                <div className="flex items-center text-brand-600 font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  Learn more 
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
            
            {/* Enhanced Feature 2 */}
            <div className="group relative" style={{animationDelay: '0.1s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative card-elevated p-10 hover-lift hover:shadow-glow transition-all duration-500 border-0 ring-1 ring-gray-200 group-hover:ring-green-300">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-elegant-lg">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Type Safe</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  100% TypeScript with comprehensive type definitions, excellent IntelliSense support, 
                  and compile-time error checking for bulletproof development.
                </p>
                <div className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  Learn more 
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
            
            {/* Enhanced Feature 3 */}
            <div className="group relative" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative card-elevated p-10 hover-lift hover:shadow-glow transition-all duration-500 border-0 ring-1 ring-gray-200 group-hover:ring-purple-300">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-elegant-lg">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Focused</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Designed for collaborative development with consistent design tokens, 
                  comprehensive theming, and scalable component architecture.
                </p>
                <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  Learn more 
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
            
            {/* Enhanced Feature 4 */}
            <div className="group relative" style={{animationDelay: '0.3s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative card-elevated p-10 hover-lift hover:shadow-glow transition-all duration-500 border-0 ring-1 ring-gray-200 group-hover:ring-orange-300">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-elegant-lg">
                  <Code2 className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Developer First</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Intuitive APIs, comprehensive documentation, live examples, and a powerful 
                  playground for rapid prototyping and experimentation.
                </p>
                <div className="flex items-center text-orange-600 font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  Learn more 
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
            
            {/* Enhanced Feature 5 */}
            <div className="group relative" style={{animationDelay: '0.4s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative card-elevated p-10 hover-lift hover:shadow-glow transition-all duration-500 border-0 ring-1 ring-gray-200 group-hover:ring-cyan-300">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-elegant-lg">
                  <Sparkles className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessible</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Built following WAI-ARIA guidelines with keyboard navigation, screen reader support, 
                  and WCAG 2.1 AA compliance out of the box.
                </p>
                <div className="flex items-center text-cyan-600 font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  Learn more 
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
            
            {/* Enhanced Feature 6 */}
            <div className="group relative" style={{animationDelay: '0.5s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative card-elevated p-10 hover-lift hover:shadow-glow transition-all duration-500 border-0 ring-1 ring-gray-200 group-hover:ring-indigo-300">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-elegant-lg">
                  <Rocket className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Production Ready</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Battle-tested in production by thousands of developers. Comprehensive testing, 
                  regular updates, and enterprise-grade reliability.
                </p>
                <div className="flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  Learn more 
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional feature highlights */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-8 px-8 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-elegant">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Component Showcase Section - NEW */}
      <div className="py-32 bg-gradient-to-br from-white via-gray-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-8 shadow-sm">
              <Code2 className="w-4 h-4 mr-2" />
              Interactive Components
              <div className="ml-2 px-2 py-1 bg-purple-500 text-white text-xs rounded-full">Live</div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              See them in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Experience our components firsthand with live, interactive examples that showcase real-world usage.
            </p>
          </div>
          
          {/* Component Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Button Component Preview */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 border border-gray-200 hover:border-purple-300">
              <div className="absolute top-4 right-4 px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                Button
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Buttons</h3>
                <p className="text-gray-600 text-sm">Multiple variants and states</p>
              </div>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5">
                  Primary Button
                </div>
                <div className="bg-white border-2 border-purple-300 text-purple-600 px-6 py-3 rounded-xl font-semibold text-center hover:bg-purple-50 transition-all duration-200 cursor-pointer">
                  Secondary Button
                </div>
                <div className="text-purple-600 px-6 py-3 rounded-xl font-semibold text-center hover:bg-purple-50 transition-all duration-200 cursor-pointer">
                  Ghost Button
                </div>
              </div>
            </div>
            
            {/* Card Component Preview */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 border border-gray-200 hover:border-blue-300">
              <div className="absolute top-4 right-4 px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                Card
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Cards</h3>
                <p className="text-gray-600 text-sm">Elegant and customizable</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover:shadow-md transition-all duration-200 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-4"></div>
                <h4 className="font-semibold text-gray-900 mb-2">Card Title</h4>
                <p className="text-gray-600 text-sm">Beautiful cards with hover effects and customizable content.</p>
              </div>
            </div>
            
            {/* Input Component Preview */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 border border-gray-200 hover:border-green-300">
              <div className="absolute top-4 right-4 px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                Input
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Inputs</h3>
                <p className="text-gray-600 text-sm">Accessible and responsive</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm text-center">
                  ✓ Validation included
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA to explore more */}
          <div className="text-center">
            <Link 
              to="/library" 
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-elegant-lg hover:shadow-glow transform hover:-translate-y-1 text-lg"
            >
              <Code2 className="mr-3 group-hover:animate-pulse" size={24} />
              Explore All 50+ Components
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Social Proof Section */}
      <div className="py-32 bg-gradient-to-br from-gray-50 via-white to-brand-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-2xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-green-200 to-teal-200 rounded-full blur-2xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-full text-yellow-700 text-sm font-medium mb-8 shadow-sm">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Loved by Developers
              <div className="ml-2 px-2 py-1 bg-yellow-500 text-white text-xs rounded-full">4.9★</div>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Trusted by{" "}
              <span className="text-gradient">industry leaders</span>
            </h3>
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current w-6 h-6" />
                ))}
              </div>
              <span className="text-xl text-gray-600 ml-4 font-semibold">4.9/5</span>
              <span className="text-lg text-gray-500">from 2,000+ developers</span>
            </div>
            <p className="text-xl text-gray-600 mb-16">
              Join thousands of developers building the future with MccHub Leximius
            </p>
          </div>
          
          {/* Enhanced Company logos */}
          <div className="mb-20">
            <p className="text-center text-sm text-gray-500 mb-8">Used by teams at these amazing companies</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {[
                { name: 'Google', gradient: 'from-blue-500 to-red-500' },
                { name: 'Microsoft', gradient: 'from-blue-600 to-cyan-500' },
                { name: 'GitHub', gradient: 'from-gray-700 to-gray-900' },
                { name: 'Vercel', gradient: 'from-black to-gray-700' },
                { name: 'Linear', gradient: 'from-purple-600 to-blue-600' }
              ].map((company, index) => (
                <div key={index} className="group flex items-center justify-center h-20 transition-all duration-300">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${company.gradient} bg-clip-text text-transparent opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                    {company.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative card-glass p-10 text-center hover-lift transition-all duration-300 border-0 ring-1 ring-gray-200 group-hover:ring-blue-300">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">
                  "MccHub Leximius has completely transformed our development workflow. The components are beautiful and the TypeScript support is incredible."
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-elegant">
                    JS
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">John Smith</div>
                    <div className="text-sm text-gray-600">Lead Developer at Google</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative" style={{animationDelay: '0.1s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative card-glass p-10 text-center hover-lift transition-all duration-300 border-0 ring-1 ring-gray-200 group-hover:ring-purple-300">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">
                  "The accessibility features and documentation are top-notch. Our entire team adopted it within a week. Game changer!"
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-elegant">
                    SM
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">Sarah Miller</div>
                    <div className="text-sm text-gray-600">Product Manager at Microsoft</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative card-glass p-10 text-center hover-lift transition-all duration-300 border-0 ring-1 ring-gray-200 group-hover:ring-green-300">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">
                  "Outstanding component library with excellent performance. The playground feature helps us prototype incredibly fast."
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-elegant">
                    MJ
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">Mike Johnson</div>
                    <div className="text-sm text-gray-600">CTO at GitHub</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional social proof metrics */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">2M+</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">50k+</div>
              <div className="text-sm text-gray-600">GitHub Stars</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">10k+</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section with More Impact */}
      <div className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Enhanced background pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50m-25 0a25 25 0 1 1 50 0a25 25 0 1 1 -50 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Dynamic floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-brand-400 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl blur-xl opacity-30 rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-lg opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg blur-lg opacity-20 animate-float rotate-45" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8 shadow-lg">
              <Rocket className="w-4 h-4 mr-2" />
              Ready to Transform Your Development?
              <div className="ml-2 px-2 py-1 bg-brand-500 text-white text-xs rounded-full">Free</div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Start building{" "}
            <span className="bg-gradient-to-r from-brand-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              extraordinary apps
            </span>
            <br />
            <span className="text-4xl md:text-6xl text-gray-300">today</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers who are already building the future with MccHub Leximius. 
            Start your free trial and experience the difference premium components make.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              to="/auth/register" 
              className="group relative bg-gradient-to-r from-brand-500 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold hover:from-brand-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center shadow-2xl hover:shadow-brand-500/25 transform hover:-translate-y-1 text-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Rocket className="mr-3 group-hover:animate-bounce relative z-10" size={28} />
              <span className="relative z-10">Start Free Trial</span>
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform relative z-10" size={28} />
            </Link>
            
            <Link 
              to="/library/playground" 
              className="group bg-white/10 backdrop-blur-sm text-white hover:text-white px-12 py-6 rounded-2xl font-semibold border-2 border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 inline-flex items-center text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Play className="mr-3 group-hover:animate-pulse" size={28} />
              Watch Demo
              <ChevronRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
            </Link>
          </div>
          
          {/* Enhanced guarantee badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-brand-400 mb-2">14-day</div>
              <div className="text-gray-300 text-sm">Free Trial</div>
              <div className="text-xs text-gray-400 mt-1">No credit card required</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Expert Support</div>
              <div className="text-xs text-gray-400 mt-1">Always here to help</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime SLA</div>
              <div className="text-xs text-gray-400 mt-1">Enterprise reliability</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}