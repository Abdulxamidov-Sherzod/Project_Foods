const options_units = [
  { _id: "Kg", name: "Kg" },
  { _id: "Litr", name: "Litr" },
  { _id: "Dona", name: "Dona" },
];

const Select = ({ name, label, error, options = options_units, ...args }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label} :</label>
      <select id={name} className="form-control" name={name} {...args}>
        <option value=""></option>
        {options.map(({ _id, name }) => (
          <option key={_id} value={_id}>
            {name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
