/*
  React === Librería para construir UI

  Componente
    => Función que se usa para crear UI (User Interface)
      -> Retorna una vista
    => Pueden generar una UI interactiva (Componente Funcional)
    => Pueden generar una UI estática (Componente de Renderizado) 
    => Elemento re-utilizable
    => Solo puede retornar un dato
      -> En JSX, cada "Etiqueta HTML" representa un dato
      -> <></> - Fragment: Permite devolver un único dato conformado por varios Elementos JSX ("Etiquetas HTML")
    => Los componentes retornan vista  

  State
    -> "variable" que permite identificar cambios

  Props
    -> Equivalente a Parámetros de una función
    -> El Objeto Props
      -> Para trabajar con props es necesario destructurar el objeto
      -> Los "Argumentos" se pasan como "Atributos de Etiqueta HTML"

  Virtual DOM
    -> Copia almacenada en la memoria de nuestra aplicación
    -> Lee los cambios de state (actualización del valor almacenado en la 'variable' state) y optimiza la actualización del Árbol de Nodos del DOM

  Renderizado Condicional
    -> Es una técnica que utiliza condiciones para indicar qué se debe mostrar  
    -> Con Renderizado Condicional definimos qué mostrar u ocultar
    -> Renderizar === Mostrar contenido

  Falsies - En condiciones, equivale a false
    => 0
    => -0
    => false
    => undefined
    => null
    => NaN
    => ""           

  Trusties - En condiciones, equivale a true
    => Todo lo que no sea un Falsie
*/

import { useState } from "react";
import { Button } from "./components/Button";
import { PensarReact } from "./components/pensar-react/PensarReact";

function App() {
  // show - Valor actual | En el primer render: false
  // setShow - Función actualizadora del state
  const [show, setShow] = useState(false);

  const handleClick = () => {
    // setShow(true); - Paso el nuevo valor
    const cb = (prev) => !prev;
    setShow(cb);
  };

  // Early Return - Genera la vista con el <section>...</section>
  if (false) {
    return (
      <section>
        <h2>Hola Mundo!</h2>
      </section>
    );
  }

  return (
    <main>
      <h1>Clase 37</h1>
      <p>Componentes, State, Props y Virtual DOM</p>
      <section>
        <h2>State y Props</h2>
        <ul>
          <li>State</li>
          <li>Props</li>
        </ul>
      </section>
      <hr />
      <section>
        <h2>Renderizado Condicional</h2>
        <p>
          Permite indicar qué elemento se va a mostrar utilizando condiciones
        </p>
        <ul>
          <li>
            Early return - Cortar la ejecución de la función ANTES de que ser
            ejecute todo el código
          </li>
          <li>Operador Ternario</li>
          <li>
            Operadores de corto-circuito
            <ul>
              <li>&&</li>
            </ul>
          </li>
        </ul>
        {/* Ejecución -> Argumentos -> Atributos textos y cb */}
        <Button texto={show ? "Ocultar" : "Mostrar"} cb={handleClick} />
      </section>
      <hr />
      {/* 
        condición -> false && true -> false
          -> show: false
          -> JSX: true
      */}
      {show && (
        <section>
          <PensarReact />
        </section>
      )}
    </main>
  );
}

export default App;
