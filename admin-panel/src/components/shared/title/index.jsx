import React from "react";
import "./styles.scss";

const Title = ({ text, size }) => {
  return (
    <h2 className={size === "small" ? "title small" : "title large"}>{text}</h2>
  );
};

export default Title;
