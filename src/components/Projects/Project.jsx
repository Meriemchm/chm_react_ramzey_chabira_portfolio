import React, { useState } from "react";
import { projects } from "../Data/Data";
import { AiFillGithub } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

const Project = () => {

  return (
    <div className=" grid grid-cols-1 xl:grid-cols-1 gap-6 text-center py-8 px-0 justify-center items-center ">
      {projects.map(({ id, src, title, description, hdemo, hcode, pdf }) => {
        const [isTruncated, setIsTruncated] = useState(true);

        const toggleTruncate = () => {
          setIsTruncated(!isTruncated);
        };
        return (
          <div
            key={id}
            className="md:flex shadow-md  bg-white rounded-lg self-start"
          >
            <div className="relative group ">
              <img
                src={src}
                alt="project-name"
                className="rounded-lg h-60 w-full object-cover"
              />
            </div>

            <div className="mx-5 flex flex-col text-gray-800 my-4 justify-between">
              <h2 className="text-bold md:text-2xl capitalize mb-2 self-start">
                {title}
              </h2>

              <p className="text-start text-sm ">
                {isTruncated
                  ? description.slice(0, description.lastIndexOf(" ", 140))
                  : description}

                {description.length > 150 && (
                  <button
                    className="text-bold pl-1"
                    onClick={(e) => {
                      e.stopPropagation(); // Arrête la propagation de l'événement
                      toggleTruncate();
                    }}
                  >
                    {isTruncated ? "Voir plus" : "Voir moins"}
                  </button>
                )}
              </p>

              <div className="flex justify-end items-end gap-3 mt-4">
                <button className="flex  px-6 py-3 duration-200 border-[2px] border-transparent hover:scale-105">
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