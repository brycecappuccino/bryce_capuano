import "./App.css";

function About() {
  return (
    <>
      <p className="subheader">About Me</p>
      <p className="subheaderContent">
        I'm an incoming Junior at Washington University in St. Louis majoring in
        Computer Science and minoring in Environmental Studies. <br></br>
        I'm quite fond of coding. I'm particularly interested in full stack
        engineering, artificial intelligence, and data management. <br></br>
        Outside of Computer Science, I enjoy running, nature, running in nature,
        burritos, bouldering, and reading.
      </p>
      <div class="waviy">
        <span style={{ "--i": 1 }}>🧑‍💻</span>
        <span style={{ "--i": 2 }}>🏃</span>
        <span style={{ "--i": 3 }}>🌲</span>
        <span style={{ "--i": 4 }}>🌯</span>
        <span style={{ "--i": 5 }}>🧗</span>
        <span style={{ "--i": 6 }}>📖</span>
      </div>
    </>
  );
}

export default About;
