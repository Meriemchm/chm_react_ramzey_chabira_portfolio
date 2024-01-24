import React, { useState } from "react";
import { projects } from "../Data/Data";
import { AiFillGithub } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

const Project = () => {

  return (
    <div className=" grid grid-cols-1 xl:grid-cols-1 gap-6 text-center py-8 px-0 justify-center items-center ">
      
      {projects.map(({ id, src, title, description, hdemo, hcode }) => {
 
        return (
          <div
            key={id}
            className="xl:flex  bg-white rounded-lg justify-between"
          >
            <div className=" " data-aos="fade-right">
              <img
                src={src}
                alt="project-name"
                className="rounded-lg md:h-64 xl:w-[30rem] h-60 w-full object-cover"
              />
            </div>

            <div data-aos="fade-left" className="mx-5 flex flex-col text-gray-800 my-4 xl:items-end xl:justify-center xl:w-1/2 ">
              
              <h2 className=" font-bold md:font-normal md:text-3xl capitalize mb-2 self-start xl:self-end">
                {title}
              </h2>

              <p className="text-start text-sm md:text-lg ">
                {description}
              </p>

              <div className="flex justify-end items-end gap-3 mt-4">
                <button className="flex py-3 duration-200 border-[2px] border-transparent hover:scale-105">
                  <a href={hcode} target="_blank" className="flex">
                    Code{" "}
                    <span>
                      <AiFillGithub size={25} className="ml-2" />
                    </span>
                  </a>
                </button>
                {hdemo !== "" && (
                  <button className="flex  px-6 py-3 rounded-lg border-[2px] border-gray-200  duration-200 hover:scale-105">
                    <a href={hdemo} target="_blank" className="flex">
                      Demo{" "}
                      <span>
                        <CiShare1 size={20} className="ml-2 mt-1" />
                      </span>{" "}
                    </a>
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;