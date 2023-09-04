import React from "react";
import "./styles.scss";

const CustomTitle = (props) => {
  return (
    <h2 className="custom-title" {...props}>
      {props.text}
    </h2>
  );
};

export default CustomTitle;
