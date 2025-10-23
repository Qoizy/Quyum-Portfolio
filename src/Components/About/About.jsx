import React from "react";
import htmlLogo from "../../images/html.svg";
import cssLogo from "../../images/css.svg";
import jsLogo from "../../images/javascript.svg";
import reactLogo from "../../images/react.png";
import githubLogo from "../../images/github.svg";
import nextLogo from "../../images/nextjs.png";
import nodeLogo from "../../images/node.png";
import tsLogo from "../../images/typescript.png";
import gitLogo from "../../images/git.svg";
import tailwindLogo from "../../images/tailwind.svg";
import figmaLogo from "../../images/figma.png";
import AnimatedWrapper from "../AnimatedWrapper";
import {
  fadeDown,
  zoomIn,
  zoomInLeft,
  zoomInRight,
} from "../../images/animation";

const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "NextJs", logo: nextLogo },
  { name: "NodeJs", logo: nodeLogo },
  { name: "TypeScript", logo: tsLogo },
  { name: "Tailwind", logo: tailwindLogo },
  { name: "Figma", logo: figmaLogo },
  { name: "Git", logo: gitLogo },
  { name: "GitHub", logo: githubLogo },
];

const About = () => {
  return (
    <AnimatedWrapper variant={zoomInRight} delay={0.3}>
      <section
        id="about"
        className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full lg:w-1/2">
            {skills.map(({ name, logo }) => (
              <div
                key={name}
                className="bg-[#ffffffcc] backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center py-8"
              >
                <img
                  src={logo}
                  alt={name}
                  className="w-8 h-8 object-contain mb-3"
                />
                <p className="text-gray-800 font-semibold text-lg">{name}</p>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 text-gray-800 flex flex-col justify-start lg:pl-8">
            <h1 className="text-3xl md:text-4xl text-center font-semibold text-blue-500 mb-6">
              Who Am I?
            </h1>
            <p className="text-2xl leading-relaxed text-white">
              Versatile Full Stack Engineer with a strong foundation in both
              frontend and backend development, skilled in React, Next.js,
              Vue.js, TypeScript, and Node.js. Proven track record of enhancing
              user experiences, evidenced by a 45% reduction in bounce rate and
              a 50% decrease in page load times. Experienced in building
              scalable, high-performance applications in Agile environments,
              aiming to leverage comprehensive development skills to drive
              impactful solutions and business growth.
            </p>
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
};

export default About;
