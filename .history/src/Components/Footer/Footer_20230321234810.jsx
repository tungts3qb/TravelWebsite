import React from "react";
import "./footer.css";
import oceanVid from "../../Assets/oceanVid.mp4";

const Footer = () => {
  return (
    <section className="footer">
      <video src={oceanVid} loop autoPlay muted typeof="video/mp4"></video>
    </section>
  );
};

export default Footer;
