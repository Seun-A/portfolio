"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import { useTheme } from "next-themes"
import { ThemeSwitcher } from "@/components/buttons/ThemeSwitcher"


export default function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleDropDown = () => {
    setDropdownVisible(!isDropdownVisible)
  }
  
  useEffect(() => {
    if (isDropdownVisible) {
      let offset = window.pageYOffset

      document.addEventListener("scroll", () => {
        if (window.pageYOffset > (offset + 40)) {
          handleDropDown()
        }
      })
    }
  })
  
  const pathname = usePathname()

  const [isHome, isProjects, isContacts] = [
    pathname === "/",
    pathname === "projects",
    pathname === "contact",
  ]

  const headerLinks = [
    {name: "Home", path: "/", active: isHome},
    {name: "Projects", path: "/projects", active: isProjects},
    {name: "Contact", path: "/contact", active: isContacts},
  ]

  return (
    <header className="w-full h-12 md:h-16 border-b-2 border-white/40 relative transition-all [&>*]:transition-all select-none">
      <div className="h-full px-4 md:px-12 bg-white/20 backdrop-filter backdrop-blur-lg flex items-center justify-between">
        <Link className="text-3xl md:text-4xl hover:opacity-60 transition-all" href="/">
          <Icon icon="solar:home-2-line-duotone" />
        </Link>

        <nav className="h-full gap-12 items-center text-white/70 hidden md:flex">
          {
            headerLinks.map(({name, path, active}, index) => (
              <Link
                key={index}
                href={path}
                className={`nav-link transition-all hover:text-white font-semibold ${ active ? "text-white" : null }`}
              >{name}</Link>
            ))
          }
        </nav>

        <ThemeSwitcher />

        {/* button */}
        <button className="flex items-center md:hidden hover:brightness-50 transition-all text-[1.75rem]">
          <Icon onClick={handleDropDown} icon={isDropdownVisible ? "gg:menu-right" : "gg:menu"} />
        </button>
      </div>

      {/* Dropdown */}
      <nav className={`
        absolute md:hidden origin-top transition-all duration-200 ease-linear text-sm border-b-2
        ${isDropdownVisible ? "opacity-100 pointer-events-auto scale-y-100" : "opacity-0 pointer-events-none scale-y-0"}
        top-full left-0 w-full flex flex-col divide-y [&>*]:py-3.5 [&>*]:px-4 text-white/70 bg-burnt/80 backdrop-filter backdrop-blur-sm
      `}>
        {
          headerLinks.map(({name, path, active}, index) => (
            <Link
              key={index}
              href={path}
              className={`nav-link transition-all hover:text-white font-semibold ${ active ? "text-white" : null }`}
              onClick={handleDropDown}
            >{name}</Link>
          ))
        }
      </nav>
    </header>
  )
}