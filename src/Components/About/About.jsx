import React from "react";
import "./About.css";
import img3 from "../../images/img3.png";
import profile from "../../images/profile.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={img3} alt="About Me" />
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
              <hr style={{ width: "65%" }} />
            </div>
            {/* <div className="about-skill">
              <p>Next & Nuxt</p>
              <hr style={{ width: "60%" }} />
            </div> */}
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
              <hr />
              <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECT COMPLETED</p>
              </div>
              <hr />
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
