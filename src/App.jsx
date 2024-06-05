import './App.css'
import { Intro } from './components/Intro'
import { Nav } from './components/Nav'
import { ProjectCard } from './components/ProjectCard'
import { WorkCard } from './components/WorkCard.jsx'
import { projects } from './constants/projects.jsx'
import { works } from './constants/works.js'

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Intro />
        <section className="projects">
          <h2>Proyectos</h2>
          <div className="projects-container">
            {projects.map(
              ({ imgUrl, name, tecnologies, description, links }, index) => (
                <ProjectCard
                  key={index}
                  imgUrl={imgUrl}
                  name={name}
                  tecnologies={tecnologies}
                  description={description}
                  links={links}
                />
              )
            )}
          </div>
        </section>
        <section className="work-experience">
          <h2>Experiencia laboral</h2>
          <div className="work-cards">
            {works.map(({ work, company, date, description }, index) => (
              <WorkCard
                key={index}
                work={work}
                company={company}
                date={date}
                description={description}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
