import React from "react";

import "./navbar.css";
import logo from "../../assets/image/bag.png";

export default function Navbar() {
  return (
    <div>
      <div className="navbar-container">
        <div className="main-logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="navbar-contents">
          <li className="navbar-content">خانه</li>
          <li className="navbar-content">محصولات</li>
          <li className="navbar-content">ارتباط با ما</li>
          <li className="navbar-content">درباره ما</li>
        </ul>
      </div>
    </div>
  );
}
