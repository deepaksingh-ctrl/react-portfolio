import Project from "./Projects";
import { useState } from "react";
import './Project.css';

function ProjectCard(){

    const [selectedProject, setSelectedProject] = useState(null);
    
return (
   
    <>
    <div className="project-sec">
    <div className="container">
    <h2 className="text-center">Our Projects</h2>
    <div className="row">

        {
        Project.map((item) => (

            <div className="col-lg-3" key={item.id}>
                <img onClick={()=>setSelectedProject(item)} src={item.projectBoxImage} alt=""/>
                <h3>{item.projectTitle}</h3>
                <p>{item.projectDescription}</p>
               

            </div>

        ))

    }

    {selectedProject && (
    <div className="lightbox">
            <div className="lightbox-content">
        <img src={selectedProject.projectBoxImage} alt="{selectedProject.projectTitle}" />

        <h2>{selectedProject.projectTitle}</h2>

        <p>{selectedProject.projectDescription}</p>

        <button className="closebtn" onClick={()=>setSelectedProject(null)}>x</button>

        </div>

    </div>
)}
        </div>
      </div>
       </div>
    </>
    
)
    

}

export default ProjectCard;