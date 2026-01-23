import React from "react";
import Header from "../components/Header";
import Hero from "../pages/Hero";
import Skills from "../pages/Skills";
import Projects from "../pages/Project";
import Journey from "../pages/Journey";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

const Wrapper = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
};

export default Wrapper;
