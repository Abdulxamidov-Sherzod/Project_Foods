import React, { Component, createRef } from "react";

export default class Register extends Component {
  state = {
    account: {
      username: "",
      email: "",
      password: "",
    },
  };

  hanleChange = (e) => {
    const { value, name } = e.currentTarget;
    this.setState({
      account: { ...this.state.account, [name]: value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.account);
  };

  title = createRef(null);

  componentDidMount() {
    this.title.current.style.color = "red";
  }
  render() {
    return (
      <div className="col-md-6 offset-3">
        <h2 ref={this.title} className="text-center">
          Register component
        </h2>
        <form>
          <div className="form-goup">
            <label htmlFor="username">Username :</label>
            <input
              value={this.state.account.username}
              name="username"
              autoFocus
              id="username"
              className="form-control"
              onChange={this.hanleChange}
            />
          </div>
          <div className="form-goup">
            <label htmlFor="email">Email :</label>
            <input
              value={this.state.account.email}
              name="email"
              id="email"
              type="email"
              className="form-control"
              onChange={this.hanleChange}
            />
          </div>
          <div className="form-goup">
            <label htmlFor="password">Password :</label>
            <input
              value={this.state.account.password}
              name="password"
              id="password"
              type="password"
              className="form-control"
              onChange={this.hanleChange}
            />
          </div>
          <button
            onClick={this.handleSubmit}
            className="btn btn-primary mt-4 float-right"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
