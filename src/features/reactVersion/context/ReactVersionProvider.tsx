import type { PropsWithChildren } from "react";
import { useEffect, useMemo, useState } from "react";
import { REACT_VERSIONS, type ReactVersion } from "../constants/reactVersion";
import {
  readStoredReactVersion,
  writeStoredReactVersion,
} from "../utils/reactVersionStorage";
import { ReactVersionContext } from "./ReactVersionContext";

export const ReactVersionProvider = ({
  children,
}: Readonly<PropsWithChildren>) => {
  // useState con inicializador perezoso: lee localStorage solo al montar.
  const [version, setVersion] = useState<ReactVersion>(() =>
    readStoredReactVersion(),
  );

  // useEffect: guarda cada cambio para sobrevivir a un reload.
  useEffect(() => {
    writeStoredReactVersion(version);
  }, [version]);

  // useMemo: mantiene estable el valor si la versión no cambió.
  const value = useMemo(
    () => ({
      version,
      setVersion,
      isVersion18: () => version === REACT_VERSIONS.REACT_18,
    }),
    [version],
  );

  return (
    <ReactVersionContext.Provider value={value}>
      {children}
    </ReactVersionContext.Provider>
  );
};
