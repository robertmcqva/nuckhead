// Getting Started page for the MccHub Leximius component library
import React from 'react'
import { Code, Package, Zap, BookOpen } from 'lucide-react'
import { Card } from '../../mcchub/components/Card.tsx'
import { Button } from '../../mcchub/components/Button.tsx'
import { Alert } from '../../mcchub/components/Alert.tsx'

export const GettingStartedPage: React.FC = () => {
  const steps = [
    {
      icon: <Package className="text-blue-600" size={24} />,
      title: 'Installation',
      description: 'Install MccHub Leximius in your React project',
      code: 'npm install @mcchub/leximius',
    },
    {
      icon: <Code className="text-green-600" size={24} />,
      title: 'Import Components',
      description: 'Import the components you need',
      code: `import { Button, Input, Card } from '@mcchub/leximius'`,
    },
    {
      icon: <Zap className="text-purple-600" size={24} />,
      title: 'Use Components',
      description: 'Start building your UI',
      code: `<Button variant="primary">Get Started</Button>`,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Getting Started</h1>
        <p className="text-gray-600 text-lg">
          Learn how to install and use MccHub Leximius components in your React application.
        </p>
      </div>

      {/* Prerequisites */}
      <Alert variant="info" title="Prerequisites" className="mb-8">
        <p>
          MccHub Leximius requires React 18.0+ and is built with TypeScript. 
          Make sure you have Node.js 16.0+ installed.
        </p>
      </Alert>

      {/* Installation Steps */}
      <div className="space-y-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Quick Start</h2>
        
        {steps.map((step, index) => (
          <Card key={index} className="relative">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-green-400 font-mono text-sm">
                    {step.code}
                  </code>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Full Example */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Example</h2>
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Form Component</h3>
          <div className="bg-gray-900 rounded-lg p-6 mb-4">
            <pre className="text-green-400 font-mono text-sm overflow-x-auto">
              <code>{`import React, { useState } from 'react'
import { Button, Input, Card, Alert } from '@mcchub/leximius'

export const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowAlert(true)
    // Handle form submission
  }

  return (
    <Card padding="lg">
      <h2>Contact Us</h2>
      
      {showAlert && (
        <Alert 
          variant="success" 
          title="Success!"
          dismissible
          onDismiss={() => setShowAlert(false)}
        >
          Your message has been sent successfully.
        </Alert>
      )}
      
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
        />
        
        <Input
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message..."
          required
        />
        
        <Button type="submit" variant="primary" size="lg">
          Send Message
        </Button>
      </form>
    </Card>
  )
}`}</code>
            </pre>
          </div>
        </Card>
      </div>

      {/* TypeScript */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">TypeScript Support</h2>
        <Card>
          <p className="text-gray-600 mb-4">
            MccHub Leximius is built with TypeScript and provides full type safety out of the box. 
            All components come with proper TypeScript definitions.
          </p>
          <div className="bg-gray-900 rounded-lg p-6">
            <pre className="text-green-400 font-mono text-sm overflow-x-auto">
              <code>{`import { ButtonProps } from '@mcchub/leximius'

interface CustomButtonProps extends ButtonProps {
  customProp?: string
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return <Button {...props} />
}`}</code>
            </pre>
          </div>
        </Card>
      </div>

      {/* Theming */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Customization & Theming</h2>
        <Card>
          <p className="text-gray-600 mb-4">
            MccHub Leximius components are built with Tailwind CSS and can be easily customized. 
            You can override styles using the <code className="bg-gray-100 px-1 rounded">className</code> prop 
            or by customizing your Tailwind configuration.
          </p>
          <div className="bg-gray-900 rounded-lg p-6">
            <pre className="text-green-400 font-mono text-sm overflow-x-auto">
              <code>{`// Custom button with additional styles
<Button 
  variant="primary" 
  className="shadow-lg hover:shadow-xl transform hover:scale-105"
>
  Custom Styled Button
</Button>

// Override theme colors in tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#your-custom-blue',
        }
      }
    }
  }
}`}</code>
            </pre>
          </div>
        </Card>
      </div>

      {/* Next Steps */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build?</h2>
        <p className="text-gray-600 mb-6">
          You're all set! Start exploring our components and building amazing user interfaces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            <BookOpen className="mr-2" size={20} />
            Browse Components
          </Button>
          <Button variant="secondary" size="lg">
            <Code className="mr-2" size={20} />
            View Examples
          </Button>
        </div>
      </div>
    </div>
  )
}