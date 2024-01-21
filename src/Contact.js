import "./App.css";
import LittleGuy from "./LittleGuy.js"
import React, { useState, useEffect } from 'react';

function Contact() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [keysPressed, setKeysPressed] = useState({});

  const handleKeyPress = (event) => {
    const { key } = event;
    const moveBy = 10;
    switch(key) {
      case 'w':
      case 'ArrowUp':
        setPosition(prevPosition => ({ ...prevPosition, y: prevPosition.y - moveBy }));
        break;
      case 's':
      case 'ArrowDown':
        setPosition(prevPosition => ({ ...prevPosition, y: prevPosition.y + moveBy }));
        break;
      case 'a':
      case 'ArrowLeft':
        setPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x - moveBy }));
        break;
      case 'd':
      case 'ArrowRight':
        setPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x + moveBy }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      <p className="contact">
        <a
          class="contactB"
          href="https://www.linkedin.com/in/bryce-capuano/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </p>
      <p className="contact">Bryce Capuano</p>
      <p className="contact">bryce.capuano@gmail.com</p>
      <p className="contact">650-391-3021</p>
      {/* <LittleGuy position={position} /> */}
    </>
  );
}

export default Contact;
