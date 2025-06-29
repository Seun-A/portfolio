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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-custom-gradient mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning both civil engineering and software development
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-2">
            {[...tech_skills, ...tech_skills, ...tech_skills].map((skill, index) => {
              return (
                <div
                  key={index}
                  className="mx-4 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200 text-gray-800 font-medium whitespace-nowrap flex items-center gap-2 hover:shadow-lg transition-shadow"
                >
                  <Icon icon={skill.icon} className="text-blue-600" />
                  <span>{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Second row with non-tech skills animation */}
        <div className="relative overflow-hidden mt-2">
          <div className="flex animate-marquee-reverse whitespace-nowrap py-2">
            {[...notech_skills, ...notech_skills, ...notech_skills].map((skill, index) => {
              return (
                <div
                  key={index}
                  className="mx-4 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200 text-gray-800 font-medium whitespace-nowrap flex items-center gap-2 hover:shadow-lg transition-shadow"
                >
                  <Icon icon={skill.icon} className="text-blue-600" />
                  <span>{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
