import React from "react";
import discount1 from "../../../assets/images/discount1.png";
import discount2 from "../../../assets/images/discount2.png";
import discount3 from "../../../assets/images/discount3.png";
import Slider from "react-slick";

const Discount = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    focusOnSelect: true,
  };
  return (
    <div className="py-[30px] bg-primary mt-8">
      <div className="container">
        <h1 className="text-2xl font-semibold py-4">Акции</h1>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="">
              <img src={discount1} alt="" />
            </div>
            <div className="">
              <img src={discount2} alt="" />
            </div>
            <div className="px-5">
              <img src={discount3} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Discount;
