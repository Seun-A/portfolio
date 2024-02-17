import './projects.style.scss'
import { Outlet } from 'react-router-dom'

import ProjectsNav from '../../old-components/projects-nav/projects-nav.component'
import TechDisplay from '../../old-components/tech-display/tech-display.component'


const ProjectsPage = () => (
  <div className='page projects-page text-center'>
    <TechDisplay />
    
    <ProjectsNav />
    <Outlet />
  </div>
)

export default ProjectsPage;
