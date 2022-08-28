import './header.style.scss'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const pathname = useLocation().pathname.split('/')[1]
  const [isHome, isProjects, isContacts] = [
    pathname === '',
    pathname === 'projects',
    pathname === 'contact'
  ]

  return (
    <header className="header">
      <Link className='text-light' to='/'>
        <span className='logo d-flex align-items-center justify-content-center'>S</span>
      </Link>

      <nav className='nav'>
        {
          [
            {name: 'Home', to: '/', active: isHome}, {name: 'Projects', to: 'projects', active: isProjects}, {name: 'Contact', to: '/contact', active: isContacts}
          ].map((e, i) => (
            <Link
              key={i}
              to={e.to}
              className={`nav-item ${ e.active ? 'active' : null }`}
            >{e.name}</Link>
          ))
        }
      </nav>
    </header>
  )
}

export default Header; 
