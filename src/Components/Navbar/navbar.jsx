    import React, { useState, useEffect } from "react";
    import "./Navbar.css";
    import AnchorLink from "react-anchor-link-smooth-scroll";
    import qlogo from "../../images/qlogo.png";
    import img3 from "../../images/img3.png";
    import { useGSAP } from "@gsap/react";
    import { gsap } from "gsap/all";

    const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (menuItem) => {
        setMenu(menuItem);
        setIsMenuOpen(false);
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
        <nav className="navbar" aria-label="Main navigation">
        <img src={qlogo} alt="Q logo" className="nav-logo" />

        {/* Hamburger Menu */}
        <div className="hamburger">
            <input
            type="checkbox"
            id="hamburger-input"
            checked={isMenuOpen}
            onChange={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="hamburger-checkbox"
            />
            <label htmlFor="hamburger-input" className="hamburger-label">
            <span className="hamburger-line line1"></span>
            <span className="hamburger-line line2"></span>
            <span className="hamburger-line line3"></span>
            </label>
        </div>

        <ul
            className={`nav-menu ${isMenuOpen ? "open" : ""}`}
            role="menubar"
            aria-hidden={!isMenuOpen}
        >
            {["home", "about", "services", "work", "contact"].map((item) => (
            <li key={item} role="none">
                <AnchorLink
                className="anchor-link"
                offset={item === "home" ? 0 : 50}
                href={`#${item}`}
                role="menuitem"
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
                {/* {menu === item && <img src={img3} alt="" aria-hidden="true" />} */}
                </AnchorLink>
            </li>
            ))}
        </ul>
        </nav>
    );
    };

    export default Navbar;
