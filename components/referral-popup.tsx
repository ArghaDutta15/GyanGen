"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Gift, Users, Share2 } from "lucide-react"

export function ReferralPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [friendEmail, setFriendEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Show popup after 30s
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 30000)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)

    // Auto-close after 3s
    setTimeout(() => {
      setIsOpen(false)
      setIsSubmitted(false)
      setEmail("")
      setFriendEmail("")
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="absolute right-2 top-2 h-8 w-8 p-0"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Refer & Earn!</CardTitle>
            <p className="text-gray-600 mt-2">Get ₹2,000 off when you refer a friend</p>
          </div>
        </CardHeader>

        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-purple-600" />
                  How it works:
                </h3>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>You get ₹2,000 discount on your course</li>
                  <li>Your friend gets ₹1,000 discount too</li>
                  <li>Both of you save money!</li>
                </ul>
              </div>

              <div className="space-y-2">
                <Label htmlFor="your-email">Your Email</Label>
                <Input
                  id="your-email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="friend-email">Friend's Email</Label>
                <Input
                  id="friend-email"
                  type="email"
                  placeholder="friend.email@example.com"
                  value={friendEmail}
                  onChange={(e) => setFriendEmail(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Send Referral
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By referring, you agree to our <a href="#" className="underline">referral terms and conditions</a>.
              </p>
            </form>
          ) : (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Referral Sent! 🎉</h3>
              <p className="text-gray-600">
                We've sent your referral to your friend. You'll both receive discount codes once they enroll!
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
