import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { WebSocketProvider } from "./context/WebSocketProvider" // make sure path is correct
import InstructorDashboard from "./pages/InstructorDashboard"
import CreateCourseForm from "./components/CreateCourseForm"
import CourseCatalog from "./pages/CourseCatalog"
import LessonViewer from "./pages/LessonViewer"
import StudentDashboard from "./pages/StudentDashboard"
import QuizPage from "./pages/QuizPage"

const App = () => {
  return (
    <WebSocketProvider>
      <Router>
        <Routes>
          <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
          <Route path="/create-course-form" element={<CreateCourseForm />} />
          <Route path="/course-catalog" element={<CourseCatalog />} />
          <Route path="/lesson-viewer" element={<LessonViewer />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/quiz-page" element={<QuizPage />} />
        </Routes>
      </Router>
    </WebSocketProvider>
  )
}

export default App
