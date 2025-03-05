import './index.css'
import { useEffect } from "react"
import { useStore } from "@/store/context"
import Image from 'next/image'
import Marquee from "react-fast-marquee";
import { fetchSkillsCollection } from "@/store/actions"

export default function Skills() {
  const { state, dispatch } = useStore()
  const { skills, isFetchingSkills } = state

  useEffect(() => {
    fetchSkillsCollection(dispatch)
  }, [dispatch])

  if (isFetchingSkills) {
    return (
      <div>loading...</div>
    )
  }

  return (
    <section id="skills" className='section--skills'>
      <div className='skills__heading-ctn'>
        <h2 className='skills__heading'>
          Skills
        </h2>
        <h2 className='skills__subheading'>
          The skills, tools and technologies I am really good at:
        </h2>
      </div>

      <div className='skills__marquee-ctn'>
        <Marquee>
          {skills.map((skill, index) => {
            const { name, icon } = skill
            return (
              <div
                key={index}
                className='skills__skill-ctn'
              >
                <div className='skills__skill-icon-ctn'>
                  <Image
                    src={icon?.url}
                    alt={name}
                    width={64}
                    height={64}
                    className='skills__skill-icon'
                  />
                </div>
                <div className='skills__skill-name'>
                  { name }
                </div>
              </div>
            )
          })}
        </Marquee>
      </div>
    </section>
  )
}
