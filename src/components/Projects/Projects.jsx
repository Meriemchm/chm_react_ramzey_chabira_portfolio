import React from "react";
import Project from "./Project";
const Projects = () => {
  return (
    <div  name="projects" className="bg-four md:px-20 mx-auto p-4 flex flex-col  h-full ">

          <p data-aos="fade-up" className="text-4xl md:text-6xl font-bold text-five text-center py-8 ">
            Projects
          </p>
   
        <Project />
    </div>
  
  );
};

export default Projects;