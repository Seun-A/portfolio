"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { supabase } from "@/lib/supabase"

export default function BrandRibbon() {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    let active = true

    supabase
      .from("brands")
      .select("id, name, public_url")
      .order("position", { ascending: true })
      .then(({ data, error }) => {
        if (!active || error || !data?.length) return
        setBrands(data)
      })

    return () => {
      active = false
    }
  }, [])

  if (!brands.length) return null

  const loop = [...brands, ...brands]

  return (
    <section aria-label="Brands" className="overflow-hidden bg-deep-blue">
      <ul className="brand-ribbon flex md:gap-10 lg:gap-20 w-max items-center py-3">
        {loop.map((brand, index) => {
          const copy = index >= brands.length
          return (
            <li
              key={`${brand.id}-${index}`}
              aria-hidden={copy || undefined}
              className="flex shrink-0 items-center px-2 md:px-4"
            >
              <Image
                src={brand.public_url}
                alt={copy ? "" : brand.name}
                width={320}
                height={180}
                unoptimized
                loading="eager"
                className="h-12 w-auto object-contain md:h-20 lg:h-32"
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
