"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Gift, Users } from 'lucide-react'

export function PricingSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Invest in your future with our affordable and comprehensive technical courses. Multiple discount options
            available to make learning accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Standard Pricing */}
          <Card className="relative border-2 border-gray-200">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-gray-900">Standard Fee</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">₹25,000</span>
                <span className="text-gray-500 ml-2">per course</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Complete course access</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Live interactive sessions</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Project-based learning</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Certificate of completion</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">6 months support</span>
                </div>
              </div>
              <Button
                className="w-full mt-6 bg-gray-600 hover:bg-gray-700"
                onClick={() => scrollToSection("enrollment")}
              >
                Enroll Now
              </Button>
            </CardContent>
          </Card>

          {/* Early Bird Discount */}
          <Card className="relative border-2 border-blue-500 shadow-lg scale-105">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1">
              Most Popular
            </Badge>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-gray-900">Early Bird Offer</CardTitle>
              <div className="mt-4">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl text-gray-400 line-through">₹25,000</span>
                  <span className="text-4xl font-bold text-blue-600">₹20,000</span>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <Gift className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-green-600 font-semibold">Save ₹5,000</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Everything in Standard</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Priority support</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Bonus workshops</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Career guidance sessions</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">12 months support</span>
                </div>
              </div>
              <Button
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                onClick={() => scrollToSection("enrollment")}
              >
                Claim Early Bird
              </Button>
            </CardContent>
          </Card>

          {/* Referral Discount */}
          <Card className="relative border-2 border-purple-500">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-gray-900">Referral Discount</CardTitle>
              <div className="mt-4">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl text-gray-400 line-through">₹25,000</span>
                  <span className="text-4xl font-bold text-purple-600">₹23,000</span>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <Users className="h-5 w-5 text-purple-500 mr-2" />
                  <span className="text-purple-600 font-semibold">Save ₹2,000</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Everything in Standard</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Refer a friend & save</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Friend gets discount too</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Unlimited referrals</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-600">Community access</span>
                </div>
              </div>
              <Button
                className="w-full mt-6 bg-purple-600 hover:bg-purple-700"
                onClick={() => scrollToSection("enrollment")}
              >
                Refer & Save
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            💡 <strong>Pro Tip:</strong> Combine Early Bird + Referral for maximum savings!
          </p>
          <p className="text-sm text-gray-500">
            All prices are inclusive of taxes. EMI options available. Contact us for corporate training discounts.
          </p>
        </div>
      </div>
    </section>
  )
}