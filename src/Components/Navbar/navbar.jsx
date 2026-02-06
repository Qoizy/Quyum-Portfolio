import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import qlogo from "../../images/qlogo.png";
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

    setTimeout(() => {
      scrollToSection(menuItem);
    }, 10);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = window.innerWidth <= 768 ? 80 : 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
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
    <nav className="flex items-center justify-between px-4 py-3 sticky top-0 z-[50] bg-transparent w-full">
      <img src={qlogo} alt="Q logo" className="w-12 h-auto z-[50]" />

      <div
        className="md:hidden text-2xl z-[50] flex cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={`fixed md:static top-[70px] right-0  w-full md:w-auto 
          bg-white md:bg-transparent flex flex-col md:flex-row items-center gap-6 
          md:gap-12 p-6 md:p-0 shadow-lg md:shadow-none transform transition-transform 
          duration-300 ease-in-out z-[40]
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"} 
          md:translate-x-0`}
      >
        {["home", "about", "services", "work", "contact"].map((item) => (
          <li key={item} role="none">
            <AnchorLink
              className={`${
                menu === item ? "text-blue-800" : "text-gray-900 md:text-white"
              } hover:text-blue-500 transition text-xl md:text-base block px-0 md:px-0 lg:px-4 py-2 md:py-0`}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                handleMenuItemClick(item);
              }}
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
