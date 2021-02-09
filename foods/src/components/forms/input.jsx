const Input = ({ name, label, onChange, value, type = "text", autoFocus, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label} :</label>
      <input
        autoFocus={autoFocus}
        id={name}
        name={name}
        type={type}
        className="form-control"
        onChange={onChange}
        value={value}
      />
      {error && <div className='alert alert-danger' >{error}</div>}
    </div>
  );
};

export default Input;
