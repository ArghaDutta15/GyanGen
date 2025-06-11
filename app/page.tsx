import { Header } from "@/components/ui/header"
import { HeroSection } from "@/components/hero-section" 
import { CompanyShowcase } from "@/components/company-showcase"
import { CoursesSection } from "@/components/courses-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { EnrollmentForm } from "@/components/enrollment-form"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"
import { ChatSupport } from "@/components/chat-support"
import { ReferralPopup } from "@/components/referral-popup"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CompanyShowcase />
        <CoursesSection />
        <TestimonialsSection />
        <PricingSection />
        <EnrollmentForm />
      </main>
      <Footer />
      <ChatSupport />
      <ReferralPopup />
    </div>
  )
}