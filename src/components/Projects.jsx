import projectsStyles from "@/styles/projects.module.css"
import ProjectCard from "./ProjectCard"

import projectsDirectory from "@/data/projectsDirectory.json"

export default function Projects() {
  return (
    <div id="#projects" className={`page ${projectsStyles.projectsPage}`}>
      <h1 className={projectsStyles.title}>Projects</h1>

      <p className={projectsStyles.paragraph}>
        Here are a couple projects I built myself or contributed to :)
      </p>

      <div className={projectsStyles.projectsGrid}>
        {projectsDirectory.map(({ ...project }, index) => (
          <>
            <ProjectCard {...project} key={index} />
            {index !== (projectsDirectory.length - 1) &&
              <div className={projectsStyles.divide} />
            }
          </>
        ))}
      </div>
    </div>
  )
}