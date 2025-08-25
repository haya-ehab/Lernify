"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { BookOpen, Clock, Users, Award, LogOut } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

// Mock student data
const student = {
  name: "John Doe",
  email: "john.doe@student.com",
  avatar: "/student-avatar.png",
}

// Mock data for enrolled courses
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
    image: "/react-logo.png",
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
    image: "/javascript-logo.png",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    instructor: "Emma Davis",
    progress: 90,
    totalLessons: 20,
    completedLessons: 18,
    category: "Design",
    difficulty: "Intermediate",
    nextLesson: "Design Systems",
    estimatedTime: "1h 45m",
    image: "/placeholder-o72ja.png",
  },
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    case "Advanced":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export default function StudentDashboard() {
  const totalCourses = enrolledCourses.length
  const completedCourses = enrolledCourses.filter((course) => course.progress === 100).length
  const averageProgress = Math.round(
    enrolledCourses.reduce((sum, course) => sum + course.progress, 0) / totalCourses
  )

  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout() // clears token from localStorage + context
    navigate("/login") // redirect to login page
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header with Student Info + Logout */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {student.name}!</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src={student.avatar} alt={student.name} />
                <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="font-medium">{student.name}</p>
                <p className="text-xs text-muted-foreground">{student.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalCourses}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedCourses}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{averageProgress}%</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Study Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24h</div>
            </CardContent>
          </Card>
        </div>

        {/* Enrolled Courses */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Enrolled Courses</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={course.image || "/placeholder.svg"} alt={course.title} />
                      <AvatarFallback>{course.title.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <Badge className={getDifficultyColor(course.difficulty)}>{course.difficulty}</Badge>
                      </div>
                      <CardDescription>
                        Instructor: {course.instructor} • {course.category}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Progress Section */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        {course.completedLessons} of {course.totalLessons} lessons
                      </span>
                      <span>{course.totalLessons - course.completedLessons} remaining</span>
                    </div>
                  </div>

                  {/* Next Lesson */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Next Lesson</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{course.nextLesson}</span>
                      <Badge variant="outline" className="text-xs">
                        {course.estimatedTime}
                      </Badge>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    {course.progress === 0 ? "Start Course" : "Continue Learning"}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
