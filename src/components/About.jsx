import aboutStyles from "../styles/about.module.css"
import lorem from "./lorem"
import Stack from "./Stack"

export default function About() {
  return (
    <div id="about" className={`page ${aboutStyles.aboutPage}`}>
      <h1 className="title">About</h1>
      <Stack />

      <div className={aboutStyles.paragraphCtn}>
        <p>{lorem}</p>
      </div>
    </div>
  )
}