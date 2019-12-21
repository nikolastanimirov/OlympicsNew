import React, { Component } from "react";
import "../static/Footer.css";
import FacebookIcon from "../resources/icons/facebook.png";
import InstagramIcon from "../resources/icons/instagram.png";
class FooterUpper extends Component {
  render() {
    return (
      <div className="FooterUpper">
        <div class="container-footer">
          <div class="row">
            <div class="col">
              <h2>Olympics</h2>
            </div>
            <div class="col">
              <h2>Follow us:</h2>
            </div>
            <div class="w-100"></div>
            <div class="col">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div class="col">
              <div class="number">
                <a href="https://www.facebook.com/aubgolympics">
                  <img src={FacebookIcon} />
                </a>
                <h6>Facebook</h6>
              </div>
              <div class="number">
                <a href="https://www.instagram.com/aubg_olympics">
                  <img src={InstagramIcon} />
                </a>
                <h6>Instagram</h6>
              </div>
            </div>
            <div class="w-100"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterUpper;
