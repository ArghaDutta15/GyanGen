import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Award, Zap } from 'lucide-react'

export function CompanyShowcase() {
  const features = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering individuals with cutting-edge technical skills to excel in the digital age.",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "95% of our graduates successfully transition to tech careers within 6 months.",
    },
    {
      icon: Zap,
      title: "Hands-on Learning",
      description: "Project-based curriculum with real-world applications and portfolio development.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose GyanGen?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to transforming careers through comprehensive technical education. Our mission is to bridge
            the gap between academic learning and industry requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
          <p className="text-xl opacity-90 mb-6">
            Join thousands of successful graduates who've launched their tech careers with GyanGen
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="opacity-90">Graduates Placed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="opacity-90">Partner Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}