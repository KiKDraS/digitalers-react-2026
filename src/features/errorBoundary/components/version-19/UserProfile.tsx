import { getUserId } from "../../utils/getUserId";

// Interfaz: props del ejemplo React 19.
interface UserProfileProps {
  fail: boolean;
}

// ✅ React 19: use() + Suspense + ErrorBoundary, sin estados manuales.
export function UserProfile({ fail }: Readonly<UserProfileProps>) {
  const userId = getUserId(fail);

  return (
    <div>
      <h1>User Profile v19</h1>
    </div>
  );
}
