import React, { Component } from "react";
import "./static/Login.css";
import Footer from "./sources/Footer";
import FireLogo from "./resources/flame-2.png";
class Login extends Component {
  render() {
    return (
      <div class="login-page">
        <div class="container">
          <div class="row">
            <div class="col">
              <img class="fire-logo" src={FireLogo} alt="fire-logo" />
            </div>
            <div class="col">
              <form class="login-form">
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" class="btn btn-warning">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
