"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Project Manager, BuildRight Engineering",
    content:
      "Working with them on structural projects has been exceptional. Their attention to detail and innovative problem-solving approach consistently delivers outstanding results.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "CTO, TechCorp Solutions",
    content:
      "An incredible full-stack developer who brings both technical expertise and engineering discipline to every project. Their code quality and system architecture skills are top-notch.",
    rating: 5,
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Director, Engineers Without Borders",
    content:
      "Their leadership in our international projects has been transformative. They combine technical skills with genuine care for community impact.",
    rating: 5,
  },
  {
    name: "David Park",
    title: "Senior Developer, StartupXYZ",
    content:
      "A mentor and colleague who elevates everyone around them. Their ability to bridge engineering and software development is truly unique.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    title: "Infrastructure Plus, Senior Engineer",
    content:
      "Exceptional analytical skills and dedication to quality. Every project benefits from their thorough approach and innovative solutions.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonials from colleagues, clients, and collaborators
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6" />

                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>

                <div>
                  <p className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].title}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
