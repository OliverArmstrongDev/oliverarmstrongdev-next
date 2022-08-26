import { ProjectCard } from "../../components/ProjectCard";
import projectData from "../data.json";


export const getStaticProps = async ({params}) => {
const currentProject = Object.assign({}, ...projectData.projectData.filter(proj => proj.id.toString() === params.id));
    return {
     props: { currentProject },
     revalidate: 3,
    }
    
 }

export const getStaticPaths = async () => {

    const paths = projectData.projectData.map(proj => {
        return {
            params: {id: proj.id.toString()}
        }
    });
    return {
        paths,
        fallback: false
     }
    
 }

const Project = ({currentProject}) => {
    return ( 
        <div className="section mt-5 d-flex flex-column justify-content-center align-items-center"> 
            <div className=" ">
                <ProjectCard key={currentProject.id} project={currentProject} visitUrl={currentProject.visitUrl} showDetails={true}/>
            </div>
        </div>
     );
}
 
export default Project;