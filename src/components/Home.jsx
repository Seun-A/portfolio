import homepageStyles from "@/styles/home.module.css"
import { Icon } from "@iconify/react"
import Link from "next/link"

export default function Home() {
  const stack = [
    {title: 'Frontend Developer', icon: 'akar-icons:nextjs-fill'},
    {title: 'Civil & Env. Engineering', icon: 'fa6-solid:helmet-safety'},
    {title: 'She / Her', icon: 'material-symbols:female'},
    {title: 'Virtual Assistant', icon: 'tabler:briefcase-filled'},
    {title: 'Volunteer / Impact', icon: 'typcn:star'},
    {title: 'Lagos, Nigeria', icon: 'mdi:location'},
  ]

  return (
    <div id="#home" className={`page ${homepageStyles.homePage}`}>
      <div className={homepageStyles.introCtn}>
        <h3>Seun Ajayi</h3>
        <h1>Frontend Developer</h1>
      </div>

      <div className={homepageStyles.stackGrid}>
        {stack.map(({ title, icon }, index) => (
          <Link key={index} href="" className={homepageStyles.stackCol}>
            <div className={homepageStyles.stackIconCtn}>
              <Icon icon={icon} className={homepageStyles.stackIcon} />
            </div>
            <span>{title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}