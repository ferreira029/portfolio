import React from 'react'

function SocialMedia({ img, title, url }) {
  return (
    <a href={url} className="link" target="_blank">
      <img src={img} alt={`${title} Marc Santos Ferreira`} />
      <h2> { title } </h2>
    </a>
  )
}

export default SocialMedia
