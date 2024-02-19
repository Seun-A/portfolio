'use client'
import About from "@/components/About"
import Home from "@/components/Home"
import Impact from "@/components/Impact"
import Projects from "@/components/Projects"

export default function Page() {
  return (
    <div className="overflow-y-scroll h-full baseCtn">
      <Home />
      <About />
      <Projects />
      {/* <Impact /> */}
    </div>
  )
}