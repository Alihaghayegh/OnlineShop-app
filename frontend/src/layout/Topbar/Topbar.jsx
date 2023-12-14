import React from "react";

import "./Topbar.css";
import logo from "../../assets/image/bag.png";
import more from "../../assets/image/more-64.png";

export default function Topbar() {
  return (
    <div>
      <div className="navbar-container">
        <div className="logo-more">
          <img src={more} alt="more" className="more" />
        </div>
        <div className="logo-home">
          <img src={logo} alt="logo" className="home" />
        </div>
        <ul className="navbar-list">
          <li className="navbar-content">محصولات</li>
          <li className="navbar-content">کافه</li>
          <li className="navbar-content">بلاگ</li>
          <li className="navbar-content">ارتباط با ما</li>
          <li className="navbar-content">درباره ما</li>
        </ul>
      </div>
    </div>
  );
}
