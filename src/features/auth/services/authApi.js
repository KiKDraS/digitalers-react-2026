import { USER_STORAGE_KEY } from "../constants";
import { decodeToken, setSessionToken } from "../utils/tokenHelpers";

// "Base de datos" de usuarios del backend
const MOCK_USERS = [
  {
    id: 1,
    email: "admin@test.com",
    password: "1234",
    name: "ADMIN",
  },
  {
    id: 2,
    email: "user@test.com",
    password: "1234",
    name: "USER",
  },
];

const simulateNetworkDelay = (ms = 800) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const authApi = {
  login: async ({ email, password }) => {
    await simulateNetworkDelay();

    const userFound = MOCK_USERS.find(
      (user) => user.email === email && user.password === password,
    );

    if (!userFound) {
      throw new Error("Credenciales inválidas");
    }

    // El backend NUNCA retorna contraseña
    const userWithoutPassword = { ...userFound };
    delete userWithoutPassword.password;

    // Simular creación Cookie HTTP Only
    setSessionToken(userWithoutPassword);

    return userWithoutPassword;
  },
  loginCheck: () => {
    const sessionToken = localStorage.getItem(USER_STORAGE_KEY);
    return sessionToken ? decodeToken(sessionToken) : null;
  },
  logout: () => {
    // Simular destrucción de Cookie HTTP Only
    localStorage.removeItem(USER_STORAGE_KEY);
  },
  updateUser: (updatedUser) => {
    // Simular la actualización de la Cookie HTTP Only
    setSessionToken(updatedUser);
  },
};
