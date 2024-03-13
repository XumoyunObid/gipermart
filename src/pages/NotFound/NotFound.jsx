import React from "react";
import Button from "../../Components/UI/Button";
import { useNavigate } from "react-router-dom";
import "./css/style.css";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - The Page can't be found</h2>
        </div>
        <a href="/">Go TO Homepage</a>
      </div>
    </div>
  );
};

export default NotFound;
