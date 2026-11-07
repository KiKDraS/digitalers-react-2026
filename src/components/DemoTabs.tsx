import { useState, type ReactNode } from "react";
import { ErrorBoundaryDemo } from "../features/errorBoundary/components/ErrorBoundaryDemo";
import { FormsDemo } from "../features/forms/components/FormsDemo";
import { UseOptimisticDemo } from "../features/useOptimistic/components/UseOptimisticDemo";
import { UseTransitionDemo } from "../features/useTransition/components/UseTransitionDemo";

// Interfaz: describe la forma de cada pestaña.
interface Tab {
  id: string;
  label: string;
  icon: string;
  // ReactNode: cualquier cosa que React puede renderizar (JSX, texto...).
  render: () => ReactNode;
}

// Tab[]: un array donde cada elemento cumple la interfaz Tab.
const TABS: Tab[] = [
  {
    id: "error",
    label: "ErrorBoundary + use()",
    icon: "bi-shield-exclamation",
    render: () => <ErrorBoundaryDemo />,
  },
  {
    id: "transition",
    label: "useTransition",
    icon: "bi-arrow-repeat",
    render: () => <UseTransitionDemo />,
  },
  {
    id: "optimistic",
    label: "useOptimistic",
    icon: "bi-lightning-charge",
    render: () => <UseOptimisticDemo />,
  },
  {
    id: "forms",
    label: "useActionState + useFormStatus",
    icon: "bi-ui-checks",
    render: () => <FormsDemo />,
  },
];

export const DemoTabs = () => {
  const [activeId, setActiveId] = useState(TABS[0].id);
  // activeTab === derived state
  const activeTab = TABS.find((tab) => tab.id === activeId) ?? TABS[0];

  return (
    <>
      <ul className="nav nav-tabs mb-4" role="tablist">
        {TABS.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              type="button"
              id={`tab-${tab.id}`}
              className={`nav-link ${activeId === tab.id ? "active" : ""}`}
              onClick={() => setActiveId(tab.id)}
              role="tab"
              aria-selected={activeId === tab.id}
            >
              <i className={`bi ${tab.icon} me-1`} aria-hidden="true" />
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        <section
          className="tab-pane fade show active"
          role="tabpanel"
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
        >
          {activeTab.render()}
        </section>
      </div>
    </>
  );
};
