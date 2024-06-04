/* eslint-disable react/prop-types */
import './style/LinkBtn.css'

export function LinkBtn({ text, url, shouldDownload, icon }) {
  const linkProps = shouldDownload ? { href: "#", download: url} : { href: url}

  return (
    <div className="btn-container">
        {!shouldDownload ? icon : <></>}
      <a target="_blank" rel="noopener noreferrer" {...linkProps}>
        {text}
      </a>
      {shouldDownload ? icon : <></>}
    </div>
  )
}
