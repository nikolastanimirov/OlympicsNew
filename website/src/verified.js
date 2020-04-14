import React, { Component } from "react";

const verification = "verified";
class componentName extends Component {
  state = {
    verification: "",
  };
  getResponse = async () => {
    const response = await fetch("/api/signup");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  componentDidMount() {
    this.getResponse().then((res) => {
      const { history } = this.props;
      history.push("/signup");
    });
  }

  render() {
    return <p>You are going to be redirected . . .</p>;
  }
}

export default componentName;
