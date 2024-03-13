export const FormCard = ({ handleSubmit, label, className, children }) => {
  return (
    <div>
      <p className="p-main">{label}</p>
      <form className={className} onSubmit={handleSubmit}>
        {children}
      </form>
    </div>
  );
};
