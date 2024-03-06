import React from "react";

const TabCard = ({ img, title, price }) => {
  return (
    <div className="flex items-center gap-5 h-[157px]">
      <div className="w-2/5 flex items-center justify-center">
        <img className="w-[140px] h-[140px]" src={img} alt="" />
      </div>
      <div className="w-3/5 flex flex-col gap-[50px] items-start">
        <h1 className="text-lg">{title}</h1>
        <p className="text-lg font-semibold">{price} Сум</p>
      </div>
    </div>
  );
};

export default TabCard;
