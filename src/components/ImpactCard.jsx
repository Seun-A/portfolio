import Image from "next/image"
import Link from "next/link"
import cardStyles from "@/styles/impactCard.module.css"
import { Icon } from "@iconify/react"

export default function ImpactCard({ title, imageUrl, url }) {
  return (
    <Link href={url} target="_blank" className={cardStyles.card}>
      <div className={cardStyles.cardImgCtn}>
        <Image
          src={imageUrl}
          alt="image"
          fill
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