import React, { useEffect, useState } from 'react'
import skillsData from '../../../data/skills'
import useWindowSize from '../../../utils/use-window-resize'
import Button from '../Button'
import CardSkill from '../CardSkill'

function Skills({ ChangeScreen }) {
  const size = useWindowSize()
  const [skills, setSkills] = useState([])

  const handleSearch = (event) => {
    if (event.target.value) {
      setSkills(skillsData.filter(skill => (skill.title).toLowerCase().includes((event.target.value).toLowerCase())))
    } else {
      setSkills(skillsData)
    }
  }

  useEffect(() => {
    setSkills(skillsData)
  }, [skillsData])
  
  return (
    <div className="skills">
      { size.width <= 1200 && <div className="switch">
        <Button onClick={() => ChangeScreen('User')} >
          Perfil
          <img src={require('../../../assets/icons/arrow.svg')} alt="Seta" style={{ width: 12, marginLeft: 5 }} />
        </Button>
      </div> }
      <div className="title">
        <h1> Habilidades </h1>
        <div>
          <img src={require('../../../assets/icons/search.svg')} alt="Buscar" className="search" />
          <input type="search" placeholder="Digite o nome da habilidade" onChange={handleSearch} />
        </div>
      </div>
      <div className="cards">
        { skills.map(skill => <CardSkill key={Math.random()} { ...skill } />) }
        { skills.length <= 0 && <p> Não foi encontrado nenhuma habilidade com esta busca. </p> }
      </div>
    </div>
  )
}

export default Skills
