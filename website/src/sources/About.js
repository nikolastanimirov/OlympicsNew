import React, { Component } from "react";
import Countdown from "../countdown/Coutdown";
import Arrow from "./Arrow";
import Main from "./Main";
import "../static/About.css";
class About extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="row align-items-center">
          <div className="col-8 col-md-6">
            <div className="count">
              <Countdown />
            </div>
            <div className="sign-up">
              <li>
                <Arrow />
              </li>
              <li>
                <Arrow />
              </li>
            </div>
          </div>
          <div className="col-4 col-md-6">
            <div className="about-us">
              <h2>About Olympics</h2>
              <Main />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
