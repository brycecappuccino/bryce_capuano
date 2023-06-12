import './App.css';
import { useState, useEffect } from "react";
import About from './About.js';
import Timeline from './Timeline.js';
import Projects from './Projects.js';
import Burrito from './Burrito.js';

function Homepage() {
    const [about, setAbout] = useState(true);
    const goToAbout = () => {
        setBurrito(false);
        setTimeline(false);
        setResume(false);
        setAbout(true);
      };

    const [timeline, setTimeline] = useState(false);
    const goToTimeline = () => {
        setAbout(false);
        setBurrito(false);
        setResume(false);
        setProjects(false);
        setContact(false);
        setTimeline(true);
      };

      const [resume, setResume] = useState(false);
      const goToResume = () => {
          setAbout(false);
          setBurrito(false);
          setTimeline(false);
          setProjects(false);
          setContact(false);
          setResume(true);
        };

      const [projects, setProjects] = useState(false);
      const goToProjects = () => {
          setAbout(false);
          setBurrito(false);
          setTimeline(false);
          setResume(false);
          setContact(false);
          setProjects(true);
        };
    
    const [burrito, setBurrito] = useState(false);
    const goToBurrito = () => {
        setAbout(false);
        setTimeline(false);
        setResume(false);
        setProjects(false);
        setContact(false);
        setBurrito(true);
      };

    const [contact, setContact] = useState(false);
    const goToContact = () => {
        setAbout(false);
        setTimeline(false);
        setResume(false);
        setProjects(false);
        setBurrito(false);
        setContact(true);
      };
  
      


  return (
    <>
        <div className="container">
        <header>Hello, I'm Bryce</header>
        <div className="navigation">
            <button className="roundB" onClick={goToAbout}>About</button>
            <button className="roundB" onClick={goToTimeline}>Timeline</button>
            <button className="roundB" onClick={goToResume}>Resume</button>
            <button className="roundB" onClick={goToProjects}>Projects</button>
            <button className="roundB" onClick={goToBurrito}>Burrito Map</button>
            <button className="roundB" onClick={goToContact}>Contact</button>
        </div>
        </div>
        <div className="nav-divider"/>
        {/* CONTENT GOES BELOW. "HOMEPAGE" ALWAYS DISPLAYED */}
      {about ? (
        <About />
        ) : timeline ? (
          <Timeline />
        ): projects ? (
          <Projects />
        ) : burrito ? (
        <Burrito />
      )  : null}
    </>
  );
}

export default Homepage;
