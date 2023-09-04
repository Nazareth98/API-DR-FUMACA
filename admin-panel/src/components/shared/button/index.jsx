import React from "react";
import "./styles.scss";

const CustomButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={
        props.buttonType === "main-button"
          ? "button main-button"
          : "button aside-button"
      }
      {...props}
    >
      {props.text}
    </button>
  );
};

export default CustomButton;
