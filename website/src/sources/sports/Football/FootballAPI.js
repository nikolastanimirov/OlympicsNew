import React, { Component } from "react";
import "../../../static/Signup.css";

class FootballAPI extends Component {
  constructor() {
    super();
    this.state = {
      running: {
        results: [],
      },
    };
  }
  async componentWillMount() {
    let e = await fetch("/api/football").then((res) => res.json());

    this.setState({
      running: {
        results: e,
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
                {this.state.running.results.map((result) => {
                  return <p>{result.id}</p>;
                })}
              </th>
              <td>
                {this.state.running.results.map((result) => {
                  return <p>{result.FirstName}</p>;
                })}
              </td>
              <td>
                {this.state.running.results.map((result) => {
                  return <p>{result.LastName}</p>;
                })}
              </td>
              <td>
                {this.state.running.results.map((result) => {
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

export default FootballAPI;
