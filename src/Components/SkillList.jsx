import React from "react";
import Skill from "./Skill";

let skill_set =[
  {
    skill:"Python",
    level:"advanced",
    color: "green"
  },
  {
    skill:"Git and Github",
    level:"advanced",
    color: "purple"
  },
  {
    skill:"React",
    level:"advanced",
    color: "#60DAFB"
  },
  {
    skill:"CI/CD Pipelines",
    level:"advanced",
    color: "#C3DCAF"
  },
  {
    skill:"Dart/Flutter",
    level:"beginner",
    color: "yellow"
  },
  {
    skill:"Systems architecture",
    level:"intermediate",
    color: "#E84F33"
  }
]

export default function SkillList() {
    return (
      <div className="skill-list">
        {skill_set.map((x)=> <Skill skill={x.skill} color={x.color} level={x.level} />)}
      </div>
    );
  }