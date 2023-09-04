import React from "react";
import "./styles.scss";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <p className="error-message">{message}</p>
    </div>
  );
};

export default ErrorMessage;
