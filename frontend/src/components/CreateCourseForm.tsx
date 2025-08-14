import React, { useState } from "react";

export default function CreateCourseForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [modules, setModules] = useState([{ title: "", lessons: [""] }]);

  const handleAddModule = () => {
    setModules([...modules, { title: "", lessons: [""] }]);
  };

  const handleAddLesson = (moduleIndex: number) => {
    const updated = [...modules];
    updated[moduleIndex].lessons.push("");
    setModules(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    if (thumbnail) formData.append("thumbnail", thumbnail);
    formData.append("modules", JSON.stringify(modules));

    const res = await fetch("/api/courses", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Course created successfully!");
      setTitle("");
      setDescription("");
      setCategory("");
      setPrice("");
      setThumbnail(null);
      setModules([{ title: "", lessons: [""] }]);
    } else {
      alert("Error creating course");
    }
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">Create New Course</h2>

      <input
        type="text"
        placeholder="Course Title"
        className="border p-2 rounded w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Course Description"
        className="border p-2 rounded w-full"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <select
        className="border p-2 rounded w-full"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option value="programming">Programming</option>
        <option value="design">Design</option>
        <option value="business">Business</option>
      </select>

      <input
        type="number"
        placeholder="Price"
        className="border p-2 rounded w-full"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <input
        type="file"
        onChange={(e) => setThumbnail(e.target.files ? e.target.files[0] : null)}
        required
      />

      <div className="space-y-2">
        <h3 className="font-semibold">Modules</h3>
        {modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="border p-3 rounded space-y-2">
            <input
              type="text"
              placeholder="Module Title"
              className="border p-2 rounded w-full"
              value={module.title}
              onChange={(e) => {
                const updated = [...modules];
                updated[moduleIndex].title = e.target.value;
                setModules(updated);
              }}
            />
            {module.lessons.map((lesson, lessonIndex) => (
              <input
                key={lessonIndex}
                type="text"
                placeholder={`Lesson ${lessonIndex + 1}`}
                className="border p-2 rounded w-full"
                value={lesson}
                onChange={(e) => {
                  const updated = [...modules];
                  updated[moduleIndex].lessons[lessonIndex] = e.target.value;
                  setModules(updated);
                }}
              />
            ))}
            <button
              type="button"
              className="bg-green-500 text-white px-3 py-1 rounded"
              onClick={() => handleAddLesson(moduleIndex)}
            >
              + Add Lesson
            </button>
          </div>
        ))}
        <button
          type="button"
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={handleAddModule}
        >
          + Add Module
        </button>
      </div>

      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Create Course
      </button>
    </form>
  );
}
