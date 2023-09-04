import { createContext, useContext, useState } from "react";
import { postData } from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // Inicialize como uma string vazia

  const login = async ({ email, password, token }) => {
    try {
      const response = await postData("clientes/login", {
        email,
        password,
        token,
      });
      if (!response.success) {
        console.log(response.message);
        setErrorMessage(response.message);
      } else {
        console.log(response);
        const userData = response.user;
        localStorage.setItem("token", response.token);
        setUser(userData);
        setErrorMessage(""); // Limpe o erro em caso de sucesso
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message); // Defina apenas a mensagem de erro como uma string
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ errorMessage, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
