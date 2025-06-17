"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-blue-600 uppercase tracking-wide">
                Join India’s Fastest Growing Learning Platform
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Master <span className="text-blue-600">Technology</span> with
                <span className="text-purple-600"> Argha</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your career with our comprehensive technical courses.
                Learn Python, Full Stack Development, and cutting-edge
                technologies from industry experts.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => scrollToSection("courses")}
                aria-label="Explore our course offerings"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 px-8 py-4 text-lg"
                onClick={() =>
                  window.open("https://www.youtube.com/watch?v=demo_link", "_blank")
                }
                aria-label="Watch demo video"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.8/5</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&h=980"
                alt="Students collaborating while learning technology"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
