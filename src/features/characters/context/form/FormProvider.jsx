import { createContext, useCallback, useContext, useMemo } from "react";
import { useForm } from "../../../../components/form/hook/useForm";

// 1. Creo contexto
export const FormContext = createContext(null);
// eslint(react-refresh/only-export-components) - Este error solo afecta a dev. En prod funciona perfecto

const INITIAL_FORM = {
  name: "",
  house: "",
};

// 2. Usamos el contexto para crear el Provider
export const FormProvider = ({ children }) => {
  const { form, handleChange, updateForm } = useForm(INITIAL_FORM);

  const setCharacterToEdit = useCallback(
    (character) => {
      updateForm(character);
    },
    [updateForm],
  );

  const resetForm = useCallback(() => {
    updateForm(INITIAL_FORM);
  }, [updateForm]);

  const data = useMemo(
    () => ({
      form,
      handleChange,
      resetForm,
      setCharacterToEdit,
    }),
    [form, handleChange, resetForm, setCharacterToEdit],
  );

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};
// 3. Habilitamos el consumo del Provider por los children
// eslint-disable-next-line react-refresh/only-export-components
export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context)
    throw new Error(
      "useFormContext debe ser utilizado dentro de un FormProvider",
    );

  return context;
};
