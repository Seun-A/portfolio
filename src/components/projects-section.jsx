"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Icon } from "@iconify/react"
import { useStore } from "@/store/context"
import { fetchProjectsCollection } from "@/store/actions"
import Link from "next/link"
import Slider from "react-slick"
import HighlightedWord from "@/components/hero/highlighted-word"
import { LeftTitleCarousel, RightTitleCarousel } from "@/components/section-title-carousel"
import DotField from "@/components/hero/dot-field"
import QuickLinks from "@/components/quick-links"

const imageZoomClass =
  "object-cover transition-[scale] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"

function getCarouselImages(item) {
  if (!item?.coverImage?.url) return []
  const extra = item?.imagesCollection?.items?.filter((img) => img?.url) ?? []
  return [item.coverImage, ...extra]
}

function getStackTags(item) {
  const stack = item?.stack
  if (Array.isArray(stack) && stack.length > 0) {
    return stack.filter(Boolean).slice(0, 3)
  }
  if (typeof stack === "string" && stack.trim()) {
    return stack
      .split(/[,|]/)
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 3)
  }
  if (item?.tagLine) return [item.tagLine]
  return ["—"]
}

function CardSkeleton({ mediaClassName }) {
  return (
    <article aria-hidden>
      <div className={`${mediaClassName} w-full animate-bg-pulse rounded-3xl`} />
      <div className="mt-4 flex flex-col gap-2">
        <div className="h-3 w-24 animate-bg-pulse" />
        <div className="h-7 w-3/4 animate-bg-pulse" />
        <div className="h-4 w-full animate-bg-pulse" />
        <div className="h-4 w-5/6 animate-bg-pulse" />
      </div>
    </article>
  )
}

const SKELETON_CARDS = [0, 1, 2]

const SoftwareProjectCard = ({ project }) => {
  const [mediaReady, setMediaReady] = useState(false)
  const cardCarouselSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const carouselImages = getCarouselImages(project)
  const stackTags = getStackTags(project)

  return (
    <article className="group">
      <Link
        href={project?.url ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        title="View Project"
        className="flex flex-col"
      >
        <div className="project-media relative aspect-video overflow-hidden rounded-3xl">
          {!mediaReady && <div className="absolute inset-0 z-10 animate-bg-pulse" />}
          {carouselImages.length > 0 && (
            <Slider {...cardCarouselSettings}>
              {carouselImages.map((image, imgIndex) => (
                <div key={imgIndex} className="relative h-full">
                  <Image
                    src={image.url}
                    alt={`${project.name} - Image ${imgIndex + 1}`}
                    fill
                    className={`${imageZoomClass} ${mediaReady ? "opacity-100" : "opacity-0"}`}
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    onLoad={() => setMediaReady(true)}
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <span className="w-fit text-[11px] font-medium tracking-[0.16em] uppercase text-deep-blue/70">
            {project.tagLine ?? "Featured"}
          </span>
          <h3 className="font-sans text-2xl font-bold tracking-tight">{project?.name ?? "Loading..."}</h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-deep-blue/80">{project?.description}</p>
          <div className="mt-2 flex items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {stackTags.map((tag, i) => (
                <span key={`${tag}-${i}`} className="text-[11px] tracking-[0.12em] text-deep-blue/60 uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <span className="flex size-10 shrink-0 items-center justify-center bg-deep-blue hover:bg-[#F03A47] transition-colors duration-200 text-white">
              <Icon icon="iconamoon:arrow-top-right-1-light" width="22" height="22" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
function ArticleCard({ article }) {
  const [mediaReady, setMediaReady] = useState(false)
  const { name, description, url, tagLine, coverImage } = article

  return (
    <article className="group">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={name ? `Read: ${name}` : "Read article"}
        className="flex flex-col"
      >
        <div className="relative aspect-square overflow-hidden rounded-3xl">
          {!mediaReady && <div className="absolute inset-0 animate-bg-pulse" />}
          {coverImage?.url && (
            <Image
              src={coverImage.url}
              alt={coverImage.title ?? name ?? "Article cover"}
              fill
              className={`${imageZoomClass} ${mediaReady ? "opacity-100" : "opacity-0"}`}
              sizes="(max-width: 1024px) 50vw, 33vw"
              onLoad={() => setMediaReady(true)}
            />
          )}
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <span className="w-fit text-[11px] font-medium tracking-[0.16em] text-deep-blue/70 uppercase">
            {tagLine ?? "Article"}
          </span>
          <h3 className="line-clamp-2 font-sans text-2xl font-bold tracking-tight">{name ?? "Untitled"}</h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-deep-blue/80">{description}</p>
          <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.14em] uppercase">
            Read article
            <Icon icon="iconamoon:arrow-top-right-1-light" width={18} height={18} aria-hidden />
          </span>
        </div>
      </Link>
    </article>
  )
}


export default function ProjectsSection() {
  const containerRef = useRef(null)

  const { state, dispatch } = useStore()
  const { projects, articles, isFetchingProjects } = state
  const projectsToDisplay = projects ?? []
  const articlesToDisplay = articles ?? []

  useEffect(() => {
    fetchProjectsCollection(dispatch)
  }, [dispatch])

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative scroll-mt-20 overflow-hidden bg-powder-50 px-4 py-10 text-deep-blue md:px-8 md:py-16 lg:scroll-mt-28 lg:px-12 lg:py-20"
    >
      <DotField containerRef={containerRef} />
      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="mb-10 md:mb-14">
          <h3 className="mt-1 font-sans text-4xl leading-[1.05] font-bold tracking-tight md:text-5xl lg:text-6xl">
            I work quite a <HighlightedWord word="lot" bg="bg-[#6CCFF6]" text="text-white" caret="bg-white" step={2} />.
          </h3>
        </header>

        <QuickLinks />

        <div className="space-y-16">
          <LeftTitleCarousel
            sectionTitle="Software Projects"
            prevAriaLabel="Previous project"
            nextAriaLabel="Next project"
          >
            {isFetchingProjects
              ? SKELETON_CARDS.map((index) => <CardSkeleton key={index} mediaClassName="aspect-video" />)
              : projectsToDisplay.map((project, index) => (
                  <SoftwareProjectCard key={index} project={project} />
                ))}
          </LeftTitleCarousel>

          <RightTitleCarousel
            sectionTitle="Articles"
            prevAriaLabel="Previous article"
            nextAriaLabel="Next article"
          >
            {isFetchingProjects
              ? SKELETON_CARDS.map((index) => <CardSkeleton key={index} mediaClassName="aspect-square" />)
              : articlesToDisplay.map((article, index) => (
                  <ArticleCard key={index} article={article} />
                ))}
          </RightTitleCarousel>
        </div>
      </div>
    </section>
  )
}
