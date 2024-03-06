import React from "react";
import SmartphonesTabs from "./SmartphonesTabs";
import ComputersAndLaptops from "./ComputersAndLaptops";

const Tab = () => {
  return (
    <div className="py-4 container">
      <ul className="flex items-center justify-between">
        <li>
          <SmartphonesTabs />
        </li>
        <li>
          <ComputersAndLaptops />
        </li>
        <li>
          <SmartphonesTabs />
        </li>
      </ul>
    </div>
  );
};

export default Tab;
