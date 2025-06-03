import "./WorkCard.css";
//import React from 'react'
//import { NavLink } from "react-router-dom";
import WorkCardData from "./WorkCardData";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projetos</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard 
              key={ind}
              imgsrc={val.imgsrc} 
              title={val.title} 
              text={val.text} 
              view={val.view} 
            />
          )
        })}
      </div>
    </div>
  )
}

export default Work