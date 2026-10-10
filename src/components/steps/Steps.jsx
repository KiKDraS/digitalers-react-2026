import { Step } from "./step/Step";
import styles from "./Steps.module.css";

const ELEMENTOS = [
  {
    id: 1,
    stepNumber: 1,
    content: () => {
      return (
        <>
          <h3>Dividir la Interfaz en Componentes</h3>
          <p>
            Mira el diseño de tu aplicación e identifica cada elemento que pueda
            ser una pieza independiente. Dibuja cajas alrededor de cada parte
            (encabezado, lista de productos, tarjeta individual, botón).
          </p>
          <p>
            <strong>Ejemplo:</strong> Una red social se divide en:{" "}
            <code>&lt;App /&gt;</code> (el padre),{" "}
            <code>&lt;BarraLateral /&gt;</code>, <code>&lt;Feed /&gt;</code> y{" "}
            dentro del Feed, múltiples <code>&lt;Publicacion /&gt;</code>.
          </p>
        </>
      );
    },
  },
  {
    id: 2,
    stepNumber: 2,
    content: () => {
      return (
        <>
          <h3>Identificar el State Mínimo Necesario</h3>
          <p>
            Pregúntate: "¿Qué información necesita cambiar en el tiempo para que
            la interfaz se vea diferente?"
          </p>
          <ul>
            <li>Lista de productos (cambia al filtrar).</li>
            <li>Texto de búsqueda (cambia al escribir).</li>
            <li>
              El usuario actualmente autenticado (cambia al iniciar sesión).
            </li>
          </ul>
          <p>
            Esta información es tu <strong>State</strong>.
          </p>
        </>
      );
    },
  },
  {
    id: 3,
    stepNumber: 3,
    content: () => {
      return (
        <>
          <h3>Determinar Dónde Vive el State (Elevación del Estado)</h3>
          <p>
            El State debe residir en el componente <strong>más alto</strong>{" "}
            (más arriba en el árbol) que lo necesite.
          </p>
          <p>
            <strong>Regla:</strong> Si dos componentes hermanos necesitan el
            mismo dato, el State debe vivir en su componente{" "}
            <strong>padre común</strong>.
          </p>
          <p>
            <strong>Movimiento:</strong> Si el State comienza en un componente
            hijo, pero otro hermano también lo necesita, debes "elevar" el State
            al componente padre.
          </p>
        </>
      );
    },
  },
  {
    id: 4,
    stepNumber: 4,
    content: () => {
      return (
        <>
          <h3>Flujo de Comunicación: Props</h3>
          <p>
            Una vez que el State está en el componente padre correcto, se
            utiliza para alimentar a los componentes hijos a través de{" "}
            <strong>Props</strong>.
          </p>
          <ul>
            <li>El componente padre gestiona el State.</li>
            <li>El componente hijo recibe el dato a través de Props.</li>
            <li>
              Si el hijo necesita cambiar el State, le pide al padre que lo haga
              (pasándole una función como Prop), manteniendo el flujo de datos
              predecible.
            </li>
          </ul>
        </>
      );
    },
  },
];

export const Steps = () => {
  return (
    <section className={styles.processSteps}>
      {ELEMENTOS.map((step) => (
        <Step key={step.id} stepNumber={step.stepNumber}>
          {step.content()}
        </Step>
      ))}
    </section>
  );
};
