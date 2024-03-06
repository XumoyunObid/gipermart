import React from "react";
import discount1 from "../../../assets/images/discount1.png";
import discount2 from "../../../assets/images/discount2.png";
import discount3 from "../../../assets/images/discount3.png";

const Discount = () => {
  return (
    <div className="py-[30px] px-[40px] bg-primary mt-8">
      <div className="container">
        <h1 className="text-2xl font-semibold">Акции</h1>
        <div className="flex items-center justify-between pt-[30px]">
          <img src={discount1} alt="" />
          <img src={discount2} alt="" />
          <img src={discount3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
