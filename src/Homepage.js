import './App.css';
import { useState } from "react";
import About from './About.js';
import Timeline from './Timeline.js';
import Resume from './Resume.js';
import Projects from './Projects.js';
import Burrito from './Burrito.js';
import Contact from './Contact.js';

function Homepage() {
  const [activeSection, setActiveSection] = useState('about');

  const goToSection = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="container">
        <header>Hello, I'm Bryce</header>
        <div className="navigation">
          <button className="roundB" onClick={() => goToSection('about')}>About</button>
          <button className="roundB" onClick={() => goToSection('timeline')}>Timeline</button>
          <button className="roundB" onClick={() => goToSection('resume')}>Resume</button>
          <button className="roundB" onClick={() => goToSection('projects')}>Projects</button>
          <button className="roundB" onClick={() => goToSection('burrito')}>Burrito Map</button>
          <button className="roundB" onClick={() => goToSection('contact')}>Contact</button>
        </div>
      </div>
      <div className="nav-divider" />
      {/* CONTENT GOES BELOW. "HOMEPAGE" ALWAYS DISPLAYED */}
      {activeSection === 'about' && <About />}
      {activeSection === 'timeline' && <Timeline />}
      {activeSection === 'resume' && <Resume />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'burrito' && <Burrito />}
      {activeSection === 'contact' && <Contact />}
    </>
  );
}

export default Homepage;
