import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'

const about = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="Sobre." text="I am a passionate web developer with a love for creating dynamic and responsive web applications. My journey in web development has been fueled by a desire to build user-friendly interfaces and efficient back-end systems." />
      <Footer />
    </div>
  )
}

export default about