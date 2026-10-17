import { useState } from "react";
import { Button } from "./components/button/Button";
import ErrorBoundary from "./features/fetch-data/components/ErrorBoundary";
import UserProfile from "./features/fetch-data/UserProfile";
import { UserProfileLazy } from "./features/fetch-data/UserProfileLazy";
import { ChangePasswordForm } from "./features/formularios/ChangePasswordForm";
import { LoginForm } from "./features/formularios/LoginForm";

function App() {
  const [count, setCount] = useState(0);

  // 1. Trigger de re-render
  const handleClick = () => {
    // 2. Render x3

    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <main className="p-4">
      <h1>Clase 39</h1>

      <section className="container-lg p-4">
        <h2>Render vs Paint</h2>
        {/* text => 3. Paint */}
        <Button
          color="purple"
          text={`Count: ${count}`}
          handleClick={handleClick}
        />
      </section>

      <hr className="my-4" />

      <section className="container-lg p-4">
        <h3>Composición</h3>
        <p>
          La composición consiste en construir interfaces combinando componentes
          más pequeños y reutilizables
        </p>
        <p>
          Hablar de composición es lo mismo que decir usar la prop "children"
          para renderizar Componentes como contenido de otro Componente
        </p>
        <p>
          También mejora el rendimiento: cuando un Componente cambia su estado,
          React lo vuelve a renderizar, pero los elementos que recibe por props
          (como "children") se reutilizan sin renderizarse de nuevo, porque su
          referencia no cambió
        </p>
        <div className="d-flex justify-content-center align-items-start gap-4">
          <LoginForm />
          <ChangePasswordForm />
        </div>
      </section>

      <hr className="my-4" />

      <section className="container-lg p-4">
        <h3>Peticiones AJAX</h3>
        <div className="d-flex justify-content-center align-items-start gap-4">
          <div className="my-2 w-50 card">
            <div className="card-header">
              <h3>Perfil de Usuario</h3>
            </div>
            <ErrorBoundary
              fallback={
                <div className="p-2">
                  <div className="alert alert-danger">Error</div>
                </div>
              }
            >
              <UserProfile endpoint="/users/1" />
            </ErrorBoundary>
          </div>
          <UserProfileLazy endpoint="/user/1" />
        </div>
      </section>
    </main>
  );
}

export default App;
