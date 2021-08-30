import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as Nabz } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else setButton(true);
  };
  window.addEventListener("resize", showButton);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container2 container">
          <ul>
            <li className="nav-item">
              <Nabz to="/" className="nav-links">
                Главная
              </Nabz>
            </li>
            <li className="nav-item">
              <Nabz to="/" className="nav-links">
                Главная
              </Nabz>
            </li>
            <li className="nav-item">
              <Nabz to="/" className="nav-links">
                Главная
              </Nabz>
            </li>
            <li className="nav-item">
              <Nabz to="/" className="nav-links">
                Главная
              </Nabz>
            </li>
          </ul>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
