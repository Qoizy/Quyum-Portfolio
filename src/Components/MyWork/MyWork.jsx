import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mywork_data from "../../images/mywork-data";

const MyWork = () => {
  const [visibleproject, setVisibleProject] = useState(2);
  const navigate = useNavigate();

  const loadMoreProject = () => {
    setVisibleProject((prev) => prev + 2);
  };

  const showLessProject = () => {
    setVisibleProject(2);
  };

  const openProjectDetails = (project) => {
    navigate(`/project/${project.w_no}`, { state: { project } });
  };

  return (
    <section
      id="work"
      className="flex flex-col justify-center items-center gap-10 py-8 px-4 md:px-10"
        data-aos="flip-down"
        data-aos-delay="100"
    >
      <div className="relative">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-500">
          My Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl">
        {mywork_data.slice(0, visibleproject).map((work, index) => {
          return (
            <div
              key={index}
              className="text-center h-[100%] p-10 border border-blue-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative group">
                <img
                  src={work.w_img}
                  alt={work.w_name}
                  className="w-full h-[250px] md:h-[400px] rounded-2xl"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                  <h3 className="flex flex-col text-xl md:text-lg mb-4">
                    {work.w_name}
                  </h3>
                  <button
                    onClick={() => openProjectDetails(work)}
                    className="py-2 px-6 text-gray-900 bg-gradient-to-r from-slate-400 to-white hover:from-slate-500 hover:to-slate-200 rounded-xl transition"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        {visibleproject < mywork_data.length ? (
          <button
            onClick={loadMoreProject}
            className="inline-flex items-center border border-blue-500 rounded-xl py-2 px-4 text-lg md:text-xl font-semibold text-blue-500 hover:scale-110 transition"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={showLessProject}
            className="inline-flex items-center border border-blue-500 rounded-xl py-2 px-4 text-lg md:text-xl font-semibold text-blue-500 hover:scale-110 transition"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default MyWork;
