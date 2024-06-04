import { LinkBtn } from './LinkBtn'
import './style/Intro.css'
import { buttons } from '../constants/buttons.jsx'

export function Intro() {
  return (
    <section className="introduction">
      <div className="introduction-info">
        <h1>Hola, Soy Óscar</h1>
        <p>
          <strong>Desarrollador Fronted.</strong> Recientemente graduado en
          Desarrollo de Aplicaciones Multiplataforma, estoy entusiasmado por
          unirme a un equipo de trabajo donde pueda aprender, crecer y seguir
          formándome como profesional.{' '}
        </p>
        <div className="btns">
          {buttons.map(({ text, url, shouldDownload, icon }, index) => (
            <LinkBtn
              key={index}
              text={text}
              url={url}
              shouldDownload={shouldDownload}
              icon={icon}
            />
          ))}
        </div>
      </div>
      <div className="profile-picture">
        <img src="src\assets\foto-perfil.jpeg" alt="profile-picture" />
      </div>
    </section>
  )
}
