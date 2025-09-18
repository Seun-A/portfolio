"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import emailjs from 'emailjs-com'
import Alert from "@/components/alert"


export default function Footer() {
  const initialFormData = { name: '', email: '', message: '' }
  const [formData, setFormData] = useState(initialFormData)
  const { name, email, message } = formData

  const [isBtnDisabled, setBtnDisabled] = useState(false)
  const [isBtnLoading, setBtnLoading] = useState(false)

  const [isAlertVisible, setAlertVisible] = useState(false)
  const [isAlertError, setAlertError] = useState(false)

  useEffect(() => {
    setBtnDisabled(!( name && email && message ))
  }, [name, email, message])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setBtnDisabled(true)
    setBtnLoading(true)

    if (!isBtnDisabled) {
      setAlertVisible(false)
      emailjs.send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        formData,
        process.env.USER_ID,
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
      }).catch(error => {
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

  return (
    <footer id="contact" className="px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 lg:pt-40 bg-foreground relative overflow-hidden text-white">
      <Alert
        isVisible={isAlertVisible}
        isError={isAlertError}
      />

      {/* Floating header */}
      <div className="marquee-container absolute -top-3 md:-top-4.5 -left-2 md:-left-3 text-5xl md:text-6xl font-bold mb-6 whitespace-nowrap">
        <div className="marquee-content">
          contact me . contact me . contact me . contact me . contact me . contact me . contact me . contact me . contact me . contact me . contact me . contact me . contact me . contact me . contact me . contact me . 
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold">Seun Ajayi</h3>
            </div>
            <p className="mb-8 leading-relaxed text-xs md:text-sm text-light">
              A passionate professional bridging the worlds of civil engineering and software development. Committed to
              creating innovative solutions that make a positive impact on communities and technology.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link
                className="bg-[#24292E] border border-white/50 hover:brightness-110 hover:border-white transition-all duration-100 rounded-full w-10 md:w-14 h-10 md:h-14 flex items-center justify-center"
                href="https://github.com/Seun-A"
                target="_blank"
                title="GitHub"
              >
                <Icon icon="mdi:github" width={20} height={20} className="md:scale-150" />
              </Link>
              <Link
                className="bg-[#0073B1] border border-white/50 hover:brightness-110 hover:border-white transition-all duration-100 rounded-full w-10 md:w-14 h-10 md:h-14 flex items-center justify-center"
                href="https://www.linkedin.com/in/seunajayi/"
                target="_blank"
                title="LinkedIn"
              >
                <Icon icon="mdi:linkedin" width={20} height={20} className="md:scale-150" />
              </Link>
              <Link
                className="bg-[#006BFF] border border-white/50 hover:brightness-110 hover:border-white transition-all duration-100 rounded-full w-10 md:w-14 h-10 md:h-14 flex items-center justify-center"
                href="https://calendly.com/seunaj/quick-chat-with-seun/"
                target="_blank"
                title="Book a Calendly call"
              >
                <Icon icon="simple-icons:calendly" width={20} height={20} className="md:scale-150" />
              </Link>
              <Link
                className="bg-[#14171A] border border-white/50 hover:brightness-110 hover:border-white transition-all duration-100 rounded-full w-10 md:w-14 h-10 md:h-14 flex items-center justify-center"
                href="https://x.com/shun__aj"
                target="_blank"
                title="X Twitter"
              >
                <Icon icon="prime:twitter" width={20} height={20} className="md:scale-150" />
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-medium mb-6">
              Contact Info
            </h3>
            <div className="space-y-6 text-sm">
              <div className="flex items-center">
                <div className="mr-4">
                  <Icon icon="material-symbols:mail-outline" className="h-6 w-6 " />
                </div>
                <div>
                  <p className="text-white/50 text-xs">Email</p>
                  <span>seunfunmi.chisom@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-4">
                  <Icon icon="lucide:map-pin" className="h-6 w-6 " />
                </div>
                <div>
                  <p className="text-white/50 text-xs">Location</p>
                  <span>Lagos, NG</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-medium text-white mb-6">
              Get In Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-white/50 py-2 w-full outline-none text-white focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-white/50 py-2 w-full outline-none text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="bg-transparent border-b border-white/50 py-2 w-full outline-none text-white focus:outline-none h-[8lh] resize-none"
              />
              <button 
                disabled={isBtnDisabled} 
                type="submit" 
                className="w-full bg-white text-foreground flex items-center justify-center gap-2 hover:bg-accent hover:not(:disabled):brightness-150 transition-all duration-300 py-3 text-base font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
              >
                {isBtnLoading
                  ? <Icon icon="line-md:loading-loop" className="w-5 h-5 text-foreground" />
                  : (
                    <>
                      <Icon icon="icon-park-outline:send" className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )
                }
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <p className="mt-16 py-8 border-t border-white/50 text-center text-white/50 font-light">
          Built with ❤️ by Seun Ajayi | 2025
        </p>
      </div>
    </footer>
  )
}
