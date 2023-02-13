import projectsData from "../../data/projects";
import Project from "./Project";
import { useState } from "react";

export default function Projects() {
    const [selectedNav, setSelectedNav] = useState('ui/ux');

    const handleClick = (nav) => {
        setSelectedNav(nav);
    }

    return (
        <section className="projects box">
            <div className="workName">
                <div className="line"></div>
                <p>Projects</p>
            </div>
            <div className="workBar">
                <p>Have a look at my projects</p>
                <div className="workItems">
                    <p onClick={() => handleClick('ui/ux')} className={selectedNav === "ui/ux" ? 'active' : ''}>UI/UX Design</p>
                    <p onClick={() => handleClick('branding')} className={selectedNav === "branding" ? 'active' : ''}>Branding</p>
                    <p onClick={() => handleClick('3d')} className={selectedNav === "3d" ? 'active' : ''}>3D Design</p>
                </div>
            </div>
            <div className="projectList">
            { selectedNav === 'ui/ux' ?
                projectsData[0].projects.map(project => (
                    <Project key={project.title} title={project.title} services={project.services} imgURL={project.imgURL}/>
                ))
                :
                <div></div>
            }
            {
                selectedNav === '3d' ?
                projectsData[1].projects.map(project => (
                    <Project key={project.title} title={project.title} services={project.services} imgURL={project.imgURL}/>
                ))
                :
                <div></div>
            }
            {
                selectedNav === 'branding' ?
                projectsData[2].projects.map(project => (
                    <Project key={project.title} title={project.title} services={project.services} imgURL={project.imgURL}/>
                ))
                :
                <div></div>
            }
            </div>
        </section>
    )
}