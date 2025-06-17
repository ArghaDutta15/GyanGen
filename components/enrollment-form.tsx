"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, User, Mail, Phone, BookOpen } from 'lucide-react'

export function EnrollmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="enrollment" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enrollment Successful! 🎉</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for choosing GyanGen! Our team will contact you within 24 hours to discuss your course
                  details and next steps.
                </p>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-gray-600">
                    <strong>What's next?</strong>
                    <br />• You'll receive a confirmation email shortly
                    <br />• Our counselor will call you to discuss your learning path
                    <br />• Access to course materials will be provided after enrollment confirmation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="enrollment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start Your Tech Journey Today</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your career? Fill out the form below and our team will get in touch to help you choose
            the perfect course for your goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 text-center">Enrollment Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Course Selection *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("course", value)} required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your preferred course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="python-genai">Python with GenAI</SelectItem>
                        <SelectItem value="python-fullstack">Python Full Stack</SelectItem>
                        <SelectItem value="mern-stack">MERN Stack</SelectItem>
                        <SelectItem value="mean-stack">MEAN Stack</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your background, goals, or any questions you have..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Enroll Now"}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Enroll with GyanGen?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Industry-Relevant Curriculum</h4>
                      <p className="text-gray-600">
                        Learn the latest technologies and frameworks used by top companies.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Instructors</h4>
                      <p className="text-gray-600">
                        Learn from industry professionals with years of real-world experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Hands-on Projects</h4>
                      <p className="text-gray-600">Build a portfolio of real projects to showcase to employers.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Career Support</h4>
                      <p className="text-gray-600">Get help with resume building, interview prep, and job placement.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Flexible Learning</h4>
                      <p className="text-gray-600">Study at your own pace with both live and recorded sessions.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-bold text-blue-900 mb-2">🎯 Limited Time Offer</h4>
                  <p className="text-blue-800 text-sm">
                    Enroll now and get access to our exclusive job placement program worth ₹10,000 absolutely free!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
