import React from 'react'
import { Users, Settings, Database, Shield, Activity, AlertTriangle } from 'lucide-react'

export const AdminPanel: React.FC = () => {
  const systemStats = [
    {
      name: 'Total Users',
      value: '1,234',
      change: '+5.2%',
      icon: Users
    },
    {
      name: 'Active Sessions',
      value: '567',
      change: '+12.3%',
      icon: Activity
    },
    {
      name: 'Storage Used',
      value: '45.2 GB',
      change: '+2.1%',
      icon: Database
    },
    {
      name: 'Security Alerts',
      value: '3',
      change: '-25%',
      icon: AlertTriangle
    }
  ]

  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', joined: '2024-03-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', joined: '2024-03-14' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User', status: 'Pending', joined: '2024-03-13' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Manager', status: 'Active', joined: '2024-03-12' }
  ]

  const systemLogs = [
    { id: 1, action: 'User login', user: 'john@example.com', timestamp: '2024-03-15 10:30:00', status: 'Success' },
    { id: 2, action: 'Password reset', user: 'jane@example.com', timestamp: '2024-03-15 10:25:00', status: 'Success' },
    { id: 3, action: 'Failed login attempt', user: 'unknown@example.com', timestamp: '2024-03-15 10:20:00', status: 'Failed' },
    { id: 4, action: 'Account created', user: 'mike@example.com', timestamp: '2024-03-15 10:15:00', status: 'Success' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'Suspended':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getLogStatusColor = (status: string) => {
    switch (status) {
      case 'Success':
        return 'text-green-600'
      case 'Failed':
        return 'text-red-600'
      case 'Warning':
        return 'text-yellow-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
        <p className="text-gray-600 mt-2">System administration and management tools.</p>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {systemStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  stat.name === 'Security Alerts' ? 'bg-red-100' : 'bg-blue-100'
                }`}>
                  <Icon className={stat.name === 'Security Alerts' ? 'text-red-600' : 'text-blue-600'} size={24} />
                </div>
              </div>
              <div className="mt-4">
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Recent Users */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Users</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900">{user.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400 mt-1">
                      <span>Role: {user.role}</span>
                      <span>Joined: {user.joined}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left">
                <Users className="text-blue-600 mb-2" size={24} />
                <h3 className="font-medium text-blue-900">Manage Users</h3>
                <p className="text-sm text-blue-700 mt-1">View and edit user accounts</p>
              </button>
              
              <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-left">
                <Settings className="text-green-600 mb-2" size={24} />
                <h3 className="font-medium text-green-900">System Settings</h3>
                <p className="text-sm text-green-700 mt-1">Configure system parameters</p>
              </button>
              
              <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-left">
                <Database className="text-purple-600 mb-2" size={24} />
                <h3 className="font-medium text-purple-900">Database</h3>
                <p className="text-sm text-purple-700 mt-1">Backup and maintenance</p>
              </button>
              
              <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors text-left">
                <Shield className="text-orange-600 mb-2" size={24} />
                <h3 className="font-medium text-orange-900">Security</h3>
                <p className="text-sm text-orange-700 mt-1">Monitor security events</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* System Logs */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">System Logs</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500">
                  <th className="pb-4">Action</th>
                  <th className="pb-4">User</th>
                  <th className="pb-4">Timestamp</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {systemLogs.map((log) => (
                  <tr key={log.id} className="border-t border-gray-100">
                    <td className="py-4 font-medium text-gray-900">{log.action}</td>
                    <td className="py-4 text-gray-600">{log.user}</td>
                    <td className="py-4 text-gray-500">{log.timestamp}</td>
                    <td className="py-4">
                      <span className={`font-medium ${getLogStatusColor(log.status)}`}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}