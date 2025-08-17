import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
// import ImpactSection from "@/components/impact-section"
import ExperienceSection from "@/components/experience-section"
// import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ImpactSection /> */}
      <ExperienceSection />
      {/* <TestimonialsSection /> */}
      <Footer />
    </main>
  )
}
