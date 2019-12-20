import React, { Component } from "react";
import "../static/Footer.css";
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
              <li>Facebook</li>
              <li>Instagram</li>
              <li>something</li>
            </div>
            <div class="w-100"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterUpper;
