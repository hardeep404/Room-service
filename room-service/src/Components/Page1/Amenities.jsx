import React from "react";
import "../../CSS/Amenities.css";
import workoutIcon from "../../assets/035-gym.svg";
import spaIcon from "../../assets/036-spa.svg";
import foodIcon from "../../assets/034-coffee shop.svg";
import poolIcon from "../../assets/030-swimming pool.svg";
import icon from "../../assets/XMLID_67_.svg";
import TextFunction from "../TextFunction";
import AddCTAButton from "../AddBtnSection";

const amenitiesData = [
  {
    icon: workoutIcon,
    title: "Workout & Yoga Rooms",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reverse: false,
  },
  {
    icon: spaIcon,
    title: "Spa, Massage & Sauna",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reverse: true,
  },
  {
    icon: foodIcon,
    title: "Multiple Cuisines & Beverages",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reverse: false,
  },
  {
    icon: poolIcon,
    title: "In Door Swimming Pool",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reverse: true,
  },
];

const Amenities = () => {
  return (
    <div className="amenities-wrapper">
      <div className="section">
        <div className="intro-section">
          <hr className="footer-divider12" />
          <p>introducing our services</p>
          <span>
            Amenities That You <br /> Can Enjoy
          </span>
        </div>
        <div className="lorem-text1">
          <TextFunction />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed
            do eiusmod tempor incididunt ut labore et dolore <br /> magna
            aliqua.
          </p>
        </div>
      </div>

      {amenitiesData.map((item, index) => (
        <div
          key={index}
          className={`amenity-container ${item.reverse ? "reverse" : ""}`}
        >
          <div className="image-placeholder"></div>
          <div className="amenity-content">
            <img src={item.icon} alt="icon" />
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
            <button>
              Discover More
              <img src={icon} alt="arrow icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Amenities;
