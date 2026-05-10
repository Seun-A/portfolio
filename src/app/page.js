import CollapsibleHeader from "@/components/collapsible-header"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
/**
 * Impact
 * Experience
 * Testimonials
 * Gallery
 */
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <CollapsibleHeader />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </main>
  )
}
