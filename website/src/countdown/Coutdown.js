import React from "react";
import Clock from "./Clock";

import "../static/Countdown.css";
class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //SET THE DEADLINE FOR THE COUNTER
      deadline: "April 21, 2020",
      newDeadline: ""
    };
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }
  render() {
    return (
      <div>
        <div className="countdown">
          <div className="coutdown-title">
            <p>AUBG Olympics DDay {this.state.deadline}</p>
          </div>
          <Clock deadline={this.state.deadline} />
        </div>
      </div>
    );
  }
}

export default Countdown;
