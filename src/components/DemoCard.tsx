import type { PropsWithChildren, ReactNode } from "react";
import { VersionToggle } from "../features/reactVersion/components/VersionToggle";
import { useReactVersion } from "../features/reactVersion/context/useReactVersion";

// Interfaz: enlace a la documentación oficial.
interface DocsLink {
  label: string;
  url: string;
}

// Interfaz: props del contenedor de cada demo.
interface DemoCardProps extends PropsWithChildren {
  title: string;
  // ReactNode: contenido de React 18.
  version18: ReactNode;
  // ReactNode: contenido de React 19.
  version19: ReactNode;
  // DocsLink[]: enlaces a la documentación oficial.
  docs: DocsLink[];
}

export const DemoCard = ({
  title,
  children,
  version18,
  version19,
  docs,
}: Readonly<DemoCardProps>) => {
  const { version, setVersion, isVersion18 } = useReactVersion();

  return (
    <article className="card">
      <header className="card-header d-flex justify-content-between align-items-center gap-2 flex-wrap">
        <h2 className="h6 fw-normal mb-0">{title}</h2>
        <VersionToggle version={version} onChange={setVersion} />
      </header>
      <section className="card-body">
        {children}
        {isVersion18() ? version18 : version19}
      </section>
      <footer className="card-footer small">
        Docs oficiales:{" "}
        {docs.map((doc, index) => (
          <span key={doc.url}>
            {index > 0 && " · "}
            <a href={doc.url} target="_blank" rel="noreferrer">
              {doc.label}
            </a>
          </span>
        ))}
      </footer>
    </article>
  );
};
