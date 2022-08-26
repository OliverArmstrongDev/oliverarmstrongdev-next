import { ImLinkedin, ImGithub } from 'react-icons/im';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { IconContext } from "react-icons";

export const Hero = () => {
  const hoverColor = "#00ADB5#";
  const NormalColor = "#858585";
 

  return (
  
    <div className="h-100 my-5 p-5 d-flex flex-row justify-content-center align-items-center">
            <div className="container position-relative h-100">
                <div className="jumbotron text-uppercase w-75 md">
                  <h4 className="">Hello, world!</h4>
                  <p className="display-1 fw-bolder">I&#39;m Oliver Armstrong</p>
                  <hr />
                  <p className="h3 mb-5">A Full-Stack Developer</p>
                 
                    <div className="icons-container w-100 pb-4 d-flex flex-row  align-items-center">
                      <a className='px-3 icon' href="https://www.linkedin.com/in/oliver~armstrong" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30}/></a>
                      <a className='px-3 icon'  href="https://github.com/OliverArmstrongDev?tab=repositories" target="_blank" rel="noopener noreferrer"><ImGithub size={30}/></a>
                      <a className='px-3 icon'  href="mailto:connect@oliverarmstrongdev.com" target="_blank" rel="noopener noreferrer"><IoIosMail size={30}/></a>
                    </div>
                   
                  <p className="lead">
                      <a className="btn btn-primary btn-lg" href="#projects" role="button">View My Work</a>
                  </p>
                </div>
            </div>
                <div className="blob" >
                    <img className="blob-image" layout="fill" src="/images/blob.svg" />
                </div>
            <div className="image-container w-75 d-flex justify-content-center">
                <img className="img-fluid hero-image w-75" src="/images/Oliver-Armstrong.png" alt="Oliver Armstrong"></img>
            </div>
           
 </div>
  )
}

