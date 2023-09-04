import React from "react";
import "./styles.scss";

const ShowPassword = (props) => {
  return (
    <div className="showPassword-container">
      <input
        className="input-checkbox"
        type="checkBox"
        onChange={() => props.setValue(!props.value)}
      />
      <label className="checkbox-label">Exibir senha</label>
    </div>
  );
};

export default ShowPassword;
