/* eslint-disable react/prop-types */
export function ProjectCard({imgUrl, name, tecnologies, description, links}) {
    return(
        <div className="card-container">
            <img src={imgUrl} alt={`Imagen del proyecto ${name}`} className="project-img" />
            <div className="card-info">
                <h3>{name}</h3>
                <div className="tecnologies">
                    {
                        tecnologies.map((tecnology) => (
                            <>{tecnology}</>
                        ))
                    }
                </div>
                <div className="project-description">
                    <p>{description}</p>
                </div>
                <div className="project-links">
                    {
                        links.map(({url, text}) => (
                            <>{text}{url}</>
                        )) 
                    }
                </div>
            </div>
        </div>
    )
}