import React, { useState, useEffect } from "react";
import "./styles.scss";

const CustomSelect = (props) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (props.value) {
      setSelectedValue(props.value);
    }
  }, [props.value]);

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
    props.onSelect(selectedOption);
  };

  return (
    <div>
      <label className="label">{props.label}</label>
      <select className="select" onChange={handleChange} value={selectedValue}>
        <option value="" disabled>
          Selecione a categoria do produto
        </option>
        {props.options.map((item, index) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
