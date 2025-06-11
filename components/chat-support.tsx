"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send } from 'lucide-react'
import { Input } from "@/components/ui/input"

export function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hi! I'm here to help you with any questions about our courses. How can I assist you today?",
      timestamp: new Date(),
    },
  ])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        type: "user",
        content: message,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, newMessage])
      setMessage("")

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          type: "bot",
          content:
            "Thank you for your message! Our team will get back to you shortly. For immediate assistance, please call us at +91 98765 43210.",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botResponse])
      }, 1000)
    }
  }

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-80 h-96 z-50">
          <Card className="h-full shadow-2xl">
            <CardHeader className="bg-blue-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Chat Support</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-blue-700 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-blue-100 text-sm">We're here to help!</p>
            </CardHeader>

            <CardContent className="flex flex-col h-full p-0">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs p-3 rounded-lg text-sm ${
                        msg.type === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg z-50"
        size="sm"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  )
}