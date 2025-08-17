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
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-futuristic-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* Profile Picture with Futuristic Effects */}
        <div className="mb-12 animate-fade-in">
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-slate-900 p-1">
                {/* Inner Glow Ring */}
                <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/30 shadow-2xl">
                    <Image
                      src="/seun-ajayi-profile.png?height=192&width=192"
                      alt="Profile Picture"
                      width={192}
                      height={192}
                      className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-blue rounded-full flex items-center justify-center animate-float">
              <Icon icon="tabler:code" className="text-cyan-400 text-sm" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-neon-purple rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
              <Icon icon="tabler:building" className="text-purple-400 text-sm" />
            </div>
          </div>
        </div>

        {/* Name with Futuristic Typography */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
          Seun Ajayi
        </h1>

        {/* Name Pronunciation with Neon Effect */}
        <div className="flex items-center justify-center gap-3 mb-8 bg-glass rounded-full px-6 py-3 mx-auto w-fit">
          <span className="text-gray-300 text-lg">Pronunciation:</span>
          <span className="text-cyan-300 font-medium text-lg font-mono">/ˈʃeɪwuːn əˈʤɑːjiː/</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={playPronunciation}
            className="p-2 hover:bg-neon-cyan transition-all duration-300"
            title="Play pronunciation"
          >
            <Icon icon="tabler:volume" className="text-cyan-400" />
          </Button>
        </div>

        {/* Title with Gradient */}
        <p className="text-xl md:text-2xl mb-8 text-custom-gradient font-semibold animate-fade-in">
          Frontend Developer | Civil Engineer | Student Leader
        </p>

        {/* Description with Glass Effect */}
        <div className="bg-glass rounded-2xl p-6 mb-10 max-w-3xl mx-auto animate-fade-in">
          <p className="text-base md:text-lg leading-relaxed text-gray-200">
            I'm a penultimate-year Civil Engineering undergraduate passionate about structural engineering design. My interests include sustainability, building information modeling, seismic design, hydraulics, and climate and business consulting.
          </p>
        </div>

        {/* Buttons with Neon Effects */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-neon-blue text-white hover:bg-blue-500/40 transition-all duration-300 px-8 py-3 text-lg font-semibold"
            onClick={() => window.open('https://www.linkedin.com/in/seunajayi/', '_blank')}
          >
            <Icon icon="mdi:linkedin" className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-neon-purple text-white border-purple-400/50 hover:bg-purple-500/40 transition-all duration-300 px-8 py-3 text-lg font-semibold"
            onClick={() => window.open('https://calendly.com/seunaj/quick-chat-with-seun', '_blank')}
          >
            <Icon icon="simple-icons:calendly" className="mr-2" />
            Book A Call
          </Button>
        </div>
      </div>
    </section>
  )
}
