import React, { Component } from "react";

class SignupForm extends Component {
  render() {
    return (
      <div>
        {" "}
        <form onSubmit={this.handleSumit}>
          <div class="form-group">
            <label for="FirstName">First Name</label>
            <input
              type="text"
              class="form-control"
              id="FirstName"
              placeholder="FirstName"
              name="FirstName"
              onChange={this.handleChange}
              required
            />
          </div>
          <div class="form-group">
            <label for="LastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="LastName"
              placeholder="LastName"
              name="LastName"
              onChange={this.handleChange}
              required
            />
          </div>
          <div class="form-group">
            <label for="Email">Email address</label>
            <input
              type="Email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="Email"
              onChange={this.handleChange}
              required
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <button type="submit" class="btn btn-warning">
            Submit
          </button>
        </form>{" "}
      </div>
    );
  }
}

export default SignupForm;
