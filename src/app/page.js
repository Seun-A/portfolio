import CollapsibleHeader from "@/components/collapsible-header"
import HeroSection from "@/components/hero-section"
import BrandRibbon from "@/components/brand-ribbon"
import ContentSection from "@/components/content-section"
import ProjectsSection from "@/components/projects-section"
/**
 * Quick Links to videos
 * Quick links to websites
 * Articles
 * Testimonials
 * Impact
 */
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-powder-50">
      <CollapsibleHeader />
      <HeroSection />
      <BrandRibbon />
      <ContentSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}
