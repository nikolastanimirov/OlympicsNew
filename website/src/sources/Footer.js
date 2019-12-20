import React, { Component } from "react";
import FooterUpper from "./FooterUpper";
import FooterLower from "./FooterLower";
import "../static/Footer.css";
class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="footer-upper">
            <FooterUpper />
          </div>
          <div className="lower-footer">
            <FooterLower />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
