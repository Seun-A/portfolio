"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Icon } from "@iconify/react";
import { useStore } from "@/store/context"
import { fetchProjectsCollection } from "@/store/actions"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Link from "next/link";

export default function ProjectsSection() {
  const { state, dispatch } = useStore()
  const { projects, isFetchingProjects } = state

  useEffect(() => {
    fetchProjectsCollection(dispatch)
  }, [dispatch])

  // Use fetched projects or fallback to empty array
  const projectsToDisplay = projects || []


  const ProjectCard = ({ project }) => {
    return (
      <div className="w-full flex justify-center">
        <div className={`shadow-[0.95px_1.9px_6px_0.95px] shadow-accent-dark/20 rounded-xl px-2.5 py-3 w-76 md:w-80 lg:w-96 aspect-[13/14] flex flex-col justify-between gap-4 ${project?.url ? 'border border-accent' : 'animate-bg-pulse'}`}>
          <div className="flex justify-between items-start gap-16">
            <div className="space-y-1 flex-1">
              <div className="text-lg font-medium line-clamp-1">{project?.name ?? "Loading..."}</div>

              <div className="text-sm text-muted-foreground font-light line-clamp-2 h-[2lh]">{project?.description}</div>
            </div>

            <div className="flex items-center justify-center">
              {project?.url && (
                <Link
                  href={project?.url}
                  target="_blank"
                  title="View Project"
                  disabled
                  className="w-8 h-8 bg-white border border-accent hover:bg-accent hover:text-white transition-all duration-300 text-accent rounded-full flex items-center justify-center"
                >
                  <Icon icon="flowbite:link-outline" width="24" height="24" />
                </Link>
              )}
            </div>
          </div>

          <div className="">
            {project?.coverImage?.url && (
              <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={4000}
                stopOnHover={true}
              >
                {[project.coverImage, ...project.imagesCollection.items].map((image, imgIndex) => (
                  <div key={imgIndex} className="h-64">
                    <Image
                      src={image.url}
                      alt={`${project.name} - Image ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </div>
    )
  }


  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 py-10 relative overflow-hidden">
      <div className="mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-accent-dark font-sans">My Projects</h2>
        </div>

        <div className="overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isFetchingProjects ? [...Array(5)].map((_, index) => (
                <ProjectCard key={index} />
              )) :
              projectsToDisplay.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
