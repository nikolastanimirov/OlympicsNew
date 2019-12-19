import React, { Component } from "react";
import "../static/Home.css";
import About from "../sources/About";
import Sponsors from "../sources/SponsorsData";
import SportsData from "../sources/SportsData";
class Home extends Component {
  render() {
    return (
      <div class="homeBody">
        <div class="para">
          <h2 class="first">AUBG Olympics</h2>
        </div>
        <div class="para">
          <About />
        </div>
        <div class="para">
          <h2>DIV 3</h2>
        </div>
        <div class="para">
          <SportsData />
        </div>
        <div class="para">
          <Sponsors />
        </div>
      </div>
    );
  }
}

export default Home;
