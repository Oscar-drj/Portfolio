/* eslint-disable react/prop-types */
import { InfoBox } from './InfoBox'
import { LinkBtn } from './LinkBtn'
import './style/ProjectCard.css'

export function ProjectCard({ imgUrl, name, tecnologies, description, links }) {
  return (
    <div className="project-cards">
      <div className="card-container">
        <img
          src={imgUrl}
          alt={`Imagen del proyecto ${name}`}
          className="project-img"
        />
        <div className="card-info">
          <div className="card-info-container">
            <h3>{name}</h3>
            <div className="tecnologies">
              {tecnologies.map(({ name, icon }, index) => (
                <InfoBox key={index} name={name} icon={icon} />
              ))}
            </div>
            <div className="project-description">
              <p>{description}</p>
            </div>
            <div className="project-links">
              {links.map(({ name, url, icon }, index) => (
                <LinkBtn
                  key={index}
                  text={name}
                  url={url}
                  shouldDownload={false}
                  icon={icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
