import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";


export default class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { data } = this.state;
    const { error } = Joi.validate(data, this.schema, { abortEarly: false });
    if (error?.details)
      error.details
        .reverse()
        .forEach(({ path, message }) => (errors[path[0]] = message));

    return Object.keys(errors).length > 0 ? errors : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  validationProparty = (name, value) => {
    let message;
    const object = { [name]: value };
    const { error } = Joi.validate(object, { [name]: this.schema[name] });
    if (error?.details) message = error.details[0].message;
    return message ?? null;
  };

  hanleChange = ({ currentTarget: { name, value } }) => {
    const errors = { ...this.state.errors };
    const { data } = this.state;
    const errorsMassage = this.validationProparty(name, value);
    if (errorsMassage) errors[name] = errorsMassage;
    else delete errors[name];
    this.setState({
      data: { ...data, [name]: value },
      errors,
    });
  };

  renderInput = ({ name, label, ...args }) => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        onChange={this.hanleChange}
        error={errors[name]}
        {...args}
      />
    );
  };

  renderSelect = ({ name, label, options, ...args }) => {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        label={label}
        value={data[name]}
        onChange={this.hanleChange}
        error={errors[name]}
        options={options}
        {...args}
      />
    );
  };

  renderSubmit = ({ label }) => {
    return (
      <button
        onClick={this.handleSubmit}
        className="btn btn-primary float-right"
      >
        {label}
      </button>
    );
  };

  renderTitle = () => {
    return <h1>{this.state.title}</h1>;
  };
}
