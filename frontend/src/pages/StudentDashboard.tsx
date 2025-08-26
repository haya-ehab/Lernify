import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import {
  BookOpen,
  Clock,
  Users,
  Award,
  LogOut,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// Mock data
const student = {
  name: "John Doe",
  email: "john.doe@student.com",
  avatar: "/student-avatar.png",
};

const enrolledCourses = [
  {
    id: 1,
    title: "Introduction to React",
    instructor: "Sarah Johnson",
    progress: 75,
    totalLessons: 24,
    completedLessons: 18,
    category: "Frontend",
    difficulty: "Beginner",
    nextLesson: "React Hooks Deep Dive",
    estimatedTime: "2h 30m",
    image: "/reactcourse.jpg",
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    instructor: "Mike Chen",
    progress: 45,
    totalLessons: 32,
    completedLessons: 14,
    category: "Programming",
    difficulty: "Advanced",
    nextLesson: "Closures and Scope",
    estimatedTime: "3h 15m",
    image: "/jscourse.jpg",
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800";
    case "Advanced":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function StudentDashboard() {
  const totalCourses = enrolledCourses.length;
  const completedCourses = enrolledCourses.filter(
    (c) => c.progress === 100
  ).length;
  const averageProgress = Math.round(
    enrolledCourses.reduce((sum, c) => sum + c.progress, 0) / totalCourses
  );

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top Nav */}
      <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">🎓 Student Dashboard</h1>
        <nav className="hidden md:flex gap-6">
          <Link to="/student-dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/course-catalog" className="hover:underline">Courses</Link>
          <Link to="/quiz-student" className="hover:underline">Quizzes</Link>
          <Link to="/certificate-student" className="hover:underline">Certificates</Link>
          <Link to="/support-page" className="hover:underline">Support</Link>
        </nav>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm"
        >
          <LogOut size={16} /> Logout
        </button>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gray-50 border-black/10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalCourses}</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-black/10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <Award className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedCourses}</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-black/10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{averageProgress}%</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-black/10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Study Time</CardTitle>
              <Clock className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24h</div>
            </CardContent>
          </Card>
        </div>

        {/* Courses */}
        <section>
          <h2 className="text-2xl font-bold mb-4">My Courses</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {enrolledCourses.map((course) => (
              <Card
                key={course.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader className="flex gap-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-16 h-16 rounded-lg border"
                  />
                  <div className="flex-1">
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>
                      Instructor: {course.instructor} • {course.category}
                    </CardDescription>
                  </div>
                  <Badge className={getDifficultyColor(course.difficulty)}>
                    {course.difficulty}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <Progress value={course.progress} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">
                      {course.completedLessons} / {course.totalLessons} lessons
                    </p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">
                      Next: {course.nextLesson}
                    </span>
                    <Badge variant="outline">{course.estimatedTime}</Badge>
                  </div>
                  <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                    {course.progress === 0
                      ? "Start Course"
                      : "Continue Learning"}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
