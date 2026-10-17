export const Form = ({ children, handleSubmit, title }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body p-4">
        <h2 className="card-title-text-center mb-4">{title}</h2>
        <form onSubmit={handleSubmit}>{children}</form>
      </div>
    </div>
  );
};
