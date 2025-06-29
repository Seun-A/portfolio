"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
    period: "Sp 2024 - Oct 2024",
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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-custom-gradient mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional journey across engineering and technology leadership roles
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <Button
              variant={activeTab === "work" ? "default" : "ghost"}
              onClick={() => setActiveTab("work")}
              className="px-6 py-2"
            >
              Work Experience
            </Button>
            <Button
              variant={activeTab === "leadership" ? "default" : "ghost"}
              onClick={() => setActiveTab("leadership")}
              className="px-6 py-2"
            >
              Leadership Experience
            </Button>
          </div>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>
          
          {/* Scrollable Container */}
          <div className="overflow-x-auto pb-8">
            <div className="flex gap-8 min-w-max px-4">
              {currentExperience.map((exp, index) => (
                <div key={index} className="relative flex-shrink-0 w-80">
                  {/* Timeline Dot */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content Card */}
                  <div className="mt-12">
                    <Card className="hover:shadow-lg transition-shadow h-full">
                      <CardContent className="p-6">
                        <div className="flex flex-col mb-4">
                          <div className="text-center mb-3">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{exp.title}</h3>
                            <p className="text-blue-600 font-semibold text-sm">{exp.company}</p>
                            <span className="text-gray-500 font-medium text-xs">{exp.period}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {exp.description}
                          </p>
                        </div>

                        {exp.skills && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm">Skills:</h4>
                            <div className="flex flex-wrap gap-1">
                              {exp.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Achievements:</h4>
                          <ul className={`space-y-1 overflow-hidden text-gray-600 text-sm ${activeTab === "work" ? !expandedItems[index] ? 'h-16' : '' : !expandedItems[index + workExperience.length] ? 'h-16' : ''}`}>
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start">
                                <span className="text-blue-600 mr-2 text-xs mt-0.5">•</span>
                                <span className="leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => toggleExpanded(
                              activeTab === "work"
                                ? index
                                : index + workExperience.length
                            )}
                            className="text-blue-600 hover:text-blue-800 text-xs font-medium mt-2 cursor-pointer"
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
                      </CardContent>
                    </Card>
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
