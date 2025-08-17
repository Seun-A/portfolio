"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import emailjs from 'emailjs-com'
import Alert from "@/components/alert"
import Image from "next/image"


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
    <footer id="contact" className="bg-slate-900 text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-800/50 to-slate-900"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <Alert
        isVisible={isAlertVisible}
        isError={isAlertError}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/seun-ajayi-profile.png?height=192&width=192"
                  alt="Profile Picture"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full scale-150 translate-y-1"
                  priority
                />
              </div>
              <h3 className="text-3xl font-bold text-custom-gradient">Seun Ajayi</h3>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              A passionate professional bridging the worlds of civil engineering and software development. Committed to
              creating innovative solutions that make a positive impact on communities and technology.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link 
                href="https://github.com/Seun-A" 
                className="w-12 h-12 bg-glass border border-white/20 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <Icon icon="mdi:github" width={24} className="group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/seunajayi/" 
                className="w-12 h-12 bg-glass border border-white/20 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <Icon icon="mdi:linkedin" width={24} className="group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link 
                href="https://calendly.com/seunaj/quick-chat-with-seun" 
                className="w-12 h-12 bg-glass border border-white/20 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <Icon icon="simple-icons:calendly" width={20} className="group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-cyan-400 flex items-center gap-3">
              <Icon icon="tabler:phone" className="w-6 h-6" />
              Contact Info
            </h3>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-glass rounded-xl border border-white/20">
                <div className="w-10 h-10 bg-neon-blue rounded-lg flex items-center justify-center mr-4">
                  <Icon icon="material-symbols:mail-outline" className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <span className="text-white">seunfunmi.chisom@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center p-4 bg-glass rounded-xl border border-white/20">
                <div className="w-10 h-10 bg-neon-purple rounded-lg flex items-center justify-center mr-4">
                  <Icon icon="lucide:map-pin" className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <span className="text-white">Lagos, NG</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-purple-400 flex items-center gap-3">
              <Icon icon="tabler:message-circle" className="w-6 h-6" />
              Get In Touch
            </h3>
            <Card className="bg-glass border-white/20 shadow-2xl">
              <CardContent className="px-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                  <Button 
                    disabled={isBtnDisabled} 
                    type="submit" 
                    className="w-full bg-neon-blue hover:bg-blue-500/40 transition-all duration-300 py-3 text-lg font-semibold"
                  >
                    {isBtnLoading
                      ? <Icon icon="line-md:loading-loop" className="w-5 h-5" />
                      : (
                        <>
                          <Icon icon="icon-park-outline:send" className="h-5 w-5 text-white mr-2" />
                          <span>Send Message</span>
                        </>
                      )
                    }
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-400">
            Built with ❤️ Seun Ajayi | 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
