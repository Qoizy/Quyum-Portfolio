import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const AnimatedText = ({ text }) => {
  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      style={{ display: "inline-block" }}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={wordAnimation}
          style={{ display: "inline-block", marginRight: "5px" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src="assets/profile.jpeg" alt="image" />
      <motion.h1>
        <span>I'm Quyum Oladimeji,</span>{" "}
        <AnimatedText text="A Frontend Engineer" />
      </motion.h1>
      <p>
        I am a Frontend developer with 3 years experience working across various
        project.
      </p>
      {/* <motion.h1
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>I'm Quyum Oladimeji,</span> A Frontend Engineer
      </motion.h1>
      <motion.p
        animate={{
          x: [0, 100, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        I am a Frontend developer with 3 years experience working across various
        project.
      </motion.p> */}
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="assets/Quyum-Resume.pdf"
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
