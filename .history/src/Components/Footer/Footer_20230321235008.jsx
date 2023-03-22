import React from "react";
import "./footer.css";
import oceanVid from "../../Assets/oceanVid.mp4";

const Footer = () => {
  return (
    <section className="footer">
      <video src={oceanVid} loop autoPlay muted typeof="video/mp4"></video>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
