/* eslint-disable react/prop-types */
import './style/InfoBox.css'

export function InfoBox({name, icon}) {
    const tecnology = name == 'React' ? 'react-bg' : name == 'html' ? 'html-bg' : name == 'css' ? 'css-bg' : '' 


  return (
    <div className={`container ${tecnology}`}>
      {icon}
      <span>{name}</span>
    </div>
  )
}
