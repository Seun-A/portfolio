
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";


export default function SidebarLink({ icon, name, path }) {
  const isActive = usePathname() === path

  return (
    <Link
      href={path}
      className={`sidebar-link flex items-center md:gap-x-5 ${isActive ? 'active': ''}`}
    >
      <Icon icon={icon} className="text-[2.5rem] md:text-[1.75rem] pb-3 md:pb-0" />
      <span className="hidden md:flex text-lg">{name}</span>
    </Link>
  )
}