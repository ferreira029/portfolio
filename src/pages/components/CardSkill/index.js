import React from 'react'
import useWindowSize from '../../../utils/use-window-resize'
import ProgressBar from '../ProgressBar'

function CardSkill({ img, title, description, progress }) {
  const size = useWindowSize()
  return (
    <div className="card">
      <div className="d-flex">
        <img src={img} alt={title} style={{ marginRight: '15px' }} />
        <div className="card-info">
          <h2> { title } </h2>
          { size.width >= 480 && <p> { description } </p> }
          <ProgressBar percentage={progress} />
        </div>
      </div>
      <h2 className="percentage"> { progress }% </h2>
    </div>
  )
}

export default CardSkill
