import React from "react";
import "./styles.scss";

const CustomCheckbox = (props) => {
  return (
    <div className="checkbox-container">
      <input
        className="input-checkbox"
        type="checkBox"
        onChange={() => props.setValue(!props.value)}
      />
      <label className="checkbox-label">{props.label}</label>
    </div>
  );
};

export default CustomCheckbox;
