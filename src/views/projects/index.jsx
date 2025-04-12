import "./index.css"
import React from "react"
import { useEffect } from "react"
import { useStore } from "@/store/context"
import Image from 'next/image'
import Link from "next/link"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { fetchProjectsCollection } from "@/store/actions"


export default function Projects() {
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

  return (
    <section id="projects" className='section--projects'>
      <div className='projects__heading-ctn'>
        <h2 className='projects__heading'>
          Projects
        </h2>
        <h2 className='projects__subheading'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </h2>
      </div>

      <div className="projects__project-grid">
        {projects.map((project, index) => {
          const {
            name,
            description,
            url,
            isWip,
            isCollaboration,
            isLive,
            coverImage,
            imagesCollection
          } = project

          return (
            <div
              key={index}
              className="projects__project-grid-item"
            >
              <Link
                href={url}
                target="_blank"
                className="projects__project-link"
              >
                <Image
                  className="projects__project-cover-img"
                  src={coverImage?.url}
                  alt={name}
                  width={400}
                  height={400}
                />
              </Link>
              <div className="projects__project-title-ctn">
                <div className="projects__project-name">
                  { name ?? '' }
                </div>
                <div className="projects__project-description">
                  { description ?? '' }
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
