import './App.css';
import { useState, useEffect } from "react";
import About from './About.js';
import Burrito from './Burrito.js';

function Homepage() {
    const [about, setAbout] = useState(true);
    const goToAbout = () => {
        setBurrito(false);
        setAbout(true);
      };
    
    const [burrito, setBurrito] = useState(false);
    const goToBurrito = () => {
        setAbout(false);
        setBurrito(true);
      };
  
      


  return (
    <>
        <div className="container">
        <header>Hello, I'm Bryce</header>
        <div className="navigation">
            <button className="roundB" onClick={goToAbout}>About</button>
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
      ) : null}
    </>
  );
}

export default Homepage;
