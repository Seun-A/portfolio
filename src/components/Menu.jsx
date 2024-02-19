"use client"
import menuStyles from "@/styles/menu.module.css"
import Link from "next/link"
import { useState } from "react"

export default function Menu() {
  const [activeLink, setActiveLink] = useState("Home")

  return (
    <div className={menuStyles.menu}>
      {["Home", "About", "Projects", "Impact", "Contact"].map((title, index) => (
        <Link
          key={index}
          href=""
          // href={`#${title.toLocaleLowerCase()}`}
          onClick={() => setActiveLink(title)}
          className={`${menuStyles.menuItem} ${activeLink === title && menuStyles.activeMenuItem}`}
        >
          {title}
        </Link>
      ))}
    </div>
  )
}