"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"
import emailjs from "emailjs-com"
import Alert from "@/components/alert"

/** Practical format check; keeps button disabled until the address looks valid. */
function isValidEmail(value) {
  const s = String(value).trim()
  if (!s || s.length > 254) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

export default function Footer() {
  const initialFormData = { name: "", email: "", message: "" }
  const [formData, setFormData] = useState(initialFormData)
  const { name, email, message } = formData

  const [isBtnDisabled, setBtnDisabled] = useState(false)
  const [isBtnLoading, setBtnLoading] = useState(false)

  const [isAlertVisible, setAlertVisible] = useState(false)
  const [isAlertError, setAlertError] = useState(false)

  useEffect(() => {
    setBtnDisabled(!(name?.trim() && isValidEmail(email) && message?.trim()))
  }, [name, email, message])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!name?.trim() || !isValidEmail(email) || !message?.trim()) {
      form.reportValidity()
      return
    }

    setBtnDisabled(true)
    setBtnLoading(true)

    if (!isBtnDisabled) {
      setAlertVisible(false)
      emailjs
        .send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, formData, process.env.USER_ID)
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
          console.log(error)
          setBtnLoading(false)
          setBtnDisabled(false)

          setTimeout(() => {
            setAlertVisible(false)
          }, 1500)
        })
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    {
      href: "https://github.com/Seun-A",
      title: "GitHub",
      icon: "mdi:github",
      className: "bg-[linear-gradient(180deg,#EBF5FF25_50%,#6E40C9_50%)]",
    },
    {
      href: "https://www.linkedin.com/in/seunajayi/",
      title: "LinkedIn",
      icon: "mdi:linkedin",
      className: "bg-[linear-gradient(180deg,#EBF5FF25_50%,#0A66C2_50%)]",
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
      href: "https://calendly.com/seunaj/quick-chat-with-seun/",
      title: "Book a Calendly call",
      icon: "material-symbols:call",
      className: "bg-[linear-gradient(180deg,#EBF5FF25_50%,#25D366_50%)]",
    },
  ]

  return (
    <footer
      id="contact"
      className="relative lg:min-h-[720px] overflow-hidden bg-radial from-powder-800 to-powder-900 text-white"
    >
      <Alert isVisible={isAlertVisible} isError={isAlertError} />

      <div className="absolute inset-x-0 h-full max-h-full bottom-0 left-0 z-0 flex items-center justify-center overflow-auto">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 left-[20%] opacity-30 lg:opacity-80 lg:left-[-20%] z-15 flex items-end justify-center h-[120%]">
          <Image
            src="/Seun-Ajayi-Footer.png"
            alt=""
            width={720}
            height={900}
            className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_20px_25px_rgba(38,41,65,0.35)]"
          />
        </div>
        <div
          className="absolute hidden lg:block inset-x-0 left-1/2 top-1/2 -translate-x-1/2 translate-y-[-80%] z-10 text-center w-fit"
          aria-hidden
        >
          <p className="font-sans text-[clamp(2.25rem,11vw,10rem)] font-bold leading-none text-white md:text-[clamp(3rem,18vw,20rem)]">
            together
          </p>
        </div>
        <div
          className="absolute hidden lg:block inset-x-0 left-1/2 top-1/2 -translate-x-1/2 translate-y-[-80%] z-30 text-center w-fit"
          aria-hidden
        >
          <p className="font-sans text-[clamp(2.25rem,11vw,10rem)] font-bold leading-none text-transparent [-webkit-text-stroke:2px_white] [text-stroke:2px_white] md:text-[clamp(3rem,18vw,20rem)]">
            together
          </p>
        </div>
      </div>

      <div className="relative z-40 flex flex-col justify-between h-full py-16 px-8">
        <p className="max-w-xl text-4xl font-sans font-semibold leading-12 tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
          Let&apos;s <br className="hidden lg:block" />make <br className="hidden lg:block" /> <span className="lg:text-powder">magic</span> <span className="text-powder lg:hidden">together</span>.
        </p>

        <div className="min-h-[50px] shrink-0 lg:min-h-[300px]" aria-hidden />

        <div className="mt-auto flex flex-col-reverse gap-12 pb-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5 text-sm">
              <div className="flex items-center gap-2">
                <span>
                  <Icon icon="famicons:mail" width={20} height={20} />
                </span>
                <span>seunfunmi.chisom@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <Icon icon="mdi:map-marker" width={20} height={20} />
                </span>
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              {socialLinks.map(({ href, title, icon, className }) => (
                <Link
                  key={href}
                  className={`flex size-11 items-center justify-center rounded-full transition-all duration-200 hover:border-white hover:brightness-110 md:size-14 bg-size-[100%_200%] hover:bg-position-[0_100%] ${className}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={title}
                >
                  <Icon icon={icon} width={22} height={22} className="md:scale-110" />
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full md:max-w-md md:shrink-0">
            <form onSubmit={handleSubmit} className="space-y-5 text-sm">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b border-white/50 bg-white/5 px-1 py-3 text-white outline-none backdrop-blur-md placeholder:text-white/50 focus:border-white focus:bg-white/30 transition-all duration-100"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                inputMode="email"
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                title="Enter a valid email address (e.g. name@example.com)"
                className="w-full border-b border-white/50 bg-white/5 px-1 py-3 text-white outline-none backdrop-blur-md placeholder:text-white/50 focus:border-white focus:bg-white/30 transition-all duration-100"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="h-[8lh] w-full resize-none border-b border-white/50 bg-white/5 px-1 py-3 text-white outline-none backdrop-blur-md placeholder:text-white/50 focus:border-white focus:bg-white/30 transition-all duration-100"
              />
              <button
                disabled={isBtnDisabled}
                type="submit"
                className="flex w-full rounded-full cursor-pointer items-center justify-center gap-2 bg-white py-3 text-base font-medium text-indigo transition-all duration-300 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isBtnLoading ? (
                  <Icon icon="line-md:loading-loop" className="size-5" />
                ) : (
                  <>
                    <Icon icon="tdesign:send-filled" className="size-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
