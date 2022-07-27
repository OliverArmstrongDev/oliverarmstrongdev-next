

export const ProjectCard = (props) => {
    const {project, showDetails} = props;
    return ( 
        <div className="showcase-container mt-5 d-flex flex-column justify-content-start align-items-center w-100">
         <div className="content px-4 d-flex flex-column justify-content-start align-items-center ">
         <h2 className="mb-3">{project.title}</h2>
               { !showDetails ? <p className="w-50 text-center">{project.blurb}</p> :<p className="w-50 px-4 text-left">{project.details}</p>}
               
               <div className="image-container w-75">
                  <img  style={{marginTop: "-9%"}} className="w-100" src={project.image} alt={project.title} />
               </div>
           <div className="buttons mb-5 text-uppercase ">
           {showDetails ? <a href={`/#projects`} className="btn btn-primary mx-3" role={"button"} rel="noreferrer">Go Back</a> 
           : <a href={`/projects/${project.id}`} className="btn btn-primary mx-3" role={"button"} rel="noreferrer">Learn More</a>}
              <a href={project.visitUrl} className="btn btn-secondary mx-3 text-white" role={"button"} target="_blank" rel="noreferrer">View Website</a>
           </div>
         </div>
          
           <style jsx>{`
            .image-container{
               width: 70%;
               height: auto;
            }
            `}</style>
        </div>
     );
}



