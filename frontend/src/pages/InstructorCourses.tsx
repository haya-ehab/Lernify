// src/pages/InstructorCourses.tsx
"use client";

import { useState } from "react";
import { Star, Users, Clock, Search } from "lucide-react";

type Course = {
  id: number;
  title: string;
  category: string;
  price: number;
  duration: string;
  students: number;
  rating: number;
  instructor: string;
  img?: string; // optional for future images
};

const mockCourses: Course[] = [
  { id: 1, title: "React for Beginners", category: "Web Development", price: 29, duration: "8 weeks", students: 1240, rating: 4.8, instructor: "Sarah Chen" },
  { id: 2, title: "Advanced CSS & Design Systems", category: "Web Development", price: 49, duration: "6 weeks", students: 890, rating: 4.9, instructor: "Marcus Rodriguez" },
  { id: 3, title: "Data Science Fundamentals", category: "Data Science", price: 59, duration: "10 weeks", students: 2100, rating: 4.7, instructor: "Dr. Emily Watson" },
  { id: 4, title: "Introduction to Machine Learning", category: "AI", price: 79, duration: "12 weeks", students: 1560, rating: 4.8, instructor: "Alex Kumar" },
  { id: 5, title: "Next.js Advanced Concepts", category: "Web Development", price: 69, duration: "7 weeks", students: 740, rating: 4.6, instructor: "Sarah Chen" },
  { id: 6, title: "Python for Data Analysis", category: "Data Science", price: 55, duration: "9 weeks", students: 1320, rating: 4.7, instructor: "Dr. Emily Watson" },
  { id: 7, title: "AI for Everyone", category: "AI", price: 45, duration: "5 weeks", students: 980, rating: 4.5, instructor: "Alex Kumar" },
  { id: 8, title: "TypeScript Basics", category: "Web Development", price: 39, duration: "6 weeks", students: 1150, rating: 4.6, instructor: "Sarah Chen" },
  { id: 9, title: "Data Visualization with Python", category: "Data Science", price: 49, duration: "7 weeks", students: 870, rating: 4.4, instructor: "Dr. Emily Watson" },
  { id: 10, title: "Deep Learning Fundamentals", category: "AI", price: 85, duration: "14 weeks", students: 650, rating: 4.9, instructor: "Alex Kumar" },
];

export default function InstructorCourses() {
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [categoryFilter, setCategoryFilter] = useState("");

  const categories = Array.from(new Set(mockCourses.map((c) => c.category)));

  const filteredCourses = mockCourses.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter === "" || c.category === categoryFilter)
  );

  return (
    <div className="min-h-screen p-8 bg-white text-black max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Courses</h1>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex items-center gap-2 flex-1">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg cursor-pointer transition transform hover:-translate-y-1"
            onClick={() => setSelectedCourse(course)}
          >
            <h2 className="text-xl font-semibold mb-1">{course.title}</h2>
            <p className="text-gray-600 text-sm mb-1">{course.category}</p>
            <p className="text-gray-600 text-sm mb-1">Price: ${course.price}</p>
            <p className="text-gray-600 text-sm">Duration: {course.duration}</p>
          </div>
        ))}
      </div>

      {/* Selected Course Detail */}
      {selectedCourse && (
        <div className="mt-8 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-2">{selectedCourse.title}</h2>
          <p className="text-gray-600 mb-1">Category: {selectedCourse.category}</p>
          <p className="text-gray-600 mb-1">Instructor: {selectedCourse.instructor}</p>
          <p className="text-gray-600 mb-1">Price: ${selectedCourse.price}</p>
          <p className="text-gray-600 mb-3">Duration: {selectedCourse.duration}</p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-black" />
              <span>Students Enrolled: {selectedCourse.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span>Rating: {selectedCourse.rating}</span>
            </div>
          </div>
        </div>
      )}

      {filteredCourses.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          <p>No courses found.</p>
        </div>
      )}
    </div>
  );
}
