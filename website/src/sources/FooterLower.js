import React, { Component } from "react";
import "../static/Footer.css";

class FooterLower extends Component {
  showCurrentYear() {
    var year = new Date().getFullYear();
    return year;
  }
  render() {
    return (
      <div className="FooterLower">
        <div class="copyright">
          <p>Copyright &copy; AUBG Olympics {this.showCurrentYear()}</p>
        </div>
      </div>
    );
  }
}

export default FooterLower;
