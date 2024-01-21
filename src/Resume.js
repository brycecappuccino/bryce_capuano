import "./App.css";
import { Document, Page } from "react-pdf";
import theResume from "./BryceCapuanoResume.pdf";

function Resume() {
  return (
    <>
      <div className="containerResume">
        <a
          className="contactB"
          href={theResume}
          download="BryceCapuanoResume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume PDF
        </a>
      </div>
      <br></br>
      <div className="containerResumeContent">
        <p className="subheaderSection">-- Education --</p>
        <p className="subheaderContentResume">
          Washington University in St. Louis, St. Louis, MO<br />
          Bachelor of Science in Computer Science, Minor in Environmental Studies<br />
          Expected Graduation: May 2025<br />
          GPA: 3.8/4.0<br />
          Coursework: Data Structures and Algorithms, Full Stack Web Development, C++ Object Oriented Programming, Machine Learning, Data Science, Programming Systems & Languages<br />
          Activities: Association for Computing Machinery, Run Club (1 Marathon & 2 Trail 30ks), Climbing Club<br />
          Honors: Dean’s List (all semesters)
        </p>
        
        <p className="subheaderSection">-- Experience --</p>
        <p className="subheaderContentResume">
          Software Engineering Intern, May 2023 - Nov 2023<br />
          Humana, Louisville, KY<br />
          Responsibilities and achievements include optimizing data structures in Salesforce, redesigning Salesforce Lightning Web Components, leading cross-functional meetings, and participating in Agile sprints.<br />
          <br />
          Summer Instructor, June 2022 - Aug 2022<br />
          iD Tech Camps, Multiple Locations<br />
          Instructed 110 students in Java & Python programming basics, achieving a 95% positive feedback rate.<br />
          <br />
          Service Member, Nov 2020 - July 2021<br />
          AmeriCorps NCCC, Multiple Locations<br />
          Volunteered 1700 hours, including vaccine administration and construction of homes for Habitat for Humanity.<br />
          <br />
          Product Management Intern, June 2019 - Aug 2019<br />
          Wikipedia, San Francisco, CA<br />
          Co-led the "Teens Reimagine Wikipedia" project, conducting interviews and providing actionable insights.<br />
        </p>
        
        <p className="subheaderSection">-- Technical Skills --</p>
        <p className="subheaderContentResume">
          Programming Languages: Java, SQL, Python, JavaScript, C++, Swift, HTML/CSS<br />
          Frameworks/Technologies: Salesforce Lightning, REST APIs, AWS EC2, React.js, Node.js, Express.js<br />
          Other: SAFe Agile, CI/CD, SDLC, Azure DevOps, Git
        </p>
      </div>
    </>
  );
}

export default Resume;