import React from 'react'
import { Plus, Search, Filter, MoreVertical, Calendar, Users, Globe } from 'lucide-react'

export const ProjectsPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: 'E-commerce Platform',
      description: 'Modern online store with payment integration',
      status: 'Active',
      progress: 75,
      team: ['John', 'Sarah', 'Mike'],
      lastUpdated: '2 hours ago',
      url: 'https://ecommerce.example.com'
    },
    {
      id: 2,
      name: 'Mobile Banking App',
      description: 'Secure mobile application for banking services',
      status: 'In Review',
      progress: 90,
      team: ['Alice', 'Bob'],
      lastUpdated: '1 day ago',
      url: 'https://banking.example.com'
    },
    {
      id: 3,
      name: 'Portfolio Website',
      description: 'Personal portfolio showcasing design work',
      status: 'Completed',
      progress: 100,
      team: ['Emma'],
      lastUpdated: '3 days ago',
      url: 'https://portfolio.example.com'
    },
    {
      id: 4,
      name: 'Learning Management System',
      description: 'Educational platform for online courses',
      status: 'Planning',
      progress: 15,
      team: ['David', 'Lisa', 'Tom', 'Anna'],
      lastUpdated: '1 week ago',
      url: null
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800'
      case 'In Review':
        return 'bg-yellow-100 text-yellow-800'
      case 'Completed':
        return 'bg-blue-100 text-blue-800'
      case 'Planning':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-2">Manage and track all your projects in one place.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
          <Plus size={20} className="mr-2" />
          New Project
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter size={20} className="mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    <span>{project.team.length} members</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{project.lastUpdated}</span>
                  </div>
                  {project.url && (
                    <div className="flex items-center">
                      <Globe size={16} className="mr-1" />
                      <span>Live</span>
                    </div>
                  )}
                </div>
              </div>
              
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical size={20} className="text-gray-400" />
              </button>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
              
              <div className="flex -space-x-2">
                {project.team.slice(0, 3).map((member, index) => (
                  <div 
                    key={index}
                    className="w-8 h-8 bg-blue-100 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium text-blue-600"
                  >
                    {member[0]}
                  </div>
                ))}
                {project.team.length > 3 && (
                  <div className="w-8 h-8 bg-gray-100 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                    +{project.team.length - 3}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}