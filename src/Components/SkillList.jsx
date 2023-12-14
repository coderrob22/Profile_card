import React from "react";
import Skill from "./Skill";

export default function SkillList() {
    return (
      <div className="skill-list">
        <Skill skill="React" emoji="💪" color='blue'/>
        <Skill skill="HTML+CSS" emoji="💪" color='red'/>
        <Skill skill="JavaScript" emoji="💪" color='yellow' />
        <Skill skill="Python" emoji="💪" color='green'/>
      </div>
    );
  }