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
    <footer id="contact" className="bg-[#222221] text-white py-20">
      <Alert
        isVisible={isAlertVisible}
        isError={isAlertError}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Seun Ajayi</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A passionate professional bridging the worlds of civil engineering and software development. Committed to
              creating innovative solutions that make a positive impact on communities and technology.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="https://github.com/Seun-A" className="text-gray-400 hover:text-white transition-colors">
                <Icon icon="mdi:github" width={35} />
              </Link>
              <Link href="https://www.linkedin.com/in/seunajayi/" className="text-gray-400 hover:text-white transition-colors">
                <Icon icon="mdi:linkedin" width={35} />
              </Link>
              <Link href="https://calendly.com/seunaj/quick-chat-with-seun" className="text-gray-400 hover:text-white transition-colors">
                <Icon icon="simple-icons:calendly" width={30} />
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Icon icon="material-symbols:mail-outline" className="h-6 w-6 text-blue-400 mr-3" />
                <span className="text-gray-300">seunfunmi.chisom@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Icon icon="lucide:map-pin" className="h-6 w-6 text-blue-400 mr-3" />
                <span className="text-gray-300">Lagos, NG</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Button disabled={isBtnDisabled} type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    {isBtnLoading
                      ? <Icon icon="line-md:loading-loop" />
                      : (
                        <>
                          <Icon icon="icon-park-outline:send" className="h-4 w-4 text-white mr-2" />
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
      </div>
    </footer>
  )
}
