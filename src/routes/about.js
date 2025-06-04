import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

const about = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="Sobre Mim" text="Conheça um pouco da minha trajetória e interesses." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default about