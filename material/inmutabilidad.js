/*
    Mutabilidad
*/

const valorMutable = {
  name: "Pepe",
};

console.log(valorMutable);

valorMutable.password = "1234";

console.log(valorMutable);

/*
    Principio de Inmutabilidad
*/
const original = {
  name: "Pepe",
};

console.log(original);

const copia = {
  ...original,
  password: "1234",
};

console.log(copia);
