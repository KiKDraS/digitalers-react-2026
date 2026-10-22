const unDato = ""; // Global - Puede ser utilizado por cualquier elemento con acceso al Scope Global

/*
    Componente Hijo (Módulo)
*/
const Hijo = (() => {
  return (prop) => {
    console.log("Soy el Componente Hijo");
    console.log(prop);
  };
})();

// Hijo();

/*
    Componente App (Módulo)
*/

const App = (() => {
  const state = "Pepe";

  return () => {
    // console.log(name);
    Hijo(state);
  };
})();

App();
