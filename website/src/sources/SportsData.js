import React from "react";
import Sports from "./Sports";
import Dodgeball from "../resources/sports/dodgeball.jpg";
import Arm from "../resources/sports/arm.jpg";
import Bowling from "../resources/sports/bowling.jpg";
import Headline from "../sources/Headline";
import "../static/SportsData.css";

function SportsData() {
  return (
    <div className="sports">
      <Headline title="Sports" />
      <ul>
        <li>
          <Sports
            img={Dodgeball}
            alt="Dodgeball"
            url="https://www.google.com"
            title="Dodgeball"
            link="#"
          />
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
      </ul>
    </div>
  );
}

export default SportsData;
