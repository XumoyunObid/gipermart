import React from "react";

const CategoryCard = ({ img, title }) => {
  return (
    <div className="flex items-center w-[240px] h-[154px] p-[15px] bg-neutral">
      <div className="flex items-center justify-center w-1/2">
        <img src={img} alt="" />
      </div>
      <div className="flex items-center justify-center w-1/2">
        <h1 className="text-base">{title}</h1>
      </div>
    </div>
  );
};

export default CategoryCard;
