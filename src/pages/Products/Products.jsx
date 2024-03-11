import React from "react";
import { useParams } from "react-router-dom";
import useGetAllCategories from "../Home/Service/Query/useGetAllCategories";
import MainCard from "../../Components/Cards/MainCard";

const Products = () => {
  const { datakey } = useParams();
  const { data } = useGetAllCategories(datakey);
  return (
    <div>
      <div className="container">
        <h1 className="text-2xl font-semibold py-6">Продукты</h1>
        <div className="flex items-start justify-between gap-6">
          <div className="grid grid-cols-4 gap-3 w-3/4">
            {data?.map((item) => (
              <MainCard key={item.id} {...item} />
            ))}
          </div>
          <div className="border w-1/4">
            <p>sort</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
