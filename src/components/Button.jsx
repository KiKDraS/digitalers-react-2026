// Declaración -> Props -> {texto, cb}
export const Button = ({ texto, cb }) => {
  return <button onClick={cb}>{texto}</button>;
};

/*
    // Declaración -> Parámetros
    function MiComponente(texto, cb) {
        console.log(texto, cb)
    }

    // Ejecución -> Argumentos
    MiComponente("Un botón", () => {});
*/
