import React from "react";
import "./styles.scss";

const Textarea = (props) => {
  return (
    <>
      <label className="label">{props.label}</label>
      <textarea
        className="textarea"
        placeholder="Digite a descrição..."
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        rows={props.rows}
      />
    </>
  );
};

export default Textarea;
