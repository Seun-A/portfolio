import './index.css'
import Image from "next/image"
import { Icon } from "@iconify/react"
import Link from "next/link"

export default function HeroImg() {
  return (
    <section className='hero-ctn'>
      <div className='hero-img-ctn'>
        <Image
          src={"/my-photos/portrait.png"}
          alt="image"
          fill
          sizes="(max-width: 768px) 250px, (max-width: 1200px) 300px"
        />
      </div>
      <div className='hero-links-ctn hero-links-ctn-top'>
        <Link href='mailto:seunfunmi.chisom@gmail.com' className='hero-link' title='Email'>
          <Icon icon='logos:google-gmail' width={20} />
        </Link>
      </div>
      <div className='hero-links-ctn hero-links-ctn-bottom'>
        <Link
          target='_blank'
          href='https://github.com/Seun-A'
          className='hero-link'
          title='GitHub'
        >
          <Icon icon='line-md:github' width={22} />
        </Link>
        <Link
          target='_blank'
          href='https://twitter.com/shun__aj'
          className='hero-link'
          title='X (Twitter)'
        >
          <Icon icon='ri:twitter-x-fill' width={22} />
        </Link>
        <Link
          target='_blank'
          href='https://www.instagram.com/shunnnn.__'
          className='hero-link'
          title='Instagram'
        >
          <Icon icon='mdi:instagram' width={24} />
        </Link>
        <Link
          target='_blank'
          href='https://www.linkedin.com/in/seunajayi'
          className='hero-link'
          title='LinkedIn'
        >
          <Icon icon='ri:linkedin-fill' width={22} />
        </Link>
        <Link
          target='_blank'
          href='https://docs.google.com/document/d/1-VQpR-YrWwwTrScbkoiofVFpnz01dc3v9Ozq7Kl9S7I/edit?usp=sharing'
          className='hero-link'
          title='LinkTree'
        >
          <Icon icon='iconamoon:arrow-top-right-1' width={24} />
        </Link>
      </div>
    </section>
  )
}