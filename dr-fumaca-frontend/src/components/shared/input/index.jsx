import React from "react";
import "./styles.scss";

const CustomInput = (props) => {
  return (
    <div className={props.size}>
      <label className="label">{props.label}</label>
      <input
        className="input"
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        maxLength={props.maxLength}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
