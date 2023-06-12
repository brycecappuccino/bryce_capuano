import "./App.css";

function About() {
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
        I'm also a huge fan of burritos, nature, running, running in nature, working out, bouldering, and reading.
      </p>
    </>
  );
}

export default About;
