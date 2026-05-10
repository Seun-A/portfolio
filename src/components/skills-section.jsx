"use client"

import { Icon } from "@iconify/react"

function SkillsCategoryGrid({ title, skills }) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="font-sans text-lg font-semibold md:text-2xl">{title}</h4>
      <div className="flex flex-wrap w-full max-w-full gap-x-8 lg:gap-x-14 gap-y-6 lg:gap-y-8">
        {skills.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className="flex flex-col items-center gap-2 font-light ">
            <Icon
              icon={skill.icon}
              className={`size-6 md:size-8 ${skill.className ?? ''}`}
            />
            <span className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs md:text-sm">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}


const tech_skills = [
  { name: "Next", icon: "devicon:nextjs" },
  { name: "Vue", icon: "logos:vue" },
  { name: "React", icon: "logos:react" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "devicon:typescript" },
  { name: "Python", icon: "material-icon-theme:python" },
  { name: "Angular", icon: "material-icon-theme:angular" }
]

const notech_skills = [
  { name: "AutoCAD", icon: "skill-icons:autocad-light" },
  { name: "Revit", icon: "simple-icons:autodeskrevit", className:"text-[#176BFF]" },
  { name: "Civil 3D", icon: "skill-icons:autocad-dark" },
  { name: "COMSOL", icon: "simple-icons:comsol" },
  { name: "Tekla", icon: "simple-icons:trimble", className:"text-[#00437b] dark:text-white" },
]

const creative_skills = [
  { name: "Canva", icon: "devicon:canva" },
  { name: "Capcut", icon: "hugeicons:capcut" },
  { name: "Edits", icon: "arcticons:meta-edits", className:"bg-gradient-to-tr from-[#7638FA] via-[#FF0069] to-[#fcb045] text-white p-1 rounded-sm font-bold" },
  { name: "Spring", icon: "arcticons:spring", className:"bg-gradient-to-tr from-[#787ec5] to-[#9ad7fd] text-white p-1 rounded-sm" },
]

const writing_skills = [
  { name: "Substack", icon: "mingcute:substack-fill", className:"text-[#FF6719]" },
]


export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden bg-white px-4 py-8 lg:py-18 dark:bg-indigo sm:px-6 lg:px-32">
      <div className="relative z-10 mx-auto max-md:max-w-7xl">
        <header className="mb-10 md:mb-12">
          <div className="mb-6 text-center md:mb-12">
            <h2 className="font-sans text-3xl lg:text-5xl font-semibold md:text-4xl">
              I use a lot of
            </h2>
            <h3 className="mt-1 font-sans text-3xl lg:text-5xl font-bold md:text-6xl">
              <span className="text-powder">Tools</span>.
            </h3>
          </div>
        </header>

        <div className="flex flex-col gap-8">
          <SkillsCategoryGrid title="Software Engineering" skills={tech_skills} />
          <SkillsCategoryGrid title="Civil Engineering" skills={notech_skills} />
          <SkillsCategoryGrid title="Creative" skills={creative_skills} />
          <SkillsCategoryGrid title="Writing" skills={writing_skills} />
        </div>
      </div>
    </section>
  )
}
