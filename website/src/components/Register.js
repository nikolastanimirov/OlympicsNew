import React, { Component } from "react";
import { register } from "./UserFunctions";
import "../static/Login.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    };
    register(user).then((res) => {
      this.props.history.push(`/login`);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1>Please sign in</h1>
              <div className="form-group">
                <label htmlFor="first_name">First name</label>
                <input
                  className="form-control"
                  type="text"
                  name="first_name"
                  placeholder="Enter First Name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last name</label>
                <input
                  className="form-control"
                  type="text"
                  name="last_name"
                  placeholder="Enter Last Name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.onChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChange}
                ></input>
              </div>
              <button type="submit" className="btn btn-lg btn-warning">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
