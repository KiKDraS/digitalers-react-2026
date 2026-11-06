import { useContext } from "react";
import { ReactVersionContext } from "../context/ReactVersionContext";

export const useReactVersion = () => {
  const context = useContext(ReactVersionContext);

  if (!context) {
    throw new Error(
      "useReactVersion debe usarse dentro de ReactVersionProvider",
    );
  }

  return context;
};
