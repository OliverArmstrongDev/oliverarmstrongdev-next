import Image from "next/image"


export const About = () => {
  return (
    <div className="my-5 pt-5 about-section d-flex flex-column justify-content-center align-items-center vh-100" id="about">
        <p className="display-4 text-uppercase">About</p>
        <div className="mt-5 about-image container d-flex flex-column justify-content-center align-items-center">
        <img className="about-image img-fluid w-50 " src="/images/Oliver-Armstrong-Remote.jpg"></img>
        </div>
        <p className="h3 mt-5">Who is Oliver?</p>
        <p className="w-75 mt-3">I come from a successful career in the technical/infrastructure side of IT. I’m fully self taught in that side of the industry; I started as a mobile computer technician and quickly worked my way up into various Systems Administrator roles.
        In 2010 I learned to code in C#, and then undertook 14 months of full-time software development building, improving, and maintaining various .Net Windows applications; both standalone and utilising SQL, including an ASP.net Webforms CRM, and KindCare; a childcare management software.
        Since 2020 I have been freelancing</p>
        <style jsx>{`
            .about-image{
            width: 60%;
            height: auto;
            border-radius: 5em 2em;
            }
            `}</style>
    </div>
  )
}

