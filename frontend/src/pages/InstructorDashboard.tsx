import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import StatCard from "../components/StatCard"
import CreateCourseForm from "../components/CreateCourseForm"
import { FaBook, FaUserGraduate, FaBox } from "react-icons/fa"

export default function InstructorDashboard() {
  const navigate = useNavigate()

  useEffect(() => {
    // 🔐 Check if token exists
    const token = localStorage.getItem("token") // or sessionStorage
    if (!token) {
      navigate("/login") // redirect if no token
    }
  }, [navigate])

  // Temporary placeholders
  const performanceData = { growth: "12%", comparison: "↑ 5% vs last month" }

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-white">
        <Topbar />

        <main className="p-8 space-y-8 flex-1 min-h-screen relative overflow-hidden">
          {/* Hero Section */}
          <div className="relative bg-black text-white p-8 rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold mb-3 text-white">
                    Welcome back, Professor! 👋
                  </h1>
                  <p className="text-xl text-gray-300 mb-4 max-w-2xl">
                    Your teaching dashboard is ready. Manage courses, track student
                    progress, and create engaging content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:scale-105">
              <div className="absolute inset-0 bg-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <StatCard icon={FaBook} label="Active Courses" value={3} />
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">This semester</span>
                    <span className="text-black font-semibold">+2 new</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:scale-105">
              <div className="absolute inset-0 bg-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <StatCard icon={FaUserGraduate} label="Total Students" value={21} />
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Enrollment rate</span>
                    <span className="text-black font-semibold">95%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:scale-105">
              <div className="absolute inset-0 bg-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <StatCard icon={FaBox} label="Resources" value={1} />
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Avg rating</span>
                    <span className="text-black font-semibold">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Create Course Form */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="absolute inset-0 bg-gray-50"></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="relative bg-black p-3 rounded-xl">
                        <span className="text-2xl text-white">📚</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-1">
                        Create New Course
                      </h2>
                      <p className="text-gray-600">
                        Design engaging educational content
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                    <span>✨ AI Assisted</span>
                  </div>
                </div>
                <CreateCourseForm />
              </div>
            </div>

            {/* Quick Stats & Recent Activity */}
            <div className="space-y-6">
              {/* Recent Activity Card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-800">Recent Activity</h3>
                  <span className="text-sm text-gray-500">Last 7 days</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl border-l-4 border-gray-400">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <span className="text-gray-600">🎓</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">
                        New student enrolled
                      </p>
                      <p className="text-sm text-gray-600">2h ago</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl border-l-4 border-gray-400">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <span className="text-gray-600">📚</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">Quizzes submitted</p>
                      <p className="text-sm text-gray-600">Quiz Questions</p>
                    </div>
                    <span className="text-xs text-gray-500">1d ago</span>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-black text-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-lg font-bold mb-4">This Month's Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 rounded-xl p-4">
                    <p className="text-sm">Growth</p>
                    <p className="text-2xl font-bold">{performanceData.growth}</p>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4">
                    <p className="text-sm">Comparison</p>
                    <p className="text-2xl font-bold">{performanceData.comparison}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
