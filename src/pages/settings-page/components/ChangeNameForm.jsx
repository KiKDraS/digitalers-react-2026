import { Button } from "../../../components/button/Button";
import { Form } from "../../../components/form/components/Form";
import { Input } from "../../../components/form/components/Input";
import { useForm } from "../../../components/form/hook/useForm";
import { useAuthContext } from "../../../features/auth/context/AuthProvider";

const INITIAL_FORM = {
  name: "",
};

export const ChangeNameForm = ({ buttonColor }) => {
  const { form, handleChange, updateForm } = useForm(INITIAL_FORM);
  const {
    user: { name },
    updateName,
  } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    updateName(form.name);
    updateForm((prev) => ({ ...prev, name: "" }));
  };

  return (
    <Form handleSubmit={handleSubmit} title="Configuración">
      <Input
        label="Nombre:"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder={name}
      />
      <div className="pt-2">
        <Button type="submit" color={buttonColor} text="Cambiar" />
      </div>
    </Form>
  );
};
