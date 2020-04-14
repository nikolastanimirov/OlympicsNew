import React, { Component } from "react";
import "./static/Login.css";
import Footer from "./sources/Footer";
import axios from "axios";
import FireLogo from "./resources/Logo2019.png";
class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  async handleSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;
    const { history } = this.props;
    console.log(this.state);
    history.push("/signup");
    const form = await axios.post("/api/login", {
      username,
      password,
    });
  }
  render() {
    return (
      <div class="login-page">
        <img src={FireLogo} class="fire-logo" alt="fire-logo" />
        <form class="login-form" onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
              name="username"
              onChange={this.handleChange}
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" class="btn btn-warning" value="Submit">
            Sign In
          </button>
        </form>

        <Footer />
      </div>
    );
  }
}

export default Login;
