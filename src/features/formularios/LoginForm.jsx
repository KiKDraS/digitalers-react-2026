import { Button } from "../../components/button/Button";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { useForm } from "./hook/useForm";

/*
    Hook
        -> Función que sigue reglas específicas de React
        -> Hooks Nativos - Se pueden usar porque usamos React
            -> useState
            -> useEffect
            -> useId
            -> useMemo
            -> useCallback
            -> useContext
        -> Hooks Personalizados - El programador los crea
            -> Reglas de los Hooks
                -> El nombre de la función tiene que arrancar con use
                    -> useFetch
                    -> useLocalStorage
                    -> usePepito
                -> Las funciones Hook no pueden llamarse de forma condicional ni dentro de un bucle. Solo se pueden utilizar dentro de Componentes Funcionales u otros Hooks      
*/

export const LoginForm = () => {
  const { form, handleChange } = useForm({ name: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica de inicio de sesión
  };

  return (
    <Form handleSubmit={handleSubmit} title="Iniciar Sesión">
      <Input
        label="Nombre de usuario"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        label="Contraseña"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />
      <Button type="submit" text="Ingresar" />
    </Form>
  );
};
