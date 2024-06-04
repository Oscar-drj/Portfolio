import './App.css'
import { Intro } from './components/Intro'
import { Nav } from './components/Nav'

function App() {

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Intro />
      </main>
    </>
  )
}

export default App
