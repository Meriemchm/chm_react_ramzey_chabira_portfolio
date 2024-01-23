import React from "react";
import { links } from "../Data/Data";


const Presentation = () => {
  return (
    <div data-aos="fade-up"  name="home" className="flex h-screen w-full  " >
      <div   className=" mx-auto justify-center items-center h-full px-5 md:px-0 md:my-0 xl:w-1/2">
        <div className="flex flex-col justify-center h-full gap-8  md:pt-0">
        <div className="flex flex-col justify-center  md:pt-0">
            <h2 className="text-3xl md:text-6xl font-bold py-5 ">
            Hey there, I am a 
            </h2>
            <p className="text-primary text-5xl md:text-8xl font-bold text-right">
            Data Scientist
            </p>
          </div>  
        <div className="flex  ">
            <ul className="flex flex-row ">
              {links.map(({ id, mobile, href, download }) => {
                return (
                  <li key={id} className="mr-5 hover:scale-105 duration-200">
                    <a
                      href={href ? href : "/"}
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-between items-center w-full text-five "
                    >
                      {mobile}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;