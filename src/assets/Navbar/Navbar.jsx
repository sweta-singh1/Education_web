import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-section">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Education</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
