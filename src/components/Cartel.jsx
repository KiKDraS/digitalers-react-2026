import styles from "./Cartel.module.css";

export const Cartel = ({ text, number, ...rest }) => {
  console.log(text, rest);

  return <div className={styles.cartel}>{text + number}</div>;
};

/*
  // rest operator - Sólo funciona como parámetro. Crea un array con todos los argumentos pasados
  function MiComponente(...array) {
      console.log(array);
  }

  MiComponente(1,2,3)

  const arr = [1,2,3];
  const copia = [...arr]; // spread operator - Desarma el array/objeto

  console.log(copia);
*/
