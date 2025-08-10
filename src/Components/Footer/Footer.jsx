import React from "react";
import qlogo from "../../images/qlogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-0 px-10 md:px-10 py-0 text-white ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 px-0 py-8 md:py-16">
        <div className="w-20 max-w-sm h-10">
          <img src={qlogo} alt="" />
        </div>

        <div className="">
          <h3 className="text-2xl md:text-3xl mb-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[2px] after:bg-gradient-to-r after:from-blue-500 to-white pb-2">
            About
          </h3>
          <p className="text-white text-xl md:text-xl">
            An Aspiring Full-stack Software Engineer.
          </p>
        </div>

        <div className="">
          <h3 className="text-2xl md:text-3xl mb-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[2px] after:bg-gradient-to-r after:from-blue-500 to-white pb-2">
            Social Link
          </h3>
          <div className="flex gap-8 text-xl text-[#fff]">
            <div className="relative group">
              <a
                href="https://github.com/Qoizy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-transform hover:scale-110 duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[0f172a] text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                Github
              </span>
            </div>
            <div className="relative group">
              <a
                href="mailto:oladimejiquyum30@gmail.com"
                aria-label="Email"
                className="transition-transform hover:scale-110 duration-300"
              >
                <i className="far fa-envelope"></i>
              </a>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[0f172a] text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                Email
              </span>
            </div>
            <div className="relative group">
              <a
                href="https://www.linkedin.com/in/oladimeji-quyum-opeyemi-466275222/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-transform hover:scale-110 duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[0f172a] text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                Linkedin
              </span>
            </div>
            <div className="relative group">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="transition-transform hover:scale-110 duration-300"
              >
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[0f172a] text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                X
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 pt-6 pb-4 text-center border-t-2 border-gray-500">
        <p className="text-white text-sm md:text-xl">
          &copy; Quyum {currentYear} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
