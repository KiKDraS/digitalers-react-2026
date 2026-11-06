import { useState } from "react";
import { DemoCard } from "../../../components/DemoCard";
import { UserProfile as UserProfileReact18 } from "./version-18/UserProfile";
import { UserProfile as UserProfileReact19 } from "./version-19/UserProfile";

export const ErrorBoundaryDemo = () => {
  const [fail, setFail] = useState(false);

  return (
    <DemoCard
      title="🛡️ ErrorBoundary + use(): errores asíncronos"
      version18={<UserProfileReact18 fail={fail} />}
      version19={<UserProfileReact19 fail={fail} />}
      docs={[
        {
          label: "use()",
          url: "https://es.react.dev/reference/react/use",
        },
        {
          label: "ErrorBoundary",
          url: "https://es.react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary",
        },
        {
          label: "Suspense",
          url: "https://es.react.dev/reference/react/Suspense",
        },
        {
          label: "lazy",
          url: "https://es.react.dev/reference/react/lazy",
        },
      ]}
    >
      <p className="mb-3">
        Ambos ejemplos llegan al <code>ErrorBoundary</code>. En React 18 el
        perfil se carga con <code>React.lazy</code> + <code>Suspense</code> y{" "}
        <code>useEffect</code>; si falla el fetch, guardamos el error y lo
        relanzamos en el render (<code>throw</code>) para que el boundary lo
        capture. En React 19, <code>use(promise)</code> suspende el componente
        mientras espera la promesa: <code>Suspense</code> muestra el spinner y,
        si la promesa se rechaza, el error llega directo al{" "}
        <code>ErrorBoundary</code>. Sin estados manuales ni throw extra.
      </p>
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="fail-switch"
          checked={fail}
          onChange={(e) => setFail(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="fail-switch">
          Simular error de carga
        </label>
      </div>
    </DemoCard>
  );
};
