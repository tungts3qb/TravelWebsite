import React, { useState } from "react";
import "./navbar.css";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <MdOutlineModeOfTravel className="icon" />
            <h1>Travel.</h1>
          </a>
        </div>

        <div className="navBar">
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Pakages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                New
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
          <div className="closeNavBar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
