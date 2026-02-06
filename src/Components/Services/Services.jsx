import React from "react";
import services_Data from "../../images/services-data";
import AnimatedWrapper from "../AnimatedWrapper";
import { fadeUp } from "../../images/animation";

const Services = () => {
  return (
    <AnimatedWrapper variant={fadeUp} delay={0.3}>
      <section
        id="services"
        className="max-w-7xl mx-auto flex flex-col gap-10 py-20 px-4 md:px-10"
        //   data-aos="zoom-in-left"
        //   data-aos-delay="300"
      >
        <div className="relative">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-500">
            What I do........
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
          {services_Data.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-4 border border-blue-500 rounded-2xl p-8 bg-white/10 backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-300/10 to-transparent pointer-events-none" />

              <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-l from-blue-200 to-white bg-clip-text text-transparent">
                {service.s_no}
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-l from-blue-200 to-white bg-clip-text text-transparent">
                {service.s_name}
              </h2>
              <p className="font-semibold text-sm md:text-base text-blue-500 leading-relaxed">
                {service.s_desc}
              </p>
              <div className="mt-4">
                <a
                  href={service.s_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-100 transition-colors duration-300"
                >
                  <p>Read More</p> <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedWrapper>
  );
};

export default Services;
