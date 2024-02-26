import { useEffect, useState } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import Alert from "./Alert";
import emailjs from 'emailjs-com';
import formConfig from '../data/contactFormConfig.json'
import contactStyles from "../styles/contact.module.css"

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const { name, email, subject, message } = formData

  const [isBtnDisabled, setBtnDisabled] = useState(true)

  const [isShowAlert, setShowAlert] = useState(false)

  useEffect(() => {
    setBtnDisabled(!(name&&email&&subject&&message))
  }, [name, email, subject, message])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!isBtnDisabled) {
      setShowAlert(!isShowAlert)
      emailjs.send(
        formConfig["SERVICE_ID"],
        formConfig["TEMPLATE_ID"],
        formData,
        formConfig["USER_ID"],
      )
      .then((res) => {
        if (res.status === 200) {
          setShowAlert(true)
        }

        setTimeout(() => {
          setShowAlert(false)
          setFormData({ name: '', email: '', subject: '', message: '' })
        }, 800);
      })
      .catch(error => console.log(error))
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData(prev => ({...prev, [name]: value}))
  }

  const social_links = [
    {
      icon: "mdi:instagram",
      href: "https://www.instagram.com/shunnnn.__/",
    },
    {
      icon: "mdi:github",
      href: "https://github.com/Seun-A",
    },
    {
      icon: "mdi:twitter",
      href: "https://twitter.com/shun__aj",
    },
    {
      icon: "mdi:gmail",
      href: "mailto:seunfunmi.chisom@gmail.com",
    },
    {
      icon: "mdi:linkedin",
      href: "https://www.linkedin.com/in/seunajayi/",
    },
  ]

  return (
    <div id="contact" className={`page ${contactStyles.aboutPage}`}>
      <h1 className="title">Contact</h1>
      
      <Alert isVisible={isShowAlert} />

      <form className={contactStyles.form}>
        <div className={`${contactStyles.inputCtn} ${contactStyles.nameCtn}`}>
          <label className={contactStyles.label}>Name:</label>
          <input
            className={contactStyles.input}
            required
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className={`${contactStyles.inputCtn} ${contactStyles.emailCtn}`}>
          <label className={contactStyles.label}>Email:</label>
          <input
            className={contactStyles.input}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className={`${contactStyles.inputCtn} ${contactStyles.subjectCtn}`}>
          <label className={contactStyles.label}>Subject:</label>
          <input
            className={contactStyles.input}
            required
            type="text"
            name="subject"
            value={subject}
            onChange={handleChange}
          />
        </div>

        <textarea
          className={`${contactStyles.inputCtn} ${contactStyles.message}`}
          required
          typeof="text"
          name="message"
          placeholder="Your Message..."
          value={message}
          onChange={handleChange}
        />

        <button
          className={`${contactStyles.submitBtn} ${isBtnDisabled && contactStyles.disabledBtn}`}
          onClick={handleSubmit}
        >
          Send Message
        </button>

        <div className={contactStyles.socialsCtn}>
          {social_links.map(({ icon, href }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              className={contactStyles.socialBtn}
            >
              <Icon icon={icon} />
            </Link>
          ))}
        </div>
      </form>
    </div>
  )
}