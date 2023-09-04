import React, { useState } from "react";
import IconHome from "../../assets/svg/IconHome";
import "./styles.scss";
import Input from "../shared/input";
import Button from "../shared/button";
import Title from "../shared/title";
import ErrorMessage from "../shared/errorMessage";
import CustomCheckbox from "../shared/checkbox";
import { useAuth } from "../../contexts/AuthContext";

const SignIn = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSignIn(event);
    }
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    if (email.length < 1 || password.length < 1) {
      setError("Preencha todos os campos para fazer Login.");
      return null;
    }

    const userData = {
      email,
      password,
    };
    login(userData);
  };

  return (
    <div className="container">
      <div className="singIn-container">
        <div className="singIn-box singIn-title">
          <IconHome width="30px" />
          <Title text="Painel de Controle" size="large" />
        </div>
        <div className="singIn-box">
          <Input
            placeholder="Digite seu email..."
            type="email"
            value={email}
            setValue={setEmail}
            label="Email:"
            autoComplete="email"
            name="email"
          />
          <Input
            placeholder="Digite sua senha..."
            type={isVisible ? "text" : "password"}
            value={password}
            setValue={setPassword}
            label="Senha:"
            name="password"
            autoComplete="current-password"
            onKeyPress={handleKeyPress}
          />
          <div>
            <CustomCheckbox
              label="Exibir senha"
              value={isVisible}
              setValue={setIsVisible}
            />
          </div>
        </div>
        <div className="singIn-box">
          <Button
            text="Entrar"
            buttonType="main-button"
            onClick={handleSignIn}
          />
        </div>
        {error ? <ErrorMessage message={error} /> : null}
      </div>
    </div>
  );
};

export default SignIn;
