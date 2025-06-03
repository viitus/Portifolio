import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

const about = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="Sobre." text="I am a passionate web developer" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default about