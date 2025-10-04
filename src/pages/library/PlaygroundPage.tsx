// Interactive playground for testing MccHub Leximius components
import React, { useState } from 'react'
import { Button } from '../../mcchub/components/Button.tsx'
import { Input } from '../../mcchub/components/Input.tsx'
import { Card } from '../../mcchub/components/Card.tsx'
import { Badge } from '../../mcchub/components/Badge.tsx'
import { Avatar } from '../../mcchub/components/Avatar.tsx'
import { Alert } from '../../mcchub/components/Alert.tsx'
import { Code, Play } from 'lucide-react'

export const PlaygroundPage: React.FC = () => {
  const [buttonVariant, setButtonVariant] = useState<'primary' | 'secondary' | 'success' | 'warning' | 'error'>('primary')
  const [buttonSize, setButtonSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md')
  const [buttonLoading, setButtonLoading] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  
  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState('')
  
  const [alertVariant, setAlertVariant] = useState<'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'>('info')
  const [showAlert, setShowAlert] = useState(true)

  const [badgeVariant, setBadgeVariant] = useState<'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'>('primary')
  const [badgeDot, setBadgeDot] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Component Playground</h1>
        <p className="text-gray-600">
          Test and experiment with MccHub Leximius components in real-time. 
          Adjust properties and see the changes instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Button Playground */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Play className="mr-2" size={20} />
            Button Component
          </h2>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Variant</label>
              <select
                value={buttonVariant}
                onChange={(e) => setButtonVariant(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
              <select
                value={buttonSize}
                onChange={(e) => setButtonSize(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="xs">Extra Small</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">Extra Large</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={buttonLoading}
                  onChange={(e) => setButtonLoading(e.target.checked)}
                  className="mr-2"
                />
                Loading
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={buttonDisabled}
                  onChange={(e) => setButtonDisabled(e.target.checked)}
                  className="mr-2"
                />
                Disabled
              </label>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg mb-4">
            <Button
              variant={buttonVariant}
              size={buttonSize}
              loading={buttonLoading}
              disabled={buttonDisabled}
            >
              Sample Button
            </Button>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <code className="text-green-400 text-sm">
              {`<Button
  variant="${buttonVariant}"
  size="${buttonSize}"${buttonLoading ? '\n  loading' : ''}${buttonDisabled ? '\n  disabled' : ''}
>
  Sample Button
</Button>`}
            </code>
          </div>
        </Card>

        {/* Alert Playground */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Play className="mr-2" size={20} />
            Alert Component
          </h2>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Variant</label>
              <select
                value={alertVariant}
                onChange={(e) => setAlertVariant(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="info">Info</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showAlert}
                  onChange={(e) => setShowAlert(e.target.checked)}
                  className="mr-2"
                />
                Show Alert
              </label>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg mb-4">
            {showAlert && (
              <Alert
                variant={alertVariant}
                title="Sample Alert"
                dismissible
                onDismiss={() => setShowAlert(false)}
              >
                This is a sample alert message to demonstrate the component.
              </Alert>
            )}
            {!showAlert && (
              <div className="text-gray-500 text-center py-8">
                Alert is hidden
              </div>
            )}
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <code className="text-green-400 text-sm">
              {`<Alert
  variant="${alertVariant}"
  title="Sample Alert"
  dismissible
  onDismiss={() => setShowAlert(false)}
>
  This is a sample alert message.
</Alert>`}
            </code>
          </div>
        </Card>

        {/* Badge Playground */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Play className="mr-2" size={20} />
            Badge Component
          </h2>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Variant</label>
              <select
                value={badgeVariant}
                onChange={(e) => setBadgeVariant(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
                <option value="info">Info</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={badgeDot}
                  onChange={(e) => setBadgeDot(e.target.checked)}
                  className="mr-2"
                />
                With Dot
              </label>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg mb-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant={badgeVariant} dot={badgeDot} size="sm">
                Small
              </Badge>
              <Badge variant={badgeVariant} dot={badgeDot} size="md">
                Medium
              </Badge>
              <Badge variant={badgeVariant} dot={badgeDot} size="lg">
                Large
              </Badge>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <code className="text-green-400 text-sm">
              {`<Badge 
  variant="${badgeVariant}"${badgeDot ? '\n  dot' : ''}
>
  Badge Text
</Badge>`}
            </code>
          </div>
        </Card>

        {/* Avatar Playground */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Play className="mr-2" size={20} />
            Avatar Component
          </h2>
          
          <div className="p-6 bg-gray-50 rounded-lg mb-4">
            <div className="flex items-center space-x-4">
              <Avatar size="sm" fallback="JD" />
              <Avatar size="md" fallback="AS" />
              <Avatar size="lg" fallback="MJ" />
              <Avatar size="xl" fallback="SW" />
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <code className="text-green-400 text-sm">
              {`<Avatar size="md" fallback="JD" />
<Avatar 
  size="lg" 
  src="/user-avatar.jpg" 
  alt="User Avatar"
  fallback="JD" 
/>`}
            </code>
          </div>
        </Card>
      </div>

      {/* Interactive Form Example */}
      <Card className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          <Code className="mr-2" size={20} />
          Interactive Form Example
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Live Form</h3>
            <div className="space-y-4">
              <Input
                label="Email Address"
                type="email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter your email"
                error={inputError}
              />
              
              <div className="flex items-center space-x-2">
                <Badge variant="success" dot>Online</Badge>
                <Avatar fallback="YN" size="sm" />
                <span className="text-sm text-gray-600">Your Name</span>
              </div>
              
              <Button 
                variant="primary" 
                fullWidth
                onClick={() => {
                  if (!inputValue) {
                    setInputError('Email is required')
                  } else if (!inputValue.includes('@')) {
                    setInputError('Please enter a valid email')
                  } else {
                    setInputError('')
                    alert('Form submitted!')
                  }
                }}
              >
                Submit Form
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Component Code</h3>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <code className="text-green-400 text-sm whitespace-pre">
{`<Input
  label="Email Address"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter your email"
  error={error}
/>

<div className="flex items-center space-x-2">
  <Badge variant="success" dot>Online</Badge>
  <Avatar fallback="YN" size="sm" />
  <span>Your Name</span>
</div>

<Button variant="primary" fullWidth>
  Submit Form
</Button>`}
              </code>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}