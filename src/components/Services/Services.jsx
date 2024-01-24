import React from "react";
import Service from "./Service";
import { services } from "../Data/Data";
const Services = () => {
  return (
    <div  name="services" className=" h-full w-full bg-second ">
      <div className="md:px-20 mx-auto p-4 flex flex-col  w-full h-full items-center justify-cente ">
        <div data-aos="fade-up" className="flex items-center justify-center">
        <p className="text-4xl md:text-6xl font-bold text-four text-center py-8 ">
            Services
          </p>
        </div>
        <div data-aos="fade-up" className="">
          <Service data={services} Title="" />
        </div>
      </div>
    </div>
  );
};

export default Services;