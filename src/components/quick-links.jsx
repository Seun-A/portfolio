"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { supabase } from "@/lib/supabase"

const PLACEHOLDERS = [
  { id: "a", width: 16, height: 10 },
  { id: "b", width: 4, height: 5 },
  { id: "c", width: 16, height: 9 },
]

const mediaClass =
  "object-cover transition-[scale] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"

function isVideoFile(url) {
  return /\.(mp4|webm|mov)(\?|$)/i.test(url || "")
}

function QuickLinkTile({ item }) {
  const [ready, setReady] = useState(false)
  const markReady = useCallback((media) => {
    if (!media) return
    if (media.tagName === "VIDEO") {
      if (media.readyState >= 2) setReady(true)
      return
    }
    if (media.complete && media.naturalWidth > 0) setReady(true)
  }, [])

  const width = item.width || 16
  const height = item.height || 9
  const preview = item.preview_url
  const video = isVideoFile(preview)

  return (
    <li className="mb-2 break-inside-avoid md:mb-3">
      {preview ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.title}
          className="group block overflow-hidden"
        >
          <span className="relative block overflow-hidden" style={{ aspectRatio: `${width} / ${height}` }}>
            {!ready && <span className="absolute inset-0 animate-bg-pulse" aria-hidden />}
            {video ? (
              <video
                src={preview}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                aria-hidden
                className={`pointer-events-none absolute inset-0 h-full w-full ${mediaClass} ${ready ? "opacity-100" : "opacity-0"}`}
                onLoadedData={(event) => {
                  markReady(event.currentTarget)
                  event.currentTarget.play().catch(() => {})
                }}
              />
            ) : (
              <Image
                src={preview}
                alt={item.title || ""}
                fill
                className={`${mediaClass} ${ready ? "opacity-100" : "opacity-0"}`}
                sizes="(min-width: 1024px) 30vw, 50vw"
                onLoad={(event) => markReady(event.currentTarget)}
              />
            )}
          </span>
        </a>
      ) : (
        <span className="block animate-bg-pulse" style={{ aspectRatio: `${width} / ${height}` }} aria-hidden />
      )}
    </li>
  )
}

export default function QuickLinks() {
  const [links, setLinks] = useState(null)

  useEffect(() => {
    let active = true

    supabase
      .from("quick_links")
      .select("id, title, preview_url, href, width, height, position")
      .order("position", { ascending: true })
      .then(({ data, error }) => {
        if (!active) return
        setLinks(error ? [] : data ?? [])
      })

    return () => {
      active = false
    }
  }, [])

  const items = links?.length ? links : PLACEHOLDERS

  return (
    <div className="mb-16">
      <h3 className="mb-6 text-center font-sans text-sm font-medium tracking-[0.28em] uppercase md:mb-8 md:text-base">
        Quick links
      </h3>
      <ul className="columns-2 gap-2 md:columns-3 md:gap-3">
        {items.map((item) => (
          <QuickLinkTile key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}
