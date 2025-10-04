// Simple Static Breadcrumb Component
import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  showHome?: boolean
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  items, 
  className = '',
  showHome = true
}) => {
  if (items.length === 0) return null

  return (
    <div className={`
      fixed top-16 left-0 right-0 z-20
      ${className}
    `}>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav 
            className="flex items-center py-2 space-x-2" 
            aria-label="Breadcrumb"
          >
            {/* Home icon */}
            {showHome && items[0]?.href !== '/' && (
              <>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Home"
                >
                  <Home size={14} />
                </Link>
                <ChevronRight size={12} className="text-gray-300" />
              </>
            )}
            
            {items.map((item, index) => {
              const isLast = index === items.length - 1
              
              return (
                <React.Fragment key={index}>
                  {item.current ? (
                    // Current page
                    <span className="text-sm font-medium text-gray-700">
                      {item.label}
                    </span>
                  ) : (
                    // Clickable breadcrumb link
                    <Link 
                      to={item.href || '#'} 
                      className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                  
                  {/* Separator arrow */}
                  {!isLast && (
                    <ChevronRight size={12} className="text-gray-300" />
                  )}
                </React.Fragment>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}

Breadcrumb.displayName = 'Breadcrumb'