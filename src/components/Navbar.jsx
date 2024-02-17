"use client"
import navbarStyles from "@/styles/Navbar.module.css"
import { Icon } from "@iconify/react"
import Image from "next/image"

export function Navbar() {
  return (
    <div className={navbarStyles.navbar}>
      <div>
        <div className={navbarStyles.avatarCtn}>
          {/* <Image
            src={"../icons/avatar.svg"}
            alt="avatar"
            width={30}
            height={30}
          /> */}
        </div>

        <div className={navbarStyles.themeSwitcher}>
          <button>
            <Icon icon="solar:sun-bold" />
          </button>

          <button className={navbarStyles.activeThemeBtn}>
            <Icon icon="ion:moon-sharp" />
          </button>
        </div>
      </div>

      <div className="border">
        2
      </div>

      <button className="text-4xl">
        <Icon icon="line-md:arrow-up-circle-twotone" />
      </button>
    </div>
  ) 
}

export default Navbar