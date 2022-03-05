import React from "react";
import leftArrow from "../../images/left-arrow-white.png";
import rightArrow from "../../images/right-arrow-white.png";
import ellipseColor from "../../images/Ellipse-color.png";
import ellipse from "../../images/Ellipse.png";
import ratingEllipseActive from "../../images/rating-active.png";
import ratingEllipse from "../../images/rating.png";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";

const testimonialList = [
  {
    img: img1,
    desc: " Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    role: "Web Designer",
    name: "John Fang",
    rating: (
      <div className="flex">
        <img src={ratingEllipseActive} width={40} height={40} alt="test" />
        <img src={ratingEllipseActive} width={40} height={40} alt="test" />
        <img src={ratingEllipseActive} width={40} height={40} alt="test" />
        <img src={ratingEllipseActive} width={40} height={40} alt="test" />
        <img src={ratingEllipse} width={40} height={40} alt="test" />
      </div>
    ),
  },
  {
    img: img2,
    desc: " Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    role: "UX Designer",
    name: "Jenny Doe",
    rating: (
      <div className="flex">
        <img src={ratingEllipseActive} width={40} height={40} alt="test" />
        <img src={ratingEllipseActive} width={40} height={40} alt="test" />
        <img src={ratingEllipseActive} width={40} height={40} alt="test" />
        <img src={ratingEllipseActive} width={40} height={40} alt="test" />
        <img src={ratingEllipseActive} width={40} height={40} alt="test" />
      </div>
    ),
  },
];

const Testimonial = () => {
  const list = testimonialList.map((data) => {
    return (
      <div className="testi-card">
        <div className="mr-3">
          <img
            width={80}
            height={80}
            style={{ borderRadius: "50px" }}
            src={data.img}
            alt={data.name}
          />
        </div>
        <div>
          <div className="flex">
            <div className="ml-3">
              <div
                className="high-lighter strong mb-2 mr-4"
                style={{ fontSize: "24px" }}
              >
                {data.name}
              </div>
              <div style={{ color: "#9465D7", fontSize: "14px" }}>
                {data.role}
              </div>
            </div>
            <div className="mt-auto">{data.rating}</div>
          </div>
          <div className="testi-desc">{data.desc}</div>
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
        <span className="my-auto mr-2">
          <img src={ellipseColor} alt="active" />
        </span>
        <span className="my-auto mx-2">
          <img src={ellipse} alt="inactive" />
        </span>
        <span className="my-auto mx-2">
          <img src={ellipse} alt="inactive" />
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

export default Testimonial;
