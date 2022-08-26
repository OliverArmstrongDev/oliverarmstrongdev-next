export const About = () => {
  return (
    <div
      className=" pt-5 px-4 about-section d-flex flex-column justify-content-center align-items-center"
      id="about"
    >
      <p className="display-4 text-uppercase">About</p>
        <div className="shadow-border w-100 mt-3 d-flex flex-column justify-content-center align-items-center">
      <div className="mt-5 about-image container d-flex flex-column justify-content-center align-items-center">
        <img
          className="about-image img-fluid w-75 "
          src="/images/Oliver-Armstrong-Remote.jpg"
        ></img>
      </div>
        <p className="h3 mt-5 mb-4 text-center">Who is Oliver?</p>
        <span className="w-100 px-5">
          I’m a full-stack developer who is comfortable working with modern
          languages, tools and libraries such as; <br></br>ReactJS, Typescript,
          Next.js, Node, JavaScript, HTML, CSS, SQL, noSQL, JSON, API’s, Web
          tokens and headless CMS.
          <br></br>
          <br></br>This website is built with Next.js. And below you will find a
          showcase of some of my personal and commercial projects.
          <br></br>
          <br></br>- I also have commercial experience developing various
          applications in C# (Windows, Console, ASP.Net).
          <br></br>
          <br></br>
          <i>
            (In a previous career working in various Systems Administrator
            roles, I also gained years of experience building and maintaining
            physical and virtual server infrastructures).
          </i>
          <br></br>
          <br></br>I have been freelancing (and working remotely) since 2020.
          And I’m always open to new projects, so feel free to contact me any
          time!
          <br></br>
          <br></br>Below you’ll find a few examples of my work - mainly the
          design and functionality side, but on Github you can view the backend
          code.
        </span>
      </div>
      <style jsx>{`
        .about-image {
          width: 90%;
          max-width: 500px;
          height: auto;
          border-radius: 5em 2em;
        }
      `}</style>
    </div>
  );
};
