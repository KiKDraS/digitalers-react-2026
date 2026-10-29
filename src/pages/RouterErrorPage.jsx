import { useRouteError } from "react-router";
import { Button } from "../components/button/Button";
import { Section } from "../components/Section";
import { THEME } from "../features/theme/constants";
import { useThemeContext } from "../features/theme/context/useThemeContext";
import { ROUTES } from "./constants";
import { getErrorMessage } from "./utils/getErrorMessage";

export const ErrorPage = ({ error, onRetry }) => {
  const { isLightTheme } = useThemeContext();
  const buttonColor = isLightTheme ? THEME.DARK : THEME.LIGHT;
  const message = getErrorMessage(error);

  return (
    <main className="container mt-4">
      <Section>
        <div className="alert alert-danger text-center" role="alert">
          <h4 className="alert-heading">⚠️ Algo salió mal</h4>
          <p>
            Ocurrió un error inesperado. Podés intentar de nuevo o volver al
            inicio.
          </p>
          {message && (
            <p className="small text-break mb-0">
              <code>{message}</code>
            </p>
          )}
          <hr />
          <div className="d-flex justify-content-center align-items-center gap-3">
            {onRetry && (
              <Button text="Reintentar" onClick={onRetry} color={buttonColor} />
            )}
            {/* Recarga completa para reiniciar el estado de la app después del error. */}
            <a
              href={ROUTES.HOME}
              className={`btn ${isLightTheme ? "btn-dark" : "btn-light"}`}
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
};

export const RouterErrorPage = () => {
  const error = useRouteError();

  return <ErrorPage error={error} onRetry={() => window.location.reload()} />;
};
