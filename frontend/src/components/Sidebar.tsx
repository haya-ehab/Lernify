import { Link } from "react-router-dom"

export default function Sidebar() {
  const menuItems = [
    { name: "Your Dashboard", path: "/instructor-dashboard", icon: "📊" },
    { name: "Courses", path: "/course-catalog", icon: "📚", isActive: false },
    { name: "Students", path: "/student-dashboard", icon: "👩‍🎓" },
    { name: "View Lessons", path: "/lesson-viewer", icon: "👁️‍🗨️", isActive: false },
    { name: "Quizzes", path: "/quiz-page", icon: "📝", isActive: false },
    { name: "Settings", path: "/settings", icon: "⚙️", isActive: false },
    { name: "Support", path: "/support", icon: "💬", isActive: false },
  ]

  return (
    <aside className="w-72 min-h-screen bg-white text-black relative overflow-hidden shadow-2xl border-r border-gray-200">
      <div className="relative z-10 p-6">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="relative">
              <div className="relative bg-black p-3 rounded-xl">
                <span className="text-2xl font-bold text-white">📖</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-black">Learnify</h2>
              <p className="text-xs text-gray-600">Learning Management</p>
            </div>
          </div>
          <div className="h-px bg-gray-200 mt-4"></div>
        </div>

        {/* User Profile Section */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <span className="text-xl">👨‍💼</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-black rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-black">Dr. Smith</h3>
                <p className="text-xs text-gray-600">Instructor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2 mb-8">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Main Menu</p>
          {menuItems.slice(0, 4).map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`group flex items-center space-x-4 p-3 rounded-xl transition-all duration-300 ${
                item.isActive
                  ? "bg-gray-100 border border-gray-300 text-black"
                  : "hover:bg-gray-50 hover:border-gray-200 border border-transparent text-gray-700"
              }`}
            >
              <div
                className={`text-xl transition-transform duration-300 group-hover:scale-110 ${
                  item.isActive ? "drop-shadow-lg" : ""
                }`}
              >
                {item.icon}
              </div>
              <span className="font-medium">{item.name}</span>
              {item.isActive && (
                <div className="absolute right-3">
                  <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                </div>
              )}
            </Link>
          ))}
        </nav>

        {/* Secondary Menu */}
        <nav className="space-y-2 mb-8">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Tools</p>
          {menuItems.slice(4).map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group flex items-center space-x-4 p-3 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:border-gray-200 border border-transparent text-gray-700"
            >
              <div className="text-xl transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Quick Stats Card */}
        <div className="bg-gray-100 rounded-2xl p-4 border border-gray-200 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-black">This Week</h4>
            <span className="text-xs text-black">📊</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">New Students</span>
              <span className="text-sm font-bold text-black">+12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Assignments</span>
              <span className="text-sm font-bold text-black">24</span>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200">
          <div className="text-center">
            <div className="text-3xl mb-2">💡</div>
            <h4 className="text-sm font-semibold text-black mb-2">Need Help?</h4>
            <p className="text-xs text-gray-600 mb-3">Check our documentation or contact support</p>
            <button className="w-full bg-black text-white text-xs font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              Get Help
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
