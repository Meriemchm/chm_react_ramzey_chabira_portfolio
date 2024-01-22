import React, { useState,useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Navlink } from "../Data/Data";


const Navbar = () => {
  const [show, setShow] = useState(false);
  const [bgColor, setBgColor] = useState('bg-transparent');
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100; // seuil de défilement à partir duquel la couleur de fond est modifiée

    if (scrollY > threshold) {
      setBgColor('bg-third ');

    } else {
      setBgColor('bg-transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div onScroll={handleScroll} className={`flex justify-between items-center w-full h-20 text-white px-4 lg:px-20 ${bgColor} fixed z-10`}    >
      <div>
        <h1 className=" font-extrabold text-4xl ml-2 md:text-5xl text-primary">
          CR
        </h1>
      </div>

      <ul className="hidden lg:flex ">
        {Navlink.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-8 cursor-pointer font-light text-lg text-five hover:scale-105 duration-200 capitalize"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setShow(!show)}
        className="cursor-pointer pr-4 z-10 text-gray-500 lg:hidden"
      >
        {show ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {show && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-third text-white/80">
          {Navlink.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 py-4 cursor-pointer text-4xl text-five hover:scale-105 duration-200 capitalize"
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setShow(!show)}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;