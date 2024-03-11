import React from "react";
import useGetCategories from "../Service/Query/UseGetCategories";
import CategoryCard from "./Components/CategoryCard";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Categories = () => {
  const { data, isLoading } = useGetCategories();
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    autoplay: true,
    arrows: false,
  };
  return (
    <div className="container mt-8">
      <div className="slider-container">
        <ul className="">
          <Slider {...settings}>
            {data?.map((item) => (
              <li key={item.id}>
                <Link to={`/category/${item.datakey}`}>
                  <CategoryCard {...item} />
                </Link>
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
