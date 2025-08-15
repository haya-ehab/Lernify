"use client"

import { useState } from "react"
import { Search, Filter, DollarSign, Clock, Users, Star } from "lucide-react"

const mockCourses = [
  {
    id: 1,
    title: "React for Beginners",
    category: "Web Development",
    price: 29,
    img: "/modern-react-workspace.png",
    duration: "8 weeks",
    students: 1240,
    rating: 4.8,
    instructor: "Sarah Chen",
  },
  {
    id: 2,
    title: "Advanced CSS & Design Systems",
    category: "Web Development",
    price: 49,
    img: "/css-design-system-interface.png",
    duration: "6 weeks",
    students: 890,
    rating: 4.9,
    instructor: "Marcus Rodriguez",
  },
  {
    id: 3,
    title: "Data Science Fundamentals",
    category: "Data Science",
    price: 59,
    img: "/data-visualization-charts-graphs.png",
    duration: "10 weeks",
    students: 2100,
    rating: 4.7,
    instructor: "Dr. Emily Watson",
  },
  {
    id: 4,
    title: "Introduction to Machine Learning",
    category: "AI",
    price: 79,
    img: "/ai-neural-network.png",
    duration: "12 weeks",
    students: 1560,
    rating: 4.8,
    instructor: "Alex Kumar",
  },
]

export default function CourseCatalog() {
  const [category, setCategory] = useState("")
  const [maxPrice, setMaxPrice] = useState(100)

  const categories = ["Web Development", "Data Science", "AI"]

  const filteredCourses = mockCourses.filter(
    (course) => (category === "" || course.category === category) && course.price <= maxPrice,
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Course Catalog</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover our comprehensive collection of courses designed to advance your career and expand your skillset
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="w-5 h-5 text-slate-600" />
            <h2 className="text-lg font-semibold text-slate-900">Filter Courses</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Maximum Price: ${maxPrice}</label>
              <input
                type="range"
                min="0"
                max="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${maxPrice}%, #e2e8f0 ${maxPrice}%, #e2e8f0 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>$0</span>
                <span>$100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-slate-600">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.img || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-slate-700 backdrop-blur-sm">
                    {course.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-slate-900 line-clamp-2 flex-1">{course.title}</h3>
                </div>

                <p className="text-sm text-slate-600 mb-4">by {course.instructor}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="text-2xl font-bold text-slate-900">{course.price}</span>
                  </div>
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
              <Search className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No courses found</h3>
            <p className="text-slate-600 max-w-md mx-auto">
              Try adjusting your filters to find more courses that match your interests.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
