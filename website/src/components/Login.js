import React, { Component } from "react";
import { login } from "./UserFunctions";
import "../static/Login.css";
class Login extends Component {
  constructor() {
    super();
    this.state = {
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
      email: this.state.email,
      password: this.state.password,
    };
    login(user).then((res) => {
      if (res) {
        this.props.history.push(`/profile`);
      }
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
                <label htmlFor="email">Email Address</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.onChange}
                  required
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
                  required
                ></input>
              </div>
              <button type="submit" className="btn btn-lg btn-warning">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
