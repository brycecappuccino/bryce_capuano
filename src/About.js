import React, { useState, useEffect } from 'react';
import "./App.css";
import "./SlideAnimations.css"

function About() {
  const phrases = ["Computer Science Student", "Puzzle Solver", "Expert Googler", "Redwood Tree Enthusiast", "Stack Overflow Aficionado", "Mountain Walker-Upper", "Edge Case Explorer", "Burrito Specialist"];
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [animation, setAnimation] = useState('slide-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation('slide-out');
      setTimeout(() => {
        setCurrentPhrase(prev => phrases[(phrases.indexOf(prev) + 1) % phrases.length]);
        setAnimation('slide-in');
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="subheaderWrapper">
        <div className="subheaderContentAbout">
          Hi, I'm Bryce:
          <div className={animation}>{currentPhrase}</div>
        </div>
      </div>
    </>
  );
}

export default About;
