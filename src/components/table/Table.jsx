export const Table = ({ children }) => {
  return (
    <div className="table-responsive shadow-sm">
      <table className="table table-striped table-hover">{children}</table>
    </div>
  );
};
