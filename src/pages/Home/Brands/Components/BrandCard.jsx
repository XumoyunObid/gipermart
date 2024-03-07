import React from "react";

const BrandCard = ({ img }) => {
  return (
    <div className="flex items-center justify-center bg-neutral p-8 w-[180px] h-[90px]">
      <img className="object-contain aspect-[3/2]" src={img} alt="" />
    </div>
  );
};

export default BrandCard;
