import React from "react";
import "./footer.css";
import oceanVid from "../../Assets/oceanVid.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTripadvisor } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

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
                <MdOutlineTravelExplore className="icon" />
                Travel.
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit
              quas delectus quo accusamus dolore aliquid, provident ea. Ex
              voluptas quibusdam nobis sint nisi, cum corrupti ipsum
              exercitationem culpa? Commodi.
            </div>

            <div className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
