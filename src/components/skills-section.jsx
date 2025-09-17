"use client"

import { Icon } from "@iconify/react";

const tech_skills = [
  { name: "JavaScript", icon: 'logos:javascript' },
  { name: "TypeScript", icon: 'devicon:typescript' },
  { name: "React", icon: 'logos:react' },
  { name: "Next.js", icon: 'devicon:nextjs' },
  { name: "Vue.js", icon: 'logos:vue' },
  { name: "Redux", icon: 'devicon:redux' },
  { name: "Firebase", icon: 'devicon:firebase' },
  { name: "Python", icon: 'material-icon-theme:python' }
]

const notech_skills = [
  { name: "AutoCAD", icon: 'skill-icons:autocad-light' },
  { name: "Revit", icon: 'simple-icons:autodeskrevit' },
  { name: "Civil 3D", icon: 'skill-icons:autocad-dark' },
  { name: "Git", icon: 'devicon:git' },
  { name: "Google Suite", icon: 'logos:google-360suite' },
  { name: "Microsoft Office Suite", icon: 'mdi:microsoft-office' }
]

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8 py-24 md:pt-32 lg:pt-40 bg-foreground relative overflow-hidden">
      {/* Floating header */}
      <div className="absolute -top-3 md:-top-4.5 -left-2 md:-left-3 text-5xl md:text-6xl font-bold text-white mb-6 whitespace-nowrap">
        skills . technologies . skills . technologies . skills . technologies . skills . technologies . skills . technologies . skills . technologies . skills . technologies . skills . technologies . skills . technologies . skills . technologies . skills . technologies . skills . technologies . 
      </div>

      <div className="flex max-md:flex-col gap-8 md:gap-12 relative">
        {/* Software Engineering */}
        <div className="flex-1 space-y-6 md:space-y-10">
          <h3 className="font-sans">
            <span className="block text-2xl md:text-4xl font-bold text-white">Software</span>
            <span className="block text-xl md:text-2xl font-medium text-accent">Engineering</span>
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 space-x-4 space-y-4 gap-2">
            {tech_skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="text-white font-light flex flex-col items-start gap-2"
                >
                  <Icon icon={skill.icon} className="w-6 md:w-8 h-6 md:h-8 text-white" />
                  <span className="text-xs md:text-sm overflow-hidden whitespace-nowrap text-ellipsis max-w-full">{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="max-md:h-px md:w-px bg-white" />

        {/* Civil Engineering */}
        <div className="flex-1 space-y-6 md:space-y-10">
          <h3 className="font-sans md:text-right">
            <span className="block text-2xl md:text-4xl font-bold text-white">Civil</span>
            <span className="block text-xl md:text-2xl font-medium text-accent">Engineering</span>
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 space-x-4 space-y-4 gap-2">
            {notech_skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="text-white font-light flex flex-col items-start md:items-end gap-2"
                >
                  <Icon icon={skill.icon} className="w-6 md:w-8 h-6 md:h-8 text-white" />
                  <span className="text-xs md:text-sm overflow-hidden whitespace-nowrap text-ellipsis max-w-full md:text-right">{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
