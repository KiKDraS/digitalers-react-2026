// Interfaz: credenciales que recibe el login.
export interface LoginCredentials {
  email: string;
  password: string;
}

// Interfaz: resultado del login.
export interface LoginResult {
  success: boolean;
  message: string;
}
