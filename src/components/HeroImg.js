import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg";
import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <h1>Víctor Dias Frota</h1>
            <p>Estudante de Engenharia de Computação e entusiasta em desenvolvimento de software.</p>
            
            <div>
              <Link to="/projects" className="btn">Projetos</Link>
              <Link to="/contact" className="btn btn-light">Contato</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg