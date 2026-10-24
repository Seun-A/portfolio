"use client"

import Logo from "@/components/logo"
import Reveal from "@/components/reveal"
import { Icon } from "@iconify/react"
import { useCallback, useEffect, useId, useRef, useState } from "react"

const navItems = [
  { name: "Portfolio", href: "projects" },
  { name: "Contact Me", href: "contact" },
]

const leftItems = navItems.slice(0, 1)
const rightItems = navItems.slice(1)

/** Close the mobile menu after the page moves this far from where it was when the menu opened. */
const SCROLL_CLOSE_DELTA_PX = 24

const linkClassName =
  "nav-link cursor-pointer text-[11px] font-medium uppercase tracking-[0.2em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-xs"

export default function CollapsibleHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const pendingSection = useRef(null)
  const menuId = useId()

  const scrollToSection = useCallback((sectionId) => {
    if (menuOpen) {
      pendingSection.current = sectionId
      setMenuOpen(false)
      return
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen || !pendingSection.current) return
    const sectionId = pendingSection.current
    pendingSection.current = null
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const onPointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false)
    }

    const baselineY = window.scrollY
    const onScroll = () => {
      if (Math.abs(window.scrollY - baselineY) >= SCROLL_CLOSE_DELTA_PX) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", onPointerDown)
    document.addEventListener("touchstart", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      document.removeEventListener("mousedown", onPointerDown)
      document.removeEventListener("touchstart", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("scroll", onScroll)
    }
  }, [menuOpen])

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-b-white bg-deep-blue text-white"
    >
      <Reveal immediate variant="fade" className="relative flex h-16 items-center justify-between px-5 md:h-20 md:px-8 lg:h-22 lg:px-12">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="cursor-pointer rounded-sm focus-visible:outline focus-visible:outline-offset-4 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          aria-label="Seun Ajayi, back to top"
        >
          <Logo className="text-[1.75rem] leading-none md:text-4xl lg:text-[2.75rem]" />
        </button>

        <nav aria-label="Page sections" className="hidden md:contents">
          <div className="hidden items-center gap-10 lg:flex">
            {leftItems.map((item) => (
              <button
                key={item.href}
                type="button"
                className={linkClassName}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-10 lg:flex">
            {rightItems.map((item) => (
              <button
                key={item.href}
                type="button"
                className={linkClassName}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-6 md:flex lg:hidden">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                className={linkClassName}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </nav>

        <button
          type="button"
          className="flex size-10 cursor-pointer items-center justify-center rounded-sm focus-visible:outline focus-visible:outline-offset-4 md:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon icon={menuOpen ? "tabler:x" : "tabler:menu-2"} className="size-6" aria-hidden />
        </button>
      </Reveal>

      <nav
        id={menuId}
        aria-label="Page sections"
        inert={menuOpen ? undefined : true}
        className={`absolute top-full grid w-full overflow-hidden bg-deep-blue transition-[grid-template-rows,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:hidden ${menuOpen ? "grid-rows-[1fr] border-t border-white" : "grid-rows-[0fr] border-t border-transparent"}`}
      >
        <ul className="flex min-h-0 flex-col overflow-hidden py-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                type="button"
                className="w-full cursor-pointer px-5 py-3.5 text-left text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/5"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
