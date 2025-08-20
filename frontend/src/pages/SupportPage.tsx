"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Support ticket submitted successfully!")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-white border-2 border-black p-12 space-y-8">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold text-black">Support</h1>
            <p className="text-lg text-gray-600">Submit a support ticket</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-base font-medium text-black mb-3">Name</label>
              <Input
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-base font-medium text-black mb-3">Email</label>
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-base font-medium text-black mb-3">Subject</label>
              <Input
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-base font-medium text-black mb-3">Message</label>
              <Textarea
                name="message"
                placeholder="Describe your issue..."
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-black min-h-[160px] resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-black text-white py-4 px-6 text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Submit Ticket
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
