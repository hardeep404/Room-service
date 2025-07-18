import React from "react";
import "../../CSS/NotFoundPage.css";
import icon from "../../assets/XMLID_67_.svg";
import Navbar from "../Page1/Navbar";
import Footer from "../Page1/Footer";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="top-container-boss">
        <div className="set-space">
          <Navbar />
        </div>
        <div className="main-con">
          <span>404</span>
          <p>Oops!! Something Is Missing</p>
          <h5>
            Sorry But The Page You Are Looking For Does Not Exist, Have Been
            Removed, Name <br /> Changed Or Is Temporarily Unavailable
          </h5>
          <div>
            <Link className="link-edit" to={"/"}>
              Back To Home
              <img src={icon} alt="arrow icon" />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NotFoundPage;
