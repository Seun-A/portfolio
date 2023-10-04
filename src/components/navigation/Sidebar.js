"use client"
import './navigation.scss'
import Image from "next/image";
import avatar from "@/icons/avatar.svg"
import Link from "next/link"
import SidebarLink from './SidebarLink';
import { ThemeSwitcher } from '../buttons/ThemeSwitcher';

export default function Sidebar() {
  const li = [
    {name: 'Home', icon:'heroicons:home', path:'/'},
    {name: 'About', icon:'ph:info-light', path:'/about'},
    {name: 'Projects', icon:'heroicons:window', path:'/projects'},
    {name: 'Contact', icon:'fluent:call-28-regular', path:'/contact'},
    // {name: 'Components', icon:'ph:code-light', path:'/components'},
  ]
  return (
    <nav className="sidebar flex md:flex-col md:items-center px-4 pt-4 md:px-0 md:py-12 md:gap-y-10 justify-between md:justify-start">
      <div className="relative flex-center-center flex-col text-center pb-4 md:pb-3 md:px-4">
        <Image
          priority
          src={avatar}
          alt="avatar"
          className="w-12 md:w-28 aspect-square rounded-full select-none "
        />

        <h2 className="hidden md:block w-[8ch] md:w-fit text-xl mt-4 mb-1">Seun Ajayi</h2>

        <Link
          href="https://mail.google.com/mail/?view=cm&fs=1&to=seunfunmi.chisom@gmail.com"
          target="blank"
          className="text-sm email hidden md:block"
        >
          seunfunmi.chisom@gmail.com
        </Link>
      </div>

      <ul className="sidebar-ul">
        {
          li.map(({...props}, index) => (
            <SidebarLink key={index} {...props} />
          ))
        }
      </ul>

      <div className="pt-2 md:py-0 md:mt-auto">
        <ThemeSwitcher />
      </div>
    </nav>
  )
}