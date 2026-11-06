import { REACT_VERSIONS, type ReactVersion } from "../constants/reactVersion";

// Interfaz: props que recibe VersionToggle.
interface VersionToggleProps {
  version: ReactVersion;
  // Función que recibe la nueva versión y no devuelve nada (void).
  onChange: (version: ReactVersion) => void;
}

export const VersionToggle = ({ version, onChange }: VersionToggleProps) => (
  <fieldset className="btn-group btn-group-sm" aria-label="Versión de React">
    <button
      type="button"
      className={`btn ${version === REACT_VERSIONS.REACT_18 ? "btn-outline-danger active" : "btn-outline-secondary"}`}
      onClick={() => onChange(REACT_VERSIONS.REACT_18)}
    >
      React 18 (antes)
    </button>
    <button
      type="button"
      className={`btn ${version === REACT_VERSIONS.REACT_19 ? "btn-outline-success active" : "btn-outline-secondary"}`}
      onClick={() => onChange(REACT_VERSIONS.REACT_19)}
    >
      React 19 (ahora)
    </button>
  </fieldset>
);
