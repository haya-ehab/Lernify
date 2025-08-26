// src/pages/InstructorStudents.tsx
"use client";

import { useState } from "react";
import { ArrowLeft, Star, Clock, CheckCircle, Search } from "lucide-react";

type Student = {
  id: number;
  name: string;
  email: string;
  course: string;
  progress: number;
  rating: number;
  assignmentsCompleted: number;
  lastActivity: string;
};

const mockStudents: Student[] = [
  { id: 1, name: "Alice Johnson", email: "alice@email.com", course: "React Basics", progress: 80, rating: 4.5, assignmentsCompleted: 8, lastActivity: "2025-08-25" },
  { id: 2, name: "Bob Smith", email: "bob@email.com", course: "Advanced CSS", progress: 60, rating: 4.0, assignmentsCompleted: 5, lastActivity: "2025-08-24" },
  { id: 3, name: "Carol Lee", email: "carol@email.com", course: "Data Science 101", progress: 90, rating: 4.8, assignmentsCompleted: 10, lastActivity: "2025-08-23" },
  { id: 4, name: "David Kim", email: "david@email.com", course: "Machine Learning", progress: 40, rating: 3.9, assignmentsCompleted: 3, lastActivity: "2025-08-22" },
  { id: 5, name: "Emma Brown", email: "emma@email.com", course: "React Basics", progress: 100, rating: 5.0, assignmentsCompleted: 12, lastActivity: "2025-08-21" },
];

export default function InstructorStudents() {
  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const filteredStudents = mockStudents.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8 bg-white text-black max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Students</h1>

      {/* Search Bar */}
      <div className="mb-6 flex items-center gap-2">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Students List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <div
            key={student.id}
            className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg cursor-pointer transition transform hover:-translate-y-1"
            onClick={() => setSelectedStudent(student)}
          >
            <h2 className="text-xl font-semibold mb-1">{student.name}</h2>
            <p className="text-gray-600 text-sm mb-1">{student.email}</p>
            <p className="text-gray-600 text-sm">Course: {student.course}</p>
          </div>
        ))}
      </div>

      {/* Selected Student Detail */}
      {selectedStudent && (
        <div className="mt-8 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-2">{selectedStudent.name}</h2>
          <p className="text-gray-600 mb-1">{selectedStudent.email}</p>
          <p className="text-gray-600 mb-3">Course: {selectedStudent.course}</p>

          {/* Progress */}
          <div className="mb-4">
            <p className="text-gray-600 mb-1">Progress: {selectedStudent.progress}%</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-black h-3 rounded-full"
                style={{ width: `${selectedStudent.progress}%` }}
              ></div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4 text-gray-600">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span>{selectedStudent.rating}</span>
          </div>

          {/* Extra Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-black" />
              <span>Assignments Completed: {selectedStudent.assignmentsCompleted}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-black" />
              <span>Last Activity: {selectedStudent.lastActivity}</span>
            </div>
          </div>
        </div>
      )}

      {filteredStudents.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          <p>No students found.</p>
        </div>
      )}
    </div>
  );
}
