import React from "react";
import NavBar from "../NavBar/NavBar";
import Presentation from "../Presentation/Presentation";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Presentation />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact /> 
      <Footer /> 
    </div>
  );
};

export default Home;