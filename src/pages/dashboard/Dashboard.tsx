import React from 'react'
import { BarChart3, Users, DollarSign, TrendingUp, Activity, Calendar } from 'lucide-react'

export const Dashboard: React.FC = () => {
  const stats = [
    {
      name: 'Total Projects',
      value: '12',
      change: '+12%',
      changeType: 'increase',
      icon: BarChart3
    },
    {
      name: 'Active Users',
      value: '2,345',
      change: '+5.4%',
      changeType: 'increase',
      icon: Users
    },
    {
      name: 'Revenue',
      value: '$12,345',
      change: '+8.2%',
      changeType: 'increase',
      icon: DollarSign
    },
    {
      name: 'Growth Rate',
      value: '23.5%',
      change: '+2.1%',
      changeType: 'increase',
      icon: TrendingUp
    }
  ]

  const recentActivity = [
    {
      id: 1,
      action: 'New project created',
      project: 'E-commerce Website',
      time: '2 hours ago'
    },
    {
      id: 2,
      action: 'User invited to team',
      project: 'Mobile App',
      time: '4 hours ago'
    },
    {
      id: 3,
      action: 'Deployment completed',
      project: 'Portfolio Site',
      time: '6 hours ago'
    },
    {
      id: 4,
      action: 'Analytics report generated',
      project: 'Blog Platform',
      time: '8 hours ago'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your projects.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon className="text-blue-600" size={24} />
                </div>
              </div>
              <div className="mt-4">
                <span className={`text-sm font-medium ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
            <Activity className="text-gray-400" size={20} />
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.project}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
            <Calendar className="text-gray-400" size={20} />
          </div>
          
          <div className="space-y-4">
            <button className="w-full text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <h3 className="font-medium text-blue-900">Create New Project</h3>
              <p className="text-sm text-blue-700 mt-1">Start a new project from scratch or template</p>
            </button>
            
            <button className="w-full text-left p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <h3 className="font-medium text-green-900">Invite Team Member</h3>
              <p className="text-sm text-green-700 mt-1">Add someone to collaborate on your projects</p>
            </button>
            
            <button className="w-full text-left p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <h3 className="font-medium text-purple-900">View Analytics</h3>
              <p className="text-sm text-purple-700 mt-1">Check detailed performance metrics</p>
            </button>
            
            <button className="w-full text-left p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
              <h3 className="font-medium text-orange-900">Upgrade Plan</h3>
              <p className="text-sm text-orange-700 mt-1">Get access to premium features</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}