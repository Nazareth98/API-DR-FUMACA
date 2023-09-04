import React, { useEffect, useState } from "react";
import "./styles.scss";
import Footer from "../footer";
import { useLocation } from "react-router-dom";
import CustomSubtitle from "../shared/subtitle";
import CustomInput from "../shared/input";
import CustomCheckbox from "../shared/checkbox";
import CustomButton from "../shared/button";
import ShowPassword from "../shared/showPassword";
import { formatCpf, formatPhoneNumber } from "../../utils";
import CustomTitle from "../shared/title";

const SignUp = (props) => {
  const [formattedCpf, setFormattedCpf] = useState("");
  const [formattedPhone, setFormattedPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("X");
  const [dayNumber, setDayNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [district, setDistrict] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [city, setCity] = useState("");
  const options = [
    { value: "M", label: "Masculino" },
    { value: "F", label: "Feminino" },
    { value: "X", label: "Outro" },
  ];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const emailPersist = location.state?.email || "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (emailPersist) {
      setEmail(emailPersist);
    }
  }, [emailPersist]);

  const fetchAddressFromCEP = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      if (response.ok) {
        const addressData = await response.json();

        setStreet(addressData.logradouro || "");
        setComplement(addressData.complemento || "");
        setDistrict(addressData.bairro || "");
        setCity(addressData.localidade || "");
        setStateCode(addressData.uf || "");
      } else {
        console.error("Erro ao buscar endereço:", response.status);
      }
    } catch (error) {
      console.error("Erro ao buscar endereço:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="section signup-background">
        <div className="main-container signUp-container">
          <div className="forms-container">
            <div className="signUp-form-container">
              <CustomTitle text="Cadastrar-se" />
              <span>* campos obrigatórios</span>
              <form>
                <CustomInput
                  label="Nome *"
                  placeholder="Digite seu nome"
                  type="text"
                  value={name}
                  setValue={setName}
                  size="medium-input"
                />
                <CustomInput
                  label="Sobrenome *"
                  placeholder="Digite seu sobrenome"
                  type="text"
                  value={lastName}
                  setValue={setLastName}
                  size="medium-input"
                />
                <CustomInput
                  label="CPF *"
                  placeholder="Somente números"
                  type="text"
                  value={formattedCpf}
                  onChange={(e) => {
                    const formatted = formatCpf(e.target.value);
                    setCpf(e.target.value);
                    setFormattedCpf(formatted);
                  }}
                  size="medium-input"
                />

                <CustomCheckbox
                  label="Genêro *"
                  value={gender}
                  options={options}
                  checked={gender}
                  onChange={(e) => setGender(e.target.value)}
                  name="gender"
                  size="large-input"
                />
                <CustomInput
                  label="Dia *"
                  placeholder="DD"
                  type="number"
                  value={dayNumber}
                  setValue={setDayNumber}
                  min="1"
                  max="31"
                  size="small-input"
                />
                <CustomInput
                  label="Mês *"
                  placeholder="MM"
                  type="number"
                  value={month}
                  setValue={setMonth}
                  min="1"
                  max="12"
                  size="small-input"
                />
                <CustomInput
                  label="Ano *"
                  placeholder="AAAA"
                  type="number"
                  value={year}
                  setValue={setYear}
                  min="1900"
                  max="2023"
                  size="small-input"
                />

                <CustomInput
                  label="Telefone *"
                  placeholder="Somente números"
                  type="text"
                  value={formattedPhone}
                  setValue={setPhone}
                  size="large-input"
                  onChange={(e) => {
                    const formatted = formatPhoneNumber(e.target.value);
                    setPhone(e.target.value);
                    setFormattedPhone(formatted);
                  }}
                />
                <CustomInput
                  label="CEP *"
                  placeholder="Somente números"
                  type="text"
                  value={cep}
                  setValue={setCep}
                  size="large-input"
                  onBlur={fetchAddressFromCEP}
                />
                <CustomInput
                  label="Rua *"
                  placeholder="Nome da rua"
                  type="text"
                  value={street}
                  setValue={setStreet}
                  size="large-input"
                  disabled={loading}
                />
                <CustomInput
                  label="Número *"
                  placeholder="Número"
                  type="text"
                  value={number}
                  setValue={setNumber}
                  size="small-input"
                />
                <CustomInput
                  label="Complemento"
                  placeholder="Complemento"
                  type="text"
                  value={complement}
                  setValue={setComplement}
                  size="medium-input"
                />
                <CustomInput
                  label="Bairro *"
                  placeholder="Digite o nome do bairro"
                  type="text"
                  value={district}
                  setValue={setDistrict}
                  size="medium-input"
                  disabled={loading}
                />
                <CustomInput
                  label="Estado *"
                  placeholder="UF"
                  type="text"
                  value={stateCode}
                  setValue={setStateCode}
                  size="small-input"
                  disabled={loading}
                />
                <CustomInput
                  label="Cidade *"
                  placeholder="Digite o nome da cidade"
                  type="text"
                  value={city}
                  setValue={setCity}
                  size="large-input"
                  disabled={loading}
                />
              </form>
            </div>
            <div className="account-form-container">
              <CustomSubtitle text="Dados da conta" />
              <div>
                <CustomInput
                  label="Email *"
                  placeholder="Digite seu email"
                  type="email"
                  value={email}
                  setValue={setEmail}
                />
                <CustomInput
                  label="Senha *"
                  placeholder="Digite sua senha"
                  type={isVisible ? "text" : "password"}
                  value={password}
                  setValue={setPassword}
                />
                <CustomInput
                  label="Confirmar senha *"
                  placeholder="Confirme sua senha"
                  type={isVisible ? "text" : "password"}
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                />
                <ShowPassword value={isVisible} setValue={setIsVisible} />
              </div>
              <CustomButton text="Continuar" buttonType="main-button" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
