import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile from "../../images/right-laptop.png";
import AnimatedWrapper from "../AnimatedWrapper";
import { zoomInRight } from "../../images/animation";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    // gsap.fromTo(
    //   ".about-para",
    //   {
    //     opacity: 0,
    //     y: 20,
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     delay: 1,
    //     stagger: 0.1,
    //   }
    // );

    gsap.from(".about-skill", {
      x: 250,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "elastic",
    });

    gsap.utils.toArray(".about-achievement h1").forEach((num) => {
      const target = +num.innerText.replace("+", "");
      const obj = { value: 0 };

      gsap.to(obj, {
        value: target,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: num,
          start: "bottom bottom",
          end: "top 40%",
          scrub: true,
        },
        onUpdate: () => {
          num.innerText =
            Math.floor(obj.value) + (num.innerText.includes("+") ? "+" : "");
        },
      });
    });
  }, []);

  return (
    <AnimatedWrapper variant={zoomInRight} delay={0.3}>
      <section
        id="about"
        className="flex flex-col items-center justify-center gap-20 px-4 md:px-12 lg:px-44"
        //   data-aos="zoom-in-left"
        //   data-aos-delay="500"
      >
        <div className="relative">
          <h1 className="px-6 text-3xl md:text-4xl font-semibold text-blue-500">
            Who Am I?
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="hidden lg:block">
            <img
              src={profile}
              alt="About Me"
              className="rounded-[50px] w-[700px] h-[300px]"
            />
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5 text-lg font-medium text-white leading-relaxed">
              <p>
                Results-driven Frontend Engineer skilled in building responsive,
                accessible, and high-performance web apps using React, Next.js,
                and modern JavaScript. Proven ability to turn complex UI designs
                into intuitive user experiences that improve engagement and
                retention. Thrives in fast-paced Agile teams, delivering clean,
                scalable code that drives real business impact.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {[
                { skill: "TypeScript", width: "w-[65%]" },
                { skill: "JavaScript", width: "w-[70%]" },
                { skill: "TailWind", width: "w-[65%]" },
                { skill: "React", width: "w-[90%]" },
                { skill: "VueJS", width: "w-[65%]" },
                { skill: "NextJS", width: "w-[65%]" },
              ].map(({ skill, width }) => (
                <div
                  key={skill}
                  className="about-skill flex items-center gap-6 transition-transform duration-300 hover:scale-105"
                >
                  <p className="min-w-[150px] text-lg font-medium">{skill}</p>
                  <hr
                    className={`${width} h-2 rounded-full border-none outline-none bg-gradient-to-l from-blue-500 to-white`}
                  />
                </div>
              ))}

              <div className="flex justify-around w-full mt-10">
                {[
                  {
                    num: "2+",
                    label: "YEARS OF EXPERIENCE",
                  },
                  {
                    num: "18+",
                    label: "PROJECT COMPLETED",
                  },
                  {
                    num: "5+",
                    label: "HAPPY CLIENT",
                  },
                ].map(({ num, label }, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center gap-2 transition-transform duration-500 hover:scale-110">
                      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-l from-blue-500 to-white bg-clip-text text-transparent">
                        {num}
                      </h1>
                      <p className="text-sm sm:text-base font-medium text-center">
                        {label}
                      </p>
                    </div>

                    {idx < arr.length - 1 && (
                      <hr className="w-[5px] h-10 bg-gradient-to-l from-blue-500 to-white border-none rounded-full" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
};

export default About;
