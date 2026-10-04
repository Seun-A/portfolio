"use client"

import { useRef } from "react"
import DotField from "@/components/hero/dot-field"
import HeroMedia from "@/components/hero/hero-media"
import HighlightedWord from "@/components/hero/highlighted-word"

const COLUMNS = [
  {
    title: (
      <>
        Social-first{" "}
        <HighlightedWord word="video editor" bg="bg-[#F03A47]" text="text-white" caret="bg-white" step={1} />
      </>
    ),
    body: "Producing engaging video content that elevates personal and corporate brand presence.",
    className: "border-b lg:row-start-1 lg:border-b-0",
  },
  {
    title: (
      <>
        Frontend{" "}
        <HighlightedWord word="web developer" bg="bg-[#6CCFF6]" text="text-white" caret="bg-white" step={2} />
      </>
    ),
    body: "4+ years building digital platforms across Real Estate, Energy, Construction, and EdTech.",
    className: "",
  },
]

function HeroCopy({ title, body, className }) {
  return (
    <div className={`@container flex w-full flex-col items-center justify-center p-4 text-center md:text-left lg:h-full ${className}`}>
      <p className="font-sans text-3xl font-medium text-deep-blue">{title}</p>
      <p className="mt-4">{body}</p>
    </div>
  )
}

export default function HeroSectionNew() {
  const containerRef = useRef(null)

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative scroll-mt-20 overflow-hidden pt-8 lg:scroll-mt-28 lg:pt-12"
    >
      <DotField containerRef={containerRef} />
      <div className="relative mx-auto grid min-h-125 flex-col gap-3 p-8 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-8">
        <HeroMedia />
        {COLUMNS.map((column) => (
          <HeroCopy key={column.body} {...column} />
        ))}
      </div>
    </section>
  )
}
