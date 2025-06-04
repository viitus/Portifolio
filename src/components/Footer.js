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
                <h4>Obrigado pela visita!</h4>
                <p>Este site é um espaço onde compartilho um pouco sobre minha trajetória, projetos e interesses. Sinta-se à vontade para explorar e entrar em contato.</p>
                <div className="social">
                    <a href="https://github.com/viitus" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/victordiasfrota/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                    </a>
                    <a href="https://www.instagram.com/8_plagues/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer