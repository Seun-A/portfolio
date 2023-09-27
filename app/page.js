'use client'

import Image from "next/image"
import { Icon } from "@iconify/react"
import avatar from "@assets/icons/avatar.svg"
import Link from "next/link"

export default function HomePage() {
  const icons = [
    {title: 'About', icon: 'iconamoon:profile-fill'},
    {title: 'CV', icon: 'line-md:download-loop'},
    {title: 'Projects', icon: 'heroicons-outline:code'},
    {title: 'Contact', icon: 'ion:mail-outlinegit '},
  ]

  const stack = [
    {name: 'React', icon: 'simple-icons:react'},
    {name: 'JS', icon: 'simple-icons:javascript'},
    {name: 'Git', icon: 'simple-icons:git'},
    {name: 'NextJS', icon: 'file-icons:nextjs'},
    {name: 'HTML', icon: 'simple-icons:html5'},
    {name: 'CSS', icon: 'simple-icons:css3'},
    {name: 'Redux', icon: 'simple-icons:redux'},
    {name: 'Firebase', icon: 'simple-icons:firebase'},
  ]


  return (
    <div className="page grid grid-cols-12 gap-y-10 md:gap-x-10">
      <Image
        priority
        src={avatar}
        alt="avatar"
        className="col-span-12 lg:col-span-5 w-64 lg:w-72 aspect-square bg-white/30 dark:bg-peach/60 bg-blur rounded-full justify-self-center self-center select-none"
      />

      <div className="col-span-12 lg:col-span-7 grid grid-cols-4 gap-3">
        <div className="home-card home-card-lg col-span-4 lg:col-span-2 space-y-2">
          <h1 className="text-3xl xl:text-4xl font-semibold">Seun Ajayi</h1>
          <h4 className="text-lg font-mono">&lt;FrontendDeveloper /&gt;</h4>
        </div>
        {
          icons.map(({title, icon}, index) => (
            <Link href='coming-soon' key={index} className="home-card col-span-1 aspect-square lg:aspect-auto bg-blur flex-col flex-center-center space-y-1">
              <Icon
                icon={icon}
                className="mx-auto text-[10vw] md:text-[8vw] lg:text-6xl"
              />
              <span className="text-[2.5vw] md:text-lg">{title}</span>
            </Link>
          ))
        }

        <div className="home-card home-card-lg col-span-4 lg:col-span-2 grid grid-cols-4 gap-3 text-sm">
          {
            stack.map(({icon}, index) => (
              <div key={index} className="col-span-1 flex-center-center flex-col py-3">
                <Icon icon={icon} className="mx-auto text-[8vw] md:text-[6vw] lg:text-[2.5rem]" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}