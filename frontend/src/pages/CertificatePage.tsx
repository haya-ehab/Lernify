"use client"

import { useState } from "react"

export default function CertificatePage() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  const handleDownload = () => {
    if (!name.trim()) {
      alert("Please enter a student name.")
      return
    }
    window.location.href = `/api/certificates/download?name=${encodeURIComponent(name)}`
  }

  const handleSendEmail = async () => {
    if (!name.trim() || !email.trim()) {
      alert("Please enter both student name and email.")
      return
    }
    try {
      const res = await fetch("/api/certificates/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      })

      if (!res.ok) throw new Error("Failed to send")
      alert("📩 Certificate sent successfully!")
    } catch (err) {
      console.error(err)
      alert("❌ Error sending certificate.")
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-3">Certificate Management</h1>
          <p className="text-gray-600 text-lg">Generate and send certificates to your students</p>
        </div>

        <div className="bg-white border-2 border-black rounded-xl p-10 shadow-2xl shadow-gray-200">
          <div className="space-y-8">
            <div>
              <label className="block text-base font-bold text-black mb-3">Student Name</label>
              <input
                type="text"
                placeholder="Enter student's full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-200 bg-white text-black placeholder-gray-400 text-lg transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-base font-bold text-black mb-3">Student Email</label>
              <input
                type="email"
                placeholder="Enter student's email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-200 bg-white text-black placeholder-gray-400 text-lg transition-all duration-200"
              />
            </div>

            <div className="flex gap-6 pt-4">
              <button
                onClick={handleDownload}
                className="flex-1 bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 hover:scale-105 transition-all duration-200 border-2 border-black shadow-lg"
              >
                ⬇ Download Certificate
              </button>
              <button
                onClick={handleSendEmail}
                className="flex-1 bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-200 border-2 border-black shadow-lg"
              >
                📧 Send via Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
