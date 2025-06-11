import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star } from 'lucide-react'

export function CoursesSection() {
  const courses = [
    {
      title: "Python with GenAI",
      description:
        "Master Python programming and Generative AI technologies. Build intelligent applications using modern AI frameworks.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      duration: "12 weeks",
      students: "150+",
      rating: "4.9",
      level: "Intermediate",
      highlights: ["OpenAI API", "LangChain", "Vector Databases", "AI Applications"],
    },
    {
      title: "Python Full Stack",
      description:
        "Complete Python web development from backend APIs to frontend interfaces using Django and modern frameworks.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      duration: "16 weeks",
      students: "200+",
      rating: "4.8",
      level: "Beginner to Advanced",
      highlights: ["Django", "REST APIs", "PostgreSQL", "Deployment"],
    },
    {
      title: "MERN Stack",
      description:
        "Build modern web applications using MongoDB, Express.js, React, and Node.js with industry best practices.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      duration: "14 weeks",
      students: "180+",
      rating: "4.9",
      level: "Intermediate",
      highlights: ["React", "Node.js", "MongoDB", "Express.js"],
    },
    {
      title: "MEAN Stack",
      description: "Develop scalable web applications using MongoDB, Express.js, Angular, and Node.js with TypeScript.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      duration: "14 weeks",
      students: "120+",
      rating: "4.7",
      level: "Intermediate",
      highlights: ["Angular", "TypeScript", "MongoDB", "Express.js"],
    },
  ]

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Featured Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive technical courses designed to give you the skills needed to excel in today's
            competitive tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{course.level}</Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{course.title}</CardTitle>
                <p className="text-gray-600">{course.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    {course.rating}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">View Syllabus</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}