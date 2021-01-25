import styled from 'styled-components'

const ProgressBar = styled.div`
  background: linear-gradient(to right top, #171738, #171738);
  min-width: 250px;
  width: 100%;
  height: 25%;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: rgb(236, 236, 236);
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    position: absolute;
    left: ${props => `${props.percentage}%`};
    z-index: 1;
  }

  @media(min-width: 1580px) {
    min-width: 400px;
  }

  @media(max-width: 1570px) {
    min-width: 310px;
  }

  @media(max-width: 1440px) {
    min-width: 270px;
  }

  @media(max-width: 1370px) {
    min-width: 230px;
  }

  @media(max-width: 1280px) {
    min-width: 180px;
  }

  @media(max-width: 680px) {
    min-width: 100px;
  }
  @media(max-width: 480px) {
    min-width: 90px;
  }
`

export default ProgressBar
