

export const ProjectCard = (props) => {
    const {project, showDetails, visitUrl} = props;
    return ( 
        <div className="showcase-container mt-5 d-flex flex-column justify-content-start align-items-center w-100">
         <div className="content px-4 d-flex flex-column justify-content-start align-items-center ">
            <div className="shadow-border">
            
         <h2 className="mb-5 text-center">{project.title}</h2>
               { !showDetails ? <div dangerouslySetInnerHTML={{ __html: project.blurb}}  className="w-100 text-center card-details"/> 
               :
               <div dangerouslySetInnerHTML={{ __html: project.details}} className="w-100 px-4 text-left card-details"/>
            }
               
               <div className="image-container w-100 d-flex flex-column justify-content-center align-items-center">
                  <img  style={{marginTop: "-4%"}} className="w-100" src={project.image} alt={project.title} />
               </div>
            </div>
           <div className="buttons mb-5 text-uppercase ">
           {showDetails ? <a href={`/#projects`} className="btn btn-primary mx-3" role={"button"} rel="noreferrer">Go Back</a> 
           : <a href={`/projects/${project.id}`} className="btn btn-primary mx-3" role={"button"} rel="noreferrer">Learn More</a>}
            { project.visitUrl && <a href={project.visitUrl} className="btn btn-secondary mx-3 text-white" role={"button"} target="_blank" rel="noreferrer">View Website</a>}
           </div>
         </div>
          
           <style jsx>{`
            .image-container img{
               max-width: 700px;
            }

            .card-details{
               max-width:900px;
            }
            `}</style>
        </div>
     );
}



