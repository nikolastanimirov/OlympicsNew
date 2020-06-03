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
              Established: 15 years ago.. Today, the club organizes the only
              all-university sports event, which includes 15 disciplines, played
              in a competitive atmosphere. The event opens with an on-campus
              celebration that involves the whole AUBG community and displays
              various talents and spectacle to recreate the university spirit
              and to raise attention for the upcoming local Olympiad
            </div>
            <div class="col">
              <div class="number">
                <a href="https://www.facebook.com/aubgolympics">
                  <img src={FacebookIcon} alt="facebook" />
                </a>
                <h6>Facebook</h6>
              </div>
              <div class="number">
                <a href="https://www.instagram.com/aubg_olympics">
                  <img src={InstagramIcon} alt="instagram" />
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
