import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state?.project;
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  if (!project) {
    return (
      <div>
        <h3>No project data found.</h3>
      </div>
    );
  }

  return (
    <div className="project-details">
      <button onClick={goBack} className="back-button">
        &larr; Back
      </button>

      <div className="actions">
        <a
          href={project.w_link}
          target="_blank"
          rel="noopener noreferrer"
          className="action-button"
        >
          Live Demo
        </a>
        <a
          href={project.w_githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="action-button"
        >
          Github
        </a>
      </div>

      <div className="typewriter-container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `<div class="section project-name">${project.w_name}</div>`
              )
              .pauseFor(1000)
              .typeString(
                `<div class="section project-description">${project.w_description}</div>`
              )
              .pauseFor(1000)
              .typeString(
                `<div class="section technologies-used">
                  <h3>Technologies Used</h3>
                  <div class="technologies-list">${project.w_technologies
                    .map((tech) => `<span class="technology">${tech}</span>`)
                    .join("")}</div>
                </div>`
              )
              .pauseFor(1000)
              .typeString(
                `<div class="section key-features">
                  <h3>Key Features</h3>
                  <ul>${project.w_features
                    .map((feature) => `<li>${feature}</li>`)
                    .join("")}</ul>
                </div>`
              )
              .start();
          }}
          options={{
            delay: 5,
            cursor: "|",
          }}
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
