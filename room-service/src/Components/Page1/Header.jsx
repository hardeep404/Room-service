import React from "react";
import "../../CSS/Header.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Amenities from "./Amenities";
import BookingForm from "./BookingForm";
import AddCTAButton from "../AddBtnSection";

function Header() {
  return (
    <div className="top-container">
      <div className="main-container">
        <div className="set-space">
          <Navbar />
        </div>
        <hr className="footer-divider1" />
        <span className="our-services">our Services</span>
        <span className="p-text">
          Introducing Our <br /> Best Services
        </span>
        <div className="add-btn-space">
          <AddCTAButton />
        </div>
      </div>
      <div className="space-all">
        <Amenities />
      </div>
      <div className="space-from">
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
}

export default Header;
