// IDs de la API: uno válido y otro inexistente para el demo de error.
const USER_ID = 1;
const MISSING_USER_ID = 999999;

// Devuelve el id que se usará para cargar el usuario.
export const getUserId = (fail: boolean) =>
  fail ? MISSING_USER_ID : USER_ID;
