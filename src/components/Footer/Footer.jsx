import React from "react";
import { LiaCopyright } from "react-icons/lia";
import { TfiLinkedin } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-full bg-second p-4 text-white">
      <div className="">
        <div className="p-5 flex flex-row justify-between flex-wrap gap-5">
          <div className="flex">
            <p className="flex">
              {" "}
              <span>
                {" "}
                <LiaCopyright className="mr-2 mt-1" />{" "}
              </span>
              2024
            </p>
            <p className="ml-5">
              Made By{" "}
              <a
                href="https://twitter.com/CM_Dev_"
                target="_blank"
                className="text-bold hover:text-gray-500"
              >
                CHAMI Meriem
              </a>
            </p>
          </div>
          <div className="flex ">
            <a
              href="https://www.linkedin.com/in/meriem-chami-361213283/"
              target="_blank"
              className="text-bold hover:scale-105 "
            >
              <TfiLinkedin size={30} className="mr-5" />
            </a>
            <a
              href="https://github.com/Meriemchm"
              target="_blank"
              className="text-bold hover:scale-105"
            >
              <BsGithub size={30} />
            </a>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;