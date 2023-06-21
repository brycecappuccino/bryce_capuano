import "./App.css";
import React, { useEffect } from 'react';
import Antarctica from './Antarctica';


function Contact() {
  return (
    
    <div>
            <p className="subheaderContent">
            <a class="contactB" href="https://www.linkedin.com/in/bryce-capuano/" target="_blank" rel="noreferrer">Linkedin</a>
            </p>
            <p className="subheaderContent">
            Bryce Capuano
            </p>
            <p className="subheaderContent">
            bryce.capuano@gmail.com
            </p>
            <p className="subheaderContent">
            650-391-3021
            </p>
            <Antarctica />

    </div>    
  );
}

export default Contact;