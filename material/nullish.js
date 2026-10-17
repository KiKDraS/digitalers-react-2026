const obj = {
  primary: "primary",
  secondary: "secondary",
};

const color = "purple";
console.log(obj[color] || obj["primary"]);
console.log(obj[color] ?? obj["primary"]);

/*
    Falsies
        -> false
        -> 0
        -> -0
        -> ""
        -> NaN
        -> null
        -> undefined

    Trustie
        -> Todo dato NO falsie    
*/

// || -> Estructura de Control de flujo condición true cuando una de las condiciones NO era falsie
// ¿Qué tengo que mostrar? - || -> muestra el primer dato trustie
console.log(0 || "mi dato");

// ?? -> Se usa el segundo valor sólo si el primero es null/undefined
console.log(0 ?? "mi dato");
