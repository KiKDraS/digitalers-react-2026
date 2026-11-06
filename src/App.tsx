import { DemoTabs } from "./components/DemoTabs";
import { ReactVersionProvider } from "./features/reactVersion/context/ReactVersionProvider";

function App() {
  return (
    <ReactVersionProvider>
      <main className="container py-4">
        <header className="mb-4">
          <h1 className="display-6">
            ⚛️ React 19: Novedades y cambios importantes
          </h1>
          <p className="lead text-muted">
            Demos interactivos de cada cambio. En cada pestaña puedes alternar
            entre la versión{" "}
            <span className="text-danger">React 18 (antes)</span> y la versión{" "}
            <span className="text-success">React 19 (ahora)</span>.
          </p>
        </header>

        <DemoTabs />
      </main>
    </ReactVersionProvider>
  );
}

export default App;
