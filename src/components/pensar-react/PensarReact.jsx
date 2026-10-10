import { Steps } from "../steps/Steps";
import { Title } from "../Title";

export const PensarReact = () => {
  return (
    <>
      <Title />
      <p>
        Pensar "en React" es un proceso de ingeniería inversa: vas de la
        interfaz visible al código, siguiendo estos pasos:
      </p>

      <Steps />

      <p>
        Este proceso garantiza que tu aplicación sea modular, fácil de depurar y
        altamente reactiva.
      </p>
    </>
  );
};
