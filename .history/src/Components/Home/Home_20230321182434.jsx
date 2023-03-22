import React from "react";
import "./home.css";
import motorBoatVid from "../../Assets/motorBoatVid.mp4";
import { GrLocation } from "react-icons/gr";

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

        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destnation:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here ..." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="city">Select your date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="peiceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
