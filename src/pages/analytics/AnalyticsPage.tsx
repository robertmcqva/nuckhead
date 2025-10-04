import React from 'react'
import { TrendingUp, Users, Eye, Clock, Download, Calendar } from 'lucide-react'

export const AnalyticsPage: React.FC = () => {
  const metrics = [
    {
      name: 'Total Visitors',
      value: '12,543',
      change: '+12.5%',
      changeType: 'increase',
      icon: Users,
      period: 'Last 30 days'
    },
    {
      name: 'Page Views',
      value: '45,678',
      change: '+8.3%',
      changeType: 'increase',
      icon: Eye,
      period: 'Last 30 days'
    },
    {
      name: 'Avg. Session Duration',
      value: '3m 24s',
      change: '+5.2%',
      changeType: 'increase',
      icon: Clock,
      period: 'Last 30 days'
    },
    {
      name: 'Conversion Rate',
      value: '3.2%',
      change: '-0.8%',
      changeType: 'decrease',
      icon: TrendingUp,
      period: 'Last 30 days'
    }
  ]

  const topPages = [
    { path: '/', views: 15420, percentage: 34 },
    { path: '/about', views: 8930, percentage: 20 },
    { path: '/services', views: 6750, percentage: 15 },
    { path: '/pricing', views: 5820, percentage: 13 },
    { path: '/contact', views: 4280, percentage: 9 },
    { path: '/blog', views: 4050, percentage: 9 }
  ]

  const trafficSources = [
    { source: 'Direct', visitors: 5420, percentage: 43 },
    { source: 'Google Search', visitors: 3210, percentage: 26 },
    { source: 'Social Media', visitors: 2150, percentage: 17 },
    { source: 'Email', visitors: 1080, percentage: 9 },
    { source: 'Referrals', visitors: 683, percentage: 5 }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-2">Track performance and user engagement across your projects.</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Calendar size={20} className="mr-2" />
            Last 30 Days
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download size={20} className="mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <span className={`text-sm font-medium px-2 py-1 rounded ${
                  metric.changeType === 'increase' 
                    ? 'text-green-700 bg-green-100' 
                    : 'text-red-700 bg-red-100'
                }`}>
                  {metric.change}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-sm text-gray-600">{metric.name}</p>
              <p className="text-xs text-gray-500 mt-1">{metric.period}</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Chart Placeholder */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Visitor Trends</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="text-gray-400 mx-auto mb-2" size={48} />
              <p className="text-gray-500">Chart visualization would go here</p>
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Traffic Sources</h2>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{source.source}</span>
                    <span className="text-sm text-gray-500">{source.visitors.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-500 ml-4">{source.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Top Pages</h2>
        </div>
        
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500">
                  <th className="pb-4">Page</th>
                  <th className="pb-4">Views</th>
                  <th className="pb-4">Percentage</th>
                  <th className="pb-4">Trend</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {topPages.map((page, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    <td className="py-4 font-medium text-gray-900">{page.path}</td>
                    <td className="py-4 text-gray-600">{page.views.toLocaleString()}</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                          <div 
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${page.percentage * 3}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">{page.percentage}%</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <TrendingUp className="text-green-500" size={16} />
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