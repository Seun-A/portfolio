"use client"

import { useEffect, useRef } from "react"

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  variant = "up",
  immediate = false,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (reducedMotion()) {
      el.classList.add("is-in")
      return
    }

    if (immediate) {
      const frame = requestAnimationFrame(() => el.classList.add("is-in"))
      return () => cancelAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in")
          observer.disconnect()
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
