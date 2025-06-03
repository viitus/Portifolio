import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Quem sou eu?</h1>
            <p>Eu sou um desenvolvedor web apaixonado por criar aplicações dinâmicas e responsivas. Minha jornada no desenvolvimento web é impulsionada pelo desejo de construir interfaces amigáveis e sistemas back-end eficientes.</p>
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