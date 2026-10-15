import { useRef } from "react";
import { Input } from "./Input";

/*
    useRef
        -> Mecanismo que permite saltar el trabajo del VirtualDOM para interactuar directamente con el Nodo del DOM
        -> Genera un objeto que tiene una sola clave: current
            -> null (valor inicial): El elemento todavía no existe en el DOM real (el Componente no se montó)
            -> Objeto HTML del Nodo con el que queremos interactuar (luego del primer render).

    Formulario No Controlado
        -> Caso de uso típico: formularios simples donde solo importa el valor final
           (contacto, login, buscador) y no hace falta re-renderizar mientras se escribe      
        -> Los valores que se obtienen en un Formulario No Controlado NO son parte del Ciclo de Vida del Componente     
*/

export const FormularioNoControlado = () => {
  const nombreRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(nombreRef);
    const value = nombreRef.current.value;
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Formulario No Controlado</h3>
      <Input label="Nombre" ref={nombreRef} />
      <button className="btn btn-primary" type="submit">
        Enviar
      </button>
    </form>
  );
};
