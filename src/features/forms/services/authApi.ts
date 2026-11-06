import type { LoginCredentials, LoginResult } from "../types/Login";

// API pública de prueba para el login.
const LOGIN_API_URL = "https://api.escuelajs.co/api/v1/auth/login";

// Servicio: agrupa las llamadas relacionadas con autenticación.
export const authApi = {
  // Promise<LoginResult>: valida las credenciales y devuelve el resultado.
  login: async ({
    email,
    password,
  }: LoginCredentials): Promise<LoginResult> => {
    const response = await fetch(LOGIN_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 401) {
      return { success: false, message: "Correo o contraseña incorrectos" };
    }

    if (!response.ok) {
      throw new Error("No se pudo iniciar sesión");
    }

    return { success: true, message: "¡Bienvenido de nuevo!" };
  },
};
