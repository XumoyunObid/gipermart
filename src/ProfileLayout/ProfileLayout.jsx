import React from "react";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div className="flex justify-between gap-[160px]">
      <ul>
        <li>Персональные данные</li>
        <li>Персональные данные</li>
        <li>Персональные данные</li>
        <li>Персональные данные</li>
        <li>Персональные данные</li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
