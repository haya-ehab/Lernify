"use client"

import { useState } from "react"
import { useWebSocket } from "../context/WebSocketProvider"

interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: number
}

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [questionText, setQuestionText] = useState("")
  const [options, setOptions] = useState(["", "", "", ""])
  const [correctAnswer, setCorrectAnswer] = useState(0)

  const { sendMessage } = useWebSocket()

  // Add new question locally
  const handleAddQuestion = () => {
    if (!questionText.trim() || options.some((o) => !o.trim())) {
      alert("Please fill in the question and all options.")
      return
    }

    const newQuestion: Question = {
      id: Date.now(),
      text: questionText,
      options,
      correctAnswer,
    }

    setQuestions([...questions, newQuestion])
    setQuestionText("")
    setOptions(["", "", "", ""])
    setCorrectAnswer(0)
  }

  const handlePublishQuiz = () => {
    if (questions.length === 0) {
      alert("You must add at least one question before publishing.")
      return
    }

    const quizData = {
      type: "QUIZ_PUBLISH",
      payload: {
        quizId: Date.now(),
        questions,
      },
    }

    // ✅ send JSON string (surface connection issues)
const sent = sendMessage(JSON.stringify(quizData));
if (!sent) {
  alert("⚠️ Unable to publish: WebSocket is not connected. Please try again.");
  return;
}

alert("✅ Quiz published successfully!");
setQuestions([]);

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">Create New Quiz</h1>
          <p className="text-black text-lg">Build engaging quizzes with multiple choice questions</p>
        </div>

        {/* Add Question Form */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border-2 border-black mb-8 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">+</span>
            </div>
            <h2 className="text-2xl font-bold text-black">Create a New Question</h2>
          </div>

          <div className="space-y-6">
            {/* Question Input */}
            <div className="relative">
              <label className="block text-sm font-semibold text-black mb-2">Question Text</label>
              <input
                type="text"
                placeholder="Enter your question here..."
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                className="w-full border-2 border-black p-4 rounded-xl text-lg focus:border-gray-600 focus:ring-4 focus:ring-gray-100 transition-all duration-200 outline-none bg-white"
              />
            </div>

            {/* Options Grid */}
            <div>
              <label className="block text-sm font-semibold text-black mb-3">Answer Options</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {options.map((opt, i) => (
                  <div key={i} className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <input
                      type="text"
                      placeholder={`Option ${String.fromCharCode(65 + i)}`}
                      value={opt}
                      onChange={(e) => {
                        const newOptions = [...options]
                        newOptions[i] = e.target.value
                        setOptions(newOptions)
                      }}
                      className="w-full border-2 border-black pl-12 pr-4 py-3 rounded-xl focus:border-gray-600 focus:ring-4 focus:ring-gray-100 transition-all duration-200 outline-none bg-white"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Correct Answer Selection */}
            <div>
              <label className="block text-sm font-semibold text-black mb-3">Correct Answer</label>
              <div className="relative">
                <select
                  value={correctAnswer}
                  onChange={(e) => setCorrectAnswer(Number(e.target.value))}
                  className="w-full md:w-auto border-2 border-black p-3 rounded-xl focus:border-gray-600 focus:ring-4 focus:ring-gray-100 transition-all duration-200 outline-none bg-white text-lg font-medium"
                >
                  {options.map((_, i) => (
                    <option key={i} value={i}>
                      Option {String.fromCharCode(65 + i)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Add Question Button */}
            <button
              onClick={handleAddQuestion}
              className="w-full md:w-auto bg-black text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-semibold text-lg flex items-center justify-center gap-2"
            >
              <span className="text-xl">+</span>
              Add Question
            </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold">📝</span>
            </div>
            <h2 className="text-2xl font-bold text-black">Quiz Questions</h2>
            <div className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm font-semibold">
              {questions.length} {questions.length === 1 ? "Question" : "Questions"}
            </div>
          </div>

          {questions.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border-2 border-dashed border-black text-center">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-black text-lg font-medium">No questions added yet.</p>
              <p className="text-gray-600 text-sm mt-2">Create your first question using the form above</p>
            </div>
          ) : (
            <div className="space-y-4">
              {questions.map((q, index) => (
                <div
                  key={q.id}
                  className="bg-white p-6 rounded-2xl shadow-lg border-2 border-black hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-black mb-4 leading-relaxed">{q.text}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {q.options.map((opt, i) => (
                          <div
                            key={i}
                            className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                              i === q.correctAnswer
                                ? "bg-gray-200 border-black text-black font-semibold shadow-md"
                                : "bg-white border-black text-black"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                                  i === q.correctAnswer ? "bg-black text-white" : "bg-gray-300 text-black"
                                }`}
                              >
                                {String.fromCharCode(65 + i)}
                              </span>
                              <span>{opt}</span>
                              {i === q.correctAnswer && <span className="ml-auto text-black">✓</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Publish Quiz Button */}
        <div className="text-center">
          <button
            onClick={handlePublishQuiz}
            disabled={questions.length === 0}
            className={`px-8 py-4 rounded-xl shadow-lg font-bold text-lg transition-all duration-200 ${
              questions.length === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-black text-white hover:shadow-xl transform hover:scale-105"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <span>🚀</span>
              Save & Publish Quiz
            </span>
          </button>
          {questions.length === 0 && <p className="text-black text-sm mt-2">Add at least one question to publish</p>}
        </div>
      </div>
    </div>
  )
} }