"use client"
import navbarStyles from "../styles/navbar.module.css"
import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
import { ThemeSwitcher } from "./ThemeSwitcher"

export function Navbar() {
  const navbar_links = [
    {
      title: "CV",
      icon: null,
      href: "https://docs.google.com/document/d/1-VQpR-YrWwwTrScbkoiofVFpnz01dc3v9Ozq7Kl9S7I/edit?sharingaction=ownershiptransfer",
      isCV: true
    },
    {
      title: "GitHub",
      icon: "mdi:github",
      href: "https://github.com/Seun-A",
      isCV: false
    },
    {
      title: "Twitter",
      icon: "mdi:twitter",
      href: "https://twitter.com/shun__aj",
      isCV: false
    },
    {
      title: "Instagram",
      icon: "mdi:instagram",
      href: "https://www.instagram.com/shunnnn.__/",
      isCV: false
    },
    {
      title: "Gmail",
      icon: "mdi:gmail",
      href: "mailto:seunfunmi.chisom@gmail.com",
      isCV: false
    },
    {
      title: "LinkedIn",
      icon: "mdi:linkedin",
      href: "https://www.linkedin.com/in/seunajayi/",
      isCV: false
    },
  ]
  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.colOne}>
        <div className={navbarStyles.avatarCtn}>
          <Image
            src={"/avatar.svg"}
            alt="avatar"
            fill
            priority
          />
        </div>

        <ThemeSwitcher />
      </div>

      <div className={navbarStyles.socialBtnsCtn}>
        {navbar_links.map(({title, icon, href, isCV}, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            className={isCV ? navbarStyles.cvBtn : navbarStyles.socialBtn}
          >
            {isCV ? title : <Icon icon={icon} />}
          </Link>
        ))}
      </div>

      <Link href="#home" className={navbarStyles.scrollToTopBtn}>
        <Icon icon="ion:chevron-up" />
      </Link>
    </nav>
  ) 
}

export default Navbar