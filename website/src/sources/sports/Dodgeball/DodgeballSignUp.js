import React, { Component } from "react";
import DodgeballForm from "./DodgeballForm";
import "../../../static/SportsData.css";

class DodgeballSignUp extends Component {
  render() {
    return (
      <div>
        <h3> Dodgeball</h3>
        <DodgeballForm />
      </div>
    );
  }
}

export default DodgeballSignUp;
