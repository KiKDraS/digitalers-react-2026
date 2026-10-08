import styles from "./MiComponente.module.css";
/*
  CSS Modules
    -> Es una forma de escribir los estilos (CSS) dentro de un proyecto de React
    -> Se crea un archivo con la extensión .module.css (ej: App.module.css)
    -> Se importa dentro del componente como si fuera un objeto de JavaScript
      -> import styles from "./App.module.css"
    -> Las clases se usan como propiedades de ese objeto
      -> className={styles.nombreDeLaClase}

  ¿Cómo funciona?
    -> React (con ayuda de Vite) lee el archivo .module.css y le cambia el nombre
    a cada clase por uno único y aleatorio
      -> Ej: .counter se convierte en algo como ._counter_abc123
    -> Así cada clase queda "privada" del componente que la importó

  ¿Por qué es importante?
    -> Evita que los estilos de un componente se mezclen con los de otro
      -> En CSS normal, si dos componentes usan la clase .titulo, se pisan entre sí
    -> Los estilos quedan ordenados y cerca del componente que los usa
    -> Es más fácil mantener el proyecto cuando crece

   Recomendación
    -> Archivo CSS tradicional para estilos Globales
    -> CSS Module para estilos de componente 
*/
export const MiComponente = () => {
  return <div className={styles.componente}>Soy un Componente</div>;
};
