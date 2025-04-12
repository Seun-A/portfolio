import "./index.css"
import { useState, useEffect } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Icon } from "@iconify/react"
import { useStore } from "@/store/context"
import { fetchImapactCollection } from "@/store/actions"

const Item = ({ level, content, itemsCount }) => {
  return (
    <div
      className={`impact__carousel-item level-${level}`}
      style={{
        // height: `${100 - (level*15)}%`,
        // width: `${100/(level + 1)}%`,
        // lineHeight: `85%`,
        // left: `50%`,
        // zIndex: 2,
        left: `50%`,
        right: `50%`,
        transform: `translate(-50%, -50%)`
      }}
    >
      This is an item {level}
    </div>
  )
}

const Carousel = ({ items, active }) => {
  const [currentIndex, setCurrentIndex] = useState(active)
  const [direction, setDirection] = useState("")

  const moveLeft = () => {
    setDirection("left")
    setCurrentIndex((prev) => (prev - 1 < 0 ? items.length - 1 : prev - 1))
  }

  const moveRight = () => {
    setDirection("right")
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }


  const carouselItems = items.map((_, index) => {
    return (
      <Item
        key={index}
        itemsCount={items?.length}
        level={index}
        content={index}
      />
    )
  })

  return (
    <div className="impact__carousel">
      <Icon
        icon="material-symbols:chevron-left-rounded"
        className="impact__arrow"
        onClick={moveLeft}
      />
      <Icon
        icon="material-symbols:chevron-right-rounded"
        className="impact__arrow"
        onClick={moveRight}
      />
      <TransitionGroup className={`impact__transition-group ${direction}`}>
        { carouselItems }
      </TransitionGroup>
    </div>
  )
}





export default function Impact() {
  const { state, dispatch } = useStore()
  const { impactCollection, isFetchingImpactCollection } = state

  useEffect(() => {
    // fetchImapactCollection(dispatch)
  }, [dispatch])

  // console.log(impactCollection)

  return (
    <section id="impact" className='section--impact'>
      <div className="impact__header">
        <div>
          <h2 className='impact__heading'>
            Volunteering & Impact
          </h2>
          <h2 className='impact__subheading'>
            Over the years, I have exercised community impact and leadership, which is evident through various leadership and volunteer positions in academia, engineering, and community impact.
          </h2>
        </div>
        <div className="impact__nav-btns-ctn">
          BTNS
        </div>
      </div>

      <div className="impact__carousel-ctn">
        <Carousel
          // items={isFetchingImpactCollection ? impactCollection : items}
          // items={[1, 2, 3, 4, 5]}
          items={[1]}
          active={0}
        />
      </div>
    </section>
  )
}
