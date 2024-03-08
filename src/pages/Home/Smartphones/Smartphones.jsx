import React from "react";
import MainCard from "../../../Components/Cards/MainCard";
import useGetProducts from "../Service/Query/useGetProducts";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../../../Components/Arrows";

const Smartphones = () => {
  const { data, isLoading } = useGetProducts();
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
    <div className="container overflow-hidden my-5 relative">
      <div className="pb-[28px]">
        <h1 className="text-2xl font-semibold">Смартфоны и планшеты</h1>
      </div>
      <div className="slider-container py-4">
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

export default Smartphones;
