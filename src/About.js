import "./App.css";
import GoogleMapReact from "google-map-react";

function Burrito() {
  // GOTTA GET ALL THE BURRITOS HERE CSV?
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      <p className="subheader">About Me</p>
      <p className="subheaderContent">
        I'm a computer science student at Washington University in St. Louis.  I'm interested in software engineering, data science, and machine learning.
        I'm also a huge fan of burritos, nature, running, running in nature, working out, bouldering, and reading.  Below is a timeline of my post-high school journey to where I am now.
      </p> <br></br>
      <div class="timeline">
        <div class="timelineContainer left">
          <div class="timelineContent">
            <h2>May 2020</h2>
            <p>I graduate from Los Altos High School in the midst of COVID-19.  I enjoyed AP Computer Science, but I have no clue what I want to do.
              I think I'll have it all figured out by the time I turn 20.
            </p>
          </div>
        </div>
        <div class="timelineContainer right">
          <div class="timelineContent">
            <h2>June - Aug 2020</h2>
            <p>I work my first "real" job as a full time uniform distibution employee at the Tesla Motors production plant
              in Fremont, CA.  I marvel at all the cool robots.  I also decide to take a gap year and my friend does a really good
              job pitching this "AmeriCorps" program.
            </p>
          </div>
        </div>
        <div class="timelineContainer left">
          <div class="timelineContent">
            <h2>Nov 2020</h2>
            <p>My gap year with AmeriCorps NCCC begins...</p>
          </div>
        </div>
        <div class="timelineContainer right">
          <div class="timelineContent">
            <h2>Nov - Dec 2021</h2>
            <p>
              I dig trenches in in Arizona.  I sleep in a converted barn and chase Javelinas.
            </p>
          </div>
        </div>
        <div class="timelineContainer left">
          <div class="timelineContent">
            <h2>Jan - Mar 2021</h2>
            <p>I build houses and distribute food in Columbia, MO</p>
          </div>
        </div>
        <div class="timelineContainer right">
          <div class="timelineContent">
            <h2>Mar - May 2021</h2>
            <p>
              I work 70+ hour weeks at the Medgar Evers vaccination site in Brooklyn, NY.
              The hardest and most important work I've ever done.
            </p>
          </div>
        </div>
        <div class="timelineContainer left">
          <div class="timelineContent">
            <h2>May - July 2021</h2>
            <p>I do all sorts of cool stuff at an equine therapy ranch in Drumright, Ok</p>
          </div>
        </div>
        <div class="timelineContainer right">
          <div class="timelineContent">
            <h2>Aug 2021 - May 2022</h2>
            <p>
              My first year at Washington University in St. Louis.  I love my Data Structures and Algorithms class,
              and decide to switch into the engineering school to pursue computer science.  I join a couple clubs, realize how bad the barbeque is back in California, and make some great friends.
            </p>
          </div>
        </div>
        <div class="timelineContainer left">
          <div class="timelineContent">
            <h2>June - Aug 2022</h2>
            <p>I teach the next generation CS fundementals as an ID Tech instructor. My primary class in Minecraft modding in Java.
              It's a ton of fun, even though I get pied in the face (twice).
            </p>
          </div>
        </div>
        <div class="timelineContainer right">
          <div class="timelineContent">
            <h2>Aug 2022 - May 2023</h2>
            <p>
              My second year at Washington University in St. Louis.  My skills as a developer really take off thanks to
              my IOS app dev and full stack web dev classes.  I work part time at New Balance and use the CarShare program to run in nature.
              My quantum computing professor gives me a couple exestential crises.
            </p>
          </div>
        </div>
        <div class="timelineContainer left">
          <div class="timelineContent">
            <h2>May 2023 - Present</h2>
            <p>I begin my first SWE internship with Humana.  
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Burrito;
