import {
  DEFAULT_REACT_VERSION,
  REACT_VERSIONS,
  REACT_VERSION_STORAGE_KEY,
  type ReactVersion,
} from "../constants/reactVersion";

// isStoredReactVersion: valida que el string guardado sea "18" o "19".
const isStoredReactVersion = (value: string | null): value is ReactVersion =>
  value === REACT_VERSIONS.REACT_18 || value === REACT_VERSIONS.REACT_19;

// Lee la versión guardada; si no es válida o falla el acceso, usa el default.
export const readStoredReactVersion = (): ReactVersion => {
  try {
    const storedVersion = localStorage.getItem(REACT_VERSION_STORAGE_KEY);
    return isStoredReactVersion(storedVersion)
      ? storedVersion
      : DEFAULT_REACT_VERSION;
  } catch {
    return DEFAULT_REACT_VERSION;
  }
};

// Guarda la versión; si localStorage no está disponible, no rompe la app.
export const writeStoredReactVersion = (version: ReactVersion): void => {
  try {
    localStorage.setItem(REACT_VERSION_STORAGE_KEY, version);
  } catch {
    // Sin acceso a localStorage: la selección sigue funcionando en memoria.
  }
};
