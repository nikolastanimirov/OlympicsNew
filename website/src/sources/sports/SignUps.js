import React, { Component } from "react";

class SignUps extends Component {
  constructor() {
    super();
    this.state = {
      swimming: {
        results: []
      },
      dodgeball: {
        results: []
      },
      tennis: {
        results: []
      }
    };
  }
  async componentWillMount() {
    let r = await fetch("/api/dodgeball ").then(res => res.json());
    let s = await fetch("/api/swimming").then(res => res.json());

    this.setState({
      swimming: {
        results: s
      },
      dodgeball: {
        results: r
      }
    });
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
                {this.state.dodgeball.results.map(result => {
                  return <p>{result.id}</p>;
                })}
              </th>
              <td>
                {this.state.dodgeball.results.map(result => {
                  return <p>{result.FirstName}</p>;
                })}
              </td>
              <td>
                {this.state.dodgeball.results.map(result => {
                  return <p>{result.LastName}</p>;
                })}
              </td>
              <td>
                {this.state.dodgeball.results.map(result => {
                  return <p>{result.Email}</p>;
                })}
              </td>
            </tr>
          </tbody>
        </table>
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
                {this.state.swimming.results.map(result => {
                  return <p>{result.id}</p>;
                })}
              </th>
              <td>
                {this.state.swimming.results.map(result => {
                  return <p>{result.FirstName}</p>;
                })}
              </td>
              <td>
                {this.state.swimming.results.map(result => {
                  return <p>{result.LastName}</p>;
                })}
              </td>
              <td>
                {this.state.swimming.results.map(result => {
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
