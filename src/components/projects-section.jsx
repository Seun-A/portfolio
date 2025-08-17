"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { useStore } from "@/store/context"
import { fetchProjectsCollection } from "@/store/actions"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function ProjectsSection() {
  const { state, dispatch } = useStore()
  const { projects, isFetchingProjects } = state

  useEffect(() => {
    fetchProjectsCollection(dispatch)
  }, [dispatch])

  // Mock project images for demonstration - you can replace these with actual project images
  const getProjectImages = (projectName) => {
    const imageMap = {
      'Brooi': ['/projects/brooi.png', '/projects/custom-nav.jpg', '/projects/e-commerce.jpeg'],
      'E-commerce': ['/projects/e-commerce.jpeg', '/projects/brooi.png', '/projects/custom-nav.jpg'],
      'Custom Navigation': ['/projects/custom-nav.jpg', '/projects/e-commerce.jpeg', '/projects/brooi.png'],
      'default': ['/projects/placeholder.jpg', '/projects/brooi.png', '/projects/e-commerce.jpeg']
    }
    return imageMap[projectName] || imageMap['default']
  }

  if (isFetchingProjects) {
    return (
      <div className="py-20 bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-400 text-lg">Loading projects...</p>
        </div>
      </div>
    )
  }

  // Use fetched projects or fallback to empty array
  const projectsToDisplay = projects || []

  const scrollLeft = () => {
    const container = document.getElementById('projects-carousel')
    if (container) {
      const cardWidth = 384 + 24
      const currentScroll = container.scrollLeft
      const newScroll = currentScroll - cardWidth
      
      if (newScroll < 0) {
        // Jump to end if we're at the beginning
        container.scrollTo({ left: container.scrollWidth - cardWidth, behavior: 'smooth' })
      } else {
        container.scrollTo({ left: newScroll, behavior: 'smooth' })
      }
    }
  }

  const scrollRight = () => {
    const container = document.getElementById('projects-carousel')
    if (container) {
      const cardWidth = 384 + 24
      const currentScroll = container.scrollLeft
      const newScroll = currentScroll + cardWidth
      const maxScroll = container.scrollWidth - container.clientWidth
      
      if (newScroll > maxScroll) {
        // Jump to beginning if we're at the end
        container.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        container.scrollTo({ left: newScroll, behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-800/50 to-slate-900"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-custom-gradient">Featured Projects</h2>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto bg-glass rounded-2xl p-6">
            A showcase of innovative solutions across civil engineering and software development
          </p> */}
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              id="projects-carousel"
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 py-2"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {projectsToDisplay.map((project, index) => (
                <div key={index} className="text-card-foreground flex flex-col gap-6 rounded-xl border pb-2 flex-shrink-0 w-96 bg-glass border-white/20 shadow-2xl">
                  {/* Project Images Carousel */}
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Carousel
                      showArrows={true}
                      showThumbs={false}
                      showStatus={false}
                      showIndicators={true}
                      infiniteLoop={true}
                      autoPlay={true}
                      interval={4000}
                      stopOnHover={true}
                      className="h-full"
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
                    
                    {/* Project Type Badge */}
                    <div hidden={!project.isWip} className="absolute top-4 left-4 bg-neon-blue rounded-full px-3 py-1 text-xs font-semibold text-white">
                      In Progress
                    </div>
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-custom-gradient line-clamp-2">{project.name}</h3>
                    <p className="text-gray-300 mb-6 line-clamp-4 leading-relaxed">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {['React', 'Next.js', 'Tailwind CSS', 'TypeScript'].map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-neon-cyan rounded-full text-xs font-medium text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto items-end">
                      {project.url && (
                        <Button
                          size="sm"
                          className="bg-neon-blue text-white hover:bg-blue-500/40 transition-all duration-300 flex-1 py-5"
                          onClick={() => window.open(project.url, '_blank')}
                        >
                          <Icon icon="tabler:external-link" className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                      )}

                      {project.github && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="bg-neon-purple text-white border-purple-400/50 hover:bg-purple-500/40 transition-all duration-300 flex-1"
                        >
                          <Icon icon="hugeicons:github" className="w-4 h-4 mr-2" />
                          Source Code
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="lg"
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-glass border-white/20 text-white hover:bg-gray-300 transition-all duration-300 w-12 h-12 rounded-full p-0"
            onClick={scrollLeft}
          >
            <Icon icon="lineicons:chevron-left" className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 translate-x-6 bg-glass border-white/20 text-white hover:bg-gray-300 transition-all duration-300 w-12 h-12 rounded-full p-0"
            onClick={scrollRight}
          >
           <Icon icon="lineicons:chevron-right" className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
