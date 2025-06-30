import "./index.css"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className="navbar__logo">
        Seun Ajayi
      </div>

      <ul className="navbar__nav-list">
        <li>
          <Link href='' className="navbar__nav-link">Home</Link>
        </li>
        <li>
          <Link href='' className="navbar__nav-link">About</Link>
        </li>
        <li>
          <Link href='' className="navbar__nav-link">Projects</Link>
        </li>
        <li>
          <Link href='' className="navbar__nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  ) 
}
