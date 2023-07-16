import './projects-nav.style.scss'
import { Link, useLocation } from 'react-router-dom'

const ProjectsNav = () => {
  const path = useLocation().pathname.split('/')[2]
  const [all, react, js, htmlCss] = [
    path === '' || path === undefined,
    path === 'react-js',
    path === 'js',
    path === 'html-css'
  ]  

  return (
    <nav 
      id='projectsnav' 
      className='d-flex justify-content-around align-items-center mx-auto my-3'
    >
      {
        [
          {name: 'ALL', to: '/projects/', active: all},
          {name: 'REACT-JS', to: '/projects/react-js', active: react}, 
          {name: 'JAVASCRIPT', to: '/projects/js', active: js},
          {name: 'HTML/CSS', to: '/projects/html-css', active: htmlCss},
        ].map((e, i) => (
          <Link
            key={i}
            to={e.to}
            className={`proj-nav-item ${e.active ? 'active' : null}`}
          >{e.name}</Link>
        ))
      }
      <div className='animation start-home'></div>
    </nav>
  )
}

export default ProjectsNav;
