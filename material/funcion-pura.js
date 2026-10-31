/*
    Función Pura 
        -> No modifica ni trabaja con valores que no le pertenecen.
        -> Para el mismo valor de entrada, mismo valor de salida    
*/

const sumar = (a, b) => a + b;

sumar(2, 2);

let state = "";

const actualizarNombrePura = (state, nuevoNombre) => {
  let copia = state;
  copia = nuevoNombre;

  return copia;
};

state = actualizarNombrePura(state, "Pepa");

console.log(state);

/*
    Función Impura
*/

let nombre = "";

const actualizarNombre = (nuevoNombre) => {
  nombre = nuevoNombre;
};

actualizarNombre("Pepe");
console.log(nombre);
