import Head from 'next/head'
import ReactParallaxTilt from 'react-parallax-tilt'

import Skills from './components/Skills'
import GlobalStyles from '../styles/globalStyles'
import User from './components/User'
import ProfileImg from '../assets/img/profile.png'
import useWindowSize from '../utils/use-window-resize'
import { useState } from 'react'

export default function Home() {
  const size = useWindowSize()
  const [screen, setScreen] = useState('User')
  
  return (
    <>
      <Head>
        <title>Marc Santos Ferreira</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet" />
        <link rel="icon" href={require('../assets/img/profile.png')} />
      </Head>
      <GlobalStyles />
      <main>
        <ReactParallaxTilt className="glass">
          { size.width <= 1200 ?
            screen === 'User' ?
            <User name="Marc" role="<Desenvolvedor FrontEnd />" img={ProfileImg} ChangeScreen={screen => setScreen(screen)} /> :
            <Skills ChangeScreen={screen => setScreen(screen)} /> :
            <>
              <User name="Marc" role="<Desenvolvedor FrontEnd />" img={ProfileImg} />
              <Skills />
            </>
          }
        </ReactParallaxTilt>
        <div className="triangle-top" />
        <div className="triangle-bottom" />
      </main>
    </>
  )
}
