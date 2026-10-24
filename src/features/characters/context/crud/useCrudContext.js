import { useContext } from "react";
import { CrudContext } from "./CrudContext";

export const useCrudContext = () => {
  const context = useContext(CrudContext);

  if (!context)
    throw new Error(
      "useCrudContext debe ser utilizado dentro de un CrudProvider",
    );

  return context;
};
