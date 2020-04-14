import React from "react";
import Sports from "./Sports";
import swimming from "../resources/sports/swimming.png";
import basketball from "../resources/sports/basketball.png";
import Footbal from "../resources/sports/Football.png";
import volleyball from "../resources/sports/volleyball.png";
import running from "../resources/sports/running.png";
import Headline from "../sources/Headline";
import "../static/SportsData.css";
import DodgeballSignUp from "./sports/DodgeballSignUp";

function SportsData(props) {
  return (
    <li>
      <div
        class="carreaux_presentation_light"
        style={{
          backgroundImage: `url(${props.img})`,
        }}
      >
        <div class="shadow_swhow_mini">
          <div class="deroul_titre">{props.text}</div>
          <div class="deroul_soustitre">
            {" "}
            <DodgeballSignUp />
          </div>
        </div>
      </div>
    </li>
  );
}

export default SportsData;
