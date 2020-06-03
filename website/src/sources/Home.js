import React, { Component } from "react";
import "../static/Home.css";
import About from "../sources/About";
import Sponsors from "../sources/SponsorsData";
import SportsData from "../sources/SportsData";
import Crew from "../sources/Crew";
import Sign from "./Sign";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const Bounce = styled.div`animation 3s ${keyframes`${bounce}`} infinite`;

class Home extends Component {
  state = {
    renderedResponse: "",
  };

  getResponse = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  componentDidMount() {
    this.getResponse().then((res) => {
      const someData = res;
      this.setState({ renderedResponse: someData });
    });
  }
  render() {
    const { renderedResponse } = this.state;
    return (
      <div id="home" className="homeBody">
        <div className="para">
          <div class="hero">
            <Bounce>
              <h1>AUBG OLYMPICS</h1>
            </Bounce>
          </div>
          <div class="image-overlay"></div>
        </div>
        <div className="para">
          <About />
        </div>
        <div className="para">
          <div className="challenges">
            <h1>This week's special</h1>
            <p>&#128293;What: DOOGEBALL CHALLENGE</p>
            <p>&#128293;When: WEDNESDAY 7:30PM</p>
            <p>&#128293;Where: AUBG SPORTS HALL</p>
            {/* <Sign /> */}
          </div>
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
