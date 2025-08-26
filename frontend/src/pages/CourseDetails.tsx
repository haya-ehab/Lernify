"use client"

import { useState } from "react"
import { useParams } from "react-router-dom"
import { MessageCircle, Send } from "lucide-react"

const mockDiscussions = [
  {
    id: 1,
    author: "Alice Johnson",
    text: "Does anyone know if we’ll cover Redux in this course?",
    replies: [
      { id: 11, author: "Instructor Sarah", text: "Yes, Redux will be introduced in Week 6!" },
    ],
  },
  {
    id: 2,
    author: "Mark Lee",
    text: "Can someone share tips on how to set up the dev environment faster?",
    replies: [],
  },
]

export default function CoursePage() {
  const { id } = useParams()
  const [threads, setThreads] = useState(mockDiscussions)
  const [newComment, setNewComment] = useState("")

  const handlePost = () => {
    if (!newComment.trim()) return
    const newThread = {
      id: Date.now(),
      author: "You",
      text: newComment,
      replies: [],
    }
    setThreads([newThread, ...threads])
    setNewComment("")
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Course Info Placeholder */}
      <h1 className="text-3xl font-bold text-black mb-6">Course Title (ID: {id})</h1>
      <p className="text-gray-600 mb-10">
        Detailed description of the course, syllabus, instructor info, and resources will go here.
      </p>

      {/* Discussion Section */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <MessageCircle className="w-5 h-5 text-black" />
          <h2 className="text-xl font-semibold text-black">Discussion</h2>
        </div>

        {/* New Comment Box */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Start a discussion..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            onClick={handlePost}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center gap-2"
          >
            <Send className="w-4 h-4" /> Post
          </button>
        </div>

        {/* Threads */}
        <div className="space-y-6">
          {threads.map((thread) => (
            <div key={thread.id} className="border-b border-gray-200 pb-4">
              <p className="font-medium text-black">{thread.author}</p>
              <p className="text-gray-700 mb-2">{thread.text}</p>

              {/* Replies */}
              <div className="ml-6 space-y-2">
                {thread.replies.map((reply) => (
                  <div key={reply.id} className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-black">{reply.author}</p>
                    <p className="text-gray-700">{reply.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
