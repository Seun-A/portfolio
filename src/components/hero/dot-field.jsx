"use client"

import { useEffect, useRef } from "react"

const SPACING = 26
const BASE_RADIUS = 1.4
const REPEL_RADIUS = 140
const MAX_PUSH = 34
const EASE = 0.12
const DOT_COLOR = "15, 23, 42"

export default function DotField({ containerRef }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let dots = []
    let width = 0
    let height = 0
    const mouse = { x: -9999, y: -9999 }

    const buildGrid = () => {
      const dpr = window.devicePixelRatio || 1
      width = container.clientWidth
      height = container.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      dots = []
      for (let y = SPACING / 2; y < height; y += SPACING) {
        for (let x = SPACING / 2; x < width; x += SPACING) {
          dots.push({ x0: x, y0: y, x, y })
        }
      }
    }

    const handleMove = (event) => {
      const rect = container.getBoundingClientRect()
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
    }

    const handleLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    let raf = 0
    const tick = () => {
      ctx.clearRect(0, 0, width, height)

      for (const dot of dots) {
        const dx = dot.x0 - mouse.x
        const dy = dot.y0 - mouse.y
        const dist = Math.hypot(dx, dy)

        let targetX = dot.x0
        let targetY = dot.y0
        let fade = 1

        if (dist < REPEL_RADIUS) {
          const strength = 1 - dist / REPEL_RADIUS
          const push = strength * MAX_PUSH
          const nx = dist === 0 ? 0 : dx / dist
          const ny = dist === 0 ? 0 : dy / dist
          targetX = dot.x0 + nx * push
          targetY = dot.y0 + ny * push
          fade = 1 - strength * 0.6
        }

        dot.x += (targetX - dot.x) * EASE
        dot.y += (targetY - dot.y) * EASE

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, BASE_RADIUS, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${DOT_COLOR}, ${0.2 * fade})`
        ctx.fill()
      }

      raf = requestAnimationFrame(tick)
    }

    buildGrid()
    tick()

    const resizeObserver = new ResizeObserver(buildGrid)
    resizeObserver.observe(container)
    container.addEventListener("pointermove", handleMove)
    container.addEventListener("pointerleave", handleLeave)

    return () => {
      cancelAnimationFrame(raf)
      resizeObserver.disconnect()
      container.removeEventListener("pointermove", handleMove)
      container.removeEventListener("pointerleave", handleLeave)
    }
  }, [containerRef])

  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-surface via-surface-muted to-accent" />
      </div>
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" />
    </>
  )
}
