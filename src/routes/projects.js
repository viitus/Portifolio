import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Work from '../components/Work'

const Projects = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2  heading="Meus Projetos" text="Aqui estão alguns dos trabalhos e iniciativas que desenvolvi ao longo da minha trajetória."/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Projects