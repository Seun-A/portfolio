import aboutStyles from "./index.module.css"
import lorem from "@/components/lorem"
import Stack from "@/components/stack"

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