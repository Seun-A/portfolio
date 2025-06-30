"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useStore } from "@/store/context"
import { fetchProjectsCollection } from "@/store/actions"

export default function ProjectsSection() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const cardWidth = 350

  const { state, dispatch } = useStore()
  const { projects, isFetchingProjects } = state

  useEffect(() => {
    fetchProjectsCollection(dispatch)
  }, [dispatch])

  if (isFetchingProjects) {
    return (
      <div>loading...</div>
    )
  }

  // Use fetched projects or fallback to empty array
  const projectsToDisplay = projects || []
  const maxScroll = Math.max(0, (projectsToDisplay.length - 1.75) * cardWidth)

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - cardWidth))
  }

  const scrollRight = () => {
    setScrollPosition(Math.min(maxScroll, scrollPosition + cardWidth))
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-custom-gradient">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative solutions across civil engineering and software development
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-6 pt-2 pb-6"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {projectsToDisplay.map((project, index) => (
                <Card key={index} className="flex-shrink-0 w-80 hover:shadow-lg transition-shadow flex flex-col gap-0 py-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={project.coverImage?.url || "/placeholder.jpg"}
                      alt={project.name}
                      fill
                      className="object-cover"
                      />
                      {/* objectFit="cover" */}
                  </div>
                  <CardContent className="p-6 flex-1 grid grid-flow-col grid-rows-5 gap-1">
                    <h3 className="text-xl font-bold mb-2 row-span-1 line-clamp-2 text-custom-gradient">{project.name}</h3>
                    <p className="text-gray-600 mb-4 row-span-2 line-clamp-5">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 row-span-1 items-start">
                      {/* Technologies not available in Contentful data, so we'll skip this for now */}
                    </div>
                    <div className="flex gap-2 row-span-1 items-end">
                      {project.url && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-[#7B4331] text-white hover:text-white hover:bg-[#7B4331] hover:brightness-[1.1]"
                          onClick={() => window.open(project.url, '_blank')}
                        >
                          <Icon icon="tabler:external-link" />
                          View
                        </Button>
                      )}

                      {project.github && (
                        <Button size="sm" variant="outline" className="bg-black text-white">
                          <Icon icon="hugeicons:github" />
                          Code
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg"
            onClick={scrollLeft}
            disabled={scrollPosition === 0}
          >
            <Icon icon="lineicons:chevron-left" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg"
            onClick={scrollRight}
            disabled={scrollPosition >= maxScroll}
          >
           <Icon icon="lineicons:chevron-right" />
          </Button>
        </div>
      </div>
    </section>
  )
}
