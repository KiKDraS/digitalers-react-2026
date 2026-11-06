// Union type: ReactVersion solo puede ser "18" o "19".
export type ReactVersion = "18" | "19";

// as const: mantiene los valores exactos como literales ("18" y "19").
export const REACT_VERSIONS = {
  REACT_18: "18",
  REACT_19: "19",
} as const;

// ReactVersion: el valor por defecto debe ser "18" o "19".
export const DEFAULT_REACT_VERSION: ReactVersion = REACT_VERSIONS.REACT_18;

// Clave de localStorage para recordar la versión seleccionada.
export const REACT_VERSION_STORAGE_KEY = "digitalers-react-version";
