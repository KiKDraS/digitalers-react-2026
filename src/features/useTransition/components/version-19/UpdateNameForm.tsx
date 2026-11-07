import { Suspense } from "react";
import { ErrorBoundary } from "../../../../components/errorBoundary/ErrorBoundary";
import { Spinner } from "../../../../components/Spinner";
import UpdateNameFormContent from "../version-18/UpdateNameFormContent";

export const UpdateNameForm = () => {
  return (
    <ErrorBoundary message="No se pudo cargar o guardar el usuario.">
      <Suspense fallback={<Spinner />}>
        <UpdateNameFormContent userId={1} />
      </Suspense>
    </ErrorBoundary>
  );
};
