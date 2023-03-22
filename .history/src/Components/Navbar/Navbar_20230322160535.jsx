import React, { useState } from "react";
import "./navbar.css";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const closeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="./home" className="logo flex">
            <MdOutlineModeOfTravel className="icon" />
            <h1>Travel.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="./home" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="./pakages" className="navLink">
                Pakages
              </a>
            </li>

            <li className="navItem">
              <a href="./shop" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="./about" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="./pages" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a href="./new" className="navLink">
                New
              </a>
            </li>

            <li className="navItem">
              <a href="./contact" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="./booknow">BOOK NOW</a>
            </button>
          </ul>
          <div onClick={closeNav} className="closeNavBar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
