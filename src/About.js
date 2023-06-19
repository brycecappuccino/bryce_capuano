import "./App.css";

function About() {
  return (
    <>
      <p className="subheader">About Me</p>
      <p className="subheaderContent">
        I'm an incoming Junior at Washington University in St. Louis majoring in
        Computer Science and minoring in Environmental Studies.
        I'm passionate about all things CS. I'm particularly interested in full stack
        engineering, artificial intelligence, and data management.
        Outside of Computer Science, I enjoy nature, running, running in nature,
        burritos, lifting, bouldering, and reading.
      </p>
      <div class="waviy">
        <span style={{ "--i": 1 }}>🧑‍💻</span>
        <span style={{ "--i": 2 }}>🌲</span>
        <span style={{ "--i": 3 }}>🏃</span>
        <span style={{ "--i": 4 }}>🌯</span>
        <span style={{ "--i": 5 }}>🏋️</span>
        <span style={{ "--i": 6 }}>🧗</span>
        <span style={{ "--i": 7 }}>📖</span>
      </div>
    </>
  );
}

export default About;
