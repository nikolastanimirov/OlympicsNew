import React, { Component } from "react";
import Countdown from "../countdown/Coutdown";
import Headline from "../sources/Headline";
import NavScroll from "../sources/NavScroll";
import Main from "./Main";
import "../static/About.css";
class About extends Component {
  render() {
    return (
      <div id="about" class="about-page">
        <div class="container">
          <Headline title="About" />
          <div class="row">
            <div class="col-6">
              <div class="count">
                <Countdown />
              </div>
              <div class="sign-up">
                <li>
                  <button class="btn btn-warning">
                    <NavScroll
                      className="nav-link"
                      link="sign-up"
                      name="Olympiad"
                    />
                  </button>
                </li>
                <li>
                  <button class="btn btn-warning">
                    <NavScroll
                      className="nav-link"
                      link="sports"
                      name="Sports"
                    />
                  </button>
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
