import React from "react";

const Presentation = () => {
  return (
    <div data-aos="fade-up"  name="home" className="flex h-screen w-full  " >
      <div   className=" mx-auto justify-center items-center h-full px-5 md:px-0 md:my-0 xl:w-1/2">
        <div className="flex flex-col justify-center h-full  md:pt-0">

          <h2 className="text-3xl md:text-6xl font-bold py-5 ">
          Hey there, I am a 
          </h2>
          <p className="text-primary text-4xl md:text-8xl font-bold text-right">
          Data Scientist
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;