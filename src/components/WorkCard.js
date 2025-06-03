import "./WorkCard.css";
//import React from 'react';
import { NavLink } from "react-router-dom";
//import WorkCardData from "./WorkCardData";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="Projeto 1" />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <NavLink to={props.view} className="btn">Ver Projeto</NavLink>
    </div>
  )
}

export default WorkCard