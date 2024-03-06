import React from "react";
import MainCard from "../../../Components/Cards/MainCard";
import useGetProducts from "../Service/Query/useGetProducts";
import { Link } from "react-router-dom";

const Smartphones = () => {
  const { data, isLoading } = useGetProducts();

  return (
    <div className="container overflow-hidden">
      <div className="pb-[28px]">
        <h1 className="text-2xl font-semibold">Смартфоны и планшеты</h1>
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

export default Smartphones;
