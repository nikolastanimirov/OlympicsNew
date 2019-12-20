import React, { Component } from "react";
import Countdown from "../countdown/Coutdown";
import Headline from "../sources/Headline";
import Arrow from "./Arrow";
import Main from "./Main";
import "../static/About.css";
class About extends Component {
  render() {
    return (
      <div id="about" className="about-page">
        <Headline title="About" />
        <div className="row align-items-center">
          <div className="col-8 col-md-6">
            <div className="count">
              <Countdown />
            </div>
            <div className="sign-up">
              <li>
                <button className="btn btn-warning">Sign up</button>
              </li>
              <li>
                <button className="btn btn-warning">Sign up</button>
              </li>
            </div>
          </div>
          <div className="col-4 col-md-6">
            <div className="about-us">
              <Main />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
