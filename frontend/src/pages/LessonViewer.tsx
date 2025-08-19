
type Lesson = {
  id: string
  title: string
  type: "video" | "pdf" | "link"
  url: string
}

export default function LessonViewer() {
  const [lessons, setLessons] = useState<Lesson[]>([
    {
      id: "1",
      title: "React Basics",
      type: "video",
      url: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
    },
    {
      id: "2",
      title: "React Docs",
      type: "link",
      url: "https://react.dev",
    },
    {
      id: "3",
      title: "React PDF Guide",
      type: "pdf",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
  ])



  // Modal state
  const [showForm, setShowForm] = useState(false)
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null)
  const [formData, setFormData] = useState<Omit<Lesson, "id">>({
    title: "",
    type: "video",
    url: "",
  })

  const handleCompleteLesson = (id: string) => {
    if (!completedLessons.includes(id)) {
      setCompletedLessons([...completedLessons, id])
    }
  }

  const handleOpenForm = (lesson?: Lesson) => {
    if (lesson) {
      setEditingLesson(lesson)
      setFormData({ title: lesson.title, type: lesson.type, url: lesson.url })
    } else {
      setEditingLesson(null)
      setFormData({ title: "", type: "video", url: "" })
    }
    setShowForm(true)
  }


        )
      )
    } else {
      // Add new lesson
      setLessons([...lessons, { id: Date.now().toString(), ...formData }])
    }
    setShowForm(false)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-4 shadow-md flex flex-col">
        <h2 className="text-lg font-bold mb-4">Lessons</h2>
        <button
          className="mb-4 bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600"
          onClick={() => handleOpenForm()}
        >
          ➕ Add Lesson
        </button>
        <ul>
          {lessons.map((lesson) => (
            <li
              key={lesson.id}
              className={`p-2 rounded cursor-pointer flex justify-between items-center ${
                completedLessons.includes(lesson.id)
                  ? "bg-green-100"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedLesson(lesson)}
            >
              <span>{lesson.title}</span>
              <button
                className="text-sm text-blue-500"
                onClick={(e) => {
                  e.stopPropagation()
                  handleOpenForm(lesson)
                }}
              >
                ✏️
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main viewer */}
      <div className="flex-1 p-6">
        {selectedLesson ? (
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{selectedLesson.title}</h1>

            {/* Responsive Video Player */}
            {selectedLesson.type === "video" && (
              <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-md">
                <ReactPlayer
                  url={selectedLesson.url}
                  controls
                  width="100%"
                  height="100%"
                  className="absolute top-0 left-0"
                />
              </div>
            )}

            {selectedLesson.type === "pdf" && (
              <iframe
                src={selectedLesson.url}
                title="PDF Viewer"
                className="w-full h-[500px] border rounded-lg shadow"
              />
            )}
            {selectedLesson.type === "link" && (
              <a
                href={selectedLesson.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 underline hover:text-blue-800"
              >
                🔗 Open Resource
              </a>
            )}

            {/* Button Row */}
            <div className="flex gap-3">
              <button
                onClick={() => handleCompleteLesson(selectedLesson.id)}
                className={`px-4 py-2 rounded-md shadow ${
                  completedLessons.includes(selectedLesson.id)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
                disabled={completedLessons.includes(selectedLesson.id)}
              >
                {completedLessons.includes(selectedLesson.id)
                  ? "✅ Completed"
                  : "Mark as Complete"}
              </button>
              <button
                onClick={() => handleOpenForm(selectedLesson)}
                className="px-4 py-2 rounded-md bg-yellow-400 text-black hover:bg-yellow-500 shadow"
              >
                ✏️ Edit
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Select a lesson to view</p>
        )}
      </div>

      {/* Modal for add/edit lesson */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-lg font-bold mb-4">
              {editingLesson ? "Edit Lesson" : "Add Lesson"}
            </h2>
            <input
              type="text"
              placeholder="Lesson Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full border p-2 mb-3 rounded"
            />
            <select
              value={formData.type}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  type: e.target.value as "video" | "pdf" | "link",
                })
              }
              className="w-full border p-2 mb-3 rounded"
            >
              <option value="video">Video</option>
              <option value="pdf">PDF</option>
              <option value="link">Link</option>
            </select>
            <input
              type="text"
              placeholder="Lesson URL"
              value={formData.url}
              onChange={(e) =>
                setFormData({ ...formData, url: e.target.value })
              }
              className="w-full border p-2 mb-3 rounded"
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
