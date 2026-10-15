import { useEffect, useState } from "react";

export const CicloDeVida = () => {
  const [count, setCount] = useState(0);

  /*
    useEffect - Permite ejecutar funciones dentro del Ciclo de Vida del Componente
        -> Se utiliza para "enganchar" el componente a elementos externos
        -> Función que recibe dos parámetros
            -> primer parámetro: función cb para indicar qué queremos hacer
            -> segundo parámetro: array de dependencias
                -> Permite controlar cuándo ejecutar la función useEffect que, a su vez, controla la ejecución de la función cb
                    => [] - La cb se ejecuta solo cuando se monta el componente la PRIMERA VEZ
                    => [state] - La cb se vuelve a ejecutar cuando cambia alguno de los valores dentro del array
        -> Los efectos se ejecutan cuando el componente se monta por PRIMERA VEZ y siempre que uno de sus valores de dependencia cambien             
  */

  const cb = () => {
    // Esto se ejecuta cuando el componente se monta (montar = estar en el DOM)
    const timerID = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      // Esto se ejecuta cuando el componente se desmonta (desmontar = salir del DOM)
      clearTimeout(timerID);
    };
  };

  useEffect(cb, [count]);

  return (
    <div className="p-4">
      <h2>Ciclo de Vida del Componente</h2>
      <p>Contador: {count}</p>
    </div>
  );
};
