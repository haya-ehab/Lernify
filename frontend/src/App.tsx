import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstructorDashboard from "./pages/InstructorDashboard";
import CreateCourseForm from "./components/CreateCourseForm";
import CourseCatalog from "./pages/CourseCatalog";
import LessonViewer from "./pages/LessonViewer";
import StudentDashboard from "./pages/StudentDashboard";
import { WebSocketProvider } from "./context/WebSocketProvider";

export default function App() {
  return (
    <Router>
      {/* Wrap your routes with WebSocketProvider */}
      <WebSocketProvider>
        <Routes>
          <Route path="/instructor" element={<InstructorDashboard />} />
          <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
          <Route path="/instructor/create-course" element={<CreateCourseForm />} />
          <Route path="/course-catalog" element={<CourseCatalog />} />
          <Route path="/lesson-viewer" element={<LessonViewer />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Routes>
      </WebSocketProvider>
    </Router>
  );
}
