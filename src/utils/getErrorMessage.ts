// Utilidad: convierte un error desconocido en un mensaje legible.
// unknown: el error capturado puede ser cualquier valor.
export const getErrorMessage = (
  error: unknown,
  fallback = "Ocurrió un error",
): string => {
  if (error instanceof Error) return error.message;
  if (typeof error === "string" && error) return error;
  return fallback;
};
