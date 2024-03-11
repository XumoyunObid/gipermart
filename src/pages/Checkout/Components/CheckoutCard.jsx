import React from "react";

const CheckoutCard = ({ img, title, userCount, price }) => {
  return (
    <div className="flex justify-between w-full items-center p-2 mb-3 border-2">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-[100px] h-[100px]">
          <img src={img} alt="" />
        </div>
        <h3 className="text-base">{title}</h3>
      </div>
      <p className="text-base">
        {userCount} x <span className="text-xl font-medium">{price} Сум</span>
      </p>
    </div>
  );
};

export default CheckoutCard;
