import React from "react";
import Sports from "./Sports";
import Dodgeball from "../resources/sports/dodgeball.png";
import Arm from "../resources/sports/arm.jpg";
import Bowling from "../resources/sports/bowling.jpg";
import Headline from "../sources/Headline";
import "../static/SportsData.css";
import DodgeballSignUp from "./sports/DodgeballSignUp";

function SportsData() {
  return (
    <div id="sports" className="sports">
      <Headline title="Sports" />
      <ul>
        <li>
          <div class="sport-container">
            <Sports img={Dodgeball} alt="Dodgeball" title="Dodgeball" />
            <div class="sports-span">
              <DodgeballSignUp />
            </div>
          </div>
        </li>
        <li>
          <Sports
            img={Arm}
            alt="Arm"
            url="https://www.google.com"
            title="Arm"
          />
        </li>
        <li>
          <Sports
            img={Bowling}
            alt="Bowling"
            url="https://www.google.com"
            title="Bowling"
          />
        </li>
        <li>
          <Sports
            img={Bowling}
            alt="Bowling"
            url="https://www.google.com"
            title="Bowling"
          />
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default SportsData;
