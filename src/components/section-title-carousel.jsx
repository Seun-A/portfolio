"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Icon } from "@iconify/react"
import Slider from "react-slick"
import { cn } from "@/lib/utils"

const defaultSliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 450,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
}

// react-slick's `responsive` prop only listens for matchMedia *changes* and
// never checks the initial match state, so on a fresh mobile load it stays on
// the default slidesToShow. We compute the responsive value ourselves.
function getResponsiveSlides(width) {
  if (width <= 640) return 1
  if (width <= 1024) return 2
  return 3
}

function useResponsiveSlides() {
  const [slides, setSlides] = useState(null)

  useEffect(() => {
    const update = () => setSlides(getResponsiveSlides(window.innerWidth))
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return slides
}

const navButtonClass =
  "group flex size-8 lg:size-10 cursor-pointer items-center justify-center rounded-full bg-indigo text-white transition-all duration-200 hover:bg-powder hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-powder dark:hover:text-indigo"


function SectionTitleCarousel({
  titlePosition = "left",
  sectionTitle,
  children,
  sliderSettings: sliderSettingsProp,
  className,
  sliderClassName = "projects-slider",
  prevAriaLabel = "Previous slide",
  nextAriaLabel = "Next slide",
}) {
  const sliderRef = useRef(null)
  const responsiveSlides = useResponsiveSlides()

  const sliderSettings = useMemo(() => {
    const merged = sliderSettingsProp
      ? { ...defaultSliderSettings, ...sliderSettingsProp }
      : { ...defaultSliderSettings }

    if (responsiveSlides != null) {
      merged.slidesToShow = responsiveSlides
      merged.slidesToScroll = responsiveSlides
    }

    return merged
  }, [sliderSettingsProp, responsiveSlides])

  const headerRowClass =
    titlePosition === "left"
      ? "gap-3 px-2 flex items-center justify-between"
      : "gap-3 px-2 flex md:flex-row-reverse items-center justify-between"

  return (
    <div className={cn("space-y-4", className)}>
      <div className={headerRowClass}>
        <div className="font-sans text-lg lg:text-4xl font-medium">{sectionTitle}</div>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => sliderRef.current?.slickPrev()}
            className={navButtonClass}
            aria-label={prevAriaLabel}
          >
            <Icon icon="tabler:chevron-left" className="size-5 lg:size-6 transition-transform" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => sliderRef.current?.slickNext()}
            className={navButtonClass}
            aria-label={nextAriaLabel}
          >
            <Icon icon="tabler:chevron-right" className="size-5 lg:size-6 transition-transform" aria-hidden />
          </button>
        </div>
      </div>

      <div className="relative overflow-visible">
        <Slider
          key={`slides-${sliderSettings.slidesToShow}`}
          ref={sliderRef}
          {...sliderSettings}
          className={sliderClassName}
        >
          {children}
        </Slider>
      </div>
    </div>
  )
}

export function LeftTitleCarousel(props) {
  return <SectionTitleCarousel {...props} titlePosition="left" />
}

export function RightTitleCarousel(props) {
  return <SectionTitleCarousel {...props} titlePosition="right" />
}

export function EmptyTitleCarousel({ className }) {
  return (
    <div
      className={cn("grid grid-cols-1 gap-4 sm:grid-cols-3", className)}
      aria-busy="true"
      aria-label="Loading projects"
    >
      {[0, 1, 2].map((i) => (
        <div key={i} className="aspect-4/5 w-full rounded-xl animate-bg-pulse" />
      ))}
    </div>
  )
}

