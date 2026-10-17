import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { Spinner } from "./components/Spinner";

// Me había olvidado del import y que con lazy, el componente debe tener un export default
const UserProfileDetails = lazy(() => import("./UserProfile"));

export const UserProfileLazy = (props) => {
  const errorFallback = ({ reset }) => (
    <div className="d-flex flex-column gap-2 p-2">
      <div className="alert alert-danger mb-0">
        No se pudo cargar el componente de perfil.
      </div>
      <button className="btn btn-primary btn-sm w-25" onClick={reset}>
        Reintentar
      </button>
    </div>
  );

  return (
    <div className="my-2 w-50 card">
      <div className="card-header">
        <h3>Perfil de Usuario (Lazy Loaded)</h3>
      </div>
      <ErrorBoundary fallback={errorFallback}>
        <Suspense fallback={<Spinner />}>
          <UserProfileDetails {...props} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
