import aboutStyles from "./index.module.css"
import Stack from "@/components/_old/stack"

export default function About() {
  return (
    <div id="about" className={`page ${aboutStyles.aboutPage}`}>
      <h1 className="title">About</h1>
      <Stack />

      <div className={aboutStyles.paragraphCtn}>
        <p>...</p>
      </div>
    </div>
  )
}