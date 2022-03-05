import React from "react";
import cloud from "../images/Cloud_database.png";
import security from "../images/security_SVG.png";
import phone from "../images/Phone.png";
import "./Main.css";
import FeaturesCard from "./featuresCard/featuresCard";
import Testimonial from "./testimonial/testimonial";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex" style={{ width: "70%", margin: "100px 0" }}>
          <div style={{ padding: "45px 0" }}>
            <div className="heading strong high-lighter">
              Save your data storage here.
            </div>
            <div className="sub-para">
              Insignia is a data storage area that has been tested for security,
              so you can store your data here safely but not be afraid of being
              stolen by others.
            </div>
            <div
              className="highlight-btn"
              style={{
                fontSize: "20px",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <span className="mx-auto">Learn more</span>
            </div>
          </div>

          <img width={300} height={450} src={cloud} alt="cloud" />
        </div>
        <div className="sub-main-cont">
          <img src={security} alt="sec" width={300} height={220} />
          <div style={{ padding: "0 50px" }}>
            <div className="high-lighter strong sub-main-text">
              We are a high-level data storage bank
            </div>
            <div className="sub-para" style={{ width: "100%" }}>
              The place to store various data that you can access at any time
              through the internet and where you can carry it.
              <div>
                This very flexible storage area has a high level of security. To
                enter into your own data you must enter the password that you
                created when you registered in this Data Warehouse.
              </div>
            </div>
          </div>
        </div>
        <div
          className="sub-main-cont"
          style={{ display: "block", height: "170vh", position: "relative" }}
        >
          <div className="high-lighter strong sub-main-text mb-5">Features</div>
          <FeaturesCard />
        </div>
        <div className="sub-main-cont" style={{ display: "block" }}>
          <div className="high-lighter strong sub-main-text">
            Download Our App
          </div>
          <div className="sub-para" style={{ width: "50%" }}>
            The place to store various data that you can access at any time
            through the internet and where you can carry it.
            <div>
              This very flexible storage area has a high level of security. To
              enter into your own data you must enter the password that you
              created when you registered in this Data Warehouse.
            </div>
            <div
              className="highlight-btn"
              style={{
                fontSize: "20px",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <span className="mx-auto">Download</span>
            </div>
          </div>
          <img src={phone} alt="phone" className="phone" />
        </div>
        <div
          className="sub-main-cont"
          style={{ display: "block", height: "110vh", position: "relative" }}
        >
          <div className="high-lighter strong sub-main-text mb-5">
            Testimonial
          </div>
          <Testimonial />
        </div>
        <div className="flex" style={{ margin: "50px 0" }}>
          <div>
            <div className="high-lighter strong sub-main-text mb-5">
              Subscribe !
            </div>
            <label>Join our newsletter to never miss any latest news.</label>
          </div>
          <div
            style={{
              position: "relative",
            }}
          >
            <input
              type="email"
              className="mail-input"
              placeholder="Enter your e-mail address here"
            />
            <div className="join-us">Join Us</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
