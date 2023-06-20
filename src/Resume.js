import "./App.css";
import { Document, Page } from "react-pdf";
import theResume from "./Resume_MAY_2023.pdf";

function Resume() {
  return (
    <>
      <div className="containerResume">
        <a
          className="contactB"
          href={theResume}
          download="Resume_MAY_2023.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>
      </div>

      <p className="subheaderSection">-- Technical Skills --</p>
      <p className="subheaderContent">
        <br></br>
        Languages: Java, Python, JavaScript, PHP, HTML/CSS, SQL, C++, Swift, R
        <br></br>
        Other: Agile, Node.JS, AWS EC2, AJAX, Socket.IO, React.JS, Express.JS,
        JSON, MySql, Git, API’s
      </p>

      <p className="subheaderSection">-- Experience --</p>
      <p className="subheaderContent">
        <br></br>
        AmeriCorps NCCC Service Member (Multiple Locations) | Gap Year: 2020 -
        2021
        <br></br>
        <br></br>
        AmeriCorps NCCC is a federal service program that matches non-profits
        with young adults who work and live onsite to provide critical services
        to communities in need. Project highlights include managing line control
        and securing patient appointments at the largest COVID-19 vaccine center
        in Brooklyn, writing grants for a STEM education ranch in rural Arizona,
        and constructing homes with Habitat for Humanity in a Missouri college
        town. Experience proved to be formative, both personally (humility,
        perseverance, compassion) and professionally (project management,
        teamwork, developing budgets, writing and communicating with clarity).
        <br></br>
        <br></br>
        <br></br>
        Tesla Motors Factory Associate (Fremont, CA) | Summer 2020
        <br></br>
        <br></br>
        Served as a member of the team in charge of uniform management and
        distribution for the employees at the Fremont Tesla Motors production
        facility. Responsibilities included high-volume inventory management in
        Excel, email coordination with department heads, a semi-traditional
        retail role during uniform distribution hours, and managing uniform
        transport between locations and within the factory.
        <br></br>
        <br></br>
        <br></br>
        Wikimedia (aka Wikipedia) Product Management Intern (San Francisco, CA)
        | Summer 2019
        <br></br>
        <br></br>
        Through research and customer interviews, delivered feature
        recommendations on how Wikipedia can improve engagement with teenagers.
        Developed survey and interviewed dozens of high school students around
        the world on how they interact with and use Wikipedia. Emphasis was
        placed on gathering diverse perspectives and showcasing the importance
        of free information access, especially in repressed geographies. Results
        of the survey were highly lauded by the Wikimedia team.
      </p>

      <p className="subheaderSection">-- Education --</p>
      <p className="subheaderContent">
        <br></br>
        Washington University in St. Louis | 3.81/4.0 GPA & 3.93/4.0 Major GPA
        <br></br>
        <br></br>
        Expected Graduation May 2025
        <br></br>
        Bachelor of Science in Computer Science; Minor in Environmental Studies
        <br></br>
        Relevant Coursework: Data Structures and Algorithms; Introduction to
        Biomedical Computing; Matrix Algebra; Intro to Computer Engineering; OOP
        Software Dev. Lab; Mobile App Development; Intermediate Statistics;
        Rapid Prototype Development; Intro to ML; Prog. Systems and Languages
        <br></br>
        Active member of Run Club, Climbing Club
      </p>
      <br></br>
    </>
  );
}

export default Resume;
