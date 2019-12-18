import React, { Component } from "react";
import Countdown from "../countdown/Coutdown";
import Arrow from "./Arrow";
import Main from "./Main";
import "../static/About.css";
class About extends Component {
  render() {
    return (
      <div class="row align-items-center">
        <div class="col-8 col-md-6">
          <div class="count">
            <Countdown />
          </div>
          <div class="sign-up">
            <li>
              <Arrow />
            </li>
            <li>
              <Arrow />
            </li>
          </div>
        </div>
        <div class="col-4 col-md-6">
          <div class="about-us">About us</div>
        </div>
      </div>
    );
  }
}

export default About;
