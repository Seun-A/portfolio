import aboutStyles from "@/styles/about.module.css"

export default function About() {
  return (
    <div id="#about" className={`page ${aboutStyles.aboutPage}`}>
      <h1 className={aboutStyles.title}>About</h1>

      <div className={aboutStyles.paragraphCtn}>
        <p>
          I&apos;m a Civil Engineering student and Frontend Developer (React JS) with a great passion for structures and technology.
        </p>
      </div>
    </div>
  )
}