import React from "react";
import "./home.css";
import motorBoatVid from "../../Assets/motorBoatVid.mp4";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={motorBoatVid} muted autoPlay loop typeof="video/mp4"></video>

      <div className="homeContent container"></div>
    </section>
  );
};

export default Home;
