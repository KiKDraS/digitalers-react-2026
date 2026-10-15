import { useState } from "react";
import { CicloDeVida } from "./components/CicloDeVida";
import { FormularioControlado } from "./components/formularios/FormularioControlado";
import { FormularioNoControlado } from "./components/formularios/FormularioNoControlado";

function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <main className="p-4">
      <h1>Clase 38</h1>
      <button className="btn btn-success" onClick={handleClick}>
        {show ? "Desmontar" : "Montar"}
      </button>
      {show && <CicloDeVida />}
      <hr />
      <div className="row">
        <div className="col-6">
          <FormularioControlado />
        </div>
        <div className="col-6">
          <FormularioNoControlado />
        </div>
      </div>
    </main>
  );
}

export default App;
