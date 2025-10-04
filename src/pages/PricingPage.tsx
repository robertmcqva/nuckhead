import React from 'react'
import { Check, ArrowRight, Star, Zap, Shield, Crown, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export const PricingPage: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small projects and personal use",
      features: [
        "25+ React Components",
        "TypeScript Support", 
        "Basic Documentation",
        "Community Support",
        "MIT License",
        "Regular Updates"
      ],
      popular: false,
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-600"
    },
    {
      name: "Professional",
      price: "$99", 
      period: "per month",
      description: "Best for growing businesses and teams",
      features: [
        "50+ Premium Components",
        "Advanced Theming System",
        "Design System Tokens",
        "Priority Support",
        "Figma Design Files",
        "Custom Component Requests",
        "Team Collaboration Tools",
        "API Documentation"
      ],
      popular: true,
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-brand-500 to-purple-600"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing", 
      description: "For large organizations with specific needs",
      features: [
        "Everything in Professional",
        "Unlimited Custom Components",
        "White-label Solutions",
        "24/7 Dedicated Support",
        "Custom Integration Services",
        "SLA Guarantee",
        "On-site Training",
        "Dedicated Account Manager"
      ],
      popular: false,
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600"
    }
  ]

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to get started."
    },
    {
      question: "What's included in the documentation?",
      answer: "Comprehensive guides, API references, code examples, and best practices for all components."
    },
    {
      question: "Can I use these components in commercial projects?",
      answer: "Yes, all our components come with commercial-friendly licenses for your projects."
    }
  ]

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
            Simple, Transparent Pricing
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <span className="text-gray-900 block mb-2">Choose the plan</span>
            <span className="bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">that's right for you</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Start building beautiful applications today with our comprehensive component library. 
            All plans include a <span className="font-semibold text-brand-600">14-day free trial</span>.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {plans.map((plan, index) => (
              <div key={index} className={`relative card-elevated p-8 transition-all duration-500 hover-lift group ${
                plan.popular ? 'ring-2 ring-brand-200 scale-105' : ''
              }`} style={{animationDelay: `${index * 0.1}s`}}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-brand-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-elegant-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-3xl mx-auto mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-elegant-lg`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2 text-lg">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/auth/register" 
                  className={`w-full btn text-center ${
                    plan.popular 
                      ? 'btn-gradient' 
                      : 'btn-secondary hover:border-brand-300 hover:bg-brand-50'
                  } group`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Comparison */}
      <div className="py-24 bg-gradient-to-r from-gray-50 to-brand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-success-50 border border-success-200 rounded-full text-success-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Why Choose MccHub Leximius?
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            More than just <span className="text-gradient">components</span>
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Get everything you need to build professional applications faster.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-glass p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-purple-600 rounded-3xl mx-auto mb-6 flex items-center justify-center animate-float">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">Optimized for performance with minimal bundle size and lazy loading.</p>
            </div>
            
            <div className="card-glass p-8 text-center" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-success-500 to-teal-600 rounded-3xl mx-auto mb-6 flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Type Safe</h3>
              <p className="text-gray-600">100% TypeScript with comprehensive type definitions and IntelliSense.</p>
            </div>
            
            <div className="card-glass p-8 text-center" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl mx-auto mb-6 flex items-center justify-center animate-float" style={{animationDelay: '4s'}}>
                <Crown className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Ready</h3>
              <p className="text-gray-600">Scalable architecture with enterprise-grade security and support.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently asked <span className="text-gradient">questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and plans.
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="card-elevated p-8 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Redesigned Light CTA Section */}
      <div className="relative py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
        {/* Success-themed background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M25 5l5 15h15l-12 9 5 15-13-10-13 10 5-15-12-9h15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Success accent elements */}
        <div className="absolute top-12 left-12 w-20 h-20 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full blur-xl opacity-60"></div>
        <div className="absolute bottom-12 right-12 w-28 h-28 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-2xl blur-xl opacity-50 rotate-45"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Success badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-8 shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Start Your Free Trial
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to get{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              started?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers building beautiful applications with MccHub Leximius.
          </p>
          
          {/* Enhanced CTA Cards */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto mb-8">
            <Link 
              to="/auth/register" 
              className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Start Free Trial
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </Link>
            
            <span className="text-gray-400 text-sm">or</span>
            
            <Link 
              to="/contact" 
              className="group bg-white/80 backdrop-blur-sm text-gray-700 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transform hover:-translate-y-1 transition-all duration-200 shadow-sm hover:shadow-md flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              Contact Sales
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto border border-white/20 shadow-sm">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-emerald-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                14-day free trial
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-emerald-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                No credit card
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-emerald-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}