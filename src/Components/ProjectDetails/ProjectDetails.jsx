import { div } from "framer-motion/client";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
// import "./ProjectDetails.css";

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state?.project;
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  const goBack = () => navigate(-1);

  useEffect(() => {
    const timer = setTimeout(() => setShowDetails(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!project) {
    return (
      <div className="p-6 text-center text-red-500">
        <h3>No project data found.</h3>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-900 rounded-lg shadow-lg mt-10">
      <button
        onClick={goBack}
        className="flex items-center gap-2 px-4 py-2 mb-6 bg-slate-400 text-white rounded-lg hover:bg-slate-600 transition-colors"
      >
        &larr;
      </button>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <a
          href={project.w_link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center px-4 py-2 bg-slate-400 text-white rounded-lg hover:bg-slate-600 transition-colors"
        >
          Live Demo
        </a>
        <a
          href={project.w_githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center px-4 py-2 bg-slate-400 text-white rounded-lg hover:bg-slate-600 transition-colors"
        >
          Github
        </a>
      </div>

      <div className="mb-8">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `<h1 class="text-3xl sm:text-4xl font-bold text-center text-white mb-4">${project.w_name}</h1>`
              )
              .pauseFor(1000)
              .typeString(
                `<p class="text-lg sm:text-xl text-white leading-relaxed">${project.w_description}</p>`
              )
              .start();
          }}
          options={{
            delay: 5,
            cursor: "|",
          }}
        />
      </div>

      {showDetails && (
        <div className="space-y-8 animate-fadeIn">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Technologies Used
            </h3>
            <div className="flex felx-wrap gap-3">
              {project.w_technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-slate-400 text-white px-3 py-1 rounded-lg shadow hover:scale-105 transition-transform"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.w_features.map((feat, idx) => (
                <li
                  key={idx}
                  className="bg-slate-400 text-white px-3 py-1 rounded-lg shadow hover:scale-105 transition-transform"
                >
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
