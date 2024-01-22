import React from "react";
import Project from "./Project";
const Projects = () => {
  return (
    <div data-aos="fade-up" name="projects" className="bg-four md:px-20 mx-auto p-4 flex flex-col  h-full w-full ">

          <p className="text-6xl font-bold text-five text-center py-8 ">
            Projects
          </p>
   
        <Project />
    </div>
  
  );
};

export default Projects;