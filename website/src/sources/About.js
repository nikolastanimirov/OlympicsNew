import React, { Component } from "react";
import Countdown from "../countdown/Coutdown";
import Headline from "../sources/Headline";
import NavScroll from "../sources/NavScroll";
import Main from "./Main";
import flame from "../resources/icons/flame.png";
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
                <h6>FOllow the fire:</h6>
                <button className="sports-redirect">
                  <NavScroll className="nav-link" link="sign-up" />
                  <img src={flame} />
                  <h5> Sign up</h5>
                </button>
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
