import React from "react";
import { Link } from "react-router-dom";
import MainCard from "../../../Components/Cards/MainCard";
import useGetLaptops from "../Service/Query/UseGetLaptops";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../../../Components/Arrows";

const Laptops = () => {
  const { data, isLoading } = useGetLaptops();
  const settings = {
    // focusOnSelect: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container overflow-hidden mt-[50px]">
      <div className="pb-[28px]">
        <h1 className="text-2xl font-semibold">
          Ноутбуки, планшеты и компьютеры
        </h1>
      </div>
      <div className="slider-container py-5">
        <ul>
          <Slider {...settings}>
            {data?.map((item) => (
              <li key={item.id}>
                <MainCard {...item} />
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </div>
  );
};

export default Laptops;
