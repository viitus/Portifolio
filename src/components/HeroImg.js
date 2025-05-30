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
            <p>Olá, sou um desenvolvedor jr</p>
            <h1>Esse é meu Portifólio</h1>
            <div>
                <Link to="/projects" className="btn">Projetos</Link>
                <Link to="/contact" className="btn btn-light">Contato</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg