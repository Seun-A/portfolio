import homepageStyles from "./index.module.css"

import { Icon } from "@iconify/react"
import Link from "next/link"

export default function Home() {
  const home_grid = [
    {title: 'Frontend Developer', icon: 'akar-icons:nextjs-fill'},
    {title: 'Civil & Env. Engineering', icon: 'fa6-solid:helmet-safety'},
    {title: 'She / Her', icon: 'material-symbols:female'},
    {title: 'Virtual Assistant', icon: 'tabler:briefcase-filled'},
    {title: 'Volunteer / Impact', icon: 'typcn:star'},
    {title: 'Lagos, Nigeria', icon: 'mdi:location'},
  ]

  return (
    <div id="home" className={`page ${homepageStyles.homePage}`}>
      <div className={homepageStyles.introCtn}>
        <h3>Seun Ajayi</h3>
        <h1>Frontend Developer</h1>
      </div>

      <div className={homepageStyles.stackGrid}>
        {home_grid.map(({ title, icon }, index) => (
          <div key={index} className={homepageStyles.stackCol}>
            <div className={homepageStyles.stackIconCtn}>
              <Icon icon={icon} className={homepageStyles.stackIcon} />
            </div>
            <span className={homepageStyles.stackTitle}>{title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}