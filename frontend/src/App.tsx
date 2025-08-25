import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { WebSocketProvider } from "./context/WebSocketProvider"

import InstructorDashboard from "./pages/InstructorDashboard"
import CreateCourseForm from "./components/CreateCourseForm"
import CourseCatalog from "./pages/CourseCatalog"
import LessonViewer from "./pages/LessonViewer"
import StudentDashboard from "./pages/StudentDashboard"
import QuizPage from "./pages/QuizPage"
import CertificatePage from "./pages/CertificatePage"
import SupportPage from "./pages/SupportPage"

// New pages
import Login from "./pages/Login"
import Register from "./pages/Register"

const App = () => {
  return (
    <WebSocketProvider>
      <Router>
        <Routes>
        

          {/* Main app pages */}
          <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
          <Route path="/create-course-form" element={<CreateCourseForm />} />
          <Route path="/course-catalog" element={<CourseCatalog />} />
          <Route path="/lesson-viewer" element={<LessonViewer />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/quiz-page" element={<QuizPage />} />
          <Route path="/certificate-page" element={<CertificatePage />} />
          <Route path="/support-page" element={<SupportPage />} />
          <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </WebSocketProvider>
  )
}

export default App
