import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as Nabz } from "react-router-dom";

const Navbar = () => {
  const [navbar, setnavbar] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);

  const showNavbarBack = () => {
    if (window.scrollY >= 200) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };
  window.addEventListener("scroll", showNavbarBack);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="jol"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                className="nav-links"
              >
                Главная
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="jola"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                className="nav-links"
              >
                О нас
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="jolaa"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                className="nav-links"
              >
                Меню
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="jolaaaa"
                spy={true}
                smooth={true}
                offset={80}
                duration={1000}
                className="nav-links"
              >
                Контакты
              </Link>
            </li>
          </ul>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>

          <a href="tel:79610220220" className="navbar-logo">
            +7-961-022-0220
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
