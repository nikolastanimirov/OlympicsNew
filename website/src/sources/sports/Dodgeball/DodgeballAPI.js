import React, { Component } from "react";
import "../../../static/Signup.css";

class DodgeballAPI extends Component {
  constructor() {
    super();
    this.state = {
      dodgeball: {
        results: [],
      },
    };
  }
  async componentWillMount() {
    let r = await fetch("/api/dodgeball ").then((res) => res.json());

    this.setState({
      dodgeball: {
        results: r,
      },
    });
  }

  render() {
    return (
      <div>
        {" "}
        <table class="table" id="result-table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Dodgeball</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                {this.state.dodgeball.results.map((result) => {
                  return <p>{result.id}</p>;
                })}
              </th>
              <td>
                {this.state.dodgeball.results.map((result) => {
                  return <p>{result.FirstName}</p>;
                })}
              </td>
              <td>
                {this.state.dodgeball.results.map((result) => {
                  return <p>{result.LastName}</p>;
                })}
              </td>
              <td>
                {this.state.dodgeball.results.map((result) => {
                  return <p>{result.Email}</p>;
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DodgeballAPI;
