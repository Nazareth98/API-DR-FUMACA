import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const RoundedImage = ({ img }) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-image" onClick={() => navigate("/produtos")}>
      <img src={img} alt="Rounded" />
    </div>
  );
};

export default RoundedImage;
