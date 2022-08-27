import './projects-nav.style.scss'
import { Link } from 'react-router-dom'

const ProjectsNav = () => {
  const handleClick = event => {
    const currentNav = event.currentTarget

    // Nav Items
    const navigation = document.getElementById('projectsnav')
    navigation.childNodes.forEach(element => element.classList.remove('active'))

    currentNav.classList.add('active')
  }

  

  return (
    <nav 
      id='projectsnav' 
      className='d-flex justify-content-around align-items-center mx-auto my-3'
    >
      <Link className='active' onClick={handleClick} to='/projects/'>ALL</Link>
      <Link onClick={handleClick} to='/projects/html-css'>HTML/CSS</Link>
      <Link onClick={handleClick} to='/projects/js'>JAVASCRIPT</Link>
      <Link onClick={handleClick} to='/projects/react-js'>REACT-JS</Link>
      <div className='animation start-home'></div>
    </nav>
  )
}

export default ProjectsNav;
