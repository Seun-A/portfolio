import projectsStyles from "../styles/projects.module.css"
import ProjectCard from "./ProjectCard"

import projectsDirectory from "../data/projectsDirectory.json"
import Stack from "./Stack"

export default function Projects() {
  return (
    <div id="projects" className={`page ${projectsStyles.projectsPage}`}>
      <h1 className="title">Projects</h1>

      <Stack />

      <div className={projectsStyles.projectsGrid}>
        {projectsDirectory.map(({ ...project }, index) => (
          <>
            <ProjectCard {...project} key={index} />
            {index !== (projectsDirectory.length - 1) &&
              <div
                key={index + projectsDirectory.length}
                className={projectsStyles.divide}
              />
            }
          </>
        ))}
      </div>
    </div>
  )
}