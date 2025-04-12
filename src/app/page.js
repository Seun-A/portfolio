'use client'
import Skills from "@/views/skills"
import Projects from "@/views/projects"
import Impact from "@/views/impact"
import Experience from "@/views/experience"
import Testimonials from "@/views/testimonials"
import { Icon } from "@iconify/react"

export default function Main() {
  const isBrowser = () => typeof window !== 'undefined'; 

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      {/* <Skills /> */}
      {/* <Projects /> */}
      <Impact />
      {/* <Experience />
      <Testimonials /> */}

      
      {/* <div onClick={scrollToTop} href="#home" className='layout-to-top-btn'>
        <Icon icon="ion:chevron-up" />
      </div> */}
    </>
  )
}