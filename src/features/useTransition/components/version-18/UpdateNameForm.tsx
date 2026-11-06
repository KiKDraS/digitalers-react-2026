import { lazy, Suspense } from "react";
import { ErrorBoundary } from "../../../../components/errorBoundary/ErrorBoundary";
import { Spinner } from "../../../../components/Spinner";

// React.lazy: carga el contenido del formulario solo cuando se necesita.
const UpdateNameFormContent = lazy(() => import("./UpdateNameFormContent"));

// ❌ React 18: los errores de useEffect y del submit no llegan solos al
// boundary; el contenido los guarda y los relanza en el render.
export function UpdateNameForm() {
  return (
    <ErrorBoundary message="No se pudo cargar o guardar el usuario.">
      <Suspense fallback={<Spinner />}>
        <UpdateNameFormContent userId={1} />
      </Suspense>
    </ErrorBoundary>
  );
}
