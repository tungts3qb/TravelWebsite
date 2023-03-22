import React, { useEffect } from "react";
import "./main.css";
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";
import Aos, { init } from "aos";
import "aos/dist/aos.css";

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
    imgSrc:
      "https://images.unsplash.com/photo-1520242279429-1f64b18816ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa ad quis eligendi vitae neque, illum expedita non, labore cupiditate numquam voluptate aut magnam omnis veritatis quaerat dolorum, suscipit et!",
  },
  {
    id: 4,
    imgSrc:
      "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa ad quis eligendi vitae neque, illum expedita non, labore cupiditate numquam voluptate aut magnam omnis veritatis quaerat dolorum, suscipit et!",
  },
  {
    id: 5,
    imgSrc:
      "https://images.unsplash.com/photo-1518022525094-218670c9b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa ad quis eligendi vitae neque, illum expedita non, labore cupiditate numquam voluptate aut magnam omnis veritatis quaerat dolorum, suscipit et!",
  },
  {
    id: 6,
    imgSrc:
      "https://images.unsplash.com/photo-1548678967-f1aec58f6fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa ad quis eligendi vitae neque, illum expedita non, labore cupiditate numquam voluptate aut magnam omnis veritatis quaerat dolorum, suscipit et!",
  },
  {
    id: 7,
    imgSrc:
      "https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa ad quis eligendi vitae neque, illum expedita non, labore cupiditate numquam voluptate aut magnam omnis veritatis quaerat dolorum, suscipit et!",
  },
  {
    id: 8,
    imgSrc:
      "https://images.unsplash.com/photo-1474433188271-d3f339f41911?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa ad quis eligendi vitae neque, illum expedita non, labore cupiditate numquam voluptate aut magnam omnis veritatis quaerat dolorum, suscipit et!",
  },
  {
    id: 9,
    imgSrc:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa ad quis eligendi vitae neque, illum expedita non, labore cupiditate numquam voluptate aut magnam omnis veritatis quaerat dolorum, suscipit et!",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
