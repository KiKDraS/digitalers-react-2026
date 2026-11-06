import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { ReactVersion } from "../constants/reactVersion";

// Interfaz: valor compartido por todos los consumidores del contexto.
export interface ReactVersionContextValue {
  version: ReactVersion;
  setVersion: Dispatch<SetStateAction<ReactVersion>>;
  isVersion18: () => boolean;
}

export const ReactVersionContext =
  createContext<ReactVersionContextValue | null>(null);
