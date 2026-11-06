import { lazy, Suspense } from "react";
import { ErrorBoundary } from "../../../../components/errorBoundary/ErrorBoundary";
import { Spinner } from "../../../../components/Spinner";
import { getUserId } from "../../utils/getUserId";

// React.lazy: carga el contenido del perfil solo cuando se necesita.
const UserProfileContent = lazy(() => import("./UserProfileContent"));

// Interfaz: props del ejemplo React 18.
interface UserProfileProps {
  fail: boolean;
}

// ❌ React 18: el ErrorBoundary no captura errores de useEffect por sí solo.
// El contenido guarda el error y lo relanza en el render para que el boundary lo vea.
export function UserProfile({ fail }: Readonly<UserProfileProps>) {
  const userId = getUserId(fail);

  return (
    <ErrorBoundary key={String(userId)} message="No se pudo cargar el usuario.">
      <Suspense fallback={<Spinner />}>
        <UserProfileContent userId={userId} />
      </Suspense>
    </ErrorBoundary>
  );
}
