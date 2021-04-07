import { Component, createRef } from "react";
import Joi from "joi-browser";
import Form from "../common/form";

export default class Register extends Form {
  h1stil = createRef();

  state = {
    data: {
      username: "",
      email: "",
      password: "",
    },
    errors: {},
    title: "Register",
  };

  schema = {
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(10).required().label("Email"),
    password: Joi.string().min(4).required(),
  };

  doSubmit = () => {
    console.log("Success operation Register...");
  };

  render() {
    return (
      <div className="col-md-6 offset-3">
        <this.renderTitle />
        <form>
          <this.renderInput name="username" label="Username" />
          <this.renderInput name="email" label="Email" />
          <this.renderInput name="password" label="Password" type="password" />
          <this.renderSubmit label="Submit" />
        </form>
      </div>
    );
  }
}
