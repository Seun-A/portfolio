"use client"

import Image from "next/image"
import { Icon } from "@iconify/react";
import Link from "next/link"

export default function HeroSection() {
  const playPronunciation = () => {
    // This would typically use the Web Speech API or an audio file
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance("Shay woon, ajar yee")
      utterance.rate = 0.8
      utterance.voice = speechSynthesis.getVoices()[37]
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <section id="home" className="px-4 sm:px-6 lg:px-8 py-10 md:pb-28 relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 max-h-[672px]">
        <div className="flex-1 space-y-5 flex flex-col justify-between order-2 md:order-1 max-md:max-w-lg md:min-w-[calc(50%-16px)] max-md:mx-auto max-md:text-center">
          {/* Name, Pronunciation, and Title */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-sans md:leading-28">
              <span className="text-accent">Seun</span> <br className="max-md:hidden" />
              <span className="md:tracking-[1.5px]">Ajayi</span>
            </h1>
            <div hidden className="flex items-center gap-3 max-md:justify-center">
              <span className="font-light text-lg font-mono">/ˈʃeɪwuːn əˈʤɑːjiː/</span>
              <button
                onClick={playPronunciation}
                className="p-2 border border-accent text-accent hover:text-white hover:bg-accent transition-colors duration-300 rounded-sm cursor-pointer"
                title="Play pronunciation"
              >
                <Icon icon="tabler:volume" />
              </button>
            </div>
            <div className="text-accent md:text-lg lg:text-xl mt-4 md:mt-8 animate-fade-in">
              <span className="whitespace-nowrap">Frontend Developer</span>
              <span> | </span>
              <span className="whitespace-nowrap">Civil Engineer</span>
              <span> | </span>
              <span className="whitespace-nowrap">Student Leader</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 w-full">
            <div className="flex-1 h-px bg-accent/20 me-px md:hidden" />
            <Link
              className="bg-[#24292E] text-white hover:brightness-110 transition-all duration-100 rounded-full w-10 md:w-14 h-10 md:h-14 flex items-center justify-center"
              href="https://github.com/Seun-A/"
              target="_blank"
              title="GitHub"
            >
              <Icon icon="mdi:github" width={20} height={20} className="md:scale-150" />
            </Link>
            <Link
              className="bg-[#0073B1] text-white hover:brightness-110 transition-all duration-100 rounded-full w-10 md:w-14 h-10 md:h-14 flex items-center justify-center"
              href="https://www.linkedin.com/in/seunajayi/"
              target="_blank"
              title="LinkedIn"
            >
              <Icon icon="mdi:linkedin" width={20} height={20} className="md:scale-150" />
            </Link>
            <Link
              className="bg-[#006BFF] text-white hover:brightness-110 transition-all duration-100 rounded-full w-10 md:w-14 h-10 md:h-14 flex items-center justify-center"
              href="https://calendly.com/seunaj/quick-chat-with-seun/"
              target="_blank"
              title="Book a Calendly call"
            >
              <Icon icon="simple-icons:calendly" width={20} height={20} className="md:scale-150" />
            </Link>
            <div className="flex-1 h-px bg-accent/20 ms-px" />
          </div>
          <p className="leading-relaxed font-light text-center md:text-left max-md:text-sm max-w-lg self-start">
            I am a Frontend Web Developer with 4+ years of experience. I specialise in using JavaScript/TypeScript and its frameworks (mainly React JS and Vue JS), and I have applied these in development for the education and property management sectors. I do this while undergoing my Civil Engineering BSc. in view.
          </p>
        </div>

        <div className="col-span-1 overflow-hidden rounded-tl-[64px] rounded-tr-[24px] rounded-bl-[24px] rounded-br-[64px] order-1 md:order-2 max-md:max-w-96 max-md:mx-auto aspect-square md:max-w-[672px]">
          <Image
            src="/seun-ajayi-profile.jpg?height=758&width=758"
            alt="Profile Picture"
            width={758}
            height={758}
            className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
            priority
          />
        </div>
      </div>
    </section>
  )
}
