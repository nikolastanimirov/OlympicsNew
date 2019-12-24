import React, { Component } from "react";
import axios from "axios";

class Dodgeball extends Component {
  constructor() {
    super();

    this.state = {
      FirstName: "",
      LastName: "",
      Email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSumit = this.handleSumit.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  async handleSumit(e) {
    e.preventDefault();

    const { FirstName, LastName, Email } = this.state;
    const form = await axios.post("/api/dodgeball", {
      FirstName,
      LastName,
      Email
    });
  }
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
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>{" "}
      </div>
    );
  }
}

export default Dodgeball;
