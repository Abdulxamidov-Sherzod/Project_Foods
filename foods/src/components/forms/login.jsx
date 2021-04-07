import { Component, createRef } from "react";
import Joi from "joi-browser";
import Form from "../common/form";

export default class Login extends Form {
  h1stil = createRef();

  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
    title: "Login",
  };

  schema = {
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(4).required(),
  };

  doSubmit = () => {
    console.log("Success operation Login...");
  };

  render() {
    return (
      <div className="col-md-6 offset-3">
        <this.renderTitle />
        <form>
          <this.renderInput name="username" label="Username" />
          <this.renderInput name="password" label="Password" type="password" />
          <this.renderSubmit label="Submit" />
        </form>
      </div>
    );
  }
}
