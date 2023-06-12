import './App.css';
import { useState, useEffect } from "react";
import About from './About.js';
import Timeline from './Timeline.js';
import Burrito from './Burrito.js';

function Homepage() {
    const [about, setAbout] = useState(true);
    const goToAbout = () => {
        setBurrito(false);
        setTimeline(false);
        setAbout(true);
      };

      const [timeline, setTimeline] = useState(false);
    const goToTimeline = () => {
        setAbout(false);
        setBurrito(false);
        setTimeline(true);
      };
    
    const [burrito, setBurrito] = useState(false);
    const goToBurrito = () => {
        setAbout(false);
        setTimeline(false);
        setBurrito(true);
      };
  
      


  return (
    <>
        <div className="container">
        <header>Hello, I'm Bryce</header>
        <div className="navigation">
            <button className="roundB" onClick={goToAbout}>About</button>
            <button className="roundB" onClick={goToTimeline}>Timeline</button>
            <button className="roundB">Resume</button>
            <button className="roundB">Projects</button>
            <button className="roundB" onClick={goToBurrito}>Burrito Map</button>
            <button className="roundB">Contact</button>
        </div>
        </div>
        <div className="nav-divider"/>
        {/* CONTENT GOES BELOW. "HOMEPAGE" ALWAYS DISPLAYED */}
      {about ? (
        <About />
        ) : burrito ? (
        <Burrito />
      ) : timeline ? (
        <Timeline />
      ) : null}
    </>
  );
}

export default Homepage;
