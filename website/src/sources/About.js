import React, { Component } from "react";
import Countdown from "../countdown/Coutdown";
import Headline from "../sources/Headline";
import Main from "./Main";
import "../static/About.css";
class About extends Component {
  render() {
    return (
      <div id="about" class="about-page">
        {/* <Headline title="About" />
        <div class="row align-items-center">
          <div class="col-6 col-md-6">
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
          <div class="col-6 col-md-4">
            <div className="about-us">
              <Main />
            </div>
          </div>
        </div> */}

        <div class="container">
          <Headline title="About" />
          <div class="row">
            <div class="col-6">
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
            <div class="col-6">
              <Main />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
