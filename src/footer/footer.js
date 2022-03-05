import React from "react";
import arrow from "../images/right-arrows.png";
import logo from "../images/Abstract Circle 1.png";
import TwitterLogo from "../images/TwitterLogo.png";
import FacebookLogo from "../images/FacebookLogo.png";

import InstagramLogo from "../images/InstagramLogo.png";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="flex justify-between"
          style={{ width: "70%", margin: "100px 0" }}
        >
          <div>
            <div className="high-lighter strong sub-main-text mb-5">
              Try For Free!
            </div>
            <label>Get limited 1 week free try our features!</label>
          </div>
          <div className="flex items-center">
            <div className="highlight-mini-btn">
              <span className="mx-auto">Learn more</span>
            </div>
            <div className="highlight-mini-btn">
              <span style={{ color: "#9465D7" }}>Request Demo</span>
              <img className="ml-4" width={26} src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="flex high-lighter mt-5">
              <img className="logo-prop" src={logo} alt="logo" />
              <span className="high-lighter comp-title my-auto ml-3">
                Insigna
              </span>
            </div>
            <div>
              <div
                className="high-lighter px-2"
                style={{ fontSize: "16px", margin: "40px 0" }}
              >
                Insignia Society, 234
                <div>Bahagia Ave Street PRBW 29281</div>
              </div>
            </div>
            <div>
              <div
                className="high-lighter px-2"
                style={{ fontSize: "16px", margin: "40px 0" }}
              >
                info@insignia.com
                <div>1-232-3434 (Main)</div>
              </div>
            </div>
          </div>
          <div className="high-lighter mx-4" style={{ fontSize: "16px" }}>
            <div style={{ margin: "40px" }}>About</div>
            <div style={{ margin: "40px" }}>
              <div className="my-4">Profile</div>
              <div className="my-4">Features</div>
              <div className="my-4">Careers</div>
              <div className="my-4">DW News</div>
            </div>
          </div>
          <div className="high-lighter mx-4" style={{ fontSize: "16px" }}>
            <div style={{ margin: "40px" }}>Help</div>
            <div style={{ margin: "40px" }}>
              <div className="my-4">Support</div>
              <div className="my-4">Sign up</div>
              <div className="my-4">Guide</div>
              <div className="my-4">Reports</div>
              <div className="my-4">Q&A</div>
            </div>
          </div>
          <div className="high-lighter mx-4" style={{ fontSize: "16px" }}>
            <div style={{ margin: "40px" }}>Social Media</div>
            <div className="flex" style={{ marginLeft: "25px" }}>
              <img
                className="icon-cont"
                width="50px"
                src={FacebookLogo}
                alt="bird"
              />
              <img
                className="icon-cont"
                width="50px"
                src={TwitterLogo}
                alt="bird"
              />
              <img
                className="icon-cont"
                width="50px"
                src={InstagramLogo}
                alt="bird"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            margin: "80px 0",
            fontSize: "12px",
            width: "70%",
          }}
          className="high-lighter mr-auto"
        >
          © Insignia™, 2020. All rights reserved.
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
