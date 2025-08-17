"use client"

import { Icon } from "@iconify/react";

const tech_skills = [
  { name: "JavaScript", icon: 'logos:javascript', color: 'from-yellow-400 to-orange-500' },
  { name: "TypeScript", icon: 'devicon:typescript', color: 'from-blue-600 to-blue-700' },
  { name: "React", icon: 'logos:react', color: 'from-cyan-400 to-blue-500' },
  { name: "Next.js", icon: 'devicon:nextjs', color: 'from-gray-800 to-gray-900' },
  { name: "Vue.js", icon: 'logos:vue', color: 'from-green-400 to-green-500' },
  { name: "Redux", icon: 'devicon:redux', color: 'from-purple-500 to-purple-600' },
  { name: "Firebase", icon: 'devicon:firebase', color: 'from-orange-400 to-yellow-500' },
  { name: "Python", icon: 'material-icon-theme:python', color: 'from-blue-500 to-blue-600' }
]

const notech_skills = [
  { name: "AutoCAD", icon: 'skill-icons:autocad-light', color: 'from-red-500 to-red-600' },
  { name: "Revit", icon: 'simple-icons:autodeskrevit', color: 'from-blue-500 to-blue-600' },
  { name: "Civil 3D", icon: 'skill-icons:autocad-dark', color: 'from-green-500 to-green-600' },
  { name: "Git", icon: 'devicon:git', color: 'from-orange-500 to-red-500' },
  { name: "Google Suite", icon: 'logos:google-360suite', color: 'from-blue-500 to-green-500' },
  { name: "Microsoft Office Suite", icon: 'mdi:microsoft-office', color: 'from-blue-600 to-blue-700' }
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-700/30 to-slate-800"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-custom-gradient mb-6">Skills & Technologies</h2>
          <div className="bg-glass rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-xl text-gray-300">
              A comprehensive toolkit spanning both civil engineering and software development
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...tech_skills, ...tech_skills, ...tech_skills].map((skill, index) => {
              return (
                <div
                  key={index}
                  className="mx-4 px-6 py-4 bg-glass border border-white/20 rounded-2xl shadow-2xl text-white font-medium whitespace-nowrap flex items-center gap-3 hover:scale-110 transition-all duration-300 group"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skill.color} p-1.5 group-hover:animate-pulse`}>
                    <Icon icon={skill.icon} className="w-full h-full text-white" />
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors">{skill.name}</span>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Second row with non-tech skills animation */}
        <div className="relative overflow-hidden mt-6">
          <div className="flex animate-marquee-reverse whitespace-nowrap py-4">
            {[...notech_skills, ...notech_skills, ...notech_skills].map((skill, index) => {
              return (
                <div
                  key={index}
                  className="mx-4 px-6 py-4 bg-glass border border-white/20 rounded-2xl shadow-2xl text-white font-medium whitespace-nowrap flex items-center gap-3 hover:scale-110 transition-all duration-300 group"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skill.color} p-1.5 group-hover:animate-pulse`}>
                    <Icon icon={skill.icon} className="w-full h-full text-white" />
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors">{skill.name}</span>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
