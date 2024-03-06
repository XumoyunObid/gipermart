import React from "react";
import useGetBrands from "../Service/Query/useGetBrands";
import BrandCard from "./Components/BrandCard";

const Brands = () => {
  const { data, isLoading } = useGetBrands();
  return (
    <div className="container mt-[40px]">
      <h1 className="text-2xl font-semibold">Популярные бренды</h1>
      <div className="grid grid-cols-7 gap-4 pt-6">
        {data?.map((item) => (
          <BrandCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
