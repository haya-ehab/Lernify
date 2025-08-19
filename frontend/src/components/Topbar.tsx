export default function Topbar() {
  return (
    <header className="flex justify-between items-center bg-white text-black shadow p-4 border-b border-gray-200">
      <h1 className="text-lg font-bold">Instructor Overview</h1>
      <div className="flex items-center gap-4">
        <span className="font-medium"></span>
        <button className="text-black font-semibold hover:text-gray-600 transition-colors">Logout</button>
      </div>
    </header>
  )
}
