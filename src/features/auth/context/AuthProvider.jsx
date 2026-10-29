import { createContext, useContext, useState } from "react";
import { authApi } from "../services/authApi";

// 1. Crear Contexto
const AuthContext = createContext(null);

// 2. Crear Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(authApi.loginCheck());
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const login = async (credentials) => {
    setIsLoggingIn(true);

    try {
      const userFromBackend = await authApi.login(credentials);
      setUser(userFromBackend);
      return userFromBackend;
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      setIsLoggingIn(false);
    }
  };

  const logout = () => {
    setUser(null);
    authApi.logout();
  };

  const updateName = (newName) => {
    const updatedUser = { ...user, name: newName };
    setUser(updatedUser);
    authApi.updateUser(updatedUser);
  };

  const data = { user, isLoggingIn, login, logout, updateName };

  return <AuthContext value={data}>{children}</AuthContext>;
};

// 3. Habilitar uso
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error(
      "useAutContext debe ser utilizado dentro de un AuthProvider",
    );

  return context;
};
