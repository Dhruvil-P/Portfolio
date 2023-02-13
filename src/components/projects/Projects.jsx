import projectsData from "../../data/projects";
import Project from "./Project";

export default function Projects() {
    return (
        <section className="projects box">
            <div className="workName">
                <div className="line"></div>
                <p>Projects</p>
            </div>
            <div className="workBar">
                <p>Have a look at my projects</p>
                <div className="workItems">
                    <p>UI/UX Design</p>
                    <p>Branding</p>
                    <p>3D Design</p>
                </div>
            </div>
            <div className="projectList">
                {projectsData.map(project => (
                    <Project 
                    key={project.id}
                    title={project.title}
                    services={project.services}
                    imgURL={project.imgURL}/>
                ))}
            </div>
        </section>
    )
}