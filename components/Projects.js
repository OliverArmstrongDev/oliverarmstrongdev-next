import { ProjectCard } from "./ProjectCard"
import projectData from "../pages/data.json"


const Projects = () => {
    
  return (
    <div id="projects" className=" d-flex flex-column justify-content-start align-items-center my-5 pt-5">
         <p className="display-4 text-uppercase mb-1">Projects</p>
         {projectData ? projectData.projectData.map(project => (
             <ProjectCard key={project.id} project={project} showDetails={false}/>
         )) : <p className="h4">Yikes! no project data found...</p>
         }
    </div>
  )
}

export default Projects
