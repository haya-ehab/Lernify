
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstructorDashboard from "./pages/InstructorDashboard";

import CreateCourseForm from "./components/CreateCourseForm";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/instructor" element={<InstructorDashboard />} />
        <Route path="/instructor/create-course" element={<CreateCourseForm />} />
      </Routes>
    </Router>
  );
}
