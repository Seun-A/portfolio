"use client"

import { Icon } from "@iconify/react"
import { useCallback, useEffect, useRef, useState } from "react"

const navItems = [
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
]

/** Close the nav after the page scrolls this many px from where it was when the menu opened */
const SCROLL_CLOSE_DELTA_PX = 56

export default function CollapsibleHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [themeDark, setThemeDark] = useState(true)
  const [mounted, setMounted] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("theme")
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    const nextDark = stored === "dark" || (!stored && prefersDark)
    document.documentElement.classList.toggle("dark", nextDark)
    setThemeDark(nextDark)
  }, [])

  const toggleTheme = useCallback((e) => {
    e.stopPropagation()
    const next = !document.documentElement.classList.contains("dark")
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
    setThemeDark(next)
  }, [])

  const scrollToSection = useCallback((sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMenuOpen(false)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const onPointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", onPointerDown)
    document.addEventListener("touchstart", onPointerDown)

    return () => {
      document.removeEventListener("mousedown", onPointerDown)
      document.removeEventListener("touchstart", onPointerDown)
    }
  }, [menuOpen])

  /* Collapse when focus leaves the header (e.g. Tab out), without relying on pointer events */
  useEffect(() => {
    if (!menuOpen) return
    const root = headerRef.current
    if (!root) return

    const onFocusOut = (event) => {
      const next = event.relatedTarget
      if (next instanceof Node && root.contains(next)) return
      setMenuOpen(false)
    }

    root.addEventListener("focusout", onFocusOut)
    return () => root.removeEventListener("focusout", onFocusOut)
  }, [menuOpen])

  /* Collapse after scrolling away from the position where the menu was opened */
  useEffect(() => {
    if (!menuOpen) return

    const baselineY = window.scrollY

    const onScroll = () => {
      if (Math.abs(window.scrollY - baselineY) >= SCROLL_CLOSE_DELTA_PX) {
        setMenuOpen(false)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [menuOpen])

  return (
    <div
      ref={headerRef}
      className="fixed right-4 top-4 lg:left-8 z-50 w-fit"
    >
      <div className="flex items-center gap-0 rounded-full border border-white/10 bg-black/45 shadow-lg backdrop-blur-md max-w-fit pe-0.5">
        <button
          type="button"
          onClick={toggleTheme}
          className="cursor-pointer flex size-11 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
          aria-label={themeDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <Icon icon="gg:dark-mode" className="size-5 dark:text-powder" />
        </button>
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="cursor-pointer flex items-center gap-3 rounded-full py-2.5 pe-3 ps-4 text-sm font-medium tracking-tight text-white transition-colors hover:bg-white/10 sm:ps-5"
          aria-expanded={menuOpen}
          aria-controls="collapsible-nav-menu"
        >
          <span className="font-sans">Seun Ajayi</span>
          <Icon
            icon={menuOpen ? "tabler:x" : "tabler:menu-2"}
            className="size-5 shrink-0 opacity-90"
            aria-hidden
          />
        </button>
      </div>

      <nav
        id="collapsible-nav-menu"
        hidden={!menuOpen}
        aria-hidden={!menuOpen}
        className={`mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/55 shadow-xl backdrop-blur-md transition-[opacity,transform] duration-200 lg:max-w-fit ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1 opacity-0"
        }`}
      >
        <ul className="flex flex-col py-2">
          <li>
            <button
              type="button"
              className="cursor-pointer w-full text-white px-5 py-3 text-left text-sm font-light transition-colors hover:bg-white/10 hover:text-powder"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
          </li>
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                type="button"
                className="cursor-pointer w-full text-white px-5 py-3 text-left text-sm font-light transition-colors hover:bg-white/10 hover:text-powder"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
