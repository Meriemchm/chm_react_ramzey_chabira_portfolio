import React from "react";
import { techs } from "../Data/Data";
import Skill from "./Skill";

const Skills = () => {
  const pl = techs.filter((tech) => tech.type === "Programming languages");
  const ml = techs.filter((tech) => tech.type === "machine learning");
  const othersTechs = techs.filter((tech) => tech.type === "others");

  return (
    <div
      name="skills"
      className="bg-four w-full md:h-screen"
    >
      <div data-aos="fade-up" className="max-w-screen-lg mx-auto p-4 flex flex-col  w-full h-full text-white">
       
          <p className="text-6xl font-bold text-five text-center py-8 ">
            Skills
          </p>
    
        {/* Programming languages */}
       <Skill Title="Programming languages" data={pl}/>
        {/* machine learning */}
        <Skill Title="machine learning" data={ml}/>
        {/* others */}
        <Skill Title="Others" data={othersTechs}/>
      </div>
    </div>
  );
};

export default Skills;