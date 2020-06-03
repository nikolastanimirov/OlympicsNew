import React, { Component } from "react";
import RunningForm from "./RunningForm";
import "../../../static/SportsData.css";
class RunningSignUp extends Component {
  render() {
    return (
      <div>
        <h3> Running</h3>
        <RunningForm />
      </div>
    );
  }
}

export default RunningSignUp;
