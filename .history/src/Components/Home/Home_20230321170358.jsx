import React from "react";
import "./home.css";
import motorBoatVid from "../../Assets/motorBoatVid.mp4";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={motorBoatVid} typeof="video/mp4"></video>
    </section>
  );
};

export default Home;
