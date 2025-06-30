'use client'
import { useEffect } from "react"
import { useStore } from "@/store/context"
import { fetchHeroImagesCollection } from "@/store/actions"
import Image from "next/image"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function Hero() {
  const { state, dispatch } = useStore()
  const { heroImages, isFetchingHeroImages } = state

  const heroImagesArr = !isFetchingHeroImages && heroImages.length
    ? heroImages
    : [{
      url: '/hero/hero-default.jpg',
      title: "default image"
    }]

  useEffect(() => {
    fetchHeroImagesCollection(dispatch)
  }, [dispatch])

  return (
    <section
      id="home"
      className='section--hero'
      style={{
        width: '100vw',
        aspectRatio: 9/5,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Carousel
        autoPlay={true}
        infiniteLoop
        interval={3000}
        labels={{
          leftArrow: 'previous slide / item',
          rightArrow: 'next slide / item',
          item: 'slide item'
        }}
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
        width='100vw'
      >
        {heroImagesArr.map(({ url, title }, index) => (
          <Image
            width={1440}
            height={800}
            key={index}
            src={url}
            alt={title}
            priority
          />
          )
        )}
      </Carousel>
    </section>
  )
}
