import "./App.css";
import { useState } from "react";
import About from "./About.js";
import Timeline from "./Timeline.js";
import Resume from "./Resume.js";
import Projects from "./Projects.js";
import Burrito from "./Burrito.js";
import Contact from "./Contact.js";

function Homepage() {
  const [activeSection, setActiveSection] = useState("about");

  const sections = {
    about: "About",
    projects: "Projects",
    resume: "Resume",
    // timeline: "Timeline",
    burrito: 'Burritos',
    contact: "Contact",
  };

  const goToSection = (section) => {
    setActiveSection(section);
  };

  return (
    <>    
      <div className="content">
        <div className="container theheader">
          <header><div className="title">{sections[activeSection]}</div></header>
          <div className="navigation">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                className={`roundB ${
                  activeSection === section ? "active" : ""
                }`}
                onClick={() => goToSection(section)}
              >
                {sections[section]}
              </button>
            ))}
          </div>
        </div>
        <div className="nav-divider" />
        {activeSection === "about" && <About />}
        {activeSection === "timeline" && <Timeline />}
        {activeSection === "resume" && <Resume />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "burrito" && <Burrito />}
        {activeSection === "contact" && <Contact />}
      </div>
    </>
  );
}

export default Homepage;
