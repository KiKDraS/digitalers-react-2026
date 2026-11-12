import { Suspense, use } from "react";
import { ErrorBoundary } from "../../../../components/errorBoundary/ErrorBoundary";
import { Spinner } from "../../../../components/Spinner";
import { UserProfileCard } from "../../../users/components/UserProfileCard";
import { userApi } from "../../../users/services/userApi";
import type { User } from "../../../users/types/User";
import { getUserId } from "../../utils/getUserId";

interface UserProfileViewProps {
  userId: number;
}

// ✅ use(): el servicio devuelve la misma promesa desde el Map.
// Si la promesa se rechaza, el error llega directo al ErrorBoundary.
function UserProfileView({ userId }: Readonly<UserProfileViewProps>) {
  const user = use(userApi.getById(userId));

  return <UserProfileCard user={user} />;
}

// Interfaz: props del ejemplo React 19.
interface UserProfileProps {
  fail: boolean;
}

// ✅ React 19: use() + Suspense + ErrorBoundary, sin estados manuales.
export function UserProfile({ fail }: Readonly<UserProfileProps>) {
  const userId = getUserId(fail);

  return (
    <ErrorBoundary key={String(userId)} message="No se pudo cargar el usuario">
      <Suspense fallback={<Spinner />}>
        <UserProfileView userId={userId} />
      </Suspense>
    </ErrorBoundary>
  );
}

interface UserProfileViewPromise {
  promise: Promise<User>;
}

// La prop genera cache de promesa para evitar loop infinito
// Si la promesa se rechaza, el error llega directo al ErrorBoundary.
function UserProfileViewPromise({ promise }: Readonly<UserProfileViewPromise>) {
  const user = use(promise);

  return <UserProfileCard user={user} />;
}

const promiseUser = async (): Promise<User> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Error al obtener la información del usuario");
  }
  return res.json();
};

// ✅ React 19: use() + Suspense + ErrorBoundary, sin estados manuales.
export function UserProfilePromise({ fail }: Readonly<UserProfileProps>) {
  const userId = getUserId(fail);
  const promise = fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => {
      if (!res.ok) {
        throw new Error("Error al obtener la información del usuario");
      }
      return res.json() as Promise<User>;
      // return res.json();
    },
  );
  // const promise = promiseUser();

  return (
    <ErrorBoundary key={String(userId)} message="No se pudo cargar el usuario">
      <Suspense fallback={<Spinner />}>
        <UserProfileViewPromise promise={promise} />
      </Suspense>
    </ErrorBoundary>
  );
}
