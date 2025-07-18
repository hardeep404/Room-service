import React, { useState, useRef, useEffect } from "react";
import icon from "../../assets/XMLID_55_.png"; 
import "../../CSS/NavDropdown.css"
import { Link } from "react-router-dom";

const NavDropdown = ({ title, options = [] }) => {
  const [show, setIcon] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIcon(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
<li className="dropdown-wrapper" ref={dropdownRef} onClick={() => setIcon(!show)}>
      <span className="dropdown-title">{title}</span>
      <img
        src={icon}
        alt="dropdown arrow"
        className={`dropdown-icon ${show ? "rotate" : ""}`}
      />
      <div className={`dropdown-list ${show ? "show" : ""}`}>
        {options.map((option, idx) => (
          <div key={idx} className="dropdown-item">
            {option}
          </div>
        ))}
      </div>
    </li>
  );
};

export default NavDropdown;
