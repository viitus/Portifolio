import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Work from '../components/Work'

const Projects = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2  heading="Projetos" text="esses são alguns dos meus projetos mais recentes"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Projects