import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./About.css";
import img3 from "../../images/img3.png";
import profile from "../../images/profile.jpeg";

gsap.registerPlugin();

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".about-para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );

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
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        {/* <img src={img3} alt="About Me" /> */}
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="About Me" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Frontend Engineer with years of experience and specialize
              in developing appealing User-Interface and Dynamic Web App.
            </p>
            <p>
              Works with languages and frameworks like JavaScript, React Js, Vue
              Js, TypeScript, TailWind.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>TypeScript</p>
              <hr className="lines" style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>TailWind CSS</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Vue JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-achievements">
              <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
              </div>
              <hr className="about-hr" />
              <div className="about-achievement">
                <h1>18+</h1>
                <p>PROJECT COMPLETED</p>
              </div>
              <hr className="about-hr" />
              <div className="about-achievement">
                <h1>2+</h1>
                <p>HAPPY CLIENT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
