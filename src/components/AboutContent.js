import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Minha Jornada</h1>
            <p>Sou estudante de Engenharia de Computação, apaixonado por tecnologia, inovação e desenvolvimento de software. Já atuei como estagiário em Análise de Sistemas, onde pude aplicar meus conhecimentos em programação e análise de dados. Atualmente, estou envolvido em projetos acadêmicos relacionados a automação, qualidade de software e controle de estoque, sempre buscando aprimorar minhas habilidades e aprender novas tecnologias.</p>
            <Link to="/contact"><button className="btn">Contato</button></Link>
        </div>
        
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="True" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="True" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;