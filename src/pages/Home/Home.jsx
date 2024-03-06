import React from "react";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Smartphones from "./Smartphones/Smartphones";
import Discount from "./Discount/Discount";
import Tab from "./Tab/Tab";
import Laptops from "./Laptops/Laptops";
import Brands from "./Brands/Brands";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Smartphones />
      <Discount />
      <Tab />
      <Smartphones />
      <Laptops />
      <Brands />
    </div>
  );
};

export default Home;
