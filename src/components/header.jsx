"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef(null)

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ]

  // Close menu when clicking outside the header
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])


  return (
    <header ref={headerRef} className="sticky top-0 left-0 right-0 z-50">
      <div className={`relative px-4 sm:px-6 lg:px-8 bg-glass backdrop-blur-md border-b border-b-black/50 ${isMenuOpen && 'max-md:bg-white'}`}>
        <div className="flex justify-between items-center py-4">
          <Link 
            href="/"
            className="hover:scale-105 hover:text-accent transition-colors duration-300"
          >
            <Icon icon="material-symbols:home-rounded" width={24} height={24} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 text-base">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="font-light hover:text-accent transition-colors duration-300 px-4 py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              className="text-white bg-accent border border-white/50 hover:bg-accent-dark hover:border-white transition-colors duration-300 px-4 py-2 rounded-sm cursor-pointer flex items-center gap-2"
              onClick={() => window.open('https://calendly.com/seunaj/quick-chat-with-seun', '_blank')}
            >
              <Icon icon="simple-icons:calendly" width={20} height={20} className="mr-2" />
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="bg-transparent md:hidden hover:text-accent hover:bg-transparent transition-colors duration-300 rounded-sm cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <Icon icon="proicons:cancel" /> : <Icon icon="mingcute:menu-fill" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-white border-b border-b-black/50 w-full px-4 md:hidden py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-light hover:text-accent transition-colors duration-300 py-2 flex"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button 
              className="w-full text-white bg-accent hover:bg-accent-dark transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2 rounded-sm py-2"
              onClick={() => {
                window.open('https://calendly.com/seunaj/quick-chat-with-seun', '_blank')
                setIsMenuOpen(false)
              }}
            >
              <Icon icon="simple-icons:calendly" width={20} height={20} className="mr-2" />
              Let's Talk
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
