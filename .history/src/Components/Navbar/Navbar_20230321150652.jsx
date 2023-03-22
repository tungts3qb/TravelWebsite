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
              <a href="home" className="navLink">
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
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
