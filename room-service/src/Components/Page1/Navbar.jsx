import React from "react";
import "../../CSS/Navbar.css";
import logo from "../../assets/Vector.png";
import logo1 from "../../assets/VectorS.png";
import NavDropdown from "../../Components/other/NavDropDown";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="rectangle">
      <nav className="navbar">
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
        <ul className="navbar-menu">
          <NavDropdown title="HOME" options={["HOME1", "HOME2"]} />
          <li className="simple-li">ABOUT</li>
          <li className="simple-li">SERVICE</li>
          <li className="simple-li">
            <Link to="/not" className="simple-link">Go to Second Page</Link>
          </li>
          <NavDropdown
            title="PAGES"
            options={["ROOM", "SINGLE ROOM", "BLOG", "SINGLE BLOG", "404 PAGE"]}
          />
          <li className="simple-li">CONTACT US</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
