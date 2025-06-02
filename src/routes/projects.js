import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'

const projects = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2  heading="Projetos" text="esses são alguns dos meus projetos mais recentes"/>
      <Footer />
    </div>
  )
}

export default projects