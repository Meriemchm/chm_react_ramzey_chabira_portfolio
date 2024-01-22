import React from "react";
import NavBar from "../NavBar/NavBar";
import Presentation from "../Presentation/Presentation";
import About from "../About/About";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Presentation />
       <About />
     <Skills />
      {/* <Services />
      <Projects />
      <Contact /> */}
    </div>
  );
};

export default Home;