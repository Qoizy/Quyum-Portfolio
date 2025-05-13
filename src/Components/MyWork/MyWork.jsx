import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyWork.css";
import mywork_data from "../../images/mywork-data";
import img3 from "../../images/img3.png";
import arrow2 from "../../images/arrow2.png";

const MyWork = () => {
  const [visibleproject, setVisibleProject] = useState(3);
  const navigate = useNavigate();

  const loadMoreProject = () => {
    setVisibleProject((prev) => prev + 3);
  };

  const showLessProject = () => {
    setVisibleProject(3);
  };

  const openProjectDetails = (project) => {
    navigate(`/project/${project.w_no}`, { state: { project } });
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={img3} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.slice(0, visibleproject).map((work, index) => {
          return (
            <div key={index} className="mywork-project">
              <div className="project-image-container">
                <img
                  src={work.w_img}
                  alt={work.w_name}
                  className="project-image"
                />
                <div className="project-overlay">
                  <h3>{work.w_name}</h3>
                  <button
                    onClick={() => openProjectDetails(work)}
                    className="details-button"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mywork-button">
        {visibleproject < mywork_data.length ? (
          <button onClick={loadMoreProject} className="show-more">
            Show More
            {/* <span className="tooltip-text">View More Project</span> */}
            &darr;
            {/* <img src={arrow2} alt="Show More" /> */}
          </button>
        ) : (
          <button onClick={showLessProject} className="show-less">
            Show Less
            {/* <span className="tooltip-text">View Fewer Project</span> */}
            &uarr;
            {/* <img src={arrow2} alt="Show More" /> */}
          </button>
        )}
      </div>
    </div>
  );
};

export default MyWork;
