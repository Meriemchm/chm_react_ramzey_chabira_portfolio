import React from "react";
import { links } from "../Data/Data";
import { Link } from "react-scroll";
import profile from "../../assets/profile.jpg"
const About = () => {
  return (
    <div  name="about" className="flex md:h-screen w-full bg-second ">
      
      <div className="mx-auto flex flex-col-reverse justify-center items-center px-8 my-16 gap-8 xl:gap-0 xl:flex-row xl:my-0 xl:w-full ">

<div data-aos="fade-right">
       <img
            src={profile}
            alt="MyProfile"
            className="rounded-lg  md:w-[20rem] h-[20rem] w-[15rem] md:h-[23rem] object-cover "
          />
     
     </div>
     
        <div data-aos="fade-left" className="flex flex-col xl:justify-center md:px-8 xl:w-1/2">

          <h2 className="text-four text-2xl md:text-5xl font-bol">
          Hi, I am   <span className="text-four">Chabira Ramzey</span>{" "}
          </h2>

          <p className="text-primary">Data Scientist</p>

          <div className="flex my-3">
            <ul className="flex flex-row ">
              {links.map(({ id, mobile, href, download }) => {
                return (
                  <li key={id} className="mr-5 hover:scale-105 duration-200">
                    <a
                      href={href ? href : "/"}
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-between items-center w-full text-four "
                    >
                      {mobile}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="text-four py-8 lg:pr-10 md:w-full">
          Data Scientist with expertise in machine learning and deep learning. Holding a Bachelor's degree in Computer Science
          </p>

          <div className="flex gap-5">
            <button className="bg-primary  border-[1px] border-primary text-five px-5 py-2 rounded-md   text-bold duration-200 hover:scale-105  ">
              {" "}
              <Link to="contact" smooth={true} duration={500}>
                contact me
              </Link>
            </button>
            <button className="bg-tansparent  border-[1px] border-primary text-four px-5 py-2 rounded-md text-bold duration-200 hover:scale-105  ">
              {" "}
              <a href="/" target="_blank">
                my CV
              </a>
            </button>
          </div>

        </div>
 
      </div>
    </div>
  );
};

export default About;