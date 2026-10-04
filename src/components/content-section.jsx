"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { supabase } from "@/lib/supabase"
import HighlightedWord from "@/components/hero/highlighted-word"

const PHOTO_FRAME =
  "group relative h-full min-h-0 overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl"

function PhotoFrame({ photo }) {
  const [ready, setReady] = useState(false)
  const frameRef = useRef(null)

  const markReady = useCallback((img) => {
    if (img?.complete && img.naturalWidth > 0) setReady(true)
  }, [])

  useEffect(() => {
    setReady(false)
    markReady(frameRef.current?.querySelector("img"))
  }, [photo?.public_url, markReady])

  return (
    <div ref={frameRef} className={PHOTO_FRAME}>
      {!ready && <div className="absolute inset-0 animate-bg-pulse" aria-hidden />}
      {photo?.public_url && (
        <Image
          src={photo.public_url}
          alt={photo.name || ""}
          fill
          className={`object-cover transition-[opacity,scale] duration-[400ms,1100ms] ease-[ease,cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${ready ? "opacity-100 group-hover:scale-105" : "opacity-0"}`}
          sizes="(min-width: 1024px) 22vw, 50vw"
          onLoad={(event) => markReady(event.currentTarget)}
        />
      )}
    </div>
  )
}

const PAIR_RATIO = "aspect-[8/5] md:aspect-video lg:aspect-[8/5]"

function PhotoPair({ photos, columns }) {
  return (
    <div className={`grid gap-2 md:gap-3 lg:gap-4 ${PAIR_RATIO} ${columns}`}>
      {photos.map((photo, index) => (
        <PhotoFrame key={photo?.id ?? `slot-${index}`} photo={photo} />
      ))}
    </div>
  )
}

export default function ContentSection() {
  const [photos, setPhotos] = useState(null)

  useEffect(() => {
    let active = true

    supabase
      .from("personal_photos")
      .select("id, name, public_url, position")
      .order("position", { ascending: true })
      .then(({ data, error }) => {
        if (!active) return
        setPhotos(error ? [] : data ?? [])
      })

    return () => {
      active = false
    }
  }, [])

  const slots = [0, 1, 2, 3].map((index) => photos?.[index] ?? null)

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="bg-deep-blue text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 md:gap-8 md:px-8 md:py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:gap-y-4 lg:px-12 lg:py-20">
        <PhotoPair photos={slots.slice(0, 2)} columns="grid-cols-[2fr_3fr]" />

        <div className="flex flex-col items-start lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <h2 className="max-w-md font-sans text-4xl leading-[1.05] font-bold tracking-tight md:text-5xl lg:text-6xl">
            Work you can{" "}
            <HighlightedWord word="count" bg="bg-[#F03A47]" text="text-white" caret="bg-white" step={1} /> on
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            Hi, I'm Seun
            <br />
            I'm a <strong>video editor</strong>, <strong>digital creator</strong>, and <strong>frontend developer</strong>, with a background in <strong>Civil Engineering</strong>. Using a wide range of tools, I craft <strong>visual experiences</strong> and <strong>digital products</strong> that bring brand stories to life and leave a <strong>lasting impression</strong>.
          </p>
          <button
            type="button"
            onClick={scrollToProjects}
            className="mt-8 inline-flex cursor-pointer items-center bg-white px-8 py-4 text-sm font-semibold tracking-[0.14em] text-black uppercase"
          >
            See projects
          </button>
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <PhotoPair photos={slots.slice(2, 4)} columns="grid-cols-[3fr_2fr]" />
        </div>
      </div>
    </section>
  )
}
