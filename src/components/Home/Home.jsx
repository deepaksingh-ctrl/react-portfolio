import React from "react";
import HeroSlider from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Services from "../Services/Service";
import ProjectCard from "../Projects/ProjectCard";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";

function Home() {
  return (
    <>
      <HeroSlider />
      <About />
      <Skills />
      <Services />
      <ProjectCard />
      <Experience />
      <Contact />
      <Products />
    </>
  );
}

export default Home;