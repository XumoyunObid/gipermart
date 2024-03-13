import React from "react";
import Button from "../../Components/UI/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col text-center">
        <h1 className="text-[250px]">404</h1>
        <p className="text-[50px] py-4">Page not found ...</p>
        <Button variant="primary" onClick={handleBack}>
          Back to home page
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
