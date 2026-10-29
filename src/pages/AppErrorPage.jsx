import { Section } from "../components/Section";
import { ROUTES } from "./constants";
import { getErrorMessage } from "./utils/getErrorMessage";

export const AppErrorPage = ({ error, onRetry }) => {
  const message = getErrorMessage(error);

  return (
    <main className="container mt-4">
      <Section>
        <div className="alert alert-danger text-center" role="alert">
          <h4 className="alert-heading">⚠️ Error de la aplicación</h4>
          <p>
            Ocurrió un error inesperado al iniciar la aplicación. Podés intentar
            de nuevo o recargar la página.
          </p>
          {message && (
            <p className="small text-break mb-0">
              <code>{message}</code>
            </p>
          )}
          <hr />
          <div className="d-flex justify-content-center align-items-center gap-3">
            {onRetry && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={onRetry}
              >
                Reintentar
              </button>
            )}
            <a href={ROUTES.HOME} className="btn btn-outline-secondary">
              Volver al inicio
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
};
