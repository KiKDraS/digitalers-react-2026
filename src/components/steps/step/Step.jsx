import styles from "./Step.module.css";

// children - Permite renderizar "contenido del HTML"
export const Step = ({ children, stepNumber }) => {
  return (
    <article className={styles.step}>
      <span className={styles.number}>{stepNumber}</span>
      <div className={styles.content}>{children}</div>
    </article>
  );
};
