import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { form, handleChange, updateForm: setForm };
};
