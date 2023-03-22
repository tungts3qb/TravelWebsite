import React from "react";
import "./footer.css";
import oceanVid from "../../Assets/oceanVid.mp4";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={oceanVid} loop autoPlay muted typeof="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                Travel.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
