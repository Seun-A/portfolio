"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const impactItems = [
  {
    title: "Community Bridge Project",
    image: "/placeholder.jpg?height=400&width=600",
    description:
      "Led the design and construction of a pedestrian bridge connecting underserved communities, improving access to education and healthcare facilities for over 5,000 residents.",
    impact: "5,000+ people served",
    year: "2023",
  },
  {
    title: "Code for Good Initiative",
    image: "/placeholder.jpg?height=400&width=600",
    description:
      "Developed a free web platform for local nonprofits to manage volunteers and donations, helping 15+ organizations increase their operational efficiency by 40%.",
    impact: "15+ nonprofits supported",
    year: "2022",
  },
  {
    title: "Disaster Relief Housing",
    image: "/placeholder.jpg?height=400&width=600",
    description:
      "Designed emergency housing solutions using sustainable materials for disaster-affected areas, providing temporary shelter for 200+ families.",
    impact: "200+ families housed",
    year: "2021",
  },
  {
    title: "STEM Education Outreach",
    image: "/placeholder.jpg?height=400&width=600",
    description:
      "Created interactive coding workshops for underrepresented youth, teaching programming fundamentals to 500+ students across 10 schools.",
    impact: "500+ students reached",
    year: "2020",
  },
]

export default function ImpactSection() {
  const [currentItem, setCurrentItem] = useState(0)

  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % impactItems.length)
  }

  const prevItem = () => {
    setCurrentItem((prev) => (prev - 1 + impactItems.length) % impactItems.length)
  }

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Initiatives and volunteer activities that make a difference in communities
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg bg-white">
            {impactItems.map((item, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentItem ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-96">
                    <Image src={item.image || "/placeholder.jpg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="text-sm text-blue-600 font-semibold mb-2">{item.year}</div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                    <div className="text-lg font-semibold text-blue-600">{item.impact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
            onClick={prevItem}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
            onClick={nextItem}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {impactItems.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-200 hover:scale-110 ${
                  index === currentItem ? "bg-blue-600 shadow-lg" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentItem(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
