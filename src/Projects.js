import "./App.css";

function Projects() {
  return (
    
    <div class="row">
    <div class="column"></div>
            <p className="subheaderProject">Music Battleground</p>
            <p className="subheaderContentProject">
            Worked with a partner to develop web app social media centered on users' music taste.
            Users register via Spotify, and their most listened to songs are automatically added to their profile
            (no lying about what you listen to!) Users rank others taste.
            Overall rankings page lets everyone know which music is best.
            <br></br><br></br>
            Technologies used:
            </p>
            <ul>
                <li> React.js </li>
                <li> HTML/Javascript/CSS </li>
                <li> Spotify API </li>
                <li> Express.js </li>
                <li> Node.js </li>
                <li> MySql </li>
            </ul>
            <br></br><br></br>
            <p className="subheaderProject">NoseDive</p>
            <p className="subheaderContentProject">
            Mobile game developed with three other students.
            <br></br><br></br>
            Technologies used:
            </p>
            <ul>
                <li> Swift </li>
                <li> Firebase </li>
            </ul>
    <div class="column"></div>
    </div>    
  );
}

export default Projects;
