import React from "react";
// import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../../images/profile.jpeg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="image" />
      <h3>
        Hi, <span>I'm Quyum Oladimeji</span>
      </h3>
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
