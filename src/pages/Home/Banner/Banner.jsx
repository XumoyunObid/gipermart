import React from "react";
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import banner3 from "../../../assets/images/banner3.png";
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
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    swipeToSlide: true,
    autoplay: true,
    nextArrow: <HiddenNextArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="w-full">
          <img className="w-full h-[465px]" src={banner1} alt="" />
        </div>
        <div className="w-full">
          <img className="w-full h-[465px]" src={banner2} alt="" />
        </div>
        <div className="w-full">
          <img className="w-full h-[465px]" src={banner3} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
