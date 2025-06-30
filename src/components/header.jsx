"use client"

import { useState } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "Impact", href: "#impact" },
    { name: "Experience", href: "#experience" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#222221] backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link 
            href="/"
            className="text-2xl font-bold hover:text-gray-700 transition-colors p-0 h-auto cursor-pointer text-custom-gradient"
          >
            Seun Ajayi
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-base">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-300 hover:text-gray-900 transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <Icon icon="proicons:cancel" /> : <Icon icon="mingcute:menu-fill" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
