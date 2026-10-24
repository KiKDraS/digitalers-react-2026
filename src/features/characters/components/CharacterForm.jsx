import { Button } from "../../../components/button/Button";
import { Form } from "../../../components/form/components/Form";
import { Input } from "../../../components/form/components/Input";
import { useCrudContext } from "../context/crud/useCrudContext";
import { useFormContext } from "../context/form/FormProvider";

export const CharacterForm = () => {
  const {
    form,
    form: { id, house, name },
    resetForm,
    handleChange,
  } = useFormContext();
  const { editCharacter, addCharacter } = useCrudContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación con early return
    if (!name || !house) {
      alert("Debes completar todos los datos");
      return;
    }

    if (id) void editCharacter(form);
    else void addCharacter(form);

    resetForm();
  };

  return (
    <Form
      title={id ? "Editar Personaje" : "Agregar Personaje"}
      handleSubmit={handleSubmit}
    >
      <Input label="Nombre" name="name" value={name} onChange={handleChange} />
      <Input label="Case" name="house" value={house} onChange={handleChange} />
      <div className="d-flex justify-content-center align-items-center gap-4">
        <Button
          type="submit"
          color={id ? "primary" : "success"}
          text={id ? "Editar" : "Agregar"}
        />
        <Button
          type="reset"
          color="danger"
          text="Limpiar"
          onClick={resetForm}
        />
      </div>
    </Form>
  );
};
