import React from "react";
import CustomTitle from "../../shared/title";
import IconAddress from "../../../assets/svg/IconAddress";
import { useAuth } from "../../../contexts/AuthContext";
import CustomButton from "../../shared/button";
import "./styles.scss";
import IconHome from "../../../assets/svg/IconHome";
import CustomSubtitle from "../../shared/subtitle";
import { formatString } from "../../../utils";

const MyAdresses = () => {
  const { user } = useAuth();

  return (
    <section className="myAddresses-container">
      <div className="title-container">
        <IconAddress width="30px" color="#f27d52" />
        <CustomTitle text="Meus Endereços" />
      </div>
      <div className="myAddresses-content-container">
        {user.address.map((address, index) => {
          return (
            <div className="myAddresses-item-container">
              <div className="title-container">
                <IconHome width="30px" color="#f27d52" />
                <CustomSubtitle text={`Endereço ${index + 1}`} />
              </div>
              <ul>
                <li>
                  {formatString(address.street)}, {address.number}
                </li>
                <li>{address.district}</li>
                <li>
                  {formatString(address.city)} - {address.stateCode}
                </li>
                <li>CEP {address.cep}</li>
              </ul>
              <div>
                <CustomButton text="Excluir" />
                <CustomButton text="Alterar" buttonType="main-button" />
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <CustomButton text="Adicionar novo endereço" buttonType="main-button" />
      </div>
    </section>
  );
};

export default MyAdresses;
