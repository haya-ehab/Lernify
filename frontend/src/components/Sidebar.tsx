
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Learnify</h2>
      <nav className="space-y-2">
        <Link to="#" className="block p-2 rounded hover:bg-gray-700">Overview</Link>
        <Link to="#" className="block p-2 rounded hover:bg-gray-700">Courses</Link>
        <Link to="#" className="block p-2 rounded hover:bg-gray-700">Students</Link>
        <Link to="#" className="block p-2 rounded hover:bg-gray-700">Teachers</Link>
      </nav>
    </aside>
  );
}
