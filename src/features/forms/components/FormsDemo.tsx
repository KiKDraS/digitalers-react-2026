import { DemoCard } from "../../../components/DemoCard";
import { LoginForm as LoginFormReact18 } from "./version-18/LoginForm";
import { LoginForm as LoginFormReact19 } from "./version-19/LoginForm";

export const FormsDemo = () => (
  <DemoCard
    title="📝 useActionState + useFormStatus: formularios con actions"
    version18={<LoginFormReact18 />}
    version19={<LoginFormReact19 />}
    docs={[
      {
        label: "useActionState",
        url: "https://es.react.dev/reference/react/useActionState",
      },
      {
        label: "useFormStatus",
        url: "https://es.react.dev/reference/react-dom/hooks/useFormStatus",
      },
    ]}
  >
    <p className="mb-3">
      Credenciales de prueba: <code>john@mail.com</code> / <code>changeme</code>
      . En <span className="text-danger">React 18</span> el formulario es
      controlado con <code>useForm</code> y estados manuales (
      <code>isSubmitting</code>, <code>message</code>); el botón recibe{" "}
      <code>isSubmitting</code> por props. En{" "}
      <span className="text-success">React 19</span> el{" "}
      <code>&lt;form action&gt;</code> ejecuta la action:{" "}
      <code>useActionState</code> guarda el resultado (error/éxito) y{" "}
      <code>useFormStatus</code> permite que el botón hijo lea el pending y los
      datos enviados sin props. En ambas versiones los errores inesperados
      llegan al <code>ErrorBoundary</code>: React 18 guarda el error y lo
      relanza en el render; React 19 lo propaga desde la action.
    </p>
    <p className="mb-3 small text-muted">
      Casos de uso: <code>useActionState</code> para validación, mensajes y
      estado de la action; <code>useFormStatus</code> para deshabilitar el
      submit, mostrar “Enviando...” o leer el <code>FormData</code>.
    </p>
  </DemoCard>
);
