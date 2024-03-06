import React from "react";
import useGetLaptops from "../Service/Query/UseGetLaptops";
import TabCard from "./Components/TabCard";
import { Link } from "react-router-dom";

const ComputersAndLaptops = () => {
  const { data, isLoading } = useGetLaptops();
  return (
    <div>
      <h1 className="text-2xl">Ноутбуки, планшеты и компьютеры</h1>
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

export default ComputersAndLaptops;
