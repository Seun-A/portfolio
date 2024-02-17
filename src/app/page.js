'use client'

import Image from "next/image"
import { Icon } from "@iconify/react"
import avatar from "@/icons/avatar.svg"
import Link from "next/link"

export default function HomePage() {
  const icons = [
    {title: 'About', icon: 'iconamoon:profile-fill'},
    {title: 'CV', icon: 'line-md:download-loop'},
    {title: 'Projects', icon: 'heroicons-outline:code'},
    {title: 'Contact', icon: 'ion:mail-outline'},
  ]

  const stack = [
    {name: 'React', icon: 'simple-icons:react', position:"-top-[15%] lg:-top-1/4"},
    {name: 'JS', icon: 'simple-icons:javascript', position:"-bottom-[15%] lg:-bottom-1/4"},
    {name: 'Git', icon: 'simple-icons:git', position:"-left-[15%] lg:-left-1/4"},
    {name: 'NextJS', icon: 'file-icons:nextjs', position:"-right-[15%] lg:-right-1/4"},
    {name: 'HTML', icon: 'simple-icons:html5', position:"-top-[1%] -left-[1%] lg:-top-[7%] lg:-left-[7%]"},
    {name: 'CSS', icon: 'simple-icons:css3', position:"-top-[1%] -right-[1%] lg:-top-[7%] lg:-right-[7%]"},
    {name: 'Redux', icon: 'simple-icons:redux', position:"-bottom-[1%] -left-[1%] lg:-bottom-[7%] lg:-left-[7%]"},
    {name: 'Firebase', icon: 'simple-icons:firebase', position:"-bottom-[1%] -right-[1%] lg:-bottom-[7%] lg:-right-[7%]"},
  ]


  return (
    <div className="border text-white">
      hello
    </div>
    // <div className="page grid grid-cols-12 gap-y-10 md:gap-x-10">
    //   <div className="col-span-full lg:col-span-6 relative aspect-square w-64 m-10 lg:m-0 mx-auto flex-center-center ">
    //     <Image
    //       priority
    //       src={avatar}
    //       alt="avatar"
    //       className="col-span-12 lg:col-span-5 w-52 lg:w-72 aspect-square bg-white/30 dark:bg-peach/60 bg-blur rounded-full justify-self-center self-center select-none z-10e"
    //     />
    //     {
    //       stack.map(({icon, position}, index) => (
    //         <div key={index} className={`
    //           w-12 aspect-square bg-white/50 rounded-full absolute flex-center-center
    //           bg-blur
    //           ${position}
    //         `}>
    //           <Icon
    //             icon={icon}
    //             className="text-2xl"
    //           />
    //         </div>
    //         ))
    //     }
    //   </div>

    //   <div className="col-span-12 lg:col-span-6 grid grid-cols-4 gap-3">
    //     <div className="home-card home-card-lg col-span-4 lg:col-span-2 space-y-2">
    //       <h4 className="text-lg">Hi, I&apos;m</h4>
    //       <h1 className="text-3xl xl:text-4xl font-semibold">Seun Ajayi</h1>
    //       <h4 className="text-lg font-mono">&lt;FrontendDeveloper /&gt;</h4>
    //     </div>
    //     {
    //       icons.map(({title, icon}, index) => (
    //         <Link href='coming-soon' key={index} className="home-card col-span-1 aspect-square lg:aspect-auto bg-blur flex-col flex-center-center space-y-1">
    //           <Icon
    //             icon={icon}
    //             className="mx-auto text-[10vw] md:text-[8vw] lg:text-6xl"
    //           />
    //           <span className="text-[2.5vw] md:text-lg">{title}</span>
    //         </Link>
    //       ))
    //     }
    //   </div>
    // </div>
  )
}