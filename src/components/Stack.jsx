import stackStyles from "../styles/stack.module.css"
import { Icon } from "@iconify/react"

export default function Stack() {
  const stack_links = [
    {
      name: "NextJS",
      icon: "akar-icons:nextjs-fill",
    },
    {
      name: "React",
      icon: "mdi:react",
    },
    {
      name: "JS",
      icon: "akar-icons:javascript-fill",
    },
    {
      name: "Tailwind",
      icon: "mdi:tailwind",
    },
    {
      name: "CSS3",
      icon: "flowbite:css-solid",
    },
    {
      name: "Redux",
      icon: "akar-icons:redux-fill",
    },
    {
      name: "Firebase",
      icon: "mdi:firebase",
    },
  ]
  
  return (
    <div className={stackStyles.stackRow}>
      {stack_links.map(({ icon, name }, index) => (
        <div key={index} className={stackStyles.stackCtn}>
          <div className={stackStyles.stackIcon}>
            <Icon icon={icon} />
          </div>
          <h6 className={stackStyles.stackName}>{name}</h6>
        </div>
      ))}
    </div>
  )
}