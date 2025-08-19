import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstructorDashboard from "./pages/InstructorDashboard";
import CreateCourseForm from "./components/CreateCourseForm";
import CourseCatalog from "./pages/CourseCatalog";
import LessonViewer from "./pages/LessonViewer";
import StudentDashboard from "./pages/StudentDashboard";
import QuizPage from "./pages/QuizPage";
import { WebSocketProvider } from "./context/WebSocketProvider";

export default function App() {
  return (
    <WebSocketProvider>
      <Router>
        <Routes>
          {/* Instructor routes */}
          <Route path="/instructor" element={<InstructorDashboard />} />
          <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
          <Route path="create-course-form" element={<CreateCourseForm />} />
          <Route path="/quiz-page" element={<QuizPage />} />

          {/* Student routes */}
          <Route path="/student-dashboard" element={<StudentDashboard />} />

          {/* General */}
          <Route path="/course-catalog" element={<CourseCatalog />} />
          <Route path="/lesson-viewer" element={<LessonViewer />} />
        </Routes>
      </Router>
    </WebSocketProvider>
  );
}
