import React from 'react'
import SocialMedia from '../SocialMedia'
import socialMediaData from '../../../data/socialMedia'
import useWindowSize from '../../../utils/use-window-resize'
import Button from '../Button'

function User({ name, role, img, ChangeScreen }) {
  const size = useWindowSize()

  return (
    <div className="dashboard">
      { size.width <= 1200 && <div className="switch">
        <Button onClick={() => ChangeScreen('Skills')} >
          Habilidades
          <img src={require('../../../assets/icons/arrow.svg')} alt="Seta" style={{ width: 12, marginLeft: 5 }} />
        </Button>
      </div>
      }
      <div className="user">
        <img src={img} alt="Marc Santos Ferreira"/>
        <div>
          <h3> { name } </h3>
          <p className="line typing-animation"> { role } </p>
        </div>
      </div>
      <div className="links">
        { socialMediaData.map(media => <SocialMedia key={Math.random()} {...media} />) }
      </div>
    </div>
  )
}

export default User
