import React from "react";
import "./Contact.css";
import img3 from "../../images/img3.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5ba2602d-3d32-4e39-adf9-55dc88a8c33c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        alert(res.message);
        event.target.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert(
        "There was an error submitting the form. Please check your connection."
      );
      alert.error("Form submission error:", error);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={img3} alt="contact" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on any project.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="../../images/email.png" alt="email" />
              <p>oladimejiquyum30@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="../../images/call.png" alt="call" />{" "}
              <p>+234 905 707 2013</p>
            </div>
            <div className="contact-detail">
              <img src="../../images/location.png" alt="location" />
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
