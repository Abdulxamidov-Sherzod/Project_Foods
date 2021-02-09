import React, { Component, createRef } from "react";
import Input from "./input";

export default class Login extends Component {
  h1stil = createRef();

  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { username, password } = this.state.account;
    if (username.trim() === "") errors.username = "Username kiritilmagan !";
    if (password.length < 6)
      errors.password = "kamida 6 ta belgi bolishi kerak!";
    if (password.trim() === "") errors.password = "Password kiritilmagan !";
    return Object.keys(errors).length > 0 ? errors : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("Success operation");
  };

  validationProparty = (name, value) => {
    let message;
    
    if (value.trim() === "") message = name + " kiritilmagan!";
    return message ?? null;
  };

  hanleChange = ({ currentTarget: { name, value } }) => {
    const errors = { ...this.state.errors };
    const { account } = this.state;

    const errorsMassage = this.validationProparty(name, value);
    if (errorsMassage) errors[name] = errorsMassage;
    else delete errors[name];
    this.setState({
      account: { ...account, [name]: value },
      errors,
    });
  };

  render() {
    const { errors, account } = this.state;
    const { username, password } = account;
    return (
      <div className="col-md-6 offset-3">
        <h1 className="text-center">Login</h1>
        <form>
          <Input
            autoFocus="ture"
            name="username"
            label="Username"
            value={username}
            onChange={this.hanleChange}
            error={errors["username"]}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.hanleChange}
            error={errors["password"]}
          />
          <button
            onClick={this.handleSubmit}
            className="btn btn-primary float-right"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
