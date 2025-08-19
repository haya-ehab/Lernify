

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


    } else {
      // Add new lesson
      setLessons([...lessons, { id: Date.now().toString(), ...formData }])
    }
    setShowForm(false)
  }

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6 border-r border-gray-200 flex flex-col">
        <h2 className="text-xl font-bold mb-6 text-black">Lessons</h2>
        <button
          className="mb-6 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          onClick={() => handleOpenForm()}
        >
          + Add Lesson
        </button>
        <ul className="space-y-2">
          {lessons.map((lesson) => (
            <li
              key={lesson.id}
              className={`p-3 rounded-lg cursor-pointer flex justify-between items-center transition-colors border ${
                completedLessons.includes(lesson.id)
                  ? "bg-gray-100 border-gray-300"
                  : "hover:bg-gray-50 border-gray-200"
              }`}
              onClick={() => setSelectedLesson(lesson)}
            >
              <span className="text-black font-medium">{lesson.title}</span>
              <button
                className="text-sm text-black hover:text-gray-600 p-1"
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
      <div className="flex-1 p-8 bg-white">
        {selectedLesson ? (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-black">{selectedLesson.title}</h1>

            {/* Responsive Video Player */}
            {selectedLesson.type === "video" && (
              <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden border border-gray-200 shadow-lg">
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
                className="w-full h-[500px] border border-gray-200 rounded-lg shadow-lg"
              />
            )}
            {selectedLesson.type === "link" && (
              <a
                href={selectedLesson.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-black underline hover:text-gray-600 text-lg font-medium"
              >
                🔗 Open Resource
              </a>
            )}

            {/* Button Row */}
            <div className="flex gap-4">
              <button
                onClick={() => handleCompleteLesson(selectedLesson.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  completedLessons.includes(selectedLesson.id)
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-300"
                    : "bg-black text-white hover:bg-gray-800 border border-black"
                }`}
                disabled={completedLessons.includes(selectedLesson.id)}
              >
                {completedLessons.includes(selectedLesson.id) ? "✅ Completed" : "Mark as Complete"}
              </button>
              <button
                onClick={() => handleOpenForm(selectedLesson)}
                className="px-6 py-3 rounded-lg bg-white text-black border border-black hover:bg-gray-50 font-medium transition-colors"
              >
                ✏️ Edit
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-lg">Select a lesson to view</p>
          </div>
        )}
      </div>

      {/* Modal for add/edit lesson */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl w-96 shadow-2xl border border-gray-200">
            <h2 className="text-xl font-bold mb-6 text-black">{editingLesson ? "Edit Lesson" : "Add Lesson"}</h2>
            <input
              type="text"
              placeholder="Lesson Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:outline-none focus:border-black text-black"
            />
            <select
              value={formData.type}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  type: e.target.value as "video" | "pdf" | "link",
                })
              }
              className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:outline-none focus:border-black text-black"
            >
              <option value="video">Video</option>
              <option value="pdf">PDF</option>
              <option value="link">Link</option>
            </select>
            <input
              type="text"
              placeholder="Lesson URL"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="w-full border border-gray-300 p-3 mb-6 rounded-lg focus:outline-none focus:border-black text-black"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowForm(false)}
                className="px-6 py-3 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 font-medium transition-colors"
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
