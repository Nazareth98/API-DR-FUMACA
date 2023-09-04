import React from "react";
import "./styles.scss";

const CustomSubtitle = (props) => {
  return (
    <h3 className="custom-subtitle" {...props}>
      {props.text}
    </h3>
  );
};

export default CustomSubtitle;
