import "./App.css";
import { Document, Page } from "react-pdf";
import theResume from "./Resume_06_21_23.pdf";

function Resume() {
  return (
    <>
      <div className="containerResume">
        <a
          className="contactB"
          href={theResume}
          download="Resume_06_21_23.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume PDF
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

      <p className="subheaderSection">-- Education --</p>
      <p className="subheaderContent">
        <br></br>
        Washington University in St. Louis | 3.8/4.0 GPA
        <br></br>
        <br></br>
        Expected Graduation May 2025
        <br></br>
        <br></br>
        Bachelor of Science in Computer Science; Minor in Environmental Studies
        <br></br>
        <br></br>
        Active member of Run Club, Climbing Club
        <br></br>
        <div className="container">
          Relevant Coursework
          <ul>
            <li>Rapid Prototype Development</li>
            <li>Data Structures and Algorithms</li>
            <li>Mobile App Development</li>
            <li>Into to Biomedical Computing</li>
            <li>Intro to Computer Engineering</li>
            <li>OOP Software Dev. Lab</li>
          </ul>
        </div>
      </p>

      <p className="subheaderSection">-- Experience --</p>
      <p className="subheaderContent">
        <br></br>
        SWE Intern @ Humana | Summer 2023
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
        Instructor @ ID Tech Camps | Summer 2022
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
        Service Member @ AmeriCorps NCCC | Gap Year: 2020 - 2021
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
        Tesla Motors Factory Associate | Summer 2020
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
        Product Management Intern @ Wikipedia | Summer 2019
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
    </>
  );
}

export default Resume;
