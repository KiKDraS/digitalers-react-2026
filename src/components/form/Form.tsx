import type {
  FormHTMLAttributes,
  PropsWithChildren,
} from "react";

// Interfaz: props del formulario reutilizable.
// Omit: quitamos children y title para definir nuestros propios tipos.
// PropsWithChildren: agrega la prop children.
interface FormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, "children" | "title">,
    PropsWithChildren {
  // Título visible del formulario, no el atributo title nativo.
  title?: string;
}

export const Form = ({
  children,
  title,
  className,
  style,
  ...rest
}: Readonly<FormProps>) => (
  <form
    {...rest}
    className={`row g-3 ${className ?? ""}`}
    style={{ maxWidth: 400, ...style }}
  >
    {title && <h3 className="col-12 h5 mb-0">{title}</h3>}
    {children}
  </form>
);
