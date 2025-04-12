import "./index.css"
import { Icon } from "@iconify/react"

export default function Alert({ isVisible, isError }) {
  return (
    <div className={`alert ${isVisible && 'alert--alert-visible'} ${isError && 'alert--alert-error'}`}>
      <Icon
        className='alert__icon'
        icon={isError
          ? "material-symbols:error-outline-rounded"
          : "bi:check-circle-fill"
        }
      />
      <span className="alert__message">{
        isError
          ? "An error occurred - Please try again later"
          : "Your message has been sent!"
      }</span>
    </div>
  )
}