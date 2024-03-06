import React from "react";
import useGetCategories from "../Service/Query/UseGetCategories";
import CategoryCard from "./Components/CategoryCard";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data, isLoading } = useGetCategories();
  return (
    <ul className="grid grid-cols-6 gap-5 overflow-hidden py-8 pl-[40px]">
      {data?.map((item) => (
        <li key={item.id}>
          <Link>
            <CategoryCard {...item} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
