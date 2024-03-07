import React from "react";
import banner from "../../../assets/images/banner.png";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../../../Components/Arrows";
const Banner = () => {
  const HiddenNextArrow = () => {
    return <SampleNextArrow style={{ display: "none" }} />; // Wrap SampleNextArrow with a wrapper component and apply display: none style
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 5000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    swipeToSlide: true,
    autoplay: true,
    nextArrow: <HiddenNextArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="w-full px-1">
          <img className="w-full" src={banner} alt="" />
        </div>
        <div className="w-full px-1">
          <img className="w-full" src={banner} alt="" />
        </div>
        <div className="w-full px-1">
          <img className="w-full" src={banner} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
