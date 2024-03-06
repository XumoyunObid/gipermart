import React from "react";
import { Link } from "react-router-dom";
import MainCard from "../../../Components/Cards/MainCard";
import useGetLaptops from "../Service/Query/UseGetLaptops";

const Laptops = () => {
  const { data, isLoading } = useGetLaptops();
  return (
    <div className="container overflow-hidden mt-[50px]">
      <div className="pb-[28px]">
        <h1 className="text-2xl font-semibold">
          Ноутбуки, планшеты и компьютеры
        </h1>
      </div>
      <ul className="flex items-center gap-6 overflow-x-scroll example">
        {data?.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>
              <MainCard {...item} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Laptops;
