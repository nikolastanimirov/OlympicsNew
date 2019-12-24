import React, { Component } from "react";

class SignUps extends Component {
  constructor() {
    super();
    this.state = { results: [] };
  }
  async componentWillMount() {
    let r = await fetch("/api/signups");
    let results = await r.json();
    this.setState({ results });
  }

  render() {
    return (
      <div>
        <table class="table">
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
                {this.state.results.map(result => {
                  return <p>{result.id}</p>;
                })}
              </th>
              <td>
                {this.state.results.map(result => {
                  return <p>{result.FirstName}</p>;
                })}
              </td>
              <td>
                {this.state.results.map(result => {
                  return <p>{result.LastName}</p>;
                })}
              </td>
              <td>
                {this.state.results.map(result => {
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

export default SignUps;
