import React from "react";
import "./project.css";
import { BiCheck } from "react-icons/bi";

const Project = () => {
  return (
    <section id="project">
      <h5>What I have complete</h5>
      <h2>Projects</h2>
      <div className="container project_container">
        <article className="project">
          <div className="project_head">
            <h3>Fronted</h3>
          </div>
          <ul className="project_list">
            <li>
              <BiCheck className="project_list-icon" />
              <div>
                <h4>Smart contact Manager</h4>
                <small className="text-light">
                  This Project is made in Java.I have used SpringBoot Framework
                  and Database MySQL and Thymeleaf for Dynamic Page.
                </small>
              </div>
            </li>
            <li>
              <BiCheck className="project_list-icon" />
              <div>
                <h4>
                  Hotel Room & Employee Management System (Using
                  Angular,Bootstrap,SQL)
                </h4>
                <small className="text-light">
                  To store the Customer, Room and Employee Details and Manage
                  the Details.
                </small>
              </div>
            </li>
          </ul>
        </article>
        <article className="project">
          <div className="project_head">
            <h3>Backend</h3>
          </div>
          <ul className="project_list">
            <li>
              <BiCheck className="project_list-icon" />
              <div>
                <h4>Smart contact Manager</h4>
                <small className="text-light">
                  This Project is made in Java.I have used SpringBoot Framework
                  and Database MySQL and Thymeleaf for Dynamic Page.
                </small>
              </div>
            </li>
            <li>
              <BiCheck className="project_list-icon" />
              <div>
                <h4>
                  Bank Accounts Information System (Front-End in VB and Back-End
                  in SQL) , College Project
                </h4>
                <small className="text-light">
                  To handle Account's records (like Account's number, Amount
                  details , etc.) it employs files as a database to conduct file
                  handling activities such as add, search, change, and remove
                  entries.
                </small>
              </div>
            </li>
          </ul>
        </article>
        <article className="project">
          <div className="project_head">
            <h3>C</h3>
          </div>
          <ul className="project_list">
            <li>
              <BiCheck className="project_list-icon" />
              <div>
                <h4>Number Guessing Game in C language</h4>
                <small className="text-light">
                  It's a game in which user have to guess a number where
                  compiler guide user, written number is geater or smaller or
                  right answer.
                </small>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Project;
