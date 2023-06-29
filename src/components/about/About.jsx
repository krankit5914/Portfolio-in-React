import React from "react";
import "./about.css";
import ME from "../../assets/me4.JPG";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <a href="#experience">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>I am fresher</small>
            </article>
          </div>
          </a>
          <a href="#project">
          <div className="about_cards">
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>5+ Complited</small>
            </article>
          </div>
          </a>
          <p>
            Hello this is Ankit Kumar. I am from Bihar. I done my schooling from
            S.M.H.D High School. I done my intermideate(+2) from S.G.G.S College
            Patna City. I done my BCA from Collage of Commerce Arts and Science.
            I have some knowlodge in HTML, CSS, JAVASCRIPT, React js, Thymeleaf
            and SPRING BOOT i have alredy done projects through this knowloge
            which i have learned in between this i learned about tag in html,
            stylings in css, and to develop somthing with javascript and React.
            I am comfortable in VS Code for developing my projects which skills.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
