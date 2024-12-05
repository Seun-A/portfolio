'use client'
import Hero from "@/views/hero"
import About from "@/views/about"
import Projects from "@/views/projects"
import Impact from "@/views/impact"
import Contact from "@/views/contact"
import Link from "next/link"
import { Icon } from "@iconify/react"

export default function Main() {
  const isBrowser = () => typeof window !== 'undefined'; 

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Hero />
      <Projects />
      <Contact />

      <div onClick={scrollToTop} href="#home" className='layout-to-top-btn'>
        <Icon icon="ion:chevron-up" />
      </div>
    </>
  )
}