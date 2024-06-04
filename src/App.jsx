import './App.css'
import { Intro } from './components/Intro'
import { Nav } from './components/Nav'
import { ProjectCard } from './components/ProjectCard'
import { projects } from './constants/projects'

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Intro />
        <h2>Proyectos</h2>
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
      </main>
    </>
  )
}

export default App
