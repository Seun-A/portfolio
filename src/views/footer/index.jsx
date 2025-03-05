'use client'
import "./index.css"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import Image from 'next/image'
import Alert from "@/components/alert";
import emailjs from 'emailjs-com';
import { useStore } from "@/store/context"
import { fetchSocialsCollection } from "@/store/actions";


export default function Footer() {
  const { state, dispatch } = useStore()
  const { socialsCollection, isFetchingSocials } = state

  useEffect(() => {
    fetchSocialsCollection(dispatch)
  }, [dispatch])

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const { name, email, subject, message } = formData

  const [isBtnDisabled, setBtnDisabled] = useState(true)

  const [isShowAlert, setShowAlert] = useState(false)

  useEffect(() => {
    setBtnDisabled(!( name && email && subject && message ))
  }, [name, email, subject, message])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!isBtnDisabled) {
      setShowAlert(!isShowAlert)
      emailjs.send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        formData,
        process.env.USER_ID,
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


  return (
    <div id="contact" className='section--footer'>
      <Alert isVisible={isShowAlert} />

      <div className="footer__person-info-ctn">
        <h2 className="footer__title">Seun Ajayi</h2>
        <p className="footer__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula tortor ut mi pharetra, et porta turpis malesuada. Nulla sit amet lorem a nisi dictum tincidunt. Curabitur ut fermentum orci. Nullam dignissim diam sem, ac pretium nulla lobortis mollis. Maecenas nibh augue, auctor at nisi vitae, sodales semper ex.
        </p>
        <div className="footer__contact-ctn">
          <div className="footer__contact-row">
            <Icon
              icon="mdi:location"
              width={24}
              height={24}
            />
            <div className="footer__contact-text">
              Lagos, Nigeria
            </div>
          </div>
          <div className="footer__contact-row">
            <Icon
              icon="tabler:mail"
              width={24}
              height={24}
            />
            <div className="footer__contact-text">
              seunfunmi.chisom@gmail.com
            </div>
          </div>
        </div>
        <div className="footer__socials-heading" hidden={isFetchingSocials}>
          Socials
        </div>
        <div className="footer__socials-ctn" hidden={isFetchingSocials}>
          {socialsCollection?.map(({ name, url, icon }, index) => (
            <Link
              key={index}
              href={url}
              target="_blank"
              title={name}
              className='footer__social-btn'
            >
              <Image
                src={icon?.url}
                alt={name}
                width={24}
                height={24}
                className='footer__social-icon'
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="footer__form-ctn">
        <h2 className="footer__form-heading">Contact Me</h2>
        <form className='footer__form'>
          <div className='footer__form-top'>
            <input
              className='footer__form-input'
              required
              type="text"
              name="name"
              value={name}
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              className='footer__form-input'
              required
              type="email"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={handleChange}
            />
          </div>

          <input
            className='footer__form-input'
            required
            type="text"
            name="subject"
            value={subject}
            placeholder="Subject"
            onChange={handleChange}
          />

          <textarea
            className='footer__form-input-textarea'
            required
            typeof="text"
            name="message"
            value={message}
            placeholder="Your Message..."
            onChange={handleChange}
          />

          <button
            className={`footer__form-submit-btn ${isBtnDisabled && 'disabledBtn'}`}
            onClick={handleSubmit}
            disabled={isBtnDisabled}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}