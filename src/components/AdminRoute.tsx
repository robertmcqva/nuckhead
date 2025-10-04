import React from 'react'
import { Navigate } from 'react-router-dom'

interface AdminRouteProps {
  children: React.ReactNode
}

export const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  // In a real app, you would check both authentication and admin role
  const isAuthenticated = false // This would come from your auth context
  const isAdmin = false // This would come from your user context
  
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />
  }
  
  if (!isAdmin) {
    return <Navigate to="/dashboard" replace />
  }
  
  return <>{children}</>
}