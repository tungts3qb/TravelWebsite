import React from "react";
import "./main.css";
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

const Data = [
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa ad quis eligendi vitae neque, illum expedita non, labore cupiditate numquam voluptate aut magnam omnis veritatis quaerat dolorum, suscipit et!",
  },
  {
    id: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1494459940152-1e911caa8cc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa ad quis eligendi vitae neque, illum expedita non, labore cupiditate numquam voluptate aut magnam omnis veritatis quaerat dolorum, suscipit et!",
  },
  {
    id: 3,
    imgSrc: "",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa ad quis eligendi vitae neque, illum expedita non, labore cupiditate numquam voluptate aut magnam omnis veritatis quaerat dolorum, suscipit et!",
  },
  {
    id: 4,
    imgSrc: "",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa ad quis eligendi vitae neque, illum expedita non, labore cupiditate numquam voluptate aut magnam omnis veritatis quaerat dolorum, suscipit et!",
  },
  {
    id: 5,
    imgSrc: "",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa ad quis eligendi vitae neque, illum expedita non, labore cupiditate numquam voluptate aut magnam omnis veritatis quaerat dolorum, suscipit et!",
  },
  {
    id: 6,
    imgSrc: "",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa ad quis eligendi vitae neque, illum expedita non, labore cupiditate numquam voluptate aut magnam omnis veritatis quaerat dolorum, suscipit et!",
  },
  {
    id: 7,
    imgSrc: "",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa ad quis eligendi vitae neque, illum expedita non, labore cupiditate numquam voluptate aut magnam omnis veritatis quaerat dolorum, suscipit et!",
  },
  {
    id: 8,
    imgSrc: "",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa ad quis eligendi vitae neque, illum expedita non, labore cupiditate numquam voluptate aut magnam omnis veritatis quaerat dolorum, suscipit et!",
  },
  {
    id: 9,
    imgSrc: "",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa ad quis eligendi vitae neque, illum expedita non, labore cupiditate numquam voluptate aut magnam omnis veritatis quaerat dolorum, suscipit et!",
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map((item) => {
          return (
            <div key={item.id} className="sigleDestination">
              <div className="imageDiv">
                <img src={item.imgSrc} alt={item.destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{item.destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{item.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {item.grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{item.fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{item.description}</p>
                </div>

                <button className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
