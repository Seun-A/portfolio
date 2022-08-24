import './header.style.scss'
import { Link } from 'react-router-dom';

const Header = ({ active }) => {
  const handleClick = event => {
    const currentNav = event.currentTarget

    // Nav Items
    const navigation = document.getElementById('nav')
    navigation.childNodes.forEach(element => element.classList.remove('active'))

    currentNav.classList.add('active')
  }
  
  return (
  <header className="header">
    <span className='logo'>&lt; S /&gt;</span>

    <nav className='nav' id='nav'>
      <Link onClick={handleClick} id='nav-home' className='nav-item active' to='/'>Home</Link> 
      <Link onClick={handleClick} id='nav-projects' className='nav-item' to='/projects'>Projects</Link>
      <Link onClick={handleClick} id='nav-contact' className='nav-item' to='/contact'>Contact</Link>
    </nav>
  </header>
)}


export default Header; 
