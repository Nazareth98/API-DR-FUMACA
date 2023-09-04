import React from "react";
import Title from "../../shared/title";
import IconArrowLeft from "../../../assets/svg/IconArrowLeft";
import "./styles.scss";

const Initial = () => {
  return (
    <div className="initial-container">
      <Title text="Seja muito bem vindo(a)!" />
      <div className="initial-section">
        <IconArrowLeft width="60px" />
        <p>
          Para acessar algum de nossos menus, selecione o menu desejado ao lado.
        </p>
      </div>
    </div>
  );
};

export default Initial;
