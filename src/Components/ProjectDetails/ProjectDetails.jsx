import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import qlogo from "../../images/qlogo.png";
import Footer from "../Footer/Footer";
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
import supabaseLogo from "../../images/supabase.png";
import mongodbLogo from "../../images/mongodb.png";
import paystackLogo from "../../images/paystack.png";
import axiosLogo from "../../images/axios.png";
import chartjsLogo from "../../images/chartjs.png";
import framerLogo from "../../images/framer.png";
import viteLogo from "../../images/vite.png";
import mywork_data from "../../images/mywork-data";
import LogoSpinner from "../LogoSpinner";

const techStackMap = {
  Axios: axiosLogo,
  MongoDB: mongodbLogo,
  PayStack: paystackLogo,
  "Chart.js": chartjsLogo,
  "Framer Motion": framerLogo,
  React: reactLogo,
  NextJs: nextLogo,
  HTML: htmlLogo,
  Tailwind: tailwindLogo,
  TailWindCSS: tailwindLogo,
  TailWindcss: tailwindLogo,
  CSS: cssLogo,
  JavaScript: jsLogo,
  NodeJs: nodeLogo,
  "Node.js": nodeLogo,
  "Express.js": nodeLogo,
  TypeScript: tsLogo,
  Figma: figmaLogo,
  Git: gitLogo,
  GitHub: githubLogo,
  Supabase: supabaseLogo,
  Vite: viteLogo,
};

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state?.project;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const currentIndex = mywork_data.findIndex((w) => w.w_no === project.w_no);

  const prevProject = currentIndex === 0 ? null : mywork_data[currentIndex - 1];

  const nextProject =
    currentIndex === mywork_data.length - 1
      ? null
      : mywork_data[currentIndex + 1];

  const handleNavigation = (targetProject) => {
    window.scrollTo(0, 0);
    navigate(`/project/${targetProject.w_no}`, {
      state: { project: targetProject },
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [project]);

  if (loading) return <LogoSpinner />;

  if (!project)
    return (
      <div className="p-6 text-red-600 text-center">No project data found.</div>
    );

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      <img src={qlogo} alt="Q logo" className="w-20 h-auto z-[50] px-3 py-3" />

      <header className="max-w-5xl mx-auto px-6 pt-10 pb-10">
        <button
          onClick={() => navigate("/")}
          className="text-black text-2xl mb-12"
        >
          <FaArrowLeft />
        </button>

        <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
          {project.w_name}
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-12">
          {project.w_description}
        </p>

        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-8 md:gap-16 text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-black">
          <div>
            <p className="text-black mb-2 md:mb-4">Type</p>
            <p className="text-gray-500 font-bold">{project.w_type}</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-black mb-2 md:mb-4">Stack</p>
            <ul className="text-gray-500 font-bold leading-6 flex flex-wrap gap-x-4 md:block">
              {project.w_technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-black mb-2 md:mb-4">Live</p>
            <a
              href={project.w_link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Site
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
          <img
            src={project.w_img}
            alt={project.w_name}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-2xl text-black font-bold uppercase tracking-tight italic relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[2px] after:bg-gradient-to-r after:from-blue-500 to-white pb-2">
              My Role
            </h2>
            <p className="text-gray-500 text-lg mt-2 font-semibold">
              {project.w_role}
            </p>
          </div>
          <div className="md:w-2/3">
            <ul className="space-y-6 text-gray-500 text-lg leading-relaxed">
              {project.w_contribution?.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-blue-500 font-bold">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 space-y-6 mb-10">
        <section className="md:w-1/2">
          <h2 className="text-2xl text-black font-bold mb-8 tracking-tight italic relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[2px] after:bg-gradient-to-r after:from-blue-500 to-white pb-2">
            Project Purpose and Goal
          </h2>
          <div className="space-y-6">
            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
              {project.w_purpose}
            </p>
          </div>
        </section>

        <section className="px-6 md:pl-[100px] max-w-5xl mx-auto py-12 md:py-20 border-t border-gray-50">
          <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-start">
            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-col gap-4 pt-2">
              {project.w_technologies.map((techName, index) => {
                const logo = techStackMap[techName];

                return (
                  <div
                    key={techName}
                    className={`bg-white border border-gray-100 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-4 p-4 transition-transform hover:scale-105 duration-300 ${
                      index % 2 !== 0 ? "md:ml-8" : ""
                    }`}
                  >
                    {logo ? (
                      <img
                        src={logo}
                        alt={techName}
                        className="w-6 h-6 object-contain"
                      />
                    ) : (
                      <span className="text-blue-500 font-bold">#</span>
                    )}
                    <p className="text-[#00d8ff] font-bold text-sm tracking-wide">
                      {techName}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="md:w-1/2">
              <h2 className="text-2xl text-black font-bold mb-8 tracking-tight italic relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[2px] after:bg-gradient-to-r after:from-blue-500 to-white pb-2">
                Web Stack and Explanation
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                {project.w_stack_explanation}
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20 rounded-3xl my-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 italic relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[2px] after:bg-gradient-to-r after:from-blue-500 to-white pb-2">
              Problems and Thought Process
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mt-6">
              {project.w_problems}
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-50 max-w-3xl mx-auto mt-12">
            <img src={project.w_img_1} alt="Process" className="w-full" />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl text-black font-bold mb-8 italic relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[2px] after:bg-gradient-to-r after:from-blue-500 to-white pb-2">
            Lessons Learned
          </h2>
          <p className="text-gray-500 text-lg pb-10 leading-relaxed">
            {project.w_lessons}
          </p>
        </section>
      </main>

      <section className="max-w-4xl mx-auto py-12 px-6 md:px-32 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-6 md:gap-12">
          {prevProject ? (
            <div
              onClick={() => handleNavigation(prevProject)}
              className="group relative flex flex-col justify-center py-4 px-6 bg-[#1a1a1a] rounded-xl border border-gray-800 cursor-pointer hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <FaArrowLeft className="text-white text-xl transform group-hover:translate-x-2 transition-transform duration-300" />
                <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest text-right">
                  Previous
                </span>
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-blue-500 group-hover:text-blue-500 transition-colors duration-300 truncate">
                {prevProject.w_name}
              </h3>
            </div>
          ) : (
            <div className="invisible"></div>
          )}

          <div
            onClick={() =>
              nextProject ? handleNavigation(nextProject) : navigate("/")
            }
            className="group relative flex flex-col justify-center py-4 px-6 bg-[#1a1a1a] rounded-xl border border-gray-800 cursor-pointer hover:border-gray-600 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest text-left">
                {nextProject ? "Next" : "The End"}
              </span>
              <FaArrowRight className="text-white text-xl transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-blue-500 group-hover:text-blue-500 transition-colors duration-300">
              {nextProject ? nextProject.w_name : "Back to Home"}
            </h3>
          </div>
        </div>
      </section>

      <div className="w-full bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetails;
