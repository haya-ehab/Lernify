import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WebSocketProvider } from "./context/WebSocketProvider";
import { Toaster } from "react-hot-toast";
import InstructorDashboard from "./pages/InstructorDashboard";
import CreateCourseForm from "./components/CreateCourseForm";
import CourseCatalog from "./pages/CourseCatalog";
import LessonViewer from "./pages/LessonViewer";
import StudentDashboard from "./pages/StudentDashboard";
import QuizPage from "./pages/QuizPage";
import CertificatePage from "./pages/CertificatePage";
import SupportPage from "./pages/SupportPage";
import StudentQuizPage from "./pages/StudentQuizPage";
import CertificateStudent from "./pages/CertificateStudent";
import QuizStudent from "./pages/QuizStudent";
// New pages
import Login from "./pages/Login";
import Register from "./pages/Register";

// Auth
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import CourseDetails from "./pages/CourseDetails";
import StudentDetail from "./pages/StudentDetail";
import InstructorCourses from "./pages/InstructorCourses";

const App = () => {
  return (
    <AuthProvider>
      <WebSocketProvider>
        <Router>
          {/* Toast notifications */}
          <Toaster position="top-right" reverseOrder={false} />

          <Routes>
            {/* Protected app pages */}
            <Route
              path="/instructor-dashboard"
              element={
                <ProtectedRoute>
                  <InstructorDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create-course-form"
              element={
                <ProtectedRoute>
                  <CreateCourseForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/course-catalog"
              element={
                <ProtectedRoute>
                  <CourseCatalog />
                </ProtectedRoute>
              }
            />
            <Route
              path="/lesson-viewer"
              element={
                <ProtectedRoute>
                  <LessonViewer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student-dashboard"
             
              element={
                <ProtectedRoute>
                  <StudentDashboard />
                </ProtectedRoute>
                

              
              }
            />
            <Route
              path="/quiz-page"
              element={
                <ProtectedRoute>
                  <QuizPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/certificate-page"
              element={
                <ProtectedRoute>
                  <CertificatePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/support-page"
              element={
                <ProtectedRoute>
                  <SupportPage />
                </ProtectedRoute>
              }
            />

            {/* Public pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/student-quiz-page" element={<StudentQuizPage />} />
            <Route path="/certificate-student" element={<CertificateStudent />} />
            <Route path="/quiz-student" element={<QuizStudent />} />
            <Route path="/course-details/:id" element={<CourseDetails />} />
            <Route path="/student-detail" element={<StudentDetail />} />
            <Route path="/instructor-courses" element={<InstructorCourses />} />
          </Routes>
        </Router>
      </WebSocketProvider>
    </AuthProvider>
  );
};

export default App;
