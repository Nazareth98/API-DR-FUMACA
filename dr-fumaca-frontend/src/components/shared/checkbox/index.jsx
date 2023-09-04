import React from "react";
import "./styles.scss";

const CustomCheckbox = ({ label, options, checked, onChange, name, size }) => {
  const checkboxClasses = `checkbox-container ${size}`;

  return (
    <div className={checkboxClasses}>
      <div>
        <label htmlFor="gender" className="label">
          {label}
        </label>
      </div>
      <div className="options-container">
        {options.map((option, index) => (
          <div>
            <input
              key={index}
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
              checked={checked === option.value}
              onChange={onChange}
            />
            <label className="label" htmlFor={option.value}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCheckbox;
