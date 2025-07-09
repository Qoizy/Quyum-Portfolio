import React from "react";
// import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../../images/profile.jpeg";
import leftleaf from "../../images/hero-left-leaf.png";
import rightleaf from "../../images/hero-right-leaf.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const Hero = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".title", { type: "chars, words" });
    // const buttonSplit = new SplitText(".hero-action", { type: "chars" });

    titleSplit.chars.forEach((char) => char.classList.add("white"));

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });

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

    // gsap.from(buttonSplit.chars, {
    //   opacity: 0,
    //   xPercent: 100,
    //   duration: 1.8,
    //   ease: "expo.out",
    //   stagger: 0.06,
    //   delay: 1,
    // });
  }, []);

  return (
    <div id="home" className="hero">
      <img src={profile} alt="image" className="profile-image" />
      <h3 className="title">Hi, I'm Quyum Oladimeji</h3>
      <img src={leftleaf} alt="left leaf" className="left-leaf" />
      <img src={rightleaf} alt="right leaf" className="right-leaf" />

      <div>
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome to My Portfolio")
                .pauseFor(1000)
                .deleteAll()
                // .typeString("My name is Quyum Oladimeji")
                // .pauseFor(1000)
                // .deleteAll()
                .typeString("I Build Amazing Web Application")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Let’s Create Something Great!")
                .start();
            }}
            options={{
              loop: true,
              delay: 75,
              cursor: "|",
            }}
          />
        </h1>
      </div>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="../../images/Quyum-Resume.pdf"
            download="Quyum_oladimeji_Resume.pdf"
            className="anchor-link"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
