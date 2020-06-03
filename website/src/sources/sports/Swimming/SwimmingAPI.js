import React, { Component } from "react";
import "../../../static/Signup.css";

class VolleyballAPI extends Component {
  constructor() {
    super();
    this.state = {
      swimming: {
        results: [],
      },
    };
  }
  async componentWillMount() {
    let s = await fetch("/api/swimming").then((res) => res.json());

    this.setState({
      swimming: {
        results: s,
      },
    });
  }

  render() {
    return (
      <div>
        {" "}
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Swimming</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                {this.state.swimming.results.map((result) => {
                  return <p>{result.id}</p>;
                })}
              </th>
              <td>
                {this.state.swimming.results.map((result) => {
                  return <p>{result.FirstName}</p>;
                })}
              </td>
              <td>
                {this.state.swimming.results.map((result) => {
                  return <p>{result.LastName}</p>;
                })}
              </td>
              <td>
                {this.state.swimming.results.map((result) => {
                  return <p>{result.Email}</p>;
                })}
              </td>
            </tr>
          </tbody>
        </table>{" "}
      </div>
    );
  }
}

export default VolleyballAPI;
