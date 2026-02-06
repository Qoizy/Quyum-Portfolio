import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mywork_data from "../../images/mywork-data";
import AnimatedWrapper from "../AnimatedWrapper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { fadeDown } from "../../images/animation";

const MyWork = () => {
  const scrollContainer = useRef();
  const navigate = useNavigate();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainer.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainer.current;
    container?.addEventListener("scroll", checkScroll);
    return () => container?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const cardWidth =
        scrollContainer.current.querySelector(".project-card")?.offsetWidth ||
        400;
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -cardWidth - 20 : cardWidth + 20,
        behavior: "smooth",
      });
    }
  };

  const openProjectDetails = (project) => {
    navigate(`/project/${project.w_no}`, { state: { project } });
  };

  return (
    <AnimatedWrapper variant={fadeDown} delay={0.3}>
      <section
        id="work"
        className=" max-w-7xl mx-auto flex flex-col justify-center items-center gap-10 py-8 px-4 md:px-10 mb-10"
      >
        <div className="w-full flex flex-col justify-center relative">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-500 mb-5">
            My Projects
          </h1>

          <p className="text-black text-center text-base md:text-xl leading-relaxed">
            I like to stay busy and always have a project in the works.{" "}
            <br className="hidden md:block" /> Take a look at some of the web
            applications I've dedicated my time to.
          </p>

          <div className="absolute right-0 top-5 flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full transition ${
                canScrollLeft
                  ? "text-blue-500 hover:bg-gray-100"
                  : "text-gray-400 cursor-not-allowed opacity-50"
              }`}
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-full transition ${
                canScrollRight
                  ? "text-blue-500 hover:bg-gray-100"
                  : "text-gray-400 cursor-not-allowed opacity-50"
              }`}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainer}
          className="flex gap-8 w-full max-w-7xl overflow-x-auto scroll-smooth scrollbar-hide py-4 px-2"
        >
          {mywork_data.map((work, index) => (
            <div
              key={index}
              className="project-card w-[100%] md:w-[calc(50%-1rem)] flex-shrink-0 text-left rounded-2xl overflow-hidden"
            >
              <div
                className="p-3 md:p-6 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                onClick={() => openProjectDetails(work)}
              >
                <img
                  src={work.w_img}
                  alt={work.w_name}
                  className="w-full h-[250px] md:h-[400px] rounded-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col items-start gap-3 mt-6 px-4">
                <h3 className="text-3xl font-bold text-blue-500">
                  {work.w_name}
                </h3>

                <p className="text-black max-w-md text-base md:text-xl leading-relaxed">
                  {work.w_description}
                </p>

                <button
                  onClick={() => openProjectDetails(work)}
                  className="mt-3 text-sm font-extrabold text-black uppercase flex items-center gap-2 hover:gap-3 transition-all"
                >
                  VIEW PROJECT <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedWrapper>
  );
};

export default MyWork;
