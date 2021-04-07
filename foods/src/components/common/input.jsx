const Input = ({ name, label, error, ...args }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label} :</label>
      <input id={name} className="form-control" name={name} {...args} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
