"use client"

import { useState } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Projects", href: "#projects", icon: "tabler:folder" },
    { name: "Skills", href: "#skills", icon: "tabler:code" },
    { name: "Experience", href: "#experience", icon: "tabler:briefcase" },
    { name: "Contact", href: "#contact", icon: "tabler:mail" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link 
            href="/"
            className="text-2xl font-bold hover:scale-105 transition-all duration-300 p-0 h-auto cursor-pointer text-custom-gradient flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/seun-ajayi-profile.png?height=192&width=192"
                alt="Profile Picture"
                width={192}
                height={192}
                className="object-cover w-full h-full scale-150 translate-y-1"
                priority
              />
            </div>
            Seun Ajayi
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-base">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 group"
              >
                <Icon icon={item.icon} className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-neon-blue text-white hover:bg-blue-500/40 transition-all duration-300 px-6 py-2"
              onClick={() => window.open('https://calendly.com/seunaj/quick-chat-with-seun', '_blank')}
            >
              <Icon icon="tabler:calendar" className="w-4 h-4 mr-2" />
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <Icon icon="proicons:cancel" /> : <Icon icon="mingcute:menu-fill" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20 bg-slate-800/50 backdrop-blur-md rounded-b-2xl">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon icon={item.icon} className="w-5 h-5" />
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button 
                  className="w-full bg-neon-blue text-white hover:bg-blue-500/40 transition-all duration-300"
                  onClick={() => {
                    window.open('https://calendly.com/seunaj/quick-chat-with-seun', '_blank')
                    setIsMenuOpen(false)
                  }}
                >
                  <Icon icon="tabler:calendar" className="w-4 h-4 mr-2" />
                  Let's Talk
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
