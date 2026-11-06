import { DemoCard } from "../../../components/DemoCard";
import { CommentForm as CommentFormReact18 } from "./version-18/CommentForm";
import { CommentForm as CommentFormReact19 } from "./version-19/CommentForm";

export const UseOptimisticDemo = () => (
  <DemoCard
    title="⚡ useOptimistic: UI inmediata mientras llega la API"
    version18={<CommentFormReact18 />}
    version19={<CommentFormReact19 />}
    docs={[
      {
        label: "useOptimistic",
        url: "https://es.react.dev/reference/react/useOptimistic",
      },
    ]}
  >
    <p className="mb-3">
      Agrega un comentario y observa la lista. En{" "}
      <span className="text-danger">React 18</span> el comentario aparece cuando
      termina la API y el formulario queda bloqueado con <code>isSaving</code>.
      En <span className="text-success">React 19</span>{" "}
      <code>useOptimistic</code> agrega el comentario al instante con un
      indicador de pendiente; <code>useTransition</code> (ya visto en la pestaña
      anterior) ejecuta el guardado y la lista se confirma cuando responde la
      API. Si el guardado falla, ambas versiones muestran el fallback del{" "}
      <code>ErrorBoundary</code>: React 18 relanza el error en el render y
      React 19 lo propaga desde la transición.
    </p>
  </DemoCard>
);
