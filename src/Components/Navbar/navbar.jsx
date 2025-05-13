import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import qlogo from "../../images/qlogo.png";
import img3 from "../../images/img3.png";
import burger from "../../images/burger.png";
import burgerclose from "../../images/burgerclose.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
    document.querySelector(".nav-menu-close")?.focus();
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.querySelector(".nav-menu-open")?.focus();
  };

  // const menuRef = useRef();

  // const openMenu = () => {
  //   menuRef.current.style.right = "0";
  // };

  // const closeMenu = () => {
  //   menuRef.current.style.right = "-350";
  // };

  return (
    <nav aria-label className="navbar">
      <img src={qlogo} alt="Q" className="nav-logo" />
      {!menuOpen && (
        <img
          src={burger}
          onClick={openMenu}
          onKeyDown={(e) => e.key === "Enter" && openMenu()}
          alt="menu"
          className="nav-menu-open"
          tabIndex={0}
          role="button"
          aria-label="Open menu"
        />
      )}
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`} role="menubar">
        {menuOpen && (
          <img
            src={burgerclose}
            onClick={closeMenu}
            onKeyDown={(e) => e.key === "Enter" && closeMenu()}
            alt="close"
            className="nav-menu-close"
            tabIndex={0}
            role="button"
            aria-label="Close menu"
          />
        )}
        <li role="none">
          <AnchorLink className="anchor-link" href="#home" role="menuitem">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={img3} alt="" /> : <></>}
        </li>
        <li role="none">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#about"
            role="menuitem"
          >
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={img3} alt="" /> : <></>}
        </li>
        <li role="none">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#services"
            role="menuitem"
          >
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={img3} alt="" /> : <></>}
        </li>
        <li role="none">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#work"
            role="menuitem"
          >
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={img3} alt="" /> : <></>}
        </li>
        <li role="none">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            role="menuitem"
          >
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={img3} alt="" /> : <></>}
        </li>
      </ul>
      {/* <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div> */}
    </nav>
  );
};

export default Navbar;
