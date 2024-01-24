import React from "react";
import { links } from "../Data/Data";

const Presentation = () => {
  return (
    <div data-aos="fade-up"  name="home" className="flex h-screen w-full relative  " >
       <video
        autoPlay
        loop
        muted
        className="absolute  w-full h-full object-cover"
      >
        <source src='portfolio_cr_video.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div   className="absolute inset-0  mx-auto justify-center items-center h-full px-5  sm:w-1/2">
        <div className="flex flex-col justify-center h-full gap-8  ">
        <div className="flex flex-col justify-center ">
            <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold py-5 ">
            Hey there, I am a 
            </h2>
            <p className="text-primary text-5xl md:text-6xl xl:text-8xl font-bold text-right">
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