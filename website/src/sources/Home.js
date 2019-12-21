import React, { Component } from "react";
import "../static/Home.css";
import About from "../sources/About";
import Sponsors from "../sources/SponsorsData";
import SportsData from "../sources/SportsData";
import NavScroll from "../sources/NavScroll";
import Crew from "../sources/Crew";
import Sign from "./Sign";
class Home extends Component {
  render() {
    return (
      <div id="home" className="homeBody">
        <div className="para">
          <div className="first">
            <h2>AUBG Olympics</h2>
            <hr size="2px" width="75%" />
            <h3>Checkout the events we organize</h3>
            {"\n"}
            <button class="btn btn-warning">
              <NavScroll className="nav-link" link="about" name="Events" />
            </button>
          </div>
        </div>
        <div className="para">
          <About />
        </div>
        <div className="para">
          <h2>
            <Sign />
          </h2>
        </div>
        <div className="para">
          <SportsData />
        </div>
        <div className="para">
          <Sponsors />
        </div>
        <div className="para">
          <Crew />
        </div>
      </div>
    );
  }
}

export default Home;
