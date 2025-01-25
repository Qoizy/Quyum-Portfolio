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
              I am a Junior Frontend Engineer with 2 years experience and
              specialize in developing an appealing User-Interface and Dynamic
              Web App.
            </p>
            <p>
              With knowledge in language and frameworks like JavaScript, React
              Js, Vue Js, TailWind CSS, HTML and CSS.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "65%" }} />
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
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
              </div>
              <hr />
              <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECT COMPLETED</p>
              </div>
              <hr />
              <div className="about-achievement">
                <h1>3</h1>
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
