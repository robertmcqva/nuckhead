// Modern Toast Notification Component
import React from 'react'
import { CheckCircle, AlertCircle, XCircle, Info, X } from 'lucide-react'

interface ToastProps {
  type?: 'success' | 'warning' | 'error' | 'info'
  title: string
  message?: string
  onClose?: () => void
  autoClose?: boolean
  duration?: number
  className?: string
}

const typeConfig = {
  success: {
    icon: CheckCircle,
    bgClass: 'bg-success-50 border-success-200',
    iconClass: 'text-success-600',
    titleClass: 'text-success-900',
    messageClass: 'text-success-700'
  },
  warning: {
    icon: AlertCircle,
    bgClass: 'bg-warning-50 border-warning-200',
    iconClass: 'text-warning-600',
    titleClass: 'text-warning-900',
    messageClass: 'text-warning-700'
  },
  error: {
    icon: XCircle,
    bgClass: 'bg-error-50 border-error-200',
    iconClass: 'text-error-600',
    titleClass: 'text-error-900',
    messageClass: 'text-error-700'
  },
  info: {
    icon: Info,
    bgClass: 'bg-brand-50 border-brand-200',
    iconClass: 'text-brand-600',
    titleClass: 'text-brand-900',
    messageClass: 'text-brand-700'
  }
}

export const Toast: React.FC<ToastProps> = ({
  type = 'info',
  title,
  message,
  onClose,
  autoClose = true,
  duration = 5000,
  className = ''
}) => {
  const config = typeConfig[type]
  const Icon = config.icon

  React.useEffect(() => {
    if (autoClose && onClose) {
      const timer = setTimeout(onClose, duration)
      return () => clearTimeout(timer)
    }
  }, [autoClose, onClose, duration])

  return (
    <div className={`max-w-sm w-full ${config.bgClass} border rounded-2xl p-4 shadow-elegant-lg animate-fade-in-down ${className}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Icon className={`w-6 h-6 ${config.iconClass}`} />
        </div>
        <div className="ml-3 flex-1">
          <p className={`text-sm font-semibold ${config.titleClass}`}>
            {title}
          </p>
          {message && (
            <p className={`mt-1 text-sm ${config.messageClass}`}>
              {message}
            </p>
          )}
        </div>
        {onClose && (
          <div className="ml-4 flex-shrink-0">
            <button
              onClick={onClose}
              className={`inline-flex rounded-lg p-1.5 hover:bg-white/50 transition-colors ${config.iconClass}`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

Toast.displayName = 'Toast'