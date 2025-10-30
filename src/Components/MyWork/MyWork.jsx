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
        className="flex flex-col justify-center items-center gap-10 py-8 px-4 md:px-10 mb-10"
      >
        <div className="w-full max-w-7xl flex justify-center relative">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-500 text-center mb-5">
            My Projects
          </h1>

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
              className="project-card w-[100%] md:w-[calc(50%-1rem)] flex-shrink-0 text-center border border-blue-500 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative group">
                <img
                  src={work.w_img}
                  alt={work.w_name}
                  className="w-full h-[250px] md:h-[400px] rounded-2xl"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                  <h3 className="text-xl md:text-lg mb-4">{work.w_name}</h3>
                  <button
                    onClick={() => openProjectDetails(work)}
                    className="py-2 px-6 text-gray-900 bg-gradient-to-r from-slate-400 to-white hover:from-slate-500 hover:to-slate-200 rounded-xl transition"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedWrapper>
  );
};

export default MyWork;
