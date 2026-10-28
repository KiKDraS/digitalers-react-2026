import { createContext, useContext, useState } from "react";
import { USER_STORAGE_KEY } from "../constants";
import { assignRole } from "../utils/roles";
import { createToken } from "../utils/tokenHelpers";

// 1. Crear Contexto
const AuthContext = createContext(null);

// 2. Crear Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "ADMIN", email: "admin@test.com" });

  const login = (username) => {
    const user = { username, role: assignRole(username) };
    setUser(user);

    // Generar token
    const token = createToken(user);
    localStorage.setItem(USER_STORAGE_KEY, token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_STORAGE_KEY);
  };

  const data = { user, login, logout };

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
