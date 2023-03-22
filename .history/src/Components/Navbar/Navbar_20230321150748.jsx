import React from "react";
import "./navbar.css";
import { MdOutlineModeOfTravel } from "react-icons/md";

const Navbar = () => {
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
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
