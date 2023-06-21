import "./App.css";

function Projects() {
  return (
    
    <div >


            <p className="subheader">MusiBattle</p>
            <p className="subheaderContent">
            Worked with a partner to develop web app social media centered on users' music taste.
            Users register via Spotify, and their most listened to songs are automatically added to their profile
            (no lying about what you listen to!) Users rank others taste.
            Overall rankings page lets everyone know which music is best.
            <br></br><br></br>
            </p>
            <p> Technologies used:</p>
            <ul>
                <li> React.js </li>
                <li> HTML/Javascript/CSS </li>
                <li> Spotify API </li>
                <li> Express.js </li>
                <li> Node.js </li>
                <li> MySql </li>
            </ul>
            <p className="subheader">NoseDive</p>
            <p className="subheaderContent">
            IOS mobile game developed with three other students.  Full stack application utilizing Google's Firebase for backend.  Involved an algorithm for
            generating a winding path that the player would "fall" down while avoiding obstacles.  Players stats were saved and a global leaderboard was kept updated.
            <br></br><br></br>
            </p>
            <p> Technologies used:</p>
            <ul>
                <li> Swift </li>
                <li> Firebase </li>
            </ul>

            <p className="subheader">This Website</p>
            <p className="subheaderContent">
            Look at this website!  It's a React.js app hosted on Github Pages.
            I used React.js to make it easier to update and maintain.
            I used Github Pages to host it. I used HTML/CSS/Javascript to make it look nice.
            <br></br><br></br>
            </p>
            <p> Technologies used:</p>
            <ul>
                <li> React.js </li>
                <li> HTML/Javascript/CSS </li>
                <li> Github Pages </li>
            </ul>
            <br></br>
    </div>    
  );
}

export default Projects;
