"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import emailjs from "emailjs-com"
import Alert from "@/components/alert"
import { supabase } from "@/lib/supabase"
import HighlightedWord from "@/components/hero/highlighted-word"


const HERO_ASSET_ID = "footer-video"

/** Practical format check; keeps the button disabled until the address looks valid. */
function isValidEmail(value) {
  const s = String(value).trim()
  if (!s || s.length > 254) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

function FooterMedia() {
  const [heroVideo, setHeroVideo] = useState(null)
  const [mediaReady, setMediaReady] = useState(false)
  const frameRef = useRef(null)

  const markReady = useCallback((video) => {
    if (!video || video.readyState < 2) return
    setMediaReady(true)
    video.play().catch(() => {})
  }, [])

  useEffect(() => {
    let active = true

    supabase
      .from("assets")
      .select("title, public_url")
      .eq("id", HERO_ASSET_ID)
      .maybeSingle()
      .then(({ data, error }) => {
        if (!active || error || !data?.public_url) return
        setHeroVideo(data)
      })

    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    markReady(frameRef.current?.querySelector("video"))
  }, [heroVideo, markReady])

  return (
    <div ref={frameRef} className="relative aspect-4/5 w-full overflow-hidden rounded-3xl">
      {!mediaReady && <div className="absolute inset-0 animate-bg-pulse" aria-hidden />}
      {heroVideo && (
        <video
          src={heroVideo.public_url}
          aria-label={heroVideo.title || "Hero"}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${mediaReady ? "opacity-100" : "opacity-0"}`}
          onLoadedData={(event) => markReady(event.currentTarget)}
        />
      )}
    </div>
  )
}

const fieldClass = "mt-2 w-full bg-white px-3 py-3 text-black outline-none"

const socialLinks = [
  {
    href: "https://calendly.com/seunaj/quick-chat-with-seun/",
    title: "Book a Calendly call",
    icon: "material-symbols:call",
    className: "bg-[linear-gradient(180deg,#EBF5FF25_50%,#25D366_50%)]",
  },
  {
    href: "https://www.linkedin.com/in/seunajayi/",
    title: "LinkedIn",
    icon: "mdi:linkedin",
    className: "bg-[linear-gradient(180deg,#EBF5FF25_50%,#0A66C2_50%)]",
  },
  {
    href: "https://www.instagram.com/thisis.seun",
    title: "Instagram",
    icon: "mdi:instagram",
    className: "bg-[linear-gradient(180deg,#EBF5FF25_50%,#E1306C_50%)]",
  },
  {
    href: "https://x.com/shun__aj",
    title: "X",
    icon: "prime:twitter",
    className: "bg-[linear-gradient(180deg,#EBF5FF25_50%,#14171A_50%)]",
  },
  {
    href: "https://substack.com/@seunfunmichisom",
    title: "Substack",
    icon: "mingcute:substack-fill",
    className: "bg-[linear-gradient(180deg,#EBF5FF25_50%,#FF6719_50%)]",
  },
  {
    href: "https://github.com/Seun-A",
    title: "GitHub",
    icon: "mdi:github",
    className: "bg-[linear-gradient(180deg,#EBF5FF25_50%,#6E40C9_50%)]",
  },
]

export default function Footer() {
  const initialFormData = { firstName: "", email: "", message: "" }
  const [formData, setFormData] = useState(initialFormData)
  const { firstName, email, message } = formData

  const [isBtnDisabled, setBtnDisabled] = useState(true)
  const [isBtnLoading, setBtnLoading] = useState(false)

  const [isAlertVisible, setAlertVisible] = useState(false)
  const [isAlertError, setAlertError] = useState(false)

  useEffect(() => {
    setBtnDisabled(!(firstName?.trim() && isValidEmail(email) && message?.trim()))
  }, [firstName, email, message])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!firstName?.trim() || !isValidEmail(email) || !message?.trim()) {
      form.reportValidity()
      return
    }

    setBtnDisabled(true)
    setBtnLoading(true)
    setAlertVisible(false)
    setAlertError(false)

    emailjs
      .send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        {
          name: firstName.trim(),
          email: email.trim(),
          message: message.trim(),
        },
        process.env.USER_ID
      )
      .then((res) => {
        if (res.status === 200) {
          setAlertVisible(true)
          setBtnLoading(false)
          setBtnDisabled(false)
        }

        setTimeout(() => {
          setAlertVisible(false)
          setFormData(initialFormData)
        }, 1500)
      })
      .catch((error) => {
        setAlertError(true)
        setAlertVisible(true)
        console.log(error)
        setBtnLoading(false)
        setBtnDisabled(false)

        setTimeout(() => {
          setAlertVisible(false)
        }, 1500)
      })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <footer id="contact" className="scroll-mt-20 bg-deep-blue text-white lg:scroll-mt-28">
      <Alert isVisible={isAlertVisible} isError={isAlertError} />

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:gap-10 md:px-8 md:py-16 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-20">
        <FooterMedia />

        <div className="flex flex-col gap-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <h2 className="font-sans text-4xl leading-tight font-bold tracking-tight md:text-5xl">
            Let's work <HighlightedWord word="together" bg="bg-[#F03A47]" text="text-white" caret="bg-white" step={1} />!
          </h2>

          <div>
            <div className="mt-3 grid grid-cols-2 gap-4">
              <label className="block">
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                  required
                  autoComplete="given-name"
                  placeholder="Your Name"
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  inputMode="email"
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                  title="Enter a valid email address (e.g. name@example.com)"
                  placeholder="Your Email"
                  className={fieldClass}
                />
              </label>
            </div>
          </div>

          <label className="block">
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              required
              rows={3}
              className={`${fieldClass} resize-y`}
              placeholder="Your Message"
            />
          </label>

          <button
            disabled={isBtnDisabled || isBtnLoading}
            type="submit"
            className="inline-flex w-fit cursor-pointer items-center gap-2 bg-white px-5 py-3 text-sm font-semibold tracking-[0.14em] text-black uppercase disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isBtnLoading && <Icon icon="line-md:loading-loop" className="size-4" />}
            Send me
          </button>
        </form>

        <nav aria-label="Social links" className="flex flex-wrap items-center gap-3 md:gap-4">
          {socialLinks.map(({ href, title, icon, className }) => (
            <Link
              key={href}
              className={`flex size-11 items-center justify-center rounded-full bg-size-[100%_200%] transition-all duration-200 hover:bg-position-[0_100%] hover:brightness-110 md:size-14 ${className}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
            >
              <Icon icon={icon} width={22} height={22} className="md:scale-110" />
            </Link>
          ))}
        </nav>
        </div>
      </div>
    </footer>
  )
}
