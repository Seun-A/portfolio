import Image from "next/image"
import Link from "next/link"
import cardStyles from "../styles/projectCard.module.css"
import { Icon } from "@iconify/react"

export default function ProjectCard({ title, imageUrl, url }) {
  return (
    <Link href={url} target="_blank" className={cardStyles.card}>
      <div className={cardStyles.cardImgCtn}>
        <Image
          src={imageUrl}
          alt="image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
        />
      </div>

      <div className={cardStyles.cardFooter}>
        <span>
          {title}
        </span>

        <Icon icon="majesticons:open" />
      </div>
    </Link>
  )
}