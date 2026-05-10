"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Icon } from "@iconify/react"
import { useStore } from "@/store/context"
import { fetchProjectsCollection } from "@/store/actions"
import Link from "next/link"
import Slider from "react-slick"
import { LeftTitleCarousel, RightTitleCarousel, EmptyTitleCarousel } from "@/components/section-title-carousel"

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

const SoftwareProjectCard = ({ project }) => {
  const cardCarouselSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const carouselImages = project ? getCarouselImages(project) : []
  const stackTags = project ? getStackTags(project) : []

  return !project ? (
    <div className="aspect-4/5 w-full justify-center rounded-xl animate-bg-pulse" />
  ) : (
    <div
      className="relative aspect-4/5 w-full cursor-pointer justify-center overflow-hidden rounded-xl border text-indigo transition-all duration-300 bg-size-[100%_200%] bg-[linear-gradient(180deg,#EBF5FF_50%,#262941_50%)] hover:bg-position-[0_100%] hover:text-white"
    >
      <Link
        href={project?.url ?? "#"}
        target="_blank"
        title="View Project"
        onClick={(e) => e.stopPropagation()}
        className="grid h-full w-full grid-rows-7"
      >
        <div className="row-span-4 flex max-w-full flex-col gap-3 overflow-hidden px-1 py-3">
          <div className="mx-2 w-fit rounded-md border px-2 py-px text-[10px] uppercase opacity-80">
            {project.tagLine ?? "Featured"}
          </div>
          <div className="relative max-w-full overflow-hidden">
            {carouselImages.length > 0 && (
              <Slider {...cardCarouselSettings}>
                {carouselImages.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative h-68">
                    <Image
                      src={image.url}
                      alt={`${project.name} - Image ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
        <div className="row-span-3 grid grid-rows-12 px-3">
          <div className="row-span-3 text-2xl font-semibold">{project?.name ?? "Loading..."}</div>
          <div className="row-span-5 text-sm font-light py-2">
            <span className="line-clamp-3 lg:line-clamp-4">{project?.description}</span>
          </div>
          <div className="row-span-4 flex items-center justify-between border-t">
            <div className="flex items-center gap-2 text-[10px] *:rounded-md *:border *:px-1 *:py-px *:cursor-text">
              {stackTags.map((tag, i) => (
                <span key={`${tag}-${i}`}>{tag}</span>
              ))}
            </div>
            <div
              className="link-button flex size-8 items-center justify-center rounded-full border transition-all duration-300 hover:border-white hover:bg-white hover:text-indigo"
            >
              <Icon icon="iconamoon:arrow-top-right-1-light" width="24" height="24" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
function ArticleCard({ article }) {
  const { name, description, url, tagLine, coverImage } = article

  return (
    <article className="cursor-pointer relative flex aspect-square w-full flex-col overflow-hidden rounded-lg md:rounded-xl text-indigo">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={name ? `Read: ${name}` : "Read article"}
        className="flex h-full min-h-0 flex-col relative"
      >
        <div className="relative h-full shrink-0 bg-powder-50/80 dark:bg-shadow/50">
          {coverImage?.url ? (
            <Image
              src={coverImage.url}
              alt={coverImage.title ?? name ?? "Article cover"}
              fill
              className="object-cover transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-xs font-medium text-indigo/40 dark:text-white/40">
              Article
            </div>
          )}
        </div>

        <div className="absolute top-0 left-0 h-[200%] w-full text-transparent transition-all duration-300 bg-size-[100%_200%] bg-[linear-gradient(180deg,#EBF5FF00_50%,#262941_50%)] dark:bg-[linear-gradient(180deg,#EBF5FF00_50%,#FFFFFF_50%)] hover:bg-position-[0_100%] hover:text-white dark:hover:text-indigo">
          <div className="grid grid-rows-10 gap-2 px-4 pb-4 pt-3 h-1/2">
            <div className="row-span-1 flex items-center">
              <span className="border text-[10px] font-medium uppercase tracking-wider px-1.5 rounded-md w-fit">{tagLine ?? "Article"}</span>
            </div>
            <h3 className="row-span-3 line-clamp-2 font-sans text-3xl font-semibold leading-snug">{name ?? "Untitled"}</h3>
            <p className="row-span-4 line-clamp-4 text-sm font-light leading-relaxed">
              {description}
            </p>
            <div className="row-span-2 flex items-end gap-2 text-sm hover:underline">
              <span>Read Article</span>
              <Icon
                icon="iconamoon:arrow-top-right-1-light"
                width={18}
                height={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5 hover:-translate-y-0.5"
                aria-hidden
              />
            </div>
          </div>
        </div>

      </Link>
    </article>
  )
}


export default function ProjectsSection() {
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
      className="relative overflow-hidden bg-powder-50/50 px-4 py-10 pb-24 dark:bg-shadow sm:px-6 md:pb-32 lg:px-32"
    >
      <div className="relative z-10 mx-auto max-md:max-w-7xl">
        <header className="mb-10 md:mb-12">
          <div className="mb-6 text-center md:mb-12">
            <h2 className="font-sans text-3xl lg:text-5xl font-semibold md:text-4xl">
              I <span className="text-powder">work</span>.
            </h2>
            <h3 className="mt-1 font-sans text-3xl lg:text-5xl font-bold md:text-6xl">
              I work a <span className="text-powder">lot</span>.
            </h3>
          </div>
        </header>
    
        <div className="space-y-16">
          {isFetchingProjects ? (
            <EmptyTitleCarousel />
          ) : (
            <>
              <LeftTitleCarousel
                sectionTitle="Software Projects"
                prevAriaLabel="Previous project"
                nextAriaLabel="Next project"
              >
                {projectsToDisplay.map((project, index) => (
                  <SoftwareProjectCard key={index} project={project} />
                ))}
              </LeftTitleCarousel>

              <RightTitleCarousel
                sectionTitle="Articles"
                prevAriaLabel="Previous article"
                nextAriaLabel="Next article"
              >
                {articlesToDisplay.map((article, index) => (
                  <ArticleCard key={index} article={article} />
                ))}
              </RightTitleCarousel>

              {/* <LeftTitleCarousel
                sectionTitle="Civil Engineering Projects"
                prevAriaLabel="Previous project"
                nextAriaLabel="Next project"
              >
                {projectsToDisplay.map((project, index) => (
                  <SoftwareProjectCard key={project?.id ?? index} project={project} />
                ))}
              </LeftTitleCarousel> */}

              {/* <RightTitleCarousel
                sectionTitle="Creative Projects"
                prevAriaLabel="Previous projects"
                nextAriaLabel="Next project"
              >
                {projectsToDisplay.map((project, index) => (
                  <SoftwareProjectCard key={project?.id ?? index} project={project} />
                ))}
              </RightTitleCarousel> */}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
