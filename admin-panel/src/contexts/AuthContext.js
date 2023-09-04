import { createContext, useContext, useState } from "react";
import { postData } from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Aqui você pode armazenar informações do usuário logado

  const login = async ({ email, password }) => {
    try {
      const response = await postData("admins/login", { email, password }); // Envia solicitação para a API
      const userData = response.user;
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
