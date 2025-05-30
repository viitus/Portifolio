import "./NavBarStyles.css";
import { Link } from "react-router-dom";
import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className="header">
        <Link to="/">
            <h1>Portifólio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">Sobre</Link></li>
            <li><Link to="/Projects">Projetos</Link></li>
            <li><Link to="/Contact">Contato</Link></li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
                <FaTimes size={20} style={{color: "#fff"}} onClick={handleClick}/>
            ) : (
                <FaBars size={20} style={{color: "#fff"}} onClick={handleClick}/>
            )}
        </div>
    </div>
  )
}

export default NavBar