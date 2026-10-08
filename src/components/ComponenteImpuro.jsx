/*
    Funciones Puras e Impuras
       -> Función Pura
         -> Dado los mismos datos de entrada (parámetros) siempre devuelve el mismo resultado
         -> No modifica nada fuera de la función (no tiene efectos secundarios)
         -> Ej: sumar(a, b) => a + b; 
           -> Siempre devuelve lo mismo con los mismos parámetros
           -> No toca ninguna variable externa
   
       -> Función Impura
         -> Modifica algo fuera de la función (efecto secundario)
         -> Puede devolver resultados diferentes con los mismos parámetros
         -> Ej: una función que modifica una variable global
   
       -> Un Componente de React debe ser una Función Pura
         -> Dado los mismos props, debe devolver el mismo JSX
         -> No debe modificar variables externas durante el render
         -> StrictMode ayuda a detectar componentes impuros
           -> Los renderiza dos veces en desarrollo para que el error se note  

*/

let renderCount = 0;

export const ComponenteImpuro = () => {
  renderCount += 1;

  return (
    <div>
      <p>Render número: {renderCount}</p>
      <p>
        Con StrictMode este número es 2 (renderiza dos veces). Sin StrictMode
        sería 1 (el error queda oculto).
      </p>
    </div>
  );
};
