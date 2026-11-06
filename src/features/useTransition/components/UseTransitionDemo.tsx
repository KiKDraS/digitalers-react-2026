import { DemoCard } from "../../../components/DemoCard";
import { UpdateNameForm as UpdateNameFormReact18 } from "./version-18/UpdateNameForm";
import { UpdateNameForm as UpdateNameFormReact19 } from "./version-19/UpdateNameForm";

export const UseTransitionDemo = () => (
  <DemoCard
    title="🔄 useTransition: actualizaciones no urgentes"
    version18={<UpdateNameFormReact18 />}
    version19={<UpdateNameFormReact19 />}
    docs={[
      {
        label: "useTransition",
        url: "https://es.react.dev/reference/react/useTransition",
      },
    ]}
  >
    <p className="mb-3">
      El foco de esta pestaña es <code>useTransition</code>. En{" "}
      <span className="text-danger">React 18</span> el flag manual{" "}
      <code>isSaving</code> deshabilita el input y el botón mientras responde la
      API: el usuario queda bloqueado. En{" "}
      <span className="text-success">React 19</span> el guardado se marca como
      una transición no urgente: el input sigue disponible,{" "}
      <code>isPending</code> muestra el estado pendiente y el nombre guardado
      aparece cuando termina la transición. En ambas versiones el usuario y el
      guardado quedan bajo un <code>ErrorBoundary</code>: React 18 guarda el
      error y lo relanza en el render; React 19 lo propaga desde{" "}
      <code>use()</code> y la transición.
    </p>
  </DemoCard>
);
