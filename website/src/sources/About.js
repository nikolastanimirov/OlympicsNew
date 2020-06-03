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
          <Headline title="AUBG Olympics Olympiad" />
          <div class="row">
            <div class="col-6">
              <div class="count">
                <Countdown />
              </div>
              <div class="sign-up">
                <div className="sports-redirect">
                  <img src={flame} alt="flame" />
                  <h6>
                    Follow the fire:{" "}
                    <p>
                      {" "}
                      <NavScroll
                        className="nav-link"
                        link="sports"
                        name="here"
                      />
                    </p>
                  </h6>
                </div>
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
