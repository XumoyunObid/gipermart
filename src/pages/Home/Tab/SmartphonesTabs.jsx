import React from "react";
import useGetProducts from "../Service/Query/useGetProducts";
import TabCard from "./Components/TabCard";
import { Link } from "react-router-dom";

const SmartphonesTabs = () => {
  const { data, isLoading } = useGetProducts();
  return (
    <div>
      <h1 className="text-2xl">Смартфоны и планшеты</h1>
      <div className="py-[40px] flex  flex-col gap-8">
        {data?.slice(0, 3).map((item) => (
          <Link key={item.id} to={`/products/${item.id}`}>
            <TabCard {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SmartphonesTabs;
