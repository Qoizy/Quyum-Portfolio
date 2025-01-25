import React from "react";
import "./Services.css";
import services_Data from "../../../assets/services-data";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src="assets/img3.png" alt="" />
      </div>
      <div className="services-container">
        {services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <a
                  href={service.s_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="readmore-link"
                >
                  <p>Read More</p>
                  <img src={arrow} alt="arrow" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
