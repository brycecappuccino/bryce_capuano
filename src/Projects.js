import "./App.css";
import NoseDive_UI from "./NoseDive_UI.png";
import MusiBattle_UI from "./MusiBattle_UI.png";
import TrailGuru_UI from "./TrailGuru_UI.png";

function Projects() {
  return (
    <div>
      <p className="subheader">TrailGuru</p>
      <p className="subheaderContent">
        Developing a web application using OpenAI API for personalized hiking
        trail recommendations. When a hike is selected, Google Maps API provides
        directions from user's location to the trailhead. Implemented React
        front end and Express backend with Cors & Axios middleware; used OpenAI
        CLI for API calls.
        <br></br>
        <br></br>
      </p>
      <div className="containerImage">
        <div>
          <ul>
            <li> React.js </li>
            <li> HTML/Javascript/CSS </li>
            <li> OpenAi API </li>
            <li> Express.js </li>
            <li> Node.js </li>
          </ul>
        </div>
        <img
          className="projectImage"
          src={TrailGuru_UI}
          alt="TrailGuru UI"
          loading="lazy"
        />
      </div>
      <br></br>
      <p className="subheader">MusiBattle</p>
      <p className="subheaderContent">
        Worked with a partner to develop web app social media centered on users'
        music taste. Users register via Spotify, and their most listened to
        songs are automatically added to their profile (no lying about what you
        listen to!) Users rank others taste. Overall rankings page lets everyone
        know which music is best.
        <br></br>
        <br></br>
      </p>
      <div className="containerImage">
        <div>
          <ul>
            <li> React.js </li>
            <li> HTML/Javascript/CSS </li>
            <li> Spotify API </li>
            <li> Express.js </li>
            <li> Node.js </li>
            <li> MySql </li>
          </ul>
        </div>
        <img
          className="projectImage"
          src={MusiBattle_UI}
          alt="NoseDive UI"
          loading="lazy"
        />
      </div>
      <br></br>
      <p className="subheader">NoseDive</p>
      <p className="subheaderContent">
        IOS mobile game developed with three other students. Full stack
        application utilizing Google's Firebase for backend. Involved an
        algorithm for generating a winding path that the player would "fall"
        down while avoiding obstacles. Players stats were saved and a global
        leaderboard was kept updated. As can be seen below, the UI left
        something to be desired. But it worked well, and we thought it was
        pretty funny!
        <br></br>
        <br></br>
      </p>
      <div className="containerImage">
        <div>
          <ul>
            <li> Swift </li>
            <li> UIKit </li>
            <li> Firebase </li>
          </ul>
        </div>
        <img
          className="projectImage"
          src={NoseDive_UI}
          alt="NoseDive UI"
          loading="lazy"
        />
      </div>
      <br></br>
      <p className="subheader">This Website</p>
      <p className="subheaderContent">
        Look at this website! It's a React.js app hosted on Github Pages. The
        custom domain is through Google domains (now owned by Squarespace).
        <br></br>
        <br></br>
      </p>
      <div className="containerImage">
        <ul>
          <li> React.js </li>
          <li> HTML/Javascript/CSS </li>
          <li> Github Pages </li>
        </ul>
      </div>
      <br></br>
      <p className="subheader">
        Navy SEAL/Cookie Eating/Pizza Eating Game (2013)
      </p>
      <p className="subheaderContent">
        <a
          href="https://www.khanacademy.org/computer-programming/navy-sealcookie-eating-game/2370549969"
          target="_blank"
          rel="noreferrer"
        >
          <span>Where it all began...</span>
        </a>
        <br></br>
        <br></br>
      </p>
    </div>
  );
}

export default Projects;
