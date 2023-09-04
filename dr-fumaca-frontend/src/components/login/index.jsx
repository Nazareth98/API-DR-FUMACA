import React, { useEffect, useState } from "react";
import "./styles.scss";
import Footer from "../footer";
import CustomButton from "../shared/button";
import CustomSubtitle from "../shared/subtitle";
import CustomInput from "../shared/input";
import { useScreenSize } from "../../contexts/ScreenSizeContext";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../shared/errorMessage";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { isMobile } = useScreenSize();
  const { user, login, errorMessage } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin(event);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (email.length < 1 || password.length < 1) {
      setError("Preencha todos os campos para fazer Login.");
      return null;
    }
    const userData = {
      email,
      password,
    };

    try {
      login(userData);

      if (errorMessage) {
        setError(errorMessage);
      }
    } catch (err) {
      if (errorMessage) {
        setError(errorMessage);
      }
      console.error(error);
    }
  };

  if (user) {
    navigate("/");
  }

  return (
    <>
      <div className="main-container login-container">
        <div className="form-container">
          <div>
            <div>
              <CustomSubtitle text="Já sou cliente" />
            </div>
            <form>
              <CustomInput
                label="Email"
                placeholder="Digite seu email"
                type="email"
                value={email}
                setValue={setEmail}
                autoComplete="email"
                name="email"
              />
              <CustomInput
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                value={password}
                setValue={setPassword}
                name="password"
                autoComplete="current-password"
                onKeyPress={handleKeyPress}
              />
            </form>

            <div>
              <CustomButton
                text="Entrar"
                buttonType="main-button"
                onClick={handleLogin}
              />
            </div>
            {error ? <ErrorMessage message={error} /> : null}
            {isMobile ? (
              <div>
                <CustomButton text="Acessar com Google" />
              </div>
            ) : null}
          </div>

          <div>
            <div>
              <CustomSubtitle text="Criar conta" />
            </div>
            <form>
              <CustomInput
                label="Email"
                placeholder="Digite seu email"
                type="email"
                value={email}
                setValue={setEmail}
              />
            </form>
            <div>
              <CustomButton
                text="Prosseguir"
                buttonType="main-button"
                onClick={() => navigate("/cadastrar", { state: { email } })}
              />
            </div>
          </div>
        </div>

        <div className="socialLogin-container">
          <CustomButton text="Acessar com Google" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
