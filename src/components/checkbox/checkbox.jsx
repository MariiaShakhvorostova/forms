export const Checkbox = ({ id, className, onChange }) => {
  return (
    <input type="checkbox" id={id} className={className} onChange={onChange} />
  );
};
