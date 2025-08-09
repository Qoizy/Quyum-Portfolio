import React from "react";
// import "./Contact.css";
import email from "../../images/email.png";
import call from "../../images/call.png";
import location from "../../images/location.png";

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
    <section
      id="contact"
      className="flex flex-col gap-10 px-6 md:px-20 py-12 bg-slate-900 text-white"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
    >
      {/* <div className="relative"> */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-500">
        Get in touch
      </h1>
      {/* </div> */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col flex-1 gap-6">
          <h1 className="text-2xl md:text-3xl font-semibold bg-gradient-to-l from-blue-500 to-white bg-clip-text text-transparent">
            Let's talk
          </h1>
          <p className="text-sm sm:text-base text-gray-300">
            I'm currently available to take on any project.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src={email} alt="email" className="w-6 h-6" />
              <p>oladimejiquyum30@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={call} alt="call" className="w-6 h-6" />
              <p>+234 905 707 2013</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={location} alt="location" className="w-6 h-6" />
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="flex-1 flex flex-col gap-4 w-full">
          <label htmlFor="" className="text-sm font-semibold">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="p-3 rounded bg-slate-700 text-white focus:outline-none"
            required
          />
          <label htmlFor="" className="text-sm font-semibold">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="p-3 rounded bg-slate-700 text-white focus:outline-none"
            required
          />
          <label htmlFor="" className="text-sm font-semibold">
            Write your message here
          </label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            className="p-3 rounded bg-slate-700 text-white focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full mt-4 self-start"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
