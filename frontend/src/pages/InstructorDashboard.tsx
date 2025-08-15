
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard"; 
import CreateCourseForm from "../components/CreateCourseForm";
import { FaBook, FaUserGraduate, FaBox } from "react-icons/fa";

export default function InstructorDashboard() {
  return (
    <>
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-6 space-y-6 bg-gray-50 flex-1">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard icon={FaBook} label="Courses" value={3} />
            <StatCard icon={FaUserGraduate} label="Students" value={21} />
            <StatCard icon={FaBox} label="Teachers" value={1} />
          </div>

          {/* Create Course Form */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Create New Course</h2>
            <CreateCourseForm />
          </div>
        </main>
      </div>
    </>
  );
}
