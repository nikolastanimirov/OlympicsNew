import React, { Component } from "react";
import Headline from "../sources/Headline";
import Carousel from "./Carousel";
class Crew extends Component {
  render() {
    return (
      <div id="crew">
        <div class="container">
          <div class="row">
            <div class="col">
              {" "}
              <Headline title="Crew" />{" "}
            </div>
          </div>
        </div>
        <Carousel />
      </div>
    );
  }
}

export default Crew;
