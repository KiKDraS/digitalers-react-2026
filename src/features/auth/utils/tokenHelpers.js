/*
  Permite la simulación de trabajo con JWT "token".

  NO APTO PARA PRODUCCIÓN
*/

// Simular creación de JWT
export const createToken = (user) => {
  try {
    const userString = JSON.stringify(user);
    return btoa(userString); // Crear string Base64 para simular JWT
  } catch (error) {
    console.error("Error creating token", error);
    return null;
  }
};

// Simular decodificación de JWT
export const decodeToken = (token) => {
  try {
    const userJson = atob(token); // Convierte string Base64 en string normal
    return JSON.parse(userJson);
  } catch (error) {
    console.error("Error decoding token", error);
    return null;
  }
};
