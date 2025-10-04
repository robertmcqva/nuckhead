// Component detail page template
import React, { useState } from 'react'
import { Button } from '../../mcchub/components/Button.tsx'
import { Card } from '../../mcchub/components/Card.tsx'
import { Copy, Eye, Code } from 'lucide-react'

interface ComponentDetailPageProps {
  componentName: string
}

export const ComponentDetailPage: React.FC<ComponentDetailPageProps> = ({ componentName }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')

  // This would normally come from a data source
  const componentData = {
    Button: {
      name: 'Button',
      description: 'A versatile button component with multiple variants, sizes, and states.',
      category: 'Inputs',
      status: 'Stable',
      examples: [
        {
          title: 'Basic Buttons',
          description: 'Different button variants for various use cases.',
          preview: (
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="error">Error</Button>
            </div>
          ),
          code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="error">Error</Button>`
        },
        {
          title: 'Button Sizes',
          description: 'Buttons come in different sizes to fit your design needs.',
          preview: (
            <div className="flex flex-wrap items-center gap-4">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          ),
          code: `<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`
        },
        {
          title: 'Button States',
          description: 'Different states for user interaction feedback.',
          preview: (
            <div className="flex flex-wrap gap-4">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
              <Button fullWidth>Full Width</Button>
            </div>
          ),
          code: `<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>
<Button fullWidth>Full Width</Button>`
        },
      ],
      props: [
        {
          name: 'variant',
          type: 'primary | secondary | success | warning | error | info',
          default: 'primary',
          description: 'The visual style variant of the button'
        },
        {
          name: 'size',
          type: 'xs | sm | md | lg | xl',
          default: 'md',
          description: 'The size of the button'
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          description: 'Whether the button is disabled'
        },
        {
          name: 'loading',
          type: 'boolean',
          default: 'false',
          description: 'Whether the button is in loading state'
        },
        {
          name: 'fullWidth',
          type: 'boolean',
          default: 'false',
          description: 'Whether the button should take full width'
        },
        {
          name: 'onClick',
          type: '(event: MouseEvent) => void',
          default: '-',
          description: 'Function called when button is clicked'
        },
      ]
    }
  }

  const component = componentData[componentName as keyof typeof componentData]

  if (!component) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Component not found</h1>
          <p className="text-gray-600 mt-2">The requested component documentation is not available.</p>
        </div>
      </div>
    )
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // You would typically show a toast notification here
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{component.name}</h1>
            <p className="text-gray-600 mt-2">{component.description}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {component.status}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {component.category}
            </span>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="space-y-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Examples</h2>
        
        {component.examples.map((example, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{example.title}</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      activeTab === 'preview' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Eye size={16} className="inline mr-1" />
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      activeTab === 'code' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Code size={16} className="inline mr-1" />
                    Code
                  </button>
                </div>
              </div>
              {example.description && (
                <p className="text-gray-600">{example.description}</p>
              )}
            </div>
            
            <div className="relative">
              {activeTab === 'preview' ? (
                <div className="p-8 bg-gray-50">
                  {example.preview}
                </div>
              ) : (
                <div className="relative">
                  <pre className="p-6 bg-gray-900 text-green-400 overflow-x-auto text-sm">
                    <code>{example.code}</code>
                  </pre>
                  <button
                    onClick={() => copyToClipboard(example.code)}
                    className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded"
                  >
                    <Copy size={16} />
                  </button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Props API */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Props</h2>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Default</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody>
                {component.props.map((prop, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-b-0">
                    <td className="py-3 px-4 font-mono text-sm text-purple-600">{prop.name}</td>
                    <td className="py-3 px-4 font-mono text-sm text-blue-600">{prop.type}</td>
                    <td className="py-3 px-4 font-mono text-sm text-gray-600">{prop.default}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}