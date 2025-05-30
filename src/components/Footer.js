import "./FooterStyles.css"
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaWhatsapp } from "react-icons/fa"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-left">
                <div className="location">
                    <h4><FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>Divinópolis, Minas Gerais</h4>
                </div>
                <div className="phone">
                    <h4><FaWhatsapp size={20} style={{color: "#fff", marginRight: "2rem"}}/>+55 37 99859-0989</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>victorfrota08@gmail.com</h4>
                </div>
            </div>

            <div className="footer-right">
                <h4>Sobre mim</h4>
                <p>Desenvolvedor apaixonado por tecnologia, sempre buscando aprender e criar soluções criativas. Este é meu espaço para compartilhar projetos e ideias.</p>
                <div className="social">
                    <FaGithub size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                    <FaInstagram size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer