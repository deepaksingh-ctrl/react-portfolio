import React from "react";
import HeroSlider from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Services from "../Services/Service";
import ProjectCard from "../Projects/ProjectCard";
import Experience from "../Experience/Experience";

function Home(){
    return(
        <>
       <HeroSlider/>
       <About/>
       <Skills/>
       <Services/>
       <ProjectCard/>
       <Experience/>
        </>
    )
}
export default Home;