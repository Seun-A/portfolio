import './index.css'
import HeroImg from '@/components/hero-img'
import Link from "next/link"
import { Icon } from "@iconify/react"

export default function Hero() {
  return (
    <section id="home" className='page hero'>
      <div className='hero-text-ctn'>
        <div className='hero-title-ctn'>
          <h1 className='hero-title'>
            Seun Ajayi
          </h1>
          <p className='hero-subtitle'>
            Frontend Web Devloper / Civil Engineering Student
          </p>
        </div>

        <div className='hero-bridge'>
          <div className='hero-bridge-divider divider-1' />
          <Link href='' className='hero-bridge-link'>
            Projects
          </Link>
          <Link href='' className='hero-bridge-link'>
            Resume
          </Link>
          <div className='hero-bridge-divider divider-2' />
        </div>

        <div className='hero-marquee-ctn'>
          <div className='hero-marquee-content'>
            <Icon icon="devicon:nextjs" height={50} />
            <Icon icon="logos:vue" height={50} />
            <Icon icon="logos:react" height={50} />
            <Icon icon="logos:javascript" height={50} />
            <Icon icon="devicon:tailwindcss" height={50} />
            <Icon icon="logos:css-3" height={50} />
            <Icon icon="devicon:redux" height={50} />
            <Icon icon="devicon:firebase" height={50} />
            <Icon icon="skill-icons:autocad-dark" height={50} />
          </div>
          <div className='hero-marquee-content'>
            <Icon icon="devicon:nextjs" height={50} />
            <Icon icon="logos:vue" height={50} />
            <Icon icon="logos:react" height={50} />
            <Icon icon="logos:javascript" height={50} />
            <Icon icon="devicon:tailwindcss" height={50} />
            <Icon icon="logos:css-3" height={50} />
            <Icon icon="devicon:redux" height={50} />
            <Icon icon="devicon:firebase" height={50} />
            <Icon icon="skill-icons:autocad-dark" height={50} />
          </div>
        </div>
      </div>
      <div className='hero-image-ctn'>
        <HeroImg />
      </div>
    </section>
  )
}