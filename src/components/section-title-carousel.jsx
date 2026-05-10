"use client"

import { useMemo, useRef } from "react"
import { Icon } from "@iconify/react"
import Slider from "react-slick"
import { cn } from "@/lib/utils"

const defaultSliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 450,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const navButtonClass =
  "group flex size-10 cursor-pointer items-center justify-center rounded-full bg-indigo text-white transition-all duration-200 hover:bg-powder hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-powder dark:hover:text-indigo"


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

  const sliderSettings = useMemo(() => {
    if (!sliderSettingsProp) return defaultSliderSettings
    return {
      ...defaultSliderSettings,
      ...sliderSettingsProp,
      responsive:
        sliderSettingsProp.responsive !== undefined
          ? sliderSettingsProp.responsive
          : defaultSliderSettings.responsive,
    }
  }, [sliderSettingsProp])

  const headerRowClass =
    titlePosition === "left"
      ? "flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between"
      : "flex flex-col-reverse gap-3 px-2 sm:flex-row-reverse sm:items-center sm:justify-between"

  return (
    <div className={cn("space-y-4", className)}>
      <div className={headerRowClass}>
        <div className="font-sans text-4xl font-medium">{sectionTitle}</div>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => sliderRef.current?.slickPrev()}
            className={navButtonClass}
            aria-label={prevAriaLabel}
          >
            <Icon icon="tabler:chevron-left" className="size-6 transition-transform" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => sliderRef.current?.slickNext()}
            className={navButtonClass}
            aria-label={nextAriaLabel}
          >
            <Icon icon="tabler:chevron-right" className="size-6 transition-transform" aria-hidden />
          </button>
        </div>
      </div>

      <div className="relative overflow-visible">
        <Slider ref={sliderRef} {...sliderSettings} className={sliderClassName}>
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

