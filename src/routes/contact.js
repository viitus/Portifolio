import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'

const contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="CONTATO." text="meus contaros"/>
      <Form />
      <Footer />
    </div>
  )
}

export default contact