"use client"

import Image from "next/image"
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const playPronunciation = () => {
    // This would typically use the Web Speech API or an audio file
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance("Shay woon Ajayi")
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-custom-gradient">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* Profile Picture */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/seun_ajayi_profile.jpg?height=160&width=160"
              alt="Profile Picture"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Seun Ajayi</h1>

        {/* Name Pronunciation */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-gray-400 text-lg">Pronunciation:</span>
          <span className="text-gray-300 font-medium text-lg">/ˈʃeɪwuːn əˈʤɑːjiː/</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={playPronunciation}
            className="p-2 hover:bg-gray-100"
            title="Play pronunciation"
          >
            <Icon icon="tabler:volume" />
          </Button>
        </div>

        {/* Title */}
        <p className="text-lg md:text-xl mb-6 text-gray-400 animate-fade-in">
          Frontend Developer | Civil Engineer | Student Leader
        </p>

        {/* Description */}
        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto animate-fade-in leading-relaxed">
          I’m a penultimate-year Civil Engineering undergraduate passionate about structural engineering design. My interests include sustainability, building information modeling, seismic design, hydraulics, and climate and business consulting.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-white/80 text-gray-800 hover:bg-white"
            onClick={() => window.open('https://www.linkedin.com/in/seunajayi/', '_blank')}
            >
            <Icon icon="mdi:linkedin" className="w-5 h-5" />
            LinkedIn
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 text-white border-white hover:bg-white/30 hover:text-white"
            onClick={() => window.open('https://calendly.com/seunaj/quick-chat-with-seun', '_blank')}
          >
            <Icon icon="simple-icons:calendly" />
            Book A Call
          </Button>
        </div>
      </div>
    </section>
  )
}
