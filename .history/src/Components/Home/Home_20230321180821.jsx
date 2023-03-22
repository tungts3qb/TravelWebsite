import React from "react";
import "./home.css";
import motorBoatVid from "../../Assets/motorBoatVid.mp4";
import "../Home/home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={motorBoatVid} muted autoPlay loop typeof="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Our Pakages</span>

          <h1 className="homeTitle">Search your Holidays</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
