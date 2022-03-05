import React from "react";
import Printer from "../../images/Printer.png";
import ShieldCheck from "../../images/ShieldCheck.png";
import ClipboardText from "../../images/ClipboardText.png";
import arrow from "../../images/right-arrows.png";
import leftArrow from "../../images/left-arrow-white.png";
import rightArrow from "../../images/right-arrow-white.png";
import ellipseColor from "../../images/Ellipse-color.png";
import ellipse from "../../images/Ellipse.png";

const featuresList = [
  {
    logo: ClipboardText,
    feature: "Security Code",
    desc: "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
  },
  {
    logo: Printer,
    feature: "Search Data",
    desc: "Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.",
  },
  {
    logo: ShieldCheck,
    feature: "Print Out",
    desc: "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
  },

  {
    logo: Printer,
    feature: "Search Data",
    desc: "Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.",
  },
];

const FeaturesCard = () => {
  const list = featuresList.map((data) => {
    return (
      <div className="feature-card">
        {" "}
        <img src={data.logo} alt={data.feature} className="mx-auto" />
        <div className="high-lighter strong my-4">{data.feature}</div>
        <div
          style={{
            whiteSpace: "pre-line",
            minHeight: "200px",
            fontSize: "16px",
          }}
          className="mb-5"
        >
          {data.desc}
        </div>
        <div className="flex my-5 high-lighter">
          Learn more <img width={24} className="ml-5" src={arrow} alt="arrow" />
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="list-scroll mt-5">{list}</div>
      <div
        className="flex"
        style={{ position: "absolute", bottom: 80, marginLeft: 30 }}
      >
        <span className="my-auto">
          <img src={ellipseColor} alt="active" />
        </span>
        <span className="my-auto mx-2">
          <img src={ellipse} alt="inactive" />
        </span>
      </div>

      <div
        className="flex"
        style={{ position: "absolute", bottom: 80, right: 80 }}
      >
        <img
          src={leftArrow}
          width={35}
          height={25}
          alt="leftArrow"
          className="mx-3"
        />
        <img src={rightArrow} width={25} alt="rightArrow" />
      </div>
    </React.Fragment>
  );
};

export default FeaturesCard;
