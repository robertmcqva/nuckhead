import React from 'react'
import { Code, Globe, Smartphone, Database, Cloud, Shield, ArrowRight, CheckCircle, Star, Sparkles } from 'lucide-react'

export const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Code className="text-brand-600" size={40} />,
      title: "Component Development",
      description: "Custom React components built with TypeScript, optimized for performance and accessibility.",
      features: ["TypeScript Support", "WAI-ARIA Compliant", "Performance Optimized", "Custom Theming"],
      popular: true
    },
    {
      icon: <Globe className="text-success-600" size={40} />,
      title: "Design Systems",
      description: "Complete design systems with tokens, guidelines, and comprehensive component libraries.",
      features: ["Design Tokens", "Style Guides", "Component Library", "Documentation"],
      popular: false
    },
    {
      icon: <Smartphone className="text-purple-600" size={40} />,
      title: "Responsive Design",
      description: "Mobile-first responsive designs that work seamlessly across all devices and screen sizes.",
      features: ["Mobile-First", "Cross-Browser", "Touch-Friendly", "Progressive Enhancement"],
      popular: false
    },
    {
      icon: <Database className="text-orange-600" size={40} />,
      title: "State Management",
      description: "Efficient state management solutions using modern patterns and best practices.",
      features: ["Redux Toolkit", "Zustand Integration", "Context API", "Performance Monitoring"],
      popular: false
    },
    {
      icon: <Cloud className="text-indigo-600" size={40} />,
      title: "Performance Optimization",
      description: "Advanced optimization techniques to ensure your applications run at peak performance.",
      features: ["Bundle Optimization", "Lazy Loading", "Code Splitting", "Performance Audits"],
      popular: true
    },
    {
      icon: <Shield className="text-error-600" size={40} />,
      title: "Security & Testing",
      description: "Comprehensive testing strategies and security implementations for production-ready apps.",
      features: ["Unit Testing", "E2E Testing", "Security Audits", "Performance Testing"],
      popular: false
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a comprehensive project roadmap."
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Create wireframes, prototypes, and design systems tailored to your brand."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build robust, scalable solutions with comprehensive testing coverage."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Launch your project and provide ongoing maintenance and support."
    }
  ]

  const testimonial = {
    quote: "MccHub Leximius transformed our entire development workflow. Their component library is not just beautiful – it's incredibly well-architected and has saved us months of development time.",
    author: "Jennifer Walsh",
    role: "VP of Engineering",
    company: "TechFlow Inc.",
    rating: 5
  }

  return (
    <div className="bg-white overflow-hidden">
      {/* Modern Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-brand-50">
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-brand-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-brand-50 border border-brand-200 rounded-full text-brand-700 text-sm font-medium mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 mr-2" />
            Professional Services
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <span className="text-gray-900 block mb-2">Elevate your</span>
            <span className="bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Development Experience</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            From component libraries to complete design systems, we provide 
            comprehensive solutions that accelerate your development workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <a href="#services" className="btn-gradient text-lg px-8 py-4">
              Explore Services
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a href="/contact" className="btn-secondary text-lg px-8 py-4 whitespace-nowrap">
              Get Quote
            </a>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-success-50 border border-success-200 rounded-full text-success-700 text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything you need to <span className="text-gradient">succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive development services designed for modern teams and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`relative card-elevated p-8 hover-lift transition-all duration-500 group ${service.popular ? 'ring-2 ring-brand-200' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-brand-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-elegant">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-success-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center text-brand-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn more 
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 bg-gradient-to-r from-gray-50 to-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How we <span className="text-gradient">work together</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative text-center group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-purple-600 rounded-3xl mx-auto mb-6 flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-elegant-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="text-gray-300 mx-auto" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card-glass p-12">
            <div className="flex justify-center mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current w-6 h-6" />
              ))}
            </div>
            
            <blockquote className="text-2xl font-medium text-gray-900 mb-8 italic leading-relaxed">
              "{testimonial.quote}"
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                {testimonial.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-lg">{testimonial.author}</div>
                <div className="text-brand-600 font-medium">{testimonial.role}</div>
                <div className="text-gray-600">{testimonial.company}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* Redesigned Light CTA Section */}
      <div className="relative py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
        {/* Creative background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='1'%3E%3Cpath d='M40 40l20-20v40l-20-20zm0 0l-20-20v40l20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Dynamic accent elements */}
        <div className="absolute top-16 right-16 w-24 h-24 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-16 left-16 w-32 h-20 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-2xl blur-xl opacity-50 rotate-12"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Services badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-8 shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
            </svg>
            Build Something Amazing
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to start your{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              next project?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help accelerate your development workflow and 
            build exceptional user experiences.
          </p>
          
          {/* Service action grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <a 
              href="/contact" 
              className="group bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
              Start Your Project
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </a>
            
            <a 
              href="/pricing" 
              className="group bg-white/80 backdrop-blur-sm text-gray-700 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 transform hover:-translate-y-1 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
              </svg>
              View Pricing
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </a>
          </div>
          
          {/* Additional value props */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto border border-white/20 shadow-sm">
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-semibold text-orange-600">Free consultation</span> • 
              <span className="font-semibold text-orange-600"> Expert guidance</span> • 
              <span className="font-semibold text-orange-600"> Fast delivery</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}