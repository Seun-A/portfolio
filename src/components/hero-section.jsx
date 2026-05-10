"use client"

import Image from "next/image"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { useCallback } from "react"

export default function HeroSection() {
  const scrollToProjects = useCallback(() => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  const socialLinks = [
    {
      href: "https://github.com/Seun-A",
      title: "GitHub",
      icon: "mdi:github",
      className: "bg-[linear-gradient(180deg,#EBF5FF25_50%,#6E40C9_50%)]",
    },
    {
      href: "https://www.linkedin.com/in/seunajayi/",
      title: "LinkedIn",
      icon: "mdi:linkedin",
      className: "bg-[linear-gradient(180deg,#EBF5FF25_50%,#0A66C2_50%)]",
    },
    {
      href: "https://x.com/shun__aj",
      title: "X",
      icon: "prime:twitter",
      className: "bg-[linear-gradient(180deg,#EBF5FF25_50%,#14171A_50%)]",
    },
    {
      href: "https://substack.com/@seunfunmichisom",
      title: "Substack",
      icon: "mingcute:substack-fill",
      className: "bg-[linear-gradient(180deg,#EBF5FF25_50%,#FF6719_50%)]",
    },
    {
      href: "https://calendly.com/seunaj/quick-chat-with-seun/",
      title: "Book a Calendly call",
      icon: "material-symbols:call",
      className: "bg-[linear-gradient(180deg,#EBF5FF25_50%,#25D366_50%)]",
    },
  ]

  return (
    <section
      id="home"
      className="relative overflow-hidden transition-colors duration-200 bg-radial from-powder to-indigo dark:from-indigo dark:to-shadow text-white pt-16 lg:pt-24"
    >
      <div className="relative mx-auto flex min-h-[500px] md:min-h-[750px] flex-col p-8">
        <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:items-end">
          <div className="space-y-3 text-nowrap flex-1">
            <h1 className="lg:hidden pb-10 font-sans text-[clamp(2rem,10vw,8rem)] font-bold leading-none text-white">
              Seun Ajayi
            </h1>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] lg:text-xs font-medium text-white/90 backdrop-blur-sm mb-6">
              <span className="size-1.5 shrink-0 rounded-full bg-powder" aria-hidden />
              Open to Work
            </div>
            <h1 className="font-sans text-3xl lg:text-6xl font-bold">Software Developer</h1>
            <h1 className="font-sans text-2xl lg:text-5xl font-bold opacity-80">Civil Engineer <sup className="font-normal text-lg lg:text-xl">(in View)</sup></h1>
            <h1 className="font-sans text-xl lg:text-4xl font-bold opacity-60">Creative Designer</h1>
            <h1 className="font-sans text-lg lg:text-3xl font-bold opacity-40">Writer</h1>
          </div>

          <div className="flex max-w-96 flex-col gap-4 justify-center">
            <p className="text-sm font-light text-white/80">
              Hi, I&apos;m Seun — a software developer with 4+ years of experience in
              JavaScript, TypeScript, React, and Vue, shipping products in education and property
              tech while completing my Civil Engineering degree ... among other things :)
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ href, title, icon, className }) => (
                <Link
                  key={href}
                  className={`flex size-10 items-center justify-center rounded-full transition-all duration-200 hover:border-white hover:brightness-110 [background-size:100%_200%] hover:[background-position:0_100%] ${className}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={title}
                >
                  <Icon icon={icon} width={20} height={20} />
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={scrollToProjects}
                className="cursor-pointer inline-flex items-center gap-3 rounded-full p-1 pe-4 text-xs font-medium transition-all duration-200 hover:brightness-110 text-indigo hover:text-white [background-size:100%_200%] hover:[background-position:0_100%] bg-[linear-gradient(180deg,#83C5FF_50%,#262941_50%)]"
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-white text-indigo">
                  <Icon icon="tabler:arrow-right" className="size-4" aria-hidden />
                </span>
                See my works
              </button>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 -right-[100%] lg:top-[28%] lg:right-0 opacity-30 lg:opacity-100 lg:z-[15] flex items-end justify-center"
          aria-hidden
        >
          <Image
            src="/Seun-Ajayi-Profile.png"
            alt="Seun Ajayi"
            width={720}
            height={900}
            priority
            className="h-[520px] lg:h-[600px] w-auto object-contain object-bottom drop-shadow-[0_20px_25px_rgba(131,197,255,0.25)]"
          />
        </div>

        <div
          className="hidden lg:flex pointer-events-none absolute inset-x-0 bottom-0 z-30 justify-center overflow-hidden pb-4 pt-12 sm:pb-6 lg:pb-10"
          aria-hidden
        >
          <p className="font-sans text-[clamp(3rem,14vw,12rem)] font-bold leading-none text-transparent [text-stroke:2px_white] [-webkit-text-stroke:2px_white]">
            Seun Ajayi
          </p>
        </div>
        <div
          className="hidden lg:flex pointer-events-none absolute inset-x-0 bottom-0 z-10 justify-center overflow-hidden pb-4 pt-12 sm:pb-6 lg:pb-10"
          aria-hidden
        >
          <p className="font-sans text-[clamp(3rem,14vw,12rem)] font-bold leading-none text-white">
            Seun Ajayi
          </p>
        </div>
      </div>
    </section>
  )
}
