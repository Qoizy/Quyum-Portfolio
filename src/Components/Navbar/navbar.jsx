import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // const menuRef = useRef();

  // const openMenu = () => {
  //   menuRef.current.style.right = "0";
  // };

  // const closeMenu = () => {
  //   menuRef.current.style.right = "-350";
  // };

  return (
    <div className="navbar">
      <img src="assets/q-logo.png" alt="Q" className="nav-logo" />
      {!menuOpen && (
        <img
          src="assets/burger.png"
          onClick={openMenu}
          alt="menu"
          className="nav-menu-open"
        />
      )}
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        {menuOpen && (
          <img
            src="assets/burger-close.png"
            onClick={closeMenu}
            alt="close"
            className="nav-menu-close"
          />
        )}
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src="assets/img3.png" alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src="assets/img3.png" alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src="assets/img3.png" alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src="assets/img3.png" alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src="assets/img3.png" alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
