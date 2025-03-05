import React from "react"
import ProjectCard from "@/components/_old/project-card"
import Stack from "@/components/_old/stack"
import projectsDirectory from "@/data/projectsDirectory.json"
import projectsStyles from "./index.module.css"

export default function Projects() {
  return (
    <div id="projects" className={`page ${projectsStyles.projectsPage}`}>
      <h1 className="title">Projects</h1>

      <Stack />

      <div className={projectsStyles.projectsGrid}>
        {projectsDirectory.map(({ ...project }, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
            {index !== (projectsDirectory.length - 1) &&
              <div
                key={index + projectsDirectory.length}
                className={projectsStyles.divide}
              />
            }
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}