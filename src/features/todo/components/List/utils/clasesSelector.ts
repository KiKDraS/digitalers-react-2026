export function clasesSelector(isCompleted: boolean) {
  return {
    itemClasses: `list-group-item d-flex justify-content-between align-items-center ${
      isCompleted ? "list-group-item-light text-muted" : ""
    }`,
    iconClasses: `bi ${
      isCompleted ? "bi-check-circle-fill text-success" : "bi-circle"
    }`,
    textClasses: `flex-grow-1 ${
      isCompleted ? "text-decoration-line-through" : ""
    }`,
    btnClases: "btn btn-link p-0 me-3 text-decoration-none",
  };
}
