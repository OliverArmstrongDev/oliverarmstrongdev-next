import Image from "next/image"

export const Hero = () => {
  return (
  
    <div className="h-100 my-5 mx-5 p-5 d-flex flex-row justify-content-center align-items-center">
            <div className="container position-relative h-100">
                <div className="jumbotron text-uppercase w-75 md">
                  <h4 className="">Hello, world!</h4>
                  <p className="display-1">I&#39;m Oliver Armstrong</p>
                  <hr />
                  <p className="h3 mb-5">A Full-Stack Developer</p>
                  <p className="lead">
                      <a className="btn btn-primary btn-lg" href="#projects" role="button">View My Work</a>
                  </p>
                </div>
            </div>
                <div className="blob" >
                    <Image className="blob-image" layout="fill" src="/images/blob.svg"></Image>
                </div>
            <div className="image-container w-75 d-flex justify-content-center">
                <img className="img-fluid hero-image" src="/images/Oliver-Armstrong.png" alt="Oliver Armstrong"></img>
            </div>

            <style jsx>{`
            .hero-image{
              border-radius: 2em 6em;
              box-shadow: 3px 0px 5px #00000054;
            }
            `}</style>
 </div>
  )
}

