import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import qlogo from "../../images/qlogo.png";
import img3 from "../../images/img3.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.classList.toggle("overflow-hidden", !isMenuOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    setMenu(menuItem);
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "nav",
          start: "bottom top",
        },
      })
      .fromTo(
        "nav",
        { backgroundColor: "transparent" },
        {
          backgroundColor: "#00000050",
          backdropFilter: "blur(10px)",
          duration: 1,
          ease: "power1.inOut",
        }
      );
  });

  return (
    <nav className="flex items-center justify-between px-4 py-3 sticky top-0 z-[1000] w-full">
      <img src={qlogo} alt="Q logo" className="w-12 h-auto z-[1001]" />

      <div
        className="md:hidden text-2xl z-[1100] flex cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={`fixed md:static top-[70px] right-0 h-[calc(100%-70px)] w-full md:w-auto 
          bg-white md:bg-transparent flex flex-col md:flex-row items-center gap-6 
          md:gap-12 p-6 md:p-0 shadow-lg md:shadow-none transform transition-transform 
          duration-300 ease-in-out z-[2000]
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"} 
          md:translate-x-0`}
      >
        {["home", "about", "services", "work", "contact"].map((item) => (
          <li key={item} role="none">
            <AnchorLink
              className={`${
                menu === item ? "text-blue-500" : "text-gray-900 md:text-white"
              } hover:text-blue-500 transition`}
              offset={item === "home" ? 0 : 50}
              href={`#${item}`}
              onClick={() => handleMenuItemClick(item)}
            >
              <p>
                {item === "home"
                  ? "Home"
                  : item === "about"
                  ? "About Me"
                  : item === "services"
                  ? "Services"
                  : item === "work"
                  ? "Portfolio"
                  : "Contact"}
              </p>
            </AnchorLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
