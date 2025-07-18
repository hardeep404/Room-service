import React from "react";
import "../../CSS/Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Vector.png";
import logo1 from "../../assets/VectorS.png";
import insta from "../../assets/insta.svg";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/t.svg";
import O from "../../assets/o.svg";
import p from "../../assets/p.svg";
import logo3 from "../../assets/XMLID_67_.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section logo-section">
          <div className="navbar-logo">
            <div className="logo-container">
              <img src={logo} alt="Imperial Logo" className="logo-back" />
              <img src={logo1} alt="Imperial mid" className="logo-mid" />
            </div>
            <div className="navbar-brand">
              <h1>IMPERIAL</h1>
              <span>GRAND HOTEL</span>
            </div>
          </div>
          <p className="footer-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed
            do eiusmod tempor incididunt ut labore et <br /> dolore magna
            aliqua.
          </p>
          <hr className="footer-divider" />
          <p className="para-year">
            © 2025 Imperial Grand Hotel. All Rights Reserved.
          </p>
        </div>

        <div className=" links-section">
          <h3 className="footer-heading">USEFUL LINKS</h3>
          <ul>
            <li>
              <Link className="link-class" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="link-class" to="/about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link className="link-class" to="/services">
                SERVICE
              </Link>
            </li>
            <li>
              <Link className="link-class" to="/rooms">
                ROOM
              </Link>
            </li>
          </ul>
          <div className="footer-social">
            <span>
              <img src={twitter} alt="image" />
            </span>
            <span>
              <img src={fb} alt="image" />
            </span>
            <span>
              <img src={insta} alt="image" />
            </span>
            <span>
              <img src={p} alt="image" />
            </span>
            <span>
              <img src={O} alt="image" />
            </span>
          </div>
        </div>
        <div className="footer-section subscribe-section">
          <h3 className="footer-heading">SUBSCRIBE</h3>
          <p>
            Don't miss to subscribe our news, <br /> kindly fill the form bellow
          </p>
          <div className="subscribe-form">
            <input type="email" placeholder="Your Email Here" />
            <button>
              <img src={logo3} alt="img" />
            </button>
          </div>
            <hr className="hardeep" />
          <div className="footer-bottom">
            <div className="footer-policies">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
