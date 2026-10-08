import { useState } from "react";
import "./App.css";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import { Cartel } from "./components/Cartel";
import { ComponenteImpuro } from "./components/ComponenteImpuro";
import { MiComponente } from "./components/MiComponente";

/*
  https://es.react.dev/ - Documentación Oficial

  React
    -> Librería JS para la manipulación de las vistas
    -> Simplifica la modificación del DOM cuando sea necesario
    -> ¿Cómo sabe React cuando es necesario modificar el DOM?
      -> React utiliza los valores de State para lanzar su flujo de actualización de DOM
      -> Para modificar una vista en React tengo que modificar un valor de State
      
  Flujo de actualización de DOM 
    -> Virtual DOM 
      -> Copia propia de React del DOM real     
      -> Sabe cuáles son los valores de State presentes en el proyecto        

  JSX (JavaScript XML)
    -> Extensión de sintaxis de JS que simula ser código HTML

  ¿Qué es un Componente de React?
    => Función que retorna JSX === Es una función que retorna una vista
    => Función que puede recibir datos
        => Props === Parámetros
    => Es una función que puede utilizar State    

  Props
    -> Equivalente a un parámetro de función
    -> Objeto Props  
      -> Puede recibir cualquier dato válido en JS
      -> Es necesario destructurar el objeto
      -> Las claves son el nombre del "atributo html"

  State
    -> Elemento que se utiliza para registrar el estado de un componente y saber cuando hay un cambio
    -> El trabajo con State permite crear un Código Reactivo
    -> Version 16.8 
      -> Hooks - Son funciones con características propias de React
        -> useState - Hook que permite agregar un valor de State
          -> Retorna un tupla (array de dos posiciones)
            -> array[0] = valor actual del state
            -> array[1] = función actualizadora del state
*/

function App() {
  // 0 - Valor almacenado en count cuando inicia la aplicación
  const [count, setCount] = useState(0);
  // const tupla = useState(0);
  // const [count, setCount] = tupla;

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <Cartel
        text="Mi cartel"
        number={count}
        booleano={true}
        miFn={() => {}}
        arr={[]}
        obj={{}}
      />

      <ComponenteImpuro />

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

      <hr />
      <MiComponente />
    </>
  );
}

export default App;
