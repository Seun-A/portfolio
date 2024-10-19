"use client"
import "./index.css"
import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
// import { ThemeSwitcher } from "@/components/theme-switcher"

export function Navbar() {
  const isBrowser = () => typeof window !== 'undefined'; 

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <nav className='navbar'>
      <div className="navbar-inner">
        <div className="avatar-ctn">
          <Image
            src={"/avatar.svg"}
            alt="avatar"
            fill
            priority
          />
        </div>

        <ul className="navbar-links-ctn">
          <li className="navbar-link">
            <Link href=''>
              Home
            </Link>
          </li>
          <li className="navbar-link">
            <Link href=''>
              About
            </Link>
          </li>
          <li className="navbar-link">
            <Link href=''>
              Projects
            </Link>
          </li>
          <li className="navbar-link">
            <Link href=''>
              Contact
            </Link>
          </li>
        </ul>

        <div onClick={scrollToTop} className='navbar-to-top-btn'>
          <Icon icon="ion:chevron-up" />
        </div>
      </div>
    </nav>
  ) 
}

export default Navbar