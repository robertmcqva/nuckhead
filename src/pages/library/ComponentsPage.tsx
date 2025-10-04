// Components showcase page for the MccHub Leximius library
import React, { useState } from 'react'
import { Search, Grid, List } from 'lucide-react'
import { Button } from '../../mcchub/components/Button.tsx'
import { Input } from '../../mcchub/components/Input.tsx'
import { Card } from '../../mcchub/components/Card.tsx'

export const ComponentsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const categories = [
    { id: 'all', name: 'All Components', count: 25 },
    { id: 'inputs', name: 'Form Inputs', count: 8 },
    { id: 'feedback', name: 'Feedback', count: 5 },
    { id: 'layout', name: 'Layout', count: 4 },
    { id: 'navigation', name: 'Navigation', count: 3 },
    { id: 'data-display', name: 'Data Display', count: 5 },
  ]

  const components = [
    {
      name: 'Button',
      category: 'inputs',
      description: 'Versatile button component with multiple variants and sizes',
      status: 'stable',
      lastUpdated: '2024-03-15',
      usage: 'High',
    },
    {
      name: 'Input',
      category: 'inputs',
      description: 'Form input component with validation and error handling',
      status: 'stable',
      lastUpdated: '2024-03-14',
      usage: 'High',
    },
    {
      name: 'Card',
      category: 'layout',
      description: 'Flexible container component for grouping content',
      status: 'stable',
      lastUpdated: '2024-03-13',
      usage: 'High',
    },
    {
      name: 'Modal',
      category: 'feedback',
      description: 'Overlay component for displaying content above the page',
      status: 'beta',
      lastUpdated: '2024-03-12',
      usage: 'Medium',
    },
    {
      name: 'Badge',
      category: 'data-display',
      description: 'Small status indicator component',
      status: 'stable',
      lastUpdated: '2024-03-11',
      usage: 'Medium',
    },
    {
      name: 'Avatar',
      category: 'data-display',
      description: 'User profile picture component with fallback support',
      status: 'stable',
      lastUpdated: '2024-03-10',
      usage: 'Medium',
    },
  ]

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable':
        return 'bg-green-100 text-green-800'
      case 'beta':
        return 'bg-yellow-100 text-yellow-800'
      case 'alpha':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getUsageColor = (usage: string) => {
    switch (usage) {
      case 'High':
        return 'text-green-600'
      case 'Medium':
        return 'text-yellow-600'
      case 'Low':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Components</h1>
        <p className="text-gray-600">
          Explore our comprehensive collection of React components built for modern web applications.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
            
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Components Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map((component, index) => (
            <Card key={index} hover className="cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{component.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(component.status)}`}>
                  {component.status}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{component.description}</p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="text-gray-500">
                  Updated {component.lastUpdated}
                </div>
                <div className={`font-medium ${getUsageColor(component.usage)}`}>
                  {component.usage} usage
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredComponents.map((component, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{component.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(component.status)}`}>
                      {component.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{component.description}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>Category: {categories.find(c => c.id === component.category)?.name}</span>
                    <span>Updated: {component.lastUpdated}</span>
                    <span className={getUsageColor(component.usage)}>
                      {component.usage} usage
                    </span>
                  </div>
                </div>
                <Button variant="secondary" size="sm">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {filteredComponents.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No components found</h3>
          <p className="text-gray-600">
            Try adjusting your search terms or selected category.
          </p>
        </div>
      )}
    </div>
  )
}