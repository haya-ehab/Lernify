import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string; // correct answer
}

export default function StudentQuizPage() {
  const { token } = useAuth();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // TODO: Replace with backend / websocket fetch
    const sampleQuestions: Question[] = [
      {
        id: 1,
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        answer: "4",
      },
      {
        id: 2,
        question: "Capital of France?",
        options: ["Paris", "Berlin", "Rome"],
        answer: "Paris",
      },
    ];
    setQuestions(sampleQuestions);
  }, []);

  const handleAnswer = (qId: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-3xl font-extrabold mb-8 text-center">📝 Student Quiz</h1>

      {!submitted ? (
        <div className="space-y-8">
          {questions.map((q) => (
            <div
              key={q.id}
              className="p-6 border-2 border-black rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h2 className="font-bold text-lg mb-4">{q.question}</h2>
              <div className="space-y-3">
                {q.options.map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition ${
                      answers[q.id] === opt
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      value={opt}
                      checked={answers[q.id] === opt}
                      onChange={() => handleAnswer(q.id, opt)}
                      className="hidden"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Submit Quiz
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto p-6 border-2 border-black rounded-2xl shadow-md bg-gray-50">
          <h2 className="text-2xl font-bold mb-4 text-center">
            🎯 Your Score: {score} / {questions.length}
          </h2>
          <div className="space-y-6">
            {questions.map((q) => (
              <div key={q.id} className="p-4 border rounded-lg">
                <p className="font-semibold">{q.question}</p>
                <p>
                  Your Answer:{" "}
                  <span
                    className={
                      answers[q.id] === q.answer
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {answers[q.id] || "Not Answered"}
                  </span>
                </p>
                <p className="text-gray-700">
                  Correct Answer: ✅ {q.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
                setScore(0);
              }}
              className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Retry Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
