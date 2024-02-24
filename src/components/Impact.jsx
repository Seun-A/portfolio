import impactStyles from "../styles/impact.module.css"
import ImpactCard from "./ImpactCard"

export default function Impact() {
  return (
    <div id="impact" className={`page ${impactStyles.projectsPage}`}>
      <h1 className="title">Impact</h1>

      <p className={impactStyles.paragraph}>
        Here are a couple projects I built myself or contributed to :)
      </p>

      <div className={impactStyles.projectsGrid}>
        hrllo
      </div>
    </div>
  )
}