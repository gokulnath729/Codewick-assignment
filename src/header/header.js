import React from "react";
import logo from "../images/Abstract Circle 1.png";
import arrow from "../images/right-arrows.png";
class Header extends React.Component {
  render() {
    return (
      <div className="head-cont">
        <img className="logo-prop" src={logo} alt="logo" />
        <span className="high-lighter comp-title">Insigna</span>
        <div className="d-flex ml-auto">
          <label className="high-lighter mx-4">About</label>
          <label className="mx-4">Help</label>
          <label className="mx-4">Features</label>
          <label className="mx-4">Signup</label>
        </div>
        <div className="highlight-btn high-lighter">
          <label>Request Demo</label>
          <img className="ml-4" width={26} src={arrow} alt="arrow" />
        </div>
      </div>
    );
  }
}

export default Header;
