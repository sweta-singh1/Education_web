import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* <div className="header-img">
        <img src="/public/Img2.jpg" alt="header-image" /> */}
      <div className="header-name">
        <h1>
          MY <span>PORTFOLIO</span>
        </h1>
      </div>

      <div className="search">
        <input className="search-box" type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;
