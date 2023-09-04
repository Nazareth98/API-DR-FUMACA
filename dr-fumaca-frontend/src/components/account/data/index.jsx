import React, { useEffect, useState } from "react";
import "./styles.scss";
import IconPerson from "../../../assets/svg/IconPerson";
import CustomTitle from "../../shared/title";
import { useAuth } from "../../../contexts/AuthContext";
import CustomInput from "../../shared/input";
import CustomCheckbox from "../../shared/checkbox";
import CustomButton from "../../shared/button";

const MyData = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const options = [
    { value: "M", label: "Masculino" },
    { value: "F", label: "Feminino" },
    { value: "X", label: "Outro" },
  ];
  const { user } = useAuth();

  useEffect(() => {
    setEmail(user.email);
    setPhone(user.phone);
    setGender(user.gender);
  }, []);

  return (
    <section className="myData-container">
      <div className="title-container">
        <IconPerson width="30px" color="#f27d52" />
        <CustomTitle text="Meus Dados" />
      </div>
      <span>* todos os campos são obrigatórios</span>
      <div className="myData-content-container">
        <div>
          <CustomInput
            label="Email"
            type="email"
            placeholder="Digite seu email"
            value={email}
            setValue={setEmail}
          />
          <CustomInput
            label="Telefone"
            placeholder="Digite seu telefone"
            value={phone}
            setValue={setPhone}
          />
          <CustomCheckbox
            label="Genêro *"
            value={gender}
            options={options}
            checked={gender}
            onChange={(e) => setGender(e.target.value)}
            name="gender"
          />
        </div>
      </div>
      <CustomButton text="Salvar alterações" buttonType="main-button" />
    </section>
  );
};

export default MyData;

/*
{
    "customerId": 1,
    "name": "PATRICK",
    "lastName": "DA SILVA NAZARETH",
    "email": "patrick@gmail.com",
    "password": "$2b$10$EpthLMIJRs9WxYzsgtbSN.ozwxZawIT7oS5eOwy3cdKpB24aypcFa",
    "cpf": "08194729998",
    "phone": "45998550838",
    "gender": "M",
    "dateOfBirth": "1998-04-17",
    "address": [
        {
            "addressId": 6,
            "cep": "83055250",
            "street": "RUA DOMINGOS RIBEIRO",
            "number": "206",
            "district": "IPÊ",
            "complement": "APTO 03",
            "city": "SÃO JOSÉ DOS PINHAIS",
            "stateCode": "PR",
            "status": 1,
            "customerId": 1
        },
        {
            "addressId": 8,
            "cep": "83055250",
            "street": "RUA DOMINGOS NOVO",
            "number": "206",
            "district": "IPÊ",
            "complement": "APTO 03",
            "city": "SÃO JOSÉ DOS PINHAIS",
            "stateCode": "PR",
            "status": 1,
            "customerId": 1
        }
    ]
}
*/
