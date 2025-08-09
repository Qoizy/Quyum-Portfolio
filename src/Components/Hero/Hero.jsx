import React from "react";
import Typewriter from "typewriter-effect";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../../images/profile2.jpeg";
import leftleaf from "../../images/hero-left-leaf.png";
import rightleaf from "../../images/hero-right-leaf.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const Hero = () => {
  useGSAP(() => {
    // const titleSplit = new SplitText(".title", { type: "chars, words" });

    // titleSplit.chars.forEach((char) => char.classList.add("white"));

    // gsap.from(titleSplit.chars, {
    //   yPercent: 100,
    //   duration: 1.8,
    //   ease: "expo.out",
    //   stagger: 0.05,
    // });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12 lg:px-20 py-20"
      data-aos="flip-right"
      data-aos-delay="100"
    >
      <div className="relative flex justify-center md:w-1/2">
        <img
          src={profile}
          alt="Profile"
          className="rounded-[50px] border border-slate-400 w-40 sm:w-56 md:w-72 lg:w-72 h-auto mt-4 md:mt-0"
        />
      </div>

      <img
        src={leftleaf}
        alt="left leaf"
        className="left-leaf absolute left-0 bottom-[-5rem] hidden lg:block"
      />
      <img
        src={rightleaf}
        alt="right leaf"
        className="right-leaf absolute right-0 top-1/3 hidden lg:block"
      />

      <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 space-y-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700">
          Hi, I'm Quyum Oladimeji
        </h3>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-blue-500">
          A FullStack Engineer, Frontend Specialist
        </h2>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl py-6 font-bold bg-gradient-to-l from-blue-500 to-white bg-clip-text text-transparent">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome to My Portfolio 🤝")
                .pauseFor(1000)
                .deleteAll()
                // .typeString("My name is Quyum Oladimeji")
                // .pauseFor(1000)
                // .deleteAll()
                .typeString("I Build Amazing Web Applications 👨🏾‍💻")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Let’s Create Some Magic! 😁")
                .start();
            }}
            options={{
              loop: true,
              delay: 100,
              cursor: "|",
            }}
          />
        </h1>

        <div className="flex flex-wrap gap-6">
          <AnchorLink
            className="px-5 py-2 rounded-full border border-blue-500 text-blue-500 font-bold hover:border-white hover:text-white transition"
            offset={50}
            href="#contact"
          >
            Connect with me
          </AnchorLink>
          <a
            href="../../images/Quyum-Resume.pdf"
            download="Quyum_oladimeji_Resume.pdf"
            className="px-5 py-2 rounded-full border border-white text-white font-bold hover:border-blue-500 hover:text-blue-500 transition"
          >
            My resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
