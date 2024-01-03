function Banner() {
  return (
    <div className="banner">
      <div className="left-banner">
        <h2 className="banner-header">Olufemi Olushola Frontend developer</h2>
        <img src="assets/images/image.png"></img>
      </div>
      <div className="right-banner">
        <p>
          I’m a front end web developer from Lagos,Nigeria. I enjoy designing
          and creating interesting digital experiences. I excel at the technical
          side of things although I am comfortable designing.
        </p>
        <ul>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contacts</li>
          <li>Blog ↗</li>
        </ul>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects">
      <div className="left-projects">
        <h1 className="projects-header">Selected Projects</h1>
        <h2>Single Project →</h2>
        <h2>Collaboration ↗</h2>
        <h2>Client’s Project ↗</h2>
        <h2>Fun Projects ↗</h2>
      </div>
      <div className="right-projects">
        <ul>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contacts</li>
          <li>Blog ↗</li>
        </ul>
      </div>
    </div>
  );
}

function Contacts(){
  return(
    <div className="contact">
      <div className="left-contact">
        <h2 className="contact-header">Contact</h2>
        <input type="text" placeHolder="|Your Name"/>
        <input type="text" placeHolder="Your Email"/>
        <input type="text" placeHolder="Tell me About Project"/>
        <p>Send →</p>
      </div>
      <div className="right-projects">
        <ul>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contacts</li>
          <li>Blog ↗</li>
        </ul>
      </div>
    </div>
  )
}
ReactDOM.render(
  <div>
    <Banner />
    <Projects/>
    <Contacts/>
  </div>,
  document.getElementById("root")
);
