"use client"

import { useState } from "react"
import { Icon } from "@iconify/react"

const workExperience = [
  {
    title: "Civil Engineering Intern",
    company: "Arup",
    period: "Apr 2025 - Present",
    skills: ["AutoCAD", "Revit", "Tekla", "Microsoft Office"],
    description:
      "At Arup, a global engineering and consulting firm, I contribute to the design and development of infrastructure projects, ensuring compliance with building codes and safety standards.",
    achievements: [
      "Coordinated stakeholder meetings for the Fradro Gas Advisory Study using Microsoft Office tools for deliverable tracking and team coordination.",
      "Assisted with geotechnical investigations for foundation design of the proposed First Bank Headquarters, Eko Atlantic City, using field data logs and foundation assessment tools.",
      "Supported the structural engineering team, utilizing AutoCAD, Revit, and Tekla to design and detail structural components and schedules for the Transcorp Hilton Hotel in Lagos and Mirasol Residencies, Ikoyi.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Brooi",
    period: "Aug 2024 - Apr 2025",
    skills: ["VueJS", "Content Management Systems (CMS)"],
    description:
      "The development of a VueJS-based property management platform implementing solutions to meet project requirements",
    achievements: [
      "Contributed to the development of a VueJS-based property management platform implementing solutions to meet project requirements",
      "Designed and maintained the feature flagging and content management (CMS) infrastructure for the platform ",
      "Worked in an Agile, collaborative environment to receive development requirements, peer program, and integrate APIs to deliver seamless user experiences"
    ],
  },
  {
    title: "Structural Engineering Intern",
    company: "Beads Engineering Limited",
    period: "Sep 2024 - Oct 2024",
    skills: ["Project Management", "Site Supervision"],
    description:
      "Supervision of infrastructure projects, ensuring compliance with building codes and safety standards.",
    achievements: [
      "Contributed to site supervision to oversee the construction of Wesley Heritage Court, Jericho, Ibadan, an 8-block residential housing Estate with 4-bedroom and 3-bedroom semi-detached duplexes",
      "Joined site planning meetings and oversaw artisans to ensure construction requirements were met"
    ],
  },
  {
    title: "Virtual Assistant, Frontend Developer Intern",
    company: "Mofopefoluwa Ojosipe-Isaac",
    period: "Jul 2023 - Jan 2024",
    skills: ["VueJS", "NextJS", "API Integration", "Content Management Systems (CMS)"],
    description:
      "Assisted with the scheduling, managing, and executing daily personal, administrative, and frontend development tasks and projects",
    achievements: [
      "Designed and managed a structured daily schedule to optimize task completion and work-life balance ",
      "Assisted with the scheduling, managing, and executing daily personal, administrative, and frontend development tasks and projects ",
      "Gained proficiency in the NextJS framework, API integration, and content management systems (CMS) alongside other frontend development tools and techniques"
    ],
  },
  {
    title: "Web Development Intern",
    company: "Edves",
    period: "Oct 2022 - Jan 2021, Sep 2021 - Nov 2021",
    skills: ["HTML", "CSS", "JavaScript", "Git", "Jira", "Agile", "Scrum"],
    description:
      "Learned fundamentals of frontend development and web application development on the development of the Edves education technology platform",
    achievements: [
      "Built foundational skills in frontend development with HTML, CSS, JavaScript, and Git.",
      "Participated in Agile product and engineering planning meetings, improving understanding of team workflows and sprint planning by applying Scrum methodologies using Jira."
    ],
  },
]

const leadershipExperience = [
  {
    title: "Vice President",
    company: "The University of Lagos Engineering Society (ULES)",
    period: "Aug 2024 - Present",
    description:
      "Lead a team of 15+ volunteer developers contributing to open-source infrastructure projects used by thousands of developers worldwide.", 
    achievements: [
      "Oversaw academic welfare for 4,000+ students, redesigning the faculty freshmen tutorial system to align with new curriculum changes and improving academic support for 800+ incoming students.",
      "Spearheaded the faculty's first-ever Research Writing Bootcamp, bridging the academic writing gap for over 200 students using a custom-built research review platform.",
      "Collaborated with executive team members to raise funding and secure key partnerships  and expand academic and innovative support programs across 10 faculty departments."

    ],
  },
  {
    title: "Chairperson",
    company: "The ULES Academic and Research Board (ULES ARB)",
    period: "Aug 2023 - Aug 2024",
    description:
      "Supervised the academic welfare of 4,000+ students, ensuring academic excellence, support, and research opportunities.",
    achievements: [
      "Revamped the board's structure, organizing the first-ever inter-departmental quiz, research writing competition, and study materials donation, reaching 4,000+ students using Google Workspace for planning and documentation.",
      "Led the board's inaugural industrial visits to Nigerian Breweries Plc, Ardova Plc, and  CHI Limited, providing industry-academic exposure to 50+ students."
    ],
  },
  {
    title: "Lead, Protocol",
    company: "Professor Ayodele Awojobi Design Competition (PAADC)",
    period: "Apr 2024 - Jan 2025",
    description:
      "Oversaw the organization of external personnel for the competition",
    achievements: [
      "Led a team to secure judges, speakers, and guests for the entire competition timeline",
      "Organized keynote sessions, workshops, and panel discussions for the competition"
    ]
  },
  {
    title: "Deputy Lead, Programs Team",
    company: "Google Developer Student Clubs (GDSC) Unilag",
    period: "Dec 2023 - Sep 2024",
    description:
      "Organized events for the GDSC Unilag community",
    achievements: [
      "Coordinated the GDSC Unilag 20 Days Challenge",
      "Assisted in the coordination of the DevFest Students Edition, Lagos, and GDSC Unilag Career Week",
      "Coordinated and assisted university teams for the GDSC Solutions Challenge 2024"
    ]
  },
  {
    title: "Lead, Sponsorships and Partnerships",
    company: "TEDx Isador Model School",
    period: "Jun 2023 - Jul 2024",
    description:
      "Led the organization of sponsorships and partnerships.",
    achievements: [
      "Appointed and delegated tasks to team members, supervising the execution.",
      "Secured sponsorships and partnerships with Shuttlers and individual sponsors."
    ]
  },
]

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("work")

  const [expandedItems, setExpandedItems] = useState({})

  const toggleExpanded = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const currentExperience = activeTab === "work" ? workExperience : leadershipExperience

  return (
    <section id="experience" className="px-4 sm:px-6 lg:px-8 py-10 pb-24 md:pb-32 bg-accent/30 relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-accent-dark font-sans text-center mb-16">My Experience</h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="p-2 rounded-md bg-accent-dark grid grid-cols-2 gap-4">
            <button
              variant={activeTab === "work" ? "default" : "ghost"}
              onClick={() => setActiveTab("work")}
              className={`flex gap-1.5 items-center justify-center cursor-pointer border-0 px-2 py-3 rounded-sm transition-all duration-300 text-xs md:text-sm ${
                activeTab === "work" 
                  ? "bg-white text-accent-dark shadow-lg" 
                  : "text-white/50 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon icon="tabler:briefcase" className="w-4 md:w-4.5 h-4 md:h-4.5" />
              Work Experience
            </button>
            <button
              variant={activeTab === "leadership" ? "default" : "ghost"}
              onClick={() => setActiveTab("leadership")}
              className={`flex gap-1.5 items-center justify-center cursor-pointer border-0 px-2 py-3 rounded-sm transition-all duration-300 text-xs md:text-sm ${
                activeTab === "leadership" 
                  ? "bg-white text-accent-dark shadow-lg" 
                  : "text-white/50 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon icon="tabler:users" className="w-4 md:w-4.5 h-4 md:h-4.5" />
              Leadership Experience
            </button>
          </div>
        </div>

        <div className="relative">          
          {/* Scrollable Container */}
          <div className="overflow-x-auto pb-8">
            <div className="flex gap-8 min-w-max px-4">
              {currentExperience.map((exp, index) => (
                <div key={index} className="relative flex-shrink-0 w-80">
                  {/* Timeline Dot */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-accent-dark rounded-full"></div>
                  <div hidden={index === currentExperience.length - 1} className="absolute top-8 left-40 translate-x-4 translate-y-px h-1 bg-accent-dark z-0 rounded-full w-full"></div>
                  
                  {/* Content */}
                  <div className="mt-14">
                    <div className="h-full bg-white rounded-lg border border-accent-dark p-6">
                      <div className="flex flex-col mb-4 text-center">
                        <h3 className="text-lg font-medium mb-1 h-[2lh] line-clamp-2">{exp.title}</h3>
                        <p className="text-accent font-medium h-[1lh] line-clamp-1">{exp.company}</p>
                        <span className="text-foreground/50 font-semibold text-xs h-[1lh] line-clamp-1">{exp.period}</span>
                      </div>

                      <div className="mb-4">
                        <p className="font-light text-sm h-[4lh] line-clamp-4">
                          {exp.description}
                        </p>
                      </div>

                      {exp.skills && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-accent-dark mb-2 text-sm">Skills:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <span key={skillIndex} className="px-3 py-1 border border-accent-dark text-accent-dark text-xs rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold text-accent-dark mb-2 text-sm">Key Achievements:</h4>
                        <ul className={`space-y-1 overflow-hidden text-sm ${activeTab === "work" ? !expandedItems[index] ? 'h-16' : '' : !expandedItems[index + workExperience.length] ? 'h-16' : ''}`}>
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <span className="text-accent-dark mr-2 text-xs mt-0.5">•</span>
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => toggleExpanded(
                            activeTab === "work"
                              ? index
                              : index + workExperience.length
                          )}
                          className="text-accent hover:brightness-120 text-xs font-medium mt-2 cursor-pointer transition-all duration-300"
                        >
                          {
                          activeTab === "work"
                            ? expandedItems[index]
                              ? 'See Less'
                              : 'See More'
                            : expandedItems[index + workExperience.length]
                              ? 'See Less'
                              : 'See More'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
