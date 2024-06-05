/* eslint-disable react/prop-types */
import './style/WorkCard.css'

export function WorkCard({work, company, date, description}) {
  return (
    <div className="work-card-container">
      <div className="data">
        <h3><strong>{work}</strong></h3>
        <h3>{company}</h3>
        <p>{date}</p>
      </div>
      <div className="description">
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}
