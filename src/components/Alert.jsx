import { Icon } from "@iconify/react"
import alertStyles from "../styles/alert.module.css"

export default function Alert({isVisible}) {
  return (
    <div className={`${alertStyles.alert} ${isVisible&&alertStyles.alertVisible}`}>
      <Icon icon="bi:check-circle-fill" className={alertStyles.icon} />
      <span>Your message has been sent</span>
    </div>
  )
}