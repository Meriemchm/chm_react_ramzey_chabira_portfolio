import React from "react";
import { LiaCopyright } from "react-icons/lia";
import { copyrightlink } from "../Data/Data";

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

            {copyrightlink.map(({ id, mobile, href, download }) => {
                return (
          
                    <a
                    key={id}
                      href={href ? href : "/"}
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                      className="mr-5 hover:scale-105 duration-200"
                    >
                      {mobile}
                    </a>
              
                );
              })}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;