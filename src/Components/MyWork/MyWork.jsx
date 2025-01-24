import React from "react";
import "./MyWork.css";
import mywork_data from "../../../assets/mywork-data";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src="assets/img3.png" alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="project" />;
        })}
      </div>
      <div className="mywork-showmore">
        <a
          href="https://github.com/Qoizy"
          target="_blank"
          rel="noopener noreferrer"
          className="show-more"
        >
          <p>
            Show More
            <span className="tooltip-text">View more project on Github</span>
          </p>
          <img src="assets/arrow2.png" alt="Show more" />
        </a>
      </div>
    </div>
  );
};

export default MyWork;
