import React, { Component } from "react";
import "../static/Countdown.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.setState({
      days,
      hours,
      minutes,
      seconds
    });
  }
  render() {
    return (
      <ul className="countdown-mainframe">
        <li>
          <div className="Clock-days">{this.leading0(this.state.days)}</div>
          <div className="clock-title">DAYS</div>
        </li>
        <li>
          <div className="Clock-hours">{this.leading0(this.state.hours)}</div>
          <div className="clock-title">HOURS</div>
        </li>
        <li>
          {" "}
          <div className="Clock-minutes">
            {this.leading0(this.state.minutes)}
          </div>
          <div className="clock-title">MINUTES</div>
        </li>
        <li>
          {" "}
          <div className="Clock-seconds">
            {this.leading0(this.state.seconds)}
          </div>
          <div className="clock-title">SECONDS</div>
        </li>
      </ul>
    );
  }
}

export default Clock;
