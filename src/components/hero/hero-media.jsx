"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { supabase } from "@/lib/supabase"

const HERO_ASSET_ID = "hero-video"

export default function HeroMedia() {
  const [heroVideo, setHeroVideo] = useState(null)
  const [mediaReady, setMediaReady] = useState(false)
  const frameRef = useRef(null)

  const markReady = useCallback((video) => {
    if (!video || video.readyState < 2) return
    setMediaReady(true)
    video.play().catch(() => {})
  }, [])

  useEffect(() => {
    let active = true

    supabase
      .from("assets")
      .select("title, public_url")
      .eq("id", HERO_ASSET_ID)
      .maybeSingle()
      .then(({ data, error }) => {
        if (!active || error || !data?.public_url) return
        setHeroVideo(data)
      })

    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    markReady(frameRef.current?.querySelector("video"))
  }, [heroVideo, markReady])

  return (
    <div
      ref={frameRef}
      className="relative aspect-video w-full self-start overflow-hidden rounded-3xl md:col-span-2"
    >
      {!mediaReady && <div className="absolute inset-0 animate-bg-pulse" aria-hidden />}
      {heroVideo && (
        <video
          src={heroVideo.public_url}
          aria-label={heroVideo.title || "Hero"}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${mediaReady ? "opacity-100" : "opacity-0"}`}
          onLoadedData={(event) => markReady(event.currentTarget)}
        />
      )}
    </div>
  )
}
