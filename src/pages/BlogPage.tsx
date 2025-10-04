import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight, BookOpen, Clock, TrendingUp } from 'lucide-react'

export const BlogPage: React.FC = () => {
  const featuredPost = {
    id: 1,
    title: "The Future of Component Libraries: Building for Tomorrow",
    excerpt: "Explore how modern component libraries are evolving to meet the demands of next-generation web applications, with insights into design systems, accessibility, and performance optimization.",
    author: "Sarah Chen",
    date: "March 18, 2024",
    category: "Featured",
    readTime: "12 min read",
    featured: true
  }

  const posts = [
    {
      id: 2,
      title: "Building Scalable Web Applications with React and TypeScript",
      excerpt: "Learn best practices for creating maintainable and scalable web applications using modern React patterns and TypeScript.",
      author: "John Doe",
      date: "March 15, 2024",
      category: "Development",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 3,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore emerging technologies and trends that will shape the web development landscape in the coming year.",
      author: "Jane Smith", 
      date: "March 12, 2024",
      category: "Technology",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 4,
      title: "Optimizing Performance in Modern Web Applications",
      excerpt: "Discover techniques and tools for improving the performance of your web applications and delivering better user experiences.",
      author: "Mike Johnson",
      date: "March 10, 2024",
      category: "Performance",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 5,
      title: "Design Systems: Creating Consistency at Scale",
      excerpt: "How to build and maintain design systems that grow with your organization and ensure consistent user experiences.",
      author: "Emily Rodriguez",
      date: "March 8, 2024",
      category: "Design",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 6,
      title: "Accessibility First: Building Inclusive Web Experiences",
      excerpt: "Essential principles and practical techniques for creating web applications that work for everyone.",
      author: "David Kim",
      date: "March 5, 2024",
      category: "Accessibility",
      readTime: "9 min read",
      featured: false
    }
  ]

  const categories = [
    { name: "All", count: 12, active: true },
    { name: "Development", count: 8, active: false },
    { name: "Design", count: 4, active: false },
    { name: "Technology", count: 6, active: false },
    { name: "Performance", count: 3, active: false }
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Featured": "from-brand-500 to-purple-600",
      "Development": "from-green-500 to-teal-600", 
      "Technology": "from-purple-500 to-pink-600",
      "Performance": "from-orange-500 to-red-600",
      "Design": "from-blue-500 to-indigo-600",
      "Accessibility": "from-teal-500 to-cyan-600"
    }
    return colors[category] || "from-gray-500 to-gray-600"
  }

  return (
    <div className="bg-white overflow-hidden">
      {/* Modern Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-brand-50">
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-brand-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-brand-50 border border-brand-200 rounded-full text-brand-700 text-sm font-medium mb-8 animate-fade-in-up">
            <BookOpen className="w-4 h-4 mr-2" />
            Latest Insights & Tutorials
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up whitespace-nowrap" style={{animationDelay: '0.1s'}}>
            <span className="text-gray-900">Our </span>
            <span className="bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Insights, tutorials, and updates from our development team. Stay ahead with the latest trends and best practices.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-gradient-to-r from-brand-500 to-purple-600 text-white shadow-elegant-lg'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-500 to-purple-600 rounded-full text-white text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                Featured Article
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Must Read</h2>
            </div>

            <article className="card-elevated overflow-hidden hover-lift group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className={`h-80 lg:h-full bg-gradient-to-br ${getCategoryColor(featuredPost.category)} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-mesh opacity-20"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className={`bg-gradient-to-r ${getCategoryColor(featuredPost.category)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                      {featuredPost.category}
                    </span>
                    <span className="mx-3">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4 font-medium">{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{featuredPost.date}</span>
                    </div>
                    
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="btn-enhanced-gradient group"
                    >
                      Read Article
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {posts.map((post, index) => (
              <article key={post.id} className="card-elevated overflow-hidden hover-lift group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`h-48 bg-gradient-to-br ${getCategoryColor(post.category)} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-mesh opacity-20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center text-white/80 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-3 font-medium">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-brand-600 hover:text-brand-700 font-medium flex items-center group"
                    >
                      Read more
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center">
            <button className="btn-secondary group">
              Load More Posts
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}